<%*
// 1. 获取输入
const input = await tp.system.prompt("📝 速记 (留空则仅添加时间戳)");
if (input == null) return; // 按ESC退出

// 2. 准备数据
const folder = "00.Inbox";
const filename = `Daily Draft ${tp.date.now("YYYY-MM-DD")}`;
const time = tp.date.now("HH:mm");

// 构造内容
let content = `### ${time}`;
if (input.trim().length > 0) content += ` ${input}`;
content += "\n";

// 3. 寻找目标文件
const targetFile = tp.file.find_tfile(filename);

if (targetFile) {
    // =================================================
    // 情况 A: 日记已存在 -> 追加内容，并清理现场
    // =================================================
    
    // 1. 追加内容到目标文件
    await app.vault.append(targetFile, "\n" + content);
    
    // 2. 打开目标文件
    await app.workspace.activeLeaf.openFile(targetFile);
    
    // 3. 光标滚动到底部
    const view = app.workspace.getActiveViewOfType(MarkdownView);
    if (view) {
        view.editor.setCursor(view.editor.lineCount(), 0);
        view.editor.focus();
    }

    // 4. 【关键】删掉那个自动生成的 Untitled
    // tp.config.target_file 就是脚本当前运行所在的那个文件
    const current = tp.config.target_file;
    if (current && current.basename.startsWith("Untitled") && current.stat.size === 0) {
        await app.vault.trash(current, true);
    }

} else {
    // =================================================
    // 情况 B: 日记不存在 -> 原地变身
    // =================================================
    
    // 1. 把当前的 Untitled 移动并重命名为 Daily Draft
    // (Templater 会自动处理路径，如果文件夹不存在会自动创建)
    await tp.file.move(`${folder}/${filename}`);
    
    // 2. 使用标准输出写入内容
    // 这种方式光标绝对稳，因为你就在当前文件里
    tR += content;
}
%>
