# Chapter 11 Convergence

In this chapter we offer an introduction to several of the convergence ideas for Riemannian manifolds. The goal is to understand what it means for a sequence of Riemannian manifolds or metric spaces to converge to a metric space. The first section centers on the weakest convergence concept: Gromov-Hausdorff convergence. The next section covers some of the elliptic regularity theory needed for the later developments that use stronger types of convergence. In the third section we develop the idea of norms of Riemannian manifolds as an intermediate step towards understanding convergence theory as an analogue to the easier Hölder theory for functions. Finally, in the fourth section we establish the geometric version of the convergence theorem of Riemannian geometry by Cheeger and Gromov as well as its generalizations by Anderson and others. These convergence theorems contain Cheeger’s finiteness theorem stating that certain very general classes of Riemannian manifolds contain only finitely many diffeomorphism types.

The idea of measuring the distance between subspaces of a given space goes back to Hausdorff and was extensively studied in the Polish and Russian schools of topology. The more abstract versions used here go back to Shikata’s proof of the differentiable sphere theorem. Cheeger’s thesis also contains the idea that abstract manifolds can converge to each other. In fact, he proved his finiteness theorem by showing that certain classes of manifolds are precompact in various topologies. Gromov further developed the theory of convergence to the form presented here that starts with the weaker Gromov-Hausdorff convergence of metric spaces. His first use of this new idea was to prove a group-theoretic question about the nilpotency of groups with polynomial growth. Soon after the introduction of this weak convergence, the earlier ideas on strong convergence by Cheeger resurfaced.

## 11.1 Gromov-Hausdorff Convergence

### 11.1.1 Hausdorff Versus Gromov Convergence

At the beginning of the twentieth century, Hausdorff introduced what is now called the Hausdorff distance between subsets of a metric space. If $( X , | \cdots | )$ is the metric space and A; $B \subset X$ ; then

$$
d \left(A, B\right) = \inf \left\{\left| a b \right| \mid a \in A, b \in B \right\},
$$

$$
B (A, \varepsilon) = \{x \in X | | x A | <   \varepsilon \},
$$

$$
d _ {H} (A, B) = \inf \left\{\varepsilon \mid A \subset B (B, \varepsilon), B \subset B (A, \varepsilon) \right\}.
$$

Thus, d $( A , B )$ is small if some points in these sets are close, while the Hausdorff distance $d _ { H } \left( A , B \right)$ is small if and only if every point of A is close to a point in B and vice versa. One can easily see that the Hausdorff distance defines a metric on the compact subsets of X and that this collection is compact when X is compact.

We shall concern ourselves only with compact or proper metric spaces. The latter by definition have proper distance functions, i.e., all closed balls are compact. This implies, in particular, that the spaces are separable, complete, and locally compact.

Around 1980, Gromov extended the Hausdorff distance concept to a distance between abstract metric spaces. If X and Y are metric spaces, then an admissible metric on the disjoint union $X \cup Y$ is a metric that extends the given metrics on X and Y:

With this the Gromov-Hausdorff distance is defined as

$$
d _ {G - H} (X, Y) = \inf \left\{d _ {H} (X, Y) \mid \text { admissible   metrics   on } X \cup Y \right\}.
$$

Thus, we try to place a metric on X Y that extends the metrics on X and Y, [such that X and Y are as close as possible in the Hausdorff distance. In other words, we are trying to define distances between points in X and Y without violating the triangle inequality.

Example 11.1.1. If Y is the one-point space, then

$$
\begin{array}{l} d _ {G - H} (X, Y) \leq \operatorname{rad} X \\ = \inf _ {y \in X} \sup _ {x \in X} | x y | \\ = \text { radius   of   smallest   ball   covering } X. \\ \end{array}
$$

Example 11.1.2. Using $| x y | = D / 2$ for all $x \in X , y \in Y$ , where diamX; diam $Y \leq D$ c) shows that

$$
d _ {G - H} (X, Y) \leq D / 2.
$$

Let $( \mathcal { M } , d _ { G - H } )$ denote the collection of compact metric spaces. We wish to consider this class as a metric space in its own right. To justify this we must show that only isometric spaces are within distance zero of each other.

Proposition 11.1.3. If X and Y are compact metric spaces with $d _ { G - H } ( X , Y ) = 0$ ; then X and Y are isometric.

Proof. Choose a sequence of metrics $| \cdots | _ { i }$ on $X \cup Y$ such that the Hausdorff distance between X and Y in this metric is $< i ^ { - 1 }$ j [: Then we can find (possibly discontinuous) maps

$$
I _ {i}: X \to Y, \text {   where   } | x I _ {i} (x) | _ {i} \leq i ^ {- 1},
$$

$$
J _ {i}: Y \to X, \text {   where   } | y J _ {i} (y) | _ {i} \leq i ^ {- 1}.
$$

Using the triangle inequality and that $| \cdots | _ { i }$ restricted to either X or Y is the given metric  on these spaces yields

$$
\left| I _ {i} \left(x _ {1}\right) I _ {i} \left(x _ {2}\right) \right| \leq 2 i ^ {- 1} + \left| x _ {1} x _ {2} \right|,
$$

$$
\left| J _ {i} \left(y _ {1}\right) J _ {i} \left(y _ {2}\right) \right| \leq 2 i ^ {- 1} + \left| y _ {1} y _ {2} \right|,
$$

$$
\left| x J _ {i} \circ I _ {i} (x) \right| \leq 2 i ^ {- 1},
$$

$$
\left| y I _ {i} \circ J _ {i} (y) \right| \leq 2 i ^ {- 1}.
$$

We construct $I : X \to Y$ and $J : Y  X$ as limits of these maps in the same W ! W !way the Arzela-Ascoli lemma is proved. For each x the sequence $\left( I _ { i } \left( x \right) \right)$ in Y has an accumulation point since Y is compact. Let $A \subset X$ be select a countable dense set. Using a diagonal argument select a subsequence $I _ { i _ { j } }$ such that $I _ { i _ { j } } ( a )  I ( a )$ for all $a \in A$ !: The first inequality shows that I is distance decreasing on A: In particular, it 2is uniformly continuous and thus has a unique extension to a map $I : X \to Y$ ; which W !is also distance decreasing. In a similar fashion we also get a distance decreasing map $J : Y  X$ :

W !The last two inequalities imply that I and J are inverses to each other. Thus, both I and J are isometries.

The symmetry and the triangle inequality are easily established for $d _ { G - H }$ : Thus, $( \mathcal { M } , d _ { G - H } )$ becomes a pseudo-metric space, i.e., the equivalence classes form a metric space. We prove below that this metric space is complete and separable. First we show how spaces can be approximated by finite metric spaces.

Example 11.1.4. Let X be compact and $A \subset X$ a finite subset such that every point in X is within distance " of some element in A; i.e., $d _ { H } \left( A , X \right) \leq \varepsilon$ : Such sets A are called $\varepsilon { - } d e n s e$ in X: It is clear that if we use the metric on A induced by X; then $d _ { G - H } \left( X , A \right) \leq \varepsilon$ : The importance of this remark is that for any $\varepsilon > 0$ there exist  finite -dense subsets of X since X is compact. To be consistent with our definition of the abstract distance we should put a metric on $X \cup A$ . We can do this by selecting very small $\delta > 0$ and defining $| x a | _ { X \cup A } = \delta + | x a | _ { X }$ for $x \in X$ and $a \in A$ . Thus $d _ { G - H } \left( X , A \right) \leq \epsilon + \delta$ . Finally, let $\delta  0$ D C j jto get the estimate.

Example 11.1.5. Suppose we have "-dense subsets

$$
A = \left\{x _ {1}, \dots , x _ {k} \right\} \subset X, B = \left\{y _ {1}, \dots , y _ {k} \right\} \subset Y,
$$

with the further property that

$$
\left| \left| x _ {i} x _ {j} \right| - \left| y _ {i} y _ {j} \right| \right| \leq \varepsilon , 1 \leq i, j \leq k.
$$

Then $d _ { G - H } \left( X , Y \right) \leq 3 \varepsilon$ : We already have that the finite subsets are "-close to the  spaces, so by the triangle inequality it suffices to show that $d _ { G - H } \left( A , B \right) \leq \varepsilon .$ : For  this we must exhibit a metric on A B that makes A and B "-Hausdorff close. Define

$$
\begin{array}{l} \left| x _ {i} y _ {i} \right| = \varepsilon , \\ \left| x _ {i} y _ {j} \right| = \min _ {k} \left\{\left| x _ {i} x _ {k} \right| + \varepsilon + \left| y _ {j} y _ {k} \right| \right\}. \\ \end{array}
$$

Thus, we have extended the given metrics on A and B in such a way that no points from A and B get identified, and in addition the potential metric is symmetric. It then remains to check the triangle inequality. Here we must show

$$
\begin{array}{l} \left| x _ {i} y _ {j} \right| \leq \left| x _ {i} z \right| + \left| y _ {j} z \right|, \\ \left| x _ {i} x _ {j} \right| \leq \left| y _ {k} x _ {i} \right| + \left| y _ {k} x _ {j} \right|, \\ \left| y _ {i} y _ {j} \right| \leq \left| x _ {k} y _ {i} \right| + \left| x _ {k} y _ {j} \right|. \\ \end{array}
$$

It suffices to check the first two cases as the third is similar to the second. For the first we can assume that $z = x _ { k }$ and find l such that

$$
\left| y _ {j} x _ {k} \right| = \varepsilon + \left| y _ {j} y _ {l} \right| + \left| x _ {l} x _ {k} \right|.
$$

Hence,

$$
\begin{array}{l} \left| x _ {i} x _ {k} \right| + \left| y _ {j} x _ {k} \right| = \left| x _ {i} x _ {k} \right| + \varepsilon + \left| y _ {j} y _ {l} \right| + \left| x _ {l} x _ {k} \right| \\ \geq | x _ {i} x _ {l} | + \varepsilon + | y _ {j} y _ {l} | \\ \geq \left| x _ {i} y _ {j} \right|. \\ \end{array}
$$

For the second case select l; m with

$$
\begin{array}{l} \left| y _ {k} x _ {i} \right| = \left| y _ {k} y _ {l} \right| + \varepsilon + \left| x _ {l} x _ {i} \right|, \\ \left| y _ {k} x _ {j} \right| = \left| y _ {k} y _ {m} \right| + \varepsilon + \left| x _ {m} x _ {j} \right|. \\ \end{array}
$$

The assumption about the metrics on A and B then lead to

$$
\begin{array}{l} \left| y _ {k} x _ {i} \right| + \left| y _ {k} x _ {j} \right| = \left| y _ {k} y _ {l} \right| + \varepsilon + \left| x _ {l} x _ {i} \right| + \left| y _ {k} y _ {m} \right| + \varepsilon + \left| x _ {m} x _ {j} \right| \\ \geq \left| x _ {k} x _ {l} \right| + \left| x _ {l} x _ {i} \right| + \left| x _ {k} x _ {m} \right| + \left| x _ {m} x _ {j} \right| \\ \geq \left| x _ {i} x _ {j} \right|. \\ \end{array}
$$

Example 11.1.6. Suppose $M _ { k } = S ^ { 3 } / \mathbb { Z } _ { k }$ with the usual metric induced from $S ^ { 3 } \left( 1 \right)$ : DThen we have a Riemannian submersion $M _ { k }  S ^ { 2 } ( 1 / 2 )$ whose fibers have diameter $2 \pi / k \to 0$ as $k \to \infty$ !: Using the previous example it follows that $M _ { k } \to S ^ { 2 } \left( 1 / 2 \right)$ ! ! 1in the Gromov-Hausdorff topology.

Example 11.1.7. One can similarly see that the Berger metrics $\left( S ^ { 3 } , g _ { \varepsilon } \right) \to S ^ { 2 } \left( 1 / 2 \right)$ as $\varepsilon  0$ !: Notice that in both cases the volume goes to zero, but the curvatures and !diameters are uniformly bounded. In the second case the manifolds are even simply connected. It should also be noted that the topology changes rather drastically from the sequence to the limit, and in the first case the elements of the sequence even have mutually different fundamental groups.

Proposition 11.1.8. The “metric space” $( \mathcal { M } , d _ { G - H } )$ is separable and complete.

Proof. To see that it is separable, first observe that the collection of all finite metric spaces is dense in this collection. Now take the countable collection of all finite metric spaces that in addition have the property that all distances are rational. Clearly, this collection is dense as well.

To show completeness, select a Cauchy sequence $\left\{ X _ { n } \right\}$ : To establish convergence f gof this sequence, it suffices to check that some subsequence is convergent. Select a subsequence $\{ X _ { i } \}$ such that $d _ { G - H } ( X _ { i } , X _ { i + 1 } ) \ < \ 2 ^ { - i }$ for all i: Then select metrics $\left| \cdots \right| _ { i , i + 1 }$ on $X _ { i } \cup X _ { i + 1 }$ making these spaces $2 ^ { - i } .$ -Hausdorff close. Now define a metric $\left| \cdots \right| _ { i , i + j }$ on $X _ { i } \cup X _ { i + j }$ by

$$
\left| x _ {i} x _ {i + j} \right| _ {i, i + j} = \min _ {\left\{x _ {i + k} \in X _ {i + k} \right\}} \left\{\sum_ {k = 0} ^ {j - 1} \left| x _ {i + k} x _ {i + k + 1} \right| \right\}.
$$

This defines a metric $| \cdots |$ on $Y = \cup _ { i } X _ { i }$ with the property that $d _ { H } \left( X _ { i } , X _ { i + j } \right) \leq 2 ^ { - i + 1 }$ : jj D [ C The metric space is not complete, but the “boundary” of the completion is exactly our desired limit space. To define it, first consider

$$
\hat {X} = \left\{\left\{x _ {i} \right\} \mid x _ {i} \in X _ {i} \text {   and   } \left| x _ {i} x _ {j} \right|\rightarrow 0 \text {   as   } i, j \rightarrow \infty \right\}.
$$

This space has a pseudo-metric defined by

$$
| \{x _ {i} \} \{y _ {i} \} | = \lim _ {i \to \infty} | x _ {i} y _ {i} |.
$$

Given that we are only considering Cauchy sequences $\left\{ x _ { i } \right\}$ ; this must yield a metric f gon the quotient space X; obtained by the equivalence relation

$$
\{x _ {i} \} \sim \{y _ {i} \} \text {   iff   } | \{x _ {i} \} \{y _ {i} \} | = 0.
$$

Now we can extend the metric on Y to one on $X \cup Y$ by declaring

$$
\left| x _ {k} \left\{x _ {i} \right\}\right| = \lim _ {i \rightarrow \infty} \left| x _ {k} x _ {i} \right|.
$$

Using that $d _ { H } \left( X _ { j } , X _ { j + 1 } \right) \leq 2 ^ { - j }$ ; we can for any $x _ { i } \in X _ { i }$ find a sequence $\left\{ x _ { i + j } \right\} \in { \hat { X } }$ such that $x _ { i + 0 } = x _ { i }$ Cand $\left| x _ { i + j } x _ { i + j + 1 } \right| \leq 2 ^ { - j }$ 2: Then we must have $\left| x _ { i } \left\{ x _ { i + j } \right\} \right| \leq 2 ^ { - i + 1 }$ O: CThus, every $X _ { i }$ is $2 ^ { - i + \dot { 1 } }$ C C C ˇ  ˇ C ˇ -close to the limit space X: Conversely, for any given sequence $\left\{ x _ { i } \right\}$ we can find an equivalent sequence $\left\{ y _ { i } \right\}$ with the property that $\left| y _ { k } \left\{ y _ { i } \right\} \right| \leq 2 ^ { - k + 1 }$ for all k: Thus, X is $2 ^ { - i + 1 }$ -close to $X _ { i }$ f:

From the proof of this theorem we obtain the useful information that Gromov-Hausdorff convergence can always be thought of as Hausdorff convergence. In other words, if we know that $X _ { i } \to X$ in the Gromov-Hausdorff sense, then after possibly !passing to a subsequence, we can assume that there is a metric on $X \cup ( \cup _ { i } X _ { i } )$ in which $X _ { i }$ [ [Hausdorff converges to X: With a choice of such a metric it makes sense to say that $x _ { i } \to x$ ; where $x _ { i } \in X _ { i }$ and $x \in X$ : We shall often use this without explicitly ! 2 2mentioning a choice of ambient metric on $X \cup ( \cup _ { i } X _ { i } )$ :

[ [There is an equivalent way of picturing convergence. For a compact metric space X define $C \left( X \right)$ as the continuous functions on X and $L ^ { \infty } \left( X \right)$ as the bounded measurable functions with the sup-norm (not the essential sup-norm). We know that $L ^ { \infty } \left( X \right)$ is a Banach space. When X is bounded construct a map $X \to L ^ { \infty } \left( X \right)$ ; by sending x to the continuous function $z \mapsto | x z |$ !. This is usually called the Kuratowski 7! j jembedding when we consider it as a map into $C \left( X \right)$ : The triangle inequality implies that this is a distance preserving map. Thus, any compact metric space is isometric to a subset of some Banach space $L ^ { \infty } \left( X \right)$ : The important observation is that two such spaces $L ^ { \infty } \left( X \right)$ and $L ^ { \infty } \left( Y \right)$ are isometric if the spaces X and Y are Borel equivalent (there exists a measurable bijection). Moreover, if $X \subset Y$ , then $L ^ { \infty } \left( X \right) \subset L ^ { \infty } \left( Y \right)$ , by extending a function on X to vanish on $Y - X$  . Moreover, any compact metric space is Borel equivalent to a subset of Œ0; 1 : In particular, any compact metric space is isometric to a subset of $L ^ { \infty } \left( [ 0 , 1 ] \right)$ : We can then define

$$
d _ {G - H} (X, Y) = \inf d _ {H} (i (X), j (Y)),
$$

where $i : X \to L ^ { \infty } \left( [ 0 , 1 ] \right)$ and $j : Y  L ^ { \infty } ( [ 0 , 1 ] )$ are distance preserving maps.

### 11.1.2 Pointed Convergence

So far, we haven’t dealt with noncompact spaces. There is, of course, nothing wrong with defining the Gromov-Hausdorff distance between unbounded spaces, but it will almost never be finite. In order to change this, we should have in mind what is done for convergence of functions on unbounded domains. There, one usually speaks about convergence on compact subsets. To do something similar, we first define the pointed Gromov-Hausdorff distance

$$
d _ {G - H} \left((X, x), (Y, y)\right) = \inf \left\{d _ {H} (X, Y) + | x y | \right\}.
$$

Here we take as usual the infimum over all Hausdorff distances and in addition require the selected points to be close. The above results are still true for this modified distance. We can then introduce the Gromov-Hausdorff topology on the collection of proper pointed metric spaces $\mathcal { M } _ { * } = \{ ( X , x , \vert \cdots \vert ) \}$ in the following way: We say that

$$
(X _ {i}, x _ {i}, | \cdot | _ {i}) \rightarrow (X, x, | \cdot |)
$$

in the pointed Gromov-Hausdorff topology if for all R there is a sequence $R _ { i } \to R$ such that the closed metric balls

$$
\left(\bar {B} \left(x _ {i}, R _ {i}\right), x _ {i}, | \cdot | _ {i}\right)\rightarrow \left(\bar {B} (x, R), x, | \cdot |\right)
$$

converge with respect to the pointed Gromov-Hausdorff metric.

### 11.1.3 Convergence of Maps

We also need to address convergence of maps. Suppose we have

$$
\begin{array}{l} f _ {k}: X _ {k} \to Y _ {k}, \\ X _ {k} \rightarrow X, \\ Y _ {k} \to Y. \\ \end{array}
$$

Then we say that $f _ { k }$ converges to $f : X \to Y$ if for every sequence $x _ { k } \ \in \ X _ { k }$ converging to $x \in X$ it follows that $f _ { k } ( x _ { k } )  f ( x )$ 2 : This definition obviously 2 !depends in some sort of way on having the spaces converge in the Hausdorff sense, but we shall ignore this. It is also a very strong type of convergence, for if we assume that $X _ { k } = X , ~ Y _ { k } = Y$ ; and $f _ { k } = f$ ; then $f$ can converge to itself only if it is continuous.

Note also that convergence of maps preserves such properties as being distance preserving or submetries.

Another useful observation is that we can regard the sequence of maps $f _ { k }$ as one continuous map

$$
F: \left(\bigcup_ {i} X _ {i}\right) \to Y \cup \left(\bigcup_ {i} Y _ {i}\right).
$$

The sequence converges if and only if this map has an extension

$$
X \cup \left(\bigcup_ {i} X _ {i}\right)\rightarrow Y \cup \left(\bigcup_ {i} Y _ {i}\right),
$$

in which case the limit map is the restriction to X: Thus, when $X _ { i }$ are compact it follows that a sequence is convergent if and only if the map

$$
F: \left(\bigcup_ {i} X _ {i}\right) \to Y \cup \left(\bigcup_ {i} Y _ {i}\right)
$$

is uniformly continuous.

A sequence of functions as above is called equicontinuous, if for every $\varepsilon > 0$ and $x _ { k } \in X _ { k }$ there is an $\delta > 0$ such that $f _ { k } \left( B \left( x _ { k } , \delta \right) \right) \subset B \left( f _ { k } \left( x _ { k } \right) , \varepsilon \right)$ for all k. A sequence 2 is equicontinuous when, for example, all the functions are Lipschitz continuous with the same Lipschitz constant. As for standard equicontinuous sequences, we have the Arzela-Ascoli lemma:

Lemma 11.1.9. An equicontinuous family $f _ { k } : X _ { k } \to Y _ { k }$ ; where $X _ { k } \ \to \ X$ ; and $Y _ { k }  Y$ W ! ! in the (pointed) Gromov-Hausdorff topology, has a convergent subse-!quence. When the spaces are pointed we also assume that $f _ { k }$ preserves the base point.

Proof. The standard proof carries over without much change. Namely, first choose dense subsets $A _ { i } = \{ a _ { 1 } ^ { i } , a _ { 2 } ^ { i } , . . . \} \subset X _ { i }$ such that $a _ { j } ^ { i }  a _ { j } \in X$ as $i  \infty$ . Then also, $A = \left\{ a _ { j } \right\} \subset X$  ! 2 ! 1is dense. Next, use a diagonal argument to find a subsequence D of functions that converge on the above sequences. Finally, show that this sequence converges as promised. □

### 11.1.4 Compactness of Classes of Metric Spaces

We now turn our attention to conditions that ensure convergence of spaces. More precisely we want some good criteria for when a collection of (pointed) spaces is precompact (i.e., closure is compact).

For a compact metric space X; define the capacity and covering functions as follows

$$
\operatorname{Cap} (\varepsilon) = \operatorname{Cap} _ {X} (\varepsilon) = \text { maximum   number   of   disjoint } \frac {\epsilon}{2} \text {-balls   in } X,
$$

$$
\operatorname{Cov} (\varepsilon) = \operatorname{Cov} _ {X} (\varepsilon) = \text { minimum   number   of } \varepsilon \text {-balls   it   takes   to   cover } X.
$$

First, note that Cov $\left( \varepsilon \right) \leq \mathbf { C a p } \left( \varepsilon \right)$ . To see this, select a maximum number of disjoint balls $B \left( x _ { i } , \epsilon / 2 \right)$ and consider the collection $B \left( x _ { i } , \varepsilon \right)$ . In case the latter balls do not cover X there exists $x \in X - \cup B \left( x _ { i } , \varepsilon \right)$ : This would imply that $B \left( x , \epsilon / 2 \right)$ is disjoint from all of the balls $B \left( x _ { i } , \epsilon / 2 \right)$ [ : Thus showing that the original $\epsilon / 2 { \mathrm { - } } { \mathrm { b a l l s } }$ did not form a maximal disjoint family.

Another important observation is that if two compact metric spaces X and Y satisfy $d _ { G - H } \left( X , Y \right) < \delta$ ; then it follows from the triangle inequality that:

$$
\operatorname{Cov} _ {X} (\varepsilon + 2 \delta) \leq \operatorname{Cov} _ {Y} (\varepsilon),
$$

$$
\operatorname{Cap} _ {X} (\varepsilon) \geq \operatorname{Cap} _ {Y} (\varepsilon + 2 \delta).
$$

With this information we can characterize precompact classes of compact metric spaces.

Proposition 11.1.10 (Gromov, 1980). For a class $\mathcal { C } \subset ( \mathcal { M } , d _ { G - H } )$ all of whose diameters are bounded by $D < \infty$  , the following statements are equivalent:

(1) $\mathcal { C }$ is precompact, i.e., every sequence in C has a subsequence that is convergent in $( \mathcal { M } , d _ { G - H } )$ :   
(2) There is a function $N _ { 1 } ( \varepsilon ) : ( 0 , \alpha )  ( 0 , \infty )$ such that $\mathrm { C a p } _ { X } \left( \varepsilon \right) \leq N _ { 1 }$ ."/ for all $X \in \mathcal { C } .$ :   
2(3) There is a function $N _ { 2 } ( \varepsilon ) : ( 0 , \alpha )  ( 0 , \infty )$ / such that $\mathrm { C o v } _ { X } \left( \varepsilon \right) \leq N _ { 2 }$ ."/ for all $X \in \mathcal { C } .$

Proof. $( 1 ) \ \Rightarrow \ ( 2 )$ : If $\mathcal { C }$ is precompact, then for every $\varepsilon \ \mathrm { ~ > ~ } \ 0$ we can find $X _ { 1 } , \ldots , X _ { k } \ \in \ { \mathcal { C } }$ such that for any $X ~ \in ~ \mathcal { C }$ we have that $d _ { G - H } \left( X , X _ { i } \right) \ < \ \epsilon / 4$ for 2some i: Then

$$
\operatorname{Cap} _ {X} (\varepsilon) \leq \operatorname{Cap} _ {X _ {i}} \left(\frac {\epsilon}{2}\right) \leq \max _ {i} \operatorname{Cap} _ {X _ {i}} \left(\frac {\epsilon}{2}\right).
$$

This gives a bound for $\mathrm { C a p } _ { X } \left( \varepsilon \right)$ for each $\varepsilon > 0$ :

.2/  .3/ Use $N _ { 2 } = N _ { 1 }$ .

$( 3 ) \Rightarrow ( 1 )$ D: It suffices to show that $\mathcal { C }$ is totally bounded, i.e., for each $\varepsilon > 0$ we )can find finitely many metric spaces $X _ { 1 } , \dots , X _ { k } \in { \mathcal { M } }$ such that any metric space in $\mathcal { C }$ is within " of some $X _ { i }$ 2in the Gromov-Hausdorff metric. Since $\mathrm { C o v } _ { X } ( \epsilon / 2 ) \le$ $N \left( \epsilon / _ { 2 } \right)$ , we know that any $X ~ \in ~ \mathcal { C }$ is within $\frac { \varepsilon } { 2 }$ of a finite subset with at most $\begin{array} { r } { N \left( \frac { \varepsilon } { 2 } \right) } \end{array}$ 2elements in it. Using the induced metric we think of these finite subsets as finite metric spaces. The metric on such a finite metric space consists of a matrix $\left( d _ { i j } \right) , 1 \le i , j \le N \left( \epsilon / 2 \right)$ , where each entry satisfies $d _ { i j } \in [ 0 , D ]$ . From among all such finite metric spaces, it is possible to select a finite number of them such that any of the matrices $\left( d _ { i j } \right)$ is within $\epsilon / { } _ { 2 }$ of one matrix from the finite selection of matrices. This means that the spaces are within $\epsilon / { } _ { 2 }$ of each other. We have then found the desired finite collection of metric spaces.

As a corollary we also obtain a precompactness theorem in the pointed category.

Corollary 11.1.11. A collection $\mathcal { C } \subset \mathcal { M } _ { * }$ is precompact if and only if for each $R > 0$ the collection

$$
\left\{\bar {B} (x, R) \mid \bar {B} (x, R) \subset (X, x) \in \mathscr {C} \right\} \subset (\mathscr {M}, d _ {G - H})
$$

is precompact.

In order to achieve compactness we need a condition that is relatively easy to check.

We say that a metric space X satisfies the metric doubling condition with constant C, if each metric ball $B \left( p , R \right)$ can be covered by at most C balls of radius $R / 2$ .

Proposition 11.1.12. If all metric spaces in a class ${ \mathcal { C } } \subset ( { \mathcal { M } } , d _ { G - H } )$ satisfy the metric doubling condition with constant $C < \infty$  and all have diameters bounded by $D < \infty$ 1, then the class is precompact in the Gromov-Hausdorff metric.

Proof. Every metric space $X \in \mathcal { C }$ can be covered by at most $C ^ { N }$ balls of radius $2 ^ { - N } D$ 2. Consequently, X can be covered by at most $C ^ { N }$ balls of radius $\varepsilon \in \left[ 2 ^ { - N } D , 2 ^ { - N + 1 } D \right]$ . This gives us the desired estimate on $\operatorname { C o v } _ { X } \left( \varepsilon \right)$ .

Using the relative volume comparison theorem we can show

Corollary 11.1.13. For any integer $n \geq 2 , k \in \mathbb { R }$ ; and $D > 0$ the following classes are precompact:

(1) The collection of closed Riemannian n-manifolds with Ric $\ge ~ ( n - 1 ) k$ and ${ \mathrm { d i a m } } \leq D .$ :   
(2) The collection of pointed complete Riemannian n-manifolds with Ric $\geq$ $( n - 1 ) k$ :

Proof. It suffices to prove (2). Fix $\begin{array} { r l r } { R } & { { } > } & { 0 } \end{array}$ : We have to show that there can’t be too many disjoint balls inside $\bar { B } \left( x , R \right) ~ \subset ~ M .$ : To see this, suppose $B \left( x _ { 1 } , \varepsilon \right) , \ldots , B \left( x _ { N } , \varepsilon \right) \subset \bar { B } \left( x , R \right)$ are disjoint. If $B \left( x _ { i } , \varepsilon \right)$ is the ball with the smallest volume, we have

$$
N \leq \frac {\operatorname{vol} B (x , R)}{\operatorname{vol} B (x _ {i} , \varepsilon)} \leq \frac {\operatorname{vol} B (x _ {i} , 2 R)}{\operatorname{vol} B (x _ {i} , \varepsilon)} \leq \frac {v (n , k , 2 R)}{v (n , k , \varepsilon)}.
$$

This gives the desired bound.

It seems intuitively clear that an n-dimensional space should have Cov $( \varepsilon ) \sim \varepsilon ^ { - n }$ as $\varepsilon \to 0$ : The Minkowski dimension of a metric space is defined as

$$
\dim X = \limsup _ {\varepsilon \to 0} \frac {\log \operatorname{Cov} (\varepsilon)}{- \log \varepsilon}.
$$

This definition will in fact give the right answer for Riemannian manifolds. Some fractal spaces might, however, have non-integral dimension. Now observe that

$$
\frac {v (n , k , 2 R)}{v (n , k , \varepsilon)} \sim \varepsilon^ {- n}.
$$

Therefore, if we can show that covering functions carry over to limit spaces, then we will have shown that manifolds with lower curvature bounds can only collapse in dimension.

Lemma 11.1.14. Let $\mathcal { C } \left( N \left( \varepsilon \right) \right)$ be the collection of metric spaces with Cov $( \varepsilon ) \leq$ N ."/ : If N is continuous, then $\mathcal { C } \left( N \left( \varepsilon \right) \right)$ is compact.

Proof. We already know that this class is precompact. So we only have to show that if $X _ { i } \to X$ and $\mathrm { C o v } _ { X _ { i } } \left( \varepsilon \right) \leq N \left( \varepsilon \right)$ ; then also $\mathbf { C o v } _ { X } \left( \varepsilon \right) \leq N \left( \varepsilon \right)$ : This follows easily !from

$$
\operatorname{Cov} _ {X} (\varepsilon) \leq \operatorname{Cov} _ {X _ {i}} \left(\varepsilon - 2 d _ {G - H} (X, X _ {i})\right) \leq N \left(\varepsilon - 2 d _ {G - H} (X, X _ {i})\right)
$$

and

$$
N \left(\varepsilon - 2 d _ {G - H} \left(X, X _ {i}\right)\right)\rightarrow N (\varepsilon) \text {as} i \rightarrow \infty .
$$

## 11.2 Hölder Spaces and Schauder Estimates

First, we define the Hölder norms and Hölder spaces, and then briefly discuss the necessary estimates we need for elliptic operators for later applications. The standard reference for all the material here is the classic book by Courant and Hilbert [35], especially chapter IV, and the thorough text [50], especially chapters 1–6. A more modern text that also explains how PDEs are used in geometry, including some of the facts we need is [99], especially vol. III.

### 11.2.1 Hölder Spaces

Fix a bounded domain $\Omega \subset \mathbb { R } ^ { n }$ . The bounded continuous functions from 
 to $\mathbb { R } ^ { k }$ are denoted by $C ^ { 0 } \left( \Omega , \mathbb { R } ^ { k } \right)$ ; and we use the sup-norm

$$
\| u \| _ {C ^ {0}} = \sup _ {x \in \Omega} | u (x) |
$$

on this space. This makes $C ^ { 0 } \left( \Omega , \mathbb { R } ^ { k } \right)$ into a Banach space. We wish to generalize this so that we still have a Banach space, but in addition also take into account derivatives of the functions. The first natural thing to do is to define $C ^ { m } \left( \Omega , \mathbb { R } ^ { k } \right)$ as the functions with m continuous partial derivatives. Using multi-index notation, we define

$$
\partial^ {I} u = \partial_ {1} ^ {i _ {1}} \dots \partial_ {n} ^ {i _ {n}} u = \frac {\partial^ {| I |} u}{\partial (x ^ {1}) ^ {i _ {1}} \cdots \partial (x ^ {n}) ^ {i _ {n}}},
$$

where $I = ( i _ { 1 } , \ldots , i _ { n } )$ and $| I | = i _ { 1 } + \cdots + i _ { n }$ . Then the $C ^ { m } { \mathrm { - n o r m i s } }$

$$
\left\| u \right\| _ {C ^ {m}} = \left\| u \right\| _ {C ^ {0}} + \sum_ {1 \leq | I | \leq m} \left\| \partial^ {I} u \right\| _ {C ^ {0}}.
$$

This norm does result in a Banach space, but the inclusions

$$
C ^ {m} \left(\Omega , \mathbb {R} ^ {k}\right) \subset C ^ {m - 1} \left(\Omega , \mathbb {R} ^ {k}\right)
$$

are not closed subspaces. For instance, $f \left( x \right) = \left| x \right|$ is in the closure of

$$
C ^ {1} ([ - 1, 1 ], \mathbb {R}) \subset C ^ {0} ([ - 1, 1 ], \mathbb {R}).
$$

To accommodate this problem, we define for each $\alpha \in ( 0 , 1 ]$ the $C ^ { \alpha }$ -pseudo-norm of $u : \Omega \to \mathbb { R } ^ { k }$ as

$$
\| u \| _ {\alpha} = \sup _ {x, y \in \Omega} \frac {| u (x) - u (y) |}{| x - y | ^ {\alpha}}.
$$

When $\alpha = 1$ ; this gives the best Lipschitz constant for u:

DDefine the Hölder space $C ^ { m , \alpha } \left( \Omega , \mathbb { R } ^ { k } \right)$ as being the functions in $C ^ { m } \left( \Omega , \mathbb { R } ^ { k } \right)$ such that all mth-order partial derivatives have finite $C ^ { \alpha }$ -pseudo-norm. On this space we use the norm

$$
\left\| u \right\| _ {C ^ {m, \alpha}} = \left\| u \right\| _ {C ^ {m}} + \sum_ {| I | = m} \left\| \partial^ {I} u \right\| _ {\alpha}.
$$

If we wish to be specific about the domain, then we write $\| u \| _ { C ^ { m , \alpha } , \Omega }$ : With this notation we can show

Lemma 11.2.1. $C ^ { m , \alpha } \left( \Omega , \mathbb { R } ^ { k } \right)$ is a Banach space with the $C ^ { m , \alpha }$ -norm. Furthermore, the inclusion

$$
C ^ {m, \alpha} (\Omega , \mathbb {R} ^ {k}) \subset C ^ {m, \beta} (\Omega , \mathbb {R} ^ {k}),
$$

where $\beta < \alpha$ is always compact, i.e., it maps closed bounded sets to compact sets.

Proof. We only need to show this in the case where $m = 0 ;$ the more general case is then a fairly immediate consequence.

First, we must show that any Cauchy sequence $\left\{ u _ { i } \right\}$ in $C ^ { \alpha } \left( \Omega , \mathbb { R } ^ { k } \right)$ converges. Since it is also a Cauchy sequence in $C ^ { \boldsymbol { 0 } } \left( \Omega , \mathbf { \bar { \mathbb { R } } } ^ { k } \right)$ f gwe have that $\dot { u _ { i } }  u \in C ^ { 0 }$ in the $C ^ { 0 } { \mathrm { - n o r m } }$ . For fixed $x \neq y$ observe that

$$
\frac {\left| u _ {i} (x) - u _ {i} (y) \right|}{\left| x - y \right| ^ {\alpha}} \rightarrow \frac {\left| u (x) - u (y) \right|}{\left| x - y \right| ^ {\alpha}}.
$$

As the left-hand side is uniformly bounded, we also get that the right-hand side is bounded, thus showing that $u \in C ^ { \alpha }$ :

Finally select $\varepsilon > 0$ 2and N so that for $i , j \geq N$ and $x \neq y$

$$
\frac {\left| \left(u _ {i} (x) - u _ {j} (x)\right) - \left(u _ {i} (y) - u _ {j} (y)\right) \right|}{| x - y | ^ {\alpha}} \leq \varepsilon .
$$

If we let $j \to \infty$ ; this shows that

$$
\frac {\left| \left(u _ {i} (x) - u (x)\right) - \left(u _ {i} (y) - u (y)\right) \right|}{\left| x - y \right| ^ {\alpha}} \leq \varepsilon .
$$

Hence $u _ { i } \to u$ in the $C ^ { \alpha }$ -topology.

!Now for the last statement. A bounded sequence in $C ^ { \alpha } \left( \Omega , \mathbb { R } ^ { k } \right)$ is equicontinuous so the Arzela-Ascoli lemma shows that the inclusion $C ^ { \alpha } \overset { \cdot } { \left( \Omega , \mathbb { R } ^ { k } \right) } \subset C ^ { 0 } \left( \Omega , \mathbb { R } ^ { k } \right)$ is compact. We then use

$$
\frac {| u (x) - u (y) |}{| x - y | ^ {\beta}} = \left(\frac {| u (x) - u (y) |}{| x - y | ^ {\alpha}}\right) ^ {\beta / \alpha} \cdot | u (x) - u (y) | ^ {1 - \beta / \alpha}
$$

to conclude that

$$
\left\| u \right\| _ {\beta} \leq \left(\left\| u \right\| _ {\alpha}\right) ^ {\beta / \alpha} \cdot \left(2 \cdot \left\| u \right\| _ {C ^ {0}}\right) ^ {1 - \beta / \alpha}.
$$

Therefore, a sequence that converges in $C ^ { 0 }$ and is bounded in $C ^ { \alpha }$ ; also converges in $C ^ { \beta }$ , as long as $\beta < \alpha \leq 1$ :

### 11.2.2 Elliptic Estimates

We now turn our attention to elliptic operators of the form

$$
L u = a ^ {i j} \partial_ {i} \partial_ {j} u + b ^ {i} \partial_ {i} u = f,
$$

where $a ^ { i j } = a ^ { j i }$ and $a ^ { i j } , b ^ { i }$ are functions. The operator is called elliptic when the matrix $\left( a ^ { i j } \right)$ Dis positive definite. Throughout we assume that all eigenvalues for $\left( a ^ { i j } \right)$ cYmaanlowb lie in some interval $\left[ \lambda , \lambda ^ { - 1 } \right] , \lambda > 0$ ; and that the coefficients satisfy $\begin{array} { r } { \left\| a ^ { i j } \right\| _ { \alpha } \le \dot { \lambda } ^ { - 1 } } \end{array}$ and $\left\| b ^ { i } \right\| _ { \alpha } \leq \lambda ^ { - 1 }$ . We state without proof the a priori estimates, usually called the Schauder or elliptic estimates, that we need.

Theorem 11.2.2. Let $\Omega \subset \mathbb { R } ^ { n }$ be an open domain of diameter $\le D$ and $K \subset \Omega$ a subdomain such that d $( K , \partial \Omega ) \ge \delta . I f \alpha \in ( 0 , 1 )$  ; then there is a constant $C =$ $C \left( n , \alpha , \lambda , \delta , D \right)$ such that

$$
\left\| u \right\| _ {C ^ {2, \alpha}, K} \leq C \left(\left\| L u \right\| _ {C ^ {\alpha}, \Omega} + \left\| u \right\| _ {C ^ {\alpha}, \Omega}\right),
$$

$$
\left\| u \right\| _ {C ^ {1, \alpha}, K} \leq C \left(\left\| L u \right\| _ {C ^ {0}, \Omega} + \left\| u \right\| _ {C ^ {\alpha}, \Omega}\right).
$$

Furthermore, if 
 has smooth boundary and $u = \varphi$ on @
; then there is a constant $C = C \left( n , \alpha , \lambda , D \right)$ Dsuch that on all of 
 we have

$$
\left\| u \right\| _ {C ^ {2, \alpha}, \Omega} \leq C \left(\left\| L u \right\| _ {C ^ {\alpha}, \Omega} + \left\| \varphi \right\| _ {C ^ {2, \alpha}, \partial \Omega}\right).
$$

One way of proving these results is to establish them first for the simplest operator:

$$
L u = \Delta u = \delta^ {i j} \partial_ {i} \partial_ {j} u.
$$

Then observe that a linear change of coordinates shows that we can handle operators with constant coefficients:

$$
L u = \Delta u = a ^ {i j} \partial_ {i} \partial_ {j} u.
$$

Finally, Schauder’s trick is that the assumptions about the functions $a ^ { i j }$ imply that they are locally almost constant. A partition of unity type argument then finishes the analysis.

The first-order term doesn’t cause much trouble and can even be swept under the rug in the case where the operator is in divergence form:

$$
L u = a ^ {i j} \partial_ {i} \partial_ {j} u + b ^ {i} \partial_ {i} u = \partial_ {i} (a ^ {i j} \partial_ {j} u).
$$

Such operators are particularly nice when one wishes to use integration by parts, as we have

$$
\int_ {\Omega} \left(\partial_ {i} \left(a ^ {i j} \partial_ {j} u\right)\right) h = - \int_ {\Omega} a ^ {i j} \partial_ {j} u \partial_ {i} h
$$

when $h = 0$ on @
: This is interesting in the context of geometric operators, as the DLaplacian on manifolds in local coordinates is of that form

$$
L u = \Delta_ {g} u = \frac {1}{\sqrt {\det g _ {i j}}} \partial_ {i} \left(\sqrt {\det g _ {i j}} \cdot g ^ {i j} \cdot \partial_ {j} u\right).
$$

Thus

$$
\int v L u \mathrm{vol} = \int v \partial_ {i} \left(\sqrt {\det g _ {i j}} \cdot g ^ {i j} \cdot \partial_ {j} u\right).
$$

The above theorem has an almost immediate corollary.

Corollary 11.2.3. If in addition we assume that $\left\| a ^ { i j } \right\| _ { C ^ { m , \alpha } } , \ \left\| b ^ { i } \right\| _ { C ^ { m , \alpha } } \leq \lambda ^ { - 1 }$ , then there is a constant $C = C \left( n , m , \alpha , \lambda , \delta , D \right)$ such that

$$
\left\| u \right\| _ {C ^ {m + 2, \alpha}, K} \leq C \left(\left\| L u \right\| _ {C ^ {m, \alpha}, \Omega} + \left\| u \right\| _ {C ^ {\alpha}, \Omega}\right).
$$

And on a domain with smooth boundary,

$$
\left\| u \right\| _ {C ^ {m + 2, \alpha}, \Omega} \leq C \left(\left\| L u \right\| _ {C ^ {m, \alpha}, \Omega} + \left\| \varphi \right\| _ {C ^ {m + 2, \alpha}, \partial \Omega}\right).
$$

The Schauder estimates can be used to show that the Dirichlet problem always has a unique solution.

Theorem 11.2.4. Suppose $\Omega \subset \mathbb { R } ^ { n }$ is a bounded domain with smooth boundary. Then the Dirichlet problem

$$
L u = f, \left. u \right| _ {\partial \Omega} = \varphi
$$

always has a unique solution $u \in C ^ { 2 , \alpha } \left( \Omega \right) i f f \in C ^ { \alpha } \left( \Omega \right)$ and $\varphi \in C ^ { 2 , \alpha } \left( \partial \Omega \right)$ :

Observe that uniqueness is an immediate consequence of the maximum principle. The existence part requires more work.

### 11.2.3 Harmonic Coordinates

The above theorems make it possible to introduce harmonic coordinates on Riemannian manifolds.

Lemma 11.2.5. $I f \left( M , g \right)$ is an n-dimensional Riemannian manifold and $p \in M$ ; then there is a neighborhood $U \ni p$ 2 on which we can find a harmonic coordinate system $x = \left( x ^ { 1 } , \ldots , x ^ { n } \right) : U \to \mathbb { R } ^ { n }$ , i.e., a coordinate system such that the functions $x ^ { i }$ D W !are harmonic with respect to the Laplacian on $( M , g )$ :

Proof. First select a coordinate system $y = \left( y ^ { 1 } , \ldots , y ^ { n } \right)$ on a neighborhood around p such that $y \left( p \right) = 0$ D: We can then think of M as being an open subset of $\mathbb { R } ^ { n }$ and $p = 0$ D: The metric g is written as $\begin{array} { r } { g _ { i j } = g \left( \partial _ { i } , \partial _ { j } \right) = g \left( \frac { \partial } { \partial y ^ { i } } , \frac { \partial } { \partial y ^ { j } } \right) } \end{array}$ in the standard Cartesian coordinates $\left( y ^ { 1 } , \ldots , y ^ { n } \right)$ : We must then find a coordinate transformation $y \mapsto x$ such that

$$
\Delta x ^ {k} = \frac {1}{\sqrt {\det g _ {i j}}} \partial_ {i} \left(\sqrt {\det g _ {i j}} \cdot g ^ {i j} \cdot \partial_ {j} x ^ {k}\right) = 0.
$$

To find these coordinates, fix a small ball $B \left( 0 , \varepsilon \right)$ and solve the Dirichlet problem

$$
\Delta x ^ {k} = 0, x ^ {k} = y ^ {k} \text {   on   } \partial B (0, \varepsilon).
$$

We have then found n harmonic functions that should be close to the original coordinates. The only problem is that we don’t know if they actually are coordinates. The Schauder estimates tell us that

$$
\left\| x - y \right\| _ {C ^ {2, \alpha}, B (0, \varepsilon)} \leq C \left(\left\| \Delta (x - y) \right\| _ {C ^ {\alpha}, B (0, \varepsilon)} + \left\| (x - y) _ {| \partial B (0, \varepsilon)} \right\| _ {C ^ {2, \alpha}, \partial B (0, \varepsilon)}\right)
$$

$$
= C \left\| \Delta y \right\| _ {C ^ {\alpha}, B (0, \varepsilon)}.
$$

If matters were arranged such that $\| \Delta y \| _ { C ^ { \alpha } , B ( 0 , \varepsilon ) } \to 0 { \mathrm { ~ a s ~ } } \varepsilon \to 0$ , then we could conclude that Dx and $D y$ k k ! !are close for small ": Since y does form a coordinate system, we would then also be able to conclude that x formed a coordinate system.

Now observe that if y were chosen as exponential Cartesian coordinates, then we would have that $\partial _ { k } g _ { i j } = 0$ at p: The formula for $\Delta y$ then shows that $\Delta y = 0$ at p: Hence, $\| \Delta y \| _ { C ^ { \alpha } , B ( 0 , \varepsilon ) } \to 0 { \mathrm { ~ a s ~ } } \varepsilon \to 0$ D. Finally recall that the constant C depends k k ! !only on an upper bound for the diameter of the domain aside from $\alpha , n , \lambda$ : Thus, $\| x - y \| _ { C ^ { 2 , \alpha } , B ( 0 , \varepsilon ) } \to 0 { \mathrm { ~ a s ~ } } \varepsilon \to 0$ .

One reason for using harmonic coordinates on Riemannian manifolds is that both the Laplacian and Ricci curvature tensor have particularly elegant expressions in such coordinates.

Lemma 11.2.6. Let $( M , g )$ be an n-dimensional Riemannian manifold with a harmonic coordinate system $x : U \to \mathbb { R } ^ { n }$ : Then

$$
\Delta u = \frac {1}{\sqrt {\det g _ {s t}}} \partial_ {i} \left(\sqrt {\det g _ {s t}} \cdot g ^ {i j} \cdot \partial_ {j} u\right) = g ^ {i j} \partial_ {i} \partial_ {j} u.
$$

(2)

$$
\frac {1}{2} \Delta g _ {i j} + Q (g, \partial g) = - \operatorname{Ric} _ {i j} = - \operatorname{Ric} (\partial_ {i}, \partial_ {j}).
$$

Here Q is a universal rational expression where the numerator is polynomial in the matrix g and quadratic in $\partial g$ , while the denominator depends only on $\scriptstyle { \sqrt { \operatorname { d e t } g _ { i j } } }$ .

Proof. (1) By definition:

$$
\begin{array}{l} 0 = \Delta x ^ {k} \\ = \frac {1}{\sqrt {\det g _ {s t}}} \partial_ {i} \left(\sqrt {\det g _ {s t}} \cdot g ^ {i j} \cdot \partial_ {j} x ^ {k}\right) \\ = g ^ {i j} \partial_ {i} \partial_ {j} x ^ {k} + \frac {1}{\sqrt {\det g _ {s t}}} \partial_ {i} \left(\sqrt {\det g _ {s t}} \cdot g ^ {i j}\right) \cdot \partial_ {j} x ^ {k} \\ = g ^ {i j} \partial_ {i} \delta_ {j} ^ {k} + \frac {1}{\sqrt {\det g _ {s t}}} \partial_ {i} \left(\sqrt {\det g _ {s t}} \cdot g ^ {i j}\right) \cdot \delta_ {j} ^ {k} \\ = 0 + \frac {1}{\sqrt {\det g _ {s t}}} \partial_ {i} \left(\sqrt {\det g _ {s t}} \cdot g ^ {i k}\right) \\ = \frac {1}{\sqrt {\det g _ {s t}}} \partial_ {i} \left(\sqrt {\det g _ {s t}} \cdot g ^ {i k}\right). \\ \end{array}
$$

Thus, it follows that

$$
\begin{array}{l} \Delta u = \frac {1}{\sqrt {\det g _ {s t}}} \partial_ {i} \left(\sqrt {\det g _ {s t}} \cdot g ^ {i j} \cdot \partial_ {j} u\right) \\ = g ^ {i j} \partial_ {i} \partial_ {j} u + \frac {1}{\sqrt {\det g _ {s t}}} \partial_ {i} \left(\sqrt {\det g _ {s t}} \cdot g ^ {i j}\right) \cdot \partial_ {j} u \\ = g ^ {i j} \partial_ {i} \partial_ {j} u. \\ \end{array}
$$

(2) Recall that if u is harmonic, then the Bochner formula for $\nabla \boldsymbol { u }$ is

$$
\Delta \left(\frac {1}{2} | \nabla u | ^ {2}\right) = | \operatorname{Hess} u | ^ {2} + \operatorname{Ric} (\nabla u, \nabla u).
$$

Here the term $\left| \mathrm { H e s s } u \right| ^ { 2 }$ can be computed explicitly and depends only on the j jmetric and its first derivatives. In particular,

$$
\frac {1}{2} \Delta g (\nabla x ^ {k}, \nabla x ^ {k}) - | \operatorname{Hess} x ^ {k} | ^ {2} = \operatorname{Ric} (\nabla x ^ {k}, \nabla x ^ {k}).
$$

Polarizing this quadratic expression gives us an identity of the form

$$
\frac {1}{2} \Delta g (\nabla x ^ {i}, \nabla x ^ {j}) - g (\operatorname{Hess} x ^ {i}, \operatorname{Hess} x ^ {j}) = \operatorname{Ric} (\nabla x ^ {i}, \nabla x ^ {j}).
$$

Now use that $\nabla x ^ { k } = g ^ { i j } \partial _ { j } x ^ { k } \partial _ { i } = g ^ { i k } \partial _ { i }$ to see that $g \left( \nabla x ^ { i } , \nabla x ^ { j } \right) = g ^ { i j }$ : We then have

$$
\frac {1}{2} \Delta g ^ {i j} - g (\mathrm{Hess} x ^ {i}, \mathrm{Hess} x ^ {j}) = \operatorname{Ric} (\nabla x ^ {i}, \nabla x ^ {j}),
$$

which in matrix form looks like

$$
\frac {1}{2} \left[ \Delta g ^ {i j} \right] - \left[ g \left(\operatorname{Hess} x ^ {i}, \operatorname{Hess} x ^ {j}\right) \right] = \left[ g ^ {i k} \right] \cdot \left[ \operatorname{Ric} \left(\partial_ {k}, \partial_ {l}\right) \right] \cdot \left[ g ^ {l j} \right].
$$

This is, of course, not the promised formula. Instead, it is a similar formula for the inverse of $[ g _ { i j } ]$ . Now use the matrix equation $[ g _ { i k } ] \cdot [ g ^ { k j } ] = [ \delta _ { i } ^ { j } ]$ to conclude that

$$
\begin{array}{l} 0 = \Delta \left(\left[ g _ {i k} \right] \cdot \left[ g ^ {k j} \right]\right) \\ = \left[ \Delta g _ {i k} \right] \cdot \left[ g ^ {k j} \right] + 2 \left[ \sum_ {k} g (\nabla g _ {i k}, \nabla g ^ {k j}) \right] + \left[ g _ {i k} \right] \cdot \left[ \Delta g ^ {k j} \right] \\ = [ \Delta g _ {i k} ] \cdot [ g ^ {k j} ] + 2 [ \nabla g _ {i k} ] \cdot [ \nabla g ^ {k j} ] + [ g _ {i k} ] \cdot [ \Delta g ^ {k j} ]. \\ \end{array}
$$

Inserting this in the above equation yields

$$
\begin{array}{l} \left[ \Delta g _ {i j} \right] = - 2 \left[ \nabla g _ {i k} \right] \cdot \left[ \nabla g ^ {k l} \right] \cdot \left[ g _ {l j} \right] - \left[ g _ {i k} \right] \cdot \left[ \Delta g ^ {k l} \right] \cdot \left[ g _ {l j} \right] \\ = - 2 \left[ \nabla g _ {i k} \right] \cdot \left[ \nabla g ^ {k l} \right] \cdot \left[ g _ {l j} \right] \\ - 2 \left[ g _ {i k} \right] \cdot \left[ g \left(\mathrm{Hess} x ^ {k}, \mathrm{Hess} x ^ {l}\right) \right] \cdot \left[ g _ {l j} \right] \\ - 2 \left[ g _ {i k} \right] \cdot \left[ g ^ {k s} \right] \cdot \left[ \operatorname{Ric} \left(\partial_ {s}, \partial_ {t}\right) \right] \cdot \left[ g ^ {t l} \right] \cdot \left[ g _ {l j} \right] \\ = - 2 \left[ \nabla g _ {i k} \right] \cdot \left[ \nabla g ^ {k l} \right] \cdot \left[ g _ {l j} \right] - 2 \left[ g _ {i k} \right] \cdot \left[ g \left(\mathrm{Hess} x ^ {k}, \mathrm{Hess} x ^ {l}\right) \right] \cdot \left[ g _ {l j} \right] \\ - 2 \left[ \operatorname{Ric} \left(\partial_ {i}, \partial_ {j}\right) \right]. \\ \end{array}
$$

Each entry in these matrices then satisfies

$$
\begin{array}{l} \frac {1}{2} \Delta g _ {i j} + Q _ {i j} (g, \partial g) = - \operatorname{Ric} _ {i j}, \\ Q _ {i j} = - 2 \sum_ {k, l} g (\nabla g _ {i k}, \nabla g ^ {k l}) g _ {l j} \\ - 2 \sum_ {k, l} g _ {i k} g \left(\operatorname{Hess} x ^ {k}, \operatorname{Hess} x ^ {l}\right) g _ {l j}. \\ \end{array}
$$

It is interesting to apply this formula to the case of an Einstein metric, where $\mathrm { R i c } _ { i j } = \left( n - 1 \right) k g _ { i j }$ . In this case, it reads

$$
\frac {1}{2} \Delta g _ {i j} = - (n - 1) k g _ {i j} - Q (g, \partial g).
$$

The right-hand side makes sense as long as $g _ { i j }$ is $C ^ { 1 }$ . The equation can then be understood in the weak sense: Multiply by some test function, integrate, and use integration by parts to obtain a formula that uses only first derivatives of $g _ { i j }$ on the left-hand side. If $g _ { i j }$ is $C ^ { 1 , \alpha }$ ; then the left-hand side lies in some $C ^ { \beta }$ ; but then our elliptic estimates show that $g _ { i j }$ must be in $C ^ { 2 , \beta }$ . This can be bootstrapped until we have that the metric is $C ^ { \infty }$ : In fact, one can even show that it is analytic. Therefore, we can conclude that any metric which in harmonic coordinates is a weak solution to the Einstein equation must in fact be smooth. We have obviously left out a few details about weak solutions. A detailed account can be found in [99, vol. III].

## 11.3 Norms and Convergence of Manifolds

We next explain how the $C ^ { m , \alpha }$ norm and convergence concepts for functions generalize to Riemannian manifolds. These ideas can be used to prove various compactness and finiteness theorems for classes of Riemannian manifolds.

### 11.3.1 Norms of Riemannian Manifolds

Before defining norms for manifolds, let us discuss which spaces should have norm zero. Clearly Euclidean space is a candidate. But what about open subsets of Euclidean space and other flat manifolds? If we agree that all open subsets of Euclidean space also have norm zero, then any flat manifold becomes a union of manifolds with norm zero and therefore should also have norm zero. In order to create a useful theory, it is often best to have only one space with vanishing norm. Thus we must agree that subsets of Euclidean space cannot have norm zero. To accommodate this problem, we define a family of norms of a Riemannian manifold, i.e., we use a function $N : ( 0 , \infty ) \to ( 0 , \infty )$ rather than just a number. The number $N \left( r \right)$ W 1 ! 1then measures the degree of flatness on the scale of $r ,$ where the standard measure of flatness on the scale of r is the Euclidean ball $B \left( 0 , r \right)$ : For small $r ,$ all flat manifolds then have norm zero; but as r increases we see that the space looks less and less like $B \left( 0 , r \right)$ and therefore the norm will become positive unless the space is Euclidean space.

Let $( M , g , p )$ be a pointed Riemannian n-manifold. We say that the $C ^ { m , \alpha }$ -norm on the scale of r at $p \mathrm { : }$

$$
\left\| (M, g, p) \right\| _ {C ^ {m, \alpha}, r} \leq Q,
$$

provided there exists a $C ^ { m + 1 , \alpha }$ chart $\varphi : ( B ( 0 , r ) , 0 ) \subset \mathbb { R } ^ { n }  ( U , p ) \subset M$ such that

(n1) $| D \varphi | \leq e ^ { Q }$ on B .0; r/ and $\left| { \cal D } \varphi ^ { - 1 } \right| \le e ^ { Q }$ on $U$ . Equivalently, for all $v \in \mathbb { R } ^ { n }$ the metric coefficients satisfy

$$
e ^ {- 2 Q} \delta_ {k l} v ^ {k} v ^ {l} \leq g _ {k l} v ^ {k} v ^ {l} \leq e ^ {2 Q} \delta_ {k l} v ^ {k} v ^ {l}.
$$

(n2) For all multi-indices I with $0 \leq | I | \leq m$

$$
r ^ {| I | + \alpha} \left\| \partial^ {I} g _ {k l} \right\| _ {\alpha} \leq Q.
$$

Globally we define

$$
\| (M, g) \| _ {C ^ {m, \alpha}, r} = \sup _ {p \in M} \| (M, g, p) \| _ {C ^ {m, \alpha}, r}.
$$

Observe that we think of the charts as maps from the fixed space $B \left( 0 , r \right)$ into the manifold. This is in order to have domains for the functions which do not refer to M itself. This simplifies some technical issues and makes it more clear that we are trying to measure how the manifolds differ from the standard objects, namely, Euclidean balls. The first condition tells us that in the chosen coordinates the metric coefficients are bounded from below and above (in particular, we have uniform ellipticity for the Laplacian). The second condition gives us bounds on the derivatives of the metric.

It will be necessary on occasion to work with Riemannian manifolds that are not smooth. The above definition clearly only requires that the metric be $C ^ { m , \alpha }$ in the coordinates we use, and so there is no reason to assume more about the metric. Some of the basic constructions, like exponential maps, then come into question, and indeed, if $m \leq 1$ these concepts might not be well-defined. Therefore, we shall have to be a little careful in some situations.

The norm at a point is always finite, but when M is not compact the global norm might not be finite on any scale.

Example 11.3.1. If $( M , g )$ is a complete flat manifold, then $\| ( M , g ) \| _ { C ^ { m , \alpha } , r } = 0$ for all $r \leq \operatorname { i n j } \left( M , g \right)$ : In particular, $\| ( \mathbb { R } ^ { n } , g _ { \mathbb { R } ^ { n } } ) \| _ { C ^ { m , \alpha } , r } = 0$ k k Dfor all r: We will show that  k k Dthese properties characterize flat manifolds and Euclidean space.

### 11.3.2 Convergence of Riemannian Manifolds

Now for the convergence concept that relates to this new norm. As we can’t subtract manifolds, we have to resort to a different method for defining this. If we fix a closed manifold M; or more generally a precompact subset $A \subset M$ ; then we say that a sequence of functions on A converges in $C ^ { m , \alpha }$ ; if they converge in the charts for some fixed finite covering of coordinate patches that are uniformly bi-Lipschitz. This definition is clearly independent of the finite covering we choose. We can then more generally say that a sequence of tensors converges in $C ^ { m , \alpha }$ if the components of the tensors converge in these patches. This makes it possible to speak about convergence of Riemannian metrics on compact subsets of a fixed manifold.

A sequence of pointed complete Riemannian manifolds is said to converge in the pointed $C ^ { m , \alpha }$ topology, $( M _ { i } , g _ { i } , p _ { i } ) \ \to \ ( M , g , p )$ , if for every $R ~ > ~ 0$ we can find a domain $\Omega \supset B \left( p , R \right) \subset M$ !and embeddings $F _ { i } : \Omega  M _ { i }$ for large i such that $F _ { i } \left( p \right) = p _ { i } , F _ { i } \left( \Omega \right) \supset B \left( p _ { i } , R \right)$ , and $F _ { i } ^ { * } g _ { i } \to g$ on $\Omega$ in the $C ^ { m , \alpha }$ topology. D 
 !It is easy to see that this type of convergence implies pointed Gromov-Hausdorff convergence. When all manifolds in question are closed with a uniform bound on the diameter, then the maps $F _ { i }$ are diffeomorphisms. For closed manifolds we can also speak about unpointed convergence. In this case, convergence can evidently only occur if all the manifolds in the tail end of the sequence are diffeomorphic. In particular, we have that classes of closed Riemannian manifolds that are precompact in some $C ^ { m , \alpha }$ topology contain at most finitely many diffeomorphism types.

A warning about this kind of convergence is in order here. Suppose we have a sequence of metrics $g _ { i }$ on a fixed manifold M: It is possible that these metrics might converge in the sense just defined, without converging in the traditional sense of converging in some fixed coordinate systems. To be more specific, let $g$ be the standard metric on $M = S ^ { 2 }$ : Now define diffeomorphisms $F _ { t }$ coming from the flow Dcorresponding to the vector field that is 0 at the two poles and otherwise points in the direction of the south pole. As t increases, the diffeomorphisms will try to map the whole sphere down to a small neighborhood of the south pole. Therefore, away from the poles the metrics $F _ { t } ^ { * } g$ will converge to 0 in some fixed coordinates. ${ \bf S } _ { 0 }$ they cannot converge in the classical sense. If, however, we pull these metrics back by the diffeomorphisms $F _ { - t } ,$ , then we just get back to $g .$ : Thus the sequence $( M , g _ { t } )$ ; from the new point of view we are considering, is a constant sequence. This is really the right way to think about this as the spaces $\left( S ^ { 2 } , F _ { t } ^ { * } g \right)$ are all isometric as abstract metric spaces.

### 11.3.3 Properties of the Norm

Let us now consider some of the elementary properties of norms and their relation to convergence.

Proposition 11.3.2. Given $( M , g , p ) , m \ge 0 , \alpha \in ( 0 , 1 ]$ we have:

(1) $\| ( M , g , p ) \| _ { C ^ { m , \alpha } , r } = \left\| \left( M , \lambda ^ { 2 } g , p \right) \right\| _ { C ^ { m , \alpha } \lambda r } f o r a l l \lambda > 0 .$   
k k(2) The function $r \mapsto \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r }$ is increasing, continuous, and converges to 0 as $r \to 0$ :   
!(3) Suppose $( M _ { i } , g _ { i } , p _ { i } )  ( M , g , p )$ in $C ^ { m , \alpha }$ : Then

$$
\left\|\left(M _ {i}, g _ {i}, p _ {i}\right)\right\| _ {C ^ {m, \alpha}, r} \rightarrow \left\| (M, g, p) \right\| _ {C ^ {m, \alpha}, r} f o r a l l r > 0.
$$

Moreover, when all the manifolds have uniformly bounded diameter

$$
\left\|\left(M _ {i}, g _ {i}\right)\right\| _ {C ^ {m, \alpha}, r} \rightarrow \left\| (M, g) \right\| _ {C ^ {m, \alpha}, r} f o r a l l r > 0.
$$

(4) $I f \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r } < Q ,$ , then for all $x _ { 1 } , x _ { 2 } \in B \left( 0 , r \right)$ we have

$$
e ^ {- Q} \min \left\{\left| x _ {1} - x _ {2} \right|, 2 r - \left| x _ {1} \right| - \left| x _ {2} \right| \right\} \leq \left| \varphi (x _ {1}) \varphi (x _ {2}) \right| \leq e ^ {Q} \left| x _ {1} - x _ {2} \right|.
$$

(5) The norm $\| ( M , g , p ) \| _ { C ^ { m , \alpha } , r }$ is realized by a $C ^ { m + 1 , \alpha } { \mathrm { - c h a r t } }$   
k k(6) If M is compact, then $\| ( M , g ) \| _ { C ^ { m , \alpha } , r } = \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r }$ for some $p \in M$ .

Proof. (1) If we change the metric g to $\lambda ^ { 2 } g$ ; then we can change the chart $\varphi :$ $B ( 0 , r )  M$ to $\varphi ^ { \lambda } \left( x \right) = \varphi \left( \lambda ^ { - 1 } x \right) : B \left( 0 , \lambda r \right) \to M$ W. Since we scale the metric ! D W !at the same time, the conditions n1 and n2 will still hold with the same $Q .$ :

(2) By restricting $\varphi : B ( 0 , r ) \  \ M$ to a smaller ball we immediately get that $r \mapsto \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r }$ !is increasing. Next, consider again the chart $\varphi ^ { \lambda } \left( x \right) =$ $\varphi \left( \lambda ^ { - 1 } x \right) : B \left( 0 , \lambda r \right) \to M$ D, without changing the metric g: If we assume that $\| ( M , g , p ) \| _ { C ^ { m , \alpha } , r } < Q .$ !, then

$$
\left\| (M, g, p) \right\| _ {C ^ {m, \alpha}, \lambda r} \leq \max \left\{Q \pm | \log \lambda |, Q \cdot \lambda^ {2} \right\}.
$$

Denoting $N \left( r \right) = \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r }$ , we obtain

$$
N (\lambda r) \leq \max \left\{N (r) \pm | \log \lambda |, N (r) \cdot \lambda^ {2} \right\}.
$$

By letting $\begin{array} { r } { \lambda = \frac { r _ { i } } { r } } \end{array}$ ; where $r _ { i } \to r$ ; we see that this implies

$$
\lim \sup N \left(r _ {i}\right) \leq N \left(r\right).
$$

Conversely,

$$
\begin{array}{l} N (r) = N \left(\frac {r}{r _ {i}} r _ {i}\right) \\ \leq \max \left\{N (r _ {i}) \pm \left| \log \frac {r}{r _ {i}} \right|, N (r _ {i}) \cdot \left(\frac {r}{r _ {i}}\right) ^ {2} \right\}. \\ \end{array}
$$

So

$$
\begin{array}{l} N (r) \leq \liminf \max \left\{N (r _ {i}) \pm \left| \log \frac {r}{r _ {i}} \right|, N (r _ {i}) \cdot \left(\frac {r}{r _ {i}}\right) ^ {2} \right\} \\ = \liminf N \left(r _ {i}\right). \\ \end{array}
$$

This shows that $N \left( r \right)$ is continuous. To see that $N ( r )  0$ as $r  0$ ; just observe that any coordinate system around a point $p \in M$ !can, after a linear 2change, be assumed to have the property that the metric $g _ { k l } \ = \ \delta _ { k l }$ at $p .$ In particular $| D \varphi | _ { p } | = | D \varphi ^ { - 1 } | _ { p } | = 1$ D: Using these coordinates on sufficiently j D j Dsmall balls will yield the desired charts.

(3) Fix $r > 0$ and $Q > \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r } .$ Pick a domain $\Omega \supset B \left( p , e ^ { Q } r \right)$ such that k kfor large i we have embeddings $F _ { i } : \Omega \to M _ { i }$ with the property that: $F _ { i } ^ { * } g _ { i } \to g$ in $C ^ { m , \alpha }$ on $\Omega$ and $F _ { i } \left( p \right) = p _ { i }$ .

Choose a chart $\varphi : B ( 0 , r )  M$ with properties n1 and n2. Then define charts in $M _ { i }$ by $\varphi _ { i } = F _ { i } \circ \varphi : B \left( 0 , r \right) \to M _ { i }$ and note that since $F _ { i } ^ { * } g _ { i } $ g in $C ^ { m , \alpha }$ D ı W !, these charts satisfy properties n1 and n2 for constants $Q _ { i } \to Q$ !. This shows that

$$
\limsup \| (M _ {i}, g _ {i}, p _ {i}) \| _ {C ^ {m, \alpha}, r} \leq \| (M, g, p) \| _ {C ^ {m, \alpha}, r}.
$$

On the other hand, if $Q > \| ( M _ { i } , g _ { i } , p _ { i } ) \| _ { C ^ { m , \alpha } , r }$ for a sufficiently large i, then select a chart $\varphi _ { i } : B \left( 0 , r \right) \to M _ { i }$ kand consider $\varphi = F _ { i } ^ { - 1 } \circ \varphi _ { i }$ on M. As before, we have

$$
\left\| (M, g, p) \right\| _ {C ^ {m, \alpha}, r} \leq Q _ {i},
$$

where $Q _ { i }$ is close to Q. This implies

$$
\liminf _ {r \to \infty} \| (M, g _ {i}, p _ {i}) \| _ {C ^ {m, \alpha}, r} \geq \| (M, g, p) \| _ {C ^ {m, \alpha}, r}
$$

and proves the result.

When all the spaces have uniformly bounded diameter we choose diffeomorphisms $F _ { i } : M \to M _ { i }$ for large i such that $F _ { i } ^ { * } g _ { i } \to g$ . For every choice of $p \in M$ select $p _ { i } = F _ { i } \left( p \right) \in M _ { i }$ !i and use what we just proved to conclude that

$$
\liminf _ {r \to 0} \| (M _ {i}, g _ {i}) \| _ {C ^ {m, \alpha}, r} \geq \sup _ {p} \| (M, g, p) \| _ {C ^ {m, \alpha}, r}.
$$

Similarly, when $p _ { i } \in M _ { i }$ and $p = F _ { i } ^ { - 1 } \left( p _ { i } \right)$ , it follows that

$$
\limsup \| (M _ {i}, g _ {i}, p _ {i}) \| _ {C ^ {m, \alpha}, r} \leq \sup _ {p} \| (M, g) \| _ {C ^ {m, \alpha}, r}.
$$

(4) The condition $| D \varphi | \ \leq \ e ^ { Q }$ ; together with convexity of $B ( 0 , r )$ ; immediately j j implies the second inequality. For the other, first observe that if any segment from $\varphi \left( x _ { 1 } \right)$ to $\varphi \left( x _ { 2 } \right)$ lies in $U ,$ then $\left| D \varphi ^ { - 1 } \right| \leq e ^ { Q }$ implies, that

$$
\left| x _ {1} - x _ {2} \right| \leq e ^ {Q} \left| \varphi (x _ {1}) \varphi (x _ {2}) \right|.
$$

So we may assume that $\varphi ( x _ { 1 } )$ and $\varphi ( x _ { 2 } )$ are joined by a segment $c : [ 0 , 1 ] \to M$ that leaves U. Split c into $c : [ 0 , t _ { 1 } ) \to U$ and $c : ( t _ { 2 } , 1 ] \to U$ Wwith $c ( t _ { i } ) \in \partial U$ . Then we clearly have

$$
\begin{array}{l} \left| \varphi (x _ {1}) \varphi (x _ {2}) \right| = L (c) \geq L (c | _ {[ 0, t _ {1})}) + L (c | _ {(t _ {2}, 1 ]}) \\ \geq e ^ {- Q} (L (\varphi^ {- 1} \circ c | _ {[ 0, t _ {1})}) + L (\varphi^ {- 1} \circ c | _ {(t _ {2}, 1 ]})) \\ \geq e ^ {- Q} \left(2 r - | x _ {1} | - | x _ {2} |\right). \\ \end{array}
$$

The last inequality follows from the fact that $\varphi ^ { - 1 } \circ c ( 0 ) = x _ { 1 }$ and $\varphi ^ { - 1 } \circ c ( 1 ) =$ $x _ { 2 }$ ; and that $\varphi ^ { - 1 } \circ c \left( t \right)$ approaches $\partial B \left( 0 , r \right)$ ı Das t approaches $t _ { 1 }$ and $t _ { 2 }$ .

ı(5) Given a sequence of charts $\varphi _ { i } : B \left( 0 , r \right) \to M$ that satisfy n1 and n2 with $Q _ { i } $ W ! !Q we can use the Arzela-Ascoli lemma to find a subsequence that converges to a $C ^ { m + 1 , \alpha }$ map $\varphi : B ( 0 , r ) \  \ M$ . Property (4) shows that $\varphi$ is injective W !and becomes a homeomorphism onto its image. This makes $\varphi \mathrm { ~ a ~ }$ chart. We can, after passing to another subsequence, also assume that the metric coefficients converge. This implies that $\varphi$ satisfies n1 and n2 for $Q .$ .

(6) Property (3) implies that $p \mapsto \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r }$ is continuous. Compactness then 7! k kshows that the supremum is a maximum.

Corollary 11.3.3. $I f \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r } \leq Q ,$ , then $B \left( p , e ^ { - Q } r \right) \subset U .$

Proof. Let $q \in \partial U$ be the closest point to p so that $B ( p , | q p | ) \subset U . \operatorname { I f } c : [ 0 , | p q | ] $ 2M is a segment from p to $q ,$ then $c \left( s \right) \in B \left( p , \left| q p \right| \right)$ j for all $s ~ < ~ | q p |$ j j !and we can write $c \left( s \right) = \varphi \left( \bar { c } \left( s \right) \right)$ , where $\bar { c } : [ 0 , | q p | ) \in B \left( 0 , r \right)$ j jhas the property that $\begin{array} { r } { \operatorname* { l i m } _ { t  | q p | } | \bar { c } ( t ) | = r } \end{array}$ N N W j j 2. Property (4) from proposition 11.3.2 then shows that

$$
\begin{array}{l} | q p | \geq \lim _ {s \rightarrow | q p |} | \varphi (\bar {c} (s)) \varphi (0) | \\ \geq \lim _ {s \rightarrow | q p |} e ^ {- Q} \min \left\{\left| \bar {c} (s) \right|, 2 r - \left| \bar {c} (s) \right|\right\} \\ \geq \lim _ {s \to | q p |} e ^ {- Q} | \bar {c} (s) | \\ = e ^ {- Q} r. \\ \end{array}
$$

Corollary 11.3.4. $I f \parallel ( M , g , p ) \parallel _ { C ^ { m , \alpha } , r } = 0$ for some $r ,$ then $p$ is contained in a kneighborhood that is flat.

Proof. It follows from proposition 11.3.2 that there is a $C ^ { m + 1 , \alpha }$ chart $\varphi : B \left( 0 , r \right) \to$ $U \supset B \left( p , e ^ { - Q } r \right)$ with $Q = 0$ . This implies that it is a $C ^ { 1 }$ W !Riemannian isometry and Dthen by theorem 5.6.15 a Riemannian isometry.

### 11.3.4 The Harmonic Norm

We define a more restrictive norm, called the harmonic norm and denoted

$$
\left\| (M, g, p) \right\| _ {C ^ {m, \alpha}, r} ^ {h a r}.
$$

The only change in our previous definition is that $\varphi ^ { - 1 } : U \to \mathbb { R } ^ { n }$ is also assumed to be harmonic with respect to the Riemannian metric $g$ W !on M, i.e., for each j

$$
\frac {1}{\sqrt {\det \left[ g _ {s t} \right]}} \partial_ {i} \left(\sqrt {\det \left[ g _ {s t} \right]} \cdot g ^ {i j}\right) = 0.
$$

Proposition 11.3.5 (Anderson, 1990). Proposition 11.3.2 also holds for the harmonic norm when $m \geq 1$ .

Proof. The proof is mostly identical so we only mention the necessary changes.

For the statement in (2) that the norm goes to zero as the scale decreases, just solve the Dirichlet problem as we did when establishing the existence of harmonic coordinates in lemma 11.2.5. There it was necessary to have coordinates around every point $p \in M$ such that in these coordinates the metric satisfies $g _ { i j } \ = \ \delta _ { i j }$ and $\partial _ { k } g _ { i j } = 0$ 2at p: If $m \geq 1$ D; then it is easy to show that any coordinate system D around p can be changed in such a way that the metric has the desired properties (see exercise 2.5.20).

The proof of (3) is necessarily somewhat different, as we must use and produce harmonic coordinates. Let the set-up be as before. First we show the easy part:

$$
\liminf \| (M _ {i}, g _ {i}, p _ {i}) \| _ {C ^ {m, \alpha}, r} ^ {h a r} \geq \| (M, g, p) \| _ {C ^ {m, \alpha}, r} ^ {h a r}.
$$

To this end, select $Q >$ lim inf $\| ( M _ { i } , g _ { i } , p _ { i } ) \| _ { C ^ { m , \alpha } , r } ^ { h a r }$ . For large i we can then select charts $\varphi _ { i } ~ : ~ B ( 0 , r ) ~  ~ M _ { i }$ k kwith the requisite properties. After passing to a W !subsequence, we can make these charts converge to a chart

$$
\varphi = \lim F _ {i} ^ {- 1} \circ \varphi_ {i}: B (0, r) \to M.
$$

Since the metrics converge in $C ^ { m , \alpha }$ ; the Laplacians of the inverse functions must also converge. Hence, the limit charts are harmonic as well. We can then conclude that $\| ( M , g , p ) \| _ { C ^ { m , \alpha } , r } ^ { h a r } \leq Q .$ .

k k For the reverse inequality

$$
\limsup \| (M _ {i}, g _ {i}, p _ {i}) \| _ {C ^ {m, \alpha}, r} ^ {h a r} \leq \| (M, g, p) \| _ {C ^ {m, \alpha}, r} ^ {h a r},
$$

select $Q \ : > \ : \| ( M , g , p ) \| _ { C ^ { m , \alpha } , r } ^ { h a r } .$ . Then, from the continuity of the norm we can find $\varepsilon > 0$ ksuch that also $\| ( M , g , p ) \| _ { C ^ { m , \alpha } , r + \varepsilon } ^ { h a r } < Q$ . For this scale, select

$$
\varphi : B (0, r + \varepsilon) \to U \subset M
$$

satisfying the usual conditions. Now define

$$
U _ {i} = F _ {i} \left(\varphi \left(B (0, r + \varepsilon / 2)\right)\right) \subset M _ {i}.
$$

This is clearly a closed disc with smooth boundary

$$
\partial U _ {i} = F _ {i} \left(\varphi \left(\partial B (0, r + \varepsilon / 2)\right)\right).
$$

On each $U _ { i }$ solve the Dirichlet problem

$$
\psi_ {i}: U _ {i} \to \mathbb {R} ^ {n},
$$

$$
\Delta_ {g _ {i}} \psi_ {i} = 0,
$$

$$
\psi_ {i} = \varphi^ {- 1} \circ F _ {i} ^ {- 1} \text {on} \partial U _ {i}.
$$

The inverse of $\psi _ { i }$ ; if it exists, will then be a coordinate map $B ( 0 , r )  U _ { i }$ : On the set $B \left( 0 , r + \varepsilon / 2 \right)$ we can compare $\psi _ { i } \circ F _ { i } \circ \varphi$ !with the identity map I. Note that Cthese maps agree on the boundary of $B \left( 0 , r + \varepsilon / 2 \right)$ : We know that $F _ { i } ^ { * } g _ { i } \to g$ in the fixed coordinate system $\varphi$ C: Now pull these metrics back to $B \left( 0 , r + { \frac { \varepsilon } { 2 } } \right)$ !and refer to them as $g \left( = \varphi ^ { \ast } g \right)$ and $g _ { i } \left( = \varphi ^ { \ast } F _ { i } ^ { \ast } g _ { i } \right)$ C . In this way the harmonicity conditions read $\Delta _ { g } I = 0$ Dand $\Delta _ { g _ { i } } \psi _ { i } \circ F _ { i } \circ \varphi = 0$ : In these coordinates we have the correct bounds Dfor the operator

$$
\Delta_ {g _ {i}} = g _ {i} ^ {k l} \partial_ {k} \partial_ {l} + \frac {1}{\sqrt {\det [ g _ {i} ]}} \partial_ {k} \left(\sqrt {\det [ g _ {i} ]} \cdot g _ {i} ^ {k l}\right) \partial_ {l}
$$

to use the elliptic estimates for domains with smooth boundary. Note that this is where the condition $m \geq 1$ becomes important so that we can bound

$$
\frac {1}{\sqrt {\det [ g _ {i} ]}} \partial_ {k} \left(\sqrt {\det [ g _ {i} ]} \cdot g _ {i} ^ {k l}\right)
$$

in $C ^ { \alpha }$ : The estimates then imply

$$
\left\| I - \psi_ {i} \circ F _ {i} \circ \varphi \right\| _ {C ^ {m + 1, \alpha}} \leq C \left\| \Delta_ {g _ {i}} \left(I - \psi_ {i} \circ F _ {i} \circ \varphi\right) \right\| _ {C ^ {m - 1, \alpha}}
$$

$$
= C \left\| \Delta_ {g _ {i}} I \right\| _ {C ^ {m - 1, \alpha}}.
$$

However, we have that

$$
\begin{array}{l} \left\| \Delta_ {g _ {i}} I \right\| _ {C ^ {m - 1, \alpha}} = \left\| \frac {1}{\sqrt {\det [ g _ {i} ]}} \partial_ {k} \left(\sqrt {\det [ g _ {i} ]} \cdot g _ {i} ^ {k l}\right) \right\| _ {C ^ {m - 1, \alpha}} \\ \rightarrow \left\| \frac {1}{\sqrt {\det [ g ]}} \partial_ {k} \left(\sqrt {\det [ g ]} \cdot g ^ {k l}\right)\right\| _ {C ^ {m - 1, \alpha}} \\ = \left\| \Delta_ {g} I \right\| _ {C ^ {m - 1, \alpha}} = 0. \\ \end{array}
$$

In particular,

$$
\left\| I - \psi_ {i} \circ F _ {i} \circ \varphi \right\| _ {C ^ {m + 1, \alpha}} \rightarrow 0.
$$

It follows that $\psi _ { i }$ must become coordinates for large i: Also, these coordinates will show that $\| ( M _ { i } , g _ { i } , p _ { i } ) \| _ { C ^ { m , \alpha } , r } ^ { h a r } < Q$ for large i:

### 11.3.5 Compact Classes of Riemannian Manifolds

We can now state and prove the result that is our manifold equivalent of the Arzela-Ascoli lemma. This theorem is essentially due to J. Cheeger.

Theorem 11.3.6 (Fundamental Theorem of Convergence Theory). For given $Q > 0 , n \geq 2 , m \geq 0 , \alpha \in ( 0 , 1 ]$ , and $r > 0$ consider the class $\mathcal { M } ^ { m , \alpha } ( n , Q , r )$ )   2of complete, pointed Riemannian n-manifolds $( M , g , p )$ with $\| ( M , g ) \| _ { C ^ { m , \alpha } , r } \leq Q .$ . The class $\mathcal { M } ^ { m , \alpha } ( n , Q , r )$ is compact in the pointed $C ^ { m , \beta }$ k ktopology for all $\beta < \alpha$ .

Proof. First we show that $\mathcal { M } ~ = ~ \mathcal { M } ^ { m , \alpha } ( n , Q , r )$ is precompact in the pointed DGromov-Hausdorff topology. Next we prove that $\mathcal { M }$ is closed in the Gromov-Hausdorff topology. The last and longest part is devoted to getting improved convergence from Gromov-Hausdorff convergence.

Setup: Whenever we select $M \in \mathcal { M }$ ; we can by proposition 11.3.2 assume that it 2comes equipped with charts around all points satisfying n1 and n2.

(A) M is precompact in the pointed Gromov-Hausdorff topology.

Define $\delta = e ^ { - Q } r$ and note that there exists an $N ( n , Q )$ such that $B ( 0 , r )$ can be Dcovered by at most N balls of radius $e ^ { - Q } \cdot \delta / { 4 }$ . Since $\varphi : B ( 0 , r ) \to U$ is a Lipschitz map with Lipschitz constant $\leq e ^ { Q }$ , this implies that $U \supset B \left( p , \delta \right)$ !can be covered by N balls of radius $\delta / { } _ { 4 }$ .

Next we claim that every ball $B ( x , \ell \cdot \delta / { 2 } ) \subset M$ can be covered by $\leq N ^ { \ell }$ balls of radius $\delta / { } _ { 4 }$ . For $\ell = 1$ we just proved this. If $B ( x , \ell \cdot \delta / 2 )$ is covered by $B ( x _ { 1 } , \delta / { 4 } ) , . . . ,$ $B ( x _ { N ^ { \ell } } , { \delta / } _ { 4 } )$ , then $B \left( x , \ell \cdot \delta / { 2 } + \delta / { 2 } \right) \subset \bigcup B ( x _ { i } , \delta )$ . Now each $B ( x _ { i } , \delta )$ can be covered by $\leq N$ balls of radius $\delta / { } _ { 4 }$ C , and hence $B \left( x , ( \ell + 1 ) ^ { \delta } / 2 \right)$ can be covered by $\leq N \cdot N ^ { \ell } =$ $\dot { N } ^ { \ell + 1 }$ balls of radius $\delta / { } _ { 4 }$ .

The precompactness claim is equivalent to showing that we can find a function $C ( \varepsilon ) = C ( \varepsilon , R , K , r , n )$ such that each $B ( p , R )$ can contain at most $C ( \varepsilon )$ disjoint D"-balls. To check this, let $B ( x _ { 1 } , \varepsilon ) , \dots , B ( x _ { s } , \varepsilon )$ be a collection of disjoint balls in $B ( p , R )$ . Suppose that $\ell \cdot \delta / { 2 } < R \leq ( \ell + 1 ) ^ { \delta } / 2$ . Then

$$
\begin{array}{l} \operatorname{vol} B (p, R) \leq N ^ {\ell + 1} \cdot (\text { maximal   volume   of } \delta / 4 \text {-ball}) \\ \leq N ^ {\ell + 1} \cdot (\text { maximal   volume   of   chart }) \\ \leq N ^ {\ell + 1} \cdot e ^ {n K} \cdot \operatorname{vol} B (0, r) \\ \leq V (R) = V (R, n, K, r). \\ \end{array}
$$

As long as $\varepsilon \ < \ \delta$ each $B ( x _ { i } , \varepsilon )$ lies in some chart $\varphi : B ( 0 , r ) \to U \subset M$ whose pre-image in $B ( 0 , r )$ contains an $e ^ { - K }$ "-ball. Thus

$$
\operatorname{vol} B (p _ {i}, \varepsilon) \geq e ^ {- n K} \operatorname{vol} B (0, \varepsilon).
$$

All in all, we get

$$
\begin{array}{l} V (R) \geq \operatorname{vol} B (p, R) \\ \geq \sum \operatorname{vol} B (p _ {i}, \varepsilon) \\ \geq s \cdot e ^ {- n K} \cdot \operatorname{vol} B (0, \varepsilon). \\ \end{array}
$$

Thus,

$$
s \leq C (\varepsilon) = V (R) \cdot e ^ {n K} \cdot (\operatorname{vol} B (0, \varepsilon)) ^ {- 1}.
$$

Now select a sequence $( M _ { i } , g _ { i } , p _ { i } )$ in $\mathcal { M }$ . From the previous considerations we can assume that $( M _ { i } , g _ { i } , p _ { i } )  ( X , | \cdots | , p )$ in the Gromov-Hausdorff topology. It will ! jjbe necessary in many places to pass to subsequences of $( M _ { i } , g _ { i } , p _ { i } )$ using various diagonal processes. Whenever this happens, we do not reindex the family, but merely assume that the sequence was chosen to have the desired properties from the beginning.

(B) $( X , \left| \cdots \right| , p )$ is a Riemannian manifold of class $C ^ { m , \alpha }$ with $\| ( X , g ) \| _ { C ^ { m , \alpha } , r } \leq Q$

For each $q \in X$ we need to find a chart $\varphi : B ( 0 , r ) \to U \subset X$ with $q = \varphi \left( 0 \right)$ . 2To construct this chart consider $q _ { i } \to q$ Wand charts $\varphi _ { i } : B ( 0 , r ) \to U _ { i } \subset M _ { i }$ with $q _ { i } = \varphi _ { i } \left( 0 \right)$ ! W ! . These charts are uniformly Lipschitz and so must subconverge to a map $\varphi : B \left( 0 , r \right) \to U \subset X$ . This map will satisfy property (4) in proposition 11.3.2 and W ! thus be a homeomorphism onto its image. This makes X a topological manifold.

We next construct a compatible Riemannian metric on X that satisfies n1 and n2. For each $q \in X$ consider the metrics $\varphi _ { i } ^ { * } g _ { i } = g _ { i } .$ written out in components on $B ( 0 , r )$ 2with respect to the chart $\varphi _ { i }$ D. Since all of the $g _ { i } .$  satisfy n1 and ${ \tt n 2 } .$ , we can again use Arzela-Ascoli to insure that the components $g _ { i \cdot } \  \ g .$ in the $C ^ { m , \beta }$ topology on $B ( 0 , r )$ to functions $g .$ that also satisfy n1 and $\mathrm { n } 2$ ! . These local Riemannian metrics are possibly only Hölder continuous. Nevertheless, they define a distance as we defined it in section 5.3. Moreover this distance is locally the same as the metric on X. To see this, note that we work entirely on $B ( 0 , r )$ and both the Riemannian structures and the metric structures converge to the limit structures.

Finally, we need to show that the transition function $\varphi ^ { - 1 }$ for two such charts $\varphi , \psi : B \left( 0 , r \right) \to X$ ıwith overlapping images are at least $C ^ { 1 }$ so as to obtain a W !differentiable structure on X. As it stands $\varphi ^ { - 1 } \circ \psi$ is locally Lipschitz with respect ıto the Euclidean metrics. However, it is distance preserving with respect to the pull back metrics from X. Calabi-Hartman in [22] generalized theorem 5.6.15 to this context. Specifically, they claim that a distance preserving map between $C ^ { \alpha }$ Riemannian metrics is $C ^ { 1 , \alpha }$ . The proof, however, only seems to prove that the map is $C ^ { 1 , \frac { \alpha } { 2 } }$ , which is more than enough for our purposes.

(C) $( M _ { i } , g _ { i } , p _ { i } )  ( X , | \cdots | , p ) = ( X , g , p )$ in the pointed $C ^ { m , \beta }$ topology.

We assume that X is equipped with a countable atlas of charts $\varphi _ { s } : B ( 0 , r )  U _ { s }$ , $s = 1 , 2 . 3 , . . .$ : that are limits of charts $\varphi _ { i s } : B \left( 0 , r \right) \to U _ { i s } \subset M _ { i }$ !that also form Dan atlas for each $M _ { i }$ W ! . We can further assume that transitions converge: $\varphi _ { i s } ^ { - 1 } \circ \varphi _ { i t } $ $\varphi _ { s } ^ { - 1 } \circ \varphi _ { t }$ and that the metrics converge: $g _ { i s } . .  g _ { s } . .$ ı. We say that two maps $F _ { 1 } , F _ { 2 }$ ıbetween subsets in $M _ { i }$ and X are $C ^ { m + 1 , \beta }$  ! close if all the coordinate compositions $\varphi _ { s } ^ { - 1 } \circ F _ { 1 } \circ \varphi _ { i s }$ and $\varphi _ { s } \circ F _ { 2 } \circ \varphi _ { i s }$ are $C ^ { m + 1 , \beta }$ close. Thus, we have a well-defined $\bar { C ^ { m + 1 , \beta } }$ ı ı ıtopology on maps from $M _ { i }$ to X. Our first observation is that

$$
f _ {i s} = \varphi_ {i s} \circ \varphi_ {s} ^ {- 1}: U _ {s} \to U _ {i s},
$$

$$
f _ {i t} = \varphi_ {i t} \circ \varphi_ {t} ^ {- 1}: U _ {t} \to U _ {i t}
$$

“converge to each other” in the $C ^ { m + 1 , \beta }$ topology. Furthermore,

$$
(f _ {i s}) ^ {*} g _ {i} | _ {U _ {i s}} \rightarrow g | _ {U _ {s}}
$$

in the $C ^ { m , \beta }$ topology. These are just restatements of what we already assumed. In order to finish the proof, we construct maps

$$
F _ {i \ell}: \Omega_ {\ell} = \bigcup_ {s = 1} ^ {\ell} U _ {s} \rightarrow \Omega_ {i \ell} = \bigcup_ {s = 1} ^ {\ell} U _ {i s}
$$

that are closer and closer to the $f _ { i s } , s = 1 , \ldots , \ell$ maps (and therefore all $f _ { i s } )$ as $i \to \infty$ . We will construct $F _ { i \ell }$ Dby induction on \` and large i depending on \`.

! 1For $\ell = 1$ simply define $F _ { i 1 } = f _ { i 1 }$

DSuppose we have $F _ { i \ell } : \Omega _ { \ell } \to \Omega _ { i \ell }$ for large i that are arbitrarily close to $f _ { i s }$ , $s = 1 , \ldots , \ell$ as $i  \infty$ W. If $U _ { \ell + 1 } \cap \Omega _ { \ell } = \varnothing$ ; then we just define $F _ { i \ell + 1 } = F _ { i \ell }$ on $\Omega _ { i \ell }$ and $F _ { i \ell + 1 } = f _ { i \ell + 1 }$ 1on $U _ { \ell + 1 }$ \. In case $U _ { \ell + 1 } \subset \Omega _ { \ell }$ ; we simply let $F _ { i \ell + 1 } = F _ { i \ell }$ . C D C Otherwise, we know that $F _ { i \ell }$ Cand $f _ { i \ell + 1 }$ C are as close as we like in the $C ^ { m + 1 , \beta }$ C Dtopology as $i \to \infty$ C. So the natural thing to do is to average them on $U _ { \ell + 1 }$ . Define $F _ { i \ell + 1 }$ on $U _ { \ell + 1 }$ !by

$$
F _ {i \ell + 1} (x) = \varphi_ {i \ell + 1} \circ (\mu_ {1} (x) \cdot \varphi_ {i \ell + 1} ^ {- 1} \circ f _ {i \ell + 1} (x) + \mu_ {2} (x) \cdot \varphi_ {i \ell + 1} ^ {- 1} \circ F _ {i \ell} (x)),
$$

where $\mu _ { 1 } , \mu _ { 2 }$ are a partition of unity for $U _ { \ell + 1 } , \Omega _ { \ell }$ . This map is clearly well-defined on $U _ { \ell + 1 }$ , since $\mu _ { 2 } ( x ) = 0 \mathrm { o n } U _ { \ell + 1 } - \Omega _ { \ell }$ C: Now consider this map in coordinates

$$
\begin{array}{l} \varphi_ {i \ell + 1} ^ {- 1} \circ F _ {i \ell + 1} \circ \varphi_ {\ell + 1} (y) = (\mu_ {1} \circ \varphi_ {\ell + 1} (y)) \cdot \varphi_ {\ell + 1} ^ {- 1} \circ f _ {i \ell + 1} \circ \varphi_ {\ell + 1} (y) \\ + (\mu_ {2} \circ \varphi_ {\ell + 1} (y)) \cdot \varphi_ {i \ell + 1} ^ {- 1} \circ F _ {i \ell} \circ \varphi_ {\ell + 1} (y) \\ = \tilde {\mu} _ {1} (y) F _ {1} (y) + \tilde {\mu} _ {2} (y) F _ {2} (y). \\ \end{array}
$$

Then

$$
\begin{array}{l} \left\| \tilde {\mu} _ {1} F _ {1} + \tilde {\mu} _ {2} F _ {2} - F _ {1} \right\| _ {C ^ {m + 1, \beta}} = \left\| \tilde {\mu} _ {1} (F _ {1} - F _ {1}) + \tilde {\mu} _ {2} (F _ {2} - F _ {1}) \right\| _ {C ^ {m + 1, \beta}} \\ \leq C (n, m) \| \tilde {\mu} _ {2} \| _ {C ^ {m + 1, \beta}} \cdot \| F _ {2} - F _ {1} \| _ {C ^ {m + 1, \beta}}. \\ \end{array}
$$

This inequality is valid on all of $B ( 0 , r )$ , despite the fact that $F _ { 2 }$ is not defined on all of $B ( 0 , r )$ , since $\tilde { \mu } _ { 1 } \cdot F _ { 1 } + \tilde { \mu } _ { 2 } \cdot F _ { 2 } = F _ { 1 }$ on the region where $F _ { 2 }$ is undefined. By assumption

$$
\left\| F _ {2} - F _ {1} \right\| _ {C ^ {m + 1, \beta}} \rightarrow 0 \text {   as   } i \rightarrow \infty ,
$$

so $F _ { i \ell + 1 }$ is $C ^ { m + 1 , \beta }$ -close to $f _ { i s } , s = 1 , \ldots , \ell + 1$ as $i \to \infty$

C DFinally we see that the closeness of $F _ { i \ell }$ C ! 1to the coordinate charts shows that it is an embedding on all compact subsets of the domain.

Corollary 11.3.7. Any subclasses of ${ \mathcal { M } } ^ { m , \alpha } ( n , Q , r )$ ; where the elements in addition satisfy diam $\leq \ D ,$ , respectively vol $\leq V ,$ , is compact in the $C ^ { m , \beta }$ topology. In  particular, it contains only finitely many diffeomorphism types.

Proof. We use notation as in the fundamental theorem. If diam $( M , g , p ) \le D$ ; then clearly $M \subset B \left( p , k \cdot \delta / 2 \right)$ for $k > D \cdot { 2 } / { \delta }$ . Hence, each element in $\mathcal { M } ^ { m , \alpha } ( n , Q , r )$ can be covered by $\le N ^ { k }$ charts. Thus, $C ^ { m , \beta }$ -convergence is actually in the unpointed topology, as desired.

If instead, vo $1 M \leq V$ ; then we can use part (A) in the proof to see that we can never have more than $k = V \cdot e ^ { 2 n K } \cdot ( \mathrm { v o l } B ( 0 , \varepsilon ) ) ^ { - 1 }$ disjoint "-balls. In particular, diam $\leq 2 \varepsilon \cdot k .$ D  , and we can use the above argument.

 Finally, compactness in any $C ^ { m , \beta }$ topology implies that the class cannot contain infinitely many diffeomorphism types.

Clearly there is also a harmonic analogue to the fundamental theorem.

Corollary 11.3.8. Given $Q > 0 , n \geq 2 , m \geq 0 , \alpha \in ( 0 , 1 ]$ , and $r > 0$ the class  of complete, pointed Riemannian n-manifolds $( M , g , p )$ with $\| ( M , g ) \| _ { C ^ { m , \alpha } , r } ^ { h a r } \le Q$ is closed in the pointed $C ^ { m , \alpha }$ ktopology and compact in the pointed $C ^ { m , \beta }$ topology for all $\beta < \alpha$ .

The only issue to worry about is whether it is really true that limit spaces have $\| ( M , g ) \| _ { C ^ { m , \alpha } , r } ^ { h a r } \ \leq \ Q$ : But one can easily see that harmonic charts converge k k to harmonic charts as in proposition 11.3.5.

### 11.3.6 Alternative Norms

Finally, we mention that the norm concept and its properties do not change if n1 and n2 are altered as follows:

$$
\begin{array}{l} \left(\mathrm{n} 1 ^ {\prime}\right) \quad | D \varphi |, \left| D \varphi^ {- 1} \right| \leq f _ {1} (n, Q), \\ (\mathrm{n} 2 ^ {\prime}) \quad r ^ {| j | + \alpha} \| \partial^ {j} g.. \| _ {\alpha} \leq f _ {2} (n, Q), 0 \leq | j | \leq m, \\ \end{array}
$$

where $f _ { 1 }$ and $f _ { 2 }$ are continuous, $f _ { 1 } ( n , 0 , r ) = 1$ , and $f _ { 2 } ( n , 0 ) = 0$ . The key properties we want to preserve are continuity of $\| ( M , g ) \|$ Dwith respect to $r ,$ , the fundamental k ktheorem, and the characterization of flat manifolds and Euclidean space.

Another interesting thing happens if in the definition of $\| ( M , g ) \| _ { C ^ { m , \alpha } , r }$ we let $m = \alpha = 0$ . Then n2 no longer makes sense since $\alpha = 0$ k k, however, we still have a $C ^ { 0 } { \mathrm { - n o r m } }$ concept. The class $\mathcal { M } ^ { 0 } ( n , Q , r )$ Dis now only precompact in the pointed Gromov-Hausdorff topology, but the characterization of flat manifolds is still valid. The subclasses with bounded diameter, or volume, are also only precompact with respect to the Gromov-Hausdorff topology, and the finiteness of diffeomorphism types apparently fails. It is, however, possible to say more. If we investigate the proof of the fundamental theorem, we see that the problem lies in constructing the maps $F _ { i k } : \Omega _ { k } \to \Omega _ { i k }$ , because we only have convergence of the coordinates only in the $C ^ { 0 }$ !(actually $C ^ { \alpha } , \alpha \ < \ 1 )$ topology, and $\mathbf { S O }$ the averaging process fails as it is described. We can, however, use a deep theorem from topology about local contractibility of homeomorphism groups (see [39]) to conclude that two $C ^ { 0 } { \mathrm { - c l o s e } }$ topological embeddings can be “glued” together in some way without altering them too much in the $C ^ { 0 }$ topology. This makes it possible to exhibit topological embeddings $F _ { i k } : \Omega \hookrightarrow M _ { i }$ such that the pullback metrics (not Riemannian metrics) W !converge. As a consequence, we see that the classes with bounded diameter or volume contain only finitely many homeomorphism types. This closely mirrors the content of the original version of Cheeger’s finiteness theorem, including the proof as we have outlined it. But, as we have pointed out earlier, Cheeger also considered the easier to prove finiteness theorem for diffeomorphism types given better bounds on the coordinates.

Notice that we cannot easily use the fact that the charts converge in $C ^ { \alpha } ( \alpha < 1 )$ . But it is possible to do something interesting along these lines. There is an even weaker norm concept called the Reifenberg norm that is related to the Gromov-Hausdorff distance. For a metric space $( X , | \cdots | )$ we define the n-dimensional norm on the scale of r as

$$
\| (X, | \cdot |) \| _ {r} ^ {n} = \frac {1}{r} \sup _ {p \in X} d _ {G - H} (B (p, r), B (0, r)),
$$

where $B \left( 0 , R \right) \subset \mathbb { R } ^ { n }$ : The the $r ^ { - 1 }$ factor insures that we don’t have small distance between $B \left( p , r \right)$ and $B \left( 0 , r \right)$ just because r is small. Note also that if $( X _ { i } , | \cdots | _ { i } ) $ $( X , | \cdots | )$ in the Gromov-Hausdorff topology then

$$
\left\|\left(X _ {i}, | \cdot \cdot | _ {i}\right)\right\| _ {r} ^ {n} \rightarrow \left\| (X, | \cdot \cdot |) \right\| _ {r} ^ {n}
$$

for fixed $n , r .$

For an n-dimensional Riemannian manifold one sees immediately that

$$
\lim _ {r \to 0} \| (M, g) \| _ {r} ^ {n} \to 0 = 0.
$$

Cheeger and Colding have proven a converse to this (see [29]). There is an $\varepsilon \left( n \right) > 0$ such that if $\| ( X , | \cdots | ) \| _ { r } ^ { n } \leq \varepsilon \left( n \right)$ for all small $r ,$ then X is in a weak sense an nk jj k dimensional Riemannian manifold. Among other things, they show that for small r the ˛-Hölder distance between $B \left( p , r \right)$ and $B \left( 0 , r \right)$ is small. Here the ˛-Hölder distance $d _ { \alpha } \left( \boldsymbol { X } , \boldsymbol { Y } \right)$ between metric spaces is defined as the infimum of

$$
\log \max \left\{\sup _ {x _ {1} \neq x _ {2}} \frac {\left| F \left(x _ {1}\right) F \left(x _ {2}\right) \right|}{\left| x _ {1} x _ {2} \right| ^ {\alpha}}, \sup _ {y _ {1} \neq y _ {2}} \frac {\left| F ^ {- 1} \left(y _ {1}\right) F ^ {- 1} \left(y _ {2}\right) \right|}{\left| y _ {1} y _ {2} \right| ^ {\alpha}} \right\},
$$

where $F : X  Y$ runs over all homeomorphisms. They also show that if $( M _ { i } , g _ { i } ) $ $( X , | \cdots | )$ W !in the Gromov-Hausdorff distance and $\| ( M _ { i } , g _ { i } ) \| _ { r } ^ { n } \leq \varepsilon \left( n \right)$ !for all i and small $r ,$ jjthen $( M _ { i } , g _ { i } )  ( X , | \cdots | )$ k k in the Hölder distance. In particular, all of the $M _ { i } \mathbf { s }$ have ! jjto be homeomorphic (and in fact diffeomorphic) to X for large i:

This is enhanced by an earlier result of Colding (see [34]) stating that for a Riemannian manifold $( M , g )$ with Ric $\geq ( n - 1 )$ k we have that $\| ( M , g ) \| _ { r } ^ { n }$ is small if and only if and only if

$$
\operatorname{vol} B (p, r) \geq (1 - \delta) \operatorname{vol} B (0, r)
$$

for some small ı. Relative volume comparison tells us that the volume condition holds for all small r if it holds for just one r: Thus the smallness condition for the norm holds for all small r provided we have the volume condition for just some r:

## 11.4 Geometric Applications

To obtain better estimates on the norms it is convenient to use more analysis. The idea of using harmonic coordinates for similar purposes goes back to [37]. In [66] it was shown that manifolds with bounded sectional curvature and lower bounds for the injectivity radius admit harmonic coordinates on balls of an a priori size. This result was immediately seized by the geometry community and put to use in improving the theorems from the previous section. At the same time, Nikolaev developed a different, more synthetic approach to these ideas. For the whole story we refer the reader to Greene’s survey in [51]. Here we shall develop these ideas from a different point of view due to Anderson.

### 11.4.1 Ricci Curvature

The most important feature about harmonic coordinates is that the metric is apparently controlled by the Ricci curvature. This is exploited in the next lemma, where we show how one can bound the harmonic $C ^ { 1 , \alpha }$ norm in terms of the harmonic $C ^ { 1 }$ norm and Ricci curvature.

Lemma 11.4.1 (Anderson, 1990). Suppose that a Riemannian manifold $( M , g )$ has bounded Ricci curvature $| \mathrm { R i c } | \le \Lambda . \ F o r$ any $r _ { 1 } < r _ { 2 } , K \geq \| ( M , g , p ) \| _ { C ^ { 1 } , r _ { 2 } } ^ { h a r }$ ; and $\alpha \in ( 0 , 1 )$ we can find $C \left( n , \alpha , K , r _ { 1 } , r _ { 2 } , \Lambda \right)$ such that


$$
\| (M, g, p) \| _ {C ^ {1, \alpha}, r _ {1}} ^ {h a r} \leq C \left(n, \alpha , K, r _ {1}, r _ {2}, \Lambda\right).
$$

Moreover, $i f g$ is an Einstein metric $\mathrm { R i c } = k g$ ; then for each integer m we can find a constant $C \left( n , \alpha , K , r _ { 1 } , r _ { 2 } , k , m \right)$ Dsuch that

$$
\left\| (M, g, p) \right\| _ {C ^ {m + 1, \alpha}, r _ {1}} ^ {h a r} \leq C \left(n, \alpha , K, r _ {1}, r _ {2}, k, m\right).
$$

Proof. We just need to bound the metric components $g _ { i j }$ in some fixed harmonic coordinates. In such coordinates $\Delta = g ^ { i j } \partial _ { i } \partial _ { j }$ j. Given that $\| ( M , g , p ) \| _ { C ^ { 1 } , r } ^ { h a r } \leq K$ , we D k k can conclude that we have the necessary conditions on the coefficients of $\Delta \ =$ $g ^ { i j } \partial _ { i } \partial _ { j }$ to use the elliptic estimate

$$
\left\| g _ {i j} \right\| _ {C ^ {1, \alpha}, B (0, r _ {1})} \leq C (n, \alpha , K, r _ {1}, r _ {2}) \left(\left\| \Delta g _ {i j} \right\| _ {C ^ {0}, B (0, r _ {2})} + \left\| g _ {i j} \right\| _ {C ^ {\alpha}, B (0, r _ {2})}\right).
$$

Since

$$
\Delta g _ {i j} = - 2 \mathrm{Ric} _ {i j} - 2 Q (g, \partial g)
$$

it follows that

$$
\left\| \Delta g _ {i j} \right\| _ {C ^ {0}, B (0, r _ {2})} \leq 2 \Lambda \left\| g _ {i j} \right\| _ {C ^ {0}, B (0, r _ {2})} + \hat {C} \left\| g _ {i j} \right\| _ {C ^ {1}, B (0, r _ {2})}.
$$

Using this we obtain

$$
\begin{array}{l} \left\| g _ {i j} \right\| _ {C ^ {1, \alpha}, B (0, r _ {1})} \leq C (n, \alpha , K, r _ {1}, r _ {2}) \left(\left\| \Delta g _ {i j} \right\| _ {C ^ {0}, B (0, r _ {2})} + \left\| g _ {i j} \right\| _ {C ^ {\alpha}, B (0, r _ {2})}\right) \\ \leq C (n, \alpha , K, r _ {1}, r _ {2}) (2 \Lambda + \hat {C} + 1) \| g _ {i j} \| _ {C ^ {1}, B (0, r _ {2})}. \\ \end{array}
$$

For the Einstein case we can use a bootstrap method as we get $C ^ { 1 , \alpha }$ bounds on the Ricci tensor from the Einstein equation $\mathrm { R i c } \ : = \ : k g$ : Thus, we have that $\Delta g _ { i j }$ is bounded in $C ^ { \alpha }$ rather than just $C ^ { 0 }$ : Hence,

$$
\begin{array}{l} \left\| g _ {i j} \right\| _ {C ^ {2, \alpha}, B (0, r _ {1})} \leq C (n, \alpha , K, r _ {1}, r _ {2}) \left(\left\| \Delta g _ {i j} \right\| _ {C ^ {\alpha}, B (0, r _ {2})} + \left\| g _ {i j} \right\| _ {C ^ {\alpha}, B (0, r _ {2})}\right) \\ \leq C (n, \alpha , K, r _ {1}, r _ {2}, k) \cdot C \cdot \left\| g _ {i j} \right\| _ {C ^ {1, \alpha}, B (0, r _ {2})}. \\ \end{array}
$$

This gives $C ^ { 2 , \alpha }$ bounds on the metric. Then, of course, $\Delta g _ { i j }$ is bounded in $C ^ { 1 , \alpha }$ ; and thus the metric will be bounded in $C ^ { 3 , \alpha }$ : Clearly, one can iterate this until one gets $C ^ { m + 1 , \alpha }$ CmC1;˛ bounds on the metric for any m.

Combining this with the fundamental theorem gives a very interesting compactness result.

Corollary 11.4.2. For given $n ~ \geq ~ 2 , ~ Q , r , \Lambda ~ \in ~ ( 0 , \infty )$ consider the class of Riemannian n-manifolds with

$$
\| (M, g) \| _ {C ^ {1}, r} ^ {h a r} \leq Q,
$$

$$
| \mathrm{Ric} | \leq \Lambda .
$$

This class is precompact in the pointed $C ^ { 1 , \alpha }$ topology for any $\alpha \in ( 0 , 1 )$ : Moreover, 2if we take the subclass of Einstein manifolds, then this class is compact in the $C ^ { m , \alpha }$ topology for any $m \geq 1$ and $\alpha \in ( 0 , 1 )$ :

Next we show how the injectivity radius can be used to control the harmonic norm.

Theorem 11.4.3 (Anderson, 1990). Given $n \geq 2$ and $\alpha \in ( 0 , 1 )$ ; ƒ; $R > 0$ ; one can for each $Q > 0 f n d r ( n , \alpha , \Lambda , R ) > 0$  2such that any compact Riemannian n-manifold .M; g/ with

$$
| \mathrm{Ric} | \leq \Lambda ,
$$

$$
\operatorname{inj} \geq R
$$

satisfies $\| ( M , g ) \| _ { C ^ { 1 , \alpha } , r } ^ { h a r } \leq Q .$

Proof. The proof goes by contradiction. So suppose that there is ${ \mathfrak { a } } Q > 0$ such that for each $i \geq 1$ there is a Riemannian manifold $( M _ { i } , g _ { i } )$ with

$$
| \mathrm{Ric} | \leq \Lambda ,
$$

$$
\operatorname{inj} \geq R,
$$

$$
\left\| \left(M _ {i}, g _ {i}\right) \right\| _ {C ^ {1, \alpha}, i ^ {- 1}} ^ {h a r} > Q.
$$

Using that the norm goes to zero as the scale goes to zero, and that it is continuous as a function of the scale, we can for each i find $r _ { i } \in \mathsf { \Gamma } ( 0 , i ^ { - 1 } )$ such that $\| ( M _ { i } , g _ { i } ) \| _ { C ^ { 1 , \alpha } , r _ { i } } ^ { h a r } = Q$ : Now rescale these manifolds: $\bar { g } _ { i } = r _ { i } ^ { - 2 } g _ { i }$ : Then we have that $( M _ { i } , \bar { g } _ { i } )$ k satisfies

$$
| \mathrm{Ric} | \leq r _ {i} \Lambda ,
$$

$$
\operatorname{inj} \geq r _ {i} ^ {- 1} R,
$$

$$
\| (M _ {i}, \bar {g} _ {i}) \| _ {C ^ {1, \alpha}, 1} ^ {h a r} = Q.
$$

We can then select $p _ { i } \in M _ { i }$ such that

$$
\left\| \left(M _ {i}, \bar {g} _ {i}, p _ {i}\right) \right\| _ {C ^ {1, \alpha}, 1} ^ {h a r} \in \left[ \frac {Q}{2}, Q \right].
$$


The first important step is to use the bounded Ricci curvature of $( M _ { i } , \bar { g } _ { i } )$ to conclude that the $C ^ { 1 , \gamma }$ norm must be bounded for any $\gamma \in ( \alpha , 1 )$ N: Then we can assume by the fundamental theorem that the sequence $( M _ { i } , \bar { g } _ { i } , p _ { i } )$ converges in the pointed $C ^ { 1 , \alpha }$ topology, to a Riemannian manifold $( M , g , p )$ Nof class $C ^ { 1 , \gamma }$ : Since the $C ^ { 1 , \alpha }$ norm is continuous in the $C ^ { 1 , \alpha }$ topology we can conclude that

$$
\left\| (M, g, p) \right\| _ {C ^ {1, \alpha}, 1} ^ {h a r} \in \left[ \frac {Q}{2}, Q \right].
$$

The second thing we can prove is that $( M , g ) = ( \mathbb { R } ^ { n } , g _ { \mathbb { R } ^ { n } } )$ : This clearly violates Dwhat we just established about the norm of the limit space. To see that the limit space is Euclidean space, recall that the manifolds in the sequence $( M _ { i } , \bar { g } _ { i } )$ are covered by Nharmonic coordinates that converge to harmonic coordinates in the limit space. In these harmonic coordinates the metric components satisfy

$$
\frac {1}{2} \Delta \bar {g} _ {k l} + Q (\bar {g}, \partial \bar {g}) = - \operatorname{Ric} _ {k l}.
$$

But we know that

$$
| - \mathrm{Ric} | \leq r _ {i} ^ {- 2} \Lambda \bar {g} _ {i}
$$

and that the $\bar { g } _ { k l }$ converge in the $C ^ { 1 , \alpha }$ topology to the metric coefficients $g _ { k l }$ for the Nlimit metric. Consequently, the limit manifold is covered by harmonic coordinates and in these coordinates the metric satisfies:

$$
\frac {1}{2} \Delta g _ {k l} + Q (g, \partial g) = 0.
$$

Thus the limit metric is a weak solution to the Einstein equation $\operatorname { R i c } { } ~ = ~ 0$ and Dtherefore must be a smooth Ricci flat Riemannian manifold. Finally, we use that: inj $( M _ { i } , \bar { g } _ { i } )  \infty$ : In the limit space any geodesic is a limit of geodesics from the Nsequence $( M _ { i } , \bar { g } _ { i } )$ ; since the Riemannian metrics converge in the $C ^ { 1 , \alpha }$ topology. If Na geodesic in the limit is a limit of segments, then it must itself be a segment. We can then conclude that as inj $( M _ { i } , \bar { g } _ { i } )  \infty$ any finite length geodesic must be a N !segment. This, however, implies that inj $( M , g ) = \infty$ : The splitting theorem 7.3.5 Dthen shows that the limit space is Euclidean space.

From this theorem we immediately get

Corollary 11.4.4 (Anderson, 1990). Let $n \geq 2$ and $\Lambda , D , R > 0$ be given. The class of closed Riemannian n-manifolds satisfying

$$
| \mathrm{Ric} | \leq \Lambda ,
$$

$$
\mathrm{diam} \leq D,
$$

$$
\operatorname{inj} \geq R
$$

is precompact in the $C ^ { 1 , \alpha }$ topology for any $\alpha \in ( 0 , 1 )$ and in particular contains only finitely many diffeomorphism types.

Notice how the above theorem depended on the characterization of Euclidean space we obtained from the splitting theorem. There are other similar characterizations of Euclidean space. One of the most interesting ones uses volume pinching.

### 11.4.2 Volume Pinching

The idea is to use the relative volume comparison (see lemma 7.1.4) rather than the splitting theorem. It is relatively easy to prove that Euclidean space is the only space with

$$
\operatorname{Ric} \geq 0,
$$

$$
\lim _ {r \to \infty} \frac {\operatorname{vol} B (p , r)}{\omega_ {n} r ^ {n}} = 1,
$$

where $\omega _ { n } r ^ { n }$ is the volume of a Euclidean ball of radius r (see also exercises 7.5.8 and $7 . 5 . 1 0 )$ . This result has a very interesting gap phenomenon associated to it under the stronger hypothesis that the space is Ricci flat.

Lemma 11.4.5 (Anderson, 1990). For each $n \geq 2$ there is an $\varepsilon \left( n \right) > 0$ such that any complete Ricci flat manifold $( M , g )$ that satisfies

$$
\operatorname{vol} B (p, r) \geq (1 - \varepsilon) \omega_ {n} r ^ {n}
$$

for some $p \in M$ is isometric to Euclidean space.

Proof. First observe that on any complete Riemannian manifold with Ric $\geq 0$ ; relative volume comparison can be used to show that

$$
\operatorname{vol} B (p, r) \geq (1 - \varepsilon) \omega_ {n} r ^ {n}
$$

as long as

$$
\lim _ {r \rightarrow \infty} \frac {\operatorname{vol} B (p , r)}{\omega_ {n} r ^ {n}} \geq (1 - \varepsilon).
$$

Therefore, if this holds for one p; then it must hold for all p: Moreover, if we scale the metric to $\left( M , \lambda ^ { 2 } g \right)$ ; then the same volume comparison still holds, as the lower curvature bound $\operatorname { R i c } \geq 0$ isn’t changed by scaling.

If our assertion is assumed to be false, then for each integer i there is a Ricci flat manifold $( M _ { i } , g _ { i } )$ with


$$
\lim _ {r \rightarrow \infty} \frac {\operatorname{vol} B (p _ {i} , r)}{\omega_ {n} r ^ {n}} \geq (1 - i ^ {- 1}),
$$

$$
\left\| \left(M _ {i}, g _ {i}\right) \right\| _ {C ^ {1, \alpha}, r} ^ {\text { har }} \neq 0 \text {   for   all   } r > 0.
$$

By scaling these metrics suitably, it is then possible to arrange it so that we have a sequence of Ricci flat manifolds $( M _ { i } , \bar { g } _ { i } , q _ { i } )$ with

$$
\lim _ {r \rightarrow \infty} \frac {\operatorname{vol} B (q _ {i} , r)}{\omega_ {n} r ^ {n}} \geq (1 - i ^ {- 1}),
$$

$$
\left\| \left(M _ {i}, \bar {g} _ {i}\right) \right\| _ {C ^ {1, \alpha}, 1} ^ {h a r} \leq 1,
$$

$$
\left\| \left(M _ {i}, \bar {g} _ {i}, q _ {i}\right) \right\| _ {C ^ {1, \alpha}, 1} ^ {\text { har }} \in [ 0. 5, 1 ].
$$

From what we already know, we can then extract a subsequence that converges in the $C ^ { m , \alpha }$ topology to a Ricci flat manifold $( M , g , q )$ . In particular, we must have that metric balls of a given radius converge and that the volume forms converge. Thus, the limit space must satisfy

$$
\lim _ {r \to \infty} \frac {\operatorname{vol} B (q , r)}{\omega_ {n} r ^ {n}} = 1.
$$

This means that we have maximal possible volume for all metric balls, and thus the manifold must be Euclidean. This, however, violates the continuity of the norm in the $C ^ { 1 , \alpha }$ topology, as the norm for the limit space would then have to be zero.

Corollary 11.4.6. Let $n \geq 2 , - \infty < \lambda \leq \Lambda < \infty$ ; and D; $R \in ( 0 , \infty )$ be given. There is $a \ \delta = \delta \left( n , \lambda \cdot R ^ { 2 } \right)$ 1  1 2 1such that the class of closed Riemannian n-manifolds satisfying

$$
(n - 1) \Lambda \geq \operatorname{Ric} \geq (n - 1) \lambda ,
$$

$$
\mathrm{diam} \leq D,
$$

$$
\operatorname{vol} B (p, R) \geq (1 - \delta) v (n, \lambda , R)
$$

is precompact in the $C ^ { 1 , \alpha }$ topology for any $\alpha \in ( 0 , 1 )$ and in particular contains only finitely many diffeomorphism types.

Proof. We use the same techniques as when we had an injectivity radius bound. Observe that if we have a sequence $( M _ { i } , \bar { g } _ { i } , p _ { i } )$ where $\bar { g } _ { i } = k _ { i } ^ { 2 } g _ { i } , k _ { i } \to \infty$ ; and the $( M _ { i } , g _ { i } )$ N N Dlie in the above class, then the volume condition reads

$$
\begin{array}{l} \operatorname{vol} B _ {\bar {g} _ {i}} \left(p _ {i}, R \cdot k _ {i}\right) = k _ {i} ^ {n} \operatorname{vol} B _ {g _ {i}} \left(p _ {i}, R\right) \\ \geq k _ {i} ^ {n} (1 - \delta) v (n, \lambda , R) \\ = (1 - \delta) v \left(n, \lambda \cdot k _ {i} ^ {- 2}, R \cdot k _ {i}\right). \\ \end{array}
$$

From relative volume comparison we can then conclude that for $r \leq R \cdot k _ { i }$ and very large i;

$$
\operatorname{vol} B _ {\bar {g} _ {i}} \left(p _ {i}, r\right) \geq (1 - \delta) v \left(n, \lambda \cdot k _ {i} ^ {- 2}, r\right) \sim (1 - \delta) \omega_ {n} r ^ {n}.
$$

In the limit space we must therefore have

$$
\operatorname{vol} B (p, r) \geq (1 - \delta) \omega_ {n} r ^ {n} \text {   for   all   } r.
$$

This limit space is also Ricci flat and is therefore Euclidean space. The rest of the proof goes as before, by getting a contradiction with the continuity of the norms.

### 11.4.3 Sectional Curvature

Given the results for Ricci curvature we immediately obtain.

Theorem 11.4.7 (The Convergence Theorem of Riemannian Geometry). Given R, $K > 0$ , there exist $Q , r > 0$ such that any $( M , g )$ with

$$
\operatorname{inj} \geq R,
$$

$$
| \sec | \leq K
$$

has $\| ( M , g ) \| _ { C ^ { 1 , \alpha } . r } ^ { h a r } \ \leq \ Q .$ . In particular, this class is compact in the pointed $C ^ { 1 , }$ k ktopology for all $\alpha < 1$ :

Using the diameter bound in positive curvature and Klingenberg’s estimate for the injectivity radius from theorem 6.5.1 we get

Corollary 11.4.8 (Cheeger, 1967). For given $n ~ \geq ~ 1$ and $k \ > \ 0$ ; the class of Riemannian 2n-manifolds with $k \ \leq$ sec $\leq 1$ is compact in the $C ^ { \alpha }$ topology and  consequently contains only finitely many diffeomorphism types.

A similar result was also proven by A. Weinstein at the same time. The hypotheses are the same, but Weinstein showed that the class contained finitely many homotopy types.

Our next result shows that one can bound the injectivity radius provided that one has lower volume bounds and bounded curvature. This result is usually referred to as Cheeger’s lemma. With a little extra work one can actually prove this lemma for complete manifolds. This requires that we work with pointed spaces and also to some extent incomplete manifolds as it isn’t clear from the beginning that the complete manifolds in question have global lower bounds for the injectivity radius.


Lemma 11.4.9 (Cheeger, 1967). Given $n \geq 2 , v , K > 0 ,$ , and a compact n-manifold .M; g/ with

$$
| \sec | \leq K,
$$

$$
\operatorname{vol} B (p, 1) \geq v,
$$

for all $p \in M ,$ , then $\operatorname { i n j } M \geq R ,$ where R depends only on n; K; and v.

Proof. As for Ricci curvature we can use a contradiction type argument. So assume we have $( M _ { i } , g _ { i } )$ with $\mathrm { i n j } M _ { i }  0$ and satisfying the assumptions of the lemma. Find $p _ { i } \ \in \ M _ { i }$ with $\mathrm { i n j } _ { p _ { i } } = \mathrm { i n j } ( M _ { i } , g _ { i } )$ and consider the pointed sequence $( M _ { i } , p _ { i } , \bar { g } _ { i } )$ ; where $\bar { g } _ { i } = ( \operatorname * { i n j } M _ { i } ) ^ { - 2 } g _ { i }$ is rescaled so that

$$
\operatorname{inj} \left(M _ {i}, \bar {g} _ {i}\right) = 1,
$$

$$
| \sec (M _ {i}, \bar {g} _ {i}) | \leq (\operatorname{inj} (M _ {i}, g _ {i})) ^ {2} \cdot K = K _ {i} \rightarrow 0.
$$

Now some subsequence of $( M _ { i } , \bar { g } _ { i } , p _ { i } )$ will converge in the pointed $C ^ { 1 , \alpha } , \alpha < 1$ ; topology to a manifold $( M , g , p )$ . Moreover, this manifold is flat since $\| ( M , g ) \| _ { C ^ { 1 , \alpha } , 1 } = 0$ .

k DThe first observation about $( M , g , p )$ is that $\operatorname { i n j } ( p ) \leq 1$ . This follows because the conjugate radius for $( M _ { i } , \bar { g } _ { i } ) \mathrm { ~ i s ~  ~ { ~ \geq ~ } ~ } \pi / \sqrt { K _ { i } } \mathrm { ~ \to ~ } \infty$ , so Klingenberg’s estimate for N  ! 1the injectivity radius (lemma 6.4.7) implies that there must be a geodesic loop of length 2 at $p _ { i } \in M _ { i }$ . Since $( M _ { i } , \bar { g } _ { i } , p _ { i } )  ( M , g , p )$ in the pointed $C ^ { 1 , \alpha }$ topology, the 2 N !geodesic loops must converge to a geodesic loop of length 2 in M based at p. Hence, $\mathrm { i n j } ( M ) \leq 1$ .

The other contradictory observation is that $\left( M , g \right) \ = \ \left( \mathbb { R } ^ { n } , g _ { \mathbb { R } ^ { n } } \right)$ . Using the assumption vo $\begin{array} { r } { D ( p _ { i } , 1 ) ~ \ge ~ v } \end{array}$ Dthe relative volume comparison (see lemma 7.1.4) shows that there is a $v ^ { \prime } ( n , K , v )$ such that $\operatorname { v o l } B ( p _ { i } , r ) \ \geq \ v ^ { \prime } \cdot r ^ { n }$ , for $r \ \leq \ 1$ . The rescaled manifold $( M _ { i } , \bar { g } _ { i } )$ then satisfies vol $B ( p _ { i } , r ) \geq v ^ { \prime } \cdot r ^ { n }$ , for $r \leq ( \operatorname* { i n j } ( M _ { i } , g _ { i } ) ) ^ { - 1 }$ . Using again that $( M _ { i } , \bar { g } _ { i } , p _ { i } ) ~  ~ ( M , g , p )$  in the pointed $C ^ { \alpha }$ topology, we get volB $\left( p , r \right) \geq v ^ { \prime } \cdot r ^ { n }$ N !for all r. Since $( M , g )$ is flat, this shows that it must be Euclidean space.

To justify the last statement let M be a complete flat manifold. As the elements of the fundamental group act by isometries on Euclidean space, we know that they must have infinite order (any isometry of finite order is a rotation around a point and therefore has a fixed point). So if M is not simply connected, then there is an intermediate covering $\mathbb { R } ^ { n } \to \hat { M } \to M$ , where $\pi _ { 1 } \left( { \hat { M } } \right) = \mathbb { Z }$ : This means that $\hat { M } = \mathbb { R } ^ { n - 1 } \times S ^ { 1 } \left( R \right)$ for some $R > 0$ . Hence, for any $p \in { \dot { M } }$ we must have

$$
\lim _ {r \to \infty} \frac {\operatorname{vol} B (p , r)}{r ^ {n - 1}} <   \infty .
$$

The same must then also hold for M itself, contradicting our volume growth assumption.

This lemma was proved with a more direct method by Cheeger. We have included this proof in order to show how our convergence theory can be used. The lemma also shows that the convergence theorem of Riemannian geometry remains true if the injectivity radius bound is replaced by a lower bound on the volume of 1-balls. The following result is now immediate.

Corollary 11.4.10 (Cheeger, 1967). Let $n \geq 2 , K , D , v > 0$ be given. The class of closed Riemannian n-manifolds with

$$
| \sec | \leq K,
$$

$$
\mathrm{diam} \leq D,
$$

$$
\operatorname{vol} \geq v
$$

is precompact in the $C ^ { 1 , \alpha }$ topology for any $\alpha \in ( 0 , 1 )$ and in particular, contains only finitely many diffeomorphism types.

### 11.4.4 Lower Curvature Bounds

It is also possible to obtain similar compactness results for manifolds that only have lower curvature bounds as long as we also assume that the injectivity radius is bounded from below.

We give a proof in the case of lower sectional curvature bounds and mention the analogous result for lower Ricci curvature bounds.

Theorem 11.4.11. Given R; $k > 0$ ; there exist Q; r depending on R; k such that any manifold $( M , g )$ with

$$
\sec \geq - k ^ {2},
$$

$$
\operatorname{inj} \geq R
$$

satisfies $\| ( M , g ) \| _ { C ^ { 1 } , r } \leq Q .$

Proof. It suffices to get a Hessian estimate for distance functions $r ( x ) \ = \ | x p |$ Lemma 6.4.3 shows that

$$
\operatorname{Hess} r (x) \leq k \cdot \coth (k \cdot r (x)) g _ {r}
$$

for all $x \in B \left( p , R \right) - \left\{ p \right\}$ . Conversely, if $r ( x _ { 0 } ) < R$ ; then $r ( x )$ is supported from below by $f ( x ) = R - | x y _ { 0 } |$ , where $y _ { 0 } = c ( R )$ and c is the unique unit speed geodesic D  j jthat minimizes the distance from p to $x _ { 0 }$ . Thus

$$
\operatorname{Hess} r \geq \operatorname{Hess} f \geq - k \cdot \coth (| x _ {0} y _ {0} | \cdot k) g _ {r} = - k \cdot \coth (k (R - r (x _ {0}))) g _ {r}
$$


at $x _ { 0 }$ . Hence $\left| \mathrm { H e s s } r \right| \le { \cal Q } \left( k , R \right)$ on metric balls $B \left( x , r \right)$ where $| x p | \geq R / 4$ and $r \leq R / _ { 4 }$ .

For fixed $p \in M$ choose an orthonormal basis $e _ { 1 } , \ldots , e _ { n }$ jfor $T _ { p } M$ and geodesics $c _ { i } ( t )$ with $c _ { i } ( 0 ) = p , \dot { c } _ { i } ( 0 ) = e _ { i }$ . We use the distance functions

$$
r ^ {i} (x) = \left| x c _ {i} \left(- \frac {R}{2}\right)\right|: B \left(p, \frac {R}{4}\right)\rightarrow \mathbb {R}
$$

to create a potential coordinate system

$$
\psi (x) = \left(r ^ {1} (x), \dots , r ^ {n} (x)\right) - \left(r ^ {1} (p), \dots , r ^ {n} (p)\right).
$$

By construction $D \psi | _ { p } \left( e _ { i } \right)$ is the standard basis for $T _ { 0 } \mathbb { R } ^ { n }$ . In particular, defines ja coordinate chart on some neighborhood of $p$ with $g _ { i j } \vert _ { p } ~ = ~ \delta _ { i j }$ . While we can’t define $g _ { i j }$ on $B \left( p , R / 4 \right)$ , the potential inverse $g ^ { i j } = g \bigl ( \bar { \nabla } \dot { r } ^ { i } , \nabla r ^ { j } \bigr )$ is defined on the D r rentire region. The Hessian estimates combined with the fact that $\left| \nabla r ^ { k } \right| = 1$ imply that $\left| d g ^ { i j } \right| \le Q \left( n , k , R \right)$ on $B \left( p , { \cal R } / 4 \right)$ . In particular, $\left| \left[ \delta ^ { i j } - g ^ { i j } | _ { x } \right] \right| ^ { 1 } < { \mathrm { ~ } } ^ { 1 } / { 1 0 }$ for $x \in$ $B \left( p , \dot { \delta } \left( n , \dot { k } , R \right) \right)$ . This implies that $g ^ { i j }$  jhas a well-defined inverse $g _ { i j }$ on $B \left( p , \delta \right)$ 2with the properties that $\left| \left[ g _ { i j } \right| _ { p } - g _ { i j } \right| _ { x } \right] \left| \leq 1 / 9$ and $\left| d g _ { i j } \right| \le C \left( n , K , R \right)$ on $B \left( p , \delta \right)$ .

j  j  By inspecting the proof of the inverse function theorem we conclude that is injective on $B \left( p , \delta \right)$ and that $B \left( 0 , \delta / 4 \right) \subset \psi \left( B \left( p , \delta \right) \right)$ / (see also exercise 6.7.23). Moreover, we have also established n1 and n2.

Example 11.4.12. This theorem is actually optimal. Consider rotationally symmetric metrics $d r ^ { 2 } + \phi _ { \varepsilon } ^ { 2 } ( r ) d \theta ^ { 2 }$ , where $\phi _ { \varepsilon }$ is concave and satisfies

$$
\phi_ {\varepsilon} (r) = \left\{ \begin{array}{l l} r & \text { for } 0 \leq r \leq 1 - \varepsilon , \\ \frac {3}{4} r & \text { for } 1 + \varepsilon \leq r. \end{array} \right.
$$

These metrics have sec $\geq 0$ and $\operatorname { i n j } \geq 1 . \operatorname { A s } \varepsilon  0$ ; we get a $C ^ { 1 , 1 }$ manifold with a $C ^ { 0 , 1 }$ Riemannian metric $( M , g )$ . In particular, $\| ( M , g ) \| _ { C ^ { 0 , 1 } , r } < \infty$ for all r. Limit spaces of sequences with $\operatorname { i n j } \ \geq { \cal R } ,$ ; sec $\ge ~ - k ^ { 2 }$ k 1can therefore not in general be   assumed to be smoother than the above example.

Example 11.4.13. With a more careful construction, we can also find $\psi _ { \varepsilon }$ with

$$
\psi_ {\varepsilon} (r) = \left\{ \begin{array}{l l} \sin r & \text { for } 0 \leq r \leq \frac {\pi}{2} - \varepsilon , \\ 1 & \text { for } \frac {\pi}{2} \leq r. \end{array} \right.
$$

Then the metric $d r ^ { 2 } + \psi _ { \varepsilon } ^ { 2 } ( r ) d \theta ^ { 2 }$ satisfies $| \sec | \leq 4$ and in $\begin{array} { r } { \ge \frac { 1 } { 4 } . \operatorname { A s } \varepsilon  0 } \end{array}$ ; we get a limit metric that is $C ^ { 1 , 1 }$ j j   !. We have, however, only shown that such limit spaces are $C ^ { 1 , \alpha }$ for all $\alpha < 1$ .

Unlike the situation for bounded curvature we cannot get injectivity radius bounds when the curvature is only bounded from below. The above examples are easily adapted to give the following examples.

EXERCISE 11.4.14. Given $a \in ( 0 , 1 )$ and $\epsilon > 0$ , there is a smooth concave function $\rho _ { \epsilon } \left( r \right)$ with the property that

$$
\rho_ {\varepsilon} (r) = \left\{ \begin{array}{l l} r & \text {for 0\leq r\leq\varepsilon ,} \\ a r & \text {for 2\varepsilon\leq r .} \end{array} \right.
$$

The corresponding surfaces $d r ^ { 2 } + \rho _ { \varepsilon } ^ { 2 } ( r ) d \theta ^ { 2 }$ have sec $\geq 0$ and inj $\le 5 \epsilon$ , while the volume of any R ball is always $\ge a \pi R ^ { 2 }$ .

Finally we mention the Ricci curvature result.

Theorem 11.4.15 (Anderson-Cheeger, 1992). Given R; $k > 0$ and $\alpha ~ \in ~ ( 0 , 1 )$ there exist Q; r depending on n; R; k such that any manifold $( M ^ { n } , g )$ with

$$
\begin{array}{l} \operatorname{Ric} \geq - (n - 1) k ^ {2}, \\ \operatorname{inj} \geq R \\ \end{array}
$$

satisfies $\| ( M , g ) \| _ { C ^ { \alpha } , r } ^ { h a r } \leq Q .$

The proof of this result is again by contradiction and uses most of the ideas we have already covered. However, since the harmonic norm does not work well without control on the derivatives of the metric it is necessary to use the Sobolev spaces $W ^ { 1 , p } ~ \subset ~ C ^ { 1 - n / p }$ to define a new harmonic norm with $L ^ { p }$ control on the derivatives. For the contradiction part of the argument we need to use distance functions as above, but we only obtain bounds on their Laplacians. By inspecting how these bounds are obtained we can show that they $ 0$ as inj  and $k  0$ . ! ! 1 !This will assist in showing that the limit space is Euclidean space. For more details see the original paper [4].

### 11.4.5 Curvature Pinching

Let us turn our attention to some applications of these compactness theorems. One natural subject to explore is that of pinching results. Recall from corollary 5.6.14 that complete constant curvature manifolds have uniquely defined universal coverings. It is natural to ask whether one can in some topological sense still expect this to be true when one has close to constant curvature. Now, any Riemannian manifold $( M , g )$ has curvature close to zero if we multiply the metric by a large scalar. Thus, some additional assumptions must come into play.

We start out with the simpler problem of considering Ricci pinching and then use this in the context of curvature pinching below. The results are very simple consequences of the convergence theorems we have already presented.


Theorem 11.4.16. Given $n \geq 2$ ; R; $D > 0 ,$ , and $\lambda \in \mathbb { R }$ ; there is an $\varepsilon \left( n , \lambda , D , R \right) >$ 0 such that any closed Riemannian n-manifold $( M , g )$ with

$$
\mathrm{diam} \leq D,
$$

$$
\operatorname{inj} \geq R,
$$

$$
| \operatorname{Ric} - \lambda g | \leq \varepsilon
$$

is $C ^ { 1 , \alpha }$ close to an Einstein metric with Einstein constant $\lambda$ :

Proof. We already know that this class is precompact in the $C ^ { 1 , \alpha }$ topology no matter what " we choose. If the result is false, there would be a sequence $( M _ { i } , g _ { i } ) \to ( M , g )$ that converges in the $C ^ { 1 , \alpha }$ !topology to a closed Riemannian manifold of class $C ^ { 1 , \alpha }$ , where in addition, $\left| \operatorname { R i c } _ { g _ { i } } - \lambda g _ { i } \right| \to 0$ : Using harmonic coordinates we conclude that  !the metric on the limit space must be a weak solution to

$$
\frac {1}{2} \Delta g + Q (g, \partial g) = - \lambda g.
$$

But this means that the limit space is actually Einstein, with Einstein constant $\lambda$ ; thus, contradicting that the spaces $( M _ { i } , g _ { i } )$ were not close to such Einstein metrics.

Using the compactness theorem for manifolds with almost maximal volume it follows that the injectivity radius condition could have been replaced with an almost maximal volume condition. Now let us see what happens with sectional curvature.

Theorem 11.4.17. Given $n \geq 2 , v , D > 0 ,$ , and $\lambda \in \mathbb { R }$ ; there is an $\varepsilon \left( n , \lambda , D , v \right) >$ 0 such that any closed Riemannian n-manifold $( M , g )$ with

$$
\mathrm{diam} \leq D,
$$

$$
\operatorname{vol} \geq v,
$$

$$
| \sec - \lambda | \leq \varepsilon
$$

is $C ^ { 1 , \alpha }$ close to a metric of constant curvature $\lambda$ :

Proof. In this case first observe that Cheeger’s lemma 11.4.9 gives us a lower bound for the injectivity radius. The previous theorem then shows that such metrics must be close to Einstein metrics. We have to check that if $( M _ { i } , g _ { i } ) \ :  \ : ( M , g )$ ; where $\left| \sec _ { g _ { i } } - \lambda \right| \to 0$ and ${ \mathrm { R i c } } _ { g } = ( n - 1 ) \lambda g$ ; then in fact $( M , g )$ !has constant curvature $\lambda$ :  ! D To see this, it is perhaps easiest to observe that if $M _ { i } \ni p _ { i } \uightharpoonup p \in M$ then we can use polar coordinates around these points to write $g _ { i } = d r ^ { 2 } + g _ { r , i }$ 2and $g = d r ^ { 2 } + g _ { r } .$ . Since the metrics converge in $C ^ { 1 , \alpha }$ D; we certainly have that $g _ { r , i }$ Dconverge to $g _ { r }$ C: Using the curvature pinching, we conclude from theorem 6.4.3

$$
\frac {\mathrm{sn} _ {\lambda + \varepsilon_ {i}} ^ {\prime} (r _ {i})}{\mathrm{sn} _ {\lambda + \varepsilon_ {i}} (r _ {i})} g _ {r, i} \leq \operatorname{Hess} r _ {i} \leq \frac {\mathrm{sn} _ {\lambda - \varepsilon_ {i}} ^ {\prime} (r _ {i})}{\mathrm{sn} _ {\lambda - \varepsilon_ {i}} (r _ {i})} g _ {r, i}
$$

with $\varepsilon _ { i } \to 0$ : Using that the metrics converge in $C ^ { 1 , \alpha }$ it follows that the limit metric !satisfies

$$
\mathrm{Hess} r = \frac {\mathrm{sn} _ {\lambda} ^ {\prime} (r)}{\mathrm{sn} _ {\lambda} (r)} g _ {r}.
$$

Corollary 4.3.4 then implies that the limit metric has constant curvature $\lambda$ :

![](images/1d964ef381a7c66396232adc8ec12be3f33c1d2801fff338f114446ef086a520.jpg)

It is interesting that we had to go back and use the more geometric estimates for distance functions in order to prove the curvature pinching, while the Ricci pinching could be handled more easily with analytic techniques using harmonic coordinates. One can actually prove the curvature result with purely analytic techniques, but this requires that we study convergence in a more general setting where one uses $L ^ { p }$ norms and estimates. This has been developed rigorously and can be used to improve the above results to situations were one has only $L ^ { p }$ curvature pinching rather than the $L ^ { \infty }$ pinching we use here (see [91], [88], and [36]).

When the curvature  is positive, some of the assumptions in the above theorems are in fact not necessary. For instance, Myers’ estimate for the diameter makes the diameter hypothesis superfluous. For the Einstein case this seems to be as far as we can go. In the positive curvature case we can do much better. In even dimensions, we already know from theorem 6.5.1, that manifolds with positive curvature have both bounded diameter and lower bounds for the injectivity radius, provided that there is an upper curvature bound. We can therefore show

Corollary 11.4.18. Given $2 n \geq 2$ ; and $\lambda > 0$ ; there is an $\varepsilon = \varepsilon \left( n , \lambda \right) > 0$ such that any closed Riemannian 2n-manifold $( M , g )$ with

$$
| \sec - \lambda | \leq \varepsilon
$$

is $C ^ { 1 , \alpha }$ close to a metric of constant curvature :

This corollary is, in fact, also true in odd dimensions. This was proved by Grove-Karcher-Ruh in [58]. Notice that convergence techniques are not immediately applicable because there are no lower bounds for the injectivity radius. Their pinching constant is also independent of the dimension. Using theorem 6.5.5 we can only conclude that.

Corollary 11.4.19. Given $n \geq 2$ ; and $\lambda > 0$ ; there is an $\varepsilon = \varepsilon \left( n , \lambda \right) > 0$ such that any closed simply connected Riemannian n-manifold $( M , g )$ Dwith

$$
| \sec - \lambda | \leq \varepsilon
$$

is $C ^ { 1 , \alpha }$ close to a metric of constant curvature $\lambda$ :

Also recall the quarter pinching results in positive curvature that we proved in section 12.3. There the conclusions were much weaker and purely topological. These results have more recently been significantly improved using Ricci flow techniques. First in [16] to the situation where the curvature operator is positive and next in [20] to the case where the complex sectional curvatures are positive.

In negative curvature some special things also happen. Namely, Heintze has shown that any complete manifold with $- 1 \leq \sec < 0$ has a lower volume bound when the dimension $\geq 4$  (see also [52] for a more general statement). The lower volume bound is therefore an extraneous condition when doing pinching in negative curvature. However, unlike the situation in positive curvature the upper diameter bound is crucial. See, e.g., [55] and [43] for counterexamples.

This leaves us with pinching around 0: As any compact Riemannian manifold can be scaled to have curvature in $[ - \varepsilon , \varepsilon ]$ for any "; we do need the diameter bound. The volume condition is also necessary, as the Heisenberg group from the exercise 4.7.22 has a quotient where there are metrics with bounded diameter and arbitrarily pinched curvature. This quotient, however, does not admit a flat metric. Gromov was nevertheless able to classify all n-manifolds with

$$
| \sec | \leq \varepsilon (n),
$$

$$
\mathrm{diam} \leq 1
$$

for some very small $\varepsilon \left( n \right) > 0$ : More specifically, they all have a finite cover that is a quotient of a nilpotent Lie group by a discrete subgroup. Interestingly, there is also a Ricci flow type proof of this result in [94]. For more on collapsing in general, the reader can start by reading [44].

## 11.5 Further Study

Cheeger first proved his finiteness theorem and put down the ideas of $C ^ { k }$ convergence for manifolds in [25]. They later appeared in journal form [26], but not all ideas from the thesis were presented in this paper. Also the idea of general pinching theorems as described here are due to Cheeger [27]. For more generalities on convergence and their uses we recommend the surveys by Anderson, Fukaya, Petersen, and Yamaguchi in [51]. Also for more on norms and convergence theorems the survey by Petersen in [54] might prove useful. The text [53] should also be mentioned again. It was probably the original french version of this book that really spread the ideas of Gromov-Hausdorff distance and the stronger convergence theorems to a wider audience. Also, the convergence theorem of Riemannian geometry, as stated here, appeared for the first time in this book.

We should also mention that S. Peters in [86] obtained an explicit estimate for the number of diffeomorphism classes in Cheeger’s finiteness theorem. This also seems to be the first place where the modern statement of Cheeger’s finiteness theorem is proved.

## 11.6 Exercises

EXERCISE 11.6.1. Find a sequence of 1-dimensional metric spaces that Hausdorff converge to the unit cube ${ [ 0 , 1 \dot { ] } } ^ { 3 }$ endowed with the metric coming from the maximum norm on $\mathbb { R } ^ { 3 }$ : Then find surfaces (jungle gyms) converging to the same space.

EXERCISE 11.6.2. Assume that we have a map (not necessarily continuous) $F$ $X  Y$ between metric spaces such that for some $\epsilon > 0$ :

$$
\left| \left| x _ {1} x _ {2} \right| - \left| F \left(x _ {1}\right) F \left(x _ {2}\right) \right| \right| \leq \epsilon , x _ {1} x _ {2} \in X
$$

and

$$
F (X) \subset Y \text {   is   } \epsilon \text {-dense. }
$$

Show that $d _ { G - H } ( X , Y ) < 2 \epsilon$ .

EXERCISE 11.6.3. C. Croke has shown that there is a universal constant $c \left( n \right)$ such that any n-manifold with $\operatorname { i n j } \geq R$ satisfies volB $\left( p , r \right) \geq c \left( n \right) \cdot r ^ { n }$ for $\begin{array} { r } { r \le { \frac { R } { 2 } } } \end{array}$ : Use this  to show that the class of n-dimensional manifolds satisfying $\operatorname { i n j } \geq R$ and vol $\leq V$ is precompact in the Gromov-Hausdorff topology.

EXERCISE 11.6.4. Let $( M , g )$ be a complete Riemannian n-manifold with Ric $\geq$ $( n - 1 ) k$ . Show that there exists a constant $C \left( n , k \right)$ with the property that for each $\epsilon \in ( 0 , 1 )$ there exists a cover of metric balls $B \left( x _ { i } , \epsilon \right)$ with the property that no more 2than $C \left( n , k \right)$ of the balls $B \left( x _ { i } , 5 \epsilon \right)$ can have nonempty intersection.

EXERCISE 11.6.5. Show that there are Bochner formulas for Hess $\begin{array} { r } { \left( \frac { 1 } { 2 } g \left( X , Y \right) \right) } \end{array}$ and $\Delta \textstyle { \frac { 1 } { 2 } } g \left( X , Y \right)$ , where X and Y are vector fields with symmetric X and Y: This can r rbe used to prove the formulas relating Ricci curvature to the metric in harmonic coordinates.

EXERCISE 11.6.6. Show that in contrast to the elliptic estimates, it is not possible to find $C ^ { \alpha }$ bounds for a vector field X in terms of $C ^ { 0 }$ bounds on X and divX:

EXERCISE 11.6.7. Define $C ^ { m , \alpha }$ convergence for incomplete manifolds. On such manifolds define the boundary @ as the set of points that lie in the completion but not in the manifold itself. Show that the class of incomplete spaces with $| \mathrm { R i c } | \le \Lambda$ and inj $\left( p \right) \geq \operatorname* { m i n } \left\{ R , R \cdot d \left( p , \partial \right) \right\} , R < 1$ ; is precompact in the $C ^ { 1 , \alpha }$ j jtopology.

EXERCISE 11.6.8. Define a weighted norm concept. That is, fix a positive function $\rho \left( R \right)$ ; and assume that in a pointed manifold $( M , g , p )$ the points on the distance spheres $S \left( p , R \right)$ have norm $\leq \rho \left( R \right)$ : Prove the corresponding fundamental theorem.

EXERCISE 11.6.9. Assume $\mathcal { M }$ is a class of compact Riemannian n-manifolds that is compact in the $C ^ { m , \alpha }$ topology. Show that there is a function $f \left( r \right)$ , where $f ( r )  0$ as $r \to 0$ , depending on $\mathcal { M }$ such that $\| ( M , g ) \| _ { C ^ { m , \alpha } , r } \leq f \left( r \right)$ for all $M \in \mathcal { M }$ .

EXERCISE 11.6.10. The local models for a class of Riemannian manifolds are the types of spaces one obtains by scaling the elements of the class by a constant $ \infty$ : For example, if we consider the class of manifolds with $| \mathsf { s e c } | \le K$ for some $K .$ ! 1; then upon rescaling the metrics by a factor of $\lambda ^ { 2 }$ j j ; we have the condition sec $\leq \lambda ^ { - 2 } K$ ; as $\lambda \to \infty$ ; we therefore arrive at the condition $| \mathrm { s e c } | = 0$ j j : This means that the ! 1 jlocal models are all the flat manifolds. Notice that we $\mathrm { d o n ^ { \prime } t }$ worry about any type of convergence here. If, in this example, we additionally assume that the manifolds have $\operatorname { i n j } \geq R$ ; then upon rescaling and letting $\lambda \to \infty$ we get the extra condition $\operatorname { i n j } = \infty$  ! 1: Thus, the local model is Euclidean space. It is natural to suppose that D 1any class that has Euclidean space as it only local model must be compact in some topology.

Show that a class of spaces is compact in the $C ^ { m , \alpha }$ topology if when we rescale a sequence in this class by constants that $ \infty$ ; the sequence subconverges in the $C ^ { m , \alpha }$ topology to Euclidean space.

EXERCISE 11.6.11. Consider the singular Riemannian metric $d t ^ { 2 } + ( a t ) ^ { 2 } d \theta ^ { 2 } , a >$ 1; on $\mathbb { R } ^ { 2 }$ C: Show that there is a sequence of rotationally symmetric metrics on $\mathbb { R } ^ { 2 }$ with sec $\leq 0$ and $\operatorname { i n j } = \infty$ that converge to this metric in the Gromov-Hausdorff topology.

EXERCISE 11.6.12. Show that the class of spaces with $\operatorname { i n j } \geq R$ and $\left| \nabla ^ { k } \mathbf { R i c } \right| \leq \Lambda$ for $k = 0 , \ldots , m$ is compact in the $C ^ { m + 1 , \alpha }$ topology.

EXERCISE 11.6.13 (S-h. Zhu). Consider the class of complete or compact n-dimensional Riemannian manifolds with

$$
\operatorname{conj.rad} \geq R,
$$

$$
| \mathrm{Ric} | \leq \Lambda ,
$$

$$
\operatorname{vol} B (p, 1) \geq v.
$$

Using the techniques from Cheeger’s lemma, show that this class has a lower bound for the injectivity radius. Conclude that it is compact in the $C ^ { 1 , \alpha }$ topology.

EXERCISE 11.6.14. Using the Eguchi-Hanson metrics from exercise 4.7.23 show that one cannot in general expect a compactness result for the class

$$
| \mathrm{Ric} | \leq \Lambda ,
$$

$$
\operatorname{vol} B (p, 1) \geq v.
$$

Thus, one must assume either that v is large as we did before or that there a lower bound for the conjugate radius.

EXERCISE 11.6.15. The weak (harmonic) norm $\| ( M , g ) \| _ { C ^ { m , \alpha } , r } ^ { w e a k }$ is defined in almost k kthe same way as the norms we have already worked with, except that we only insist that the charts $\varphi _ { s } : B ( 0 , r )  U _ { s }$ are immersions. The inverse is therefore only W !locally defined, but it still makes sense to say that it is harmonic.

(1) Show that if $( M , g )$ has bounded sectional curvature, then for all $Q > 0$ there is an $r > 0$ such that $\| ( M , g ) \| _ { C ^ { 1 , \alpha } , r } ^ { w e a k } \le Q$ : Thus, the weak norm can be thought of k k as a generalized curvature quantity.   
(2) Show that the class of manifolds with bounded weak norm is precompact in the Gromov-Hausdorff topology.   
(3) Show that $( M , g )$ is flat if and only if the weak norm is zero on all scales.