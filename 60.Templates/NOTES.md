<%*
// 1. 获取输入
let title = await tp.system.prompt("请输入文件名 (例如: thm - Maximum Principle / chnt - Evans Ch05)");
if (title == null || title.trim() === "") return;
title = title.trim();

// 2. 类型映射
const mapping = {
    "dfn": "definition",
    "pps": "proposition",
    "lem": "lemma",
    "thm": "theorem",
    "ep":  "example",
    "ex": "exercise",
    "tec": "technique",
    "chnt": "chapter note"
};

// 3. 解析前缀
const match = title.match(/^(dfn|pps|lem|thm|ep|tec|ex|chnt)\s*[-—]?\s*(.*)/i);
let noteType = "concept";
let alias = title;

if (match) {
    noteType = mapping[match[1].toLowerCase()];
    alias = match[2].trim();
}

// ✅ 4. chapter note 自动解析 book + chapter
let book = "";
let chapter = "";

if (noteType === "chapter note") {

    const chMatch = alias.match(/(.*)\s+[Cc]h(?:apter)?\s*0*([0-9]+)$/);

    if (chMatch) {
        book = chMatch[1].trim();
        chapter = chMatch[2].padStart(2, "0");
        alias = book; // 去掉 Chxx
    } else {
        book = alias;
    }
}

// 5. 移动
await tp.file.move(`00.Inbox/${title}`);

// 6. YAML
tR += `---
type: ${noteType}
aliases:
- ${alias}
`;

if (noteType !== "technique" && noteType !== "chapter note") {
    tR += `technique: []\n`;
}

if (noteType === "exercise") {
    tR += `book:\nchapter:\nnumber:\ncategory:\nstatus: todo\npriority:\n`;
}

if (noteType === "chapter note") {
    tR += `book: ${book}\n`;
    tR += `chapter: ${chapter}\n`;
    tR += `status: active\n`;
}

tR += `tags: []\n`;
tR += `---\n`;


if (noteType === "chapter note") {
    tR += `

# ${alias}

## 基本信息
- 教材： \`= this.book\`
- 章节： \`= this.chapter\`
- 状态： \`= this.status\`

## 本章主线
- 

## 核心定理
1. 
2. 
3. 

## 核心工具
- 
- 
- 

## 本章打卡
- [ ] 速览
- [ ] 语言适应
- [ ] 工具入门
- [ ] 证明骨架
- [ ] 边界扩展（主动挖掘证明细节）
- [ ] 工具深化
- [ ] 例子训练
- [ ] 收尾

---

## 本章习题

### 全部习题
\`\`\`dataview
TABLE number as "题号", category as "分类", status as "状态", priority as "优先级"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter
SORT number ASC
\`\`\`

### 未完成
\`\`\`dataview
TABLE number as "题号", category as "分类", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND status != "done"
SORT number ASC
\`\`\`

### 语言适应性训练
\`\`\`dataview
TABLE number as "题号", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND category = "language"
SORT number ASC
\`\`\`

### 工具内化训练
\`\`\`dataview
TABLE number as "题号", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND category = "tool"
SORT number ASC
\`\`\`

### 边界扩展探索
\`\`\`dataview
TABLE number as "题号", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND category = "boundary"
SORT number ASC
\`\`\`

### 具体实例积累
\`\`\`dataview
TABLE number as "题号", status as "状态"
FROM "20.Cards/Exercises"
WHERE type = "exercise" AND book = this.book AND chapter = this.chapter AND category = "example"
SORT number ASC
\`\`\`

---

## 本章总结
- 定理：
- 工具：
- 例子：
- 二刷：
- 一句话总结：
`;
} 
else if (noteType === "technique") {

    tR += `

### Used in:
\`\`\`dataview
TABLE type
FROM ""
WHERE contains(technique, this.aliases[0])
\`\`\`
`;
} 
else {

    tR += `

\`\`\`dataviewjs
const techs = dv.current().technique;
if (techs) {
    const techArray = dv.array(techs);
    if (techArray.length > 0) {
        dv.header(3, "Related Techniques");
        dv.list(
            dv.pages()
            .where(p => {
                return p.aliases && dv.array(p.aliases).some(a => techArray.includes(a));
            })
            .file.link
        )
    }
}
\`\`\`
`;
}
%>