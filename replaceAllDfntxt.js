module.exports = async (params) => {
    // 1. 获取当前的 Markdown 编辑器实例
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
    // 解读: 寻找 \dfntxt{ 开头, 中间是任意字符(非贪婪模式), 以 } 结尾
    // g 代表 global (全局替换), 替换所有出现的, 而不是只替换第一个
    const regex = /\\dfntxt\{(.*?)\}/g;

    // 4. 执行替换逻辑
    // "$1" 代表正则表达式中第一个括号捕获的内容, 也就是花括号里面的字
    const newContent = originalContent.replace(regex, "**$1**");

    // 5. 应用更改
    if (originalContent !== newContent) {
        editor.setValue(newContent);
        new Notice("成功: 全文 LaTeX 定义已转换为加粗Markdown!");
    } else {
        new Notice("提示: 未找到需要转换的 \\dfntxt 内容.");
    }
}
