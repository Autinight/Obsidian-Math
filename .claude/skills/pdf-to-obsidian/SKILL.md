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
   - **Show snippets and ask for confirmation**:
     - Display the text snippets from start and end to the user
     - Format:
     ```
     根据分析找到 Section X.X，请查看开头和结尾内容确认范围：
     
     【开头】[first ~200 characters from start page]
     
     【结尾】[last ~200 characters from end page]
     
     是否提取这个范围？
     - 回复 "确认" 或 "yes" 继续提取
     - 或提供自定义范围，格式：from: [起始文本] to: [结束文本]
     ```
   - **WAIT for user response before proceeding**
   - If user confirms (says "确认", "yes", "ok", "好", "可以", etc.), proceed to step 2 with the proposed range
   - If user provides text snippets in format "from: ... to: ...", parse those snippets and proceed to step 2
   - **DO NOT proceed to step 2 until user responds**

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
   - **CRITICAL: ALWAYS use chunked writing protocol - this is MANDATORY, not optional**
   - Do this:
     ```
     Skill(
       skill: "obsidian-markdown",
       args: "Convert PDF extract to Obsidian markdown.
       
       Source: .claude/temp_pdf_extract.txt
       Output: 00.Inbox/[BookName] [Section].md
       
       **MANDATORY CHUNKED WRITING PROTOCOL**:
       - NEVER write the entire file at once
       - ALWAYS split content into chunks of ~50 lines maximum
       - Write first chunk with Write tool, ending with: // __CONTINUE_HERE__
       - Use Edit tool to replace // __CONTINUE_HERE__ with next chunk + new placeholder
       - Repeat until all content is written
       - Remove placeholder in final chunk
       - This is NOT optional - you MUST chunk even if you think the content is short
       
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
       - Preserve all mathematical content including ALL commutative diagrams
       
       **REMINDER: Use chunked writing - write ~50 lines, add placeholder, then Edit to continue**"
     )
     ```
   - **DO NOT manually write markdown** - the skill handles all formatting

4. **Verify and report**
   - Confirm file created in 00.Inbox/
   - Report to user: "Created [[00.Inbox/filename.md]]"

**Example Usage**:

User: "Extract Section 2.3 from Hatcher"
→ Find Hatcher PDF → Search for "2.3" → Extract text snippets from start and end → **Show snippets and WAIT for user confirmation** → User confirms → Extract → Format

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
markdown
Arrow types:

@>>> : right arrow (horizontal)
@<<< : left arrow (horizontal)
@VVV : down arrow (vertical)
@AAA : up arrow (vertical)
@= : equals sign (for isomorphisms)
With labels:

@>label>> : right arrow with label on top
@<label<< : left arrow with label on top
@VlabelVV : down arrow with label on left
@AlabelAA : up arrow with label on left
Key Principles:

Never guess content ranges - always show text snippets for user to verify
CRITICAL: Show snippets and WAIT for user response before extracting
CRITICAL: Always use \begin{CD}...\end{CD} for commutative diagrams, NEVER use array or other methods
CRITICAL: ALWAYS use chunked writing protocol - split into ~50 line chunks with placeholders
Always use Skill tool to call obsidian-markdown for formatting
Show preview before final formatting
Handle encoding issues proactively
When you need user input, STOP and wait for their response before proceeding
Text snippets are more reliable than page numbers (which can be confusing due to different numbering systems)