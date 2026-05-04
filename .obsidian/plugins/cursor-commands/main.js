const { Plugin } = require('obsidian');

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getLineLength(editor, line) {
  if (line < 0 || line > editor.lastLine()) return 0;
  return editor.getLine(line).length;
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

module.exports = class CursorCommandsPlugin extends Plugin {
  onload() {
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
};
