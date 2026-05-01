---
name: pdf-to-obsidian
description: Convert PDF chapters to Obsidian Markdown with complete content preservation. Extracts specified sections from PDF files and converts them to Obsidian-flavored Markdown (callouts, dollar-sign math, wikilinks), saving to 00.Inbox/. Prioritizes completeness over summarization.
---
You are converting a PDF chapter/section to Obsidian Markdown format.

Input:

PDF path: {{pdf_path}} (optional - will search vault if not provided)
Section: {{section}} (e.g., "Ch2 2.3", "Section 3.1", "pages 64-68", or "from: [start text] to: [end text]")
Workflow:

1. Find PDF and determine content range

If no PDF path provided:

Search vault for PDF files with Glob **/*.pdf
If multiple found, use AskUserQuestion tool to ask which one to use
If section contains text snippets (e.g., "from: The Formal Viewpoint to: Additional Topics"):

Search PDF for the start and end text snippets
Extract all content between them
Skip to step 2
If section is page range (e.g., "pages 64-68", "p64-68"):

Extract page numbers directly, skip to step 2
If section is section ID (e.g., "2.3", "Ch2 2.3"):

Search PDF for the section pattern using PyMuPDF
Check table of contents to find section boundaries
Extract text snippets from proposed range:
Get first ~200 characters from the start page (clean, readable text)
Get last ~200 characters from the end page (clean, readable text)
Show snippets and ask for confirmation:
Display the text snippets from start and end to the user

Format:

Found Section X.X based on analysis. Please review the start and end content to confirm the range:

[START] [first ~200 characters from start page]

[END] [last ~200 characters from end page]

Should I extract this range?
- Reply "confirm" or "yes" to proceed with extraction
- Or provide custom range in format: from: [start text] to: [end text]
WAIT for user response before proceeding

If user confirms (says "confirm", "yes", "ok", etc.), proceed to step 2 with the proposed range
If user provides text snippets in format "from: ... to: ...", parse those snippets and proceed to step 2
DO NOT proceed to step 2 until user responds
2. Extract PDF content (only after user confirms or provides text snippets)

If user provided text snippets:

Search PDF for start snippet, find the page and position
Search PDF for end snippet, find the page and position
Extract all text between these two positions
If using page range:

Use PyMuPDF (fitz) to extract text from confirmed page range
Fix common ligatures: ﬁ→fi, ﬂ→fl, ﬃ→ffi, ﬄ→ffl
Handle encoding with UTF-8 wrapper:
import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
python
Save raw extracted text to .claude/temp_pdf_extract.txt
Show user first 500 characters as preview
3. Format with obsidian-markdown skill

YOU MUST use the Skill tool to invoke obsidian-markdown

CRITICAL: ALWAYS use chunked writing protocol - this is MANDATORY, not optional

Do this:

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
  
  **CRITICAL COMPLETENESS REQUIREMENT**:
  - ABSOLUTELY NO content omission is allowed - you must preserve EVERYTHING
  - You MUST retain ALL content: ALL theorems, proofs, examples, exercises, technical details, constructions, remarks, propositions, corollaries, lemmas
  - FORBIDDEN: Adding any notes about 'content omitted/summarized/abbreviated for brevity'
  - FORBIDDEN: Using phrases like 'for brevity', 'see original text', 'details omitted', 'summarized', etc.
  - If content is long, use chunked writing protocol (split into multiple chunks), but NEVER omit any content
  - Extract and convert EVERYTHING from the source file - completeness is absolutely mandatory
  - Every sentence, every proof step, every exercise must be included
  
  Instructions:
  - Add YAML frontmatter: title, tags (textbook + subject), source as wikilink, section, date
  - Convert math to dollar-sign format: \$inline\$ and \$\$display\$\$
  
  **CRITICAL: For commutative diagrams and complex mathematical diagrams**:
  - YOU MUST call the 'diagram-helper' skill using the Skill tool
  - DO NOT attempt to format diagrams yourself
  - Pass the diagram description to diagram-helper and use its output
  - Example: Skill(skill: \"diagram-helper\", args: \"Create commutative square with f: A→B, g: A→C, h: B→D, k: C→D\")
  - The diagram-helper skill knows all TikZJax syntax and will provide correct format
  
  - Wrap in callouts: [!axiom], [!theorem], [!definition], [!example], [!proof]
  - Add section headers with ##
  - Remove page numbers and PDF artifacts
  - Preserve all mathematical content including ALL commutative diagrams
  - Convert ALL content from source - complete extraction with zero omission
  
  **REMINDER: Use chunked writing - write ~50 lines, add placeholder, then Edit to continue. Convert EVERYTHING with no exceptions. For ANY diagram, call diagram-helper skill.**"
)
DO NOT manually write markdown - the skill handles all formatting DO NOT manually format diagrams - always call diagram-helper skill

4. Verify and report

Confirm file created in 00.Inbox/
Report to user: "Created 00.Inbox/filename.md"
Example Usage:

User: "Extract Section 2.3 from Hatcher" → Find Hatcher PDF → Search for "2.3" → Extract text snippets from start and end → Show snippets and WAIT for user confirmation → User confirms → Extract text → Format (calling diagram-helper for any diagrams)

User: "Extract pages 64-68 from Hatcher Ch2" → Find PDF → Extract pages 64-68 directly (no confirmation needed) → Extract text → Format (calling diagram-helper for any diagrams)

User: "from: The Formal Viewpoint to: Additional Topics" → Find PDF → Search for both text snippets → Extract everything between them → Format (calling diagram-helper for any diagrams)

Key Principles:

Never guess content ranges - always show text snippets for user to verify
CRITICAL: Show snippets and WAIT for user response before extracting
CRITICAL: For ANY commutative diagram or complex mathematical diagram, ALWAYS call diagram-helper skill
CRITICAL: NEVER manually format diagrams - diagram-helper has all the syntax knowledge
CRITICAL: ALWAYS use chunked writing protocol - split into ~50 line chunks with placeholders
CRITICAL: NEVER omit any content - complete extraction is mandatory
Always use Skill tool to call obsidian-markdown for formatting
Always use Skill tool to call diagram-helper for diagrams
Show preview before final formatting
Handle encoding issues proactively
When you need user input, STOP and wait for their response before proceeding
Text snippets are more reliable than page numbers (which can be confusing due to different numbering systems)