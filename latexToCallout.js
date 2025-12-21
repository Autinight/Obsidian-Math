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

    const numberedMap = {
        "theorem": "theorem", "lemma": "lemma", "definition": "definition",
        "proposition": "proposition", "corollary": "corollary", 
        "example": "example", "exercise": "exercise"
    };
    const unnumberedTypes = ["proof", "sketchproof", "solution", "remark", "note"];

    // =======================================================
    // 核心辅助函数: 转换为引用块
    // =======================================================
    const convertToQuote = (content, label = "") => {
        let lines = content.split('\n');
        let resultLines = [];
        let lastLineWasEmpty = false;

        for (let i = 0; i < lines.length; i++) {
            let clean = lines[i].trim(); 

            if (clean === "") {
                if (!lastLineWasEmpty) {
                    resultLines.push(">");
                    lastLineWasEmpty = true;
                }
            } else {
                // 保护逻辑: 如果遇到公式 $$ 或 列表，且上一行不是空行，
                // 强制加一个空行，防止渲染粘连
                const needsProtection = clean.startsWith("$$") || /^\d+\./.test(clean) || /^- /.test(clean);
                
                if (needsProtection && !lastLineWasEmpty && resultLines.length > 0) {
                     resultLines.push(">");
                }

                resultLines.push(`> ${clean}`);
                
                // 保护逻辑: 公式结束后，也标记为"非空"，但如果是公式，
                // 我们通常希望公式后面也跟一个空行(除非紧接着是标点)，
                // 这里简单处理：让下一次循环决定是否加空行。
                lastLineWasEmpty = false;
            }
        }

        // 清理首尾
        if (resultLines.length > 0 && resultLines[0] === ">") resultLines.shift();
        if (resultLines.length > 0 && resultLines[resultLines.length - 1] === ">") resultLines.pop();

        let body = resultLines.join('\n');
        if (label) body += `\n> ^${label}`;
        return body;
    };

    // --- 1. 编号环境 ---
    // 改进正则: (?:\n\s*|^) 确保匹配并替换掉前面的换行符，防止堆叠
    const numberedEnvs = Object.keys(numberedMap).join("|");
    const numberedRegex = new RegExp(`(?:\\n\\s*|^)\\\\begin\\{(${numberedEnvs})\\}\\s*\\{(.*?)\\}\\s*\\{(.*?)\\}\\s*([\\s\\S]*?)\\\\end\\{\\1\\}`, "g");

    if (text.match(numberedRegex)) {
        text = text.replace(numberedRegex, (match, type, title, label, content) => {
            const calloutType = numberedMap[type] || type;
            const displayType = type.charAt(0).toUpperCase() + type.slice(1);
            const fullTitle = title ? `${displayType}: ${title}` : displayType;
            const body = convertToQuote(content, label);
            // 强制前后双换行
            return `\n\n> [!${calloutType}] ${fullTitle}\n${body}\n\n`;
        });
        hasChanged = true;
    }

    // --- 2. 无编号环境 ---
    const unnumberedEnvs = unnumberedTypes.join("|");
    const unnumberedRegex = new RegExp(`(?:\\n\\s*|^)\\\\begin\\{(${unnumberedEnvs})\\}(?:\\[(.*?)\\])?([\\s\\S]*?)\\\\end\\{\\1\\}`, "g");

    if (text.match(unnumberedRegex)) {
        text = text.replace(unnumberedRegex, (match, type, optTitle, content) => {
            const calloutType = type;
            let displayTitle = optTitle ? optTitle : (type.charAt(0).toUpperCase() + type.slice(1));
            if (!optTitle && (type === "proof" || type === "solution")) displayTitle += ":";
            const body = convertToQuote(content);
            // 强制前后双换行
            return `\n\n> [!${calloutType}]- ${displayTitle}\n${body}\n\n`;
        });
        hasChanged = true;
    }

    if (hasChanged) {
        editor.setValue(text);
        new Notice("结构化 V9: 环境隔离与渲染保护已生效.");
    } else {
        new Notice("未发现需要转换的环境.");
    }
};
