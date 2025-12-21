module.exports = async (params) => {
    const { app } = params;
    const activeLeaf = app.workspace.activeLeaf;
    if (!activeLeaf || activeLeaf.view.getViewType() !== "markdown") {
        new Notice("未找到活动的 Markdown 文件.");
        return;
    }
    const editor = activeLeaf.view.editor;
    const text = editor.getValue();
    const lines = text.split("\n");
    let newLines = [];
    let hasChanged = false;

    // --- 配置映射关系 ---
    const reverseNumberedMap = {
        "cite": "axiom", 
        "theorem": "theorem", 
        "lemma": "lemma", 
        "definition": "definition",
        "proposition": "proposition", 
        "corollary": "corollary", 
        "example": "example",
        "exercise": "exercise",
        "conjecture": "conjecture"
    };
    
    const unnumberedTypes = new Set(["proof", "sketchproof", "solution", "remark", "note"]);

    // --- 状态机变量 ---
    let inCallout = false;
    let calloutBuffer = [];
    let calloutHeader = null; 

    // --- 辅助函数: 处理并生成 LaTeX 块 ---
    const processBuffer = () => {
        if (!calloutHeader) return;

        let { type, isFoldable, rawTitle } = calloutHeader;
        
        let contentLines = [];
        let label = "";

        // 1. 提取内容 (去除引用符号)
        for (let i = 0; i < calloutBuffer.length; i++) {
            let line = calloutBuffer[i];
            if (line.startsWith("> ")) line = line.substring(2);
            else if (line === ">") line = "";
            else if (line.startsWith(">")) line = line.substring(1);
            
            // 优化点1: 去除每行末尾的空格 (防止 \\ 后面有空格导致问题)
            contentLines.push(line.trimEnd());
        }

        // 2. 提取尾部 Label (^label-name)
        if (contentLines.length > 0) {
            const lastLine = contentLines[contentLines.length - 1];
            const labelMatch = lastLine.match(/\^([a-zA-Z0-9\-_]+)$/);
            if (labelMatch) {
                label = labelMatch[1];
                if (lastLine === labelMatch[0]) {
                    contentLines.pop(); 
                } else {
                    contentLines[contentLines.length - 1] = lastLine.replace(labelMatch[0], "").trimEnd();
                }
            }
        }

        // --- 核心优化开始: 智能移除导致编译失败的空行 ---
        
        // 3. 移除紧邻结束标记前的空行
        // 场景: 
        //   x &= y \\
        //   (空行)
        //   \end{aligned}
        // 这种空行会导致 LaTeX 报错 "Paragraph ended before \end{aligned} was complete"
        for (let k = contentLines.length - 2; k >= 0; k--) {
            const currentLine = contentLines[k];
            const nextLine = contentLines[k+1];
            
            // 如果当前行是空行，且下一行是环境结束标记或公式结束标记
            if (currentLine === "" && (nextLine.startsWith("\\end{") || nextLine.startsWith("$$") || nextLine.startsWith("\\]"))) {
                contentLines.splice(k, 1); // 删除该空行
            }
        }

        // 4. 移除内容首尾的多余空行 (保持代码整洁)
        while (contentLines.length > 0 && contentLines[contentLines.length - 1] === "") {
            contentLines.pop();
        }
        while (contentLines.length > 0 && contentLines[0] === "") {
            contentLines.shift();
        }
        // --- 核心优化结束 ---

        let body = contentLines.join("\n");
        let latexBlock = "";
        
        // 情况 A: 编号环境
        if (reverseNumberedMap.hasOwnProperty(type)) {
            const latexEnv = reverseNumberedMap[type];
            let cleanTitle = rawTitle.trim();
            const prefixRegex = new RegExp(`^${latexEnv}[:\\s]*`, "i");
            if (prefixRegex.test(cleanTitle)) {
                cleanTitle = cleanTitle.replace(prefixRegex, "").trim();
            }
            latexBlock = `\\begin{${latexEnv}}{${cleanTitle}}{${label}}\n${body}\n\\end{${latexEnv}}`;
        } 
        // 情况 B: 无编号环境
        else if (unnumberedTypes.has(type)) {
            let cleanTitle = rawTitle.trim();
            let optArg = "";
            if ((type === "proof" || type === "solution") && cleanTitle.endsWith(":")) {
                 cleanTitle = cleanTitle.slice(0, -1).trim();
            }
            if (cleanTitle.toLowerCase() !== type && cleanTitle !== "") {
                optArg = `[${cleanTitle}]`;
            }
            latexBlock = `\\begin{${type}}${optArg}\n${body}\n\\end{${type}}`;
        } 
        // 情况 C: 未知类型
        else {
            let originalHeader = `> [!${type}]${isFoldable} ${rawTitle}`;
            latexBlock = originalHeader + "\n" + contentLines.map(l => `> ${l}`).join("\n");
        }

        newLines.push(latexBlock);
    };

    // --- 主循环 ---
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const calloutMatch = line.match(/^>\s*\[!\s*([a-zA-Z0-9]+)\s*\](-?)\s*(.*)$/);

        if (calloutMatch) {
            const rawType = calloutMatch[1];
            const type = rawType.toLowerCase();

            if (reverseNumberedMap.hasOwnProperty(type) || unnumberedTypes.has(type)) {
                if (inCallout) processBuffer();
                
                inCallout = true;
                hasChanged = true;
                calloutHeader = {
                    type: type,
                    isFoldable: calloutMatch[2],
                    rawTitle: calloutMatch[3]
                };
                calloutBuffer = [];
                continue;
            }
        }

        if (inCallout) {
            if (line.trim().startsWith(">")) {
                calloutBuffer.push(line);
            } 
            else if (line.trim() === "") {
                calloutBuffer.push(">"); 
            } 
            else {
                processBuffer();
                inCallout = false;
                calloutHeader = null;
                calloutBuffer = [];
                newLines.push(line);
            }
        } else {
            newLines.push(line);
        }
    }

    if (inCallout) processBuffer();

    if (hasChanged) {
        editor.setValue(newLines.join("\n"));
        new Notice("LaTeX 环境转换完成 (已优化空行处理).");
    } else {
        new Notice("未发现可转换的数学环境.");
    }
};
