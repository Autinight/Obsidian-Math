---
name: pdf-to-obsidian
description: Convert PDF chapters to Obsidian Markdown with complete content preservation. Extracts specified sections from PDF files and converts them to Obsidian-flavored Markdown (callouts, dollar-sign math, wikilinks), saving to 00.Inbox/. Prioritizes completeness over summarization.
---
You are converting a PDF chapter/section to Obsidian Markdown format.

**Input**:
- PDF path: {{pdf_path}} (optional - will search vault if not provided)
- Section: {{section}} (e.g., "Ch2 2.3", "Section 3.1", "pages 64-68")

**Workflow**:

1. **Find PDF and determine page range**
   
   If no PDF path provided:
   - Search vault for PDF files with `Glob **/*.pdf`
   - If multiple found, list them and **USE AskUserQuestion tool** to ask which one to use
   
   If section is page range (e.g., "pages 64-68", "p64-68"):
   - Extract page numbers directly, skip to step 2
   
   If section is section ID (e.g., "2.3", "Ch2 2.3"):
   - Search PDF for the section pattern using PyMuPDF
   - Check table of contents (usually page 1) to find section boundaries
   - Display findings clearly:
     ```
     根据目录，Section 2.3 在：
     - PDF 页码：66-71
     - 书本页码：160-165
     - 包含小节：Axioms for Homology, Categories and Functors
     ```
   - **STOP and USE AskUserQuestion tool**: Present your findings and ask them to confirm the page range
   - Example question format:
     ```
     AskUserQuestion(
       questions: [{
         question: "根据目录分析，Section 2.3 应该是 PDF 的第 65-71 页（书本页码 160-166）。是否提取这个范围？",
         header: "页码确认",
         options: [
           {label: "是，提取 65-71 页", description: "提取找到的完整章节"},
           {label: "否，我要指定页码", description: "手动输入页码范围"}
         ],
         multiSelect: false
       }]
     )
     ```
   - **DO NOT proceed to step 2 until user confirms the page range**

2. **Extract PDF content** (only after user confirms page range)
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
       - Wrap in callouts: [!theorem], [!definition], [!example], [!proof]
       - Add section headers with ##
       - Remove page numbers and PDF artifacts
       - Preserve all mathematical content"
     )
     ```
   - **DO NOT manually write markdown** - the skill handles all formatting

4. **Verify and report**
   - Confirm file created in 00.Inbox/
   - Report to user: "Created [[00.Inbox/filename.md]]"

**Example Usage**:

User: "Extract Section 2.3 from Hatcher"
→ Find Hatcher PDF → Search for "2.3" → Show matches and analysis → **USE AskUserQuestion tool to confirm page range** → User responds → Extract → Format

User: "Extract pages 64-68 from Hatcher Ch2"
→ Find PDF → Extract pages 64-68 directly (no confirmation needed) → Format

**Key Principles**:
- Never guess page ranges - always confirm with user using AskUserQuestion tool
- **CRITICAL**: Use AskUserQuestion tool for all user confirmations, NOT text responses
- Always use Skill tool to call obsidian-markdown for formatting
- Show preview before final formatting
- Handle encoding issues proactively
- When you need user input, STOP and wait for their response before proceeding
