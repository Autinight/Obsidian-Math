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
Technical Implementation:

[... keep the improved extraction workflow from previous optimization ...]

Verification:

Frontmatter is valid YAML
Math delimiters are balanced ($ count is even)
Callouts use valid types (theorem, proof, example, definition)
Wikilinks use correct syntax [[note]] not [note]()
File saved to 00.Inbox/
Output: Report the created file as a wikilink: [[00.Inbox/filename.md]]