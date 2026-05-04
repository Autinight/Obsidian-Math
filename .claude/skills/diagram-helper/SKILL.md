---
name: diagram-helper
description: Create LaTeX and TikZ diagrams in Obsidian using TikZJax plugin. Use when the user wants to create graphs, figures, circuits, chemical diagrams, commutative diagrams, or any TikZ/LaTeX visualizations in their Obsidian notes.
---
# TikZJax Skill

Render LaTeX and TikZ diagrams directly in Obsidian notes using the TikZJax plugin. Create mathematical graphs, circuit diagrams, chemical structures, commutative diagrams, and more.

## Core Workflow

1. Choose a short, descriptive filename for the diagram based on its content, using lowercase kebab-case English when possible, for example `cellular-boundary-diagram.md`, `pullback-square.md`, or `riemannian-curvature-plot.md`.
2. Create a **new Markdown file** under `50.Image/Tikz/` for every diagram.
3. Store only the complete fenced `tikz` code block in that new file, unless the user explicitly asks for extra explanation.
4. Do **not** modify the current note, insert embeds, or decide where the diagram should be referenced unless the user explicitly asks. This skill's job is only to write the TikZ code file.
5. Load required packages with `\usepackage{...}`.
6. Wrap all LaTeX/TikZ content in `\begin{document}` and `\end{document}`.
7. Use the appropriate environment: `tikzpicture`, `tikzcd`, `circuitikz`, `axis`, `chemfig`, etc.
8. Before writing the file, perform the validation checklist below.

> Default storage rule: diagrams live in `50.Image/Tikz/`. If the folder does not exist, create it before writing the diagram file. Only use another location when the user explicitly requests it.

> TikZJax automatically uses the `standalone` document class. Do **not** add `\documentclass{standalone}`.

## Available Packages

The following packages can be loaded with `\usepackage{}`:

- `tikz-cd` — commutative diagrams
- `circuitikz` — circuit diagrams
- `chemfig` — chemical structures
- `pgfplots` — 2D and 3D plots
- `tikz-3dplot` — 3D plotting extensions
- `array` — enhanced array and tabular environments
- `amsmath`, `amstext`, `amsfonts`, `amssymb` — AMS math packages

## Critical Output Rules

- Output only valid Obsidian Markdown.
- Every new diagram must be saved as its own Markdown file in `50.Image/Tikz/` by default.
- The diagram file should contain only the complete fenced `tikz` block unless the user asks for explanation.
- Do not insert embed links into the current note unless explicitly requested.
- Use a meaningful, collision-resistant filename. If a file already exists, append a short qualifier or date suffix rather than overwriting it.
- A TikZJax block must start with exactly ```` ```tikz ```` and end with exactly ```` ``` ````.
- Never leave stray words like `markdown` or `latex` outside code fences.
- Never use display-math delimiters like `\[` or `\]` inside `tikzcd` to create line breaks.
- In Obsidian notes, surrounding explanatory math should use dollar-sign style: `$...$` or `$$...$$`.
- Inside TikZ/TikZ-CD labels, use normal LaTeX math syntax directly; labels are already in LaTeX context.

### File Organization

- Default directory: `50.Image/Tikz/`.
- Default file type: Markdown file (`.md`) containing a fenced `tikz` block.
- Filename style: concise lowercase kebab-case English based on the mathematical object or figure purpose.
- Examples:
  - `50.Image/Tikz/cellular-boundary-diagram.md`
  - `50.Image/Tikz/pullback-square.md`
  - `50.Image/Tikz/vector-field-flow.md`
  - `50.Image/Tikz/riemannian-curvature-plot.md`
- Never overwrite an existing TikZ file unless the user explicitly asks to update that exact file.

## Validation Checklist Before Writing

### General TikZJax

- `\begin{document}` and `\end{document}` both exist and are balanced.
- Every `\begin{...}` has a matching `\end{...}`.
- Required packages are loaded before `\begin{document}`.
- The Markdown code fence is closed.

### `tikz-cd` / Commutative Diagrams

When drawing a commutative diagram, prefer `tikz-cd` and validate it as a matrix.

- Every row except the last must end with `\\`.
- Do **not** use `\[` or blank lines as row separators.
- Each row must have the same number of columns, counted by `&` separators.
- If a row needs an empty cell, insert `{}` as an explicit placeholder.
- If an arrow crosses an empty middle column, include the empty cell, e.g. `A \arrow[rr] & {} & B`.
- For multi-column arrows, use `\arrow[rr]`, `\arrow[rrr]`, etc., only when the corresponding empty cells actually exist.
- Put arrows on the source object's cell.
- Prefer labels of the form `\arrow[r, "{f}"]`, `\arrow[d, "{g}"']`, `\arrow[r, "{\partial}", "{\simeq}"']`.
- Use `description` only when necessary; avoid mixing it with complicated label placement unless tested.

## Basic Syntax

````markdown
```tikz
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzpicture}
  % Your TikZ code here
\end{tikzpicture}
\end{document}
```
````

## Examples

### Mathematical Function Plot

````markdown
```tikz
\begin{document}
\begin{tikzpicture}[domain=0:4]
  \draw[very thin,color=gray] (-0.1,-1.1) grid (3.9,3.9);
  \draw[->] (-0.2,0) -- (4.2,0) node[right] {$x$};
  \draw[->] (0,-1.2) -- (0,4.2) node[above] {$f(x)$};
  \draw[color=red]    plot (\x,\x)             node[right] {$f(x)=x$};
  \draw[color=blue]   plot (\x,{sin(\x r)})    node[right] {$f(x)=\sin x$};
  \draw[color=orange] plot (\x,{0.05*exp(\x)}) node[right] {$f(x)=\frac{1}{20}\mathrm e^x$};
\end{tikzpicture}
\end{document}
```
````

### Circuit Diagram

````markdown
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american, voltage shift=0.5]
\draw (0,0)
  to[isource, l=$I_0$, v=$V_0$] (0,3)
  to[short, -*, i=$I_0$] (2,3)
  to[R=$R_1$, i>_=$i_1$] (2,0) -- (0,0);
\draw (2,3) -- (4,3)
  to[R=$R_2$, i>_=$i_2$] (4,0)
  to[short, -*] (2,0);
\end{circuitikz}
\end{document}
```
````

### 3D Surface Plot

````markdown
```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
\begin{axis}[colormap/viridis]
\addplot3[
  surf,
  samples=18,
  domain=-3:3
]
{exp(-x^2-y^2)*x};
\end{axis}
\end{tikzpicture}
\end{document}
```
````

### Commutative Diagram

Use this pattern for `tikzcd`: equal column counts, explicit `{}` placeholders, and `\\` between rows.

````markdown
```tikz
\usepackage{tikz-cd}
\usepackage{amsmath,amssymb}
\begin{document}
\begin{tikzcd}[
  column sep=large,
  row sep=large,
  cells={nodes={inner sep=2pt}}
]
A \arrow[r, "{f}"] \arrow[d, "{h}"']
& B \arrow[rr, "{g}"]
& {}
& C \arrow[d, "{k}"]
\\
D \arrow[r, "{u}"']
& E \arrow[rr, "{v}"']
& {}
& F
\end{tikzcd}
\end{document}
```
````

### Commutative Diagram With Diagonal Arrow

````markdown
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
T
  \arrow[drr, bend left, "{x}"]
  \arrow[ddr, bend right, "{y}"']
  \arrow[dr, dotted, "{(x,y)}" description]
& {}
& {}
\\
K
& X \times_Z Y \arrow[r, "{p}"] \arrow[d, "{q}"']
& X \arrow[d, "{f}"]
\\
{}
& Y \arrow[r, "{g}"']
& Z
\end{tikzcd}
\end{document}
```
````

## Common TikZ Elements

### Coordinates and Paths

```latex
\draw (0,0) -- (1,1);              % Line from (0,0) to (1,1)
\draw (0,0) circle (1cm);          % Circle with radius 1cm
\draw (0,0) rectangle (2,1);       % Rectangle
\draw (0,0) arc (0:90:1cm);        % Arc
```

### Styling

```latex
\draw[red, thick] (0,0) -- (1,1);
\draw[dashed, blue] (0,0) circle (1cm);
\draw[->] (0,0) -- (1,1);
\draw[->, >=stealth] (0,0) -- (1,1);
```

### Nodes and Labels

```latex
\node at (0,0) {Text};
\node[circle, draw] at (1,1) {A};
\draw (0,0) -- (1,1) node[right] {label};
```

## Practical Tips

- For complex diagrams, first sketch the matrix grid: number rows and columns, then fill empty cells with `{}`.
- For large commutative diagrams copied from images, prioritize correct topology and rendering over exact spacing; adjust spacing afterward.
- If rendering fails, first check row separators and column counts in `tikzcd`.
- If a diagram is very wide, use `column sep=small` or shorten labels with macros.
- Use comments sparingly inside code blocks; avoid clutter in final notes unless the user asks for explanation.
