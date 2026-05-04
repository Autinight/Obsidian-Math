---
name: cards-generator
description: Use this skill when the user asks to generate or organize 20.Cards-style mathematical Cards/card notes in the Obsidian vault, including definitions, theorems, lemmas, propositions, examples, exercises, concepts, and techniques. It turns user requirements, mathematical source text, proof ideas, or review needs into atomic definition/theorem/lemma/proposition/example/exercise/concept/technique notes.
---

# 20.Cards-style Cards Generator

This skill generates mathematical Cards in the style already used in this vault under `20.Cards`. It converts the user's request into Obsidian-native Markdown cards while respecting the vault preference: **all newly created content should be saved to `00.Inbox/` by default**, and all mathematical formulas must use dollar-sign LaTeX.

## Style references

Before generating a card, if the topic is related to existing cards, read relevant `20.Cards` notes first so terminology, links, and formatting remain consistent. Core style references include:

- `20.Cards/Definitions/dfn - Orientation of Vector Space.md`
- `20.Cards/Theorems/thm -  Lie Group Homomorphism has Constant Rank..md`
- `20.Cards/Lemmas/lem - Poincaré Lemma with Compact Support.md`
- `20.Cards/Propositions/pps - nonzero Covector and Orientation.md`
- `20.Cards/Examples/ep - Gamma Distribution.md`
- `20.Cards/Exercises/ex - Brouwer Fix Point.md`
- `20.Cards/Techniques/tec - Probing Singularities via Moving Boundaries.md`

Observed conventions:

- Cards are atomic: one major definition, theorem, lemma, proposition, example, exercise, concept, or technique per note.
- Frontmatter is minimal unless the environment needs more metadata.
- Mathematical statements are usually in English when the source is English.
- Short explanatory notes should be in English by default; if the user explicitly asks for another language, follow the user's requested language.
- Main mathematical content is often placed inside Obsidian callouts.
- Proofs may use `> [!proof] Proof:` or `> [!proofsketch] Sketch of Proof:`.
- Exercises may include metadata plus a DataviewJS block that lists related techniques.

## Default save rule

Unless the user explicitly requests otherwise, save generated cards to:

```text
00.Inbox/<filename>.md
```

Do **not** move generated cards directly into `20.Cards/` unless the user asks. After creation, mention the recommended final destination, for example:

```text
Recommended final location: 20.Cards/Theorems/thm - <Title>.md
```

## Environment types, filename prefixes, and final destinations

| Environment | Frontmatter `type` | Filename pattern | Recommended final destination |
|---|---|---|---|
| definition | `definition` | `dfn - <Title>.md` | `20.Cards/Definitions/dfn - <Title>.md` |
| theorem | `theorem` | `thm - <Title>.md` | `20.Cards/Theorems/thm - <Title>.md` |
| lemma | `lemma` | `lem - <Title>.md` | `20.Cards/Lemmas/lem - <Title>.md` |
| proposition | `proposition` | `pps - <Title>.md` | `20.Cards/Propositions/pps - <Title>.md` |
| example | `example` | `ep - <Title>.md` | `20.Cards/Examples/ep - <Title>.md` |
| exercise | `exercise` | `ex - <Title>.md` | `20.Cards/Exercises/ex - <Title>.md` |
| technique | `technique` | `tec - <Title>.md` | `20.Cards/Techniques/tec - <Title>.md` |
| concept | `concept` | `<Title>.md` or concept-specific existing style | `20.Cards/Concepts/<Title>.md` |

Use clean, filesystem-safe titles. Preserve mathematical names and capitalization where useful. Avoid adding extra punctuation that creates awkward filenames.

## Frontmatter templates

### Standard card frontmatter

```yaml
---
type: definition|theorem|lemma|proposition|example|concept|technique
aliases: [<Clean Title>]
---
```

If an alias contains YAML-sensitive characters, use block-list style:

```yaml
---
type: theorem
aliases:
  - <Clean Title>
---
```

### Exercise frontmatter

```yaml
---
type: exercise
aliases:
  - <Clean Title>
technique: []
book:
chapter:
number:
category:
status: todo
priority:
tags: []
---
```

Fill `book`, `chapter`, and `number` when the source provides them. Leave blank rather than hallucinating metadata.

## Standard section and callout patterns

Use sections only when they add structure. Minimal cards may consist of frontmatter plus one callout.

### Preliminaries

```markdown
## Preliminaries

- [[Prerequisite Note]]
- [[Related Concept|display text]]
```

Use this for prerequisite wiki-links, source notes, or related concepts. Prefer existing wikilinks when likely notes exist; search/read relevant notes when needed.

### Definition

```markdown
## Definition

> [!definition] Definition: <Title>
> Let ... . We say that ... if ... .
```

### Theorem

```markdown
## Statement

> [!theorem] Theorem: <Title>
> Let ... . Then ... .
```

### Lemma

```markdown
## Statement

> [!lemma] Lemma: <Title>
> Let ... . Then ... .
```

### Proposition

```markdown
## Statement

> [!proposition] Proposition: <Title>
> Let ... . Then ... .
```

### Example

```markdown
## Example

> [!example] Example: <Title>
> ...
```

Examples can also include `## Definition`, `## Computation`, or `## Characteristic Function` if the card is a worked mathematical object, as in the Gamma Distribution example.

### Exercise

```markdown
> [!exercise] EXERCISE <chapter>.<number>.
> <Problem statement>
```

If a proof/solution is requested:

```markdown
> [!proof] Proof:
> ...
```

For exercise cards, include this DataviewJS block at the bottom when `technique` metadata is present or likely to be used:

````markdown
```dataviewjs
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
```
````

### Technique

````markdown
### The Core Insight

> [!technique] Technique: <Title>
> <Core reusable idea, preferably atomic and operational.>

### Used in:
```dataview
TABLE type
FROM ""
WHERE contains(technique, this.aliases[0])
```
````

### Proofs, sketches, remarks, and notes

Full proof:

```markdown
> [!proof] Proof:
> ...
```

Proof sketch:

```markdown
> [!proofsketch] Sketch of Proof:
> ...
```

Remarks and comments:

```markdown
> [!remark] Remark:
> ...

> [!note] Note:
> ...
```

## Generation workflow

1. Parse the user's requested environment/type, title, source context, prerequisites, proof depth, metadata, and related links.
2. If the environment/type is missing, infer it from the request:
   - "definition" -> definition
   - "theorem" -> theorem
   - "lemma" -> lemma
   - "proposition" -> proposition
   - "example" -> example
   - "exercise" or "problem" -> exercise
   - "concept" -> concept
   - "technique" or "method" -> technique
3. Ask a clarifying question only when ambiguity affects the filename, frontmatter `type`, or mathematical correctness. Otherwise infer and proceed.
4. If the user references a topic, current note, source note, or existing `20.Cards` material, read the relevant notes before writing.
5. Keep the card atomic. If the input contains several independent results, either split into multiple cards or ask whether to split.
6. Use existing wiki-links for prerequisites and related concepts when likely notes exist. Avoid inventing precise links that are likely broken; plain text is better than a typo-link.
7. Use English mathematical statements when the source is English. Use English for skill-generated explanations by default; use another language only if the user explicitly requests it or the source material uses that language.
8. Use only dollar-sign math delimiters:
   - inline: `$...$`
   - display: `$$...$$`
   - never use `\(...\)` or `\[...\]`.
9. Write the note to `00.Inbox/<filename>.md` by default.
10. After writing, verify the created note.

## Verification checklist

After creating a card, verify:

- The file exists under `00.Inbox/` unless the user explicitly requested another path.
- YAML frontmatter is valid and includes the correct `type`.
- `aliases` contains a clean title when useful.
- Callout syntax is valid, e.g. `> [!theorem] Theorem:`.
- Math uses `$...$` or `$$...$$`; there are no `\(...\)` or `\[...\]` delimiters.
- The card is atomic and not overloaded with multiple unrelated results.
- Obvious wikilinks introduced by the card are not broken due to spelling or path typos.
- Response reports the created file as a clickable wikilink, e.g. `[[00.Inbox/thm - Compactly Supported Vector Fields Are Complete]]`.
- Response includes the recommended eventual `20.Cards/<Type>/...` location when applicable, but does not move the note unless requested.

## Response format after creation

Use concise confirmation:

```markdown
Created: [[00.Inbox/<filename without .md>]]
Recommended final location: `20.Cards/<Type>/<filename>.md`
Verified: frontmatter, callout syntax, dollar-sign math, and obvious wikilinks.
```
