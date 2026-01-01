<%*
// 1. 弹出输入框获取标题
let title = await tp.system.prompt("请输入文件名 (例如: thm - Gauss-Bonnet)");

// --- 修改点：如果输入为空或点击取消，直接结束脚本 ---
if (title == null || title.trim() === "") {
    // 可选：如果这是一个新建的空白文件，且你想在取消时直接删除它，可以取消下面这行的注释
    // await app.vault.trash(tp.file.find_tfile(tp.file.path), true);
    
    new Notice("未输入文件名，已取消。"); // 弹出提示
    return; // 停止执行后续代码
}
// -------------------------------------------------

// 2. 定义映射关系
const mapping = {
    "dfn": "definition",
    "pps": "proposition",
    "lem": "lemma",
    "thm": "theorem",
    "ep": "example"
};

// 3. 正则表达式提取前缀和别名
const match = title.match(/^(dfn|pps|lem|thm|ep)\s*[-—]?\s*(.*)/i);

// 默认类型
let noteType = "concept"; 
let alias = title;

if (match) {
    const prefix = match[1].toLowerCase();
    // 如果匹配到了前缀，使用映射表中的类型
    noteType = mapping[prefix]; 
    alias = match[2];
}

// 4. 核心功能: 移动文件到 00.Inbox 并重命名
const targetFolder = "00.Inbox";
// 建议先重命名，再输出内容
await tp.file.move(`${targetFolder}/${title}`);

// 5. 输出 YAML 内容 (移入 JS 内部控制，确保取消时不输出)
tR += `---
type: ${noteType}
aliases: [${alias}]
---`;
%>
