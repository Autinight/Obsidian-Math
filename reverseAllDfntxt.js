module.exports = async (params) => {
    // 1. 获取当前的 Markdown 编辑器实例
    // 这里的 app 变量在 Obsidian 的插件执行环境中通常是全局可用的
    const view = app.workspace.activeLeaf.view;
    
    // 简单的检查: 确保当前是在编辑 Markdown 文件
    if (!view || view.getViewType() !== 'markdown') {
        new Notice("脚本运行失败: 请打开一个 Markdown 笔记.");
        return;
    }

    const editor = view.editor;

    // 2. 获取当前笔记的全文内容
    const originalContent = editor.getValue();

    // 3. 定义正则表达式
    // 解读: 
    // \*\*  匹配开头的两个星号 (因为 * 在正则中是特殊字符, 需要转义)
    // (.*?) 捕获组, 匹配中间的任意字符. ? 表示非贪婪模式, 遇到下一个 ** 即停止
    // \*\*  匹配结尾的两个星号
    // g     代表全局匹配
    const regex = /\*\*(.*?)\*\*/g;

    // 4. 执行替换逻辑
    // "$1" 代表正则表达式中第一个括号捕获的内容
    // 注意: 在字符串中写反斜杠需要双写, 即 "\\" 输出为 "\"
    const newContent = originalContent.replace(regex, "\\dfntxt{$1}");

    // 5. 应用更改
    if (originalContent !== newContent) {
        editor.setValue(newContent);
        new Notice("成功: 全文加粗 Markdown 已还原为 LaTeX 定义!");
    } else {
        new Notice("提示: 未找到需要转换的加粗内容.");
    }
}
