---
type: concept
aliases:
  - Deck Transformation
  - covering transformation
  - Galois group
---

## Definition

> [!definition] Definition:
> Let $p:\overline{X}\to X$ be a covering projection. 
> * By a **covering transformation** of $p:\overline{X}\to X$, we mean a homeomorphism $f:\overline{X}\to\overline{X}$ such that, $p\circ f=p$. 
> * We denoted the set of all covering transformations of $p$ by $\mathbf{G}\left(p\right)$, which is a subgroup of all homeomorphisms of $\overline{X}$ uner the usual composition of maps. This group is called the **Deck transformation group** of $p$. It is also called the **Galois group** of $p$.

## Properties

### Free Action

> [!proposition] Proposition: 
> Let $p: \overline{X}\to X$ be a covering projection. $\overline{X}$ is connected. Then $\mathbf{G}\left(p\right)$ acts freely on $\overline{X}$.

> [!remark] Remark: 
> That is if two deck transformation $f_1,f_2$ agree on some point : $f_1\left(\overline{x}\right)= f_2 \left(\overline{x}\right)$, then $f_1= f_2$.

> [!proof] Proof: 
> The deck transformation can be seen as a lift of $p$ since $p\circ f= p$. Then the proposition follows from [[thm - Lifting Properties#The uniqueness of map's lifting|The uniqueness of map's lifting]]

### Simply Transitively when Normal

[[thm - Simply Transitively when Normal]]