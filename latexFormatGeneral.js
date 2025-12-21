module.exports = async (params) => {
    const { app } = params;
    const activeLeaf = app.workspace.activeLeaf;
    if (!activeLeaf || activeLeaf.view.getViewType() !== "markdown") {
        new Notice("未找到活动的 Markdown 文件.");
        return;
    }
    const editor = activeLeaf.view.editor;
    let text = editor.getValue();
    let hasChanged = false;

    // ==========================================
    // 1. 替换行间公式 \[ ... \] -> $$ ... $$
    // ==========================================
    const displayMathRegex = /\\\[([\s\S]*?)\\\]/g;
    if (text.match(displayMathRegex)) {
        text = text.replace(displayMathRegex, (match, content) => {
            let cleanContent = content.trim();
            // 确保 $$ 独占一行, 且前后有空行, 防止粘连
            return `\n\n$$\n${cleanContent}\n$$\n\n`; 
        });
        hasChanged = true;
    }

    // ==========================================
    // 2. 替换行内公式 \( ... \) -> $ ... $
    // ==========================================
    const inlineMathRegex = /\\\((.*?)\\\)/g;
    if (text.match(inlineMathRegex)) {
        text = text.replace(inlineMathRegex, (match, content) => {
            return `$${content.trim()}$`;
        });
        hasChanged = true;
    }

    // ==========================================
    // 3. 替换 Enumerate (有序列表) - 强力修复版
    // ==========================================
    const enumRegex = /(?:\n\s*|^)\\begin\{enumerate\}((?:(?!\\begin\{enumerate\}).)*?)\\end\{enumerate\}/s;
    while (true) {
        const match = text.match(enumRegex);
        if (!match) break; 

        const fullBlock = match[0];
        const content = match[1];
        // 使用正则拆分，同时捕获可能存在的 label
        const items = content.split(/\\item/);
        
        let listMarkdown = "";
        let count = 1;

        items.forEach((item, index) => {
            // 核心修复: trim() 去掉列表项内容前后的所有空白
            let chunk = item.trim();
            if (index === 0 && chunk === "") return; 
            
            if (chunk) {
                const labelMatch = chunk.match(/^\s*\[(.*?)\]/);
                if (labelMatch) {
                    const label = labelMatch[1];
                    const actualContent = chunk.replace(/^\s*\[(.*?)\]/, '').trim();
                    // 确保列表项顶格，没有任何前置空格
                    listMarkdown += `- **${label}** ${actualContent}\n`;
                } else {
                    // 确保列表项顶格
                    listMarkdown += `${count}. ${chunk}\n`;
                    count++;
                }
            }
        });
        // 替换回去，前后加换行
        text = text.replace(fullBlock, `\n${listMarkdown}\n`);
        hasChanged = true;
    }

    // ==========================================
    // 4. 替换 Itemize (无序列表) - 强力修复版
    // ==========================================
    const itemizeRegex = /(?:\n\s*|^)\\begin\{itemize\}((?:(?!\\begin\{itemize\}).)*?)\\end\{itemize\}/s;
    while (true) {
        const match = text.match(itemizeRegex);
        if (!match) break;

        const fullBlock = match[0];
        const content = match[1];
        const items = content.split(/\\item/);
        
        let listMarkdown = "";

        items.forEach((item, index) => {
            let cleanItem = item.trim(); // 核心修复: 去除空白
            if (index === 0 && cleanItem === "") return;
            
            if (cleanItem) {
                const labelMatch = cleanItem.match(/^\s*\[(.*?)\]/);
                if (labelMatch) {
                     const label = labelMatch[1];
                     const actualContent = cleanItem.replace(/^\s*\[(.*?)\]/, '').trim();
                     listMarkdown += `- **${label}** ${actualContent}\n`;
                } else {
                    listMarkdown += `- ${cleanItem}\n`;
                }
            }
        });
        text = text.replace(fullBlock, `\n${listMarkdown}\n`);
        hasChanged = true;
    }

    if (hasChanged) {
        editor.setValue(text);
        new Notice("通用格式化完成: 列表缩进已强制清除.");
    } else {
        new Notice("未发现需要格式化的内容.");
    }
};
