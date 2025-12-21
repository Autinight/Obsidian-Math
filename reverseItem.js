module.exports = async (params) => {
    const { app } = params;
    const activeLeaf = app.workspace.activeLeaf;
    if (!activeLeaf || activeLeaf.view.getViewType() !== "markdown") {
        new Notice("脚本运行失败: 请打开一个 Markdown 笔记.");
        return;
    }
    const editor = activeLeaf.view.editor;
    const text = editor.getValue();
    const lines = text.split("\n");
    
    let newLines = [];
    
    // 状态变量
    let inList = false;
    let currentType = null; // "enumerate" 或 "itemize"
    let currentPrefix = ""; // 存储引用前缀 (如 "> ")

    // 正则表达式
    const orderedRegex = /^(\s*(?:>\s*)*)(\d+)\.\s+(.*)$/;
    const unorderedRegex = /^(\s*(?:>\s*)*)([-*+])\s+(.*)$/;

    let hasChanged = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const isBlankLine = line.trim().length === 0; // 判断是否为空行
        
        // 尝试匹配两种列表
        const orderedMatch = line.match(orderedRegex);
        const unorderedMatch = line.match(unorderedRegex);
        
        let matchType = null;
        let matchPrefix = "";
        let matchContent = "";

        if (orderedMatch) {
            matchType = "enumerate";
            matchPrefix = orderedMatch[1];
            matchContent = orderedMatch[3];
        } else if (unorderedMatch) {
            matchType = "itemize";
            matchPrefix = unorderedMatch[1];
            matchContent = unorderedMatch[3];
        }

        if (matchType) {
            // --- 情况 A: 命中列表行 (属于列表流形的图表) ---
            
            if (!inList) {
                // 开启新列表
                newLines.push(`${matchPrefix}\\begin{${matchType}}`);
                inList = true;
                currentType = matchType;
                currentPrefix = matchPrefix;
            } else {
                // 检查是否需要切换环境 (例如从无序变为有序, 或引用层级改变)
                if (currentType !== matchType || currentPrefix !== matchPrefix) {
                    newLines.push(`${currentPrefix}\\end{${currentType}}`);
                    newLines.push(`${matchPrefix}\\begin{${matchType}}`);
                    currentType = matchType;
                    currentPrefix = matchPrefix;
                }
            }

            // 插入列表项
            newLines.push(`${matchPrefix}    \\item ${matchContent}`);
            hasChanged = true;

        } else if (inList && isBlankLine) {
            // --- 情况 B: 命中空行且当前在列表中 (列表内部的空隙) ---
            // 关键修改: 不要关闭列表, 只是保留空行.
            // 这允许列表跨越空行保持连通.
            newLines.push(line);
            
        } else {
            // --- 情况 C: 命中非列表内容 (遇到了边界) ---
            if (inList) {
                // 关闭当前列表
                newLines.push(`${currentPrefix}\\end{${currentType}}`);
                inList = false;
                currentType = null;
                currentPrefix = "";
            }
            newLines.push(line);
        }
    }

    // 循环结束后的收尾检查 (处理文件末尾的边界项)
    if (inList) {
        newLines.push(`${currentPrefix}\\end{${currentType}}`);
    }

    if (hasChanged) {
        editor.setValue(newLines.join("\n"));
        new Notice("转换完成: 列表已转换为 LaTeX 环境.");
    } else {
        new Notice("未发现需要转换的列表.");
    }
};
