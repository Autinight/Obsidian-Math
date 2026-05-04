const { Plugin, PluginSettingTab, Setting } = require('obsidian');

const DEFAULT_SETTINGS = {
  includeUnderscore: true,
  extraWordCharacters: '',
  lettersOnlyWordMovement: false,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getLineLength(editor, line) {
  if (line < 0 || line > editor.lastLine()) return 0;
  return editor.getLine(line).length;
}

function isWhitespaceCharacter(char) {
  return /\s/u.test(char);
}

function getTokenType(char, settings) {
  if (isWhitespaceCharacter(char)) return 'whitespace';
  if (settings.lettersOnlyWordMovement) {
    if (/[A-Za-z]/.test(char)) return 'word';
    if (/[0-9]/.test(char)) return 'number';
    return 'symbol';
  }
  if (/\p{L}/u.test(char)) return 'word';
  if (/\p{N}/u.test(char)) return 'number';
  if (settings.includeUnderscore && char === '_') return 'word';
  if (new Set(Array.from(settings.extraWordCharacters || '')).has(char)) return 'word';
  return 'symbol';
}

function moveLeft(editor) {
  const cursor = editor.getCursor();
  if (cursor.ch > 0) {
    editor.setCursor({ line: cursor.line, ch: cursor.ch - 1 });
    return;
  }
  if (cursor.line > 0) {
    const prevLine = cursor.line - 1;
    editor.setCursor({ line: prevLine, ch: getLineLength(editor, prevLine) });
  }
}

function moveRight(editor) {
  const cursor = editor.getCursor();
  const lineLength = getLineLength(editor, cursor.line);
  if (cursor.ch < lineLength) {
    editor.setCursor({ line: cursor.line, ch: cursor.ch + 1 });
    return;
  }
  if (cursor.line < editor.lastLine()) {
    editor.setCursor({ line: cursor.line + 1, ch: 0 });
  }
}

function getDocumentTextBeforeCursor(editor, cursor) {
  const lines = [];
  for (let line = 0; line < cursor.line; line += 1) {
    lines.push(editor.getLine(line));
  }
  lines.push(editor.getLine(cursor.line).slice(0, cursor.ch));
  return lines.join('\n');
}

function getDocumentTextAfterCursor(editor, cursor) {
  const lines = [editor.getLine(cursor.line).slice(cursor.ch)];
  for (let line = cursor.line + 1; line <= editor.lastLine(); line += 1) {
    lines.push(editor.getLine(line));
  }
  return lines.join('\n');
}

function offsetToCursor(editor, offset) {
  let remaining = Math.max(0, offset);
  for (let line = 0; line <= editor.lastLine(); line += 1) {
    const lineLength = getLineLength(editor, line);
    if (remaining <= lineLength) {
      return { line, ch: remaining };
    }
    remaining -= lineLength + 1;
  }
  const lastLine = editor.lastLine();
  return { line: lastLine, ch: getLineLength(editor, lastLine) };
}

function cursorToOffset(editor, cursor) {
  let offset = cursor.ch;
  for (let line = 0; line < cursor.line; line += 1) {
    offset += getLineLength(editor, line) + 1;
  }
  return offset;
}

function moveWordLeft(editor, settings) {
  const cursor = editor.getCursor();
  const before = getDocumentTextBeforeCursor(editor, cursor);
  let index = before.length;

  while (index > 0 && getTokenType(before[index - 1], settings) === 'whitespace') {
    index -= 1;
  }

  if (index === 0) {
    editor.setCursor(offsetToCursor(editor, 0));
    return;
  }

  const tokenType = getTokenType(before[index - 1], settings);
  while (index > 0 && getTokenType(before[index - 1], settings) === tokenType) {
    index -= 1;
  }

  editor.setCursor(offsetToCursor(editor, index));
}

function moveWordRight(editor, settings) {
  const cursor = editor.getCursor();
  const after = getDocumentTextAfterCursor(editor, cursor);
  let index = 0;

  while (index < after.length && getTokenType(after[index], settings) === 'whitespace') {
    index += 1;
  }

  if (index >= after.length) {
    editor.setCursor(offsetToCursor(editor, cursorToOffset(editor, cursor) + index));
    return;
  }

  const tokenType = getTokenType(after[index], settings);
  while (index < after.length && getTokenType(after[index], settings) === tokenType) {
    index += 1;
  }

  editor.setCursor(offsetToCursor(editor, cursorToOffset(editor, cursor) + index));
}

function moveVertical(editor, delta) {
  const cursor = editor.getCursor();
  const targetLine = clamp(cursor.line + delta, 0, editor.lastLine());
  const targetCh = clamp(cursor.ch, 0, getLineLength(editor, targetLine));
  editor.setCursor({ line: targetLine, ch: targetCh });
}

function moveLineStart(editor) {
  const cursor = editor.getCursor();
  editor.setCursor({ line: cursor.line, ch: 0 });
}

function moveLineEnd(editor) {
  const cursor = editor.getCursor();
  editor.setCursor({ line: cursor.line, ch: getLineLength(editor, cursor.line) });
}

function moveDocumentStart(editor) {
  editor.setCursor({ line: 0, ch: 0 });
}

function moveDocumentEnd(editor) {
  const lastLine = editor.lastLine();
  editor.setCursor({ line: lastLine, ch: getLineLength(editor, lastLine) });
}

class CursorCommandsSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    containerEl.createEl('h2', { text: 'Cursor Commands' });

    new Setting(containerEl)
      .setName('English letters only for word movement')
      .setDesc('When enabled, only A-Z and a-z count as word characters. Numbers, Chinese characters, underscore, and extra characters become separate non-letter tokens for word movement.')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.lettersOnlyWordMovement)
          .onChange(async (value) => {
            this.plugin.settings.lettersOnlyWordMovement = value;
            await this.plugin.saveSettings();
            this.display();
          }),
      );

    new Setting(containerEl)
      .setName('Include underscore in word movement')
      .setDesc('When enabled, _ counts as part of a word for Cursor word left/right. Ignored when English letters only is enabled.')
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.includeUnderscore)
          .onChange(async (value) => {
            this.plugin.settings.includeUnderscore = value;
            await this.plugin.saveSettings();
            this.display();
          }),
      );

    new Setting(containerEl)
      .setName('Extra word characters')
      .setDesc('Any additional characters to treat as part of a word, for example - or . Disabled when English letters only is enabled.')
      .addText((text) => {
        text
          .setPlaceholder('-')
          .setValue(this.plugin.settings.extraWordCharacters)
          .onChange(async (value) => {
            this.plugin.settings.extraWordCharacters = value;
            await this.plugin.saveSettings();
          });

        if (this.plugin.settings.lettersOnlyWordMovement) {
          text.setDisabled(true);
        }
      });
  }
}

module.exports = class CursorCommandsPlugin extends Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());

    this.addSettingTab(new CursorCommandsSettingTab(this.app, this));

    this.addCommand({
      id: 'cursor-left',
      name: 'Cursor left',
      editorCallback: (editor) => moveLeft(editor),
    });

    this.addCommand({
      id: 'cursor-right',
      name: 'Cursor right',
      editorCallback: (editor) => moveRight(editor),
    });

    this.addCommand({
      id: 'cursor-word-left',
      name: 'Cursor word left',
      editorCallback: (editor) => moveWordLeft(editor, this.settings),
    });

    this.addCommand({
      id: 'cursor-word-right',
      name: 'Cursor word right',
      editorCallback: (editor) => moveWordRight(editor, this.settings),
    });

    this.addCommand({
      id: 'cursor-up',
      name: 'Cursor up',
      editorCallback: (editor) => moveVertical(editor, -1),
    });

    this.addCommand({
      id: 'cursor-down',
      name: 'Cursor down',
      editorCallback: (editor) => moveVertical(editor, 1),
    });

    this.addCommand({
      id: 'cursor-line-start',
      name: 'Cursor line start',
      editorCallback: (editor) => moveLineStart(editor),
    });

    this.addCommand({
      id: 'cursor-line-end',
      name: 'Cursor line end',
      editorCallback: (editor) => moveLineEnd(editor),
    });

    this.addCommand({
      id: 'cursor-document-start',
      name: 'Cursor document start',
      editorCallback: (editor) => moveDocumentStart(editor),
    });

    this.addCommand({
      id: 'cursor-document-end',
      name: 'Cursor document end',
      editorCallback: (editor) => moveDocumentEnd(editor),
    });
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
};
