---
name: pdf-to-obsidian
description: Convert PDF chapters to Obsidian Markdown with complete content preservation. Extracts specified sections from PDF files and converts them to Obsidian-flavored Markdown (callouts, dollar-sign math, wikilinks), saving to 00.Inbox/. Prioritizes completeness over summarization.
---
You are converting a PDF chapter/section to Obsidian Markdown format.

**Input**:
- PDF path: {{pdf_path}} (optional - will search vault if not provided)
- Section: {{section}} (e.g., "Ch2 2.3", "Section 3.1", "pages 64-68", or "from: [start text] to: [end text]")

**Workflow**:

1. **Find PDF and determine content range**
   
   If no PDF path provided:
   - Search vault for PDF files with `Glob **/*.pdf`
   - If multiple found, use AskUserQuestion tool to ask which one to use
   
   If section contains text snippets (e.g., "from: The Formal Viewpoint to: Additional Topics"):
   - Search PDF for the start and end text snippets
   - Extract all content between them
   - Skip to step 2
   
   If section is page range (e.g., "pages 64-68", "p64-68"):
   - Extract page numbers directly, skip to step 2
   
   If section is section ID (e.g., "2.3", "Ch2 2.3"):
   - Search PDF for the section pattern using PyMuPDF
   - Check table of contents to find section boundaries
   - **Extract text snippets from proposed range**:
     - Get first ~200 characters from the start page (clean, readable text)
     - Get last ~200 characters from the end page (clean, readable text)
   - **USE AskUserQuestion tool to show snippets and get confirmation**:
     - In the question text, display the text snippets from start and end
     - Provide options: "确认提取" or "我要自定义范围"
     - Example format:
     ```
     AskUserQuestion(
       questions: [{
         question: "根据分析找到 Section 2.3，请查看开头和结尾内容确认范围：\n\n【开头】The Formal Viewpoint\nSection 2.3\n161\nobvious relative form...\n\n【结尾】...Change-of-coefficient homomorphisms Hn(X; G1)→Hn(X; G2)...\n\n是否提取这个范围？",
         header: "内容确认",
         options: [
           {label: "确认提取", description: "提取显示的内容范围"},
           {label: "我要自定义", description: "通过文本片段自定义范围"}
         ],
         multiSelect: false
       }]
     )
     ```
   - If user chooses "我要自定义", ask them to provide text snippets in next message
   - **DO NOT proceed to step 2 until user confirms**

2. **Extract PDF content** (only after user confirms or provides text snippets)
   - If user provided text snippets:
     - Search PDF for start snippet, find the page and position
     - Search PDF for end snippet, find the page and position
     - Extract all text between these two positions
   - If using page range:
     - Use PyMuPDF (fitz) to extract text from confirmed page range
   - Fix common ligatures: ﬁ→fi, ﬂ→fl, ﬃ→ffi, ﬄ→ffl
   - Handle encoding with UTF-8 wrapper:
     ```python
     import sys, io
     sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
     ```
   - Save raw extracted text to `.claude/temp_pdf_extract.txt`
   - Show user first 500 characters as preview

3. **Format with obsidian-markdown skill**
   - **YOU MUST use the Skill tool to invoke obsidian-markdown**
   - Do this:
     ```
     Skill(
       skill: "obsidian-markdown",
       args: "Convert PDF extract to Obsidian markdown.
       
       Source: .claude/temp_pdf_extract.txt
       Output: 00.Inbox/[BookName] [Section].md
       
       Instructions:
       - Add YAML frontmatter: title, tags (textbook + subject), source as wikilink, section, date
       - Convert math to dollar-sign format: $inline$ and $$display$$
       - **CRITICAL: For commutative diagrams, ALWAYS use LaTeX CD environment:**
         $$\begin{CD}
         A @>f>> B \\
         @VgVV @VVhV \\
         C @>>k> D
         \end{CD}$$
       - CD syntax: @>>> (right arrow), @<<< (left arrow), @VVV (down arrow), @AAA (up arrow)
       - Can add labels: @>label>> or @VlabelVV
       - Wrap in callouts: [!axiom], [!theorem], [!definition], [!example], [!proof]
       - Add section headers with ##
       - Remove page numbers and PDF artifacts
       - Preserve all mathematical content including ALL commutative diagrams"
     )
     ```
   - **DO NOT manually write markdown** - the skill handles all formatting

4. **Verify and report**
   - Confirm file created in 00.Inbox/
   - Report to user: "Created [[00.Inbox/filename.md]]"

**Example Usage**:

User: "Extract Section 2.3 from Hatcher"
→ Find Hatcher PDF → Search for "2.3" → Extract text snippets from start and end → **USE AskUserQuestion to show snippets and get confirmation** → User confirms → Extract → Format

User: "Extract pages 64-68 from Hatcher Ch2"
→ Find PDF → Extract pages 64-68 directly (no confirmation needed) → Format

User: "from: The Formal Viewpoint to: Additional Topics"
→ Find PDF → Search for both text snippets → Extract everything between them → Format

**Commutative Diagram Syntax Reference**:

LaTeX CD environment syntax for commutative diagrams:
```latex
$$\begin{CD}
A @>f>> B @>g>> C \\
@VhVV @VViV @VVjV \\
D @>>k> E @>>l> F
\end{CD}$$
```

Arrow types:
- `@>>>` : right arrow (horizontal)
- `@<<<` : left arrow (horizontal)
- `@VVV` : down arrow (vertical)
- `@AAA` : up arrow (vertical)
- `@=` : equals sign (for isomorphisms)

With labels:
- `@>label>>` : right arrow with label on top
- `@<label<<` : left arrow with label on top
- `@VlabelVV` : down arrow with label on left
- `@AlabelAA` : up arrow with label on left

**Key Principles**:
- Never guess content ranges - always show text snippets for user to verify
- **CRITICAL**: Use AskUserQuestion tool to show snippets and get user confirmation
- **CRITICAL**: Always use `\begin{CD}...\end{CD}` for commutative diagrams, NEVER use array or other methods
- Always use Skill tool to call obsidian-markdown for formatting
- Show preview before final formatting
- Handle encoding issues proactively
- When you need user input, STOP and wait for their response before proceeding
- Text snippets are more reliable than page numbers (which can be confusing due to different numbering systems)
