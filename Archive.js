module.exports = async (params) => {
    const { app } = params;
    
    // ================= 核心配置区域 =================
    const sourceFolder = "00.Inbox/00.Complished"; // 源文件夹路径
    const defaultTarget = "20.Cards/Concepts";     // 默认目标文件夹
    const draftBaseFolder = "40.Drafts";           // Draft的基础文件夹路径
    const chapterBaseFolder = "11.Chapter Notes";  // ✅ Chapter Notes 基础路径
    
    // 定义前缀和目标文件夹的对应关系
    const mappings = [
        { prefix: "thm -", target: "20.Cards/Theorems" },
        { prefix: "pps -", target: "20.Cards/Propositions" },
        { prefix: "lem -", target: "20.Cards/Lemmas" },
        { prefix: "dfn -", target: "20.Cards/Definitions" },
        { prefix: "ep -",  target: "20.Cards/Examples" },
        { prefix: "tec -", target: "20.Cards/Techniques" },
        { prefix: "ex -",  target: "20.Cards/Exercises" },
    ];
    // ==============================================

    // 1. 获取源文件夹中的所有文件
    const files = app.vault.getFiles().filter(f => f.parent.path === sourceFolder);

    if (files.length === 0) {
        new Notice("00.Complished是空的，无需整理。");
        return;
    }

    let moveCount = 0;

    // 2. 遍历文件并匹配规则
    for (const file of files) {
        let targetFolder;

        // 优先级 1: Daily Draft YYYY-MM-DD
        const draftMatch = file.name.match(/^Daily Draft (\d{4}-\d{2}-\d{2})/);

        if (draftMatch) {
            const monthStr = draftMatch[1].substring(0, 7); 
            targetFolder = `${draftBaseFolder}/${monthStr}`;
        }

        // ✅ 优先级 2: Chapter Notes (chnt -)，读取 YAML 中的 book
        else if (file.name.startsWith("chnt -")) {
            const cache = app.metadataCache.getFileCache(file);
            const book = cache?.frontmatter?.book;

            if (!book) {
                new Notice(`⚠️ ${file.name} 缺少 YAML 中的 book 字段，已跳过`);
                continue;
            }

            targetFolder = `${chapterBaseFolder}/${book}`;
        }

        // 优先级 3: 其他前缀映射
        else {
            const match = mappings.find(rule => file.name.startsWith(rule.prefix));
            targetFolder = match ? match.target : defaultTarget;
        }
        
        const targetPath = `${targetFolder}/${file.name}`;
        
        // 检查目标文件夹是否存在同名文件
        const existingFile = app.vault.getAbstractFileByPath(targetPath);

        if (!existingFile) {
            // ✅ 确保多级文件夹存在（支持 11.Chapter Notes/{book}）
            await ensureFolderExists(app, targetFolder);

            // 执行移动
            await app.fileManager.renameFile(file, targetPath);
            moveCount++;
        } else {
            console.log(`跳过: ${file.name} (目标位置 ${targetFolder} 已存在同名文件)`);
        }
    }

    // 3. 发送通知
    if (moveCount > 0) {
        new Notice(`整理完成：共移动 ${moveCount} 个文件。`);
    } else {
        new Notice("没有移动任何文件 (目标可能已存在同名文件)。");
    }
}

// 【辅助函数】确保文件夹存在（支持多级创建）
async function ensureFolderExists(app, folderPath) {
    const parts = folderPath.split("/");
    let currentPath = "";

    for (const part of parts) {
        currentPath = currentPath ? `${currentPath}/${part}` : part;
        const folder = app.vault.getAbstractFileByPath(currentPath);
        if (!folder) {
            await app.vault.createFolder(currentPath);
        }
    }
}