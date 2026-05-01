---
name: pdf-to-obsidian
description: Convert PDF chapters to Obsidian Markdown with complete content preservation. Extracts specified sections from PDF files and converts them to Obsidian-flavored Markdown (callouts, dollar-sign math, wikilinks), saving to 00.Inbox/. Prioritizes completeness over summarization.
---
You are converting a PDF chapter/section to Obsidian Markdown format.

**Prerequisites**:
- For Obsidian Markdown syntax (wikilinks, callouts, math, properties), refer to the `obsidian-markdown` skill
- This skill focuses on PDF extraction and content structure conversion

**Input**:
- PDF path: {{pdf_path}}
- Section: {{section}}

**Core Requirements**:
1. **Complete extraction** - ALL content from the specified section
2. **Obsidian-native format** - Use syntax from `obsidian-markdown` skill
3. **Semantic structure** - Preserve document hierarchy (theorems, proofs, examples)

**Workflow**:

1. **Extract PDF content** (see Technical Implementation below)

2. **Create Obsidian note in 00.Inbox/**:
   ```yaml
   ---
   title: "[BookName] Ch[X] Sec[Y] - [Title]"
   tags:
     - textbook
     - math/topology  # Adjust based on subject
   source: "{{pdf_path}}"
   section: "{{section}}"
   date: {{current_date}}
   ---
markdown
Convert content using Obsidian syntax:

Math: Use $inline$ and $$block$$ (see obsidian-markdown skill)
Theorems/Lemmas: Use callouts (see CALLOUTS.md in obsidian-markdown)
> [!theorem] Theorem 2.1 (Fundamental Theorem)
> Statement of the theorem.
markdown
Proofs: Use proof callouts
> [!proof]
> Proof content here. □
markdown
Examples: Use example callouts
> [!example] Example 2.3
> Example content.
markdown
Definitions: Use definition callouts
> [!definition] Homology Group
> Definition content.
markdown
Cross-references: Convert to wikilinks where possible
See [[Chapter 1 - Fundamental Group#Section 1.2]] for background.
markdown
Structure exercises:

## Exercises

1. **Exercise 1**. Problem statement.
   
   > [!hint]- Hint (click to expand)
   > Hint content.

2. **Exercise 2**. Problem statement.
markdown
Embed figures (if extracted):

<span class="claudian-embedded-image-fallback">![[attachments/figure-2-1.png]]</span>
*Figure 2.1: Caption text*
markdown
**Technical Implementation**:

**Tool Priority** (use first available):
1. **PyMuPDF (fitz)** - Best for math textbooks, preserves layout
2. pdfplumber - Good for tables
3. pdftotext - Fallback for simple text

**Extraction Script**:
```python
import fitz  # PyMuPDF
import re
from pathlib import Path

pdf_path = "{{pdf_path}}"
section = "{{section}}"  # e.g., "Section 2.1" or "2.1"

doc = fitz.open(pdf_path)
text_blocks = []
images = []

# Extract text from all pages
for page_num, page in enumerate(doc, 1):
    text_blocks.append(f"--- Page {page_num} ---\n{page.get_text()}")
    
    # Extract images
    for img_index, img in enumerate(page.get_images()):
        xref = img[0]
        base_image = doc.extract_image(xref)
        img_bytes = base_image["image"]
        img_ext = base_image["ext"]
        img_name = f"fig-p{page_num}-{img_index}.{img_ext}"
        Path(".").mkdir(exist_ok=True)
        with open(f"./{img_name}", "wb") as f:
            f.write(img_bytes)
        images.append(img_name)

full_text = "\n\n".join(text_blocks)

# Find section boundaries (adjust regex for your PDF structure)
section_pattern = rf"(?:^|\n)({re.escape(section)}[^\n]*)\n(.*?)(?=\n(?:Section|\Z))"
match = re.search(section_pattern, full_text, re.DOTALL | re.IGNORECASE)

if match:
    section_title = match.group(1).strip()
    section_content = match.group(2).strip()
else:
    section_content = full_text  # Fallback: use all text

print(f"SECTION_TITLE: {section_title if match else 'Unknown'}")
print(f"IMAGES: {','.join(images)}")
print(f"CONTENT_START\n{section_content}\nCONTENT_END")
```

**Execution**:
```bash
python_path="/c/Users/Autin/AppData/Local/Programs/Python/Python312/python.exe"
"$python_path" -c "$(cat <<'PYEOF'
[paste extraction script here]
PYEOF
)" > /tmp/pdf_extract.txt
```

Parse output, convert to Obsidian syntax, save to `00.Inbox/`.

**Verification**:

Frontmatter is valid YAML
Math delimiters are balanced ($ count is even)
Callouts use valid types (theorem, proof, example, definition)
Wikilinks use correct syntax [[note]] not [note]()
File saved to 00.Inbox/
Output: Report the created file as a wikilink: [[00.Inbox/filename.md]]