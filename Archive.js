module.exports = async (params) => {
    const { app } = params;
    
    // ================= 核心配置区域 =================
    const sourceFolder = "00.Inbox/00.Complished"; // 源文件夹路径
    const defaultTarget = "20.Cards/Concepts";     // 【新增】默认目标文件夹（无前缀时移动到此处）
    
    // 定义前缀和目标文件夹的对应关系
    const mappings = [
        { prefix: "thm -", target: "20.Cards/Theorems" },
        { prefix: "pps -", target: "20.Cards/Propositions" },
        { prefix: "lem -", target: "20.Cards/Lemmas" },
        { prefix: "dfn -", target: "20.Cards/Definitions" },
        { prefix: "ep -",  target: "20.Cards/Examples" }
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
        // 查找匹配规则
        const match = mappings.find(rule => file.name.startsWith(rule.prefix));

        // 【核心修改逻辑】：如果有匹配则使用匹配的target，否则使用默认target
        const targetFolder = match ? match.target : defaultTarget;
        
        const targetPath = `${targetFolder}/${file.name}`;
        
        // 检查目标文件夹是否存在同名文件
        const existingFile = app.vault.getAbstractFileByPath(targetPath);

        if (!existingFile) {
            // 检查目标文件夹本身是否存在，如果不存在则尝试创建
            const targetFolderObj = app.vault.getAbstractFileByPath(targetFolder);
            if (!targetFolderObj) {
                await app.vault.createFolder(targetFolder);
            }

            // 执行移动
            await app.fileManager.renameFile(file, targetPath);
            moveCount++;
        } else {
            console.log(`跳过: ${file.name} (目标位置 ${targetFolder} 已存在同名文件)`);
        }
    }

    // 3. 发送通知
    if (moveCount > 0) {
        new Notice(`整理完成：共移动 ${moveCount} 个文件。\n(未匹配前缀的文件已移至 Concepts)`);
    } else {
        new Notice("没有移动任何文件 (目标可能已存在同名文件)。");
    }
}
