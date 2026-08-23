MRA-Based Wavelet Frames and Applications 

Bin Dong and Zuowei Shen 

# MRA-Based Wavelet Frames and Applications

Bin Dong and Zuowei Shen 

## Contents

MRA-Based Wavelet Frames and Applications
BIN DONG AND ZUOWEI SHEN 1
MRA-Based Wavelet Frames and Applications 3
Introduction 6
Lecture 1. Multiresolution Analysis 9
1. Definitions and Basics 9
2. Density of the Union of $V_n$ 11
3. Triviality of the Intersections of $V_n$ 13
4. Approximation 16
Lecture 2. MRA-Based Tight Wavelet Frames 23
1. Extension Principles 25
2. Quasi-affine Systems and Associated Algorithms 44
3. Higher Dimension Tight Frame Systems 54
Lecture 3. Pseudo-splines and Tight Frames 59
1. Definitions and Basics 59
2. Wavelets From Pseudo-splines 69
3. Regularity of Pseudo-splines 77
4. Two Lemmata 89
Lecture 4. Frame Based Image Restorations 97
1. Modeling 98
2. Balanced Approach 103
3. Analysis Based Approach 123
Lecture 5. Other Applications of Frames 131
1. Background and Models 131
2. Frame Based Blind Deconvolution 137
3. Frame Based Image Segmentation 140
4. Scene Reconstruction from Range Data 143
Bibliography 149 

## Introduction

This collection of lecture notes is based on a series of lectures presented by the authors at Institute for Advanced Studies/Park City Mathematics 2010 Summer Program on “The Mathematics of Image Processing”. The aim is to provide a concise, systematic and self contained overview on wavelet frames derived from a multiresolution analysis (MRA-based wavelet frames) and its applications in image analysis and restoration. 

The publication of the unitary extension principle [158] in 1997 was the starting point of the MRA-based wavelet frames, especially the MRA-based tight wavelet frames. The unitary extension principle makes constructing wavelet frame systems with multiresolution structure painless. Wavelet frames derived from a multiresolution provide sparse approximations for piecewise smooth functions and have fast decomposition and reconstruction algorithms associated with them. These two important properties of MRA-based wavelet frames lead to many applications of wavelet frames in image processing. These lecture notes provide a detailed and comprehensive description of MRA-based wavelet frame theory and its applications. 

Frame theory and its applications, notably the Gabor frames (see e.g. [61, 99, 132]) and wavelet frames (without a multiresolution structure) (see e.g. [61, 132]), were developed long before the discovery of the multiresolution analysis of [131, 134] and the systematic construction of the MRA-based compactly supported orthonormal wavelets of [60]. The concept of frame can be traced back to [80]. The rich literature of Gabor and wavelet frames provides a wide range of applications including time frequency analysis for signal processing, coherent state in quantum mechanics, filter bank design in electrical engineering, edge and singularity detection in image processing, and etc. It is not an intention of this note to give a complete survey on frame theory and applications. Details on the earlier development and applications of Gabor and wavelet frames are provided in [61, 99, 132, 134, 135] and the references therein. Instead, the purpose here is to summarize some of contributions of the authors and their collaborators on the MRA-based wavelet frames and their applications. Special attention is given to applications of MRA-based tight wavelet frames in image restorations and analysis; a theme that is easily followed. We hope that these notes can be used for a course on this subject in future. A short note of such is given in [167]. 

MRA-based wavelet frames, especially, MRA-based wavelet tight frames, can be viewed as a generalization of the MRA-based orthonormal wavelet of [60, 131]. Since the publication of [60, 131], especially after the compactly supported MRAbased orthonormal wavelets being constructed by [60], wavelet analysis and its applications have been one of the most active research areas in applied mathematics over the past two decades. Algorithms and methods based on wavelet analysis have become powerful tools in image/signal processing and analysis. One well known application of MRA-based wavelets is image compression (see e.g. [132]) using the orthonormal or bi-orthogonal MRA-based wavelet bases of [56, 60]. Tight wavelet frames derived from over sampled orthonormal wavelet basis are already used in noise removal by [57, 77]. The publication of the unitary extension principle of [158] initiated a new wave of theoretical development, as well as exploration of new applications of MRA-based tight wavelet frames. Further theoretical developments on MRA-based wavelet frames can be found in e.g. [52, 65, 106] and the references therein. In order to be useful in applications, tight wavelet frames that have a multiresolution structure are preferred because this guarantees the existence of fast decomposition and reconstruction algorithms. Recently, MRA-based tight wavelet frames have been used in image inpainting, image denoising, image deblurring, blind deblurring, and image decompositions (see e.g. [14, 15, 16, 22, 23, 25, 32, 34, 36, 38]). More recently in [71], the MRA-based tight wavelet frame is used to develop algorithms for image segmentation. In some of applications mentioned above, the unitary extension principle is used to design a tight wavelet frame system adapted to the real life problems in hand, see, e.g. [14, 25, 32, 36, 38]. In other applications, simple tight wavelet frames derived from the unitary extension principle are used. Frame based algorithms for 3D surface reconstruction from scattered points and medical imaging (e.g. tomography) are currently being explored. 

The community’s efort to develop redundant wavelet systems that have sparse approximations for various classes of functions has led to the development of the MRA-based wavelet frames. The properties of redundancy, sparse approximation and the existence of fast decomposition and reconstruction algorithms are the key factors for the wide usage of wavelet frame systems. There are a few other redundant wavelet systems that have been developed and widely used in image/signal processing and analysis. Such redundant systems include, for example, bi-frames of [52, 65, 101, 157], bandlets of [132], ridgelets of [78], curvelets of [26, 27], and shearlets of [102, 123]. We forgo discussing any other redundant wavelet systems in order to have a clear focus in these lecture notes. Interested readers should consult the relevant references for further details. 

The lecture notes are organized as follows. In Lecture 1, we present the multiresolution analysis, which lays the foundation of MRA-based wavelets and tight wavelet frames and provides a platform for multi-level analysis of images/signals. In Lecture 2, based on the MRA structure, we introduce the unitary extension principle of [158], which provides a general and convenient framework to construct MRA-based tight frames (framelets) of $L _ { 2 } ( \mathbb { R } ^ { d } )$ . The MRA-based tight frames derived from the unitary extension principle have fast decomposition and reconstruction algorithms with the same complexity as convolutions. Details of fast algorithms for framelet decomposition and reconstruction are also given. In Lecture 3, we introduce a general class of refinable functions, called pseudo-splines [65, 165, 75], which includes B-splines, Daubechies orthogonal refinable function and interpolatory refinable functions as special cases. Comprehensive regularity analysis of pseudo-splines, as well as the construction of (anti)symmetric pseudo-spline tight frames is provided. In Lecture 4, we present tight frame based models namely, balanced, synthesis based and analysis based approach, as well as the corresponding fast algorithms for image restoration problems, e.g. image deblurring, denoising and inpainting. In Lecture 5, we consider some other interesting and important applications of tight frames. We discuss the model proposed in [18] on blind deblurring (motion deblurring to be specific) problems. The major dificulty of blind deblurring problems is that the convolution kernel is unknown and needs to be solved simultaneously with the underlying images. Then, we present a frame based image segmentation model with a fast algorithm for the general image segmentation problems of [71]. At the end of this lecture, we discuss the model proposed by [112] on reconstruction of scenes (visible surfaces) from scattered, noisy and possibly sparse range data (point clouds). High-quality 3D scene modeling has long been an important research topic in computer vision, robotic navigation, computer graphics and animation. 

## Multiresolution Analysis

The concept of multiresolution analysis (MRA) was first introduced by Mallat [131] and Meyer [134]. It is a general framework that makes constructing orthonormal wavelet bases for $L _ { 2 } ( \mathbb { R } )$ very easy. The MRA-based compactly supported orthonormal wavelet systems were constructed by Daubechies [60]. Furthermore, the MRA structure grants fast implementation of wavelet decomposition and reconstruction which makes wavelets a very practical tool for image/signal processing and analysis. 

## 1. Definitions and Basics

Here, we adopt a more general MRA structure as proposed in [68], rather than the structure originally proposed by Mallat and Meyer. 

For a given function $\phi \in L _ { 2 } ( \mathbb { R } )$ , we define the shift-invariant subspace $V ( \phi ) \subset$ $L _ { 2 } ( \mathbb { R } )$ generated by φ as 

$$
V (\phi) := \overline {{\operatorname{span} \{\phi (\cdot - k) , k \in \mathbb {Z} \}}},
$$

and denote $V _ { n }$ as the $2 ^ { n }$ -dilate of $V ( \phi )$ , i.e. 

$$
V _ {n} = \overline {{\operatorname{span} \{\phi (2 ^ {n} \cdot - k) , k \in \mathbb {Z} \}}}, n \in \mathbb {Z}.\tag{1.1}
$$

We have $V = V _ { 0 }$ . A subspace $S \subset L _ { 2 } ( \mathbb { R } )$ is called translation-invariant if for any $t \in \mathbb { R }$ and $f \in S$ , we have $f ( \cdot - t ) \in S$ . The subspace $S$ is called s-shift-invariant if for any $k \in \mathbb { Z }$ and $f \in S$ , we have $f ( \cdot - s k ) \in S$ , and in particular if $s = 1$ , we call $S$ a shift-invariant subspace. 

Now for a given sequence of subspaces $\{ V _ { n } \} _ { n \in \mathbb { Z } }$ , we say that $\left\{ V _ { n } \right\}$ forms a multiresolution analysis (MRA) for $L _ { 2 } ( \mathbb { R } )$ , if the following conditions are satisfied: 

(1.2) 

$$
V _ {n} \subset V _ {n + 1}, n \in \mathbb {Z};\tag{1.3}
$$

$$
\overline {{\cup_ {n} V _ {n}}} = L _ {2} (\mathbb {R});\tag{1.4}
$$

$$
\cap_ {n} V _ {n} = \{0 \}.
$$

Here we call $\phi$ the generator of the MRA. The major tasks of Lecture 1 are to investigate which conditions $\phi$ must satisfy in order for the corresponding sequence of subspaces $\{ V _ { n } \} _ { n \in \mathbb { Z } }$ to form an MRA, and to study the approximation properties of an MRA. 

To make (1.2) hold, the generator $\phi \in { \cal L } _ { 2 } ( \mathbb { R } )$ must be in $V _ { 1 }$ . Once $\phi \in V _ { 1 }$ the shifts of $\phi$ are in $V _ { 1 }$ as well since $V _ { 1 }$ is <sup>1</sup> -shift invariant. Therefore, to have $V _ { 0 } \subset V _ { 1 }$ , it is natural to require $\phi$ to be refinable. A function $\phi \in L _ { 2 } ( \mathbb { R } )$ is said to be refinable if 

$$
\phi (x) = 2 \sum_ {k \in \mathbb {Z}} h _ {0} [ k ] \phi (2 x - k)\tag{1.5}
$$

for some $h _ { 0 } \in \ell _ { 2 } ( \mathbb { Z } )$ . The sequence $h _ { 0 }$ is called the refinement mask of $\phi .$ . In Fourier domain, the definition of refinability of $\phi$ can be rewritten as 

$$
\widehat {\phi} (2 \cdot) = \widehat {h} _ {0} \widehat {\phi}.\tag{1.6}
$$

Here $\widehat { \phi }$ denotes the Fourier transform of $\phi ,$ , and $\widehat { h } _ { 0 }$ denotes the Fourier series of sequence $h _ { 0 }$ . Recall that the Fourier transform of a function $f \in L _ { 1 } ( \mathbb { R } )$ is defined by 

$$
\widehat {f} (\xi) := \int_ {\mathbb {R}} f (t) e ^ {- i \xi t} \mathrm{d} t, \qquad \xi \in \mathbb {R},
$$

which can be extended to more general function spaces $\begin{array} { r l } { ( \mathrm { e . g . } } & { { } L _ { 2 } ( \mathbb { R } ) } \end{array}$ or space of tempered distributions) in a natural manner. The Fourier series of a sequence $h _ { 0 } \in \ell _ { 2 } ( \mathbb { Z } )$ is defined as 

$$
\widehat {h} _ {0} (\xi) := \sum_ {j \in \mathbb {Z}} h _ {0} [ j ] e ^ {- i j \xi}, \qquad \xi \in \mathbb {R}.
$$

It follows from [69, Theorem 2.14] (also see [68]) that $\phi \in V _ { 1 }$ whenever (1.6) holds with $\widehat { h } _ { 0 }$ being a 2π periodic measurable function. Therefore, we generally do not need to require $h _ { 0 } \in \ell _ { 2 } ( \mathbb { Z } )$ . However, we still assume that $h _ { 0 } \in \ell _ { 2 } ( \mathbb { Z } )$ for convenience. Indeed, when the unitary extension principle is applied to construct tight wavelet frames, we normally assume that $\phi$ and its shifts form a Bessel sequence, i.e. there exist $C < \infty$ , such that for any sequence $b \in \ell _ { 2 } ( \mathbb { Z } )$ ， 

$$
\big \| \sum_ {k \in \mathbb {Z}} b [ k ] \phi (\cdot - k) \big \| _ {L _ {2} (\mathbb {R})} \leq C \| b \| _ {\ell_ {2} (\mathbb {Z})}.\tag{1.7}
$$

When $\phi$ and its shifts form a Bessel sequence, it is easy to prove that $\phi \in V _ { 1 }$ under the assumption that $\phi$ is refinable with its mask $h _ { 0 } \in \ell _ { 2 } ( \mathbb { Z } )$ . Finally, we remark that when $\phi \in L _ { 2 } ( \mathbb { R } )$ is compactly supported, φ automatically satisfies (1.7) (see Lemma 3.1 in Lecture 3). 

Examples of refinable functions include B-splines or more generally pseudosplines. Here, we give examples of refinable B-splines, and postpone detailed discussion on pseudo-splines until Lecture 3. A (centered) B-spline with order m, denoted as $B _ { m }$ , is defined in the Fourier domain by 

$$
\widehat {B} _ {m} (\xi) = e ^ {- i j \frac {\xi}{2}} \bigg (\frac {\sin (\xi / 2)}{\xi / 2} \bigg) ^ {m},\tag{1.8}
$$

where $j = 0$ when m is even, $j = 1$ when m is odd. The corresponding refinement mask of $B _ { m }$ is 

$$
\widehat {a} (\xi) = e ^ {- i j \frac {\xi}{2}} \cos^ {m} (\xi / 2).
$$

The B-spline $B _ { m }$ is a compactly supported function in $C ^ { m - 2 } ( \mathbb { R } )$ with m as the length of its support. For detailed discussions about B-splines, one may refer to [67]. 

It turns out that we only need to place very mild requirements on $\phi \in L _ { 2 } ( \mathbb { R } )$ for conditions (1.3) and (1.4) be satisfied. For example, any compactly supported refinable function $\phi \in L _ { 2 } ( \mathbb { R } )$ with $\widehat { \phi } ( 0 ) \neq 0$ will generate an MRA. In particular, any B-spline of (1.8) generates an MRA. Details will be discussed in the next two Sections. 

## 2. Density of the Union of $V _ { n }$

In the following discussions we denote $\phi _ { n } : = 2 ^ { n / 2 } \phi ( 2 ^ { n } \cdot )$ . Then $V _ { n } ,$ defined in (1.1), is the $2 ^ { - n }$ -shift-invariant subspace generated by $\phi _ { n }$ . We know from [69, Theorem 2.14] that a function s belongs to $V _ { n }$ if and only if there exists some $2 ^ { n + 1 , }$ π-period measurable function τ such that 

$$
\widehat {\boldsymbol {s}} = \tau \widehat {\phi_ {n}},\tag{1.9}
$$

and $\tau \widehat { \phi _ { n } } \in L _ { 2 } ( \mathbb { R } )$ 

Before we give a complete characterization of the density property (1.3) , we first recall two classical results of [163]. 

Proposition 1.1. ([163, Theorem 9.5]) For any function $f \in L _ { 2 } ( \mathbb { R } )$ and every $t \in \mathbb { R }$ , let $f _ { t }$ be the translate of f defined by 

$$
f _ {t} (x) = f (x - t) \quad x \in \mathbb {R}.
$$

Then the mapping 

$$
t \mapsto f _ {t}
$$

is a uniformly continuous mapping of R into $L _ { 2 } ( \mathbb { R } )$ 

Proposition 1.2. ([163, Theorem 9.17] or [181] page 100) Let X be a closed translation-invariant subspace of $L _ { 2 } ( \mathbb { R } )$ with its Fourier transforms defined as 

$$
\widehat {X} := \{\hat {f}: f \in X \}.
$$

Then we have $\widehat { X } = L _ { 2 } ( \Omega )$ for some measurable set $\Omega \in \mathbb { R }$ . Let $X _ { 1 }$ and $X _ { 2 }$ are two closed translation-invariant subspaces of $L _ { 2 } ( \mathbb { R } )$ with $\widehat { X _ { 1 } } = L _ { 2 } ( \Omega _ { 1 } )$ and $\widehat { X _ { 2 } } =$ $L _ { 2 } ( \Omega _ { 2 } )$ . Then $X _ { 1 } = X _ { 2 }$ if and only $i f \Omega _ { 1 } = \Omega _ { 2 }$ modulo a null-set. 

Remark 1.1. In particular, when one takes the $\Omega _ { 2 }$ in Proposition 1.2 to be $\mathbb { R } ,$ then we have that $\widehat { X _ { 1 } } = L _ { 2 } ( \Omega _ { 1 } )$ and ${ \widehat { X _ { 2 } } } = L _ { 2 } ( \mathbb { R } )$ . Proposition 1.2 tells us that $X _ { 1 } = X _ { 2 }$ if and only if $\Omega _ { 1 } = \mathbb { R }$ modulo a null-set, where we note that $X _ { 2 } = L _ { 2 } ( \mathbb { R } )$ 

## Now, we begin with the following lemma of [68]

Lemma 1.1. Let $\{ V _ { n } \} _ { n \in \mathbb { Z } }$ be a nested sequence, i.e. (1.2) is satisfied. Then $\overline { { \cup _ { n } V _ { n } } }$ is a closed translation-invariant subspace of $L _ { 2 } ( \mathbb { R } )$ 

Proof. Let $X : = \cup V _ { n }$ . Then $\overline { { X } }$ is certainly closed. We first show that if $f \in X$ , and then for any $t _ { 0 } \in \mathbb { R } , \ f _ { t _ { 0 } } \ \in \overline { { X } }$ We take $f \in X$ . Since $V _ { n }$ is a nested sequence, i.e. $\begin{array} { l } { { V _ { n } ~ \subset ~ { V _ { n + 1 } } } } \end{array}$ , then for n suficiently large we have $f \ \in \ V _ { n }$ $( \mathrm { i . e . } \quad \exists K > 0 ,$ s.t. for all $n \ > \ K , \ f \ \in \ V _ { n } )$ Since $V _ { n }$ is $2 ^ { - n }$ -shift-invariant, $f _ { t } = f ( \cdot + t )$ is in X for any $t = 2 ^ { - n } k , n , k \in \mathbb { Z }$ , which means that $f _ { t }$ is in X for all dyadic $t = 2 ^ { - n } k , \ k , n \in \mathbb { Z }$ . Proposition 1.1 tells us that translation is a continuous operation in $L _ { 2 } ( \mathbb { R } )$ , i.e. for any $\varepsilon > 0 , \exists \delta > 0$ and $| s - t | < \delta ,$ , such that $\| f _ { s } - f _ { t } \| _ { L _ { 2 } ( \mathbb { R } ) } < \varepsilon$ . It is also well known that the dyadic set $A : = \{ 2 ^ { k } j \} _ { k , n \in \mathbb { Z } }$ is dense in R, which means for any $t _ { 0 } \in \mathbb { R }$ we can choose $t \in A \ \mathrm { s . t }$ $| t - t _ { 0 } | < \delta$ for any given $\delta > 0$ . Then by the continuity of translation of $L _ { 2 }$ functions, for any $t _ { 0 } \in \mathbb { R }$ we can always find $t \in A$ such that for any $\varepsilon > 0 , \| f _ { t } - f _ { t _ { 0 } } \| _ { L _ { 2 } ( \mathbb { R } ) } < \varepsilon$ . Since $\overline { { X } }$ is closed, we have $f _ { t _ { 0 } } \in \overline { { X } }$ 

Now, we show that for $g \in { \overline { { X } } }$ and $t _ { 0 } \in \mathbb { R } , g _ { t _ { 0 } } \in \overline { { X } }$ . We take $g \in { \overline { { X } } }$ . Then there always exists a function $f \in X , \mathrm { s . t . } \parallel g - f \parallel _ { L _ { 2 } ( \mathbb { R } ) } < \varepsilon$ , ∀ε > 0. We take $t _ { 0 } \in \mathbb { R }$ , and then the equality $\| g _ { t _ { 0 } } - f _ { t _ { 0 } } \| _ { L _ { 2 } ( \mathbb { R } ) } = \| g - f \| _ { L _ { 2 } ( \mathbb { R } ) }$ and the closeness of $\overline { { X } }$ show that $g _ { t _ { 0 } } \in \overline { { X } }$ , since we have already proved that $f _ { t _ { 0 } } \in \overline { { X } }$ . This concludes that ${ \overline { { X } } } = { \overline { { \cup V _ { n } } } }$ is a closed translation-invariant subspace of $L _ { 2 } ( \mathbb { R } )$ 

Lemma 1.1 gives us the translation-invariance of $\overline { { \cup V _ { n } } }$ which allows us to use Proposition 1.2 to prove the important theorem below which is first proven in [68] (also see [115]). 

Theorem 1.1. Let $\{ V _ { n } \} _ { n \in \mathbb { Z } }$ be a nested sequence, i.e. (1.2) is satisfied. Then $\overline { { \cup _ { n } V _ { n } } } = L _ { 2 } ( \mathbb { R } )$ if and only if $\Omega _ { 0 } : = \cup _ { n } s u p p \ \widehat { \phi _ { n } } = \mathbb { R }$ (modulo a null-set). 

Proof. Let $X : = \overline { { \cup V _ { n } } }$ . From Proposition 1.2 we have $\widehat { X } = L _ { 2 } ( \Omega )$ for some measurable set $\Omega \subset \mathbb { R }$ . Moreover, Proposition 1.2 tells us that $X = L _ { 2 } ( \mathbb { R } )$ if and only if $\Omega = \mathbb { R }$ modulo a null-set. We verify that $\Omega = \Omega _ { 0 }$ modulo a null-set which will complete the proof. Since each $\phi _ { n }$ is in $X ,$ , we must have supp $\hat { \phi _ { n } } \subset \Omega$ modulo a null-set, and so, $\Omega _ { 0 } \subset \Omega$ modulo a null-set. Now we suppose that $\Omega \setminus \Omega _ { 0 }$ contains a set $\Omega _ { 1 }$ of positive measure. From (1.9), we have supp ${ \hat { s } } \subset \operatorname* { s u p p } { \widehat { \phi _ { n } } }$ for any $s \in V _ { n }$ Since $\phi _ { n }$ vanishes on $\Omega _ { 1 }$ for all $n \in \mathbb { Z }$ , so does the Fourier transform of each element in $V _ { n } , n \in \mathbb { Z }$ . Hence, each element in $\cup V _ { n }$ has Fourier transform which vanishes on $\Omega _ { 1 }$ . Lastly, if we show that by taking the closure, each element in X has Fourier transform which vanishes on $\Omega _ { 1 }$ , then it contradicts with the fact that $\widehat { X } = L _ { 2 } ( \Omega )$ contains $L _ { 2 } ( \Omega _ { 1 } )$ . Thus we will have $\Omega \setminus \Omega _ { 0 }$ is of measure zero, which then implies that $\Omega = \Omega _ { 0 }$ modulo a null-set. 

Now take $f \in X$ , there exists $g \in \cup V _ { n }$ with $\hat { g }$ vanishes on $\Omega _ { 1 }$ , such that for any $\varepsilon > 0$ 

$$
\left\| f - g \right\| _ {L _ {2} (\mathbb {R})} <   \varepsilon .
$$

Applying Parseval’s identity we have 

$$
\| f - g \| _ {L _ {2} (\mathbb {R})} = \frac {1}{\sqrt {2 \pi}} \| \hat {f} - \hat {g} \| _ {L _ {2} (\mathbb {R})}.
$$

By the fact that $\hat { g }$ vanishes on $\Omega _ { 1 }$ we have 

$$
\begin{array}{c} \frac {1}{\sqrt {2 \pi}} \| \hat {f} - \hat {g} \| _ {L _ {2} (\mathbb {R})} \geq \frac {1}{\sqrt {2 \pi}} \| \hat {f} - \hat {g} \| _ {L _ {2} (\Omega_ {1})} \geq \frac {1}{\sqrt {2 \pi}} \| \hat {f} \| _ {L _ {2} (\Omega_ {1})} - \frac {1}{\sqrt {2 \pi}} \| \hat {g} \| _ {L _ {2} (\Omega_ {1})} \\ = \frac {1}{\sqrt {2 \pi}} \| \hat {f} \| _ {L _ {2} (\Omega_ {1})}. \end{array}
$$

Thus we have 

$$
\frac {1}{\sqrt {2 \pi}} \| \hat {f} \| _ {L _ {2} (\Omega_ {1})} <   \varepsilon .
$$

Therefore $\hat { f }$ also vanishes on $\Omega _ { 1 }$ and this concludes the proof of this theorem. 

Theorem 1.2. [115] Let $\phi \in L _ { 2 } ( \mathbb { R } )$ and $V _ { n }$ defined $b y$ (1.1). Assume that $\phi$ is refinable. Then, 

$$
\overline {{\cup_ {n} V _ {n}}} = L _ {2} (\mathbb {R})
$$

if and only $i f$ 

$$
\cap_ {n} 2 ^ {n} Z (\hat {\phi})
$$

is a set of measure zero, where $Z ( \hat { \phi } ) : = \{ \xi \in \mathbb { R } : \hat { \phi } ( \xi ) = 0 \}$ 

Proof. We first note that (1.2) holds because $\phi$ is refinable. Indeed, from the refinement equation (1.6), we have 

$$
\widehat {\phi} (2 ^ {- n + 1} \xi) = \widehat {h} _ {0} (2 ^ {- n} \xi) \widehat {\phi} (2 ^ {- n} \xi).
$$

Since $\widehat { h } _ { 0 }$ is 2π-periodic, $\widehat { h } _ { 0 } ( 2 ^ { - n } \cdot )$ is $2 ^ { n + 1 }$ π-periodic and hence $\phi ( 2 ^ { n - 1 } \cdot ) \ \in \ V _ { n }$ by (1.9). Since $V _ { n }$ $2 ^ { - n }$ -shift-invariant which is obviously also $2 ^ { - n + 1 }$ -shift-invariant, we have $\{ \phi ( 2 ^ { n - 1 } \cdot - k ) : k \in \mathbb { Z } \} \subset V _ { n }$ which implies $V _ { n - 1 } \subset V _ { n }$ 

From Theorem 1.1 we know that $\overline { { \cup V _ { n } } } = L _ { 2 } ( \mathbb { R } )$ if and only if $\Omega _ { 0 } : = \cup$ supp $\phi _ { n } =$ R modulo a null-set. We will show that $\Omega _ { 0 } = \mathbb { R }$ modulo a null-set if and only if $m ( \cap 2 ^ { n } Z ( { \hat { \phi } } ) ) = 0$ which will complete the proof. The fact that ∪ supp $\widehat { \phi _ { n } } = \mathbb { R }$ modulo a null-set is equivalent to 

$$
m \left(\left(\cup \operatorname{supp} \widehat {\phi_ {n}}\right) ^ {c}\right) = 0.
$$

Moreover we have 

$$
\left(\cup \operatorname{supp} \widehat {\phi_ {n}}\right) ^ {c} = \cap (\operatorname{supp} \widehat {\phi_ {n}}) ^ {c} = \cap Z (\widehat {\phi_ {n}}),
$$

modulo a null-set. Last, we show that ${ \cal Z } ( \widehat { \phi _ { n } } ) = 2 ^ { n } { \cal Z } ( \widehat { \phi } )$ . We first note that $\widehat { \phi _ { n } } = 0$ is equivalent to ${ \hat { \phi } } ( 2 ^ { - n } \cdot ) = 0$ . Now, we take any $\xi _ { 0 } \in Z ( \widehat { \phi _ { n } } ) = \{ \xi \in \mathbb { R } : \hat { \phi } ( 2 ^ { - n } \xi ) = 0 \}$ We have $2 ^ { - n } \xi _ { 0 } \in Z ( \hat { \phi } )$ ) and that means $\xi _ { 0 } \in 2 ^ { n } Z ( \hat { \phi } )$ . We take $\xi _ { 0 } \in 2 ^ { n } Z ( \hat { \phi } )$ which means that $\xi _ { 0 } = 2 ^ { n } \xi _ { 1 }$ , where $\hat { \phi } ( \xi _ { 1 } ) = 0$ . Since $\hat { \phi } ( 2 ^ { - n } \xi _ { 0 } ) = \hat { \phi } ( \xi _ { 1 } ) = 0$ , we obtain $\xi _ { 0 } \in Z ( \widehat { \phi _ { n } } )$ . This shows that ${ \cal Z } ( \widehat { \phi _ { n } } ) = 2 ^ { n } { \cal Z } ( \widehat { \phi } )$ ). Now we conclude that 

$$
m \Big (\big (\cup \operatorname{supp} \widehat {\phi_ {n}} \big) ^ {c} \Big) = m \Big (\cap 2 ^ {n} Z (\widehat {\phi}) \Big).
$$

Therefore, ∪ supp $\widehat { \phi _ { n } } = \mathbb { R }$ modulo a null-set if and only if $m \Big ( \cap 2 ^ { n } Z ( \widehat { \phi } ) \Big ) = 0$ . Thisconcludes the proof of the theorem. 厂

Corollary 1.1. Let $\phi \in L _ { 2 } ( \mathbb { R } )$ and $V _ { n }$ defined by (1.1). Assume that $\{ V _ { n } \} _ { n }$ is nested. $I f ~ { \hat { \phi } }$ is non-zero almost everywhere $( a . e . )$ in some neighborhood of the origin, we have ${ \overline { { \cup _ { n } V _ { n } } } } = L _ { 2 } ( \mathbb { R } )$ . In particular, assume that $\hat { \phi }$ is continuous at the origin and $\hat { \phi } ( 0 ) \neq 0$ . Then we have $\overline { { \cup _ { n } V _ { n } } } = L _ { 2 } ( \mathbb { R } )$ 

Proof. Since $\widehat { \phi _ { n } } = 2 ^ { - n / 2 } \hat { \phi } ( 2 ^ { - n } . )$ , $\hat { \phi }$ being non-zero a.e. on Ω implies $\widehat { \phi _ { n } }$ is non-zero on $2 ^ { n } \Omega$  . Now if Ω is some neighborhood of the origin, we obtain that ∪ supp $\widehat { \phi _ { n } } = \mathbb { R }$ , since $\cup 2 ^ { n } \Omega = \mathbb { R }$ . By Theorem 1.1 we have $\overline { { \cup V _ { n } } } = L _ { 2 } ( \mathbb { R } )$ 7 

Corollary 1.2. Let $\phi \in L _ { 2 } ( \mathbb { R } )$ with $\widehat { \phi } ( 0 ) = 1$ be a compactly supported refinable function, and $V _ { n }$ is defined as in (1.1). Then ${ \overline { { \cup _ { n } V _ { n } } } } = L _ { 2 } ( \mathbb { R } )$ 

Proof. Since $\phi$ is compactly supported, the set of zero points of $\hat { \phi } .$ , i.e. $Z ( \hat { \phi } )$ is of measure zero. Then this corollary follows directly from Theorem 1.2. 

## 3. Triviality of the Intersections of $V _ { n }$

In this section, we study which requirements placed on $\phi$ guarantee that (1.4) is satisfied. Let us first introduce some basic concepts and notations that are used in the last section of this lecture as well. 

We define the bracket product of two functions $f , g \in L _ { 2 } ( \mathbb { R } )$ , denoted as $[ f , g ]$ as follows: 

$$
[ f, g ] (\xi) := \sum_ {k \in \mathbb {Z}} f (\xi + 2 \pi k) \overline {{g (\xi + 2 \pi k)}}.
$$

It is easy to verify that if $f , g \in L _ { 2 } ( \mathbb { R } )$ , then $[ f , g ] \in L _ { 1 } ( [ - \pi , \pi ] )$ , and the Cauchy-Schwartz inequality gives that 

$$
\left| [ f, g ] \right| ^ {2} \leq [ f, f ] [ g, g ],\tag{1.10}
$$

where the right hand side is finite a.e. (see e.g. [114]. Inequality (1.10) shows that bracket products for functions in $L _ { 2 } ( \mathbb { R } )$ are well defined. 

Using the notation of bracket products, one can easily show that (see Lemma 3.1 in Lecture 3) the shifts of $\phi$ forming an orthonormal set, i.e. 

$$
\langle \phi , \phi (\cdot - k) \rangle = \delta_ {k, 0},
$$

with $\delta _ { k , 0 } = 0 \mathrm { i f } \ k \neq 0$ and $\delta _ { 0 , 0 } = 1$ , is equivalent to 

$$
[ \widehat {\phi}, \widehat {\phi} ] = 1 \quad \mathrm{a.e.}
$$

We need the following lemma to prove the main theorem of this section. 

Lemma 1.2. For a given $\phi \in L _ { 2 } ( \mathbb { R } )$ , one can always find $\psi \in L _ { 2 } ( \mathbb { R } )$ such that $V ( \phi ) \subset V ( \psi )$ and the shifts of ψ are orthonormal. 

Proof. For given $\phi \in L _ { 2 } ( \mathbb { R } )$ , we define ψ as follows: 

$$
\hat {\psi} (\xi) := \left\{ \begin{array}{l l} \frac {\hat {\phi} (\xi)}{\sqrt {[ \hat {\phi} , \hat {\phi} ] (\xi)}}, & \text {if [ \hat{\phi}, \hat{\phi} ](\xi) > 0 ;} \\ 1, & \text {if [ \hat{\phi}, \hat{\phi} ](\xi) = 0 and \xi\in[-\pi,\pi);} \\ 0, & \text {elsewhere.} \end{array} \right.
$$

Since $[ \hat { \phi } , \hat { \phi } ] \in L _ { 1 } ( \mathbb { R } )$ , it is finite almost everywhere, and thus 

$$
[ \hat {\psi}, \hat {\psi} ] (\xi) = 1 \quad \text {   for   almost   all   } \xi \in \mathbb {R}.
$$

Hence $\psi \in L _ { 2 } ( \mathbb { R } )$ and the shifts of $\psi$ are orthonormal. Moreover, 

$$
\hat {\phi} = \sqrt {[ \hat {\phi} , \hat {\phi} ]} \hat {\psi}.
$$

Then (1.9) implies that $\phi \in V ( \psi )$ , and hence $V ( \phi ) \subset V ( \psi )$ 

The following result was first proven in [68] and the proof given here is from [115]). 

Theorem 1.3. Given any $\phi \in L _ { 2 } ( \mathbb { R } )$ , we have $\cap _ { n } V _ { n } = \{ 0 \}$ 

Proof. By lemma 1.2, it sufices to prove the theorem for the case when $\{ \phi ( \cdot - k ) , k \in \mathbb { Z } \}$ is an orthonormal set. We note that whenever $\{ \phi ( \cdot - k ) , k \in \mathbb { Z } \}$ forms an orthonormal set, so does $\{ 2 ^ { n / 2 } \phi ( 2 ^ { n } \cdot - k ) , k \in \mathbb { Z } \}$ . Here we denote $\phi _ { n , k } : =$ $2 ^ { n / 2 } \phi ( 2 ^ { n } \cdot - k )$ 

Let $P _ { n }$ be the orthogonal projector from $L _ { 2 } ( \mathbb { R } )$ onto $V _ { n }$ . The theorem will be established if we can prove 

$$
P _ {n} f \rightarrow 0 \quad \mathrm{as} \quad n \rightarrow - \infty\tag{1.11}
$$

for every $f \in L _ { 2 } ( \mathbb { R } )$ . Note that compactly supported functions are dense in $L _ { 2 } ( \mathbb { R } )$ which means there always exists $\tilde { f } \in L _ { 2 } ( \mathbb { R } )$ which is compactly supported and 

$$
\left\| f - \tilde {f} \right\| _ {L _ {2} (\mathbb {R})} <   \varepsilon .
$$

Hence suppose we have $P _ { n } \tilde { f }  0 , \quad n  - \infty$ , then 

$$
\begin{array}{r c l} \| P _ {n} f \| _ {L _ {2} (\mathbb {R})} - \| P _ {n} \tilde {f} \| _ {L _ {2} (\mathbb {R})} & \leq & \| P _ {n} f - P _ {n} \tilde {f} \| _ {L _ {2} (\mathbb {R})} \\ & = & \| P _ {n} (f - \tilde {f}) \| _ {L _ {2} (\mathbb {R})} \\ & \leq & \| f - \tilde {f} \| _ {L _ {2} (\mathbb {R})} \leq \varepsilon \end{array}
$$

which means that $P _ { n } \tilde { f } \to 0$ implies $P _ { n } f \to 0 .$ . So it is suficient to show that (1.11) is true for any compactly supported function $f \in L _ { 2 } ( \mathbb { R } )$ . Let $f$ be such a function. Then $P _ { n } f$ can be expressed as 

$$
P _ {n} f = \sum_ {k \in \mathbb {Z}} c _ {n} [ k ] \phi_ {n, k},
$$

where 

$$
c _ {n} [ k ] = \int_ {\mathbb {R}} f (x) \overline {{{{\phi_ {n , k} (x)}}}} d x
$$

are sequences in $\ell _ { 2 } ( \mathbb { Z } )$ . Since the shifts of $\phi$ are orthonormal, we deduce from the equation of $P _ { n } f$ that 

$$
\begin{array}{r c l} \| P _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} & = & \| c _ {n} \| _ {\ell_ {2} (\mathbb {Z})} ^ {2} \\ & = & \sum_ {k \in \mathbb {Z}} | \int_ {\mathbb {R}} f (x) \overline {{\phi_ {n , k} (x)}} d x | ^ {2} \\ & \leq & \sum_ {k \in \mathbb {Z}} \Bigl (\int_ {\mathbb {R}} | f (x) \phi_ {n, k} (x) | d x \Bigr) ^ {2} \\ & = & \sum_ {k \in \mathbb {Z}} \Bigl (\int_ {\mathbb {R}} | f (x) 2 ^ {n / 2} \phi (2 ^ {n} x - k) | d x \Bigr) ^ {2}. \end{array}
$$

The first identity follows by Plancherel formula for the orthonormal basis $\{ \phi _ { n , k } \} _ { k \in \mathbb { Z } }$ If $f$ is supported in the interval $[ - R , R ]$ , then by the Cauchy-Schwartz inequality we have, 

$$
\| P _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \sum_ {k \in \mathbb {Z}} \int_ {\{2 ^ {n} [ - R, R ] - k \}} | \phi (x) | ^ {2} d x.
$$

Now if $n < 0$ and $| n |$ is suficiently large, we have that 

$$
\left\{2 ^ {n} [ - R, R ] - k _ {1} \right\} \cap \left\{2 ^ {n} [ - R, R ] - k _ {2} \right\} = \emptyset , \quad k _ {1} \neq k _ {2}.
$$

Therefore, 

$$
\| P _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \int_ {E _ {n}} | \phi (x) | ^ {2} d x = \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \int_ {\mathbb {R}} \chi_ {E _ {n}} | \phi (x) | ^ {2} d x,\tag{1.12}
$$

where 

$$
E _ {n} = \cup_ {k \in \mathbb {Z}} (2 ^ {n} [ - R, R ] - k).
$$

Since when $n  ~ - \infty , \chi _ { E _ { n } } | \phi ( x ) | ^ { 2 }  0$ for almost every $x \in \mathbb { R }$ , and $\chi _ { E _ { n } } | \phi ( x ) | ^ { 2 } \leq$ $| \phi ( x ) | ^ { 2 } \in L _ { 1 } ( \mathbb { R } )$ , then by the dominated convergence theorem we have 

$$
\lim _ {n \to - \infty} \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \int_ {\mathbb {R}} \chi_ {E _ {n}} | \phi (x) | ^ {2} d x = \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \int_ {\mathbb {R}} \lim _ {n \to - \infty} \chi_ {E _ {n}} | \phi (x) | ^ {2} d x = 0.
$$

Thus lim $_ { n  - \infty } \| P _ { n } f \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 } = 0$ 

Now we summarize the results we get in this section and the previous one in the following theorem. 

Theorem 1.4. Let $\phi \in L _ { 2 } ( \mathbb { R } )$ , and $V _ { n }$ defined as in (1.1). Then, 

(1) $\cap _ { n } V _ { n } = \{ 0 \} { \mathrm { ; } }$ ; 

(2) Assume, in addition, that $\phi$ is refinable. Then, 

$$
\overline {{\cup_ {n} V _ {n}}} = L _ {2} (\mathbb {R})
$$

$i f$ and only if 

$$
\cap_ {n} 2 ^ {n} Z (\hat {\phi})
$$

is a set of measure zero, where $Z ( \hat { \phi } ) : = \{ \xi \in \mathbb { R } : \hat { \phi } ( \xi ) = 0 \}$ 

In particular, the sequence of subspaces $\{ V _ { n } \} _ { n \in \mathbb { Z } }$ generated by $\phi \in L _ { 2 } ( \mathbb { R } )$ forms an MRA if either of the following condition is satisfied: 

(1) φ is a compactly supported refinable function with $\widehat { \phi } ( 0 ) \neq 0$ ; 

(2) $\phi$ is refinable and $\overset { \cdot } { \phi }$ is continuous at 0 with $\widehat { \phi } ( 0 ) \neq 0$ 

## 4. Approximation

In order to obtain a function in $V _ { n }$ that provides a good approximation to a given function $f ,$ one needs an approximation scheme. One of the commonly used approximation schemes is the quasi-interpolation scheme. There are many quasi-interpolatory schemes that give good approximations. We start by defining the quasi-interpolatory scheme that is used in MRA-based tight wavelet frame approximation. 

For any function $f \in L _ { 2 } ( \mathbb { R } )$ , the dyadic dilation operator D is defined by $\mathcal { D } f ( x ) : = \sqrt { 2 } f ( 2 x )$ and the translation operator $T$ is defined by $T _ { a } f ( x ) : = f ( x - a )$ for $a \in \mathbb { R }$ . Given $j \in \mathbb Z$ , we have $T _ { a } \mathcal { D } ^ { j } = \mathcal { D } ^ { j } T _ { 2 ^ { j } a }$ . Define $\phi _ { n , k } : = D ^ { n } T _ { k } \phi$ 

For a given $\phi \in L _ { 2 } ( \mathbb { R } )$ that generates an MRA $\{ V _ { n } \} _ { n }$ , the quasi-interpolatory operator used here is defined as 

$$
\mathcal {P} _ {n}: f \mapsto \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {n, k} \rangle \phi_ {n, k},\tag{1.13}
$$

for an arbitrary $f \in L _ { 2 } ( \mathbb { R } )$ 

We first provide the following proposition which will become handy for our analysis. 

Proposition 1.3. Let $f , \phi \in L _ { 2 } ( \mathbb { R } )$ . Assume that $[ \widehat { \phi } , \widehat { \phi } ]$ is essentially bounded. Then 

(1) The shifts of φ form a Bessel system, i.e. (1.7) is satisfied. Furthermore, the Bessel bound, C in (1.7), is equal to $\| [ \widehat \phi , \widehat \phi ] \| _ { L _ { \infty } ( [ - \pi , \pi ] ) } ^ { \frac { 1 } { 2 } } .$ 

(2) The 2π-periodic function $[ \widehat { f } , \widehat { \phi } ] \in L _ { 1 } ( [ - \pi , \pi ] )$ is the Fourier series of the sequence $\{ \langle f , \phi ( \cdot - k ) \rangle : k \in \mathbb { Z } \}$ . As a consequence, 

$$
\sum_ {k \in \mathbb {Z}} \langle f, \phi (\cdot - k) \rangle e ^ {- i k \xi} = [ \widehat {f}, \widehat {\phi} ] (\xi)
$$

almost everywhere. 

(3) The operator $\mathcal { P } _ { n }$ is bounded with bound $\| [ \widehat { \phi } , \widehat { \phi } ] \| _ { L _ { \infty } ( [ - \pi , \pi ] ) }$ . Furthermore, the Fourier transform of $\mathcal { P } _ { n } f$ satisfies 

$$
\widehat {\mathcal {P} _ {n} f} = [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \cdot) \widehat {\phi} (2 ^ {- n} \cdot)\tag{1.14}
$$

Proof. For (1), we denote $\widetilde { \phi } : = [ \widehat { \phi } , \widehat { \phi } ] ^ { \frac { 1 } { 2 } }$ . The Plancherel theorem says that for all finite sequences $b \in \ell _ { 2 } ( \mathbb { Z } )$ we have 

$$
2 \pi \left\| \sum_ {k \in \mathbb {Z}} b [ k ] \phi (\cdot - k) \right\| _ {L _ {2} (\mathbb {R})} ^ {2} = \| \widehat {b} \widehat {\phi} \| _ {L _ {2} (\mathbb {R})} ^ {2}.
$$

$\mathrm { B y }$ breaking the real line into $\mathbb { R } = \cup _ { k \in \mathbb { Z } } \{ [ - \pi , \pi ] + 2 k \pi \}$ and noticing that $\widehat { b }$ is 2π-periodic, we have 

$$
\begin{array}{l} \| \widehat {b} \widehat {\phi} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \int_ {\mathbb {R}} | \widehat {b} (\xi) | ^ {2} | \widehat {\phi} (\xi) | ^ {2} \mathrm{d} \xi \\ \qquad = \sum_ {k \in \mathbb {Z}} \int_ {[ - \pi , \pi ] + 2 k \pi} | \widehat {b} (\xi) | ^ {2} | \widehat {\phi} (\xi) | ^ {2} \mathrm{d} \xi \\ \qquad = \sum_ {k \in \mathbb {Z}} \int_ {- \pi} ^ {\pi} | \widehat {b} (\xi) | ^ {2} | \widehat {\phi} (\xi + 2 k \pi) | ^ {2} \mathrm{d} \xi \\ \qquad = \| \widehat {b} \widetilde {\phi} \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2}. \end{array}
$$

Therefore, we obtain the following identity 

$$
2 \pi \left\| \sum_ {k \in \mathbb {Z}} b [ k ] \phi (\cdot - k) \right\| _ {L _ {2} (\mathbb {R})} ^ {2} = \| \widehat {b} \widetilde {\phi} \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2}.\tag{1.15}
$$

Suppose $\tilde { \phi }$ is essentially bounded. Then (1.15) is satisfied for all $b \in \ell _ { 2 } ( \mathbb { Z } )$ . Therefore, 

$$
\| \widehat {b} \tilde {\phi} \| _ {L _ {2} ([ - \pi , \pi ])} \leq C \| \widehat {b} \| _ {L _ {2} ([ - \pi , \pi ])},
$$

with $C = \| \tilde { \phi } \| _ { L _ { \infty } ( [ - \pi , \pi ] ) }$ and thus (1.7) follows. 

For (2), using Fubini’s theorem and the fact that $e ^ { i k \xi }$ is 2π-periodic, we have, 

$$
\begin{array}{l} \int_ {- \pi} ^ {\pi} [ \widehat {f}, \widehat {\phi} ] (\xi) e ^ {i k \xi} \mathrm{d} \xi = \int_ {- \pi} ^ {\pi} \sum_ {k \in \mathbb {Z}} \widehat {f} (\xi + 2 k \pi) \overline {{\widehat {\phi} (\xi + 2 k \pi)}} e ^ {i k \xi} \mathrm{d} \xi \\ \qquad = \sum_ {k \in \mathbb {Z}} \int_ {- \pi} ^ {\pi} \widehat {f} (\xi + 2 k \pi) \overline {{\widehat {\phi} (\xi + 2 k \pi)}} e ^ {i k \xi} \mathrm{d} \xi \\ \qquad = \sum_ {k \in \mathbb {Z}} \int_ {[ - \pi , \pi ] + 2 k \pi} \widehat {f} (\xi) \overline {{\widehat {\phi} (\xi)}} e ^ {i k \xi} \mathrm{d} \xi \\ \qquad = \int_ {\mathbb {R}} \widehat {f} (\xi) \overline {{\widehat {\phi} (\xi)}} e ^ {i k \xi} \mathrm{d} \xi , \end{array}
$$

for any $k \in \mathbb { Z }$ . Now by the Plancherel theorem, we have 

$$
\int_ {\mathbb {R}} \widehat {f} (\xi) \overline {{\widehat {\phi} (\xi)}} e ^ {i k \xi} \mathrm{d} \xi = \int_ {\mathbb {R}} \widehat {f} (\xi) \overline {{\widehat {\phi} (\xi) e ^ {- i k \xi}}} \mathrm{d} \xi = 2 \pi \int_ {\mathbb {R}} f (x) \overline {{\phi (x - k)}} \mathrm{d} x.
$$

Therefore, we have 

$$
\frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} [ \widehat {f}, \widehat {\phi} ] (\xi) e ^ {i k \xi} \mathrm{d} \xi = \langle f, \phi (\cdot - k) \rangle .
$$

This means that $[ { \widehat { f } } , { \widehat { \phi } } ] ( \xi )$ is the Fourier series of $\{ \langle f , \phi ( \cdot - k ) \rangle : k \in \mathbb { Z } \}$ 

 For (3), the boundedness of $\mathcal { P } _ { n }$ follows directly from the facts that $\| \mathcal { P } _ { n } \| = \| \mathcal { P } _ { 0 } \|$ for all $n \in \mathbb { Z }$ and the shifts of φ form a Bessel system. Now, we show the identity $( 1 . 1 4 )$ in part (3). Notice that $\mathcal { P } _ { n } = \mathcal { D } ^ { n } \mathcal { P } _ { 0 } \mathcal { D } ^ { - n }$ . Therefore, all we need to show is that 

$$
\widehat {\mathcal {P} _ {0} f} = [ \widehat {f}, \widehat {\phi} ] \widehat {\phi}.\tag{1.16}
$$

Indeed, we have 

$$
\begin{array}{l} \widehat {\mathcal {P} _ {0} f} (\xi) = \int_ {\mathbb {R}} \sum_ {k \in \mathbb {Z}} \langle f, \phi (\cdot - k) \rangle \phi (x - k) e ^ {- i \xi x} \mathrm{d} x \\ \qquad = \sum_ {k \in \mathbb {Z}} \langle f, \phi (\cdot - k) \rangle e ^ {- i k \xi} \int_ {\mathbb {R}} \phi (x - k) e ^ {- i \xi (x - k)} \mathrm{d} x \\ \qquad = \sum_ {k \in \mathbb {Z}} \langle f, \phi (\cdot - k) \rangle e ^ {- i k \xi} \widehat {\phi} (\xi) \\ \qquad = [ \widehat {f}, \widehat {\phi} ] (\xi) \widehat {\phi} (\xi), \end{array}
$$

where the switching of orders of summation and integration is justified by the fact that the summation converges in the sense of $L _ { 2 } ( \mathbb { R } )$ and Fourier transform is continuous on $L _ { 2 } ( \mathbb { R } )$ . 

We say that $\mathcal { P } _ { n }$ provides approximation order m if, for all $f \in \mathcal { W } _ { 2 } ^ { m } ( \mathbb { R } )$ 

$$
\left\| f - \mathcal {P} _ {n} f \right\| _ {L _ {2} (\mathbb {R})} = O (2 ^ {- n m}).
$$

Here $\mathcal { W } _ { 2 } ^ { m } ( \mathbb { R } ) , m \in \mathbb { R } _ { + }$ , are Sobolev spaces defined by 

$$
\mathcal {W} _ {2} ^ {m} (\mathbb {R}) := \{f \in L _ {2} (\mathbb {R}): \| f \| _ {\mathcal {W} _ {2} ^ {m} (\mathbb {R})} := \sqrt {2 \pi} \| (1 + | \cdot |) ^ {m} \widehat {f} \| _ {L _ {2} (\mathbb {R})} <   \infty \}.
$$

The rest of this section is devoted to the analysis of approximation orders of $\mathcal { P } _ { n }$ As one will see, the approximation order of $\mathcal { P } _ { n }$ is closely related to the property of $1 - | \widehat \phi | ^ { 2 }$ and $[ \stackrel {  } { \phi } , \stackrel {  } { \phi } ] - | \stackrel { \ r  } { \phi } | ^ { 2 }$ at the origin. 

   In the following discussions, we denote $| f | = O ( | \cdot | ^ { m } )$ whenever li $\begin{array} { r } { \mathrm { { 1 } } _ { x  0 } \frac { | f | ( x ) } { | x | ^ { m } } \leq } \end{array}$ C with $C > 0$ . We say that a function has zero of order m if $f ^ { ( j ) } ( 0 ) = \mathrm { { 0 } }$ for $j = 0 , 1 , \ldots , m - 1$ . It is clear that whenever $f \in C ^ { m }$ and it has zero of order $m _ { ; }$ then $| f | = O ( | \cdot | ^ { m } )$ . For convenience of arguments, whenever we say that $f$ has zero of order $m ,$ we implicitly assume that $f \in C ^ { m }$ (although we only require the existence of $f ^ { ( m - 1 ) }$ in the original definition). 

The following theorem, whose proof follows similar ideas of [69], shows the approximation order of the operator $\mathcal { P } _ { n }$ depends on the behavior of the function $[ \hat { \phi } , \hat { \phi } ] - | \hat { \phi } | ^ { 2 }$ at the origin. 

Theorem 1.5. Let $\mathcal { P } _ { n }$ be defined by (1.13) for a given function $\phi \in L _ { 2 } ( \mathbb { R } )$ satisfying 

(1) $\lbrack \widehat { \phi } , \widehat { \phi } \rbrack$ is essentially bounded; 

(2) $[ \widehat { \phi } , \widehat { \phi } ] - | \widehat { \phi } | ^ { 2 } = { \cal O } ( | \cdot | ^ { 2 m } ) ;$ 

(3) $1 - | \widehat \phi | ^ { 2 } = { \cal O } ( | \cdot | ^ { 2 m _ { 0 } } )$ 

Then, $\mathcal { P } _ { n }$ provides approximation order $m _ { 1 } = \operatorname* { m i n } \{ m , 2 m _ { 0 } \}$ 

Proof. Part (3) of Proposition 1.3 gives us 

$$
\begin{array}{l} \widehat {\mathcal {P} _ {n} f} = [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \cdot) \widehat {\phi} (2 ^ {- n} \cdot) \\ = \sum_ {k \in \mathbb {Z}} \widehat {f} (\xi + 2 ^ {n + 1} k \pi) \overline {{\widehat {\phi} (2 ^ {- n} \xi + 2 k \pi)}} \widehat {\phi} (2 ^ {- n} \xi). \end{array}
$$

Then we have 

$$
\begin{array}{r l} & {\| \widehat {\mathcal {P} _ {n} f} - \widehat {f} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \int_ {\mathbb {R}} \left| [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \widehat {\phi} (2 ^ {- n} \xi) - \widehat {f} (\xi) \right| ^ {2} \mathrm{d} \xi} \\ & {\qquad = \int_ {\mathbb {R}} \left| [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \right| ^ {2} \left| \widehat {\phi} (2 ^ {- n} \xi) \right| ^ {2} \mathrm{d} \xi} \\ & {\qquad - \int_ {\mathbb {R}} [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \widehat {\phi} (2 ^ {- n} \xi) \overline {{\widehat {f} (\xi)}} \mathrm{d} \xi} \\ & {\qquad - \int_ {\mathbb {R}} \overline {{[ \widehat {f} (2 ^ {n} \cdot) , \widehat {\phi} ] (2 ^ {- n} \xi) \widehat {\phi} (2 ^ {- n} \xi)}} \widehat {f} (\xi) \mathrm{d} \xi + \| \widehat {f} \| _ {L _ {2} (\mathbb {R})} ^ {2}} \end{array}
$$

Since $\lbrack \widehat { f } ( 2 ^ { n } \cdot ) , \widehat { \phi } ] ( 2 ^ { - n } \xi )$ is $2 ^ { n + 1 }$ π-periodic, we have 

$$
\begin{array}{l} \int_ {\mathbb {R}} \Big | [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \Big | ^ {2} \Big | \widehat {\phi} (2 ^ {- n} \xi) \Big | ^ {2} \mathrm{d} \xi \\ = \sum_ {l \in \mathbb {Z}} \int_ {2 ^ {n} ([ - \pi , \pi ] + 2 l \pi)} \Big | [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \Big | ^ {2} \Big | \widehat {\phi} (2 ^ {- n} \xi) \Big | ^ {2} \mathrm{d} \xi \\ = \int_ {2 ^ {n} [ - \pi , \pi ]} \Big | [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \Big | ^ {2} [ \widehat {\phi}, \widehat {\phi} ] (2 ^ {- n} \xi) \mathrm{d} \xi . \end{array}
$$

Similarly, we have 

$$
\begin{array}{c} \int_ {\mathbb {R}} [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \widehat {\phi} (2 ^ {- n} \xi) \overline {{\widehat {f} (\xi)}} \mathrm{d} \xi = \int_ {2 ^ {n} [ - \pi , \pi ]} \Big | [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \Big | ^ {2} \mathrm{d} \xi \\ = \int_ {\mathbb {R}} \overline {{[ \widehat {f} (2 ^ {n} \cdot) , \widehat {\phi} ] (2 ^ {- n} \xi) \widehat {\phi} (2 ^ {- n} \xi)}} \widehat {f} (\xi) \mathrm{d} \xi . \end{array}
$$

Now altogether, we have 

$$
\begin{array}{l} \| \widehat {\mathcal {P} _ {n} f} - \widehat {f} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \int_ {2 ^ {n} [ - \pi , \pi ]} \Big | [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \Big | ^ {2} \left([ \widehat {\phi}, \widehat {\phi} ] (2 ^ {- n} \xi) - 1\right) \mathrm{d} \xi \\ \qquad + \| \widehat {f} \| _ {L _ {2} (\mathbb {R})} ^ {2} - \int_ {2 ^ {n} [ - \pi , \pi ]} \Big | [ \widehat {f} (2 ^ {n} \cdot), \widehat {\phi} ] (2 ^ {- n} \xi) \Big | ^ {2} \mathrm{d} \xi . \end{array}
$$

Now suppose supp ${ \widehat { f } } \subset 2 ^ { n } [ - \pi , \pi ]$ . Then 

$$
\sum_ {k \in \mathbb {Z}} \widehat {f} (\xi + 2 ^ {n + 1} k \pi) \overline {{\widehat {\phi} (2 ^ {- n} \xi + 2 k \pi)}} = \widehat {f} (\xi) \overline {{\widehat {\phi} (2 ^ {- n} \xi)}}
$$

on $2 ^ { n } [ - \pi , \pi ]$ . Thus, 

$$
\begin{array}{l} \| \widehat {\mathcal {P} _ {n} f} - \widehat {f} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \int_ {2 ^ {n} [ - \pi , \pi ]} \left| \widehat {f} (\xi) \widehat {\phi} (2 ^ {- n} \xi) \right| ^ {2} \left([ \widehat {\phi}, \widehat {\phi} ] (2 ^ {- n} \xi) - 1\right) d \xi \\ + \int_ {2 ^ {n} [ - \pi , \pi ]} | \widehat {f} (\xi) | ^ {2} (1 - | \widehat {\phi} (2 ^ {- n} \xi) | ^ {2}) d \xi \\ = \int_ {2 ^ {n} [ - \pi , \pi ]} \left| \widehat {f} (\xi) \widehat {\phi} (2 ^ {- n} \xi) \right| ^ {2} \left([ \widehat {\phi}, \widehat {\phi} ] (2 ^ {- n} \xi) - | \widehat {\phi} (2 ^ {- n} \xi) | ^ {2}\right) d \xi \\ + \int_ {2 ^ {n} [ - \pi , \pi ]} | \widehat {f} (\xi) | ^ {2} \left(| \widehat {\phi} (2 ^ {- n} \xi) | ^ {2} - 1\right) ^ {2} d \xi \end{array}
$$

Since $[ \widehat { \phi } , \widehat { \phi } ]$ is essentially bounded, then when n is large enough, we have 

$$
\begin{array}{l} \| \widehat {\mathcal {P} _ {n} f} - \widehat {f} \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq C \int_ {2 ^ {n} [ - \pi , \pi ]} | \widehat {f} (\xi) | ^ {2} \left| [ \widehat {\phi}, \widehat {\phi} ] (2 ^ {- n} \xi) - | \widehat {\phi} (2 ^ {- n} \xi) | ^ {2} \right| \mathrm{d} \xi \\ \quad + \int_ {2 ^ {n} [ - \pi , \pi ]} | \widehat {f} (\xi) | ^ {2} \left(| \widehat {\phi} (2 ^ {- n} \xi) | ^ {2} - 1\right) ^ {2} \mathrm{d} \xi \\ \quad = C \int_ {2 ^ {n} [ - \pi , \pi ]} (1 + | \xi |) ^ {2 \tilde {m}} | \widehat {f} (\xi) | ^ {2} \frac {\left| [ \widehat {\phi} , \widehat {\phi} ] (2 ^ {- n} \xi) - | \widehat {\phi} (2 ^ {- n} \xi) | ^ {2} \right|}{(1 + | \xi |) ^ {2 \tilde {m}}} \mathrm{d} \xi \\ \quad + \int_ {2 ^ {n} [ - \pi , \pi ]} (1 + | \xi |) ^ {2 \tilde {m}} | \widehat {f} (\xi) | ^ {2} \frac {\left(| \widehat {\phi} (2 ^ {- n} \xi) | ^ {2} - 1\right) ^ {2}}{(1 + | \xi |) ^ {2 \tilde {m}}} \mathrm{d} \xi . \end{array}
$$

Therefore, $\mathcal { P } _ { n } f$ provides approximation order ˜m for all $f \in W _ { 2 } ^ { \tilde { m } } ( \mathbb { R } )$ with $\operatorname { s u p p } { \widehat { f } } \subset$ $2 ^ { n } [ - \pi , \pi ]$ whenever we have 

$$
\left\| \frac {[ \widehat {\phi} , \widehat {\phi} ] (2 ^ {- n} \xi) - | \widehat {\phi} (2 ^ {- n} \xi) | ^ {2}}{(1 + | \xi |) ^ {2 \tilde {m}}} \right\| _ {L _ {\infty} (2 ^ {n} [ - \pi , \pi ])} \leq C 2 ^ {- 2 n \tilde {m}},
$$

and 

$$
\left\| \frac {\left(| \widehat {\phi} (2 ^ {- n} \xi) | ^ {2} - 1\right) ^ {2}}{(1 + | \xi |) ^ {2 \tilde {m}}} \right\| _ {L _ {\infty} (2 ^ {n} [ - \pi , \pi ])} \leq C 2 ^ {- 2 n \tilde {m}},
$$

 for n large enough. The above two inequalities are equivalent to 

$$
\left\| \frac {[ \widehat {\phi} , \widehat {\phi} ] (\xi) - | \widehat {\phi} (\xi) | ^ {2}}{(2 ^ {- n} + | \xi |) ^ {2 \tilde {m}}} \right\| _ {L _ {\infty} ([ - \pi , \pi ])} \leq C,
$$

and 

$$
\left\| \frac {\left(\left| \widehat {\phi} (\xi) \right| ^ {2} - 1\right) ^ {2}}{(2 ^ {- n} + | \xi |) ^ {2 \tilde {m}}} \right\| _ {L _ {\infty} ([ - \pi , \pi ])} \leq C,
$$

which are all satisfied when $\tilde { m } = m _ { 1 } = \operatorname* { m i n } \{ m , 2 m _ { 0 } \}$ 

So far we have established that for $f \in W _ { 2 } ^ { m _ { 1 } } ( \mathbb { R } )$ with supp ${ \widehat { f } } \subset 2 ^ { n } [ - \pi , \pi ]$ , we have 

$$
\left\| \mathcal {P} _ {n} f - f \right\| _ {L _ {2} (\mathbb {R})} \leq C 2 ^ {- n m _ {1}}.
$$

Now consider general $f \in W _ { 2 } ^ { m _ { 1 } } ( \mathbb { R } )$ and define ${ \widehat { g } } : = \chi _ { 2 ^ { n } [ - \pi , \pi ] } { \widehat { f } } .$ . Then we have 

$$
\begin{array}{r l} & {\| \mathcal {P} _ {n} f - f \| _ {L _ {2} (\mathbb {R})} - \| \mathcal {P} _ {n} g - g \| _ {L _ {2} (\mathbb {R})} \leq \| \mathcal {P} _ {n} f - f - \mathcal {P} _ {n} g + g \| _ {L _ {2} (\mathbb {R})}} \\ & {\qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \leq \| \mathcal {P} _ {n} (f - g) \| _ {L _ {2} (\mathbb {R})} + \| f - g \| _ {L _ {2} (\mathbb {R})}} \\ & {\qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \leq C \| \widehat {f} - \widehat {g} \| _ {L _ {2} (\mathbb {R})},} \end{array}
$$

where the last inequality follows from the boundedness of operator $\mathcal { P } _ { n }$ because $[ \widehat { \phi } , \widehat { \phi } ]$ is essentially bounded (part (1) of Proposition 1.3). Since we have already  established that $\lVert \mathcal { P } _ { n } g - g \rVert _ { L _ { 2 } ( \mathbb { R } ) } \leq C 2 ^ { - n m _ { 1 } }$ , all we need to show is that $\| \widehat { f } - \widehat { g } \| _ { L _ { 2 } ( \mathbb { R } ) } \le$ $C 2 ^ { - n m _ { 1 } }$ for every n. Indeed, we have 

$$
\begin{array}{l} \| \widehat {f} - \widehat {g} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \int_ {\mathbb {R}} \left(1 - \chi_ {2 ^ {n} [ - \pi , \pi ]} (\xi)\right) | \widehat {f} (\xi) | ^ {2} \mathrm{d} \xi \\ = 2 ^ {n} \int_ {\mathbb {R}} \left(1 - \chi_ {[ - \pi , \pi ]} (\xi)\right) | \widehat {f} (2 ^ {n} \xi) | ^ {2} \mathrm{d} \xi \\ = 2 ^ {n} \int_ {\mathbb {R} \setminus [ - \pi , \pi ]} | \widehat {f} (2 ^ {n} \xi) | ^ {2} \mathrm{d} \xi \\ = 2 ^ {n} \int_ {\mathbb {R} \setminus [ - \pi , \pi ]} \frac {(1 + | 2 ^ {n} \xi |) ^ {2 m _ {1}} | \widehat {f} (2 ^ {n} \xi) | ^ {2}}{(1 + | 2 ^ {n} \xi |) ^ {2 m _ {1}}} \mathrm{d} \xi . \end{array}
$$

Letting $\nu : = ( 1 + | \cdot | ) ^ { m _ { 1 } } \widehat { f } ,$ we then have 

$$
\begin{array}{l} \| \widehat {f} - \widehat {g} \| _ {L _ {2} (\mathbb {R})} ^ {2} = 2 ^ {n (1 - 2 m _ {1})} \int_ {\mathbb {R} \setminus [ - \pi , \pi ]} \frac {| \nu (2 ^ {n} \xi) | ^ {2}}{(2 ^ {- n} + | \xi |) ^ {2 m _ {1}}} \mathrm{d} \xi \\ \leq C _ {1} 2 ^ {n (1 - 2 m _ {1})} \int_ {\mathbb {R} \setminus [ - \pi , \pi ]} | \nu (2 ^ {n} \xi) | ^ {2} \mathrm{d} \xi \\ = C _ {1} 2 ^ {- 2 n m _ {1}} \int_ {2 ^ {n} (\mathbb {R} \setminus [ - \pi , \pi ])} | \nu (\xi) | ^ {2} \mathrm{d} \xi \\ \leq C _ {2} 2 ^ {- 2 n m _ {1}}. \end{array}
$$

This concludes the proof of the theorem. 

The approximation order of the quasi-interpolatory operator $\mathcal { P } _ { n }$ may not reach the maximal approximation order that space $V _ { n }$ provides. Recall that for a given shift-invariant subspace V of $L _ { 2 } ( \mathbb { R } )$ and any function $f \in L _ { 2 } ( \mathbb { R } )$ , the approximation error of V to function $f$ is defined as 

$$
E (f, V) := \min \{\| f - g \| _ {L _ {2} (\mathbb {R})}: g \in V \}.
$$

We say that the shift-invariant subspace $V ( \phi )$ provides approximation order m (or we say φ provides approximation order m) if, for every $f \in \mathcal { W } _ { 2 } ^ { m } ( \mathbb { R } )$ , 

$$
E (f, V _ {n}) = O (2 ^ {- n m}).\tag{1.17}
$$

If $\{ V _ { n } \} _ { n }$ generates an MRA, we say that the MRA provides approximation order m if $V ( \phi )$ (or $\phi )$ provides an approximation order m. 

When the shifts of φ form a Bessel system, we have $\mathcal { P } _ { n } f \in V _ { n }$ . Therefore, the approximation order of $\mathcal { P } _ { n } f$ can never exceed that of $V ( \phi )$ . The two approximation orders coincide when, for example, $\mathcal { P } _ { n }$ is an orthogonal projector. 

It was shown in [69] that the approximation order of $V ( \phi )$ is completely determined by the following function 

$$
\Lambda_ {\phi} := \left(1 - \frac {| \widehat {\phi} | ^ {2}}{[ \widehat {\phi} , \widehat {\phi} ]}\right) ^ {1 / 2}, \quad \text { on } [ - \pi , \pi ].\tag{1.18}
$$

 As shown in the following theorem, the behavior of the function $\Lambda _ { \phi }$ at the origin is crucial. The proof of the theorem is omitted here and we refer interested readers to the original paper [69] for details. 

Theorem 1.6. [69] The shift-invariant subspace $V ( \phi ) ( o r \phi )$ provides approximation order $m > 0 \mathrm { ~ } i f$ and only $i f$ the function $\Lambda _ { \phi }$ defined on the set $( [ - \pi , \pi ] )$ as 

$$
\Lambda_ {\phi} := \left(1 - \frac {| \widehat {\phi} | ^ {2}}{[ \widehat {\phi} , \widehat {\phi} ]}\right) ^ {1 / 2},\tag{1.19}
$$

satisfies $| \cdot | ^ { m } \Lambda _ { \phi } \in L _ { \infty } ( [ - \pi , \pi ] )$ 

The condition (1.19) is closely related to the Strang-Fix conditions of $\phi .$ Recall that a function $\phi$ satisfies the Strang-Fix (SF) conditions of order $m \in \mathbb { N } _ { + }$ if 

$$
\widehat {\phi} (0) \neq 0, \quad \widehat {\phi} ^ {(j)} (2 \pi k) = 0, \quad j = 0, 1, 2,..., m - 1, \quad k \in \mathbb {Z} \backslash \{0 \}.\tag{1.20}
$$

It is shown in [69] that under certain conditions on $\phi \ \mathrm { ( e . g . }$ . if $\phi$ is compactly supported and $\widehat { \phi } ( 0 ) \neq 0 ) , ( 1 . 1 9 )$ is equivalent to the SF conditions, meaning $V ( \phi )$ $( \mathrm { o r } ~ \phi )$ provides approximation order m if and only if $\phi$ satisfies $\mathrm { S F }$ conditions of order m. 

When $\widehat { \phi }$ is smooth enough, e.g. when $\phi$ is compactly supported and $\widehat { \phi } ( 0 ) \neq 0$  assumption (2) of Theorem 1.5 is equivalent to the Strang-Fix (SF) conditions. In this case, we can easily see that assumption (2) of Theorem 1.5 ensures that the approximation order of $V ( \phi )$ is m. If, in addition, m<sub>0</sub> in assumption (3) of Theorem 1.5 satisfies the inequality $2 m _ { 0 } \geq m$ , then Theorem 1.5 asserts that the operator $\mathcal { P } _ { n }$ attains the approximation order of the space $V _ { n }$ 

If φ is a compactly supported refinable function with a finitely supported mask, $h _ { 0 }$ , satisfying $\widehat { h } _ { 0 } ( 0 ) = 1$ , it satisfies the SF conditions of order $m .$ . Hence $\phi$ provides an approximation order m whenever $\widehat { h } _ { 0 }$ has a zero of order m at $\pi .$ On the other hand, Proposition 2.1 in the next lecture will show that assumption (3) of Theorem $1 . 5 , \mathrm { i . e . } 1 - | \widehat \phi | ^ { 2 } = { \cal O } ( | \cdot | ^ { 2 m _ { 0 } } )$ , is equivalent to the condition $1 - | \widehat { h } _ { 0 } | ^ { 2 } = O ( | \cdot | ^ { 2 m _ { 0 } } )$ Therefore, the approximation order of $V ( \phi )$ , with $\phi$ satisfying some additional mild conditions, is entirely determined by the refinement mask $h _ { 0 }$ of $\phi .$ . In fact, as we will see in the following two lectures, not only the approximation order of $V ( \phi )$ 2 but also the regularity of $\phi$ can be easily characterized by $h _ { 0 }$ . Furthermore, thanks to the MRA structure and the unitary extension principle [158], the constructions of tight frames and the approximation properties of the tight frames can also be easily obtained from corresponding properties of $h _ { 0 }$ 

## MRA-Based Tight Wavelet Frames

This lecture is devoted to MRA-based tight wavelet frames. We first introduce the general notion of tight wavelet frames in space $L _ { 2 } ( \mathbb { R } )$ with some other basic concepts and notations. 

For any function $f \in L _ { 2 } ( \mathbb { R } )$ , the dyadic dilation operator D is defined by $\mathcal { D } f ( x ) : = \sqrt { 2 } f ( 2 x )$ and the translation operator $T$ is defined by $T _ { t } f ( x ) : = f ( x - t )$ for $t \in \mathbb { R } .$ . Given $j \in \mathbb { Z }$ , we have $T _ { t } \mathcal { D } ^ { j } = \mathcal { D } ^ { j } T _ { 2 ^ { j } t }$ 

For given $\Psi : = \{ \psi _ { 1 } , \ldots , \psi _ { r } \} \subset L _ { 2 } ( \mathbb { R } )$ , define the wavelet system (or afine system) as 

$$
X (\Psi) := \{\psi_ {\ell , n, k}: 1 \leq \ell \leq r; n, k \in \mathbb {Z} \},\tag{2.1}
$$

where $\psi _ { \ell , n , k } = \mathcal { D } ^ { n } T _ { k } \psi _ { \ell } = 2 ^ { n / 2 } \psi _ { \ell } ( 2 ^ { n } \cdot - k )$ . The system $X ( \Psi ) \subset L _ { 2 } ( \mathbb { R } )$ is called a tight wavelet frame of $L _ { 2 } ( \mathbb { R } )$ if 

$$
\| f \| _ {L _ {2} (\mathbb {R})} ^ {2} = \sum_ {g \in X (\Psi)} | \langle f, g \rangle | ^ {2},
$$

holds for all $f \in L _ { 2 } ( \mathbb { R } )$ , where $\langle \cdot , \cdot \rangle$ is the inner product in $L _ { 2 } ( \mathbb { R } )$ and $\| \cdot \| _ { L _ { 2 } ( \mathbb { R } ) } =$ $\sqrt { \langle \cdot , \cdot \rangle }$ . This is equivalent to 

$$
f = \sum_ {g \in X (\Psi)} \langle f, g \rangle g,
$$

for all $f \in L _ { 2 } ( \mathbb { R } )$ . Here $\{ \langle f , g \rangle \} _ { g \in X ( \Psi ) }$ is called canonical tight frame coeficients. It is clear that an orthonormal basis is a tight frame. When $X ( \Psi )$ forms an orthonormal basis of $L _ { 2 } ( \mathbb { R } )$ , then $X ( \Psi )$ is called an orthonormal wavelet basis. When $X ( \Psi )$ forms a tight frame of $L _ { 2 } ( \mathbb { R } )$ , then $X ( \Psi )$ is called a tight wavelet (afine) frame. We note that in some literature, the definition of tight frame we present is called the tight frame with bound one or Parseval frame. 

More generally, the system $X ( \Psi ) \subset L _ { 2 } ( \mathbb { R } )$ is called a wavelet frame of $L _ { 2 } ( \mathbb { R } )$ if there are constants $0 < C _ { 1 } \le C _ { 2 } < \infty$ such that 

$$
C _ {1} \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq \sum_ {g \in X (\Psi)} | \langle f, g \rangle | ^ {2} \leq C _ {2} \| f \| _ {L _ {2} (\mathbb {R})} ^ {2},\tag{2.2}
$$

holds for all $f \in L _ { 2 } ( \mathbb { R } )$ . We call $X ( \Psi )$ a Bessel system if only the right inequality holds. 

Recall that for a given system $X ( \Psi )$ , the corresponding frame operator is defined by 

$$
S f = \sum_ {g \in X (\Psi)} \langle f, g \rangle g, f \in L _ {2} (\mathbb {R}).
$$

It is clear that $X ( \Psi )$ is a frame of $L _ { 2 } ( \mathbb { R } )$ if and only if S is bounded and has a bounded inverse; X(Ψ) is a tight frame of $L _ { 2 } ( \mathbb { R } )$ if and only if S is the identity. For comprehensive characterizations of frames in terms of various operators associated with them, the papers [156, 162] and the book [50] are good references. 

The first interesting question is how to choose Ψ such that $X ( \Psi )$ is a tight frame, or more generally a frame for $L _ { 2 } ( \mathbb { R } )$ . A general characterization of all wavelet frames whose dilation matrix is an integral (via dual Gramian analysis of [156, 162]) provided in [158] and derived from it a special characterization of tight wavelet frames in [158] and bi-frame in [157]. 

The dual Gramian analysis identifies the frame operator corresponding to the wavelet system $X ( \Psi )$ as the dual Gramian matrix with each entry being written in terms of the Fourier transform of the generators Ψ. The dual Gramian analysis decomposes the operator $S$ into a collection of simpler operators which are called fibers in [156, 162] in Fourier domain. The operator $S$ is bounded and has a bounded inverse if and only if almost every fiber operator is uniformly bounded and has a uniformly bounded inverse. S is the identity operator if and only if almost every fiber operator is the identity operator. This leads to the conclusion that the wavelet system $X ( \Psi )$ forms a tight frame of $L _ { 2 } ( \mathbb { R } )$ if and only if the dual Gramian corresponding to the wavelet system $X ( \Psi )$ is the identity operator almost everywhere. By writing each entry of the dual Gramian explicitly, one obtains the following theorem (see, e.g. Corollary 1.3 of [158]). For general results and dual Gramian analysis, interested readers should consult [158, 156, 162] for details. Note that the dual Gramian analysis was also applied to the Gabor frame analysis in [159] to derive the duality principle for the Gabor frames. 

Theorem 2.1. [158] The wavelet system $X ( \Psi )$ is a tight frame of $L _ { 2 } ( \mathbb { R } )$ if and only if the identities 

$$
\sum_ {\psi \in \Psi} \sum_ {k \in \mathbb {Z}} | \widehat {\psi} (2 ^ {k} \xi) | ^ {2} = 1; \quad \sum_ {\psi \in \Psi} \sum_ {k = 0} ^ {\infty} \widehat {\psi} (2 ^ {k} \xi) \overline {{\widehat {\psi} (2 ^ {k} (\xi + (2 j + 1) 2 \pi))}} = 0 \quad j \in \mathbb {Z}\tag{2.3}
$$

hold for $a . e . ~ \xi \in \mathbb { R }$ . Furthermore, $X ( \Psi )$ is an orthonormal basis of $L _ { 2 } ( \mathbb { R } )$ if and only if (2.3) holds and $\| \psi \| = 1$ for all $\psi \in \Psi$ 

There were many contributions over the last two decades to the study of the Bessel frame and other related properties of wavelet systems. Examples of univariate wavelet frames can be found in [63]; necessary and suficient conditions for mother wavelets to generate frames were discussed (implicitly) in [61, 134]. Characterizations of univariate orthonormal bases associated with integer dilation were established independently in [98] and [108]. The multivariate counterparts of these results for the dyadic dilation appeared in [93]. Characterization of bi-frames (tight frame is a special case) in multivariate case for an integer dilation matrix was given in [101]. Independent of all these, as discussed before Theorem 2.1, a general characterization of all wavelet frames whose dilation matrix is an integral (via dual Gramian analysis) were provided in [158] and derived from it a special characterization of tight wavelet frames in [158] and bi-frame in [157]. 

Although Theorem 2.1 gives a complete characterization of the wavelet system $X ( \Psi )$ being a tight frame of $L _ { 2 } ( \mathbb { R } )$ and it helps to obtain tight wavelet frame systems with band-limited generators, directly applying this theorem provides little help in the construction of wavelet systems with compactly supported generators. On the other hand, because fast decomposition and reconstruction algorithms exist for compactly supported tight wavelet frames constructed from an MRA, these frames are very handy to use in practice. This motivates the study of MRA-based tight wavelet frames in [158]. The key is the introduction of extension principles, e.g. the unitary extension principle. The MRA-based band-limited tight wavelet frames are also constructed in [6] without invoking extension principles. 

## 1. Extension Principles

In this section, we introduce the unitary extension principle (UEP), which leads to explicit constructions of tight wavelet frames based on the multiresolution analysis generated by a refinable function $\phi .$ In particular, examples of spline tight wavelet frame will be given. The approximation order of tight wavelet frames is studied and the fast algorithm for tight wavelet frame derived from the unitary extension principle is discussed as well. Also, the decomposition and reconstruction algorithms for the MRA-based tight wavelet frames are provided. We briefly introduce other extension principles as well. Although the main interest here is to construct compactly supported tight frames with finitely supported masks, we state the UEP in a more general setting. An even more general form of the UEP (e.g. multivariate case) can be found in [65, 158]). 

## 1.1. Unitary Extension Principle

Let $\{ V _ { n } \} _ { n \in \mathbb { Z } }$ be the MRA generated by the refinable function $\phi$ with refinement mask $h _ { 0 }$ . The construction of tight frame systems starts with the construction of $\Psi \subset L _ { 2 } ( \mathbb { R } )$ . The objective of MRA-based construction of tight wavelet frames is to find $\Psi = \{ \psi _ { 1 } , . . . , \psi _ { r } \} \subset V _ { 1 }$ such that $X ( \Psi )$ forms a tight frame for $L _ { 2 } ( \mathbb { R } )$ . Since $V _ { 1 }$ is a <sup>1</sup> -shift-invariant subspace generated by $\phi ( 2 \cdot )$ , finding $\Psi \subset V _ { 1 }$ is the same as finding $h _ { \ell }$ such that 

$$
\psi_ {\ell} (x) = 2 \sum_ {k \in \mathbb {Z}} h _ {\ell} [ k ] \phi (2 x - k).\tag{2.4}
$$

The sequences $h _ { 1 } , \ldots , h _ { r }$ are called wavelet masks, or the high pass filters of the system; the refinement mask $h _ { 0 }$ is also known as the low pass filter. In the Fourier domain, (2.4) can be written as 

$$
\widehat {\psi} _ {\ell} (2 \cdot) = \widehat {h} _ {\ell} \widehat {\phi}, \quad \ell = 1, \dots , r,\tag{2.5}
$$

where $\widehat { h } _ { 1 } , \ldots , \widehat { h } _ { r }$ are 2π periodic functions. Throughout this lecture, $\phi$ and masks $\{ h _ { \ell } , \ell = 0 , 1 , \ldots , r \}$ are assumed to satisfy the following mild assumptions: 

Assumptions 2.1. All MRA-based constructions that are considered in this article are assumed to satisfy the following assumptions: 

(1) Each mask of $\{ h _ { \ell } : \ell = 0 , 1 , \ldots , r \}$ is a sequence in $\ell _ { 2 } ( \mathbb { Z } )$ and its Fourier series $\widehat { h } _ { \ell }$ is measurable and (essentially) bounded. 

(2) The refinement mask $h _ { 0 }$ of refinable function $\phi \in L _ { 2 } ( \mathbb { R } )$ satisfies 

$$
| \widehat {h} _ {0} (\xi) - 1 | \leq C | \xi |.
$$

(3) The function $\begin{array} { r } { [ \hat { \phi } , \hat { \phi } ] : = \sum _ { k \in 2 \pi \mathbb { Z } } | \hat { \phi } ( \cdot + k ) | ^ { 2 } } \end{array}$ is essentially bounded, which is equivalent to (1.7) (see [70]), i.e. the shifts of $\phi$ form a Bessel system. 

Under the assumption in item 2, the proof of Theorem 3.1 reveals the following property of $\phi$ 

$$
\lim _ {\xi \to 0} \widehat {\phi} (\xi) = 1.
$$

Our analysis in the previous lecture shows that the sequence of subspaces $\{ V _ { n } \} _ { n }$ defined in (1.1) forms an MRA. When φ is a compactly supported refinable function generated by a finitely supported refinement mask with $\widehat { \phi } ( 0 ) = 1$ , all conditions in Assumption 2.1 are satisfied. We note that item 2 in Assumption 2.1 is in fact not necessary and were not required in the original proof of UEP [158]. We include them here for the simplicity of the proof. 

For the $\mathrm { U E P }$ in the most general setting with mild assumptions, interested readers should consult [65, 158] for the details. The univariate version of the UEP of [158] can be stated as following. 

Theorem 2.2 (Unitary Extension Principle, (UEP) [158]). Let $\phi \in L _ { 2 } ( \mathbb { R } )$ be a refinable function with refinement mask $h _ { 0 }$ and $\{ h _ { 1 } , \ldots , h _ { r } \}$ be a set of sequences. Assume that the refinable function φ and masks $\{ h _ { 0 } , h _ { 1 } , \ldots , h _ { r } \}$ satisfy Assumption 2.1. Then the system $X ( \Psi )$ where $\Psi = \{ \psi _ { 1 } , \ldots , \psi _ { r } \}$ defined in (2.4) forms a tight frame in $L _ { 2 } ( \mathbb { R } )$ provided the equalities 

$$
\sum_ {\ell = 0} ^ {r} | \widehat {h} _ {\ell} (\xi) | ^ {2} = 1 \quad a n d \quad \sum_ {\ell = 0} ^ {r} \widehat {h} _ {\ell} (\xi) \overline {{\widehat {h} _ {\ell} (\xi + \pi)}} = 0\tag{2.6}
$$

hold for almost all $\xi \in \sigma ( V _ { 0 } )$ , where 

$$
\sigma (V _ {0}) := \{\xi \in \mathbb {R}: [ \hat {\phi}, \hat {\phi} ] (\xi) \neq 0 \}.\tag{2.7}
$$

Furthermore, assuming $r = 1$ and $\| \phi \| _ { L _ { 2 } ( \mathbb { R } ) } = 1$ , then $X ( \Psi )$ is an orthonormal wavelet bases of $L _ { 2 } ( \mathbb { R } )$ 

First, we note that in order to use the UEP, the mask $h _ { 0 }$ must necessarily satisfy 

$$
| \widehat {h} _ {0} (\xi) | ^ {2} + | \widehat {h} _ {0} (\xi + \pi) | ^ {2} \leq 1.\tag{2.8}
$$

Indeed, the UEP condition (2.6) means that the following matrix has the two rows orthonormal to each other 

$$
\left( \begin{array}{c c c c} \widehat {h} _ {0} (\xi), & \widehat {h} _ {1} (\xi), & \dots , & \widehat {h} _ {r} (\xi) \\ \widehat {h} _ {0} (\xi + \pi), & \widehat {h} _ {1} (\xi + \pi), & \dots , & \widehat {h} _ {r} (\xi + \pi), \end{array} \right) \quad \text {i.e.} \quad \xi \in \mathbb {R}.
$$

Then one can extend the above matrix to a $( r + 1 ) \times ( r + 1 )$ unitary matrix. The fact that the first column of the extended matrix has norm one implies the inequality (2.8). 

Conditions in (2.6) can be written in terms of sequences $\{ h _ { 0 } , h _ { 1 } , \ldots , h _ { r } \}$ . The first condition becomes 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ k ]}} h _ {\ell} [ k - p ] = \delta_ {p, 0}, \quad p \in \mathbb {Z},\tag{2.9}
$$

where $\delta _ { p , 0 } = 1$ when $p = 0$ and 0 otherwise, and the second condition can be written as 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} (- 1) ^ {k - p} \overline {{h _ {\ell} [ k ]}} h _ {\ell} [ k - p ] = 0, \quad p \in \mathbb {Z}.\tag{2.10}
$$

Before proving Theorem (2.2), we first prove the following Lemma 2.1. We will prove Lemma 2.1 in the Fourier domain which is similar to the proof of [65, Lemma 2.4]. Also, we demonstrate another proof of Lemma 2.1 in the time domain with some additional assumptions. The reason that we are showing the proof of identity (2.12) in the time domain is because both the identity itself and the proof of it are the foundation of the fast decomposition and reconstruction algorithms for MRA-based wavelet frame systems. 

For a given φ and its corresponding MRA $\{ V _ { n } \} _ { n }$ , the quasi-interpolatory operator is defined as (same as (1.13)) 

$$
\mathcal {P} _ {n}: f \mapsto \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {n, k} \rangle \phi_ {n, k},\tag{2.11}
$$

for an arbitrary $f \in L _ { 2 } ( \mathbb { R } )$ 

Lemma 2.1. Let $\phi \in L _ { 2 } ( \mathbb { R } )$ be a refinable function with mask $h _ { 0 }$ . Let 

$$
\{h _ {0}, h _ {1}, \dots , h _ {r} \}
$$

be a set $o f$ sequences satisfying (2.6) (or equivalently (2.9) and (2.10)) and $A s -$ sumption 2.1. Then 

$$
\mathcal {P} _ {n} f = \mathcal {P} _ {n - 1} f + \sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n - 1, k} \rangle \psi_ {\ell , n - 1, k}.\tag{2.12}
$$

Proof. To simplify notations, let $\phi$ be defined as $\psi _ { 0 }$ , and 

$$
\mathcal {P} _ {n, \ell} f := \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n, k} \rangle \psi_ {\ell , n, k},
$$

for $\ell = 0 , 1 , \ldots , r$ . Note that $\mathcal { P } _ { n , 0 } = \mathcal { P } _ { n }$ . By Assumption 2.1, the system $\{ \psi _ { \ell , n , k } ; k \in$ $\mathbb { Z } \}$ for each  and n, forms a Bessel system. Hence the operator $\mathcal { P } _ { n , \ell } : L _ { 2 } ( \mathbb { R } ) \mapsto $ $L _ { 2 } ( \mathbb { R } )$ is well-defined. Therefore, (2.12) is equivalent to 

$$
\widehat {\mathcal {P} _ {n} f} = \sum_ {\ell = 0} ^ {r} \widehat {\mathcal {P} _ {n - 1 , \ell}} f.\tag{2.13}
$$

Since $\mathcal { P } _ { n , \ell } = \mathcal { D } ^ { n } \mathcal { P } _ { 0 , \ell } \mathcal { D } ^ { - n }$ , we only need to show (2.13) for $n = 1$ , i.e. 

$$
\widehat {\mathcal {P} _ {1} f} = \sum_ {\ell = 0} ^ {r} \widehat {\mathcal {P} _ {0 , \ell} f}.\tag{2.14}
$$

By Proposition 1.3 item (3), (2.14) is equivalent to 

$$
[ \widehat {f} (2 \cdot), \widehat {\phi} ] (\frac {\cdot}{2}) \widehat {\phi} (\frac {\cdot}{2}) = \sum_ {\ell = 0} ^ {r} [ \widehat {f}, \widehat {\psi} _ {\ell} ] \widehat {\psi} _ {\ell}.\tag{2.15}
$$

Indeed, since $\widehat { \psi } _ { \ell } = \widehat { h } _ { \ell } \big ( \frac { \cdot } { 2 } \big ) \widehat { \phi } \big ( \frac { \cdot } { 2 } \big )$ , we thus have 

$$
\begin{array}{l} \sum_ {\ell = 0} ^ {r} [ \widehat {f}, \widehat {\psi} _ {\ell} ] \widehat {\psi} _ {\ell} = \sum_ {\ell = 0} ^ {r} [ \widehat {f}, \widehat {h} _ {\ell} (\frac {\cdot}{2}) \widehat {\phi} (\frac {\cdot}{2}) ] \widehat {h} _ {\ell} (\frac {\cdot}{2}) \widehat {\phi} (\frac {\cdot}{2}) \\ \qquad = \sum_ {\ell = 0} ^ {r} \left(\overline {{\widehat {h} _ {\ell} (\frac {\cdot}{2})}} [ \widehat {f} (2 \cdot), \widehat {\phi} ] (\frac {\cdot}{2}) + \overline {{\widehat {h} _ {\ell} (\frac {\cdot}{2} + \pi)}} [ \widehat {f} (2 \cdot), \widehat {\phi} ] (\frac {\cdot}{2} + \pi)\right) \widehat {h} _ {\ell} (\frac {\cdot}{2}) \widehat {\phi} (\frac {\cdot}{2}) \\ \qquad = \sum_ {\ell = 0} ^ {r} | \widehat {h} _ {\ell} (\frac {\cdot}{2}) | ^ {2} [ \widehat {f} (2 \cdot), \widehat {\phi} ] (\frac {\cdot}{2}) \widehat {\phi} (\frac {\cdot}{2}) \\ \qquad \qquad + \sum_ {\ell = 0} ^ {r} \widehat {h} _ {\ell} (\frac {\cdot}{2}) \overline {{\widehat {h} _ {\ell} (\frac {\cdot}{2} + \pi)}} [ \widehat {f} (2 \cdot), \widehat {\phi} ] (\frac {\cdot}{2} + \pi) \widehat {\phi} (\frac {\cdot}{2}) \\ \qquad = [ \widehat {f} (2 \cdot), \widehat {\phi} ] (\frac {\cdot}{2}) \widehat {\phi} (\frac {\cdot}{2}). \end{array}
$$

The last identity above follows from (2.6) for $\textstyle { \frac { \xi } { 2 } } \in \sigma ( V _ { 0 } )$ and the fact that $\widehat { \phi } \big ( { \textstyle \frac { \xi } { 2 } } \big ) = 0$ when $\textstyle { \frac { \xi } { 2 } } \not \in \sigma ( V _ { 0 } )$ . This concludes the proof of the lemma. 

Remark 2.2. When Lemma 2.1 is proven in spacial domain, it reveals some details of the fast framelet decomposition and reconstruction algorithms given in Section 1.4. For simplicity, we assume that the refinable function and all framelets are compactly supported, and that their corresponding masks are finitely supported, i.e. we assume that $\psi _ { \ell } .$ , for $\ell = 0 , 1 , \ldots , r$ , are compactly supported and the masks $h _ { \ell }$ are finite sequences; these assumptions are commonly satisfied in applications. 

Since the system $\{ \psi _ { \ell , n , k } ; k \in \mathbb { Z } \}$ for any $n \in \mathbb { Z }$ , forms a Bessel system, the operators $\mathcal { P } _ { n , \ell } : L _ { 2 } ( \mathbb { R } ) \to L _ { 2 } ( \mathbb { R } )$ , for each $\ell ,$ is bounded. Therefore, we only need to prove (2.12) for all $f$ that are compactly supported. 

By the definition of refinability of φ and (2.4), we have for $\ell = 0 , 1 , \ldots , r ,$ 

$$
\psi_ {\ell} (x) = 2 \sum_ {k \in \mathbb {Z}} h _ {\ell} [ k ] \phi (2 x - k) = 2 \sum_ {k \in \mathbb {Z}} h _ {\ell} [ k ] \psi_ {0} (2 x - k).
$$

Thus we have 

$$
\begin{array}{l} \psi_ {\ell , n - 1, k} = 2 ^ {(n - 1) / 2} \psi_ {\ell} (2 ^ {n - 1} \cdot - k) \\ \qquad = 2 ^ {(n - 1) / 2 + 1} \sum_ {k ^ {\prime} \in \mathbb {Z}} h _ {\ell} [ k ^ {\prime} ] \psi_ {0} (2 ^ {n} \cdot - 2 k - k ^ {\prime}) \\ \qquad = 2 ^ {1 / 2} \sum_ {k ^ {\prime} \in \mathbb {Z}} h _ {\ell} [ k ^ {\prime} ] 2 ^ {n / 2} \psi_ {0} (2 ^ {n} \cdot - 2 k - k ^ {\prime}) \\ \qquad = 2 ^ {1 / 2} \sum_ {k ^ {\prime} \in \mathbb {Z}} h _ {\ell} [ k ^ {\prime} ] \psi_ {0, n, 2 k + k ^ {\prime}} \end{array}
$$

Therefore, we have 

$$
\begin{array}{l} \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n - 1, k} \rangle \psi_ {\ell , n - 1, k} \\ \qquad = 2 \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \left(\sum_ {k ^ {\prime} \in \mathbb {Z}} \overline {{h _ {\ell} [ k ^ {\prime} ]}} \langle f, \psi_ {0, n, 2 k + k ^ {\prime}} \rangle\right) \left(\sum_ {k ^ {\prime \prime} \in \mathbb {Z}} h _ {\ell} [ k ^ {\prime \prime} ] \psi_ {0, n, 2 k + k ^ {\prime \prime}}\right) \\ \qquad = 2 \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \left(\sum_ {j \in \mathbb {Z}} \overline {{h _ {\ell} [ j - 2 k ]}} \langle f, \psi_ {0, n, j} \rangle\right) \left(\sum_ {j ^ {\prime} \in \mathbb {Z}} h _ {\ell} [ j ^ {\prime} - 2 k ] \psi_ {0, n, j ^ {\prime}}\right) \\ \qquad = 2 \sum_ {j \in \mathbb {Z}} \sum_ {j ^ {\prime} \in \mathbb {Z}} \left(\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ j - 2 k ]}} h _ {\ell} [ j ^ {\prime} - 2 k ]\right) \langle f, \psi_ {0, n, j} \rangle \psi_ {0, n, j ^ {\prime}}, \end{array}
$$

where the switching of summations order is valid since all summations involved are finite sum. 

Now we focus on proving that 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ j - 2 k ]}} h _ {\ell} [ j ^ {\prime} - 2 k ] = \frac {1}{2} \delta_ {j, j ^ {\prime}}.\tag{2.16}
$$

Suppose $j ^ { \prime } - j$ is even, i.e. there exists $p \in \mathbb Z$ such that $j ^ { \prime } = j + 2 p$ . Then we have 

$$
\begin{array}{l} \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ j - 2 k ]}} h _ {\ell} [ j ^ {\prime} - 2 k ] = \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ 2 k + j ]}} h _ {\ell} [ 2 k + j ^ {\prime} ] \\ \qquad = \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ 2 k + j ]}} h _ {\ell} [ 2 k + j + 2 p ] \\ \qquad = \left\{ \begin{array}{l l} \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ 2 k ]}} h _ {\ell} [ 2 k + 2 p ], & j \text {even} \\ \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ 2 k + 1 ]}} h _ {\ell} [ 2 k + 2 p + 1 ], & j \text {odd}. \end{array} \right. \\ \qquad =: \left\{ \begin{array}{l l} c _ {1} [ p ], & j \text {even} \\ c _ {2} [ p ], & j \text {odd}. \end{array} \right. \end{array}
$$

Now replacing p by $- 2 p$ and breaking the summations (2.9) and (2.10) into even and odd parts, we have 

$$
\begin{array}{l} c _ {1} [ p ] + c _ {2} [ p ] = \delta_ {- 2 p, 0} = \delta_ {p, 0} \\ c _ {1} [ p ] - c _ {2} [ p ] = 0, \end{array}
$$

which leads to 

$$
c _ {1} [ p ] = c _ {2} [ p ] = \frac {1}{2} \delta_ {p, 0}.
$$

Since $j ^ { \prime } - j = 2 p$ , we have $\delta _ { p , 0 } = \delta _ { j , j ^ { \prime } }$ which concludes that (2.16) is satisfied when $j ^ { \prime } - j$ is even. 

Suppose $j ^ { \prime } - j$ is odd, which means there exists $p \in \mathbb Z$ such that $j ^ { \prime } = j + 2 p + 1$ Then we have 

$$
\begin{array}{l} \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ j - 2 k ]}} h _ {\ell} [ j ^ {\prime} - 2 k ] = \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ 2 k + j ]}} h _ {\ell} [ 2 k + j + 2 p + 1 ] \\ \qquad = \left\{ \begin{array}{l l} \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ 2 k ]}} h _ {\ell} [ 2 k + 2 p + 1 ], & j \text {even} \\ \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ 2 k + 1 ]}} h _ {\ell} [ 2 k + 2 p + 2 ], & j \text {odd}. \end{array} \right. \\ \qquad =: \left\{ \begin{array}{l l} c _ {1} [ p ], & j \text {even} \\ c _ {2} [ p ], & j \text {odd}. \end{array} \right. \end{array}
$$

Now replacing p by $- 2 p - 1$ and breaking the summations (2.9) and (2.10) into even and odd parts, we have 

$$
\begin{array}{c} {c _ {1} [ p ] + c _ {2} [ p ] = 0} \\ {- c _ {1} [ p ] + c _ {2} [ p ] = 0,} \end{array}
$$

which implies that $c _ { 1 } [ p ] = c _ { 2 } [ p ] = 0$ for all $p \in \mathbb Z$ . Therefore, we have 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ j - 2 k ]}} h _ {\ell} [ j ^ {\prime} - 2 k ] = 0 = \frac {1}{2} \delta_ {j, j ^ {\prime}}.
$$

This concludes the proof of (2.16) and hence the identity (2.12) is proved. 

Note that identity (2.12) essentially provides a decomposition and reconstruction formula for any function $f \in L _ { 2 } ( \mathbb { R } )$ under the system $X ( \Psi )$ . This formula and the MRA structure generated by the underlying refinable function $\phi$ are used to prove that $X ( \Psi )$ is a tight frame for $L _ { 2 } ( \mathbb { R } )$ 

The following two lemmata are necessary in order to prove the UEP. Lemma 2.2 below is in fact a direct consequence of $\cap _ { n } V _ { n } = \{ 0 \}$ and the weakly compactness of the unit ball in $L _ { 2 } ( \mathbb { R } )$ . However, we provide a direct proof which is similar to the proof of $\cap _ { n } V _ { n } = \{ 0 \}$ (Theorem 1.3). 

Lemma 2.2. Let refinable function $\phi \in L _ { 2 } ( \mathbb { R } )$ satisfying Assumption 2.1and operator $\mathcal { P } _ { n }$ be defined by (2.11). Then, for all $f \in L _ { 2 } ( \mathbb { R } )$ , 

$$
\lim _ {n \to - \infty} \mathcal {P} _ {n} f = 0.
$$

Proof. Part (1) of Proposition 1.3 gives us 

$$
\begin{array}{l} \| \mathcal {P} _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq C \sum_ {k \in \mathbb {Z}} | \langle f, \phi_ {n, k} \rangle | ^ {2} \\ = C \sum_ {k \in \mathbb {Z}} \Big (\int_ {\mathbb {R}} | f (x) 2 ^ {n / 2} \phi (2 ^ {n} x - k) | d x \Big) ^ {2}. \end{array}
$$

If f is supported in the interval $[ - R , R ]$ , then by the Cauchy-Schwartz inequality we have, 

$$
\| \mathcal {P} _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq C \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \sum_ {k \in \mathbb {Z}} \int_ {\{2 ^ {n} [ - R, R ] - k \}} | \phi (x) | ^ {2} d x.
$$

Now if $n < 0$ and $| n |$ is suficiently large, we have that 

$$
\{2 ^ {n} [ - R, R ] - k _ {1} \} \cap \{2 ^ {n} [ - R, R ] - k _ {2} \} = \emptyset , \quad k _ {1} \neq k _ {2}.
$$

Therefore, 

$$
\| \mathcal {P} _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq C \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \int_ {E _ {n}} | \phi (x) | ^ {2} d x = C \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \int_ {\mathbb {R}} \chi_ {E _ {n}} | \phi (x) | ^ {2} d x,
$$

where 

$$
E _ {n} = \cup_ {k \in \mathbb {Z}} (2 ^ {n} [ - R, R ] - k).
$$

Since when $n  ~ - \infty , \chi _ { E _ { n } } | \phi ( x ) | ^ { 2 }  0$ for almost every $x \in \mathbb { R }$ , and $\chi _ { E _ { n } } | \phi ( x ) | ^ { 2 } \leq$ $| \phi ( x ) | ^ { 2 } \in L _ { 1 } ( \mathbb { R } )$ , then by the dominated convergence theorem we have 

$$
\lim _ {n \to - \infty} \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \int_ {\mathbb {R}} \chi_ {E _ {n}} | \phi (x) | ^ {2} d x = \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \int_ {\mathbb {R}} \lim _ {n \to - \infty} \chi_ {E _ {n}} | \phi (x) | ^ {2} d x = 0.
$$

Thus 

$$
\lim _ {n \to - \infty} \| \mathcal {P} _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} = 0,
$$

for all compactly supported $f \in L _ { 2 } ( \mathbb { R } )$ . By a standard density argument and noting that $\mathcal { P } _ { n }$ is bounded for each $n ,$ we can conclude that lim $\mathsf { 1 } _ { n \to - \infty } \mathscr { P } _ { n } f = 0$ for all $f \in L _ { 2 } ( \mathbb { R } )$ 

Lemma 2.3. Let refinable function $\phi \in L _ { 2 } ( \mathbb { R } )$ satisfy Assumption 2.1 and (2.8) and operator $\mathcal { P } _ { n }$ be defined by (2.11). Then for all $f \in L _ { 2 } ( \mathbb { R } )$ ), 

$$
\lim _ {n \to \infty} \mathcal {P} _ {n} f = f.
$$

Proof. We will prove this lemma by showing that for any $f \in L _ { 2 } ( \mathbb { R } )$ 

$$
\lim _ {n \to \infty} \langle \mathcal {P} _ {n} f, f \rangle = \| f \| _ {L _ {2} (\mathbb {R})} ^ {2}.\tag{2.17}
$$

and for $n \in \mathbb { Z } ,$ 

$$
\left\| \mathcal {P} _ {n} \right\| _ {L _ {2} (\mathbb {R})} \leq 1.\tag{2.18}
$$

Once (2.17) and (2.18) are established, we will have 

$$
\begin{array}{c} 0 \leq \lim _ {n \to \infty} \| \mathcal {P} _ {n} f - f \| _ {L _ {2} (\mathbb {R})} ^ {2} = \lim _ {n \to \infty} \| \mathcal {P} _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} - 2 \langle \mathcal {P} _ {n} f, f \rangle + \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \\ = \lim _ {n \to \infty} \| \mathcal {P} _ {n} f \| _ {L _ {2} (\mathbb {R})} ^ {2} - \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq 0, \end{array}
$$

which will conclude the proof of this lemma. 

Now, we show (2.17), whose proof is similar to [50, Lemma 11.2.3]. Following the routine arguments in approximation theory, we only need to prove (2.17) for all $f \in L _ { 2 } ( \mathbb { R } )$ with $\widehat { f }$ continuous and compactly supported. By a similar proof of part (2) of Proposition 1.3, one can show that $[ D ^ { n } { \widehat { f } } , { \widehat { \phi } } ]$ is the Fourier series of $\{ \langle f , \phi _ { n , k } \rangle : k \in \mathbb { Z } \}$ for each $n \in \mathbb { Z }$ . Since $\widehat { f }$  is continuous and compactly supported, the infinite sum 

$$
[ D ^ {n} \widehat {f}, \widehat {\phi} ] = \sum_ {k \in \mathbb {Z}} (D ^ {n} \widehat {f}) (\xi + 2 k \pi) \overline {{\widehat {\phi} (\xi + 2 k \pi)}}
$$

is in fact finite. Then, the boundedness of $\widehat { f }$ implies that $[ D ^ { n } \widehat { f } , \widehat { \phi } ] \in L _ { 2 } ( [ - \pi , \pi ] )$ Now by Parseval’s identity, we have 

$$
\langle \mathcal {P} _ {n} f, f \rangle = \frac {1}{2 \pi} \| [ D ^ {n} \widehat {f}, \widehat {\phi} ] \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2} = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} \left| \sum_ {k \in \mathbb {Z}} (D ^ {n} \widehat {f}) (\xi + 2 k \pi) \overline {{\widehat {\phi} (\xi + 2 k \pi)}} \right| ^ {2} \mathrm{d} \xi .
$$

Since $\widehat { f }$ is compactly supported, when n is large enough, we have 

$$
\langle \mathcal {P} _ {n} f, f \rangle = \frac {1}{2 \pi} \int_ {- \pi} ^ {\pi} \left| (D ^ {n} \widehat {f}) (\xi) \widehat {\phi} (\xi) \right| ^ {2} \mathrm{d} \xi .
$$

Since item 2 of Assumption 2.1 implies that lim $\xi \to 0 { \widehat { \phi } } ( \xi ) = 1$ . Then, for any $\varepsilon > 0$ there exists $r \in ( 0 , \pi )$ such that $1 - \varepsilon \le | \widehat { \phi } ( \xi ) | ^ { 2 } \le 1 + \varepsilon$ for $\xi \in [ - r , r ]$ . Furthermore, when n large enough, $D ^ { n } { \widehat { f } }$ has support in $\left[ - r , r \right]$ . Then we have, 

$$
\langle \mathcal {P} _ {n} f, f \rangle = \frac {1}{2 \pi} \int_ {- r} ^ {r} \left| (D ^ {n} \widehat {f}) (\xi) \widehat {\phi} (\xi) \right| ^ {2} \mathrm{d} \xi
$$

and thus 

$$
\frac {1 - \varepsilon}{2 \pi} \| D ^ {n} \widehat {f} \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq \langle \mathcal {P} _ {n} f, f \rangle \leq \frac {1 + \varepsilon}{2 \pi} \| D ^ {n} \widehat {f} \| _ {L _ {2} (\mathbb {R})} ^ {2}.
$$

Now, (2.17) follows by noting that $\begin{array} { r } { \frac { 1 } { 2 \pi } \| D ^ { n } \widehat { f } \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 } = \| f \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 } } \end{array}$ 

From part (3) of Proposition 1.3, it is easy to see that it sufices to prove that $[ \widehat { \phi } , \widehat { \phi } ] \leq 1$ a.e. on $[ - \pi , \pi ]$ . Define a sequence of functions $\{ \phi _ { n } \} _ { n }$ as (known as the  cascade algorithm) 

$$
\widehat {\phi} _ {n} (\xi) := \widehat {h} _ {0} (\frac {\xi}{2}) \widehat {\phi} _ {n - 1} (\frac {\xi}{2}) = \prod_ {j = 1} ^ {n} \widehat {h} _ {0} (2 ^ {- j} \xi) \widehat {\phi} _ {0} (2 ^ {- n} \xi),
$$

with $\widehat { \phi } _ { 0 } : = \chi _ { [ - \pi , \pi ] }$ . It is clear that $[ \widehat { \phi } _ { 0 } , \widehat { \phi } _ { 0 } ] \leq 1$ , by induction, we have 

$$
\begin{array}{l} [ \widehat {\phi} _ {n}, \widehat {\phi} _ {n} ] (\xi) = \sum_ {k \in \mathbb {Z}} | \widehat {h} _ {0} (\frac {\xi}{2} + k \pi) | ^ {2} | \widehat {\phi} _ {n - 1} (\frac {\xi}{2} + k \pi) | ^ {2} \\ \qquad = \sum_ {k \in \mathbb {Z}} | \widehat {h} _ {0} (\frac {\xi}{2} + 2 k \pi) | ^ {2} | \widehat {\phi} _ {n - 1} (\frac {\xi}{2} + 2 k \pi) | ^ {2} \\ \qquad + \sum_ {k \in \mathbb {Z}} | \widehat {h} _ {0} (\frac {\xi}{2} + 2 k \pi + \pi) | ^ {2} | \widehat {\phi} _ {n - 1} (\frac {\xi}{2} + 2 k \pi + \pi) | ^ {2} \\ \qquad = | \widehat {h} _ {0} (\frac {\xi}{2}) | ^ {2} \sum_ {k \in \mathbb {Z}} | \widehat {\phi} _ {n - 1} (\frac {\xi}{2} + 2 k \pi) | ^ {2} \\ \qquad + | \widehat {h} _ {0} (\frac {\xi}{2} + \pi) | ^ {2} \sum_ {k \in \mathbb {Z}} | \widehat {\phi} _ {n - 1} (\frac {\xi}{2} + 2 k \pi + \pi) | ^ {2} \\ \qquad \leq | \widehat {h} _ {0} (\xi / 2) | ^ {2} + | \widehat {h} _ {0} (\xi / 2 + \pi) | ^ {2} \\ \qquad \leq 1, a. e. \xi \in \mathbb {R}. \end{array}
$$

the last inequality follows from the fact that $| \widehat { h } _ { 0 } ( \xi / 2 ) | ^ { 2 } + | \widehat { h } _ { 0 } ( \xi / 2 + \pi ) | ^ { 2 } \le 1$ . By item 2 of Assumption 2.1, we have that $\widehat { \phi } _ { n }$  converges pointwise to ${ \overset { \cdot } { \phi } } .$ (The proof of  this argument is the same as that of Theorem 3.1. Although we assume in Theorem 3.1 that $h _ { 0 }$ is finitely supported, only item 2 of Assumption 2.1 is necessary to show pointwise convergence of $\widehat { \phi } _ { n }$ to ${ \widehat { \phi } } . )$ By Fatou’s lemma, we have 

$$
[ \widehat {\phi}, \widehat {\phi} ] \leq \operatorname * {l i m i n f} _ {n \to \infty} [ \widehat {\phi} _ {n}, \widehat {\phi} _ {n} ] \leq 1,   a. e.   \xi \in \mathbb {R}
$$

This concludes the proof of (2.18). 

Proof. (Proof of Theorem 2.2) By (2.12), we have 

$$
\mathcal {P} _ {n} f = \mathcal {P} _ {n - 1} f + \sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n - 1, k} \rangle \psi_ {\ell , n - 1, k}
$$

Applying (2.12) inductively, one has that 

$$
\mathcal {P} _ {n} f = \mathcal {P} _ {n ^ {\prime}} f + \sum_ {\ell = 1} ^ {r} \sum_ {j = n ^ {\prime}} ^ {n - 1} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , j, k} \rangle \psi_ {\ell , j, k}.
$$

Letting $n ^ { \prime }  - \infty$ and employing Lemma 2.2, we have 

$$
\mathcal {P} _ {n} f = \sum_ {\ell = 1} ^ {r} \sum_ {j <   n} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , j, k} \rangle \psi_ {\ell , j, k}.\tag{2.19}
$$

Then taking $n \to \infty$ at both sides of (2.19), noting that (2.8) holds by (2.6), and applying Lemma 2.3, we have, for all $f \in L _ { 2 } ( \mathbb { R } )$ , 

$$
f = \sum_ {\ell = 1} ^ {r} \sum_ {n \in \mathbb {Z}} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n, k} \rangle \psi_ {\ell , n, k}.
$$

This proves that $X ( \Psi )$ is a tight frame for $L _ { 2 } ( \mathbb { R } )$ 

Finally, we show that if $r = 1$ and $\| \phi \| _ { L _ { 2 } ( \mathbb { R } ) } = 1$ (or equivalently $\| \widehat { \phi } \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 } = 2 \pi )$ ， then $X ( \Psi )$ forms an orthonormal basis for $L _ { 2 } ( \mathbb { R } )$ . Using (2.6), $\widehat { \phi } ( 2 \cdot ) = \widehat { h } _ { 0 } \widehat { \phi }$ and ${ \widehat { \psi } } ( 2 \cdot ) = { \widehat { h } } _ { 1 } { \widehat { \phi } }$ , we have 

$$
\begin{array}{r l} \| \widehat {\psi} \| _ {L _ {2} (\mathbb {R})} ^ {2} = 2 \int | \widehat {\psi} (2 \xi) | ^ {2} d \xi & = 2 \int | \widehat {h} _ {1} (\xi) | ^ {2} | \widehat {\phi} (\xi) | ^ {2} d \xi \\ & = 2 \int (1 - | \widehat {h} _ {0} (\xi) | ^ {2}) | \widehat {\phi} (\xi) | ^ {2} d \xi \\ & = 4 \pi - 2 \int | \widehat {\phi} (2 \xi) | ^ {2} d \xi \\ & = 2 \pi \end{array}
$$

This proves that $\| \psi \| _ { L _ { 2 } ( \mathbb { R } ) } = 1$ and hence $\| \psi _ { n , k } \| _ { L _ { 2 } ( \mathbb { R } ) } = 1$ for all $n , k \in \mathbb { Z }$ . Since $X ( \psi )$ is a tight frame for $\left( L _ { 2 } ( \mathbb { R } ) \right.$ . Then for any atom $h \in X ( \psi )$ , we have 

$$
\| h \| _ {L _ {2} (\mathbb {R})} ^ {2} = \sum_ {g \in X (\psi)} | \langle h, g \rangle | ^ {2} = \sum_ {g \in X (\psi), g \neq h} | \langle h, g \rangle | ^ {2} + \| h \| _ {L _ {2} (\mathbb {R})} ^ {4},
$$

which implies that 

$$
\sum_ {g \in X (\psi), g \neq h} | \langle h, g \rangle | ^ {2} = 0, \quad \text {   for   all   } h \in X (\psi).
$$

Therefore, $\langle h , g \rangle = 0$ whenever $h \neq g$ and hence $X ( \psi )$ forms an orthonormal basis for $L _ { 2 } ( \mathbb { R } )$ . 

In practice, it is common to decompose a given function down to a certain level instead of down to negative infinity. The following corollary states that if a function is decomposed to a finite level L, the system $\{ \phi _ { L , k } , \psi _ { \ell , n , k } : 1 \leq \ell \leq r , n \geq L , k \in \mathbb { Z } \}$ forms a tight frame of $L _ { 2 } ( \mathbb { R } )$ . The proof of the corollary follows directly from (2.19) and that $X ( \Psi )$ is a tight frame of $L _ { 2 } ( \mathbb { R } )$ . 

Corollary 2.1. Let $\Psi = \{ \psi _ { \ell } : 1 \leq \ell \leq r \}$ be the set of tight framelets constructed from the UEP with φ the corresponding refinable function. Then for any given $L \in \mathbb { Z }$ , the system 

$$
X (\phi , \Psi ; L) := \left\{\phi_ {L, k}, \psi_ {\ell , n, k}: 1 \leq \ell \leq r, n \geq L, k \in \mathbb {Z} \right\}
$$

forms a tight frame of $L _ { 2 } ( \mathbb { R } )$ , i.e. for any $f \in L _ { 2 } ( \mathbb { R } )$ ， 

$$
f = \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {L, k} \rangle \phi_ {L, k} + \sum_ {\ell = 1} ^ {r} \sum_ {n \geq L} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n, k} \rangle \psi_ {\ell , n, k}.
$$

In general, we refer to the elements in Ψ as mother wavelets. If the generators in Ψ are constructed from a MRA, we call them framelets. For the special case $r = 1$ , the above theorem is given in [124]. What makes constructing tight framelets painless is the ability to choose the number of generators r in the UEP. For example, one can easily construct tight framelets from splines. In fact, [158] gives a systematic construction of tight wavelet frame systems from B-splines by using the UEP. In the next section, we begin with a simple construction of tight frame from B-splines by using the UEP. We present more constructions of framelets from pseudo-splines using UEP in Lecture 3. 

## 1.2. B-spline Tight Frames

Consider (centered) B-splines of order m. The corresponding refinement mask $\widehat { h } _ { 0 }$ is given as $\widehat { h } _ { 0 } ( \xi ) = e ^ { - i j \frac { \xi } { 2 } } \cos ^ { m } ( \xi / 2 )$ with $j = 0$ when m is even and $j = 1$ when  m is odd. We define m wavelet masks as 

$$
\widehat {h} _ {\ell} (\xi) := - i ^ {\ell} e ^ {- i j \frac {\xi}{2}} \sqrt {\binom{m}{\ell}} \sin^ {\ell} (\xi / 2) \cos^ {m - \ell} (\xi / 2), \quad \ell = 1, 2, \ldots , m.\tag{2.20}
$$

Clearly, all assumptions in Assumption 2.1 are satisfied. Furthermore, we have 

$$
\sum_ {\ell = 0} ^ {m} | \widehat {h} _ {\ell} (\xi) | ^ {2} = (\cos^ {2} (\xi / 2) + \sin^ {2} (\xi / 2)) ^ {m} = 1,
$$

and 

$$
\sum_ {\ell = 0} ^ {m} \widehat {h} _ {\ell} (\xi) \overline {{\widehat {h} _ {\ell} (\xi + \pi)}} = e ^ {\frac {\pi}{2} i j} (\sin (\xi / 2) \cos (\xi / 2)) ^ {m} (1 - 1) ^ {m} = 0.
$$

Therefore, the m wavelets defined by 

$$
\widehat {\psi} _ {\ell} := - i ^ {\ell} e ^ {- i j \frac {\xi}{2}} \sqrt {\binom {m} {\ell}} \frac {\cos^ {m - \ell} (\xi / 4) \sin^ {m + \ell} (\xi / 4)}{(\xi / 4) ^ {m}}
$$

generate a tight frame for $L _ { 2 } ( \mathbb { R } )$ . Note that each framelet $\psi _ { \ell }$ is a real valued (anti)symmetric function supported in $[ - ( m + j ) / 2 , ( m + j ) / 2 ]$ . The cases for $m = 2$ and $m = 4$ are given in the following two examples. 

Example 2.1. Let $\begin{array} { r } { h _ { 0 } = [ \frac { 1 } { 4 } , \frac { 1 } { 2 } , \frac { 1 } { 4 } ] } \end{array}$ be the refinement mask of the piecewise linear B-spline $B _ { 2 } ( x ) = \operatorname* { m a x } { ( 1 - | x | , 0 ) }$ . Define $h _ { 1 } = [ - \frac { 1 } { 4 } , \frac { 1 } { 2 } , - \frac { 1 } { 4 } ]$ and $\begin{array} { r } { h _ { 2 } = [ \frac { \sqrt { 2 } } { 4 } , 0 , - \frac { \sqrt { 2 } } { 4 } ] } \end{array}$ Then $h _ { 0 } , h _ { 1 }$ and $h _ { 2 }$ satisfy (2.9) and (2.10). Hence, the system $X ( \Psi )$ where $\Psi =$ $\{ \psi _ { 1 } , \psi _ { 2 } \}$ defined in (2.4) by using $h _ { 1 } , h _ { 2 }$ and $\phi$ is a tight frame of $L _ { 2 } ( \mathbb { R } )$ (see Figure 1). 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/baaa7b25578d920992aafa48c4730e53ced1cafb2901d3cd672349bdf5c92899.jpg)



Figure 1. Piecewise linear refinable spline and corresponding framelets.


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/a57bb0067e5f16b806f1f7f6f6bd62f593cfba7eadc50418a4dbb8f4082d96e6.jpg)



Figure 2. Piecewise cubic refinable B-spline and corresponding framelets.


Example 2.2. Let $\begin{array} { r } { h _ { 0 } = [ \frac { 1 } { 1 6 } , \frac { 1 } { 4 } , \frac { 3 } { 8 } , \frac { 1 } { 4 } , \frac { 1 } { 1 6 } ] } \end{array}$ be the refinement mask of piecewise cubic B-spline $B _ { 4 }$ . Define $h _ { 1 } , h _ { 2 } , h _ { 3 } , h _ { 4 }$ as follows: 

$$
h _ {1} = [ \frac {1}{1 6}, - \frac {1}{4}, \frac {3}{8}, - \frac {1}{4}, \frac {1}{1 6} ], h _ {2} = [ - \frac {1}{8}, \frac {1}{4}, 0, - \frac {1}{4}, \frac {1}{8} ],
$$

$$
h _ {3} = [ \frac {\sqrt {6}}{1 6}, 0, - \frac {\sqrt {6}}{8}, 0, \frac {\sqrt {6}}{1 6} ], h _ {4} = [ - \frac {1}{8}, - \frac {1}{4}, 0, \frac {1}{4}, \frac {1}{8} ].
$$

Then $h _ { 0 } , h _ { 1 } , h _ { 2 } , h _ { 3 } , h _ { 4 }$ satisfy (2.9) and (2.6) and hence the system $X ( \Psi )$ where $\Psi = \{ \psi _ { 1 } , \psi _ { 2 } , \psi _ { 3 } , \psi _ { 4 } \}$ defined in (2.4) by $h _ { 1 } , h _ { 2 } , h _ { 3 } , h _ { 4 }$ and $\phi$ is a tight frame of $L _ { 2 } ( \mathbb { R } )$ (see Figure 2). 

An advantage of the tight wavelet frames derived from the UEP is that those systems have fast decomposition and reconstruction algorithms (see [65]), just as the orthonormal wavelet bases of [60]. Detailed discussions of decomposition and reconstruction algorithms are given in Section 1.4 for the univariate case and Section 3 for multivariate case. 

## 1.3. Approximations

In this section, we focus on approximation properties of tight frame systems $X ( \Psi )$ ) constructed from the UEP, its relations with approximation order of the underlying MRA, and vanishing moments of Ψ. 

In Lecture 1 we introduced the concept of approximation order of MRA. Here, we introduce the concepts of vanishing moments and approximation orders of tight frame systems X(Ψ) as follows. 

Definition 2.1. Let $X ( \Psi )$ be a tight frame system constructed from the UEP with the underlying MRA generated by the refinable function $\phi .$ 

(1) We say that the tight frame system $X ( \Psi )$ has vanishing moments of order $m _ { 0 }$ if $\widehat { \psi } _ { \ell }$ has a zero of order $m _ { 0 }$ at the origin, i.e. $| \widehat \psi _ { \ell } | = O ( | \cdot | ^ { m _ { 0 } } )$ , for every $\ell = 1 , 2 , \ldots , r$ 

(2) Define the truncated operator of the tight frame system $X ( \Psi )$ as 

$$
\mathcal {Q} _ {n}: f \mapsto \sum_ {\psi \in \Psi , k \in \mathbb {Z}, j <   n} \langle f, \psi_ {j, k} \rangle \psi_ {j, k}.\tag{2.21}
$$

We say that the tight frame system $X ( \psi )$ provides approximation order $m _ { 1 } { \mathrm { ~ i f } } ,$ for all $f \in W _ { 2 } ^ { m _ { 1 } } ( \mathbb { R } )$ , 

$$
\left\| f - \mathcal {Q} _ {n} f \right\| _ {L _ {2} (\mathbb {R})} = O \left(2 ^ {- n m _ {1}}\right).
$$

Since $\Psi$ is constructed from the UEP with the underlying MRA generated by a refinable function $\phi ,$ the order of vanishing moments can be characterized by the masks $\{ \widehat { h } _ { \ell } : \ell = 0 , 1 , \ldots , r \}$ , or ${ \widehat { \phi } } .$ This provides a very convenient way of analyzing  the vanishing moments of Ψ because usually we do not have an explicit formula for Ψ. Now, we summarize this characterization in the following proposition. 

Proposition 2.1. Suppose $\Psi$ is constructed from the UEP. Then it has vanishing moments of order m if and only if one of the following three conditions is satisfied: 

(1) $\begin{array} { r } { \sum _ { \ell = 1 } ^ { r } | \widehat { h } _ { \ell } | ^ { 2 } = O ( | \cdot | ^ { 2 m _ { 0 } } ) . } \end{array}$ ; 

(2) $1 - | \widehat { h } _ { 0 } | ^ { 2 } = O ( | \cdot | ^ { 2 m _ { 0 } } )$ 

(3) $1 - | \widehat \phi | ^ { 2 } = { \cal O } ( | \cdot | ^ { 2 m _ { 0 } } )$ 

Proof. Since Ψ is constructed from UEP, then by (2.6) we have 

$$
\sum_ {\ell = 1} ^ {r} | \widehat {h} _ {\ell} (\cdot) | ^ {2} = 1 - | \widehat {h} _ {0} (\cdot) | ^ {2}.
$$

Furthermore, since $\widehat { \psi } _ { \ell } = \left( \widehat { h } _ { \ell } \widehat { \phi } \right) ( \cdot / 2 )$ and $\widehat { \phi } ( 0 ) = 1$ , it is clear that $\begin{array} { r } { \sum _ { \ell = 1 } ^ { r } | \widehat { h } _ { \ell } ( \cdot ) | ^ { 2 } = } \end{array}$ $O ( | \cdot | ^ { 2 m _ { 0 } } )$ if and only $\mathrm { i f } | \widehat \psi _ { \ell } | = O ( | \cdot | ^ { m _ { 0 } } )$ for all $\ell = 1 , 2 , \ldots , r .$ , which establishes (1) and (2). 

Let us consider (3). By the refinability of φ, we have 

$$
| \widehat {h} _ {0} | ^ {2} | \widehat {\phi} | ^ {2} = | \widehat {\phi} (2 \cdot) | ^ {2}.
$$

Then 

$$
(1 - | \widehat {h} _ {0} | ^ {2}) | \widehat {\phi} | ^ {2} = | \widehat {\phi} | ^ {2} - | \widehat {\phi} (2 \cdot) | ^ {2}.\tag{2.22}
$$

Suppose $1 - | \widehat \phi | ^ { 2 } = { \cal O } ( | \cdot | ^ { \tilde { m } } )$ , i.e. $1 - | \widehat \phi | ^ { 2 } = q + o ( | \cdot | ^ { \tilde { m } } )$ near the origin, with q some  homogeneous polynomial of total degree ˜m (here $\tilde { m } > 0$ because $\widehat { \phi } ( 0 ) = 1 )$ . Then near the origin, we have 

$$
| \widehat {\phi} | ^ {2} - | \widehat {\phi} (2 \cdot) | ^ {2} = q (2 \cdot) - q (\cdot) + o (| \cdot | ^ {\tilde {m}}).
$$

Since $q ( 2 \cdot ) - q ( \cdot )$ is a nonzero homogeneous polynomial of total degree $\tilde { m }$ , we see that $| \widehat { \phi } | ^ { 2 } - | \widehat { \phi } ( 2 \cdot ) | ^ { 2 } = { \cal O } ( | \cdot | ^ { \tilde { m } } )$ . Since $\widehat { \phi } ( 0 ) = 1$ and (2) gives us $1 - | \widehat { h } _ { 0 } | ^ { 2 } = O ( | \cdot | ^ { 2 m _ { 0 } } )$ we have $\tilde { m } = 2 m _ { 0 }$ 

Notice from (2.19) in the proof of Theorem 2.2 that if $X ( \Psi )$ is constructed from the UEP with corresponding MRA generated by $\phi ,$ we have 

$$
\mathcal {P} _ {n} f = \mathcal {Q} _ {n} f, \quad \text { for   all } f \in L _ {2} (\mathbb {R}),\tag{2.23}
$$

where $\mathcal { P } _ { n }$ is the quasi-interpolatory operator defined by $\phi$ in (2.11). This means that the approximation order of tight frame system $X ( \Psi )$ is the same as that of $\mathcal { P } _ { n }$ 

We note that when $X ( \Psi )$ forms an orthonormal basis for $L _ { 2 } ( \mathbb { R } )$ , the set $\{ \phi _ { n , k }$ $k \in \mathbb { Z } \}$ forms an orthonormal basis of $V _ { n }$ , and hence $\mathcal { Q } _ { n }$ is an orthogonal projection onto $V _ { n }$ . Therefore, the approximation order of $\mathcal { Q } _ { n }$ , coincides with the approximation order of the underlying MRA. The same may not be true when $X ( \Psi )$ is a tight frame for $L _ { 2 } ( \mathbb { R } )$ ). In general, approximation order of $\mathcal { Q } _ { n }$ cannot exceed the approximation order provided by the underlying MRA. 

The following theorem of [65] shows how the approximation order of the tight frame system $X ( \Psi )$ depends on the refinable functions and framelets. The proof of it is a direct consequence of Theorem 1.5 and Proposition 2.1. 

Theorem 2.3. [65] Let $X ( \Psi )$ be a tight frame system constructed from the UEP with underlying MRA generated by φ. Assume that Ψ has vanishing moments of order m (equivalently, $1 - | \widehat \phi | ^ { 2 } = { \cal O } ( | \cdot | ^ { 2 m _ { 0 } } )$ by Proposition 2.1) and that the refinable function $\phi$ satisfies $[ \widehat { \phi } , \widehat { \phi } ] - | \widehat { \phi } | ^ { 2 } = { \cal O } ( | \cdot | ^ { 2 m } )$ . Then the approximation order of the tight frame system is $m _ { 1 } = \operatorname* { m i n } \{ m , 2 m _ { 0 } \}$ 

It is easy to verify that for an arbitrary B-spline $B _ { m } .$ , the order of the zero of $1 - | \widehat { B } _ { m } | ^ { 2 }$ at the origin cannot exceed 2. Then Theorem 2.3 implies that the tight frame system $X ( \Psi )$ constructed from $B _ { m }$ via the UEP (the corresponding masks are given by $\left( 2 . 2 0 \right) )$ cannot have approximation order more than 2 (in fact, it is exactly 2 for all $m \geq 2 )$ . Furthermore, Proposition 2.1 tells us that there is at least one wavelet among Ψ that has a vanishing moment of order 1. High order of approximation of a tight frame system $X ( \Psi )$ gives good approximations to smooth functions. Furthermore, the high orders of vanishing moments of the framelets provide good sparse approximations to piecewise smooth functions. Hence, in order to have a good tight wavelet system, we need to have refinable functions whose Fourier transform are very flat at the origin. This leads to the introduction of pseudo-splines in [65, 75]. We revisit this issue with full details in Lecture 3. 

Next, we briefly discuss how the order of vanishing moments plays a role in sparse approximation of piecewise smooth functions. The theory of the sparse approximation is based on nonlinear approximation and the characterization of various function spaces by a weighted norm of framelet coeficients. Here, we only provide some hubristic discussions. Interested readers should consult [9, 10, 106, 134] for comprehensive studies of this subject. 

We start with the following proposition. It roughly says that when a wavelet function ψ has a high order vanishing moment, the majority of the corresponding wavelet coeficients are small. Hence, if all mother wavelets in Ψ have high vanishing moments, then the system $X ( \Psi )$ can have a good sparse approximation to piecewise smooth functions. We note that a compactly supported wavelet ψ having order of vanishing moments m is equivalent to 

$$
\int x ^ {k} \psi (x) d x = 0, \quad \text { for   all } 0 \leq k \leq m - 1.
$$

Proposition 2.2. $I f \psi \in L _ { 2 } ( \mathbb { R } )$ is a compactly supported function with order of vanishing moments m, then 

$$
\langle f, \psi_ {n, k} \rangle = O (\frac {1}{m !} 2 ^ {- n (m + 1 / 2)})
$$

for any $f \in L _ { 2 } ( \mathbb { R } ) \cap C ^ { m } ( \mathbb { R } )$ , when n is large enough. 

Proof. Without loss of generality, we assume $k ~ = ~ 0$ Then $\operatorname { s u p p } \psi _ { n , 0 } ~ =$ $2 ^ { - n } \operatorname { s u p p } \psi \ \subseteq \ ( - \varepsilon , \varepsilon )$ for some small $\varepsilon \ > \ 0$ when n is large enough. So, by $f \in C ^ { m } ( \mathbb { R } )$ 2 

$$
f (x) = f (0) + f ^ {\prime} (0) x + \dots + f ^ {(m - 1)} (0) x ^ {m - 1} / (m - 1)! + f ^ {(m)} (\zeta_ {x}) x ^ {m} / m!, \quad x \in (- \varepsilon , \varepsilon).
$$

So, we have 

$$
\begin{array}{l} \left| \int_ {\mathbb {R}} f (x) \psi_ {n, 0} (x) d x \right| = 2 ^ {n / 2} \left| \int_ {\mathbb {R}} f (0) \psi (2 ^ {n} x) d x + \int_ {\mathbb {R}} f ^ {\prime} (0) x \psi (2 ^ {n} x) d x + \dots \right. \\ \quad + \int_ {\mathbb {R}} f ^ {(m - 1)} (0) \frac {x ^ {m - 1}}{(m - 1) !} \psi (2 ^ {n} x) d x + \int_ {\mathbb {R}} f ^ {(m)} (\zeta_ {x}) \frac {x ^ {m}}{m !} \psi (2 ^ {n} x) d x \Bigg | \\ \leq \frac {2 ^ {n / 2}}{m !} \| f ^ {(m)} \| _ {\infty} \int_ {\mathbb {R}} | x | ^ {m} | \psi (2 ^ {n} x) | d x \\ = \frac {2 ^ {- n (m + 1 / 2)}}{m !} \| f ^ {(m)} \| _ {\infty} \int_ {\mathbb {R}} | x | ^ {m} | \psi (x) | d x \end{array}
$$

which completes the proof. 

Since $\psi$ is compactly supported, the above proof can be modified to show that the majority of wavelet coeficients not near singularities can be small when $f$ is a piecewise smooth function. This indicates that if all mother wavelets in Ψ have high orders of vanishing moments and short supports, then the system $X ( \Psi )$ can have an ideally sparse approximation for piecewise smooth functions. However, higher orders of vanishing moments usually imply larger supports of $\Psi ,$ and shorter supports usually implies lower orders of vanishing moments of Ψ. Therefore, in practice, one should balance accordingly between the two properties as well as other properties like the regularity of $\Psi .$ , for each type of application. 

## 1.4. Decomposition and Reconstruction Algorithms

The decomposition and reconstruction algorithms for MRA-based tight wavelet frames derived from the $\mathrm { U E P }$ is essentially the same as those of MRA-based orthonormal wavelets. Here, we assume that all masks used are finitely supported. 

Since 

$$
\mathcal {P} _ {L} f = D ^ {L} \mathcal {P} _ {0} D ^ {- L} f,
$$

without loss of generality, one may use $\mathcal { P } _ { 0 } f \in V _ { 0 }$ to approximate $f .$ If it is necessary, we can always consider the function $f ( 2 ^ { - L } \cdot )$ instead of $f ,$ , since the approximation of a function $f$ in space $V _ { L }$ is the same as that of the function $f ( 2 ^ { - L } \cdot )$ in space $V _ { 0 }$ 

When a tight wavelet frame is used, the given data is considered to be sampled as a local average $v [ k ] = \langle f , \phi ( \cdot - k ) \rangle$ , which means that we can use 

$$
\mathcal {P} _ {0} f = \sum_ {k \in \mathbb {Z}} v [ k ] \phi (\cdot - k)
$$

to approximate the underlying function $f .$ The accuracy of the approximation $\mathcal { P } _ { 0 } f$ to $f$ is discussed in Theorem 1.5 which depends on the sampling function $\phi .$ 

Given the sequence $h _ { \ell } = \{ h _ { \ell } [ k ] \} _ { k \in \mathbb { Z } }$ for any $\ell = 0 , 1 , \ldots , r$ , we define an infinite matrix $H _ { \ell }$ which corresponds to $h _ { \ell }$ as 

$$
H _ {\ell} := (H _ {\ell} [ l, k ]) := (\sqrt {2} \cdot \overline {{h _ {\ell} [ k - 2 l ]}}),
$$

where the $( l , k )$ th entry in $H _ { \ell }$ is fully determined by the $\left( k - 2 l \right)$ th entry in $h _ { \ell }$ . Then for any $v \in \ell _ { 2 } ( \mathbb { Z } )$ , we have 

$$
(H _ {\ell} v) [ l ] = \sqrt {2} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ k - 2 l ]}} v [ k ].
$$

Similarly, we can define $H _ { \ell } ^ { * }$ , the adjoint of $H _ { \ell }$ , as 

$$
(H _ {\ell} ^ {*} v) [ k ] = \sqrt {2} \sum_ {l \in \mathbb {Z}} h _ {\ell} [ k - 2 l ] v [ l ].
$$

Let $\downarrow \ : ( \cdot )$ denote the downsampling operator which is defined as 

$$
\downarrow (v) [ k ] = v [ 2 k ], \quad k \in \mathbb {Z};
$$

and $\uparrow \left( \cdot \right)$ denote the upsampling operator which is defined as 

$$
(\uparrow v) [ k ] = \left\{ \begin{array}{l l} v [ k / 2 ], & k \text {   even }; \\ 0, & k \text {   odd }. \end{array} \right.
$$

Then we have 

$$
H _ {\ell} v = \downarrow (\sqrt {2} \cdot \overline {{h _ {\ell} [ - \cdot ]}} * v) \quad \text { and } \quad H _ {\ell} ^ {*} v = \sqrt {2} h _ {\ell} * (\uparrow v).
$$

In the literature of wavelets, it is traditional to use notations based on convolution with upsampling and downsampling. 

We collect the coeficients in each level $n < 0$ to form an infinite column vector 

$$
v _ {\ell , n} := [ \dots , \langle f, \psi_ {\ell , n, k} \rangle , \dots ] ^ {\top}, \quad \ell = 0, 1, \dots , r,
$$

where $\psi _ { 0 } : = \phi$ . From the proof of Lemma $2 . 1$ , we have shown that (identity (2.16)) 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ j - 2 k ]}} h _ {\ell} [ j ^ {\prime} - 2 k ] = \frac {1}{2} \delta_ {j, j ^ {\prime}},
$$

which is equivalent to 

$$
\sum_ {\ell = 0} ^ {r} H _ {\ell} ^ {*} H _ {\ell} = I.\tag{2.24}
$$

Thus, the decomposition and reconstruction process (2.12) can be written in the matrix form as 

$$
v _ {0, n + 1} = \sum_ {\ell = 0} ^ {r} H _ {\ell} ^ {*} H _ {\ell} v _ {0, n + 1}.
$$

For a multiple level decomposition operator, we define $\mathbf { \mathcal { A } } _ { L } , L < 0$ , as a (rectangular) block matrix given as: 

$$
\mathcal {A} _ {L} := [ H _ {0} ^ {- L}; H _ {1} H _ {0} ^ {- L - 1}; \ldots ; H _ {r} H _ {0} ^ {- L - 1}; \ldots ; H _ {1}; \ldots ; H _ {r} ] ^ {\top}.\tag{2.25}
$$

Then we have the reconstruction operator $\mathcal { A } _ { L } ^ { \ast }$ , the adjoint operator of $\boldsymbol { \mathcal { A } } _ { L }$ defined as 

$$
\mathcal {A} _ {L} ^ {*} = [ H _ {0} ^ {* - L}; H _ {0} ^ {* - L - 1} H _ {1} ^ {*}; \ldots ; H _ {0} ^ {* - L - 1} H _ {r} ^ {*}; \ldots ; H _ {1} ^ {*}; \ldots ; H _ {r} ^ {*} ] ^ {\top}.\tag{2.26}
$$

Similar to (2.24), we have a multi-level perfect reconstruction formula $\boldsymbol { \mathcal { A } } _ { L } ^ { * } \boldsymbol { \mathcal { A } } _ { L } =$ $I ,$ which is summarized in the following proposition; the proof is just straightforward calculation and is omitted. 

Proposition 2.3. The decomposition operator $\boldsymbol { \mathcal { A } } _ { L } ,$ , as defined in (2.25) satisfies $\mathcal { A } _ { L } ^ { * } \mathcal { A } _ { L } = I ,$ , where I is the identity operator. 

In practice, signals are of finite lengths. Therefore, we need a proper definition of operations $H _ { \ell } v$ when $v$ is of finite length. Now suppose $v = \{ v [ k ] \} _ { k = 0 } ^ { N - 1 }$ . We define the periodic and symmetric extensions of v as 

$$
\tilde {v} [ k ] := \left\{ \begin{array}{l l} v [ k \bmod N ], & \text {periodic} \\ v _ {\mathrm{f}} [ k \bmod 2 N ], & \text {symmetric}, \end{array} \right.\tag{2.27}
$$

where $v _ { \mathrm { f } }$ is defined as 

$$
v _ {\mathrm{f}} [ k ] := \left\{ \begin{array}{l l} v [ k ], & k = 0, 1, \ldots , N - 1 \\ v [ 2 N - 1 - k ], & k = N, N + 1, \ldots , 2 N - 1. \end{array} \right.
$$

Therefore, whenever v is of finite length, we define 

$$
H _ {\ell} v := H _ {\ell} \tilde {v},
$$

with ˜v being one of the extensions in (2.27). 

Note that when v is of finite length, the decomposition and reconstruction process can be realized as matrix multiplications (see $\mathrm { e . g . }$ [15, 35]). When ˜v is a periodic or symmetric extension of $v ,$ the operation $H _ { \ell } v$ can be understood as convolutions of v (followed by downsampling) with periodic or Neumann boundary conditions; where, the former is also known as circular convolution. In practice, one normally uses convolutions to implement the operation $H _ { \ell } v$ instead of matrix multiplications due to eficiency considerations. A similar argument applies to $H _ { \ell } ^ { \ast } \cdot$ v as well. 

Algorithm 2.1 is the univariate fast framelet decomposition and reconstruction algorithm; Figure 3 is a diagram of the algorithm. For simplicity of notation, we denote $\tilde { h } _ { \ell } : = \sqrt { 2 } \cdot \overline { { h _ { \ell } [ - \cdot ] } }$ and $\tilde { h } _ { \ell } ^ { \ast } : = \sqrt { 2 } h _ { \ell }$ . For a given finite signal $\boldsymbol { v } \in \mathbb { R } ^ { N }$ , we denote the finite length convolution operation as $\tilde { h } _ { \ell }$ - v (similarly for $\widetilde { h } _ { \ell } ^ { * } \circledast v )$ which is understood as a restriction of $\tilde { h } _ { \ell } * \tilde { v }$ on the set $\{ 0 , 1 , \ldots , N - 1 \}$ : 

$$
\tilde {h} _ {\ell} \circledast v := (\tilde {h} _ {\ell} * \tilde {v}) | _ {\{0, 1, \dots , N - 1 \}},
$$

where $\tilde { v }$ is either periodic or symmetric extension of v. Under this definition, $\tilde { h } _ { \ell } \circledast v$ is a convolution of $\tilde { h } _ { \ell }$ with the finite signal v using either periodic or Neumann boundary conditions. 

Algorithm 2.1. Given signal $v \in \mathbb { R } ^ { N }$ with N assumed to be an integer multiple $o f 2 ^ { L } , L \in \mathbb { N } _ { + }$ . Denote $v _ { 0 , 0 } = v$ . Then the L-level fast framelet decomposition and reconstruction are given as follows: 

(1) Decomposition: For each $j = 1 , 2 , \dots , L$ 

(a) Obtain low frequency approximation to v at level j: 

$$
v _ {0, j} = \downarrow (\tilde {h} _ {0} \circledast v _ {0, j - 1});
$$

(b) Obtain framelet coeficients of v at level j: 

$$
v _ {\ell , j} = \downarrow (\tilde {h} _ {\ell} * v _ {0, j - 1}), \quad \ell = 1, 2, \dots , r.
$$

$$
v _ {0, j - 1} = \sum_ {\ell = 0} ^ {r} \tilde {h} _ {\ell} ^ {*} \circledast (\uparrow v _ {\ell , j}).
$$

(2) Reconstruction: For each $j = L , L - 1 , \dots , 1$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/d3d5f934512b143e10c16157d6101d0522e4235024a8e411c7ca202c52a3eabb.jpg)



Figure 3. The above diagrams illustrate the fast framelet decomposition and reconstruction procedure given by Algorithm 2.1.


## 1.5. Other Extension Principles

The unitary extension principle of [158] was stated in a more general multivariate setting. In fact, the unitary extension principle is a consequence of a more general theorem on MRA-based tight wavelet frames. The details can be found in [158]. Since the publication of [158] in 1997, there are many generalizations of the unitary extension principle. Here, we briefly review some of them. The interested reader should consult the references mentioned below for further details. 

The first generalization of the unitary extension principle is the oblique extension principle of [52, 65]. One of the major motivations to generalize the unitary extension principle is to obtain a spline tight wavelet system with better approximation power. As mentioned before, when the unitary extension principle is applied to construct tight wavelet frames from refinable spline functions, the approximation order of the corresponding truncated wavelet system cannot exceed 2; and there is at least one framelet that has vanishing moments of order 1. 

The oblique extension principle can be used to obtain spline tight frame system whose truncated wavelet system has high approximation order and whose generators have high order vanishing moments. The oblique extension principle is stated as following: 

Proposition 2.4. (The Oblique Extension Principle $( O E P ) \cal { { j } }$ Suppose that the refinable function $\phi$ and the masks h<sub>0</sub>, $\mathbf { \delta } _ { h _ { 1 } , \ldots , h _ { r } }$ satisfy Assumptions $\it { 2 . 1 ; }$ and there exists a 2π-periodic function Θ that is non-negative, essentially bounded, continuous at the origin with $\Theta ( 0 ) = 1$ . Assume that for $\xi \in \sigma ( V _ { 0 } )$ , and $\xi + \pi \in \sigma ( V _ { 0 } )$ , the following equalities 

$$
\begin{array}{l} | \widehat {h} _ {0} (\xi) | ^ {2} \Theta (2 \xi) + \sum_ {\ell = 1} ^ {r} | \widehat {h} _ {\ell} (\xi) | ^ {2} = \Theta (\xi); \\ \widehat {h} _ {0} (\xi) \overline {{\widehat {h} _ {0} (\xi + \pi)}} \Theta (2 \xi) + \sum_ {\ell = 1} ^ {r} \widehat {h} _ {\ell} (\xi) \overline {{\widehat {h} _ {\ell} (\xi + \pi)}} = 0. \end{array}\tag{2.28}
$$

hold. Then the wavelet system $X ( \Psi )$ defined by $h _ { 1 } , \ldots h _ { r }$ is a tight wavelet frame. 

Proof. Setting $\theta : = \Theta ^ { 1 / 2 }$ , we define a function $\varphi$ via $\hat { \varphi } : = \theta \hat { \phi }$ . Since $\theta$ is bounded, $\varphi$ lies in $L _ { 2 } ( \mathbb { R } )$ . Consider the masks 

$$
\hat {\tilde {h}} _ {0} := \frac {\theta (2 \cdot) \hat {h} _ {0}}{\theta}, \quad \hat {\tilde {h}} _ {i} := \frac {\hat {h} _ {i}}{\theta}, i = 1, \ldots , r.
$$

Applying (2.28), we obtain that $\begin{array} { r } { \sum _ { i = 0 } ^ { r } | \hat { \tilde { h } } _ { i } ( \xi ) | ^ { 2 } = 1 , a . e } \end{array}$ . on $\sigma ( V _ { 0 } )$ , hence $\hat { \tilde { h } } _ { i } , \thinspace i =$ $0 , 1 , \ldots , r$ is well-defined and bounded, and $\tilde { h } _ { 0 }$ is the refinement mask of $\varphi .$ Moreover, since Θ is continuous at 0 with $\Theta ( 0 ) = 1$ , we obtain that $\hat { \varphi }$ is continuous at 0 and $\hat { \varphi } ( 0 ) = 1$ . Now, apply the UEP (Theorem 2.2 and remarks after it) to $\hat { \tilde { h } } _ { i }$ , and observe that the wavelets obtained from the masks $\hat { \tilde { h } } _ { i }$ and $\varphi$ are the same as the wavelets induced by $\hat { h } _ { i }$ and $\phi .$ This concludes the proof of the theorem. 

We note that the unitary extension principle can be viewed as a special case of the oblique extension principle by taking Θ to be 1. 

Theorem 2.3 says that when the Fourier transform of the refinable function is not flat at the origin, one can chose a proper Θ which is flat at the origin. The vanishing moments of the resulting framelets have high order of the vanishing moment and the truncated tight wavelet system has a high approximation order. Detailed discussions can be found in [65]. This leads to many nice examples of spline tight wavelet frames with high order of vanishing moment and high approximation power in [52, 64, 65]. 

Example 2.3. Take $\widehat { h } _ { 0 } ( \xi ) = ( 1 + e ^ { - i \xi } ) ^ { 4 } / 1 6$ and 

$$
\Theta (\xi) = 2 4 5 2 / 9 4 5 - 1 6 5 7 / 8 4 0 \cos (\xi) + 4 4 / 1 0 5 \cos (2 \xi) - 3 1 1 / 7 5 6 0 \cos (3 \xi).
$$

Let 

$$
\hat {h} _ {1} (\xi) = t _ {1} \left(1 - e ^ {- i \xi}\right) ^ {4} \Big [ 1 + 8 e ^ {- i \xi} + e ^ {- i 2 \xi} \Big ],\tag{2.29}
$$

$$
\hat {h} _ {2} (\xi) = t _ {2} \left(1 - e ^ {- i \xi}\right) ^ {4} \Big [ 1 + 8 e ^ {- i \xi} + (\frac {7 7 7 5}{4 3 9 6} t - \frac {5 3 8 5 4}{1 0 9 9}) e ^ {- i 2 \xi} + 8 e ^ {- i 3 \xi} + e ^ {- i 4 \xi} \Big ],
$$

$$
\hat {h} _ {3} (\xi) = t _ {3} (1 - e ^ {- i \xi}) ^ {4} \Big [ 1 + 8 e ^ {- i \xi} + (2 1 + \frac {t}{8}) (e ^ {- i 2 \xi} + e ^ {- i 4 \xi})
$$

$$
\left. + t e ^ {- i 3 \xi} + 8 e ^ {- i 5 \xi} + e ^ {- i 6 \xi} \right],
$$

where $t _ { 3 } = { \sqrt { 3 2 6 5 5 } } / 2 0 1 6 0 , t = 3 1 7 7 8 4 / 7 7 7 5 + 5 6 { \sqrt { 1 6 3 2 3 6 9 9 8 9 1 } } / 2 4 1 8 0 2 5 ,$ , and 

$$
t _ {1} = \frac {\sqrt {1 1 1 1 3 7 4 7 5 7 8 3 6 0 - 2 4 5 4 9 3 8 5 6 9 6 5 t}}{6 2 6 9 7 6 0 0}, \qquad t _ {2} = \sqrt {1 5 4 3 0 8 0 - 3 2 6 5 5 t} / 4 0 3 2 0.
$$

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/e20ef3479cdebb2eac2ef24518a90f1115868daf370d17c710a22143f78dd041.jpg)



Figure 4. Figures from left to right are: refinable function $\phi ,$ and framelets ψ<sub>1</sub>, ψ<sub>2</sub> and $\psi _ { 3 }$


The above masks satisfy the OEP conditions, hence they lead to a tight wavelet frame. Here, all the wavelets have vanishing moments of order 4, i.e. $m _ { 0 } = 4$ Furthermore, the mother wavelets $\psi _ { 1 }$ , ψ , ψ are symmetric. Note that for the above given $\phi$ the approximation order of the MRA is $m = 4$ . Hence, the approximation order of the tight wavelet system is $4 = \operatorname* { m i n } ( m , 2 m _ { 0 } )$ . The three filters $\{ h _ { 1 } , h _ { 2 } , h _ { 3 } \}$ are of size 7, 9, 11. The refinable function $\phi$ and the three framelets $\psi _ { 1 }$ , ψ<sub>2</sub> and $\psi _ { 3 }$ are shown in Figure 4 

Since it is impossible to obtain a tight wavelet frame that provides an arbitrary high approximation order from either the unitary extension principle or the oblique extension principle, a new approach is developed in [104]. This new approach of [104] starts with a non-stationary multiresolution analysis that has diferent refinable functions and refinement masks at diferent levels. A non-stationary version of the unitary extension principle is then established and the corresponding wavelet masks are obtained. For a diferent level, the corresponding set of wavelet masks is diferent, since the refinement mask is diferent. Hence, the wavelets and its masks vary by levels. By a proper choice of pseudo-spline masks, symmetric $C ^ { \infty }$ real-valued tight wavelet frames in $L _ { 2 } ( \mathbb { R } )$ with compact support and the spectral frame approximation order are obtained in [104]. Furthermore, these tight wavelet frames are used to characterize Sobolev spaces with arbitrary regularity in [105]. We omit the detailed discussions here and interested readers should consult [104] and [105] for details. 

More recently, a concept of adaptive MRA (AMRA) was introduced in [102] to derive a fast and flexible decomposition strategy which adapts to data and provides a sparse approximation to the underlying function. This new AMRA is a variant of the classical MRA. For the general AMRA wavelet system, a unitary extension principle for filter design is derived. Then, it is applied to the directional representation system of shearlets, which, in turn, leads to the unitary extension principle for shearlets. This leads to a comprehensive theory for fast decomposition and reconstruction algorithms associated with 2D as well as 3D-shearlet systems encompassing tight shearlet frames with spatially compactly supported generators within such an AMRA structure. Furthermore, within the framework of [102] shearlet-like systems associated with parabolic scaling and unimodular matrices optimally close to rotation are studied. 

Finally, both the unitary extension principle and the oblique extension principle can be generalized to a bi-frame setting which is called the mixed extension principle. Interested reader should consult [52, 65, 157] where the mixed extension principle is given in the multivariate setting with an arbitrary integer dilation matrix. 

Furthermore, the mixed extension principle for $L _ { 2 } ( \mathbb { R } ^ { d } ) )$ of [157] is generalized for a pair of dual Sobolev spaces $H ^ { s } ( \mathbb { R } ^ { d } )$ and $H ^ { - s } ( \mathbb R ^ { d } )$ in [106]. Here, we briefly discuss the univariate case and encourage the reader to consult [106] for details of the multivariate case. The mixed extension principle is given to ensure that a pair of systems $X ^ { s } ( \phi ; \psi _ { 1 } , \ldots , \psi _ { r } )$ and $X ^ { - s } ( { \tilde { \phi } } ; { \tilde { \psi } } _ { 1 } , \ldots , { \tilde { \psi } } _ { r } )$ form a dual wavelet frame pair in the corresponding dual Sobolev spaces $H ^ { s } ( \mathbb R )$ and $H ^ { - s } ( \mathbb { R } )$ . Recall that the system $X ^ { s } ( \phi , \Psi ) : = X ^ { s } ( \phi ; \psi _ { 1 } , \dots , \psi _ { r } )$ is called a homogenous wavelet system generated by φ and $\Psi : = \{ \psi _ { 1 } , \ldots , \psi _ { r } \} , \mathrm { i . e . }$ • 

$$
X ^ {s} (\phi , \Psi) := \{\phi (\cdot - k): k \in \mathbb {Z} ^ {d} \} \cup \left\{2 ^ {n (d / 2 - s)} \psi_ {\ell} \left(2 ^ {n} \cdot - k\right): n \in \mathbb {N} _ {0}, k \in \mathbb {Z} ^ {d}, 1 \leq \ell \leq r \right\}.
$$

The key new feature in this general mixed extension principle is that the regularity and vanishing moment are shared by two diferent systems in the dual pair. In this case, if $\phi , \psi _ { 1 } , \ldots , \psi _ { n }$ are in $H ^ { s } ( \mathbb R )$ for $s > 0$ , then the regularity of $\phi , \psi _ { 1 } , \ldots , \psi _ { n }$ is required, but $\psi _ { 1 } , \ldots , \psi _ { r }$ <sub>r</sub> is not required to have any order of vanishing moment. At the same time, the vanishing moments of $\tilde { \psi } _ { 1 } , \ldots , \tilde { \psi } _ { r }$ are required, while $\tilde { \phi } , \tilde { \psi } _ { 1 } , \ldots , \tilde { \psi } _ { r }$ are in $H ^ { - s } ( \mathbb R )$ can be tempered distributions instead of in $L _ { 2 } ( \mathbb { R } )$ . (Note that in order to have a dual pair in $L _ { 2 } ( \mathbb { R } )$ , both systems in the dual pair must have a certain order of regularity and vanishing moment at the same time.) This implies that it is not necessary for the systems $X ^ { s } ( \phi ; \psi _ { 1 } , \ldots , \psi _ { r } )$ and $X ^ { - s } ( { \tilde { \phi } } ; { \tilde { \psi } } _ { 1 } , \dots , { \tilde { \psi } } _ { r } )$ to be normalized into a frame of $L _ { 2 } ( \mathbb { R } )$ . This leads to many simple constructions of frames in an arbitrarily given Sobolev space. For example, let $B _ { m }$ be the Bspline of order $m .$ . Then by [106], $\{ 2 ^ { j ( 1 / 2 - s ) } B _ { m } ( 2 ^ { j } \cdot - k ) \quad : \quad j \in \mathbb { N } _ { 0 } , k \in \mathbb { Z } \}$ is a wavelet frame in $H ^ { s } ( \mathbb R )$ for any $0 < s < m - 1 / 2$ This construction is applied to multivariate box splines to obtain wavelet frames with small supports, which is known to be dificult if the traditional approach is taken. Recall that in the traditional approach, frames in Sobolev spaces are obtained by normalizing a frame in $L _ { 2 } ( \mathbb { R } )$ to a frame in Sobolev space. Since it is hard to construct small support wavelet frames in $L _ { 2 } ( \mathbb { R } ^ { d } )$ in general, it is dificult to obtain small support frames in Sobolev spaces by this traditional method. Also, this general mixed extension principle also naturally leads to a characterization of the Sobolev norm of a function in terms of the weighted norm of its wavelet coeficient sequence (decomposition sequence) without requiring that dual wavelet frames be in $L _ { 2 } ( \mathbb { R } )$ This approach is quite diferent from others in the literature (see e.g. [10, 9, 108, 134]). Furthermore, applying this general mixed extension principle obtains a characterization for a pair of systems $X ^ { s } ( \phi ; \psi _ { 1 } , \ldots , \psi _ { r } )$ and $X ^ { - s } ( { \tilde { \phi } } ; { \tilde { \psi } } _ { 1 } , \dots , { \tilde { \psi } } _ { r } )$ in Sobolev spaces $H ^ { s } ( \mathbb R )$ and $H ^ { - s } ( \mathbb R ) )$ ) that form a pair of dual Riesz bases. This characterization, for example, leads to a proof of the fact that all interpolatory wavelet systems defined in [76] generated by an interpolatory refinable function $\phi \in H ^ { s } ( \mathbb R )$ with $s > 1 / 2$ are Riesz bases of the Sobolev space $H ^ { s } ( \mathbb R )$ 

## 2. Quasi-afine Systems and Associated Algorithms

In the context of signal and image processing, it is usually preferred to use wavelet systems that are shift-invariant. Recall that a system X, that contains countably many elements, is τ-shift-invariant with $\tau \in \mathbb { R }$ , if for any $k \in  { \mathbb { Z } }$ and $g \in X$ , we have $g ( \cdot - \tau k ) \in X$ . In particular, if a system is 1-shift-invariant, we simply call it shift-invariant. Notice that the wavelet system (afine system) $X ( \Psi )$ defined by (2.1) is not shift-invariant. In order to achieve shift-invariance, we need to over-sample the afine system $X ( \Psi )$ below level 0. This over-sampled afine system is called a quasi-afine system, which was first introduced in [158]. One implicitly uses quasi-afine systems when the wavelet decomposition algorithm is applied without downsampling [57]. This type of wavelet transform is also known as the undecimated wavelet transform. As a consequence, the theory of quasiafine systems established in [158] also provides a theoretic foundation of using the undecimated wavelet transform which was not available in the literature before. The definition of quasi-afine system is given as follows. Note that most part of this section is taken from [32]. 

## 2.1. Quasi-afine Systems

The notion of quasi-afine systems was first introduced and extensively studied in [158]. 

Definition 2.2. Let $\Psi = \{ \psi _ { 1 } , \ldots , \psi _ { r } \}$ be a set of functions. A quasi-afine system from level L is defined as 

$$
X _ {L} ^ {q} (\Psi) = \{\psi_ {\ell , n, k} ^ {q}: 1 \leq \ell \leq r; n, k \in \mathbb {Z} \},
$$

where $\psi _ { \ell , n , k } ^ { q }$ is defined by 

$$
\psi_ {\ell , n, k} ^ {q} := \left\{ \begin{array}{c l} \mathcal {D} ^ {n} T _ {k} \psi_ {\ell}, & n \geq L; \\ 2 ^ {\frac {n - L}{2}} T _ {2 ^ {- L} k} \mathcal {D} ^ {n} \psi_ {\ell}, & n <   L. \end{array} \right.
$$

The quasi-afine system is obtained by over sampling the wavelet frame system starting from level $L - 1$ and downward. Hence, the whole quasi-afine system is a $2 ^ { - L }$ -shift-invariant system. The quasi-afine system from level 0 was first introduced in [158] to convert a non-shift invariant afine system to a shift invariant system. Further, it was shown in [158, Theorem 5.5] that a wavelet system $X ( \Psi )$ (not necessarily an MRA-based wavelet system) is a tight frame of $L _ { 2 } ( \mathbb { R } )$ if and only if the corresponding quasi-afine counterpart $X _ { L } ^ { q } ( \Psi )$ is a tight frame of $L _ { 2 } ( \mathbb { R } )$ . In fact, this result plays important roles in the proof of Theorem 2.1 by using the dual Gramian analysis. This result enables us to convert a wavelet system into a shift invariant system which makes it possible to use the powerful tool of the dual Gramian analysis of [156, 162]. Note that dual Gramian analysis of [156] is designed for shift invariant systems. 

Here we provide a direct proof of a special case of [158, Theorem 5.5], the case for the MRA-based wavelet system, in Theorem 2.4. Precisely speaking, we prove that the quasi-afine system $X _ { L } ^ { q } ( \Psi )$ is a tight frame for $L _ { 2 } ( \mathbb { R } )$ if Ψ is constructed from UEP (Theorem 2.2). 

When we consider the MRA-based quasi-afine system $X _ { L } ^ { q } ( \Psi )$ generated by Ψ, the spaces $V _ { n } , n < L$ in the MRA for the afine system are replaced by $V _ { n } ^ { q , L } , n < L ,$ for the quasi-afine system. Note that the space $V _ { n }$ is spanned by the functions $\phi _ { n , k }$ while the space $V _ { n } ^ { q , L }$ is spanned by functions $\phi _ { n , k } ^ { q }$ , where $\phi _ { n , k } ^ { q }$ is defined by 

$$
\phi_ {n, k} ^ {q} := \left\{ \begin{array}{c l} \mathcal {D} ^ {n} T _ {k} \phi , & n \geq L; \\ 2 ^ {\frac {n - L}{2}} T _ {2 ^ {- L} k} \mathcal {D} ^ {n} \phi , & n <   L. \end{array} \right.
$$

The spaces $V _ { n } ^ { q , L }$ for all $n \in \mathbb { Z }$ are $2 ^ { - L }$ -shift invariant. 

Similar to an afine system, we can define the quasi-interpolatory operator $\mathcal { P } _ { n } ^ { q , L }$ and the truncated operator $\mathcal { Q } _ { n } ^ { q , L } , n \in \mathbb { Z } .$ , for the quasi-afine system by 

$$
\mathcal {P} _ {n} ^ {q, L}: f \mapsto \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {n, k} ^ {q} \rangle \phi_ {n, k} ^ {q}\tag{2.30}
$$

and 

$$
\mathcal {Q} _ {n} ^ {q, L}: f \mapsto \sum_ {\ell = 1} ^ {r} \sum_ {j <   n, k \in \mathbb {Z}} \langle f, \psi_ {\ell , j, k} ^ {q} \rangle \psi_ {\ell , j, k} ^ {q}.\tag{2.31}
$$

Whenever $\{ \phi _ { n , k } ^ { q } : k \in \mathbb { Z } \}$ is a Bessel system, the quasi-interpolatory operator $\mathcal { P } _ { n } ^ { q , L }$ maps $f \in L _ { 2 } ( \mathbb { R } )$ into $V _ { n } ^ { q , L }$ . From the definition of $\phi _ { n , k } ^ { q }$ , we can see that $\mathcal { P } _ { n } ^ { q , L } = \mathcal { P } _ { n }$ when $n \geq L$ , and that these two operators are diferent only when $n < L$ . Moreover, since for an arbitrary $f \in L _ { 2 } ( \mathbb { R } )$ and $n < L$ ， 

$$
\begin{array}{c} \mathcal {P} _ {n} ^ {q, L} f = \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {n, k} ^ {q} \rangle \phi_ {n, k} ^ {q} = \mathcal {D} ^ {L} \sum_ {k \in \mathbb {Z}} \langle \mathcal {D} ^ {- L} f, 2 ^ {\frac {n - L - 0}{2}} T _ {k} \mathcal {D} ^ {n - L} \phi \rangle 2 ^ {\frac {n - L - 0}{2}} T _ {k} \mathcal {D} ^ {n - L} \phi \\ = \mathcal {D} ^ {L} \mathcal {P} _ {n - L} ^ {q, 0} D ^ {- L} f, \end{array}
$$

one only needs to understand the case $L = 0$ . In this case we simplify our notation by setting 

$$
\mathcal {P} _ {n} ^ {q} := \mathcal {P} _ {n} ^ {q, 0}, \quad \mathcal {Q} _ {n} ^ {q} := \mathcal {Q} _ {n} ^ {q, 0}\tag{2.32}
$$

for the quasi-interpolatory operators and $V _ { n } ^ { q } : = V _ { n } ^ { q , 0 }$ , for $n \in \mathbb { Z }$ . From now on, we only give the properties for $\mathcal { P } _ { n } ^ { q }$ , the corresponding spaces $V _ { n } ^ { q }$ , and the associated quasi-afine system $X ^ { q } ( \Psi ) : = X _ { 0 } ^ { q } ( \Psi )$ . The corresponding results for the over sampling rate of $2 ^ { - L } \mathbb { Z }$ can be obtained in a similar manner. 

Also, for operator ${ \mathcal { P } } _ { n } ^ { q } , ~ n ~ \in ~ \mathbb { Z } ,$ we have a decomposition and reconstruction formula similar to (2.12). Similar to the presentation of afine systems, we present proof of Lemma 2.4 in the Fourier domain under Assumption 2.1, and in the time domain with some additional assumptions. 

Lemma 2.4. Let $X ( \Psi )$ , where the framelets $\Psi = \{ \psi _ { 1 } , \ldots , \psi _ { r } \}$ , be the afine tight frame system obtained from the UEP with corresponding refinable function φ and the set of refinement masks $\{ h _ { 0 } , h _ { 1 } , \ldots , h _ { r } \}$ . Let $X ^ { q } ( \Psi )$ be the quasi-afine system derived from $X ( \Psi )$ . Assume that Assumption $\it { 2 . 1 }$ is satisfied. Then we have, for all $f \in L _ { 2 } ( \mathbb { R } )$ 

$$
\mathcal {P} _ {n} ^ {q} f = \mathcal {P} _ {n - 1} ^ {q} f + \sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n - 1, k} ^ {q} \rangle \psi_ {\ell , n - 1, k} ^ {q}.\tag{2.33}
$$

Proof. When $n \geq 0$ , we have $\phi _ { n , k } ^ { q } = \phi _ { n , k }$ and $\psi _ { n , k } ^ { q } = \psi _ { n , k }$ , which imply that 

$$
\mathcal {P} _ {n} f = \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {n, k} \rangle \phi_ {n, k} = \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {n, k} ^ {q} \rangle \phi_ {n, k} ^ {q} = \mathcal {P} _ {n} ^ {q} f,
$$

and 

$$
\sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n, k} ^ {q} \rangle \psi_ {\ell , n, k} ^ {q} = \sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n, k} \rangle \psi_ {\ell , n, k}.
$$

Then (2.12) implies that 

$$
\begin{array}{c} \mathcal {P} _ {n} ^ {q} f = \mathcal {P} _ {n} f = \mathcal {P} _ {n - 1} f + \sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n - 1, k} \rangle \psi_ {\ell , j, k} \\ = \mathcal {P} _ {n - 1} ^ {q} f + \sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n - 1, k} ^ {q} \rangle \psi_ {\ell , n - 1, k} ^ {q}, \end{array}
$$

i.e. the identity (2.33) holds when $n \geq 1$ . Next, we show (2.33) holds for $n \leq 0$ We denote $\phi$ as ψ<sub>0</sub>. 

First, we note that the system $\{ \psi _ { \ell , n , k } ^ { q } : k \in \mathbb { Z } \}$ for any given $\ell = 0 , 1 , \ldots , r$ and $n \leq 0$ is a Bessel system. Indeed, by Assumption 2.1, we know that $\{ \psi _ { \ell , n , k } : k \in \mathbb { Z } \}$ is a Bessel system, i.e. there exists constant $0 < C < \infty$ such that for all $f \in L _ { 2 } ( \mathbb { R } )$ 

$$
\sum_ {k \in \mathbb {Z}} | \langle f, \psi_ {\ell , n, k} \rangle | ^ {2} \leq C \| f \| _ {L _ {2} (\mathbb {R})} ^ {2}.
$$

Notice that 

$$
\begin{array}{c} \{\psi_ {\ell , n, k} ^ {q}: k \in \mathbb {Z} \} = \{2 ^ {n} \psi_ {\ell} (2 ^ {n} x - 2 ^ {n} k): k \in \mathbb {Z} \} \\ = \bigcup_ {l \in \mathbb {Z} / 2 ^ {- n} \mathbb {Z}} \{2 ^ {n} \psi_ {\ell} (2 ^ {n} (\cdot - l) - k): k \in \mathbb {Z} \}. \end{array}
$$

By a simple change of variables, one can easily check that the system $\{ 2 ^ { n } \psi _ { \ell } ( 2 ^ { n } ( \cdot -$ $l ) - k ) : k \in \mathbb { Z } \}$ is also a Bessel system with bound $2 ^ { n / 2 } { \sqrt { C } }$ for every $l \in \mathbb { Z } / 2 ^ { - n } \mathbb { Z }$ Therefore, we have 

$$
\sum_ {k \in \mathbb {Z}} | \langle f, \psi_ {\ell , n, k} ^ {q} \rangle | ^ {2} \leq C \| f \| _ {L _ {2} (\mathbb {R})} ^ {2}.
$$

Denote 

$$
\mathcal {P} _ {n, \ell} ^ {q} f := \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n, k} ^ {q} \rangle \psi_ {\ell , n, k} ^ {q},
$$

for $\ell = 0 , 1 , \ldots , r .$ . Note that $\mathcal { P } _ { n , 0 } ^ { q } = \mathcal { P } _ { n } ^ { q }$ . Since, the system $\{ \psi _ { \ell , n , k } ^ { q } ; k \in \mathbb { Z } \}$ for each  and n, forms a Bessel system, the operator $\mathcal { P } _ { n , \ell } ^ { q } : L _ { 2 } ( \mathbb { R } ) \to L _ { 2 } ( \mathbb { R } )$ is well-defined. Therefore, to prove (2.33) for $n \leq 0$ , it is equivalent to show 

$$
\widehat {\mathcal {P} _ {n} ^ {q} f} = \sum_ {\ell = 0} ^ {r} \widehat {\mathcal {P} _ {n - 1 , \ell} ^ {q}} f.\tag{2.34}
$$

Letting $I _ { n } : = 2 ^ { n } ( \mathbb { Z } / 2 ^ { - n } \mathbb { Z } )$ , we observe that 

$$
\begin{array}{c} \mathcal {P} _ {n, \ell} ^ {q} f = \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n, k} ^ {q} \rangle \psi_ {\ell , n, k} ^ {q} \\ = 2 ^ {n} \sum_ {\alpha \in I _ {n}} \sum_ {k \in \mathbb {Z}} \langle f, (T _ {\alpha} \psi_ {\ell}) _ {n, k} \rangle (T _ {\alpha} \psi_ {\ell}) _ {n, k}. \end{array}
$$

Then by Proposition 1.3 item (3), we have 

$$
\begin{array}{r l} & {\widehat {\mathcal {P} _ {n , \ell} ^ {q}} f (\xi) = 2 ^ {n} \sum_ {\alpha \in I _ {n}} [ \widehat {f} (2 ^ {n} \cdot), \widehat {T _ {\alpha} \psi_ {\ell}} ] (2 ^ {- n} \xi) \widehat {T _ {\alpha} \psi_ {\ell}} (2 ^ {- n} \xi)} \\ & {\quad = 2 ^ {n} \sum_ {\alpha \in I _ {n}} \sum_ {k \in \mathbb {Z}} \widehat {f} (\xi + 2 ^ {n + 1} k \pi) \overline {{\widehat {T _ {\alpha} \psi_ {\ell}} (\frac {\xi}{2 ^ {n}} + 2 k \pi)}} \widehat {T _ {\alpha} \psi_ {\ell}} (2 ^ {- n} \xi)} \\ & {\quad = 2 ^ {n} \sum_ {\alpha \in I _ {n}} \sum_ {k \in \mathbb {Z}} \widehat {f} (\xi + 2 ^ {n + 1} k \pi) e ^ {i \alpha (2 ^ {- n} \xi + 2 k \pi)} \overline {{\widehat {\psi_ {\ell}} (\frac {\xi}{2 ^ {n}} + 2 k \pi)}} e ^ {- i \alpha 2 ^ {- n} \xi} \widehat {\psi_ {\ell}} (2 ^ {- n} \xi)} \\ & {\quad = 2 ^ {n} \sum_ {\alpha \in I _ {n}} \sum_ {k \in \mathbb {Z}} \widehat {f} (\xi + 2 ^ {n + 1} k \pi) \overline {{\widehat {\psi_ {\ell}} (\frac {\xi}{2 ^ {n}} + 2 k \pi)}} e ^ {i \alpha 2 k \pi} \widehat {\psi_ {\ell}} (2 ^ {- n} \xi)} \\ & {\quad = \sum_ {k \in \mathbb {Z}} \widehat {f} (\xi + 2 ^ {n + 1} k \pi) \overline {{\widehat {\psi_ {\ell}} (\frac {\xi}{2 ^ {n}} + 2 k \pi)}} \left(2 ^ {n} \sum_ {\alpha \in I _ {n}} e ^ {i \alpha 2 k \pi}\right) \widehat {\psi_ {\ell}} (2 ^ {- n} \xi).} \end{array}
$$

Notice that 

$$
2 ^ {n} \sum_ {\alpha \in I _ {n}} e ^ {i \alpha 2 k \pi} = 2 ^ {n} \sum_ {l \in \mathbb {Z} / 2 ^ {- n} \mathbb {Z}} \Big (e ^ {i 2 ^ {n + 1} k \pi} \Big) ^ {l} = \left\{ \begin{array}{l l} 1, & k \in 2 ^ {- n} \mathbb {Z} \\ 0, & k \notin 2 ^ {- n} \mathbb {Z} \end{array} \right..
$$

Therefore 

$$
\begin{array}{l} \widehat {\mathcal {P} _ {n , \ell} ^ {q} f} = \sum_ {k \in 2 ^ {- n} \mathbb {Z}} \widehat {f} (\xi + 2 ^ {n + 1} k \pi) \overline {{\widehat {\psi} _ {\ell} (\frac {\xi}{2 ^ {n}} + 2 k \pi)}} \widehat {\psi} _ {\ell} (2 ^ {- n} \xi) \\ = [ \widehat {f}, \widehat {\psi} _ {\ell} (\frac {\cdot}{2 ^ {n}}) ] \widehat {\psi} _ {\ell} (\frac {\cdot}{2 ^ {n}}). \end{array}
$$

Now, identity (2.34) is equivalent to 

$$
[ \widehat {f}, \widehat {\phi} (\frac {\cdot}{2 ^ {n}}) ] \widehat {\phi} (\frac {\cdot}{2 ^ {n}}) = \sum_ {\ell = 0} ^ {r} [ \widehat {f}, \widehat {\psi} _ {\ell} (\frac {\cdot}{2 ^ {n - 1}}) ] \widehat {\psi} _ {\ell} (\frac {\cdot}{2 ^ {n - 1}}),\tag{2.35}
$$

for $n \leq 0$ . Using $\widehat { \psi } _ { \ell } = \widehat { h } _ { \ell } \big ( \frac { \cdot } { 2 } \big ) \widehat { \phi } \big ( \frac { \cdot } { 2 } \big )$ and the first identity of the UEP condition (2.6), we have 

$$
\sum_ {\ell = 0} ^ {r} [ \widehat {f}, \widehat {\psi} _ {\ell} (\frac {\cdot}{2 ^ {n - 1}}) ] \widehat {\psi} _ {\ell} (\frac {\cdot}{2 ^ {n - 1}}) = \sum_ {\ell = 0} ^ {r} | \widehat {h} _ {\ell} (\frac {\cdot}{2 ^ {n}}) | ^ {2} [ \widehat {f}, \widehat {\phi} (\frac {\cdot}{2 ^ {n}}) ] \widehat {\phi} (\frac {\cdot}{2 ^ {n}}) = [ \widehat {f}, \widehat {\phi} (\frac {\cdot}{2 ^ {n}}) ] \widehat {\phi} (\frac {\cdot}{2 ^ {n}}).
$$

This concludes the proof of (2.35) and hence the lemma follows. 

Remark 2.3. Lemma 2.4 can be proven in the time domain. We prove a simple case here because the proof will reveal some details of the fast framelet decomposition and reconstruction algorithm for quasi-afine systems. For simplicity, we assume that $\psi _ { \ell } .$ , for $\ell = 0 , 1 , \ldots , r ,$ are compactly supported and the masks $h _ { \ell }$ are finite sequences. 

We only need to prove (2.33) for $n \leq 0$ . Since system $\{ \psi _ { \ell , n , k } ^ { q } : k \in \mathbb { Z } \}$ for any given $\ell = 0 , 1 , \ldots , r$ and $n \leq 0$ is a Bessel system, the operators $\mathcal { P } _ { n , \ell } ^ { q } : L _ { 2 } ( \mathbb { R } ) \mapsto$ $L _ { 2 } ( \mathbb { R } )$ , for each  is bounded. Therefore, we only need to show (2.33) for all compactly supported $f .$ 

By the definitions of a refinable equation (1.5) and a framelet (2.4), one obtains for $\ell = 0 , 1 , \ldots , r .$ 

$$
\psi_ {\ell} = 2 \sum_ {k \in \mathbb {Z}} h _ {\ell} [ k ] \phi (2 \cdot - k).
$$

This leads to 

$$
\begin{array}{l} \psi_ {\ell , n - 1, k} ^ {q} = 2 ^ {n - 1} T _ {k} \psi_ {\ell} (2 ^ {n - 1} \cdot) = 2 ^ {n} T _ {k} \left(\sum_ {k ^ {\prime} \in \mathbb {Z}} h _ {\ell} [ k ^ {\prime} ] \psi_ {0} (2 ^ {n} \cdot - k ^ {\prime})\right) \\ \qquad = \sum_ {k ^ {\prime} \in \mathbb {Z}} h _ {\ell} [ k ^ {\prime} ] 2 ^ {n} \psi_ {0} (2 ^ {n} (\cdot - k - 2 ^ {- n} k ^ {\prime})) \\ \qquad = \sum_ {k ^ {\prime} \in 2 ^ {- n} \mathbb {Z}} h _ {\ell} [ 2 ^ {n} k ^ {\prime} ] 2 ^ {n} \psi_ {0} (2 ^ {n} (\cdot - k - k ^ {\prime})). \end{array}
$$

We define the dilated sequence $h _ { \ell , n }$ by 

$$
h _ {\ell , n} [ k ] = \left\{ \begin{array}{c l} h _ {\ell} [ 2 ^ {n} k ], & k \in 2 ^ {- n} \mathbb {Z}; \\ 0, & k \notin 2 ^ {- n} \mathbb {Z}. \end{array} \right.\tag{2.36}
$$

The sequence $h _ { \ell , n }$ is obtained inductively by inserting 0 between every two entries in $h _ { \ell , n + 1 }$ , and $h _ { \ell , 0 } = h _ { \ell }$ . With the dilated sequence, we have 

$$
\psi_ {\ell , n - 1, k} ^ {q} = \sum_ {k ^ {\prime} \in \mathbb {Z}} h _ {\ell , n} [ k ^ {\prime} ] \psi_ {0, n, k + k ^ {\prime}} ^ {q}.
$$

Therefore, we have 

$$
\begin{array}{l} \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n - 1, k} ^ {q} \rangle \psi_ {\ell , n - 1, k} ^ {q} \\ \qquad = \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \left(\sum_ {k ^ {\prime} \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ^ {\prime} ]}} \langle f, \psi_ {0, n, k ^ {\prime} + k} ^ {q} \rangle\right) \left(\sum_ {k ^ {\prime \prime} \in \mathbb {Z}} h _ {\ell , n} [ k ^ {\prime \prime} ] \psi_ {0, n, k ^ {\prime \prime} + k} ^ {q}\right) \\ \qquad = \sum_ {k ^ {\prime} \in \mathbb {Z}} \sum_ {k ^ {\prime \prime} \in \mathbb {Z}} \left(\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k + k ^ {\prime \prime} - k ^ {\prime} ]\right) \langle f, \psi_ {0, n, k ^ {\prime}} ^ {q} \rangle \psi_ {0, n, k ^ {\prime \prime}} ^ {q}, \end{array}
$$

where the switching of summation order is valid since all summations involved are finite sums. 

Now, we focus on showing 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k + k ^ {\prime \prime} - k ^ {\prime} ] = \delta_ {k ^ {\prime} - k ^ {\prime \prime}, 0}.
$$

When $k ^ { \prime } - k ^ { \prime \prime } \in 2 ^ { - n } \mathbb { Z }$ , there exists $p \in \mathbb Z$ such that $k ^ { \prime } - k ^ { \prime \prime } = 2 ^ { - n } p$ and we have 

$$
\begin{array}{l} \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k + k ^ {\prime \prime} - k ^ {\prime} ] = \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k - 2 ^ {- n} p ] \\ \qquad = \sum_ {\ell = 0} ^ {r} \sum_ {k \in 2 ^ {- n} \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k - 2 ^ {- n} p ] \\ \qquad = \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell} [ k ]}} h _ {\ell} [ k - p ] = \delta_ {p, 0}. \end{array}
$$

The last identity follows by (2.9). The sum is nonzero if and only if $p = 0$ , which is equivalent to $k ^ { \prime } = k ^ { \prime \prime }$ . When $k ^ { \prime } - k ^ { \prime \prime } \notin 2 ^ { - n } \mathbb { Z }$ , there exist $p _ { 1 } , p _ { 2 } \in \mathbb { Z }$ and $p _ { 2 } \notin 2 ^ { - n } \mathbb { Z }$ such that $k ^ { \prime } - k ^ { \prime \prime } = 2 ^ { - n } p _ { 1 } + p _ { 2 }$ . Then we have 

$$
\begin{array}{c} \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k + k ^ {\prime \prime} - k ^ {\prime} ] = \sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k - 2 ^ {- n} p _ {1} - p _ {2} ] \\ = \sum_ {\ell = 0} ^ {r} \sum_ {k \in 2 ^ {- n} \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k - 2 ^ {- n} p _ {1} - p _ {2} ]. \end{array}
$$

Since $k - 2 ^ { - n } p _ { 1 } - p _ { 2 } \notin 2 ^ { - n } \mathbb { Z }$ when $k \in 2 ^ { - n } \mathbb { Z }$ , we have $h _ { \ell , n } [ k - 2 ^ { - n } p _ { 1 } - p _ { 2 } ] = 0$ for any $k \in 2 ^ { - n } \mathbb { Z }$ and the last identity is equal to 0. In conclusion, for the dilated filters $h _ { 0 , n } , h _ { 1 , n } , \ldots , h _ { r , n } .$ we still have a result similar to (2.9) 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k - p ] = \delta_ {p, 0}, \quad n \leq 0, p \in \mathbb {Z}.\tag{2.37}
$$

Thus we have proven (2.33), which leads to 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n - 1, k} ^ {q} \rangle \psi_ {\ell , n - 1, k} ^ {q} = \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {0, n, k} ^ {q} \rangle \psi_ {0, n, k} ^ {q} = \mathcal {P} _ {n} ^ {q} f.
$$

This is the identity we need to prove the case when $n \leq 0$ . In all, identity (2.33) holds for any $n \in \mathbb { Z }$ 

Remark 2.4. We note that in the proof of identity (2.12) for the afine system, one needs both identities of (2.6); while in the proof of identity (2.33) for $n \leq 0$ when the quasi-afine system is used, one only needs the first identity of (2.6). 

The next theorem shows that a result similar to (2.23) also holds for quasi-afine systems, and that $X ^ { q } ( \Psi )$ is a tight frame for $L _ { 2 } ( \mathbb { R } )$ 

Theorem 2.4. Let $X ( \Psi )$ , where the framelets $\Psi = \{ \psi _ { 1 } , \ldots , \psi _ { r } \}$ , be the afine tight frame system obtained from the UEP. Then the quasi-afine system $X ^ { q } ( \Psi )$ forms a tight frame for $L _ { 2 } ( \mathbb { R } )$ , and $\mathcal { P } _ { n } ^ { q } f = \mathcal { Q } _ { n } ^ { q } f$ for all $f \in L _ { 2 } ( \mathbb { R } )$ 

Proof. We begin by showing that $\mathcal { P } _ { n } ^ { q } f = \mathcal { Q } _ { n } ^ { q } f$ . Telescoping on (2.33) we have, for any $f \in L _ { 2 } ( \mathbb { R } )$ and $n > n ^ { \prime }$ 

$$
\mathcal {P} _ {n} ^ {q} f = \mathcal {P} _ {n ^ {\prime}} ^ {q} f + \sum_ {\ell = 1} ^ {r} \sum_ {j = n ^ {\prime}} ^ {n - 1} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , j, k} ^ {q} \rangle \psi_ {\ell , j, k} ^ {q}.\tag{2.38}
$$

Thus the proof of $\mathcal { P } _ { n } ^ { q } f = \mathcal { Q } _ { n } ^ { q } f$ is transferred to the proof of $P _ { n ^ { \prime } } ^ { q } f \to 0$ as $n ^ { \prime } \to - \infty$ Since we are interested in the behavior of $P _ { n ^ { \prime } } ^ { q }$ as $n ^ { \prime }  - \infty$ , we now assume that $n ^ { \prime } < 0$ 

As shown in the proof of Lemma 2.4, $\{ \phi _ { n ^ { \prime } , k } ^ { q } : k \in \mathbb { Z } \}$ is a Bessel system for any given $n ^ { \prime } \in \mathbb { Z }$ . Thus, we have 

$$
\sum_ {k \in \mathbb {Z}} | \langle f, \phi_ {n ^ {\prime}, k} ^ {q} \rangle | ^ {2} \leq C \| f \| _ {L _ {2} (\mathbb {R})} ^ {2}.
$$

Using the above inequality and 

$$
\mathcal {P} _ {n ^ {\prime}} ^ {q} f = \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {n ^ {\prime}, k} ^ {q} \rangle \phi_ {n ^ {\prime}, k} ^ {q},
$$

we have the norm of $\mathcal { P } _ { n ^ { \prime } } ^ { q } f$ satisfying 

$$
\| \mathcal {P} _ {n ^ {\prime}} ^ {q} f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq C \sum_ {k \in \mathbb {Z}} | \langle f, \phi_ {n ^ {\prime}, k} ^ {q} \rangle | ^ {2}.\tag{2.39}
$$

Based on routine arguments in approximation theory, we only need to check the value of $\| \mathcal { P } _ { n ^ { \prime } } ^ { q } f \| _ { L _ { 2 } ( \mathbb { R } ) }$ when f is supported on an interval $[ - R , R ]$ for an arbitrary given $R > 0$ . Applying the Cauchy-Schwartz inequality to (2.39), we have, 

$$
\begin{array}{c} \| \mathcal {P} _ {n ^ {\prime}} ^ {q} f \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq C \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \sum_ {k \in \mathbb {Z}} \int_ {[ - R, R ]} \Big | 2 ^ {n ^ {\prime}} \phi (2 ^ {n ^ {\prime}} (x - k)) \Big | ^ {2}   \mathrm{d} x \\ = 2 ^ {n ^ {\prime}} C \| f \| _ {L _ {2} (\mathbb {R})} ^ {2} \sum_ {k \in \mathbb {Z}} \int_ {E _ {n ^ {\prime}, k}} | \phi (x) | ^ {2}   \mathrm{d} x, \end{array}\tag{2.40}
$$

where $E _ { n ^ { \prime } , k } = 2 ^ { n ^ { \prime } } ( [ - R , R ] - k )$ . Now, we prove that 

$$
2 ^ {n ^ {\prime}} \sum_ {k \in \mathbb {Z}} \int_ {E _ {n ^ {\prime}, k}} | \phi (x) | ^ {2} \mathrm{d} x \to 0, \quad \mathrm{as} n ^ {\prime} \to - \infty .\tag{2.41}
$$

By the monotone convergence theorem, we have 

$$
2 ^ {n ^ {\prime}} \sum_ {k \in \mathbb {Z}} \int_ {E _ {n ^ {\prime}, k}} | \phi (x) | ^ {2} \mathrm{d} x = 2 ^ {n ^ {\prime}} \int \sum_ {k \in \mathbb {Z}} \chi_ {E _ {n ^ {\prime}, k}} | \phi (x) | ^ {2} \mathrm{d} x.
$$

Observe that $\begin{array} { r } { \sum _ { k \in \mathbb { Z } } \chi _ { E _ { n ^ { \prime } , k } } \leq C _ { R } } \end{array}$ with the constant $C _ { R }$ only depending on R. Therefore, we have 

$$
2 ^ {n ^ {\prime}} \sum_ {k \in \mathbb {Z}} \chi_ {E _ {n ^ {\prime}, k}} | \phi (x) | ^ {2} \rightarrow 0 \text { a.e. } \quad \text { and } \quad 2 ^ {n ^ {\prime}} \sum_ {k \in \mathbb {Z}} \chi_ {E _ {n ^ {\prime}, k}} | \phi (x) | ^ {2} \leq C _ {R} | \phi (x) | ^ {2}.
$$

Then, the dominated convergence theorem implies (2.41), and hence (2.38) becomes 

$$
\mathcal {P} _ {n} ^ {q} f = \sum_ {\ell = 1} ^ {r} \sum_ {j <   n} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , j, k} ^ {q} \rangle \psi_ {\ell , j, k} ^ {q} = \mathcal {Q} _ {n} ^ {q} f.
$$

This completes the proof of $\mathcal { P } _ { n } ^ { q } f = \mathcal { Q } _ { n } ^ { q } f .$ 

Since $\mathcal { P } _ { n } ^ { q } f = \mathcal { P } _ { n } f$ for $n \geq 0$ , we have $P _ { n } ^ { q } f = P _ { n } f \to f$ as $n \to \infty$ (by Lemma 2.3). This implies that $X ^ { q } ( \Psi )$ forms a tight frame of $L _ { 2 } ( \mathbb { R } )$ and thus concludes the proof of this theorem. 

From the above theorem, the following result on approximation orders of quasiafine tight frame systems $X ^ { q } ( \Psi )$ is obvious. Note that the approximation order of $X ^ { q } ( \Psi )$ is defined similarly as $X ( \Psi )$ in Definition 2.1. 

Proposition 2.5. Let $X ^ { q } ( \Psi )$ be a quasi-afine tight frame system constructed from UEP with the underlying MRA generated by a refinable function $\phi .$ . Assume that Ψ has vanishing moments of order $m _ { 0 }$ and φ provides approximation order m. Then the approximation order of the quasi-afine tight frame system is $m _ { 1 } = \operatorname* { m i n } \{ m , 2 m _ { 0 } \}$ 

Similar to the afine counterpart, we normally do not perform full levels of decomposition and reconstruction as given by Theorem 2.4. We normally stop at a certain level instead. The following corollary states that by doing so, we still have a tight frame system which includes the shifts of $\phi$ at a certain scale. 

Corollary 2.2. Let $\Psi = \{ \psi _ { \ell } : 1 \leq \ell \leq r \}$ be the set of tight framelets constructed from the UEP with $\phi$ the corresponding refinable function. Then for any given $L \in \mathbb { Z }$ , the system 

$$
X ^ {q} (\phi , \Psi ; L) := \{\phi_ {L, k} ^ {q}, \psi_ {\ell , n, k} ^ {q}: 1 \leq \ell \leq r, n \geq L, k \in \mathbb {Z} \}
$$

forms a tight frame of $L _ { 2 } ( \mathbb { R } )$ , i.e. for any $f \in L _ { 2 } ( \mathbb { R } )$ 

$$
f = \sum_ {k \in \mathbb {Z}} \langle f, \phi_ {L, k} ^ {q} \rangle \phi_ {L, k} ^ {q} + \sum_ {\ell = 1} ^ {r} \sum_ {n \geq L} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , n, k} ^ {q} \rangle \psi_ {\ell , n, k} ^ {q}.
$$

In practical calculations, we always assume that the function we have is $\mathcal { P } _ { 0 } ^ { q } f \in$ $V _ { 0 } ^ { q }$ , and perform decomposition down to $V _ { - L } ^ { q }$ for some $L \in \mathbb { Z } ^ { + }$ . Then the decomposition and reconstruction formula can be written as 

$$
\mathcal {P} _ {0} ^ {q} f = \mathcal {P} _ {- L} ^ {q} f + \sum_ {\ell = 1} ^ {r} \sum_ {j = - L} ^ {- 1} \sum_ {k \in \mathbb {Z}} \langle f, \psi_ {\ell , j, k} ^ {q} \rangle \psi_ {\ell , j, k} ^ {q}.
$$

This process corresponds to the so-called undecimated wavelet decomposition and reconstruction. Details of this process are described in the next section. 

## 2.2. Algorithms for Quasi-Afine Tight Frames

In this subsection we provide the decomposition and reconstruction algorithms for quasi-afine tight frame systems following a similar discussion as in Section 1.4. Since 

$$
\mathcal {P} _ {L} ^ {q, L} f = \mathcal {P} _ {L} f = D ^ {L} \mathcal {P} _ {0} D ^ {- L} f = D ^ {L} \mathcal {P} _ {0} ^ {q} D ^ {- L} f,
$$

one may use $\mathcal { P } _ { 0 } ^ { q } f \in V _ { 0 } ^ { q }$ to approximate $f$ without loss of generality. If it is necessary, we can always consider function $f ( 2 ^ { - L } \cdot )$ instead of $f _ { : }$ since the approximation of a function $f$ in space $V _ { L } ^ { q , L }$ is the same as that of the function $f ( 2 ^ { - L } \cdot )$ in space $V _ { 0 } ^ { q }$ 

In level $n \leq 0$ , the dilated filter is denoted by $h _ { \ell , n }$ , which is defined by (same as (2.36)) 

$$
h _ {\ell , n} [ k ] = \left\{ \begin{array}{l l} h _ {\ell} [ 2 ^ {n} k ], & k \in 2 ^ {- n} \mathbb {Z}; \\ 0, & k \in \mathbb {Z} \backslash 2 ^ {- n} \mathbb {Z}. \end{array} \right.\tag{2.42}
$$

Given a sequence $h _ { \ell , n } = \{ h _ { \ell , n } [ k ] \} _ { k \in \mathbb { Z } }$ for any $\ell = 0 , 1 , \ldots , r .$ , and $n \leq 0$ , we define an infinite matrix $H _ { \ell , n } ^ { q }$ corresponding to $h _ { \ell , n }$ as 

$$
H _ {\ell , n} ^ {q} := (H _ {\ell , n} ^ {q} [ l, k ]) := (\overline {{h _ {\ell , n} [ k - l ]}}),
$$

where the (l, k)th entry in $H _ { \ell , n } ^ { q }$ is fully determined by the $( k - l )$ th entry in $h _ { \ell , n }$ Then for any vector $v \in \ell _ { 2 } ( \mathbb { Z } )$ , we have 

$$
(H _ {\ell , n} ^ {q} v) [ l ] = \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k - l ]}} v [ k ].
$$

Note that the matrix multiplication defined above is in fact the convolution of v with filter $\overline { { h _ { \ell , n } [ - \cdot ] } }$ , i.e. 

$$
H _ {\ell , n} ^ {q} v = \overline {{h _ {\ell , n} [ - \cdot ]}} * v.
$$

We denote $H _ { \ell , n } ^ { q * }$ as the adjoint of $H _ { \ell , n } ^ { q }$ with 

$$
(H _ {\ell , n} ^ {q *} v) [ k ] = \sum_ {l \in \mathbb {Z}} h _ {\ell , n} [ k - l ] v [ l ] = (h _ {\ell , n} * v) [ k ].
$$

We collect the coeficients in each level $n < 0$ to form an infinite column vector 

$$
v _ {\ell , n} := [ \dots , \langle f, \psi_ {\ell , n, k} ^ {q} \rangle , \dots ] ^ {\top}, \quad \ell = 0, 1, \dots , r,
$$

where $\psi _ { 0 } ^ { q } : = \phi ^ { q }$ . From the proof of Lemma 2.4, we have shown that (identity (2.37)) 

$$
\sum_ {\ell = 0} ^ {r} \sum_ {k \in \mathbb {Z}} \overline {{h _ {\ell , n} [ k ]}} h _ {\ell , n} [ k - p ] = \delta_ {p, 0}, \quad p \in \mathbb {Z}.
$$

which is equivalent to 

$$
\sum_ {\ell = 0} ^ {r} H _ {\ell , n} ^ {q *} H _ {\ell , n} ^ {q} = I.\tag{2.43}
$$

Thus, the decomposition and reconstruction process (2.33) can be written in matrix form as 

$$
v _ {0, n} = \sum_ {\ell = 0} ^ {r} H _ {\ell , n} ^ {q *} H _ {\ell , n} ^ {q} v _ {0, n} \quad n \leq 0.
$$

For a multiple level decomposition operator, we define $\mathcal { A } _ { L } ^ { q }$ , for $L \ < \ 0$ , as a (rectangular) block matrix given as: 

$$
\mathcal {A} _ {L} ^ {q} := \left[ \left(\prod_ {n = L} ^ {0} H _ {0, n} ^ {q}\right); \left(H _ {1, L} ^ {q} \prod_ {n = L + 1} ^ {0} H _ {0, n} ^ {q}\right); \dots ; \left(H _ {r, L} ^ {q} \prod_ {n = L + 1} ^ {0} H _ {0, n} ^ {q}\right); \dots ; H _ {1, 0} ^ {q}; \dots ; H _ {r, 0} ^ {q} \right] ^ {\top},\tag{2.44}
$$

where the product of operators is defined as, 

$$
\prod_ {n = L _ {1}} ^ {L _ {2}} T _ {n} := T _ {L _ {1}} T _ {L _ {1} + 1} \dots T _ {L _ {2}}.
$$

Then, we have the reconstruction operator $\mathcal { A } _ { L } ^ { q * }$ , the adjoint operator of $\mathcal { A } _ { L } ^ { q }$ , defined as 

$$
\mathcal {A} _ {L} ^ {q *} = [ \big (\prod_ {n = 0} ^ {L} H _ {0, n} ^ {q *} \big); \big (\prod_ {n = 0} ^ {L + 1} H _ {0, n} ^ {q *} H _ {1, L} ^ {q *} \big); \ldots ; \big (\prod_ {n = 0} ^ {L + 1} H _ {0, n} ^ {q *} H _ {r, L} ^ {q *} \big); \ldots ; H _ {1, 0} ^ {q *}; \ldots ; H _ {r, 0} ^ {q *} ].\tag{2.45}
$$

For the case $L = 0$ , we denote 

$$
\mathcal {A} _ {0} ^ {q} := [ H _ {0, 0} ^ {q}; H _ {1, 0} ^ {q}; \ldots ; H _ {r, 0} ^ {q} ] ^ {\top}; \quad \mathcal {A} _ {0} ^ {q *} := [ H _ {0, 0} ^ {q *}; H _ {1, 0} ^ {q *}; \ldots ; H _ {r, 0} ^ {q *} ].
$$

The next proposition shows that the decomposition and reconstruction process is perfect, i.e. $\mathcal { A } _ { L } ^ { q * } \mathcal { A } _ { L } ^ { q } = I .$ 

Proposition 2.6. The decomposition operator $\mathcal { A } _ { L } ^ { q }$ , as defined in (2.44) satisfies $\mathcal { A } _ { L } ^ { q * } \mathcal { A } _ { L } ^ { q } = I _ { \mathcal { A } }$ , where I is the identity operator. 

Here, we provide the univariate fast framelet decomposition and reconstruction algorithm for quasi-afine tight frame systems in Algorithm 2.2. For simplicity of notation, we denote $\tilde { h } _ { \ell , n } : = \overline { { h _ { \ell , n } [ - \cdot ] } }$ . For a given finite signal $v \in \mathbb { R } ^ { N }$ , we denote the finite length convolution operation as $\widetilde { h } _ { \ell , n } \circledast \upsilon$ , and understand it to be the restriction of $H _ { \ell , n } \tilde { v } = \tilde { h } _ { \ell , n } * \tilde { v }$ on the set $\{ 0 , 1 , \ldots , N - 1 \}$ : 

$$
\tilde {h} _ {\ell , n} \circledast v := (H _ {\ell , n} \tilde {v}) | _ {\{0, 1, \dots , N - 1 \}} = (\tilde {h} _ {\ell , n} * \tilde {v}) | _ {\{0, 1, \dots , N - 1 \}},
$$

where ˜v is either periodic or a symmetric extension of v given by (2.27). 

Algorithm 2.2. Given signal $v \in \mathbb { R } ^ { N }$ with $N \in  { \mathbb { N } } _ { + }$ Denote $v _ { 0 , 0 } = v$ . Then the L-level fast quasi-afine framelet decomposition and reconstruction is given as follows: 

(1) Decomposition: For each $j = 1 , 2 , \dots , L$ 

(a) Obtain low frequency approximation to v at level $j .$ 

$$
v _ {0, j} = \tilde {h} _ {0, 1 - j} \circledast v _ {0, j - 1};
$$

(b) Obtain framelet coeficients of v at level j: 

$$
v _ {\ell , j} = \tilde {h} _ {\ell , 1 - j} \circledast v _ {0, j - 1}, \quad \ell = 1, 2, \dots , r.
$$

(2) Reconstruction: For each $j = L , L - 1 , \dots , 1$ 

$$
v _ {0, j - 1} = \sum_ {\ell = 0} ^ {r} h _ {\ell , 1 - j} \circledast v _ {\ell , j}.
$$

## 3. Higher Dimension Tight Frame Systems

So far we have focused on univariate tight frame systems. However, almost all theorems and propositions mentioned so far were established in a multivariate setting. For example, the unitary extension principle, the mixed extension principle and the oblique extension principle are stated for a multivariate setting in [65, 158]. In fact, examples of multivariate spline tight frames from Box splines by using the unitary extension principle are provided in [160]. Here, we present simplified versions of them. 

## 3.1. MRA and Tight Frame Systems for $L _ { 2 } ( \mathbb { R } ^ { d } )$

For a given function $\phi \in L _ { 2 } (  { \mathbb { R } } ^ { d } )$ , we define the shift-invariant subspace $V ( \phi ) \subset$ $L _ { 2 } ( \mathbb { R } ^ { d } )$ generated by $\phi$ as 

$$
V (\phi) := \overline {{\operatorname{span} \{\phi (\cdot - k) , k \in \mathbb {Z} ^ {d} \}}},
$$

and denote $V _ { n }$ as the $2 ^ { n }$ -dilate of $V ( \phi )$ , i.e. 

$$
V _ {n} = \overline {{\operatorname{span} \{\phi (2 ^ {n} \cdot - k) , k \in \mathbb {Z} ^ {d} \}}}, n \in \mathbb {Z}.\tag{2.46}
$$

We say that $\{ V _ { n } \} _ { n }$ forms a multiresolution analysis (MRA) for $L _ { 2 } ( \mathbb { R } ^ { d } )$ if the following conditions are satisfied: 

$$
V _ {n} \subset V _ {n + 1}; \quad \overline {{\cup_ {n} V _ {n}}} = L _ {2} (\mathbb {R} ^ {d}); \quad \text { and } \quad \cap_ {n} V _ {n} = \{0 \}.
$$

The function $\phi$ is refinable if 

$$
\phi (x) = 2 ^ {d} \sum_ {k \in \mathbb {Z} ^ {d}} h _ {0} [ k ] \phi (2 x - k)\tag{2.47}
$$

for some $h _ { 0 } \in \ell _ { 2 } (  { \mathbb { Z } } ^ { d } )$ . In frequency domain, the above equation can be rewritten as 

$$
\widehat {\phi} (2 \cdot) = \widehat {h} _ {0} \widehat {\phi}.
$$

The Fourier transform of a function $f \in L _ { 1 } ( \mathbb { R } ^ { d } )$ is defined by 

$$
\widehat {f} (\xi) := \int_ {\mathbb {R} ^ {d}} f (t) e ^ {- i \xi \cdot t} d t, \qquad \xi \in \mathbb {R} ^ {d},
$$

which can be extended to more general function spaces $\begin{array} { r l } { ( \mathrm { e . g . ~ } L _ { 2 } ( \mathbb { R } ^ { d } ) ) } \end{array}$ in a natural manner. The Fourier series of a sequence $h _ { 0 } \in \ell _ { 2 } (  { \mathbb { Z } } ^ { d } )$ is defined as 

$$
\widehat {h} _ {0} (\xi) := \sum_ {j \in \mathbb {Z} ^ {d}} h _ {0} [ j ] e ^ {- i j \cdot \xi}, \qquad \xi \in \mathbb {R} ^ {d}.
$$

The following theorem is the corresponding $\mathbb { R } ^ { d }$ version of Theorem 1.4. 

Theorem 2.5. [115] Let $\phi \in L _ { 2 } (  { \mathbb { R } } ^ { d } )$ , and $V _ { n }$ defined as (2.46). Then, 

(1) $\cap _ { n } V _ { n } = \{ 0 \} .$ ; 

(2) Assume, in addition, that $\phi$ is refinable. Then, 

$$
\overline {{\cup_ {n} V _ {n}}} = L _ {2} (\mathbb {R} ^ {d})
$$

if and only if 

$$
\cap_ {n} 2 ^ {n} Z (\hat {\phi})
$$

is a set of measure zero, where $Z ( \hat { \phi } ) : = \{ \xi \in \mathbb { R } ^ { d } : \hat { \phi } ( \xi ) = 0 \}$ 

In particular, the sequence of subspaces $\{ V _ { n } \} _ { n \in \mathbb { Z } }$ generated by a refinable function $\phi \in L _ { 2 } (  { \mathbb { R } } ^ { d } )$ forms an MRA if either of the following conditions is satisfied: 

(1) $\phi$ is a compactly supported refinable function; 

(2) $\phi$ is refinable and $\widehat { \phi }$ is continuous at 0 with $\widehat { \phi } ( 0 ) \neq 0$ 

Proof. The proof is a direct analog to that of Theorem 1.4. 

With a refinable function $\phi$ generating an MRA for $L _ { 2 } ( \mathbb { R } ^ { d } )$ , we can construct tight frames systems for $L _ { 2 } ( \mathbb { R } ^ { d } )$ 

Definition 2.3. Let $\Psi = \{ \psi _ { 1 } , . . . , \psi _ { r } \}$ be a set of functions. A wavelet/afine system generated by Ψ is defined as 

$$
X (\Psi) = \{\psi_ {\ell , n, k}: 1 \leq \ell \leq r; n \in \mathbb {Z}; k \in \mathbb {Z} ^ {d} \}
$$

where $\psi _ { \ell , n , k }$ is defined by 

$$
\psi_ {\ell , n, k} := \mathcal {D} ^ {n} T _ {k} \psi_ {\ell} := 2 ^ {n d / 2} \psi_ {\ell} (2 ^ {n} \cdot - k).
$$

A quasi-afine system from level 0 is defined as 

$$
X ^ {q} (\Psi) = \{\psi_ {\ell , n, k} ^ {q}: 1 \leq \ell \leq r; n \in \mathbb {Z}; k \in \mathbb {Z} ^ {d} \},
$$

where $\psi _ { \ell , n , k } ^ { q }$ is defined by 

$$
\psi_ {\ell , n, k} ^ {q} := \left\{ \begin{array}{c l} \mathcal {D} ^ {n} T _ {k} \psi_ {\ell}, & n \geq 0; \\ 2 ^ {\frac {n d}{2}} T _ {2 ^ {- L} k} \mathcal {D} ^ {n} \psi_ {\ell}, & n <   0. \end{array} \right.
$$

The following is the unitary extension principle for $L _ { 2 } ( \mathbb { R } ^ { d } )$ which was originally proved in [158]. For simplicity, we assume the underlying refinable function $\phi$ is compactly supported with $\widehat { \phi } ( 0 ) = 1$ and the associated masks are finely supported. Under these assumptions, items 1-3 in Assumption 2.1 are satisfied. 

Theorem 2.6 (Unitary Extension Principle for $L _ { 2 } ( \mathbb { R } ^ { d } ) \ [ { \bf 1 5 8 } ] )$ . Let $\phi \in L _ { 2 } (  { \mathbb { R } } ^ { d } )$ be the compactly supported refinable function with finitely supported refinement mask $h _ { 0 }$ satisfying $\widehat { \phi } ( 0 ) = 1$ . Let $\{ h _ { 1 } , \ldots , h _ { r } \}$ be a set of finitely supported sequences. Then the wavelet system $X ( \Psi )$ and its quasi-afine counterpart $X ^ { q } ( \Psi )$ , with $\Psi =$ $\{ \psi _ { 1 } , . . . , \psi _ { r } \}$ defined by $\widehat { \psi } _ { \ell } ( 2 \cdot ) = \widehat { h } _ { \ell } \widehat { \phi }$ , forms a tight frame in $L _ { 2 } ( \mathbb { R } ^ { d } )$ provided the equalities 

$$
\sum_ {\ell = 0} ^ {r} \left| \widehat {h} _ {\ell} (\xi) \right| ^ {2} = 1 \quad a n d \quad \sum_ {\ell = 0} ^ {r} \widehat {h} _ {\ell} (\xi) \overline {{\widehat {h} _ {\ell} (\xi + \nu)}} = 0,\tag{2.48}
$$

hold for all $\nu \in \{ 0 , \pi \} ^ { d } \setminus \{ \mathbf { 0 } \}$ and $\xi \in [ - \pi , \pi ] ^ { d }$ . Furthermore, assuming $r = 2 ^ { d } - 1$ and $\| \phi \| _ { L _ { 2 } ( \mathbb { R } ^ { d } ) } = 1$ , then $X ( \Psi )$ is an orthonormal wavelet bases of $L _ { 2 } ( \mathbb { R } ^ { d } )$ . 

Proof. The proof is analogous to that of Theorem 2.2 and Theorem 2.4; hence we only sketch it here. 

First, one can establish the following equalities using (2.48), 

$$
\begin{array}{c} \mathcal {P} _ {n} f = \mathcal {P} _ {n - 1} f + \sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z} ^ {d}} \langle f, \psi_ {\ell , n - 1, k} \rangle \psi_ {\ell , n - 1, k} \\ = \mathcal {P} _ {n ^ {\prime}} f + \sum_ {\ell = 1} ^ {r} \sum_ {j = n ^ {\prime}} ^ {n - 1} \sum_ {k \in \mathbb {Z} ^ {d}} \langle f, \psi_ {\ell , j, k} \rangle \psi_ {\ell , j, k}, \end{array}
$$

and 

$$
\begin{array}{c} \mathcal {P} _ {n} ^ {q} f = \mathcal {P} _ {n - 1} ^ {q} f + \sum_ {\ell = 1} ^ {r} \sum_ {k \in \mathbb {Z} ^ {d}} \langle f, \psi_ {\ell , n - 1, k} ^ {q} \rangle \psi_ {\ell , n - 1, k} ^ {q} \\ = \mathcal {P} _ {n ^ {\prime}} ^ {q} f + \sum_ {\ell = 1} ^ {r} \sum_ {j = n ^ {\prime}} ^ {n - 1} \sum_ {k \in \mathbb {Z} ^ {d}} \langle f, \psi_ {\ell , j, k} ^ {q} \rangle \psi_ {\ell , j, k} ^ {q}. \end{array}\tag{2.49}
$$

Finally one can show that 

$$
\mathcal {P} _ {n ^ {\prime}} f \to 0 \quad \text { and } \quad \mathcal {P} _ {n ^ {\prime}} ^ {q} f \to 0, \quad n ^ {\prime} \to - \infty
$$

and 

$$
\mathcal {P} _ {n} f \to f \quad \mathrm{and} \quad \mathcal {P} _ {n} ^ {q} f \to f, \quad n \to \infty
$$

which establishs that $X ( \Psi )$ and $X ^ { q } ( \Psi )$ form tight frames for $L _ { 2 } ( \mathbb { R } ^ { d } )$ 

One way to construct tight frames for $L _ { 2 } ( \mathbb { R } ^ { d } )$ is by taking tensor products of univariate tight frames. For simplicity of notation, we consider 2D case, i.e. $d = 2$ Arguments for higher dimensions are similar. Given a set of univariate masks $\left. h _ { \ell } : \ell = 0 , 1 , \dots , r \right.$ , define the 2D masks $h _ { i , j } [ k _ { 1 } , k _ { 2 } ]$ as 

$$
h _ {i, j} [ k _ {1}, k _ {2} ] := h _ {i} [ k _ {1} ] h _ {j} [ k _ {2} ], \quad 0 \leq i, j \leq r; (k _ {1}, k _ {2}) \in \mathbb {Z} ^ {2},\tag{2.50}
$$

or equivalently in Fourier domain 

$$
\widehat {h} _ {i, j} [ \xi_ {1}, \xi_ {2} ] := \widehat {h} _ {i} [ \xi_ {1} ] \widehat {h} _ {j} [ \xi_ {2} ], \quad 0 \leq i, j \leq r; (\xi_ {1}, \xi_ {2}) \in \mathbb {R} ^ {2}.
$$

Then the corresponding 2D refinable function and mother wavelets are defined by 

$$
\psi_ {i, j} (x, y) = \psi_ {i} (x) \psi_ {j} (y), \quad 0 \leq i, j \leq r; (x, y) \in \mathbb {R} ^ {2}.
$$

Denote the collection of mother wavelets as 

$$
\Psi_ {2} := \{\psi_ {i, j}; 0 \leq i, j \leq r; (i, j) \neq (0, 0) \},
$$

which contains $( r + 1 ) ^ { 2 } - 1$ elements. (Here, ψ<sub>0</sub> is defined to be the underlying univariate refinable function.) If the univariate masks $\{ h _ { \ell } \}$ are constructed from UEP, then it is easy to verify that $\{ h _ { i , j } \}$ satisfies (2.48) and thus $X ( \Psi _ { 2 } )$ and $X ^ { q } ( \Psi _ { 2 } )$ are tight frames for $L _ { 2 } ( \mathbb { R } ^ { 2 } )$ 

## 3.2. Algorithms for Tensor Product Tight Frame Systems

In this section, we only discuss the fast framelet decomposition and reconstruction algorithm for 2D finite signals. Since we are using tensor product tight frame systems, the 2D fast algorithms can be easily derived based on 1D fast algorithms for both wavelet and quasi-afine systems. 

Now, we introduce some notation. Let the set of masks $\{ h _ { \ell } : \ell = 0 , 1 , \ldots , r \}$ be constructed from univariate UEP (Theorem 2.2). For a given signal $v \in \mathbb { R } ^ { N _ { 1 } } \times \mathbf { \dot { \mathbb { R } } } ^ { N _ { 2 } }$ with $N _ { 1 } , N _ { 2 } \in \mathbb { N } _ { + }$ , let $D _ { \ell , j } ^ { x }$ and $D _ { \ell , \ j } ^ { y }$ denote the one level of decomposition with respect to the x-index and y-index of $v ,$ which are defined as follows: 

$$
(D _ {\ell , j} ^ {x} v) [ \cdot , k _ {2} ] = \left\{ \begin{array}{l l} \downarrow (\tilde {h} _ {\ell} \circledast v [ \cdot , k _ {2} ]), & \text {wavelet system,} \\ \tilde {h} _ {\ell , j} \circledast v [ \cdot , k _ {2} ], & \text {quasi - affine system;} \end{array} \right.
$$

$$
(D _ {\ell , j} ^ {y} v) [ k _ {1}, \cdot ] = \left\{ \begin{array}{l l} \downarrow (\tilde {h} _ {\ell} \circledast v [ k _ {1}, \cdot ]), & \text {wavelet system,} \\ \tilde {h} _ {\ell , j} \circledast v [ k _ {1}, \cdot ], & \text {quasi - affine system,} \end{array} \right.
$$

where $\tilde { h } _ { \ell } = \sqrt { 2 } \cdot \overline { { h _ { \ell } [ - \cdot ] } }$ and $\tilde { h } _ { \ell , j } = \overline { { h _ { \ell , j } [ - \cdot ] } }$ with $h _ { \ell , j }$ defined as in (2.42). Similarly, we can define one level of reconstruction $D _ { \ell , j } ^ { x * }$ and $\bar { D } _ { \ell , j } ^ { y * }$ as 

$$
(D _ {\ell , j} ^ {x *} v) [ \cdot , k _ {2} ] = \left\{ \begin{array}{l l} \tilde {h} _ {\ell} ^ {*} \circledast \uparrow (v [ \cdot , k _ {2} ]), & \text { wavelet system }, \\ h _ {\ell , j} \circledast v [ \cdot , k _ {2} ], & \text { quasi - affine system }; \end{array} \right.
$$

$$
(D _ {\ell , j} ^ {y *} v) [ k _ {1}, \cdot ] = \left\{ \begin{array}{l l} \tilde {h} _ {\ell} ^ {*} \circledast \uparrow (v [ k _ {1}, \cdot ]), & \text {wavelet system,} \\ h _ {\ell , j} \circledast v [ k _ {1}, \cdot ], & \text {quasi - affine system,} \end{array} \right.
$$

where $\tilde { h } _ { \rho } ^ { * } = \sqrt { 2 } h _ { \ell }$ 

Now, we present the following 2D fast framelet decomposition and reconstruction algorithm, which unifies the algorithm for wavelet systems and quasi-afine systems. A diagram illustrating one level of decomposition and reconstruction is given in Figure 5. 

Algorithm 2.3. Given signal $v \in \mathbb { R } ^ { N _ { 1 } } \times \mathbb { R } ^ { N _ { 2 } }$ with $N _ { 1 } , N _ { 2 } \in \mathbb { N } _ { + }$ . If the underlying system is afine, then $N _ { 1 }$ and $N _ { 2 }$ are assumed to be integer multiples $o f 2 ^ { L }$ with L the total level of decompositions. Denote $v _ { 0 , 0 , 0 } = v$ . Then the L-level fast framelet decomposition and reconstruction is given as follows: 

(1) Decomposition: For each $j = 1 , 2 , \dots , L$ 

(a) Obtain low frequency approximation to v at level j: 

$$
v _ {0, 0, j} = D _ {0, 1 - j} ^ {y} (D _ {0, 1 - j} ^ {x} v _ {0, 0, j - 1});
$$

(b) Obtain framelet coeficients of v at level j: for each $\ell _ { 1 } = 0 , 1 , \ldots , r$ and $\ell _ { 2 } = 0 , 1 , \ldots , r \ w i t h \ ( \ell _ { 1 } , \ell _ { 2 } ) \not = ( 0 , 0 )$ 2 

$$
v _ {\ell_ {1}, \ell_ {2}, j} = D _ {\ell_ {2}, 1 - j} ^ {y} (D _ {\ell_ {1}, 1 - j} ^ {x} v _ {0, j - 1}).
$$

$$
v _ {0, 0, j - 1} = \sum_ {\ell_ {1} = 0} ^ {r} \sum_ {\ell_ {2} = 0} ^ {r} D _ {\ell_ {1}, 1 - j} ^ {x *} (D _ {\ell_ {2}, 1 - j} ^ {y *} v _ {\ell_ {1}, \ell_ {2}, j}).
$$

(2) Reconstruction: For each $j = L , L - 1 , \dots , 1$ - 2 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/477631d5a59a8162cca857fe38a11cb283698a52a94d5ebf04aff91d16838d0f.jpg)



1-Level Decomposition & Reconstruction



Figure 5. The above diagram illustrates one level of the fast framelet decomposition and reconstruction procedure given by Algorithm 2.3.


## Pseudo-splines and Tight Frames

A class of refinable and compactly supported functions known as pseudo-splines encompasses a wide variety of refinable functions which provide much flexibility in the construction of wavelets and framelets. Functions such as B-splines, interpolatory, or Daubechies’ orthogonal refinable functions (see [61, 60]) are special cases of pseudo-splines. Pseudo-splines were first introduced in [65, 165] in order to construct tight framelets with satisfactory approximation order for the truncated frame series of the tight wavelet system generated by the unitary extension principle. 

The organization of this lecture is as follows. After a general introduction of pseudo-splines in Section 1, a construction of tight framelets is presented in Section 2. As a special example, we can obtain orthonormal wavelet bases for $L _ { 2 } ( \mathbb { R } )$ which were originally constructed by Daubechies in [60]. Furthermore, the technique used to estimate the regularity of pseudo-splines can be applied to discover that the tight frame systems constructed in [65] and [75] always have one framelet whose dilations and shifts already form a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ . This leads to a new understanding about the structure of pseudo-spline tight frame systems. 

An optimal regularity analysis of pseudo-splines does not come easily, as has already been illustrated in a regularity estimate of the orthonormal refinable functions, which is a special case of pseudo-splines (see [54] and [61]). In [75], a systematic regularity analysis of both types of pseudo-splines was given. In Section $^ { 3 , }$ we provide regularity analysis for pseudo-splines. In particular, the exact decay of the Fourier transforms of the pseudo-splines is given which leads to an estimate of their H¨older regularity. The last section contains two technical lemmata which are needed in the proofs of the properties of pseudo-splines. Finally, we note that some key part of this lecture (e.g. regularity analysis) follows from [75]. 

## 1. Definitions and Basics

This section is devoted to the definitions of various pseudo-splines and their basic properties. 

## 1.1. Definitions

Pseudo-splines are defined in terms of their refinement masks. It starts with the simple trigonometric identity $1 = \cos ^ { 2 } ( \xi ) + \sin ^ { 2 } ( \xi )$ . For given nonnegative integers l and m with $l \leq m - 1$ , we have 

$$
1 = \left(\cos^ {2} (\xi / 2) + \sin^ {2} (\xi / 2)\right) ^ {m + l}.\tag{3.1}
$$

The refinement masks of pseudo-splines are defined by the summation of the first $l + 1$ terms of the binomial expansion of (3.1). In particular, the refinement mask of a pseudo-spline of Type I with order $( m , l )$ is given by, for $\xi \in [ - \pi , \pi ]$ 

$$
| _ {1} \widehat {a} (\xi) | ^ {2} := | _ {1} \widehat {a} _ {(m, l)} (\xi) | ^ {2} := \cos^ {2 m} (\xi / 2) \sum_ {j = 0} ^ {l} {\binom {m + l} {j}} \sin^ {2 j} (\xi / 2) \cos^ {2 (l - j)} (\xi / 2)\tag{3.2}
$$

and the refinement mask of a pseudo-spline of Type II with order $( m , l )$ is given by, for $\xi \in [ - \pi , \pi ]$ , 

$$
{ } _ { 2 } \widehat { a } ( \xi ) : = { } _ { 2 } \widehat { a } _ { ( m , l ) } ( \xi ) : = \cos ^ { 2 m } ( \xi / 2 ) \sum _ { j = 0 } ^ { l } \binom { m + l } { j } \sin ^ { 2 j } ( \xi / 2 ) \cos ^ { 2 ( l - j ) } ( \xi / 2 ) .\tag{3.3}
$$

Define 

$$
P _ {m, l} (y) := \sum_ {j = 0} ^ {l} \binom {m + l} {j} y ^ {j} (1 - y) ^ {l - j}\tag{3.4}
$$

and 

$$
R _ {m, l} (y) := (1 - y) ^ {m} P _ {m, l} (y),\tag{3.5}
$$

where m, l are nonnegative integers with $l \leq m - 1$ . Then, it is obvious that 

$$
{ } _ { 2 } \widehat { a } ( \xi ) = R _ { m , l } ( \sin ^ { 2 } ( \xi / 2 ) ) .
$$

Except for some special circumstances, we simply notation by dropping the subscript $^ { \ast } ( m , l ) ^ { \ast }$ in $\boldsymbol { \mathbf { \rho } } _ { 1 } \widehat { a } _ { ( m , l ) } ( \boldsymbol { \xi } )$ and ${ _ 2 } \widehat { a } _ { ( m , l ) } ( \xi )$ for simplicity. We note that the mask  of Type I is obtained by taking the square root of the mask of Type II using the Fej´er-Riesz lemma (see e.g. [61] and [152]), i.e. $_ { 2 } \widehat { a } ( \xi ) = | _ { 1 } \widehat { a } ( \xi ) | ^ { 2 }$ . Type I was introduced and used by [65] to construct tight framelets. 

Finally, a family of dual pseudo-splines was first discovered by [81] and the general refinement mask of a dual pseudo-spline of order $( m , l )$ with $0 \leq l \leq m - 1$ is 

$$
\widehat {b} _ {m, l} (\xi) = e ^ {i \xi / 2} \cos^ {2 m + 1} (\xi / 2) \sum_ {j = 0} ^ {l} \binom {m + 1 / 2 + l} {j} \sin^ {2 j} (\xi / 2) \cos^ {2 (l - j)} (\xi / 2).\tag{3.6}
$$

Notice that dual pseudo-spline of order $( m , 0 )$ is the B-spline of degree 2m and dual pseudo-spline of order $( m , m - 1 )$ is the limit function of the dual 2m-point scheme. The masks of dual pseudo-splines are very similar in format to those of pseudo-splines. In fact, if we let $\begin{array} { r } { r = m + \frac { 1 } { 2 } } \end{array}$ , then (3.6) can be rewritten as 

$$
\widehat {b} _ {r, l} (\xi) = e ^ {i \xi / 2} \cos^ {2 r} (\xi / 2) \sum_ {j = 0} ^ {l} \binom {r + l} {j} \sin^ {2 j} (\xi / 2) \cos^ {2 (l - j)} (\xi / 2).
$$

Therefore, the analysis of dual pseudo-splines is similar to that of pseudo-splines by using Newton’s generalized binomial theorem. Hence, we focus on the analysis of pseudo-splines because the analysis of dual pseudo-splines is analogous. Interested readers should work out the details as exercises. 

## 1.2. Underlying Refinable Functions

Given refinement masks $k { \widehat { a } } .$ , the corresponding pseudo-splines can be formally defined in terms of their Fourier transforms $\begin{array} { r } { \mathbf { \Phi } _ { k } \widehat { \phi } ( \xi ) : = \prod _ { j = 1 } ^ { \infty } \mathbf { \Phi } _ { k } \widehat { a } ( 2 ^ { - j } \xi ) } \end{array}$ for $k = 1 , 2$ To make sure that $_ { k } \widehat { \phi }$  is well defined, we need to consider the convergence of the right-hand-side which is given below. For finitely supported refinement masks, the following theorem is well known and one can find the proof in e.g. [61]. Here, we provide an alternative proof motivated from a proof of [116]. 

Proposition 3.1. [116] Suppose that $h _ { 0 }$ is a finitely supported refinement mask satisfying $\widehat { h } _ { 0 } ( 0 ) = 1$ . Then, the product 

$$
\widehat {\phi} (\xi) := \prod_ {j = 1} ^ {\infty} \widehat {h} _ {0} (2 ^ {- j} \xi)\tag{3.7}
$$

converges uniformly on any compact subset of R. Furthermore, $\widehat { \phi }$ is the Fourier transform of a compactly supported tempered distribution φ that satisfies refinement equation (1.6). 

Proof. Since $\widehat { h } _ { 0 }$ is a trigonometric polynomial with $\widehat { h } _ { 0 } ( 0 ) = 1$ , we have 

$$
| \widehat {h} _ {0} (\xi) | \leq 1 + C | \xi | \leq e ^ {C | \xi |},\tag{3.8}
$$

for some $C > 0$ . This leads to 

$$
\prod_ {j = 1} ^ {\infty} | \widehat {h} _ {0} (2 ^ {- j} \xi) | \leq e ^ {C | \xi |}.
$$

Therefore, the right-hand-side of (3.7) converges uniformly on any compact subset K of R. It is clear that $\widehat { \phi }$ satisfies refinement equation (1.6). Note that in the above proof, we only require that the refinement mask satisfy (3.8). The finiteness of the support of the refinement mask is not needed. 

Let $c _ { 0 } = \operatorname* { m a x } _ { \xi } | \widehat { h } _ { 0 } ( \xi ) |$ | and $c _ { 1 } = \operatorname* { m a x } _ { | \xi | \leq 2 } | \widehat { \phi } ( \xi )$ |. For any positive $j ,$ consider $\xi ,$ such that $2 ^ { j } \leq | \xi | < 2 ^ { j + 1 }$ . Since 

$$
\widehat {\phi} (\xi) = \prod_ {k = 1} ^ {j} \widehat {h _ {0}} (2 ^ {- k} \xi) \widehat {\phi} (2 ^ {- j} \xi),
$$

we have 

$$
| \widehat {\phi} (\xi) | \leq c _ {1} c _ {0} ^ {j} \leq c _ {1} c _ {0} ^ {\log_ {2} | \xi |} = c _ {1} | \xi | ^ {\log_ {2} c _ {0}}.\tag{3.9}
$$

Therefore, $\widehat { \phi }$ has at most polynomial growth at infinity. Hence, $\phi$ is a tempered distribution with $\widehat { \phi } ( 0 ) = 1$ 

Finally it remains to prove that $\phi$ is compactly supported. Let $\phi _ { 0 } = \delta$ be the Dirac function. Then it is a compactly supported tempered distribution whose Fourier transform is 1. Define the cascade algorithm 

$$
\widehat {\phi} _ {n + 1} (\xi) = \widehat {h} _ {0} (\xi / 2) \widehat {\phi} _ {n} (\xi / 2).
$$

Then, the infinity product in the right-hand-side of (3.7) converges uniformly on any compact subset R if and only if $\phi _ { n }$ does. Furthermore, (3.9) shows that $\widehat { \phi } _ { n }$ has at most polynomial growth at infinity. Assume that the support of the refinement mask is $[ - q , q ]$ . Let K be any compact subset in R containing $[ - q , q ]$ . Then it can be shown inductively that the support of $\phi _ { n }$ is in $K$ for all $n \geq 0$ . Now, let $g$ be an arbitrary test function whose support is disjoint with $K$ . Then, applying the dominated converge theorem, one has 

$$
\langle \phi , g \rangle = (2 \pi) ^ {1 / 2} \langle \widehat {\phi}, \widehat {g} \rangle = (2 \pi) ^ {1 / 2} \langle \lim _ {n} \widehat {\phi} _ {n}, \widehat {g} \rangle = (2 \pi) ^ {1 / 2} \lim _ {n} \langle \widehat {\phi} _ {n}, \widehat {g} \rangle = \lim _ {n} \langle \phi_ {n}, g \rangle = 0.
$$

Hence, $\phi$ is compactly supported. 

One of the fundamental questions for the study of refinable functions is that given a refinement mask $h _ { 0 }$ , does there exist a corresponding refinable function $\phi \in L _ { 2 } ( \mathbb { R } )$ such that the refinement equation (1.5) is satisfied. This question will be answered by the following result where part of the proof is taken from [32] (see [125] for a more general analysis). To establish these results, we need to introduce the cascade algorithm. For a given refinement mask $h _ { 0 }$ , define the cascade algorithm as 

$$
\widehat {f} _ {n} (\xi) = \widehat {h} _ {0} (\frac {\xi}{2}) \widehat {f} _ {n - 1} (\frac {\xi}{2}) = \prod_ {j = 1} ^ {n} \widehat {h} _ {0} (2 ^ {- j} \xi) \widehat {f} _ {0} (2 ^ {- n} \xi), \quad n > 0,\tag{3.10}
$$

with initial function $f _ { 0 }$ satisfying $\widehat { f } _ { 0 } ( \xi ) = \chi _ { [ - \pi , \pi ] } ( \xi )$ . Proposition 3.1 shows that $f _ { n }$ converges uniformly on each compact set. 

Theorem 3.1. [32] Suppose $h _ { 0 }$ is finitely supported and satisfies the following condition: 

$$
\left\{ \begin{array}{l l} | \widehat {h} _ {0} (\xi) | ^ {2} + | \widehat {h} _ {0} (\xi + \pi) | ^ {2} \leqslant 1, & a. e. \quad \xi \in \mathbb {R}; \\ \widehat {h} _ {0} (0) = 1. \end{array} \right.\tag{3.11}
$$

Then, the limit $\phi$ of the cascade algorithm (3.10) is a compactly supported function in $L _ { 2 } ( \mathbb { R } )$ satisfying $\widehat { \phi } ( 0 ) = 1$ 

Proof. Since $h _ { 0 }$ is finitely supported and $\widehat { h } _ { 0 } ( 0 ) = 1$ , then by Proposition 3.1, there exists a unique compactly supported refinable distribution $\phi$ whose Fourier transform given by (3.7) satisfies $\widehat { \phi } ( 0 ) = 1$ (also see [61, 29]). Now, consider 

$$
\begin{array} \| \widehat {f} _ {n} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \int_ {- 2 ^ {n} \pi} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n} | \widehat {h} _ {0} (2 ^ {- j} \xi) | ^ {2} \mathrm{d} \xi \\ (\widehat {h} _ {0} \text {is 2\pi - periodic}) = \int_ {0} ^ {2 ^ {n + 1} \pi} \prod_ {j = 1} ^ {n} | \widehat {h} _ {0} (2 ^ {- j} \xi) | ^ {2} \mathrm{d} \xi \\ = \int_ {0} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n} | \widehat {h} _ {0} (2 ^ {- j} \xi) | ^ {2} \mathrm{d} \xi + \int_ {2 ^ {n} \pi} ^ {2 ^ {n + 1} \pi} \prod_ {j = 1} ^ {n} | \widehat {h} _ {0} (2 ^ {- j} \xi) | ^ {2} \mathrm{d} \xi \\ = \int_ {0} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n} | \widehat {h} _ {o} (2 ^ {- j} \xi) | ^ {2} \mathrm{d} \xi + \int_ {0} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n} | \widehat {h} _ {0} (2 ^ {- j} (\xi + 2 ^ {n} \pi)) | ^ {2} \mathrm{d} \xi \\ = \int_ {0} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n - 1} | \widehat {h} _ {0} (2 ^ {- j} \xi) | ^ {2} \left(| \widehat {h} _ {0} (2 ^ {- n} \xi) | ^ {2} + | \widehat {h} _ {0} (2 ^ {- n} \xi + \pi) | ^ {2}\right) \mathrm{d} \xi . \end{array}
$$

By (3.11), we have 

$$
\| \widehat {f} _ {n} \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq \int_ {0} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n - 1} | \widehat {h} _ {0} (2 ^ {- j} \xi) | ^ {2} \mathrm{d} \xi = \| \widehat {f} _ {n - 1} \| _ {L _ {2} (\mathbb {R})} ^ {2}.
$$

Then by induction, we have 

$$
\| \widehat {f} _ {n} \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq \| \widehat {f} _ {0} \| _ {L _ {2} (\mathbb {R})} ^ {2} = 2 \pi , \quad \text { for   all } n \geq 0.
$$

Since the sequence $\{ \widehat { f } _ { n } \} _ { n }$ converges to $\widehat { \phi }$ pointwise, then by Fatou’s lemma 

$$
\| \widehat {\phi} \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq \operatorname * {l i m i n f} _ {n \to \infty} \| \widehat {f} _ {n} \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq 2 \pi <   \infty ,
$$

and hence $\phi \in L _ { 2 } ( \mathbb { R } )$ 

By the definition of the refinement masks of the pseudo-splines, the pseudosplines of both types satisfy (3.11), and hence all pseudo-splines are compactly supported functions in $L _ { 2 } ( \mathbb { R } )$ . In fact, they are much smoother than merely being in $L _ { 2 } ( \mathbb { R } )$ as is shown in Section 3. Furthermore, from Theorem 1.4 in Lecture 1 the sequence of subspaces $\left\{ V _ { n } \right\}$ <sub>n</sub> (defined via (1.1)) generated by any pseudo-spline forms an MRA for $L _ { 2 } ( \mathbb { R } )$ 

Since most pseudo-splines do not have an analytical form (B-splines as the exception). It is important to know whether the infinite product (3.7) converges in $L _ { 2 } ( \mathbb { R } )$ , so that one can obtain the approximation of the corresponding refinable function. 

Proposition 3.2. The cascade algorithm defined in (3.10) by the refinement mask $h _ { 0 }$ of an arbitrary given pseudo-spline with any type and order converges to the corresponding pseudo-spline φ in $L _ { 2 } ( \mathbb { R } )$ . 

Proof. Since we already have pointwise convergence of the cascade algorithm by Proposition 3.1, all we need to show is that $\begin{array} { r } { \| \widehat { \phi } \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 } = \operatorname* { l i m } _ { n  \infty } \| \widehat { f } _ { n } \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 } } \end{array}$ Indeed, we have 

$$
0 \leq \| \widehat {f} _ {n} - \widehat {\phi} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \langle \widehat {f} _ {n} - \widehat {\phi}, \widehat {f} _ {n} - \widehat {\phi} \rangle = \| \widehat {f} _ {n} \| _ {L _ {2} (\mathbb {R})} ^ {2} - 2 \mathrm{Re} \langle \widehat {f} _ {n}, \widehat {\phi} \rangle + \| \widehat {\phi} \| _ {L _ {2} (\mathbb {R})} ^ {2}.
$$

Since ${ \widehat { f } } _ { n }$ pointwise converges to ${ \widehat { \phi } } ,$ , one needs to show that li $1 _ { n  \infty } \langle \widehat { f } _ { n } , \widehat { \phi } \rangle = \| \widehat { \phi } \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 }$ and $\begin{array} { r } { \| \widehat { \phi } \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 } = \operatorname* { l i m } _ { n  \infty } \| \widehat { f } _ { n } \| _ { L _ { 2 } ( \mathbb { R } ) } ^ { 2 } } \end{array}$ . This leads to 

$$
0 \leq \lim _ {n \rightarrow \infty} \| \widehat {f} _ {n} - \widehat {\phi} \| _ {L _ {2} (\mathbb {R})} ^ {2} \leq \lim _ {n \rightarrow \infty} \left(\| \widehat {f} _ {n} \| _ {L _ {2} (\mathbb {R})} ^ {2} - \| \widehat {\phi} \| _ {L _ {2} (\mathbb {R})} ^ {2}\right).
$$

By the dominated convergence theorem, it sufices to show that 

$$
| \widehat {f} _ {n} | ^ {2} \leq C | \widehat {\phi} | ^ {2} \quad \text { and } \quad | \widehat {f} _ {n} \widehat {\phi} | \leq C | \widehat {\phi} | ^ {2}\tag{3.12}
$$

Since we have already shown that $\phi \in L _ { 2 } ( \mathbb { R } )$ , for any given $n \geq 0 .$ , the existence of $C > 0$ satisfying (3.12) is obvious when $| \xi | > 2 ^ { n } \pi$ since ${ \widehat { f } } _ { n } ( \xi ) = 0$ . Now, for $| \xi | \le 2 ^ { n } \pi$ , since $\phi$ is refinable, it follows that 

$$
| \widehat {\phi} (\xi) | ^ {2} = \left| \prod_ {j = 1} ^ {\infty} \widehat {h} _ {0} (2 ^ {- j} \xi) \right| ^ {2} = \left| \prod_ {j = 1} ^ {n} \widehat {h} _ {0} (2 ^ {- j} \xi) \prod_ {j = n + 1} ^ {\infty} \widehat {h} _ {0} (2 ^ {- j} \xi) \right| ^ {2} = | \widehat {f} _ {n} (\xi) | ^ {2} | \widehat {\phi} (2 ^ {- n} \xi) | ^ {2}.
$$

By (3.16) one can easily check that the inequality 

$$
| \widehat {\phi} (\xi) | ^ {2} \geq 1 / C > 0, \quad \xi \in [ - \pi , \pi ]
$$

holds for some $C > 0$ for all pseudo-spines. Hence, (3.12) holds for all pseudosplines. 

## 1.3. Approximation

Recall the definition of the refinement mask of a pseudo-spline of Type II with order (m, l) 

$$
{ } _ { 2 } \widehat { a } ( \xi ) = \cos ^ { 2 m } ( \xi / 2 ) \sum _ { j = 0 } ^ { l } \binom { m + l } { j } \sin ^ { 2 j } ( \xi / 2 ) \cos ^ { 2 ( l - j ) } ( \xi / 2 ) .
$$

One can see that a pseudo-spline of Type II with order $( m , l )$ is a convolution of a B-spline of order 2m with a distribution. The mask of the distribution is $P _ { m , l } ( \bar { \sin ^ { 2 } } ( \xi / 2 ) )$ , where $P _ { m , l } ( y )$ is given by (3.4). Since Lemma 3.3 says that $\begin{array} { r } { P _ { m , l } ( y ) = \sum _ { j = 0 } ^ { l } { \binom { m - 1 + j } { j } } y ^ { j } } \end{array}$ , one has $P _ { m , l } ( \sin ^ { 2 } ( \xi / 2 ) ) \ge 1$ for all ξ. Hence, pseudo- spline of Type II with order $( m , l )$ can be viewed as a convolution of a B-spline with a distribution whose Fourier transform is at least 1 at any point ξ. Therefore, the pseudo-spline $_ { 2 \phi }$ of Type II with order $( m , l )$ satisfies the SF condition of order 2m. By a similar discussion with some special treatment of the case when m is odd, one can conclude that the pseudo-spline $_ { 1 } \phi$ of Type I with order $( m , l )$ satisfies the SF condition of order m. 

Consider the masks of $_ 1 \widehat { a }$ of the pseudo-splines of type I of order $( m , l )$ . Since $1 - | { \widehat { \mathbf { 1 } } } { \widehat { \boldsymbol { a } } } | ^ { 2 }$ has a factor $\sin ^ { 2 ( l + 1 ) } ( \xi / 2 )$ , we have $1 - | { _ 1 } { \widehat { a } } | ^ { 2 } = O ( | \cdot | ^ { 2 l + 2 } )$ . Then by Theorem 1.5 and Proposition 2.1, the operator $\mathcal { P } _ { n } f$ defined by (1.13) corresponding to the pseudo-spline $_ { 1 } \phi$ of order $( m , l )$ provides approximation order min $\{ m , 2 l +$ $2 \}$ for suficiently smooth functions. Hence, Theorem 2.3 implies that any tight frame system constructed by the UEP using pseudo-splines of type I of order $( m , l )$ provides approximation order min $\{ m , 2 l + 2 \}$ 

The following theorem shows that, if we start from pseudo-splines of Type II with order $( m , l )$ in Construction 3.3, the corresponding tight frame system $X ( \Psi )$ provides approximation order $2 l + 2$ 

Theorem 3.2. Let m and l be nonnegative integers satisfying $l \leq m - 1$ . Let $k \phi _ { ; }$ $k = 1 , 2$ be the pseudo-spline of Type I and II with order $( m , l )$ and $\phantom { } _ { k } \widehat { a } \ , \ k = 1 , 2$ be its refinement mask. Let $\mathcal { P } _ { n }$ be defined by (1.13) for a given refinable function $_ { k } \phi$ Then, $\mathcal { P } _ { n }$ provides approximation order min $\{ m , 2 l + 2 \}$ for Type I and $2 l + 2$ for type II. Consequently, the corresponding truncated operator $\mathcal { Q } _ { n }$ defined in (2.21) for any tight wavelet frame system constructed from a refinable function $_ { k \phi , \ k } = 1 , 2$ $o f$ order $( m , l )$ via the unitary extension principle provides approximation order min $\{ m , 2 l + 2 \}$ for Type I and $2 l + 2$ for Type II. 

Proof. Notice that $_ { 2 } { \widehat { a } } = | _ { 1 } { \widehat { a } } | ^ { 2 }$ and $1 - { } _ { 2 } { \widehat { a } } ^ { 2 } = ( 1 + { } _ { 2 } { \widehat { a } } ) ( 1 - { } _ { 2 } { \widehat { a } } )$ . Since $1 + { } _ { 2 } \widehat { a } ( 0 ) \neq$ 0, the order of zeros of $1 - { } _ { 2 } \widehat { a } ^ { 2 }$    at the origin is the same as that of $1 - 2 \widehat { a }$ , which is exactly $2 l + 2$   based on the discussion above. This, together with Theorem 1.5 and Proposition 2.1, concludes the proof of the theorem. 

For fixed $m ,$ since the value of the mask $| \widehat { k } \widehat { a } ( \xi ) |$ , for $k = 1 , 2$ and $\xi \in \mathbb { R }$ 2 increases with l (by (1) of Lemma 3.3 in section 4), and the length of the mask $k ^ { a }$ also increases with l, we conclude that the decay rate of the Fourier transform of a pseudo-spline decreases with l (see Section 3 for details) and the support of the corresponding pseudo-spline increases with l. In particular, for fixed $m _ { ; }$ the pseudo-spline with order $( m , 0 )$ has the highest order of smoothness with the shortest support, the pseudo-spline with order $( m , m - 1 )$ has the lowest order of smoothness with the largest support in the family. When we move from B-splines to orthogonal or interpolatory refinable functions, we sacrifice the smoothness and short support of the B-splines to gain some other desirable properties, such as orthogonality or interpolatory property. What do we get for the pseudo-splines of other orders? When we move from B-splines to pseudo-splines, we gain the approximation power of the truncated tight frame systems derived from them and the vanishing moments of wavelets. 

As mentioned in Lecture 1, if φ satisfies the SF condition of order $m ,$ then φ (or $V ( \phi )$ , or the underlying MRA) provides approximation order $m$ . Therefore, even though the $( V _ { n } ) _ { n \in \mathbb { Z } }$ may be generated by a diferent pseudo-spline of order $( m , l )$ with m fixed, the corresponding spaces $( V _ { n } ) _ { n \in \mathbb { Z } }$ provide the same approximation order. However, in many applications we are more interested in the performance of the tight frame system constructed using UEP. Therefore, we normally use the truncated operator $\mathcal { Q } _ { n }$ defined in (2.21) or, equivalently, the quasi-interpolatory operator $\mathcal { P } _ { n } : L _ { 2 } ( \mathbb { R } ) \mapsto V _ { n }$ defined in (2.11) to approximate $f .$ Theorem 3.2 tells us that for B-splines, the approximation order of the corresponding $\mathcal { Q } _ { n }$ (hence $\textstyle { \mathcal { P } } _ { n } )$ can never exceed 2 even if a high order B-spline is used. On the other hand, for pseudo-spline of either type with order $( m , l ) , 0 \le l \le m - 1$ , the approximation order of $\mathcal { Q } _ { n }$ (hence $\textstyle { \mathcal { P } } _ { n } )$ is min $\{ m , 2 l + 2 \}$ for Type I and $2 l + 2$ for Type II. This indicates that the tight frame system derived from a pseudo-spline normally gives better approximation order when the truncated series is used to approximate the underlying functions than that derived from B-splines. For fixed $m _ { \colon }$ the choice of l depends entirely on applications. According to the practical problems in hand, one must properly balance the approximation order, the length of support of the wavelet, and regularity. 

## 1.4. Stability and Orthogonality

Recall that φ is stable, if $\{ \phi ( \cdot - k ) \} _ { k \in \mathbb { Z } }$ forms a Riesz basis for $V ( \phi )$ , i.e. there exist $0 < C _ { 1 } , C _ { 2 } < \infty$ , such that for any sequence $b \in \ell _ { 2 } ( \mathbb { Z } )$ 

$$
C _ {1} \| b \| _ {\ell_ {2} (\mathbb {Z})} \leq \left\| \sum_ {k \in \mathbb {Z}} b [ k ] \phi (\cdot - k) \right\| _ {L _ {2} (\mathbb {R})} \leq C _ {2} \| b \| _ {\ell_ {2} (\mathbb {Z})}.\tag{3.13}
$$

In particular if only the upper bound of (3.13) is satisfied, we say that $\{ \phi ( \cdot - k ) \} _ { k \in \mathbb { Z } }$ forms a Bessel sequence (as we have already discussed in Lecture 1). On the other hand, if $C _ { 1 } = C _ { 2 } = 1$ , then we say that $\phi$ is orthonormal, i.e. $\{ \phi ( \cdot - k ) \}$ k∈Z forms an orthonormal basis for $V ( \phi )$ . Recall that $\phi$ is orthonormal if and only if $\langle \phi , \phi ( \cdot - k ) \rangle = \delta _ { k , 0 }$ for all $k \in \mathbb { Z }$ 

The stability of function $\phi \in L _ { 2 } ( \mathbb { R } )$ can also be characterized by its bracket product which is well known in the literature (see e.g. [70, 61, 114, 156]). Now, we summarize and prove this characterization in the following lemma. 

Lemma 3.1. For any given $\phi \in L _ { 2 } ( \mathbb { R } )$ , then $\phi$ is stable, i.e. (3.13) is satisfied, if and only $i f [ \widehat { \phi } , \widehat { \phi } ]$ satisfies 

$$
0 <   C _ {1} \leq [ \widehat {\phi}, \widehat {\phi} ] (\xi) \leq C _ {2};\tag{3.14}
$$

holds for almost every $\xi \in \mathbb { R }$ with 

$$
\text { ess   inf } [ \widehat {\phi}, \widehat {\phi} ] = C _ {1} \quad a n d \quad \text { ess   sup } [ \widehat {\phi}, \widehat {\phi} ] = C _ {2}.
$$

As a consequence, $\phi$ and its shifts form an orthonormal basis of $V ( \phi ) \ i f$ and only $i f [ \widehat \phi , \widehat \phi ] = \bar { 1 }$ holds almost everywhere. Furthermore, assume that $\phi$ is compactly  supported, and then the upper bound of (3.14) or equivalently (3.13) is satisfied. 

Proof. For simplicity, we denote $\widetilde { \phi } : = [ \widehat { \phi } , \widehat { \phi } ] ^ { \frac { 1 } { 2 } }$ . Then for all finite sequences $b \in \ell _ { 2 } ( \mathbb { Z } )$  , we have the following identity (see proof of part (1) of Proposition 1.3) 

$$
2 \pi \left\| \sum_ {k \in \mathbb {Z}} b [ k ] \phi (\cdot - k) \right\| _ {L _ {2} (\mathbb {R})} ^ {2} = \| \widehat {b} \tilde {\phi} \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2}.\tag{3.15}
$$

Suppose $\tilde { \phi }$ satisfies (3.14). Then the upper bound of (3.14) implies that (3.15) is satisfied for all $b \in \ell _ { 2 } ( \mathbb { Z } )$ . Therefore, 

$$
C _ {1} \| \widehat {b} \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2} \leq \| \widehat {b} \tilde {\phi} \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2} \leq C _ {2} \| \widehat {b} \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2}
$$

with 

$$
C _ {1} = \operatorname{ess} \inf \left[ \widehat {\phi}, \widehat {\phi} \right] \quad \text { and } \quad C _ {2} = \operatorname{ess} \sup \left[ \widehat {\phi}, \widehat {\phi} \right],
$$

and hence (3.13) follows. 

Now suppose the upper bound of (3.13) is satisfied. If $\tilde { \phi }$ is not essentially bounded, then there exists a sequence of domains $\Omega _ { n } \subset [ - \pi , \pi ]$ with positive measure such that $\tilde { \phi } > n$ on $\Omega _ { n }$ . Let $c ^ { n }$ be a sequence in $\ell _ { 2 } ( \mathbb { Z } )$ satisfying $\widehat { c ^ { n } } = \chi _ { \Omega _ { r } }$ as $n \to \infty$ . Then by (3.15), we have 

$$
2 \pi \left\| \sum_ {k \in \mathbb {Z}} c ^ {n} [ k ] \phi (\cdot - k) \right\| _ {L _ {2} (\mathbb {R})} ^ {2} = \| \widehat {c ^ {n}} \tilde {\phi} \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2} \geq n \| \widehat {c ^ {n}} \| _ {L _ {2} ([ - \pi , \pi ])} ^ {2} = 2 \pi n \| c ^ {n} \| _ {\ell_ {2} (\mathbb {Z})} ^ {2}.
$$

This contradicts with the upper bound of (3.13). Therefore, $\tilde { \phi }$ must be essentially bounded and the upper bound of (3.14) follows. Notice that $\tilde { \phi }$ is essentially bounded away from 0 if and only if $1 / \tilde { \phi }$ is essentially bounded. Then using a similar argument we can show that the lower bound of (3.14) follows from that of (3.13). 

Now, we show that whenever $\phi$ is compactly supported, the upper bound of(3.14), or equivalently (3.13), is satisfied automatically. Indeed, part (2) of Propo-sition 1.3 implies that $\tilde { \phi }$ is the Fourier series of $\{ \langle \phi , \phi ( \cdot - k ) \rangle : k \in \mathbb { Z } \}$ which is afinite sequence since $\phi$ is compactly supported. Then $\tilde { \phi }$ is in fact a trigonometricpolynomial which is continuous and hence bounded on $[ - \pi , \pi ]$ 厂

Consider the compactly supported centered B-splines 

$$
\widehat {B} _ {m} (\xi) = e ^ {- i j \frac {\xi}{2}} \bigg (\frac {\sin (\xi / 2)}{\xi / 2} \bigg) ^ {m}.
$$

Since it is obvious that there is $C _ { 1 } > 0$ , such that $| \widehat { B } _ { m } ( \xi ) | > \sqrt { C _ { 1 } }$ for all $\xi \in [ - \pi , \pi ]$ 2 we have 

$$
[ \widehat {B} _ {m}, \widehat {B} _ {m} ] (\xi) = | \widehat {B} _ {m} (\xi) | ^ {2} + \sum_ {k \in \mathbb {Z} \backslash 0} | \widehat {B} _ {m} (\xi + 2 k \pi) | ^ {2} \geq | \widehat {B} _ {m} (\xi) | ^ {2} \geq C _ {1}.
$$

Hence all B-splines are stable. Next, we prove that all pseudo-splines are stable as given by [74]. 

Proposition 3.3. [74] All pseudo-splines for both types with arbitrary orders are stable. 

Proof. Here, we only prove stability for pseudo-splines of type II. The arguments for pseudo-splines of type I are similar. 

Let $\phi _ { ( m , l ) }$ be pseudo-spline of type II with order $( m , l )$ and $\widehat { \boldsymbol { a } } _ { ( m , l ) }$ be its re-finement mask. Since pseudo-splines are compactly supported functions in $L _ { 2 } ( \mathbb { R } )$ Lemma 3.1 tells us that we only need to show that there is a constant $C _ { 1 } > 0$ such that $C _ { 1 } \leq [ \widehat { \phi } _ { \left( m , l \right) } , \widehat { \phi } _ { \left( m , l \right) } ] ( \xi )$ holds for every $\xi \in \mathbb { R }$ 

 Since for each fixed $m \geq 1$ and for every $0 \leq l \leq m - 1$ , we have 

$$
P _ {m, l} (\sin^ {2} (\xi / 2)) \geq 1,
$$

and the following inequality 

$$
\cos^ {2 m} (\xi / 2) \leq \widehat {a} _ {(m, l)} (\xi)
$$

holds for all $\xi \in \mathbb { R }$ . Therefore, by (3.7), we have for all $\xi \in \mathbb { R }$ 

$$
| \widehat {B} _ {2 m} (\xi) | \leq | \widehat {\phi} _ {(m, l)} (\xi) |.\tag{3.16}
$$

Since $B _ { 2 m }$ is stable, there is a constant $C _ { 1 } > 0$ such that $C _ { 1 } \leq [ \widehat { \phi } _ { ( m , l ) } , \widehat { \phi } _ { ( m , l ) } ] ( \xi )$ holds for every $\xi \in \mathbb { R }$ . Altogether, we have that $\phi _ { ( m , l ) }$ is stable. 

Let $\phi _ { m }$ be the pseudo-splines of type I with order $( m , m - 1 )$ . Next, we show that $\phi _ { m }$ is orthonormal, which means $\phi _ { m }$ satisfies (3.13) with $C _ { 1 } = C _ { 2 } = 1$ . By Lemma 3.1, we know that $\phi _ { m }$ is orthonormal if and only if 

$$
[ \widehat {\phi} _ {m}, \widehat {\phi} _ {m} ] = 1\tag{3.17}
$$

almost everywhere. We now have the following proposition. 

Proposition 3.4. Pseudo-splines of type I with order $( m , m - 1 )$ are orthonormal refinable functions. 

Proof. All we need to show is that $[ \widehat { \phi } _ { m } , \widehat { \phi } _ { m } ] = 1$ a.e. We first note that for any $k \in \mathbb { Z } .$ , 

$$
\int_ {- \pi} ^ {\pi} [ \widehat {\phi} _ {m}, \widehat {\phi} _ {m} ] (\xi) e ^ {i k \xi} \mathrm{d} \xi = \int_ {\mathbb {R}} | \widehat {\phi} _ {m} (\xi) | ^ {2} e ^ {i k \xi} \mathrm{d} \xi .
$$

Define $f _ { 0 }$ such that $\widehat { f } _ { 0 } ( \xi ) = \chi _ { [ - \pi , \pi ] } ( \xi )$ . Using the identity (3.27) and following the same arguments as in the proof of Theorem 3.4, we have 

$$
\int_ {\mathbb {R}} | \widehat {f} _ {n} (\xi) | ^ {2} e ^ {i k \xi} \mathrm{d} \xi = \int_ {\mathbb {R}} | \widehat {f} _ {0} (\xi) | ^ {2} e ^ {i k \xi} \mathrm{d} \xi = \int_ {- \pi} ^ {\pi} e ^ {i k \xi} \mathrm{d} \xi = 2 \pi \delta_ {k, 0}.
$$

Then by the dominated convergence theorem (similarly as the proof of Theorem 3.4), we have 

$$
\int_ {\mathbb {R}} | \widehat {\phi} _ {m} (\xi) | ^ {2} e ^ {i k \xi} \mathrm{d} \xi = 2 \pi \delta_ {k, 0},
$$

which means 

$$
\int_ {- \pi} ^ {\pi} [ \widehat {\phi} _ {m}, \widehat {\phi} _ {m} ] (\xi) e ^ {i k \xi} \mathrm{d} \xi = 2 \pi \delta_ {k, 0}.
$$

This proves that $[ \widehat { \phi } _ { m } , \widehat { \phi } _ { m } ] = 1 \ \mathrm { a . e . } \ \quad \frac { \ d H } { \ d t } = 1 \ \mathrm { a . e . }$ 

Following arguments similar to those used in proving the previous proposition, we can show that all pseudo-splines of type II with order $( m , m - 1 )$ are indeed interpolatory as given by the following proposition. Recall that a continuous function $\phi \in L _ { 2 } ( \mathbb { R } )$ is said to be interpolatory if $\phi ( k ) = \delta _ { k , 0 }$ for $k \in \mathbb { Z }$ (see e.g. [79]). 

One of the key steps in the proof of the following proposition is to show that $| \widehat { \phi } ( \xi ) | \leq C ( 1 + | \xi | ) ^ { - 1 - \varepsilon }$ . In fact, the Fourier transform of pseudo-splines of type II with order $( m , m - 1 )$ has a faster decay than $O ( ( 1 + | \xi | ) ^ { - 1 - \varepsilon } )$ , which means they are actually smoother than merely continuous. We provide an optimal decay analysis of all pseudo-splines in Theorem 3.8. 

Proposition 3.5. All pseudo-splines of type II with order $( m , m - 1 )$ are interpolatory. 

Proof. Let $\phi$ be pseudo-spline of type II with order $( m , m - 1 )$ and $\widehat { a }$ be its refinement mask. First, we show that $| \widehat { \phi } ( \xi ) | \leq C ( 1 + | \xi | ) ^ { - 1 - \varepsilon }$ for some $\varepsilon > 0$ . Such decay makes sure that ${ \widehat { \phi } } \in L _ { 1 } ( \mathbb { R } )$ , which ensures the continuity of $\phi$ and thus $\phi ( k )$ is well-defined for all $k \in \mathbb { Z }$ 

Now, we show the decay of ${ \widehat { \phi } } .$ Recall from (3.3) that 

$$
\widehat {a} (\xi) = \cos^ {2 m} (\xi / 2) \sum_ {j = 0} ^ {m - 1} \binom {2 m - 1} {j} \sin^ {2 j} (\xi / 2) \cos^ {2 (m - j - 1)} (\xi / 2).
$$

Define 

$$
\mathcal {L} (\xi / 2) := \sum_ {j = 0} ^ {m - 1} \binom {2 m - 1} {j} \sin^ {2 j} (\xi / 2) \cos^ {2 (m - j - 1)} (\xi / 2).
$$

Then 

$$
\begin{array}{l} | \widehat {\phi} (\xi) | = \prod_ {j = 1} ^ {\infty} \bigg | \bigg (\frac {1 + e ^ {- i (2 ^ {- j} \xi)}}{2} \bigg) \bigg | ^ {2 m} \prod_ {j = 1} ^ {\infty} \mathcal {L} (2 ^ {- j} \xi) \\ \qquad = \Big | \Big (\frac {1 - e ^ {- i \xi}}{i \xi} \Big) \Big | ^ {2 m} \prod_ {j = 1} ^ {\infty} \mathcal {L} (2 ^ {- j} \xi) \\ \qquad \leq C (1 + | \xi |) ^ {- 2 m} \prod_ {j = 1} ^ {\infty} \mathcal {L} (2 ^ {- j} \xi). \end{array}\tag{3.18}
$$

By item 1 of Lemma 3.3, it is easy to see that sup $: { \mathcal { L } } ( \xi ) = 2 ^ { 2 m - 2 }$ . We now provide a decay estimate of $\textstyle \prod _ { i = 1 } ^ { \infty } { \mathcal { L } } ( 2 ^ { - j } \xi )$ . Since $\mathcal { L }$ is a trigonometric polynomial with $\mathcal { L } ( 0 ) = 1$ , we have $\begin{array} { r } { \mathcal { L } ( \boldsymbol { \xi } ) \leq 1 + C | \boldsymbol { \xi } | } \end{array}$ . Therefore, 

$$
\sup _ {| \xi | \leq 1} \prod_ {j = 1} ^ {\infty} \mathcal {L} (2 ^ {- j} \xi) \leq \sup _ {| \xi | \leq 1} \prod_ {j = 1} ^ {\infty} e ^ {C 2 ^ {- j} | \xi |} \leq e ^ {C}.
$$

For a given $| \xi | \geq 1$ , there exists $J \geq 1$ such that $2 ^ { J - 1 } \leq | \xi | \leq 2 ^ { J }$ . Therefore, 

$$
\begin{array}{l} \prod_ {j = 1} ^ {\infty} \mathcal {L} (2 ^ {- j} \xi) = \prod_ {j = 1} ^ {J} \mathcal {L} (2 ^ {- j} \xi) \prod_ {j = 1} ^ {\infty} \mathcal {L} (2 ^ {- j - J} \xi) \\ \qquad \leq 2 ^ {J (2 m - 2)} e ^ {C} \\ \qquad \leq C (1 + | \xi |) ^ {2 m - 2}. \end{array}\tag{3.19}
$$

$$
\widehat {\phi}.
$$

Now, proving $\phi$ is interpolatory is equivalent to showing that 

$$
\sum_ {k \in \mathbb {Z}} \phi (k) e ^ {- i k \xi} = 1\tag{3.20}
$$

almost everywhere. Define $\begin{array} { r } { \phi ^ { o } ( \xi ) : = \sum _ { k \in \mathbb { Z } } \widehat { \phi } ( \xi + 2 \pi k ) } \end{array}$ . Since ${ \widehat { \phi } } \in L _ { 1 } ( \mathbb { R } )$ , it is easy to show that $\phi ^ { o } \in L _ { 1 } ( [ - \pi , \pi ] )$   . Considering the Fourier coeficients of $\phi ^ { o }$ , we have 

$$
\widehat {\phi} ^ {o} [ k ] = \int_ {- \pi} ^ {\pi} \phi^ {o} (\xi) e ^ {i k \xi} \mathrm{d} \xi = \int_ {\mathbb {R}} \widehat {\phi} (\xi) e ^ {i k \xi} \mathrm{d} \xi = 2 \pi \phi (k).
$$

Since $\phi$ is compactly supported, we know that $\{ \phi [ k ] : k \in \mathbb { Z } \}$ is a finite sequence. Then $\begin{array} { r } { \sum _ { k \in \mathbb { Z } } | \widehat { \phi ^ { o } } [ k ] | < \infty } \end{array}$ , which means $\phi ^ { o }$ has a Fourier series with absolute conver- gence. Therefore, 

$$
\sum_ {k \in \mathbb {Z}} \widehat {\phi} (\xi + 2 \pi k) = \phi^ {o} (\xi) = \sum_ {k \in \mathbb {Z}} \phi (k) e ^ {- i k \xi}.\tag{3.21}
$$

Identity (3.21) is known as the Poisson summation formula. Combining (3.21) with (3.20) we have that $\phi$ is interpolatory if and only if 

$$
\sum_ {k \in \mathbb {Z}} \widehat {\phi} (\xi + 2 \pi k) = 1
$$

almost everywhere. Noting that ${ \widehat { a } } + { \widehat { a } } ( \cdot + \pi ) = 1$ , the rest of the proof follows similar  to that of Proposition 3.4 and we leave the details to the readers as an exercise. 

Note that pseudo-splines with order $( m , 0 )$ for both types are in fact B-splines. Pseudo-splines of Type I with order $( m , m - 1 )$ are the refinable functions with orthonormal shifts (called orthogonal refinable functions) given in [60]. The pseudosplines of Type II with order $( m , m - 1 )$ are the interpolatory refinable functions (which were first introduced in [79] and a systematic construction was given in [60]). The other pseudo-splines fill the gap between the B-splines and orthogonal or interpolatory refinable functions. 

Similarly, we have the stability of all dual pseudo-splines. 

Proposition 3.6. [72] All dual pseudo-splines are stable. 

## 2. Wavelets From Pseudo-splines

For a given pseudo-spline, there are many ways to construct pseudo-spline tight wavelet frames from it. Here, we provide a general construction of pseudo-spline tight wavelet frames. 

## 2.1. Framelets

In this Section, we give a construction of a tight wavelet frame system from pseudo-splines. The construction is from [75] which is motivated from [51] and one of the constructions of [65]. The construction can be applied to any refinable function whose mask is a trigonometric polynomial and satisfies (3.11). 

Construction 3.3. Let $\phi \in L _ { 2 } ( \mathbb { R } )$ be a compactly supported refinable function with its trigonometric polynomial refinement mask $\widehat { h } _ { 0 }$ satisfying $\widehat { h } _ { 0 } ( 0 ) = 1$ and (3.11). Let 

$$
T = 1 - | \widehat {h} _ {0} | ^ {2} - | \widehat {h} _ {0} (\cdot + \pi) | ^ {2} \quad a n d \quad \mathcal {A} := \frac {\sqrt {T}}{2},
$$

where $\sqrt { T }$ is obtained via the Fej´er-Riesz lemma. Define 

$$
\widehat {h} _ {1} (\xi) := e ^ {- i \xi} \overline {{\widehat {h} _ {0} (\xi + \pi)}}, \quad \widehat {h} _ {2} (\xi) := \mathcal {A} (\xi) + e ^ {- i \xi} \mathcal {A} (- \xi)
$$

and 

$$
\widehat {h} _ {3} (\xi) := e ^ {- i \xi} \overline {{\widehat {h} _ {2} (\xi + \pi)}}.
$$

Let $\Psi : = \{ \psi _ { 1 } , ~ \psi _ { 2 } , ~ \psi _ { 3 } \}$ , where 

$$
\widehat {\psi} _ {\ell} (\xi) = \widehat {h} _ {\ell} (\xi / 2) \widehat {\phi} (\xi / 2), \quad \ell = 1, 2, 3.
$$

Then $X ( \Psi )$ is a tight frame for $L _ { 2 } ( \mathbb { R } )$ . Moreover, assume that $\phi ,$ hence its refinement mask $\widehat { h } _ { 0 }$ , is symmetric about the origin. Then, $\psi _ { 1 }$ is symmetric about $\textstyle { \frac { 1 } { 2 } }$ , ψ<sub>2</sub> is symmetric about $\textstyle { \frac { 1 } { 4 } }$ and $\psi _ { 3 }$ is antisymmetric about $\textstyle { \frac { 1 } { 4 } }$ . 

Proof. By Theorem 2.2, in order to verify that $X ( \Psi )$ is a tight frame for $L _ { 2 } ( \mathbb { R } )$ , one needs to show that the masks $\{ \widehat { h } _ { 0 } , \widehat { h } _ { 1 } , \widehat { h } _ { 2 } , \widehat { h } _ { 3 } \}$ satisfy (2.6). Using the definitions of $\widehat { h } _ { 1 }$ and $\widehat { h } _ { 3 }$ 

$$
\widehat {h} _ {1} = e ^ {- i \xi} \overline {{\widehat {h} _ {0} (\cdot + \pi)}} \quad \text { and } \quad \widehat {h} _ {3} = e ^ {- i \xi} \overline {{\widehat {h} _ {2} (\cdot + \pi)}},
$$

we have 

$$
\sum_ {\ell = 0} ^ {3} \widehat {h _ {\ell}} \overline {{\widehat {h _ {\ell}} (\cdot + \pi)}} = \widehat {h} _ {0} \overline {{\widehat {h} _ {0} (\cdot + \pi)}} - \widehat {h} _ {0} \overline {{\widehat {h} _ {0} (\cdot + \pi)}} + \widehat {h} _ {2} \overline {{\widehat {h} _ {2} (\cdot + \pi)}} - \widehat {h} _ {2} \overline {{\widehat {h} _ {2} (\cdot + \pi)}} = 0.
$$

Next, we show that 

$$
\sum_ {\ell = 0} ^ {3} | \widehat {h} _ {\ell} | ^ {2} = 1.\tag{3.22}
$$

Since 

$$
| \widehat {h} _ {0} | ^ {2} + | \widehat {h} _ {1} | ^ {2} = | \widehat {h} _ {0} | ^ {2} + | \widehat {h} _ {0} (\cdot + \pi) | ^ {2},
$$

it remains to show that 

$$
| \widehat {h} _ {2} | ^ {2} + | \widehat {h} _ {3} | ^ {2} = 1 - | \widehat {h} _ {0} | ^ {2} - | \widehat {h} _ {0} (\cdot + \pi) | ^ {2} = T.
$$

Since $h _ { 0 }$ has real coeficients, we have $\widehat { h } _ { 0 } ( - \xi ) = \widehat { \widehat { h } } _ { 0 } ( \xi )$ , and thus $T ( \xi ) = T ( - \xi )$ Furthermore, $T ( \xi )$   is nonnegative and π-periodic. Then by the Fej´er-Riesz lemma (and spectral factorization [61, Lemma 6.1.3]), the function $\mathcal A ( \xi )$ is also π-periodic and has real Fourier coeficients. In summary, we have 

$$
\mathcal {A} (\xi) = \mathcal {A} (\xi + \pi), \quad \text { and } \quad | \mathcal {A} (\xi) | ^ {2} = | \mathcal {A} (- \xi) | ^ {2}, \quad \text { for   all } \xi \in \mathbb {R}.\tag{3.23}
$$

Since 

$$
\widehat {h} _ {2} (\xi) = \mathcal {A} (\xi) + e ^ {- i \xi} \mathcal {A} (- \xi) \quad \text { and } \quad \widehat {h} _ {3} (\xi) = e ^ {- i \xi} \widehat {h _ {2} (\cdot + \pi)} = e ^ {- i \xi} \mathcal {A} (- \xi) - \mathcal {A} (\xi),
$$

applying (3.23), one obtains 

$$
\begin{array}{r c l} {| \widehat {h} _ {2} (\xi) | ^ {2}} & = & {\left(\mathcal {A} (\xi) + e ^ {- i \xi} \mathcal {A} (- \xi)\right) \left(\overline {{\mathcal {A} (\xi)}} + e ^ {i \xi} \overline {{\mathcal {A} (- \xi)}}\right)} \\ & = & {| \mathcal {A} (\xi) | ^ {2} + | \mathcal {A} (- \xi) | ^ {2} + e ^ {i \xi} \mathcal {A} (\xi) \overline {{\mathcal {A} (- \xi)}} + e ^ {- i \xi} \mathcal {A} (- \xi) \overline {{\mathcal {A} (\xi)}}} \\ & = & {2 | \mathcal {A} (\xi) | ^ {2} + e ^ {i \xi} \mathcal {A} (\xi) \overline {{\mathcal {A} (- \xi)}} + e ^ {- i \xi} \mathcal {A} (- \xi) \overline {{\mathcal {A} (\xi)}}} \end{array}
$$

and 

$$
\begin{array}{r c l} {| \widehat {h} _ {3} (\xi) | ^ {2}} & = & {\left(e ^ {- i \xi} \mathcal {A} (- \xi) - \mathcal {A} (\xi)\right) \left(e ^ {i \xi} \overline {{\mathcal {A} (- \xi)}} - \overline {{\mathcal {A} (\xi)}}\right)} \\ & = & {| \mathcal {A} (\xi) | ^ {2} + | \mathcal {A} (- \xi) | ^ {2} - e ^ {i \xi} \mathcal {A} (\xi) \overline {{\mathcal {A} (- \xi)}} - e ^ {- i \xi} \mathcal {A} (- \xi) \overline {{\mathcal {A} (\xi)}}} \\ & = & {2 | \mathcal {A} (\xi) | ^ {2} - e ^ {i \xi} \mathcal {A} (\xi) \overline {{\mathcal {A} (- \xi)}} - e ^ {- i \xi} \mathcal {A} (- \xi) \overline {{\mathcal {A} (\xi)}}.} \end{array}
$$

Hence, 

$$
| \widehat {h} _ {2} (\xi) | ^ {2} + | \widehat {h} _ {3} (\xi) | ^ {2} = 4 | \mathcal {A} (\xi) | ^ {2} = T (\xi),
$$

which gives (3.22) and thus concludes that the masks $\{ \widehat { h } _ { 0 } , \widehat { h } _ { 1 } , \widehat { h } _ { 2 } , \widehat { h } _ { 3 } \}$ satisfy (2.6). Therefore, $X ( \Psi )$ is indeed a tight frame for $L _ { 2 } ( \mathbb { R } )$     by the unitary extension principle. 

Now we show that $\psi _ { 1 }$ is symmetric about $\textstyle { \frac { 1 } { 2 } }$ while $\psi _ { 2 }$ is symmetric about $\textstyle { \frac { 1 } { 4 } }$ and $\psi _ { 3 }$ is antisymmetric about $\textstyle { \frac { 1 } { 4 } }$ . It is well known that a function $f \in L _ { 2 } ( \mathbb { R } )$ , is symmetric about the point $\gamma _ { 1 } \in$ R if and only if 

$$
f (x) = f (2 \gamma_ {1} - x) \quad \mathrm{a.e.},
$$

which is equivalent to 

$$
\widehat {f} (\xi) = e ^ {- i 2 \gamma_ {1} \xi} \widehat {f} (- \xi) \quad \mathrm{a.e.}.\tag{3.24}
$$

Similarly, a function $f \in L _ { 2 } ( \mathbb { R } )$ is antisymmetric about the point $\gamma _ { 2 } \in \mathbb { R }$ if and only if 

$$
f (x) = - f (2 \gamma_ {2} - x) \quad \mathrm{a.e.},
$$

which is equivalent to 

$$
\widehat {f} (\xi) = - e ^ {- i 2 \gamma_ {2} \xi} \widehat {f} (- \xi) \quad \mathrm{a.e.}.\tag{3.25}
$$

By the definition of $\widehat { h } _ { 1 }$ and the fact that $\widehat { h } _ { 0 }$ is symmetric about the origin and 2π-periodic, one obtains 

$$
\widehat {h} _ {1} (\xi) = e ^ {- i \xi} \overline {{\widehat {h} _ {0} (\xi + \pi)}} = e ^ {- 2 i \xi} \big (e ^ {i \xi} \overline {{\widehat {h} _ {0} (- \xi + \pi)}} \big) = e ^ {- 2 i \xi} \widehat {h} _ {1} (- \xi).
$$

Since $\phi$ is symmetric about the origin, then by (3.24) one obtains 

$$
\widehat {\phi} (\xi) = \widehat {\phi} (- \xi), \quad \text { for   all } \xi \in \mathbb {R}.\tag{3.26}
$$

Therefore, 

$$
\widehat {\psi} _ {1} (\xi) = \widehat {h} _ {1} (\xi / 2) \widehat {\phi} (\xi / 2) = e ^ {- i \xi} \widehat {h} _ {1} (- \xi / 2) \widehat {\phi} (- \xi / 2) = e ^ {- i \xi} \widehat {\psi} _ {1} (- \xi),
$$

which, by (3.24), means that $\psi _ { 1 }$ is symmetric about $\textstyle { \frac { 1 } { 2 } }$ . Similarly by the definition of $\widehat { h } _ { 2 } ,$ , one obtains 

$$
\widehat {h} _ {2} (\xi) = \mathcal {A} (\xi) + e ^ {- i \xi} \mathcal {A} (- \xi) = e ^ {- i \xi} \bigl (\mathcal {A} (- \xi) + e ^ {i \xi} \mathcal {A} (\xi) \bigr) = e ^ {- i \xi} \widehat {h} _ {2} (- \xi).
$$

Applying (3.26) and the definition of $\widehat { \psi } _ { 2 }$ , one obtains, 

$$
\widehat {\psi} _ {2} (\xi) = \widehat {h} _ {2} (\xi / 2) \widehat {\phi} (\xi / 2) = e ^ {- i \frac {\xi}{2}} \widehat {h} _ {2} (- \xi / 2) \widehat {\phi} (- \xi / 2) = e ^ {- i \frac {\xi}{2}} \widehat {\psi} _ {2} (- \xi),
$$

which, by (3.24), means that ψ<sub>2</sub> is symmetric about $\textstyle { \frac { 1 } { 4 } }$ . Similarly, we can show that $\psi _ { 3 }$ is antisymmetric about $\textstyle { \frac { 1 } { 4 } }$ . □ 

Remark 3.5. Theorem 3.6 proves that the first framelet $\psi _ { 1 }$ constructed from dual pseudo-splines generates a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ ). Furthermore, when pseudo-splines of type I with order $( m , m - 1 )$ are used in Construction 3.3, the set $\Psi$ contains only one element $\psi$ which coincides with Daubechies’ orthonormal wavelets of order m [61, 60] (see the next subsection for more details). 

Next, we give one example of (anti)symmetric tight framelets constructed from Construction 3.3 using pseudo-splines of Type II with order (3, 1). 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/5f5aefae791c4c353a3fd1b6a2bfbb4ac5e9f8184b75578befc8a2151388220f.jpg)



(a)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/72a061d92da6ad80c8232f5b354a5cc66e259ca42d06ee41eb0aa88504f6426d.jpg)



(b)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/c320659cb53918ba3cabe86046c7ff1b4eec0275944714018644a6ce9b2265e3.jpg)



(c)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/41b9d7875cca3db3a6aa18aa525f482a860ec137f5b8a19d0aa6dbbd98508a60.jpg)



(d)



Figure 1. (a) is the pseudo-spline of Type II with order (3, 1) and (b)-(d) are the corresponding (anti)symmetric tight framelets.


Example 3.1. Let $\widehat { h } _ { 0 }$ to be the mask of the pseudo-spline of Type II with order (3, 1) i.e. 

$$
\widehat {h} _ {0} (\xi) = \cos^ {6} (\xi / 2) \big (1 + 3 \sin^ {2} (\xi / 2) \big).
$$

We define 

$$
\widehat {h} _ {1} (\xi) := e ^ {- i \xi} \overline {{\widehat {h} _ {0} (\xi + \pi)}} = e ^ {- i \xi} \sin^ {6} (\xi / 2) \big (1 + 3 \cos^ {2} (\xi / 2) \big),
$$

$$
\widehat {h} _ {2} (\xi) := \mathcal {A} (\xi) + e ^ {- i \xi} \mathcal {A} (- \xi) \quad \text { and } \quad \widehat {h} _ {3} (\xi) := e ^ {- i \xi} \mathcal {A} (- \xi) - \mathcal {A} (\xi),
$$

where 

$$
\begin{array}{c} \mathcal {A} = \frac {1}{2} \Big (0. 0 0 1 2 3 9 3 0 3 9 8 1 9 9 e ^ {- 4 i \xi} + 0. 0 0 1 3 9 8 6 8 6 0 5 0 5 2 e ^ {- 2 i \xi} - 0. 2 2 8 1 3 8 2 3 2 9 8 9 6 2 \\ \qquad \qquad \qquad \qquad + 0. 4 4 7 1 2 3 1 9 1 8 9 9 7 1 e ^ {2 i \xi} - 0. 2 2 1 6 2 2 9 4 8 9 4 2 6 0 e ^ {4 i \xi} \Big). \end{array}
$$

The graphs of Ψ are given by (b)-(d) in Figure 1. The tight frame system has approximation order 4. 

Since Construction 3.3 is generic and applies on any refinement mask, we can apply this construction on dual pseudo-splines. Notice that dual pseudo-splines are symmetric about $- 1 / 2$ . Then, we have the following simple results on the symmetry of the framelets constructed via Construction 3.3. Furthermore, arguments similar to those used in proving Theorem 3.6 can be used to prove that the first framelet $\psi _ { 1 }$ constructed from dual pseudo-splines generates a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ 

Proposition 3.7. Let $\Psi = \{ \psi _ { 1 } , \psi _ { 2 } , \psi _ { 3 } \}$ be the tight framelets constructed from Construction 3.3 from dual pseudo-splines. Then, $\psi _ { 1 }$ is antisymmetric about $\textstyle { \frac { 1 } { 2 } } .$ , ψ<sub>2</sub> is symmetric about 0 and ψ is antisymmetric about 0. 

## 2.2. Orthonormal Wavelets

In this subsection, we show that the tight frame systems constructed from Construction 3.3 using pseudo-splines of type I with order $( m , m - 1 )$ are orthonormal bases for $L _ { 2 } ( \mathbb { R } )$ . In fact, they are the orthonormal bases originally constructed by Daubechies in [60]. For simplicity, we denote pseudo-splines of type I with order $( m , m - 1 )$ simply as $\phi _ { m } .$ , and its mask as $a _ { m }$ . In fact, one can see easily that the masks, $a _ { m }$ , for all m are exactly the same as the refinement masks of the orthonormal refinable functions in [60] by item 1 of Lemma 3.3. 

By definition of pseudo-splines, we have 

$$
| \widehat {a} _ {m} (\xi) | ^ {2} + | \widehat {a} _ {m} (\xi + \pi) | ^ {2} = 1, \quad \mathrm{and} \quad \widehat {a} _ {m} (0) = 1.\tag{3.27}
$$

Under the condition (3.27), Construction 3.3 produces only one framelet $\psi$ with mask 

$$
\widehat {h} _ {1} (\xi) = e ^ {- i \xi} \overline {{\widehat {a} _ {m} (\xi + \pi)}}.
$$

Now, we show that the tight frame system $X ( \psi )$ is in fact an orthonormal basis for $L _ { 2 } ( \mathbb { R } )$ . Based on the unitary extension principle (Theorem 2.2), all we need to show is that $\| \phi _ { m } \| _ { 2 } = 1$ for any given $m \geq 1$ 

Theorem 3.4. Given $\phi _ { m }$ , pseudo-spline of type I with order $( m , m - 1 )$ , let $\psi$ be the single framelet constructed from Construction 3.3 using $\phi _ { m }$ . Then $X ( \psi )$ forms a compactly supported orthonormal wavelet basis for $L _ { 2 } ( \mathbb { R } )$ 

Proof. As we discussed above, all we need to show is that $\| \phi _ { m } \| _ { 2 } = 1$ or equivalently, $\| \widehat { \phi } _ { m } \| _ { 2 } ^ { 2 } = 2 \pi$ 

Consider the cascade algorithm defined by (same as (3.10)) 

$$
\widehat {f} _ {n} (\xi) = \widehat {a} _ {m} (\frac {\xi}{2}) \widehat {f} _ {n - 1} (\frac {\xi}{2}) = \prod_ {j = 1} ^ {n} \widehat {a} _ {m} (2 ^ {- j} \xi) \widehat {f} _ {0} (2 ^ {- n} \xi), \quad n > 0,
$$

with initial function $f _ { 0 }$ satisfying $\widehat { f } _ { 0 } ( \xi ) = \chi _ { [ - \pi , \pi ] } ( \xi )$ . By Proposition 3.1, ${ \widehat { f } } _ { n } \to { \widehat { \phi } } _ { m }$ pointwise as $n \to \infty$ 

Following a proof similar to that of Theorem 3.1, we have 

$$
\begin{array}{l} \| \widehat {f} _ {n} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \int_ {- 2 ^ {n} \pi} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n} | \widehat {a} _ {m} (2 ^ {- j} \xi) | ^ {2} \mathrm{d} \xi \\ \qquad = \int_ {0} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n - 1} | \widehat {a} _ {m} (2 ^ {- j} \xi) | ^ {2} \left(| \widehat {a} _ {m} (2 ^ {- n} \xi) | ^ {2} + | \widehat {a} _ {m} (2 ^ {- n} \xi + \pi) | ^ {2}\right) \mathrm{d} \xi \\ \text {(by (3.27))} = \int_ {0} ^ {2 ^ {n} \pi} \prod_ {j = 1} ^ {n - 1} | \widehat {a} _ {m} (2 ^ {- j} \xi) | ^ {2} \mathrm{d} \xi \\ \qquad = \| \widehat {f} _ {n - 1} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \dots = \| \widehat {f} _ {0} \| _ {L _ {2} (\mathbb {R})} ^ {2} = 2 \pi . \end{array}
$$

Note that 

$$
| \widehat {\phi} _ {m} (\xi) | ^ {2} \geq | B _ {2 m} (\xi) | = \left(\frac {\sin (\xi / 2)}{\xi / 2}\right) ^ {2 m} \geq C > 0, \quad \xi \in [ - \pi , \pi ].
$$

Then arguments similar to those in Proposition 3.2 imply that 

$$
\| \widehat {\phi} _ {m} \| _ {L _ {2} (\mathbb {R})} ^ {2} = \lim _ {n \to \infty} \| \widehat {f} _ {n} \| _ {L _ {2} (\mathbb {R})} ^ {2} = 2 \pi ,
$$

which concludes the proof of this theorem. 

## 2.3. Riesz Wavelets from Pseudo-splines

In this section, we focus on the structure of the tight frame systems constructed from pseudo-splines by applying the unitary extension principle [158]. We show that in all pseudo-spline tight frame systems constructed using Construction 3.3, there is one wavelet whose dilations and shifts already form a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ 

A system $X ( \psi )$ is a Riesz basis if there exist $1 < C _ { 1 } \leq C _ { 2 } < \infty$ such that, for all sequences $c \in \ell _ { 2 } ( \mathbb { Z } ^ { 2 } )$ 

$$
C _ {1} \| c \| _ {\ell_ {2} (\mathbb {Z} ^ {2})} \leq \left\| \sum_ {(n, k) \in \mathbb {Z} ^ {2}} c [ n, k ] \psi_ {n, k} \right\| _ {L _ {2} (\mathbb {R})} \leq C _ {2} \| c \| _ {\ell_ {2} (\mathbb {Z} ^ {2})}
$$

holds and the span of $\{ \psi _ { n , k } : \ n , k \in \mathbb { Z } \}$ is dense in $L _ { 2 } ( \mathbb { R } )$ . The function $\psi$ is called Riesz wavelet if $X ( \psi )$ forms a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ which is also called the Riesz wavelet system. When only the right hand side of the above inequalities holds, the wavelet system $X ( \psi )$ is a Bessel system. Note that the definition of a Bessel system used here is equivalent to the earlier definition which uses the right hand side of the inequality in the definition of the frame in (2.2) (see $\mathrm { e . g . } \ \mathrm { \bf [ 5 0 , 1 5 6 ] ) }$ . 

For a given stable refinable function $\phi \in L _ { 2 } ( \mathbb { R } )$ , the key step in the MRA-based construction of the Riesz wavelet $\psi$ is to select some desirable wavelet mask $h _ { 1 }$ with 

$$
\widehat {\psi} (2 \cdot) = \widehat {h} _ {1} \widehat {\phi}.
$$

When $\{ \phi ( \cdot - k ) : k \in \mathbb { Z } \}$ forms an orthonormal basis for $V _ { 0 } ( \phi ) , \ \mathrm { e . g . } \ \phi$ is a pseudospline of Type I with order $( m , m - 1 )$ , and if we choose $h _ { 1 }$ as 

$$
h _ {1} [ k ] = (- 1) ^ {k - 1} \overline {{h _ {0} [ 1 - k ]}}, \quad k \in \mathbb {Z},
$$

or equivalently 

$$
\widehat {h} _ {1} (\xi) = e ^ {- i \xi} \overline {{\widehat {h} _ {0} (\xi + \pi)}}.\tag{3.28}
$$

then Theorem 2.2 implies that the corresponding wavelet system $X ( \psi )$ is an orthonormal basis for $L _ { 2 } ( \mathbb { R } )$ ). It was shown in [103] that if φ is a B-spline, then the wavelet system $X ( \psi )$ with the corresponding wavelet mask $h _ { 1 }$ given by (3.28) is a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ . The first goal of this section is to show that if φ is any pseudo-spline with mask $h _ { 0 } .$ , then the wavelet system $X ( \psi )$ with the corresponding wavelet mask $h _ { 1 }$ given by (3.28) is a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ ). To prove this, we use the following theorem which is a special case of [103, Theorem 2.1]. Note that when both refinement masks are finitely supported the result is similar to those already obtained in [55, 56, 53]. 

Theorem 3.5. Let $h _ { 0 }$ be a finitely supported refinement mask ofa refinable function $\phi \in L _ { 2 } ( \mathbb { R } )$ with $\widehat { h } _ { 0 } ( 0 ) = 1$ and $\widehat { h } _ { 0 } ( \pi ) = 0$ , such that $\widehat { h } _ { 0 }$ can be factorized into the form 

$$
| \widehat {h} _ {0} (\xi) | = \left| \left(\frac {1 + e ^ {- i \xi}}{2}\right) ^ {n} \mathcal {L} (\xi) \right| = \cos^ {n} (\xi / 2) | \mathcal {L} (\xi) |, \quad \xi \in [ - \pi , \pi ],\tag{3.29}
$$

where $\mathcal { L }$ is the Fourier series ofa finitely supported sequence with $\mathcal { L } ( \pi ) \neq 0$ . Suppose that 

$$
| \widehat {h} _ {0} (\xi) | ^ {2} + | \widehat {h} _ {0} (\xi + \pi) | ^ {2} \neq 0, \quad \xi \in [ - \pi , \pi ].
$$

Define 

$$
\widehat {\psi} (2 \xi) := e ^ {- i \xi} \overline {{\widehat {h} _ {0} (\xi + \pi)}} \widehat {\phi} (\xi)
$$

and 

$$
\tilde {\mathcal {L}} (\xi) := \frac {\mathcal {L} (\xi)}{| \widehat {h} _ {0} (\xi) | ^ {2} + | \widehat {h} _ {0} (\xi + \pi) | ^ {2}}.\tag{3.30}
$$

Assume that 

$$
\rho_ {\mathcal {L}} := \| \mathcal {L} (\xi) \| _ {L _ {\infty} (\mathbb {R})} <   2 ^ {n - \frac {1}{2}} \quad a n d \quad \rho_ {\tilde {\mathcal {L}}} := \| \tilde {\mathcal {L}} (\xi) \| _ {L _ {\infty} (\mathbb {R})} <   2 ^ {n - \frac {1}{2}},\tag{3.31}
$$

Then $X ( \psi )$ is a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ 

Recall that the refinement masks of pseudo-splines of Type I and II are 

$$
| _ {1} \widehat {a} (\xi) | := \cos^ {m} (\xi / 2) \bigg (\sum_ {j = 0} ^ {l} \binom {m + l} {j} \sin^ {2 j} (\xi / 2) \cos^ {2 (l - j)} (\xi / 2) \bigg) ^ {\frac {1}{2}}
$$

and 

$$
{ } _ { 2 } \widehat { a } ( \xi ) : = \cos ^ { 2 m } ( \xi / 2 ) \sum _ { j = 0 } ^ { l } \binom { m + l } { j } \sin ^ { 2 j } ( \xi / 2 ) \cos ^ { 2 ( l - j ) } ( \xi / 2 ) .
$$

Using the polynomial $P _ { m , l } ( y )$ given by (3.4) with $y = \sin ^ { 2 } ( \xi / 2 )$ , we can rewrite $_ 1 \widehat { a }$ and $_ { 2 } { \widehat { a } }$ as 

$$
\left| _ {1} \widehat {a} \right| = \left((1 - y) ^ {m} P _ {m, l} (y)\right) ^ {\frac {1}{2}}, \quad {} _ {2} \widehat {a} = (1 - y) ^ {m} P _ {m, l} (y).\tag{3.32}
$$

Hence, the corresponding L function in (3.29) for pseudo-splines of Type I and II are 

$$
\left| _ {1} \mathcal {L} \right| = \left(P _ {m, l} (y)\right) ^ {\frac {1}{2}}, \quad \left| _ {2} \mathcal {L} \right| = P _ {m, l} (y).\tag{3.33}
$$

Furthermore, using $R _ { m , l } ( y )$ defined by (3.5), we have 

$$
| _ {1} \widehat {a} (\xi) | ^ {2} + | _ {1} \widehat {a} (\xi + \pi) | ^ {2} = R _ {m, l} (y) + R _ {m, l} (1 - y)
$$

and 

$$
| _ {2} \widehat {a} (\xi) | ^ {2} + | _ {2} \widehat {a} (\xi + \pi) | ^ {2} = R _ {m, l} ^ {2} (y) + R _ {m, l} ^ {2} (1 - y),
$$

with $y = \sin ^ { 2 } ( \xi / 2 )$ . Hence, 

$$
| _ {1} \tilde {\mathcal {L}} | = \frac {(P _ {m , l} (y)) ^ {\frac {1}{2}}}{R _ {m , l} (y) + R _ {m , l} (1 - y)} \quad \text {and} \quad | _ {2} \tilde {\mathcal {L}} | = \frac {P _ {m , l} (y)}{R _ {m , l} ^ {2} (y) + R _ {m , l} ^ {2} (1 - y)}.\tag{3.34}
$$

Theorem 3.5 tells us that the key step is to estimate the upper bounds of $| { \mathcal { L } } ( \xi ) |$ and $| \tilde { \mathcal { L } } ( \xi ) |$ |. The estimation of $\| _ { 1 } \tilde { \mathcal { L } } \| _ { L _ { \infty } ( \mathbb { R } ) }$ and $\| _ { 2 } \tilde { \mathcal { L } } \| _ { L _ { \infty } ( \mathbb { R } ) }$ are based on the following result: 

Proposition 3.8. Let m and l be given nonnegative integers with $l \leq m - 1$ and $| { _ 1 } \tilde { \mathcal { L } } |$ and $| { _ 2 } \tilde { \mathcal { L } } |$ be defined in (3.34). Then, 

$$
\begin{array}{r l} & {(1) \| _ {1} \tilde {\mathcal {L}} \| _ {L _ {\infty} (\mathbb {R})} = \sup _ {y \in [ 0, 1 ]} \frac {(P _ {m , l} (y)) ^ {\frac {1}{2}}}{R _ {m , l} (y) + R _ {m , l} (1 - y)} <   2 ^ {m - \frac {1}{2}}.} \\ & {(2) \| _ {2} \tilde {\mathcal {L}} \| _ {L _ {\infty} (\mathbb {R})} = \sup _ {y \in [ 0, 1 ]} \frac {P _ {m , l} (y)}{R _ {m , l} ^ {2} (y) + R _ {m , l} ^ {2} (1 - y)} <   2 ^ {2 m - \frac {1}{2}}.} \end{array}
$$

Proof. Item 1 of Lemma 3.3 gives 

$$
P _ {m, l} (y) = \sum_ {j = 0} ^ {l} \binom {m + l} {j} y ^ {j} (1 - y) ^ {l - j} = \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j},\tag{3.35}
$$

with $y \in [ 0 , 1 ]$ . Hence both $( P _ { m , l } ( y ) ) ^ { \frac { 1 } { 2 } }$ and $P _ { m , l } ( y )$ attain their maximum at $y = 1$ and the maximum values are: 

$$
(P _ {m, l} (1)) ^ {\frac {1}{2}} = \binom{m + l}{l} ^ {\frac {1}{2}} \quad \text { and } \quad P _ {m, l} (1) = \binom{m + l}{l}.
$$

By item 3 of Lemma 3.3, one obtains 

$$
\begin{array}{r c l} \| _ {1} \tilde {\mathcal {L}} \| _ {L _ {\infty} (\mathbb {R})} & = & \sup _ {y \in [ 0, 1 ]} \frac {(P _ {m , l} (y)) ^ {\frac {1}{2}}}{R _ {m , l} (y) + R _ {m , l} (1 - y)} \\ & \leq & \binom {m + l} {l} ^ {\frac {1}{2}} \max _ {y \in [ 0, 1 ]} \frac {1}{R _ {m , l} (y) + R _ {m , l} (1 - y)} \\ & \leq & \frac {2 ^ {m + l - 1} \binom {m + l} {l} ^ {\frac {1}{2}}}{\sum_ {j = 0} ^ {l} \binom {m + l} {j}}. \end{array}
$$

Applying item 3 of Lemma 3.2, i.e. 

$$
\frac {2 ^ {l} \binom {m + l} {l} ^ {\frac {1}{2}}}{\sum_ {j = 0} ^ {l} \binom {m + l} {j}} \leq 1,\tag{3.36}
$$

one obtains 

$$
\left\| _ {1} \tilde {\mathcal {L}} \right\| _ {L _ {\infty} (\mathbb {R})} \leq 2 ^ {m - 1} <   2 ^ {m - \frac {1}{2}}.
$$

The proof of (2) is similar to that of (1). Indeed, by item 4 of Lemma 3.3 and applying (3.36) again, we have 

$$
\begin{array}{r c l} \| _ {2} \tilde {\mathcal {L}} \| _ {L _ {\infty} (\mathbb {R})} & = & \sup _ {y \in [ 0, 1 ]} \frac {P _ {m , l} (y)}{R _ {m , l} ^ {2} (y) + R _ {m , l} ^ {2} (1 - y)} \\ & \leq & \binom {m + l} {l} \max _ {y \in [ 0, 1 ]} \frac {1}{R _ {m , l} ^ {2} (y) + R _ {m , l} ^ {2} (1 - y)} \\ & = & \frac {2 ^ {2 m + 2 l - 1} \binom {m + l} {l}}{\left(\sum_ {j = 0} ^ {l} \binom {m + l} {j}\right) ^ {2}} \leq 2 ^ {2 m - 1} <   2 ^ {2 m - \frac {1}{2}}. \end{array}
$$

Theorem 3.6. Let $_ { k } \phi , \ k = 1 , 2$ be the pseudo-spline of Type I and II with order $( m , l )$ . The refinement masks $_ { k } a , k = 1 , 2$ , are given in (3.2) and (3.3). Define 

$$
{ } _ { k } \widehat { \psi } ( 2 \xi ) : = e ^ { - i \xi } \overline { { { _ { k } \widehat { a } ( \xi + \pi ) } } } _ { k } \widehat { \phi } ( \xi ) , \quad k = 1 , 2 ,\tag{3.37}
$$

then $X ( \boldsymbol { \mathbf { \rho } } _ { k } \psi )$ forms a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ 

Proof. To apply Theorem 3.5, we first note that by items 3 and 4 of Lemma 3.3, 

$$
| _ {1} \widehat {a} (\xi) | ^ {2} + | _ {1} \widehat {a} (\xi + \pi) | ^ {2} = R _ {m, l} (\sin^ {2} (\xi / 2)) + R _ {m, l} (\cos^ {2} (\xi / 2)) \neq 0
$$

and 

$$
| _ {2} \widehat {a} (\xi) | ^ {2} + | _ {2} \widehat {a} (\xi + \pi) | ^ {2} = R _ {m, l} ^ {2} (\sin^ {2} (\xi / 2)) + R _ {m, l} ^ {2} (\cos^ {2} (\xi / 2)) \neq 0,
$$

for all $\xi \in [ - \pi , \pi ]$ 

Since Proposition 3.8 showed that 

$$
\rho_ {_ 1 \tilde {\mathcal {L}}} = \| _ {1} \tilde {\mathcal {L}} \| _ {L _ {\infty} (\mathbb {R})} <   2 ^ {m - \frac {1}{2}} \quad \text {and} \quad \rho_ {_ 2 \tilde {\mathcal {L}}} = \| _ {2} \tilde {\mathcal {L}} \| _ {L _ {\infty} (\mathbb {R})} <   2 ^ {2 m - \frac {1}{2}},
$$

we only need to check whether 

$$
\rho_ {1} \mathcal {L} = \| _ {1} \mathcal {L} \| _ {L _ {\infty} (\mathbb {R})} <   2 ^ {m - \frac {1}{2}}, \quad \rho_ {2} \mathcal {L} = \| _ {2} \mathcal {L} \| _ {L _ {\infty} (\mathbb {R})} <   2 ^ {2 m - \frac {1}{2}}.
$$

Indeed, we have 

$$
| _ {k} \widehat {a} (\xi) | ^ {2} + | _ {k} \widehat {a} (\xi + \pi) | ^ {2} \leq 1 \quad \text { for   all } \xi \in \mathbb {R}.
$$

Hence, 

$$
| _ {k} \mathcal {L} (\xi) | \leq | _ {k} \tilde {\mathcal {L}} (\xi) | \quad \text { for   all } \xi \in \mathbb {R}.
$$

This concludes the proof. 

Remark 3.6. The Riesz wavelet constructed in the above theorem has the same length of support and at least the same order of smoothness as that of the corresponding pseudo-spline. The order of its vanishing moments is the same as the order of the B-spline factor of the pseudo-spline. But, in general, its dual Riesz wavelet system is not compactly supported. However, this is not a problem for some applications. In applications like image compression, the short Riesz wavelet system can be applied to obtain a fast reconstruction algorithm, while decomposition is obtained by solving a linear system of equations (see [121]). 

In Construction 3.3 as well as in the three constructions of [65] for pseudosplines of Type I where the number of wavelets is either two or three (see [65] Section 3.1 for details), we observe that one of the wavelets $\psi _ { 1 }$ is defined by 

$$
\widehat {\psi} _ {1} := e ^ {- i \xi \overline {{\widehat {h} _ {0} (\xi + \pi)}}} \widehat {\phi} (\xi / 2),
$$

where $\widehat { h } _ { 0 }$ is the refinement mask of a pseudo-spline. Then, from Theorem 3.6, $X ( \psi _ { 1 } )$ forms a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ . This means that each pseudo-spline tight frame system constructed in [65] or by Construction 3.3, already has a subsystem form a Riesz basis for $L _ { 2 } ( \mathbb { R } )$ . Finally, we note that if dual pseudo-splines are used in Construction 3.3 or any of the constructions in [65], we will have the same conclusion by a similar argument as for pseudo-splines. 

## 3. Regularity of Pseudo-splines

This section is on theoretical analysis of pseudo-splines. Those who are interested in the basics of MRA-base wavelet frames and applications may skip this section. Also, we note that the material of this section is mainly taken from [75]. 

For $\alpha = n + \beta , n \in \mathbb { N } , 0 \leq \beta < 1$ , the H¨older space $C ^ { \alpha }$ (see e.g. [61]) is defined to be the set of functions which are n times continuously diferentiable and whose $n ^ { t h }$ derivative $f ^ { ( n ) }$ satisfies the condition, 

$$
\left| f ^ {(n)} (x + h) - f ^ {(n)} (x) \right| \leq C | h | ^ {\beta}, \forall x, h.
$$

It is well known (see [61]) that if 

$$
\int_ {\mathbb {R}} | \widehat {f} (\xi) | (1 + | \xi |) ^ {\alpha} <   \infty ,
$$

then $f \in C ^ { \alpha }$ . In particular, if $| { \widehat { f } } ( \xi ) | \leq C ( 1 + | \xi | ) ^ { - 1 - \alpha - \varepsilon }$ , then $f \in C ^ { \alpha }$ 

The main idea here is to obtain a lower bound of the regularity of pseudosplines with order $( m , l )$ by estimating the decay of the Fourier transform of them. It turns out that this lower bound coincides with the upper bound when m goes to infinity, as will be shown in Theorem 3.9. It is well known that the exact Sobolev regularity of a given refinable function can be obtained via its mask by applying the transfer operator (see e.g. [61, 161] and references in there). Although the Sobolev exponent of a given refinable function can be computed exactly through finding the spectrum of the transfer operator derived from the corresponding refinement mask, this approach does not lead itself to a systematic computation of Sobolev exponents for a class of refinable functions, such as pseudo-splines. This is simply because diferent refinable functions lead to diferent transfer operators. This is the main reason we give a systematic estimate of the decay of the Fourier transform of pseudo-splines instead. 

Since for any compactly supported refinable function φ in $L _ { 2 } ( \mathbb { R } )$ with $\widehat { \phi } ( 0 ) = 1$ the refinement mask $h _ { 0 }$ must satisfy $\widehat { h } _ { 0 } ( 0 ) = 1$ and $\widehat { h } _ { 0 } ( \pi ) = 0$  (see e.g. [61] or [116]), then $\widehat { h } _ { 0 } ( \xi )$ can be factored as 

$$
\widehat {h} _ {0} (\xi) = \left(\frac {1 + e ^ {- i \xi}}{2}\right) ^ {n} \mathcal {L} (\xi),
$$

where n is the maximum multiplicity of zeros of $\widehat { h } _ { 0 }$ at π and $\mathcal { L } ( \xi )$ is a trigonometric polynomial with $\mathcal { L } ( 0 ) = 1$ . Hence, we have 

$$
\widehat {\phi} (\xi) = \prod_ {j = 1} ^ {\infty} \widehat {a} (2 ^ {- j} \xi) = \prod_ {j = 1} ^ {\infty} \left(\frac {1 + e ^ {- i 2 ^ {- j} \xi}}{2}\right) ^ {n} \prod_ {j = 1} ^ {\infty} \mathcal {L} (2 ^ {- j} \xi) = \left(\frac {1 - e ^ {- i \xi}}{i \xi}\right) ^ {n} \prod_ {j = 1} ^ {\infty} \mathcal {L} (2 ^ {- j} \xi).
$$

This shows that any compactly supported refinable function in $L _ { 2 } ( \mathbb { R } )$ is the convolution of a B-spline of some order, say n, with a distribution (see [155]). Indeed, a B-spline of order n can be rewritten as 

$$
\widehat {B} _ {n} = \left(\frac {1 - e ^ {- i \xi}}{i \xi}\right) ^ {n}.
$$

It is a piecewise polynomial of degree $n - 1$ in $C ^ { n - 1 - \varepsilon } ( \mathbb { R } )$ , supported on $[ 0 , n ]$ and has refinement mask $\scriptstyle \left( { \frac { 1 + e ^ { - i \xi } } { 2 } } \right) ^ { \bar { n } }$ . Since $\mathcal { L } ( \xi )$ is bounded, $\mathcal { L } ( \xi )$ is actually the refinement mask of a refinable distribution (see e.g. [61]). Therefore, $\phi$ is the convolution of the B-spline $B _ { n }$ with the distribution. The regularity of $\phi$ comes from the B-spline factor while the distribution factor takes away the regularity. But the distribution component provides some desirable properties for $\phi ,$ such as interpolatory properties, orthogonality of its shifts and approximation order of certain quasi-interpolants. 

The decay of $| \widehat { \phi } |$ can be characterized by $| \widehat { h } _ { 0 } |$ as stated in the following theorem.  The proof of this theorem can be found in [61]. Note that in the following theorem, we write $| \widehat { h } _ { 0 } |$ in the form of 

$$
| \widehat {h} _ {0} (\xi) | = \left| \left(\frac {1 + e ^ {- i \xi}}{2}\right) ^ {n} \mathcal {L} (\xi) \right| = \cos^ {n} (\xi / 2) | \mathcal {L} (\xi) |, \quad \xi \in [ - \pi , \pi ].
$$

Theorem 3.7. [61] Let $h _ { 0 }$ be the refinement mask of the refinable function $\phi$ of the form 

$$
| \widehat {h} _ {0} (\xi) | = \cos^ {n} (\xi / 2) | \mathcal {L} (\xi) |, \quad \xi \in [ - \pi , \pi ].
$$

Suppose that 

$$
| \mathcal {L} (\xi) | \leq | \mathcal {L} (\frac {2 \pi}{3}) | \quad f o r | \xi | \leq \frac {2 \pi}{3},\tag{3.38}
$$

$$
| \mathcal {L} (\xi) \mathcal {L} (2 \xi) | \leq | \mathcal {L} (\frac {2 \pi}{3}) | ^ {2} \quad f o r \frac {2 \pi}{3} \leq | \xi | \leq \pi .
$$

Then $| \widehat { \phi } ( \xi ) | \leq C ( 1 + | \xi | ) ^ { - n + \kappa }$ , with $\kappa = \log ( | \mathcal L ( \frac { 2 \pi } { 3 } ) | ) / \log 2$ , and this decay is optimal. 

This theorem allows us to estimate the decay of the Fourier transform of a refinable function via its refinement mask. Since $| { 1 \widehat { \phi } } | ^ { 2 } = | { _ { 2 } \widehat { \phi } } |$ , the decay rate of $\big | _ { 1 } \widehat { \phi } \big |$ is half of that of $| { } _ { 2 } \widehat { \phi } |$   . Thus we can focus on the analysis of the decay of the Fourier transforms of pseudo-splines of Type II. Based on (1) of Lemma 3.3, we show that $P _ { m , l } ( y )$ , defined in (3.4), satisfies (3.38). This directly leads to the estimate of the regularity of pseudo-splines. Note that the corresponding result for $l = m - 1$ was proven in [54] which led to the optimal estimates for the decay of the Fourier transforms of the orthogonal and interpolatory refinable functions. Here, the more general result for pseudo-splines is obtained by a simpler proof than the original one of [54] and [61]. 

Proposition 3.9. [75] Let $P _ { m , l } ( y )$ be defined as in (3.4), where $l ,$ m are nonnegative integers with $l \leq m - 1$ . Then 

(3.39) 

$$
P _ {m, l} (y) \leq P _ {m, l} \bigl (\frac {3}{4} \bigr), \quad \text {   for   } y \in [ 0, \frac {3}{4} ],\tag{3.40}
$$

$$
P _ {m, l} (y) P _ {m, l} (4 y (1 - y)) \leq \left(P _ {m, l} \bigl (\frac {3}{4} \bigr)\right) ^ {2}, \quad \text {   for   } y \in [ \frac {3}{4}, 1 ].
$$

Proof. Since $P _ { m , l } ( y )$ is monotonically increasing (using item 1 of Lemma 3.3), (3.39) is obviously true. Hence, we focus on the proof of (3.40). 

Throughout this proof, we let m be fixed. Let 

$$
W _ {m, l} (y) := P _ {m, l} (y) P _ {m, l} (4 y (1 - y)) - \left(P _ {m, l} \left(\frac {3}{4}\right)\right) ^ {2}.
$$

Then, the inequality (3.40) is equivalent to 

$$
W _ {m, l} (y) \leq 0 \quad \text { for   all } y \in [ \frac {3}{4}, 1 ].\tag{3.41}
$$

Note that when $l = 0 , P _ { m , 0 } ( y ) = 1$ for all $y \in [ 0 , 1 ] ;$ ; then (3.41) is obviously true for $l = 0$ . Therefore, if we can show that 

$$
W _ {m, l + 1} (y) - W _ {m, l} (y) \leq 0, \quad \text { for   all } y \in [ \frac {3}{4}, 1 ], \quad l = 0, 1, \dots , m - 2,\tag{3.42}
$$

then (3.41) follows from (3.42) which is equivalent to (3.40). We now focus on the inequality (3.42). 

Using item 1 of Lemma 3.3, we have 

$$
\begin{array}{l} W _ {m, l + 1} (y) - W _ {m, l} (y) = \left(\sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} y ^ {j}\right) \left(\sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j}\right) \\ \qquad - \left(\sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j}\right) \left(\sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j}\right) \\ \qquad + P _ {m, l} ^ {2} (\frac {3}{4}) - P _ {m, l + 1} ^ {2} (\frac {3}{4}). \end{array}
$$

Splitting the sum $\textstyle \sum _ { j = 0 } ^ { l + 1 } { \binom { m - 1 + j } { j } } y ^ { j }$ , one obtains 

$$
\begin{array}{l} W _ {m, l + 1} (y) - W _ {m, l} (y) = \left(\sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j}\right) \left(\sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j}\right) \\ \quad + \binom {m + l} {l + 1} y ^ {l + 1} \sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j} \\ \quad - \left(\sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j}\right) \left(\sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j}\right) \\ \quad + P _ {m, l} ^ {2} (\frac {3}{4}) - P _ {m, l + 1} ^ {2} (\frac {3}{4}). \end{array}
$$

Combining the first and the third term, one obtains 

$$
\begin{array}{r c l} W _ {m, l + 1} (y) - W _ {m, l} (y) & = & \binom {m + l} {l + 1} (4 y (1 - y)) ^ {l + 1} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j} \\ & & + \binom {m + l} {l + 1} y ^ {l + 1} \sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j} \\ & & + P _ {m, l} ^ {2} (\frac {3}{4}) - P _ {m, l + 1} ^ {2} (\frac {3}{4}) \\ & = & \binom {m + l} {l + 1} \Bigg ((4 y (1 - y)) ^ {l + 1} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j} \\ & & + y ^ {l + 1} \sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j} \Bigg) \\ & & + P _ {m, l} ^ {2} (\frac {3}{4}) - P _ {m, l + 1} ^ {2} (\frac {3}{4}). \end{array}\tag{3.43}
$$

Since $\begin{array} { r } { W _ { m , l + 1 } \bigl ( \frac { 3 } { 4 } \bigr ) - W _ { m , l } \bigl ( \frac { 3 } { 4 } \bigr ) = 0 - 0 = 0 } \end{array}$ , it sufices to show that $W _ { m , l + 1 } ( y ) \textrm { - }$ $W _ { m , l } ( y )$ monotonically decreases on $[ \frac { 3 } { 4 } , 1 ]$ , which is equivalent to showing that 

$$
G (y) := (4 y (1 - y)) ^ {l + 1} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j} + y ^ {l + 1} \sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j}
$$

monotonically decreases on $[ \textstyle { \frac { 3 } { 4 } } , 1 ]$ . We now compute $G ^ { \prime }$ as follows: 

$$
\begin{array}{l c l} G ^ {\prime} (y) & = & (l + 1) (4 - 8 y) (4 y (1 - y)) ^ {l} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j} \\ & & + (4 y (1 - y)) ^ {l + 1} \sum_ {j = 1} ^ {l} \binom {m - 1 + j} {j} j y ^ {j - 1} \\ & & + (l + 1) y ^ {l} \sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j} \\ & & + y ^ {l + 1} (4 - 8 y) \sum_ {j = 1} ^ {l + 1} \binom {m - 1 + j} {j} j (4 y (1 - y)) ^ {j - 1} \\ & = & (l + 1) (4 - 8 y) (4 y (1 - y)) ^ {l} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j} \\ & & + (4 y (1 - y)) ^ {l + 1} \sum_ {j = 0} ^ {l - 1} \binom {m + j} {j + 1} (j + 1) y ^ {j} \\ & & + (l + 1) y ^ {l} \sum_ {j = 0} ^ {l + 1} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j} \\ & & + y ^ {l + 1} (4 - 8 y) \sum_ {j = 0} ^ {l} \binom {m + j} {j + 1} (j + 1) (4 y (1 - y)) ^ {j}. \end{array}
$$

Applying item 1 of Lemma 3.2 to the second and the fourth term above, one obtains 

$$
\begin{array}{l c l} G ^ {\prime} (y) & = & (l + 1) (4 - 8 y) (4 y (1 - y)) ^ {l} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j} \\ & & + (4 y (1 - y)) ^ {l + 1} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} (m + j) y ^ {j} \\ & & - (m + l) \binom {m - 1 + l} {l} y ^ {l} (4 y (1 - y)) ^ {l + 1} \\ & & + (l + 1) y ^ {l} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} (4 y (1 - y)) ^ {j} \\ & & + (l + 1) \binom {m + l} {l + 1} y ^ {l} (4 y (1 - y)) ^ {l + 1} \\ & & + y ^ {l + 1} (4 - 8 y) \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} (m + j) (4 y (1 - y)) ^ {j}. \end{array}
$$

$\mathrm { B y ~ } ( l + 1 ) { \binom { m + l } { l + 1 } } = ( m + l ) { \binom { m - 1 + l } { l } }$ (item 1 of Lemma 3.2), we have 

$$
(l + 1) \binom {m + l} {l + 1} y ^ {l} (4 y (1 - y)) ^ {l + 1} - (m + l) \binom {m - 1 + l} {l} y ^ {l} (4 y (1 - y)) ^ {l + 1} = 0.
$$

Hence, 

$$
\begin{array}{l} G ^ {\prime} (y) = \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} \Bigg ((l + 1) (4 - 8 y) (4 y (1 - y)) ^ {l} y ^ {j} + (m + j) (4 y (1 - y)) ^ {l + 1} y ^ {j} \\ \qquad \qquad \qquad + (l + 1) y ^ {l} (4 y (1 - y)) ^ {j} + (m + j) (4 - 8 y) y ^ {l + 1} (4 y (1 - y)) ^ {j} \Bigg). \end{array}
$$

Noting the common factor $y ^ { j } ( 4 y ( 1 - y ) ) ^ { j }$ in the right hand side of the above equation, one obtains 

$$
\begin{array}{l} G ^ {\prime} (y) = \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j} (4 y (1 - y)) ^ {j} \bigg ((l + 1) (4 - 8 y) (4 y (1 - y)) ^ {l - j} \\ \qquad + (m + j) (4 y (1 - y)) ^ {l + 1 - j} + (l + 1) y ^ {l - j} + (m + j) (4 - 8 y) y ^ {l + 1 - j} \bigg). \end{array}
$$

For $0 \leq j \leq l \leq m - 2$ , consider 

$$
\begin{array}{r c l} g _ {l, j} (y) & := & (l + 1) (4 - 8 y) \big (4 y (1 - y) \big) ^ {l - j} + (m + j) \big (4 y (1 - y) \big) ^ {l + 1 - j} \\ & & + (l + 1) y ^ {l - j} + (m + j) (4 - 8 y) y ^ {l + 1 - j} \\ & = & (l + 1) (4 y (1 - y)) ^ {l - j} \Big (4 y (1 - y) - (8 y - 4) \Big) + (l + 1) y ^ {l - j} \Big (1 - (8 y - 4) y \Big) \\ & & + (m + j - l - 1) \Big ((4 y (1 - y)) ^ {l + 1 - j} - (8 y - 4) y ^ {l + 1 - j} \Big). \end{array}
$$

The inequality $4 y ( 1 - y ) \leq y$ and $8 y - 4 \geq 2$ for $y \in [ 3 / 4 , 1 ]$ show that $g _ { l , j } ( y ) \leq 0$ and $G ^ { \prime } ( y ) \leq 0$ on this interval. ■ 

Remark 3.7. It is clear that $W _ { m , 0 } ( y ) = 0 , y \in [ \frac { 3 } { 4 } , 1 ]$ , because $P _ { m , 0 } = 1$ . It was also proven by [54] that $W _ { m , m - 1 } ( y ) \leq 0 , y \in [ \frac { 3 } { 4 } , 1 ]$ , which is equivalent to (3.40). The decreasing of $W _ { m , l } ( y )$ , for $y \in [ \frac { 3 } { 4 } , 1 ]$ , as l increases shown above indicates some dificulties in directly proving (3.40) for an arbitrary $l , 0 < l < m - 1$ , because it has a smaller margin than the case when $l = m - 1$ . In fact, to some extent, the proof of (3.40) for the case when $l = m - 1$ relies on a numerical check for $m \leq 1 2$ (see [61]). Inequality (3.40) for the case $l = m - 1$ as proven in [54] (also see [61]) is one of the cornerstones of the wavelet theory, because it immediately leads to the optimal estimate of the decay of the Fourier transforms (hence, an estimate of the regularity) of both interpolatory and orthogonal refinable functions. Here, we take a diferent approach by proving that $W _ { m , l } ( y ) , y \in [ \frac { 3 } { 4 } , 1 ]$ , decreases as l increases. As a result, we obtain (3.40) for all $0 \leq l \leq m - 1$ by the fact that $W _ { m , 0 } ( y ) = 0$ $y \in [ \frac { 3 } { 4 } , 1 ]$ This shows that introducing the concepts of the pseudo-splines gives a better understanding and a more complete picture of the proof of (3.40) and also, we hope, enriches the theory of wavelets. Note that the proof of (3.40) for all $0 \leq l \leq m - 1$ given here does not rely on any numerical computation and is simpler than the original proof of [54] and [61]. More recently, the authors in [136] provided a simpler proof of Proposition 3.9. 

With this proposition, one obtains the regularity of pseudo-splines by applying Theorem 3.7. 

$$
| _ {2} \widehat {\phi} (\xi) | \leq C \big (1 + | \xi | \big) ^ {- 2 m + \kappa},
$$

Theorem 3.8. [75] Let $_ { 2 \phi }$ be the pseudo-spline of Type II with order $( m , l )$ . Then where $\kappa = \log ( P _ { m , l } ( \frac { 3 } { 4 } ) ) / \log 2$ . Consequently, ${ } _ { 2 } \phi \in C ^ { \alpha _ { 2 } - \varepsilon }$ with $\alpha _ { 2 } = 2 m - \kappa - 1$ Furthermore, let $_ { 1 } \phi$ be the pseudo-spline of Type I with order $( m , l )$ . Then 

$$
\left| _ {1} \widehat {\phi} (\xi) \right| \leq C \big (1 + | \xi | \big) ^ {- m + \frac {\kappa}{2}}.
$$

Consequently, $_ { 1 } \phi \in C ^ { \alpha _ { 1 } - \varepsilon }$ with $\alpha _ { 1 } = m - \textstyle { \frac { \kappa } { 2 } } - 1$ 

Proof. Since 

$$
\begin{array}{r c l} _ {2} \widehat {a} (\xi) & = & \cos^ {2 m} (\xi / 2) \sum_ {j = 0} ^ {l} \binom {m + l} {j} \sin^ {2 j} (\xi / 2) \cos^ {2 (l - j)} (\xi / 2) \\ & = & \left(\cos (\xi / 2)\right) ^ {2 m} P _ {m, l} (\sin^ {2} (\xi / 2)), \end{array}
$$

the function $| { \mathcal { L } } ( \xi ) |$ in Theorem 3.7 is exactly $P _ { m , l } ( \sin ^ { 2 } ( \xi / 2 ) )$ . Applying (3.39) of Proposition 3.9 

$$
P _ {m, l} (y) \leq P _ {m, l} \bigl (\frac {3}{4} \bigr), \quad y \in [ 0, \frac {3}{4} ],
$$

and using $y = \sin ^ { 2 } ( \xi / 2 )$ , we have 

$$
\begin{array}{r c l} | \mathcal {L} (\xi) | & = & P _ {m, l} (\sin^ {2} (\xi / 2)) \\ & = & P _ {m, l} (y) \leq P _ {m, l} \bigl (\frac {3}{4} \bigr) = P _ {m, l} (\sin^ {2} (\frac {\pi}{3})) \quad \text { for } | \xi | \leq \frac {2 \pi}{3}. \end{array}
$$

Note that 

$$
| \mathcal {L} (2 \xi) | = P _ {m, l} (\sin^ {2} (\xi)) = P _ {m, l} (4 \sin^ {2} (\xi / 2) (1 - \sin^ {2} (\xi / 2))) = P _ {m, l} (4 y (1 - y)).
$$

Applying (3.40) of Proposition 3.9 

$$
P _ {m, l} (y) P _ {m, l} (4 y (1 - y)) \leq \left(P _ {m, l} \bigl (\frac {3}{4} \bigr)\right) ^ {2}, \quad y \in [ \frac {3}{4}, 1 ],
$$

we have 

$$
\begin{array}{r c l} | \mathcal {L} (\xi) \mathcal {L} (2 \xi) | & = & P _ {m, l} (\sin^ {2} (\xi / 2)) P _ {m, l} (4 \sin^ {2} (\xi / 2) (1 - \sin^ {2} (\xi / 2))) \\ & = & P _ {m, l} (y) P _ {m, l} (4 y (1 - y)) \\ & \leq & \left(P _ {m, l} \bigl (\frac {3}{4} \bigr)\right) ^ {2} = \left(P _ {m, l} (\sin^ {2} (\frac {\pi}{3}))\right) ^ {2}, \quad \text {for} \frac {2 \pi}{3} \leq | \xi | \leq \pi . \end{array}
$$

Hence, by Theorem $3 . 7 , \widehat { _ { 2 } \phi }$ satisfies 

$$
| _ {2} \widehat {\phi} (\xi) | \leq C (1 + | \xi |) ^ {- 2 m + \kappa},
$$

where $\kappa = \log ( P _ { m , l } ( \frac { 3 } { 4 } ) ) / \log 2$ . This leads to ${ } _ { 2 } \phi \in C ^ { \alpha _ { 2 } - \varepsilon }$ , where $\alpha _ { 2 } = 2 m - \kappa - 1$ 

Since the decay of $\big | _ { 1 } \widehat { \phi } \big |$ is exactly half of $| { } _ { 2 } \widehat { \phi } |$ , we have 

$$
\left| _ {1} \widehat {\phi} (\xi) \right| \leq C \big (1 + | \xi | \big) ^ {- m + \frac {\kappa}{2}},
$$

consequently ${ \mathfrak { \sigma } } \in C ^ { \alpha _ { 1 } - \varepsilon }$ , where $\alpha _ { 2 } = m - \textstyle { \frac { \kappa } { 2 } } - 1$ 厂

Table 1 gives the decay rates $\beta _ { m , l }$ of the Fourier transform of pseudo-splines of $\mathrm { T y p e }$ II with order $( m , l )$ , for $2 \leq m \leq 8$ and $1 \leq l \leq m - 1$ . The regularity exponent of the corresponding pseudo-spline is, at least, $\alpha _ { 2 } = \beta _ { m , l } - 1 - \varepsilon$ . The decay rate of the Fourier transform of the pseudo-spline of Type I with the same order is $\frac { \beta _ { m , l } } { 2 }$ and its regularity exponent $\alpha _ { 1 }$ is $\textstyle { \frac { \alpha _ { 2 } - 1 } { 2 } }$ . Therefore, the table shows that for either type of the pseudo-splines and fixed order $m ,$ the decay rate of their Fourier transform decreases as l increases, while for fixed l, it increases as m increases. This is true indeed as shown in the following proposition. 


Table 1. Decay rates $\beta _ { m , l } = 2 m - \kappa$ of pseudo-splines of Type II with order $( m , l )$ , for $2 \leq m \leq 8$ and $1 \leq l \leq m - 1$


<table><tr><td>(m,l)</td><td>l=1</td><td>l=2</td><td>l=3</td><td>l=4</td><td>l=5</td><td>l=6</td><td>l=7</td></tr><tr><td>m=2</td><td>2.67807</td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>m=3</td><td>4.29956</td><td>3.27208</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>m=4</td><td>6.00000</td><td>4.73321</td><td>3.82507</td><td></td><td></td><td></td><td></td></tr><tr><td>m=5</td><td>7.75207</td><td>6.27890</td><td>5.19506</td><td>4.35316</td><td></td><td></td><td></td></tr><tr><td>m=6</td><td>9.54057</td><td>7.88626</td><td>6.64465</td><td>5.66363</td><td>4.86449</td><td></td><td></td></tr><tr><td>m=7</td><td>11.35614</td><td>9.54057</td><td>8.15608</td><td>7.04717</td><td>6.13261</td><td>5.36349</td><td></td></tr><tr><td>m=8</td><td>13.19265</td><td>11.23182</td><td>9.71691</td><td>8.48992</td><td>7.46770</td><td>6.59988</td><td>5.85310</td></tr></table>

Proposition 3.10. [75] Let $\beta _ { m , l } = 2 m - \kappa$ with $\kappa = \log P _ { m , l } \mathopen { } \mathclose \bgroup \left( \frac { 3 } { 4 } \aftergroup \egroup \right) / \log 2$ as given in Theorem 3.8 and $0 \leq l \leq m - 1$ . Then: 

(1) For fixed $m , \beta _ { m , l }$ decreases as l increases. 

(2) For fixed $l , \beta _ { m , l }$ increases as m increases. 

(3) When $l = m - 1 , \beta _ { m , l }$ increases as m increases. 

Consequently, the decay rate $\beta _ { 2 , 1 } = 2 . 6 7 8 0 7$ is the smallest among all $\beta _ { m , l }$ , with $\geq 2$ and $0 \leq l \leq m - 1$ 

Proof. Part (1) follows directly from item 1 of Lemma 3.3, which shows that $P _ { m , l } \left( { \frac { 3 } { 4 } } \right)$ increases with l for fixed m. 

For part (2), note that 

$$
\beta_ {m, l} = 2 m - \frac {\log P _ {m , l} \left(\frac {3}{4}\right)}{\log 2}.
$$

Consider 

$$
2 ^ {\beta_ {m, l}} = 2 ^ {2 m - \frac {\log P _ {m , l} \left(\frac {3}{4}\right)}{\log 2}} = \frac {4 ^ {m}}{P _ {m , l} \left(\frac {3}{4}\right)} = \frac {1}{4 ^ {- m} P _ {m , l} \left(\frac {3}{4}\right)}.
$$

Hence, part (2) is equivalent to the fact that 

$$
I _ {m} := 4 ^ {- m} P _ {m, l} \bigl (\frac {3}{4} \bigr)
$$

decreases as m increases for fixed l, which is equivalent to that for fixed $0 \leq l \leq$ $m - 1$ , 

$$
I _ {m + 1} - I _ {m} <   0.\tag{3.44}
$$

Note that 

$$
\begin{array}{r c l} I _ {m + 1} - I _ {m} & = & 4 ^ {- m - 1} P _ {m + 1, l} \bigl (\frac {3}{4} \bigr) - 4 ^ {- m} P _ {m, l} \bigl (\frac {3}{4} \bigr) \\ & = & 4 ^ {- m - 1} \sum_ {j = 0} ^ {l} \biggl (\binom {m + j} {j} - 4 \binom {m - 1 + j} {j} \biggr) \bigl (\frac {3}{4} \bigr) ^ {j}. \end{array}
$$

Inequality (3.44) follows from the fact that for $0 \leq j \leq m - 1$ 

$$
\binom {m + j} {j} = \frac {m + j}{m} \binom {m - 1 + j} {j} = (1 + \frac {j}{m}) \binom {m - 1 + j} {j} <   4 \binom {m - 1 + j} {j}.\tag{3.45}
$$

This concludes the proof of part (2). 

Following an argument similar to that of part (2), one can show that part (3) is equivalent to having that 

$$
J _ {m} := 4 ^ {- m} P _ {m, m - 1} \bigl (\frac {3}{4} \bigr)
$$

decreases as m increases, which is equivalent to 

$$
J _ {m + 1} - J _ {m} <   0 \quad \text { for } m \geq 1.\tag{3.46}
$$

Following a direct computation, we have 

$$
J _ {m + 1} - J _ {m} = 4 ^ {- m - 1} \bigg (\sum_ {j = 0} ^ {m} \binom {m + j} {j} (\frac {3}{4}) ^ {j} - 4 \sum_ {j = 0} ^ {m - 1} \binom {m - 1 + j} {j} (\frac {3}{4}) ^ {j} \bigg).
$$

Let 

$$
M := \sum_ {j = 0} ^ {m} \binom {m + j} {j} (\frac {3}{4}) ^ {j} - 4 \sum_ {j = 0} ^ {m - 1} \binom {m - 1 + j} {j} (\frac {3}{4}) ^ {j}.
$$

Then, (3.46) is equivalent to $M < 0$ for $m \geq 1$ . It is easy to see that $M < 0$ , when $m = 1$ . For the case $m \geq 2$ , we first note that 

$$
\begin{array}{r c l} M & = & \sum_ {j = 0} ^ {m - 1} \binom {m + j} {j} (\frac {3}{4}) ^ {j} - 4 \sum_ {j = 0} ^ {m - 1} \binom {m - 1 + j} {j} (\frac {3}{4}) ^ {j} + \binom {2 m} {m} (\frac {3}{4}) ^ {m} \\ & = & \sum_ {j = 1} ^ {m - 1} \binom {m - 1 + j} {j - 1} (\frac {3}{4}) ^ {j} - 3 \sum_ {j = 0} ^ {m - 1} \binom {m - 1 + j} {j} (\frac {3}{4}) ^ {j} + \binom {2 m} {m} (\frac {3}{4}) ^ {m}, \end{array}
$$

where the last identity follows from item 1 of Lemma 3.2. Substituting $j$ for $j - 1$ in the first term, one obtains that 

$$
M = \frac {3}{4} \sum_ {j = 0} ^ {m - 2} \binom {m + j} {j} (\frac {3}{4}) ^ {j} - 3 \sum_ {j = 0} ^ {m - 1} \binom {m - 1 + j} {j} (\frac {3}{4}) ^ {j} + \binom {2 m} {m} (\frac {3}{4}) ^ {m},\tag{3.47}
$$

Splitting the second term in (3.47), one obtains 

$$
\begin{array}{l} M = \frac {3}{4} \sum_ {j = 0} ^ {m - 2} \binom {m + j} {j} (\frac {3}{4}) ^ {j} - 3 \sum_ {j = 0} ^ {m - 2} \binom {m - 1 + j} {j} (\frac {3}{4}) ^ {j} \\ \quad + \binom {2 m} {m} (\frac {3}{4}) ^ {m} - 3 \binom {2 m - 2} {m - 1} (\frac {3}{4}) ^ {m - 1} \end{array}\tag{3.48}
$$

For the last two terms of (3.48), we have 

$$
\begin{array}{l} \binom {2 m} {m} \big (\frac {3}{4} \big) ^ {m} - 3 \binom {2 m - 2} {m - 1} \big (\frac {3}{4} \big) ^ {m - 1} = \big (\frac {3}{4} \big) ^ {m} \Bigg (\binom {2 m} {m} - 4 \binom {2 m - 2} {m - 1} \Bigg) \\ \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad = \big (\frac {3}{4} \big) ^ {m} \Bigg ((4 - \frac {2}{m}) \binom {2 m - 2} {m - 1} - 4 \binom {2 m - 2} {m - 1} \Bigg) \\ <   0. \end{array}
$$

Therefore, 

$$
\begin{array}{r c l} M & <   & \frac {3}{4} \sum_ {j = 0} ^ {m - 2} \binom {m + j} {j} (\frac {3}{4}) ^ {j} - 3 \sum_ {j = 0} ^ {m - 2} \binom {m - 1 + j} {j} (\frac {3}{4}) ^ {j} \\ & <   & \sum_ {j = 0} ^ {m - 2} \binom {m + j} {j} (\frac {3}{4}) ^ {j} - 3 \sum_ {j = 0} ^ {m - 2} \binom {m - 1 + j} {j} (\frac {3}{4}) ^ {j} \\ & = & \sum_ {j = 0} ^ {m - 2} \left(\binom {m + j} {j} - 3 \binom {m - 1 + j} {j}\right) (\frac {3}{4}) ^ {j}. \end{array}
$$

Applying (3.45), one obtains, for $0 \leq j \leq m - 2$ 

$$
\binom {m + j} {j} = (1 + \frac {j}{m}) \binom {m - 1 + j} {j} <   3 \binom {m - 1 + j} {j}.
$$

Therefore, we conclude that $M < 0$ and part (3) follows. 

Finally, note that the decay rate of the Fourier transform of the pseudo-splineof Type I with order (2, 1) is $\frac { \beta _ { m , l } } { 2 }$ ≈ 1.33903. Hence, it follows from parts $( 1 ) ‐ ( 3 )$ that the decay rate of an arbitrary pseudo-spline of either type with order $( m , l )$ $m > 2 , 0 \leq l \leq m - 1$ is higher than 1.33903. 厂

Proposition 3.10 reveals that the decay rates of the Fourier transforms of either type of pseudo-splines increase as m increases for fixed l and decrease as l increases for fixed $m$ . Here, we give an asymptotical analysis of the decay rate which, in turn, gives an asymptotical analysis of the regularity of $_ { 1 } \phi$ and $_ { 2 \phi }$ as the order $( m , l ) \to \infty$ 

Theorem 3.9. [75] Let $_ { 1 } \phi$ and $_ { 2 \phi }$ be the pseudo-splines of Type I and II respectively with order $( m , l )$ . Fix $l = \lfloor \lambda m \rfloor , 0 \leq \lambda \leq 1$ , where λm denotes the largest integer which is smaller than or equal to λm. Then, we have 

$$
| _ {1} \widehat {\phi} (\xi) | \leq C (1 + | \xi |) ^ {- \frac {\mu}{2} m} a n d | _ {2} \widehat {\phi} (\xi) | \leq C (1 + | \xi |) ^ {- \mu m},
$$

where $\begin{array} { r } { \mu = \frac { \log { ( \frac { 4 } { 1 + \lambda } ) ^ { \lambda + 1 } ( \frac { \lambda } { 3 } ) ^ { \lambda } } } { \log { 2 } } } \end{array}$ , asymptotically for large m. This means that the asymptotic rates of the pseudo-spline of Type I and Type II are $\textstyle { \frac { \mu } { 2 } }$ and $\mu$ respectively. 

Proof. We will only analyze pseudo-splines of type II, and the analysis for pseudo-splines of type I is similar. We first show the following identity: 

$$
x ^ {- l} P _ {m, l} (x) \geq y ^ {- l} P _ {m, l} (y), \quad \text { for } 0 <   x \leq y \leq 1.\tag{3.49}
$$

Indeed, item 1 of Lemma 3.3 implies that 

$$
x ^ {- l} P _ {m, l} (x) = \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} x ^ {j - l} \geq \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} y ^ {j - l} = y ^ {- l} P _ {m, l} (y),
$$

for $0 < x \leq y \leq 1$ 

In order to compute the asymptotic rate, we need to estimate the upper and lower bound of $P _ { m , l } \left( { \textstyle { \frac { 3 } { 4 } } } \right)$ in terms of m and l. For this, we let $\textstyle x = { \frac { 3 } { 4 } }$ and $y = 1$ in (3.49) and obtain 

$$
P _ {m, l} \bigl (\frac {3}{4} \bigr) \geq \bigl (\frac {3}{4} \bigr) ^ {l} P _ {m, l} (1) = \bigl (\frac {3}{4} \bigr) ^ {l} \binom {m + l} {l}.\tag{3.50}
$$

Next, let $\begin{array} { r } { x = \frac { 1 } { 2 } } \end{array}$ and $\begin{array} { r } { y = \frac { 3 } { 4 } } \end{array}$ in (3.49), we obtain 

$$
P _ {m, l} (\frac {3}{4}) \leq \left(\frac {3}{2}\right) ^ {l} P _ {m, l} (\frac {1}{2}).
$$

Since 

$$
P _ {m, l} (\frac {1}{2}) = \sum_ {j = 0} ^ {l} \binom {m + l} {j} 2 ^ {- j} 2 ^ {j - l} = 2 ^ {- l} \sum_ {j = 0} ^ {l} \binom {m + l} {j},
$$

one obtains 

$$
P _ {m, l} (\frac {3}{4}) \leq (\frac {3}{4}) ^ {l} \sum_ {j = 0} ^ {l} \binom {m + l} {j}.\tag{3.51}
$$

Putting (3.50) and (3.51) together, we obtain the following estimates of $P _ { m , l } \left( { \textstyle { \frac { 3 } { 4 } } } \right)$ 

$$
\left(\frac {3}{4}\right) ^ {l} \binom {m + l} {l} \leq P _ {m, l} (\frac {3}{4}) \leq \left(\frac {3}{4}\right) ^ {l} \sum_ {j = 0} ^ {l} \binom {m + l} {j}.
$$

For $l \leq m - 1$ , we have 

$$
\sum_ {j = 0} ^ {l} \binom {m + l} {j} \leq m \binom {m + l} {l}.
$$

Hence, 

$$
\bigl (\frac {3}{4} \bigr) ^ {l} \binom {m + l} {l} \leq P _ {m, l} \bigl (\frac {3}{4} \bigr) \leq m \bigl (\frac {3}{4} \bigr) ^ {l} \binom {m + l} {l}.\tag{3.52}
$$

Next, we use this estimate to analyze the decay of $| { } _ { 2 } \widehat { \phi } |$ as m goes to infinity. The upper bound of $P _ { m , l } \left( { \textstyle { \frac { 3 } { 4 } } } \right)$ in (3.52) implies that 

$$
2 m - \frac {\log P _ {m , l} \left(\frac {3}{4}\right)}{\log 2} \geq 2 m - \frac {\log \left(m (\frac {3}{4}) ^ {l} \binom {m + l} {l}\right)}{\log 2}.
$$

We estimate the right hand side of the above inequality asymptotically for large $( m , l )$ to obtain the asymptotical lower bound of $\begin{array} { r } { 2 m - \frac { \log P _ { m , l } \left( \frac { 3 } { 4 } \right) } { \log 2 } } \end{array}$ . For this, we first recall the Stirling approximation, i.e. m! $\sim \sqrt { 2 \pi } e ^ { ( m + \frac { 1 } { 2 } ) \log ^ { } m - m }$ (see e.g. [88]), where $a _ { m } \sim b _ { m }$ means that $\begin{array} { r } { \frac { a _ { m } } { b _ { m } } \to 1 } \end{array}$ ， $m  \infty$ . By the Stirling approximation, we have 

$$
\begin{array}{r c l} \log m! & \sim & \log \sqrt {2 \pi} e ^ {(m + \frac {1}{2}) \log m - m} \\ & \sim & m \log m - m. \end{array}\tag{3.53}
$$

Applying (3.53), one obtains 

$$
\begin{array}{r c l} \log \binom {m + l} {l} & = & \log (m + l)! - \log m! - \log l! \\ & \sim & (m + l) \log (m + l) - (m + l) - (m \log m - m) - (l \log l - l) \\ & \sim & (m + l) \log (m + l) - m \log m - l \log l. \end{array}
$$

Thus, 

$$
\begin{array}{l} 2 m - \frac {\log \left(m \frac {3 ^ {l}}{4} \binom {m + l} {l}\right)}{\log 2} = 2 m - \frac {\log m + l \log \frac {3}{4} + \log \binom {m + l} {l}}{\log 2} \\ \sim m \bigg (2 - \frac {\frac {l}{m} \log \frac {3}{4} + (1 + \frac {l}{m}) \log (m + l) - \log m - \frac {l}{m} \log l}{\log 2} \bigg). \end{array}
$$

By the assumption, $l = \lfloor \lambda m \rfloor , \ 0 \leq \lambda \leq 1$ . Hence, when m is suficiently large, $\begin{array} { r } { \frac { l } { m } \sim \lambda } \end{array}$ and therefore, 

$$
\begin{array}{r c l} {2 m - \frac {\log \left(m \frac {3}{4} ^ {l} \binom {m + l} {l}\right)}{\log 2}} & \sim & {m \bigg (2 - \frac {\log (1 + \lambda) \left(\frac {3 + 3 \lambda}{4 \lambda}\right) ^ {\lambda}}{\log 2} \bigg)} \\ & = & {m \bigg (\frac {\log \left(\frac {4}{1 + \lambda}\right) ^ {\lambda + 1} (\frac {\lambda}{3}) ^ {\lambda}}{\log 2} \bigg).} \end{array}
$$

Now we obtain the asymptotical lower bound of $2 m \mathrm { - } \frac { \log P _ { m , l } \left( \frac { 3 } { 4 } \right) } { \log 2 }$ , i.e. asymptotically, for large m with $l = \lfloor \lambda m \rfloor$ 2 

$$
2 m - \frac {\log | P _ {m , l} \left(\frac {3}{4}\right) |}{\log 2} \geq m \bigg (\frac {\log \left(\frac {4}{1 + \lambda}\right) ^ {\lambda + 1} \left(\frac {\lambda}{3}\right) ^ {\lambda}}{\log 2} \bigg).\tag{3.54}
$$

Next, we use the left hand side of (3.52) to obtain the asymptotical upper bound of $2 m - { \frac { \log P _ { m , l } \left( { \frac { 3 } { 4 } } \right) } { \log 2 } }$ . First note that (3.52) gives 

$$
2 m - \frac {\log P _ {m , l} \left(\frac {3}{4}\right)}{\log 2} \leq 2 m - \frac {l \log \frac {3}{4} + \log \binom {m + l} {l}}{\log 2}.
$$

Applying arguments similar to the estimate of the lower bound by using (3.53), we obtain the following 

$$
\begin{array}{r l} & 2 m - \frac {l \log \frac {3}{4} + \log \binom {m + l} {l}}{\log 2} \\ & \quad \sim m \bigg (2 - \frac {\frac {l}{m} \log \frac {3}{4} + (1 + \frac {l}{m}) \log (m + l) - \log m - \frac {l}{m} \log l}{\log 2} \bigg) \\ & \quad \sim m \bigg (\frac {\log (\frac {4}{1 + \lambda}) ^ {\lambda + 1} (\frac {\lambda}{3}) ^ {\lambda}}{\log 2} \bigg). \end{array}
$$

This leads to the asymptotical lower bound of $2 m - { \frac { \log P _ { m , l } \left( { \frac { 3 } { 4 } } \right) } { \log 2 } }$ , i.e. asymptotically, for large m with $l = \lfloor \lambda m \rfloor$ 2 

$$
2 m - \frac {\log P _ {m , l} \left(\frac {3}{4}\right)}{\log 2} \leq m \left(\frac {\log \left(\frac {4}{1 + \lambda}\right) ^ {\lambda + 1} \left(\frac {\lambda}{3}\right) ^ {\lambda}}{\log 2}\right).\tag{3.55}
$$

Combining (3.54) and (3.55), we conclude that for large $m ,$ , the asymptotical upper and lower bounds coincide and equal to 

$$
2 m - \frac {\log P _ {m , l} \left(\frac {3}{4}\right)}{\log 2} \sim m \bigg (\frac {\log \left(\frac {4}{1 + \lambda}\right) ^ {\lambda + 1} \left(\frac {\lambda}{3}\right) ^ {\lambda}}{\log 2} \bigg) = \mu m.\tag{3.56}
$$

Therefore the equation (3.56) gives that, fixing $l = \lfloor \lambda m \rfloor$ and asymptotically, for large m, we have 

$$
\begin{array}{r l} & {| _ {2} \widehat {\phi} (\xi) | \leq C (1 + | \xi |) ^ {- \mu m} \quad \mathrm{and} \quad | _ {1} \widehat {\phi} (\xi) | \leq C (1 + | \xi |) ^ {- \frac {\mu}{2} m},} \\ & {\mathrm{where} \mu = \frac {\log (\frac {4}{1 + \lambda}) ^ {\lambda + 1} (\frac {\lambda}{3}) ^ {\lambda}}{\log 2}. \quad \blacksquare} \end{array}
$$

Remark 3.8. The above theorem shows that, asymptotically for large $m _ { ; }$ the smoothness of the pseudo-splines of type I and II increases at a rate $\mu / 2$ and $\mu$ respectively. The proof of Theorem 3.9 also leads to the following two observations: 

(1) Consider pseudo-splines of Type II with order $( m , m - p )$ , where p is a fixed positive integer independent of m. The asymptotic rate is $\begin{array} { r } { 2 - \frac { \log 3 } { \log 2 } \approx } \end{array}$ 0.4150. Indeed, when $\begin{array} { r } { l = m - p , \lambda \sim \frac { l } { m } = \frac { m - p } { m } \sim 1 } \end{array}$ for suficiently large m. Similarly, for pseudo-splines of $\mathrm { T y p e ~ I }$ with order $( m , m - p )$ , the corresponding asymptotic rate is $\textstyle 1 - { \frac { \log 3 } { 2 \log 2 } } \approx 0 . 2 0 7 5$ 

(2) Assume that l is fixed for all m. The asymptotic rates of pseudo-splines of Type I and II with order $( m , l )$ are 1 and 2 respectively. This is simply because, for the fixed integer $\begin{array} { r } { l , \dot { \lambda } \sim \frac { l } { m } \sim 0 } \end{array}$ for suficiently large $m .$ 


Table 2. Asymptotically for large $m ,$ the smoothness of $_ { 2 \phi }$ increases at rate $\mu ,$ which is given in the following table with some choices of l.


<table><tr><td><eq>m \to \infty</eq></td><td><eq>l = 0</eq></td><td><eq>l = \frac{m}{10}</eq></td><td><eq>l = \frac{m}{8}</eq></td><td><eq>l = \frac{m}{6}</eq></td><td><eq>l = \frac{m}{4}</eq></td><td><eq>l = \frac{m}{2}</eq></td><td><eq>l = m - 1</eq></td></tr><tr><td><eq>\mu \approx</eq></td><td>2.0000</td><td>1.5581</td><td>1.4857</td><td>1.3789</td><td>1.2013</td><td>0.8301</td><td>0.4150</td></tr></table>

Example 3.2. In Table 2, we give $\mu ,$ the asymptotical rate of pseudo-splines of Type II with order $( m , \lfloor \lambda m \rfloor )$ , as m goes to infinity and the parameter $\lambda =$ $\textstyle { \frac { 1 } { 1 0 } } , { \frac { 1 } { 8 } } , { \frac { 1 } { 6 } } , { \frac { 1 } { 4 } } , { \frac { 1 } { 2 } } , 1$ . The asymptotic rate $\mu _ { 0 }$ for pseudo-splines of Type I with the same order is just $\begin{array} { r } { \mu _ { 0 } = \frac { \mu } { 2 } } \end{array}$ 

A similar discussion can lead the regularity analysis for the dual pseudo-splines as it was done in [72]. 

Theorem 3.10. [72] Let $\tilde { \phi } _ { m , l }$ be the dual pseudo-spline of order $( m , l )$ with $0 \leq$ $l \leq m - 1$ . Then 

$$
| \widehat {\tilde {\phi}} _ {m, l} | \leq C (1 + | \xi |) ^ {- \gamma_ {m, l}}
$$

with 

$$
\gamma_ {m, l} = 2 m + 1 - \log \left(P _ {m - \frac {1}{2}, l} (\frac {3}{4})\right) / \log 2,
$$

and the decay rate $\gamma _ { m , l }$ is optimal. Consequently, $\tilde { \phi } _ { m , l } \in C ^ { \alpha }$ with $\alpha = \gamma _ { m , l } - 1 - \varepsilon$ 

## 4. Two Lemmata

This section gives the two key technical lemmata that were used in the previous sections. 

Lemma 3.2. For given nonnegative integers $m , ~ j , ~ l ,$ , we have: 

$$
(1) \binom {m + 1} {j} = \binom {m} {j} + \binom {m} {j - 1} f o r j \geq 1 a n d (j + 1) \binom {m + j} {j + 1} = (m + j) \binom {m - 1 + j} {j}.
$$

$$
\begin{array}{l} (2) 2 (m + 1) \sum_ {j = 0} ^ {l - 1} \binom {m + l} {j} - l \sum_ {j = 0} ^ {l} \binom {m + l} {j} \geq 0, \text {   for   } m \geq 1 \text {   and   } 1 \leq l \leq \\ m - 1. \end{array}
$$

(3) ${ \frac { 2 ^ { l } { \binom { m + l } { l } } ^ { \frac { 1 } { 2 } } } { \sum _ { j = 0 } ^ { l } { \binom { m + l } { j } } } } \leq 1 .$ for all $m \geq 1$ and $0 \leq l \leq m - 1$ 

Proof. The identities in (1) are well known and can be proven directly by the definition of the binomial coeficients. 

For (2), since $m > l ,$ we have 

$$
(m + 1) \sum_ {j = 0} ^ {l - 1} \binom {m + l} {j} - l \sum_ {j = 0} ^ {l - 1} \binom {m + l} {j} \geq 0.
$$

Subtracting this inequality from (2), we conclude that it remains to check if 

$$
(m + 1) \sum_ {j = 0} ^ {l - 1} \binom {m + l} {j} - l \binom {m + l} {l} \geq 0
$$

holds, in order to verify (2). Since $( m + 1 ) { \binom { m + l } { l - 1 } } = l { \binom { m + l } { l } }$ , we have 

$$
(m + 1) \sum_ {j = 0} ^ {l - 1} \binom {m + l} {j} > (m + 1) \binom {m + l} {l - 1} = l \binom {m + l} {l}.
$$

This gives (2) immediately. 

Finally, we prove (3) by induction with respect to $m .$ . Since (3) is obviously true for $l = 0$ , we now focus on $1 \leq l \leq m - 1$ . When $m = 1$ , the inequality trivially holds. Assume (3) holds when $m = m _ { 0 }$ , i.e. 

$$
2 ^ {2 l} \binom {m _ {0} + l} {l} \leq \left(\sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j}\right) ^ {2},
$$

for all $1 \leq l \leq m _ { 0 } - 1$ . Consider the case $m = m _ { 0 } + 1$ . We first show that (3) holds for all l, where $1 \leq l \leq m _ { 0 } - 1$ . For $1 \leq l \leq m _ { 0 } - 1$ , we have 

$$
\begin{array}{r c l}2 ^ {2 l} \binom {m _ {0} + l + 1} {l}&=&\frac {m _ {0} + l + 1}{m _ {0} + 1} 2 ^ {2 l} \binom {m _ {0} + l} {l}\\&\leq&\frac {m _ {0} + l + 1}{m _ {0} + 1} \left(\sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j}\right) ^ {2} \quad \text {(by induction hypothesis)}\\&=&\left(\sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j} + (\sqrt {\frac {m _ {0} + l + 1}{m _ {0} + 1}} - 1) \sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j}\right) ^ {2}\\&=&\left(\sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j}\right)\\&&+ \frac {l}{m _ {0} + 1 + \sqrt {(m _ {0} + l + 1) (m _ {0} + 1)}} \sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j}\left. \right) ^ {2}\\&< &\left(\sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j} + \frac {l}{2 m _ {0} + 2} \sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j}\right) ^ {2}\\&\leq&\left(\sum_ {j = 0} ^ {l} \binom {m _ {0} + l} {j} + \sum_ {j = 0} ^ {l - 1} \binom {m _ {0} + l} {j}\right) ^ {2} \quad \text {(from (2))}\\&=&\left(1 + \sum_ {j = 1} ^ {l} \binom {m _ {0} + l} {j} + \sum_ {j = 1} ^ {l} \binom {m _ {0} + l} {j - 1}\right) ^ {2}\\&=&\left(\sum_ {j = 0} ^ {l} \binom {m _ {0} + l + 1} {j}\right) ^ {2} \quad \text {(from (1))}.\end{array}
$$

This shows that (3) holds for all $1 \le l \le m _ { 0 } - 1$ , it remains to show (3) holds for $l = m _ { 0 }$ , i.e. to show 

$$
2 ^ {2 m _ {0}} \binom {2 m _ {0} + 1} {m _ {0}} \leq \left(\sum_ {j = 0} ^ {m _ {0}} \binom {2 m _ {0} + 1} {j}\right) ^ {2}.\tag{3.57}
$$

Applying ${ \binom { n } { j } } = { \binom { n } { n - j } }$ , we have 

$$
\begin{array}{r c l} \sum_ {j = 0} ^ {m _ {0}} \binom {2 m _ {0} + 1} {j} & = & \frac {1}{2} \left(\sum_ {j = 0} ^ {m _ {0}} \binom {2 m _ {0} + 1} {j} + \sum_ {j = 0} ^ {m _ {0}} \binom {2 m _ {0} + 1} {j}\right) \\ & = & \frac {1}{2} \left(\sum_ {j = 0} ^ {m _ {0}} \binom {2 m _ {0} + 1} {j} + \sum_ {j = m _ {0} + 1} ^ {2 m _ {0} + 1} \binom {2 m _ {0} + 1} {j}\right) \\ & = & \frac {1}{2} \sum_ {j = 0} ^ {2 m _ {0} + 1} \binom {2 m _ {0} + 1} {j} = 2 ^ {2 m _ {0}}. \end{array}
$$

Then (3.57) is equivalent to $\textstyle { \binom { 2 m _ { 0 } + 1 } { m _ { 0 } } } \leq \sum _ { j = 0 } ^ { m _ { 0 } } { \binom { 2 m _ { 0 } + 1 } { j } }$ , which is obviously true. This concludes the proof of (3). 

Next, we give several basic properties of the polynomials $P _ { m , l } ( y )$ and $R _ { m , l } ( y )$ defined by (3.4) and (3.5). Part (2)-(4) of the following lemma were mainly used in the proof of Theorem 3.2. 

Lemma 3.3. For nonnegative integers m and l with $l \leq m - 1$ , let $P _ { m , l } ( y )$ and $R _ { m , l } ( y )$ be the polynomials defined in (3.4) and (3.5). Then: 

(1) $\begin{array} { r } { P _ { m , l } ( y ) = \sum _ { j = 0 } ^ { l } { \binom { m - 1 + j } { j } } y ^ { j } . } \end{array}$ 

(2) $\begin{array} { r } { R _ { m , l } ^ { \prime } ( y ) = - ( m + l ) { \binom { m + l - 1 } { l } } y ^ { l } ( 1 - y ) ^ { m - 1 } . } \end{array}$ 

(3) Define $Q ( y ) : = R _ { m , l } ( y ) + R _ { m , l } ( 1 - y )$ . Then, 

$$
\min _ {y \in [ 0, 1 ]} Q (y) = Q (\frac {1}{2}) = 2 ^ {1 - m - l} \sum_ {j = 0} ^ {l} \binom {m + l} {j}.
$$

(4) Define $S ( y ) : = R _ { m , l } ^ { 2 } ( y ) + R _ { m , l } ^ { 2 } ( 1 - y )$ . Then, 

$$
\min _ {y \in [ 0, 1 ]} S (y) = S (\frac {1}{2}) = 2 ^ {1 - 2 m - 2 l} (\sum_ {j = 0} ^ {l} \binom {m + l} {j}) ^ {2}.
$$

Proof. For fixed $m ,$ we prove (1) by induction with respect to l. It is obviously true for $l = 0$ . Now suppose (1) holds for $l _ { 0 }$ . Consider $l = l _ { 0 } + 1$ 

$$
\begin{array}{r c l} P _ {m, l} (y) & = & \sum_ {j = 0} ^ {l _ {0} + 1} \binom {m + l _ {0} + 1} {j} y ^ {j} (1 - y) ^ {l _ {0} - j + 1} \\ & = & (1 - y) ^ {l _ {0} + 1} + \sum_ {j = 1} ^ {l _ {0} + 1} \binom {m + l _ {0} + 1} {j} y ^ {j} (1 - y) ^ {l _ {0} - j + 1}. \end{array}
$$

Applying the first identity in (1) of Lemma 3.2, we have, 

$$
\begin{array}{l} P _ {m, l} (y) = (1 - y) ^ {l _ {0} + 1} + \sum_ {j = 1} ^ {l _ {0} + 1} \binom {m + l _ {0}} {j} y ^ {j} (1 - y) ^ {l _ {0} - j + 1} \\ \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad + \sum_ {j = 1} ^ {l _ {0} + 1} \binom {m + l _ {0}} {j - 1} y ^ {j} (1 - y) ^ {l _ {0} - j + 1} \\ \qquad = \sum_ {j = 0} ^ {l _ {0} + 1} \binom {m + l _ {0}} {j} y ^ {j} (1 - y) ^ {l _ {0} - j + 1} + \sum_ {j = 1} ^ {l _ {0} + 1} \binom {m + l _ {0}} {j - 1} y ^ {j} (1 - y) ^ {l _ {0} - j + 1} \\ \qquad = \sum_ {j = 0} ^ {l _ {0}} \binom {m + l _ {0}} {j} y ^ {j} (1 - y) ^ {l _ {0} - j + 1} + \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0} + 1} \\ \qquad + \sum_ {j = 0} ^ {l _ {0}} \binom {m + l _ {0}} {j} y ^ {j + 1} (1 - y) ^ {l _ {0} - j} \\ \qquad = (1 - y) P _ {m, l _ {0}} (y) + \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0} + 1} + y P _ {m, l _ {0}} (y) \\ \qquad = P _ {m, l _ {0}} (y) + \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0} + 1}. \end{array}
$$

Then, by the inductive hypothesis, 

$$
\begin{array}{r c l} P _ {m, l} (y) & = & \sum_ {j = 0} ^ {l _ {0}} \binom {m - 1 + j} {j} y ^ {j} + \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0} + 1} \\ & = & \sum_ {j = 0} ^ {l _ {0} + 1} \binom {m - 1 + j} {j} y ^ {j}. \end{array}
$$

We prove (2) by induction with respect to l for given m. It is obviously true when $l = 0 .$ . Suppose (2) holds for $l _ { 0 }$ , i.e. $\begin{array} { r }  R _ { m , l _ { 0 } } ^ { \prime } ( y ) = - ( m + l _ { 0 } ) \binom { m + l _ { 0 } - 1 } { l _ { 0 } } y ^ { l _ { 0 } } ( 1 - \ \end{array}$ $y ) ^ { m - 1 }$ , and consider the case $l = l _ { 0 } + 1 \le m - 1$ . Using (1) and definition of $R _ { m , l } ( y )$ in (3.5), we have 

$$
\begin{array}{r c l} R _ {m, l _ {0} + 1} (y) & = & (1 - y) ^ {m} P _ {m, l _ {0} + 1} (y) \\ & = & (1 - y) ^ {m} \Bigl (P _ {m, l _ {0}} (y) + \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0} + 1} \Bigr). \end{array}
$$

Since $R _ { m , l _ { 0 } } ( y ) = ( 1 - y ) ^ { m } P _ { m , l _ { 0 } } ( y )$ , we have 

$$
R _ {m, l _ {0} + 1} (y) = \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0} + 1} (1 - y) ^ {m} + R _ {m, l _ {0}} (y).
$$

Then, 

$$
\begin{array}{r c l} R _ {m, l _ {0} + 1} ^ {\prime} (y) & = & (l _ {0} + 1) \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0}} (1 - y) ^ {m} - m \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0} + 1} (1 - y) ^ {m - 1} \\ & & + R _ {m, l _ {0}} ^ {\prime} (y) \\ & = & (l _ {0} + 1) \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0}} (1 - y) ^ {m} - m \binom {m + l _ {0}} {l _ {0} + 1} y ^ {l _ {0} + 1} (1 - y) ^ {m - 1} \\ \\ & & - (m + l _ {0}) \binom {m + l _ {0} - 1} {l _ {0}} y ^ {l _ {0}} (1 - y) ^ {m - 1}. \end{array}
$$

Pulling the common factor $y ^ { l _ { 0 } } ( 1 - y ) ^ { m - 1 }$ out, one obtains 

$$
\begin{array}{r c l} R _ {m, l _ {0} + 1} ^ {\prime} (y) & = & y ^ {l _ {0}} (1 - y) ^ {m - 1} \bigg ((l _ {0} + 1) \binom {m + l _ {0}} {l _ {0} + 1} (1 - y) - m \binom {m + l _ {0}} {l _ {0} + 1} y \\ & & - (m + l _ {0}) \binom {m + l _ {0} - 1} {l _ {0}} \bigg) \\ & = & y ^ {l _ {0}} (1 - y) ^ {m - 1} \bigg ((l _ {0} + 1) \binom {m + l _ {0}} {l _ {0} + 1} - (l _ {0} + 1) \binom {m + l _ {0}} {l _ {0} + 1} y \\ & & - m \binom {m + l _ {0}} {l _ {0} + 1} y - (m + l _ {0}) \binom {m + l _ {0} - 1} {l _ {0}} \bigg) \end{array}
$$

Combining the second and the third term, one obtains 

$$
\begin{array}{r c l} R _ {m, l _ {0} + 1} ^ {\prime} (y) & = & y ^ {l _ {0}} (1 - y) ^ {m - 1} \bigg ((l _ {0} + 1) \binom {m + l _ {0}} {l _ {0} + 1} - (m + l _ {0} + 1) \binom {m + l _ {0}} {l _ {0} + 1} y \\ & & - (m + l _ {0}) \binom {m + l _ {0} - 1} {l _ {0}} \bigg). \end{array}
$$

By the second identity in (1) of Lemma 3.2, one obtains $( l _ { 0 } + 1 ) { \binom { m + l _ { 0 } } { l _ { 0 } + 1 } } = ( m +$ $l _ { 0 } ) \binom { m + l _ { 0 } - 1 } { l _ { 0 } }$ . Hence, $\begin{array} { r } { R _ { m , l _ { 0 } + 1 } ^ { \prime } ( y ) = - ( m + l _ { 0 } + 1 ) { \binom { m + l _ { 0 } } { l _ { 0 } + 1 } } y ^ { l _ { 0 } + 1 } ( 1 - y ) ^ { m - 1 } } \end{array}$ . This concludes the proof of (2). 

For (3), we compute $Q ^ { \prime } ( y )$ , i.e. 

$$
Q ^ {\prime} (y) = R _ {m, l} ^ {\prime} (y) + \left(R _ {m, l} (1 - y)\right) ^ {\prime} = R _ {m, l} ^ {\prime} (y) - R _ {m, l} ^ {\prime} (1 - y).
$$

Applying (2), one obtains 

$$
Q ^ {\prime} (y) = (m + l) \binom {m + l - 1} {l} \bigg (y ^ {m - 1} (1 - y) ^ {l} - (1 - y) ^ {m - 1} y ^ {l} \bigg).
$$

Now, we show that $Q ^ { \prime } ( y ) \leq 0$ on [0, <sup>1</sup><sub>2</sub> ], $Q ^ { \prime } ( y ) \geq 0$ on $[ \textstyle { \frac { 1 } { 2 } } , 1 ]$ . Note that 

$$
y ^ {m - l - 1} \leq (1 - y) ^ {m - l - 1}, \quad \text {   for   all   } y \in [ 0, \frac {1}{2} ].
$$

Multiplying both sides by $y ^ { l } ( 1 - y ) ^ { l }$ 2 

$$
y ^ {m - 1} (1 - y) ^ {l} \leq (1 - y) ^ {m - 1} y ^ {l}, \quad \text { for   all } y \in [ 0, \frac {1}{2} ].
$$

Similarly we have 

$$
y ^ {m - 1} (1 - y) ^ {l} \geq (1 - y) ^ {m - 1} y ^ {l}, \quad \text { for   all } y \in [ \frac {1}{2}, 1 ].
$$

We conclude that 

$$
Q ^ {\prime} (y) \left\{ \begin{array}{l l} \leq 0, & y \in [ 0, \frac {1}{2} ] \\ \geq 0, & y \in [ \frac {1}{2}, 1 ]. \end{array} \right.
$$

This means that $Q ( y )$ reaches its minimum value at point $\begin{array} { r } { y = \frac { 1 } { 2 } } \end{array}$ . Now, we compute $Q \big ( \textstyle { \frac { 1 } { 2 } } \big )$ . Note that $\begin{array} { r } { Q ( \frac { 1 } { 2 } ) = 2 R _ { m , l } ( \frac { 1 } { 2 } ) = 2 ^ { 1 - m } P _ { m , l } ( \frac { 1 } { 2 } ) } \end{array}$ . Recall that $P _ { m , l } ( y )$ is defined in (3.4), i.e. $\begin{array} { r } { P _ { m , l } ( y ) = \sum _ { j = 0 } ^ { l } { \binom { m + l } { j } } y ^ { j } ( 1 - y ) ^ { l - j } } \end{array}$ . Then $\begin{array} { r l r } { Q ( \frac { 1 } { 2 } ) = 2 ^ { 1 - m } 2 ^ { - l } \sum _ { j = 0 } ^ { l } { \binom { m + l } { j } } = } \end{array}$ $\begin{array} { r } { 2 ^ { 1 - m - l } \sum _ { j = 0 } ^ { l } { \binom { m + l } { j } } } \end{array}$ 

 With (3), the proof of (4) is simpler. Since 

$$
S ^ {\prime} (y) = 2 R _ {m, l} (y) R _ {m, l} ^ {\prime} (y) + 2 R _ {m, l} (1 - y) \big (R _ {m, l} (1 - y) \big) ^ {\prime},
$$

using the identities $R _ { m , l } ( y ) = ( 1 - y ) ^ { m } P _ { m , l } ( y ) , R _ { m , l } ^ { \prime } ( y ) = - ( m + l ) { \binom { m + l - 1 } { l } } y ^ { l } ( 1 -$ $y ) ^ { m - 1 }$ and $\big ( R _ { m , l } ( 1 - y ) \big ) ^ { \prime } = ( m + l ) \binom { m + l - 1 } { l } y ^ { m - 1 } ( 1 - y ) ^ { l }$ , we obtain 

$$
\begin{array}{l} \frac {S ^ {\prime} (y)}{2 (m + l) \binom {m + l - 1} {l}} = y ^ {m} P _ {m, l} (1 - y) y ^ {m - 1} (1 - y) ^ {l} - (1 - y) ^ {m} P _ {m, l} (y) y ^ {l} (1 - y) ^ {m - 1} \\ \qquad = y ^ {2 m - 1} \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} (1 - y) ^ {l + j} \\ \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \\ \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \q
$$

Since, for each $0 \leq j \leq l$ , when $y \in [ 0 , \frac { 1 } { 2 } ] , y ^ { 2 m - l - j - 1 } \leq ( 1 - y ) ^ { 2 m - l - j - 1 }$ , and when $y \in [ \textstyle { \frac { 1 } { 2 } } , 1 ] , y ^ { 2 m - l - j - 1 } \geq ( 1 - y ) ^ { 2 m - l - { \tilde { j } } - 1 }$ , then by similar arguments in (2) we conclude, 

$$
S ^ {\prime} (y) \left\{ \begin{array}{l l} \leq 0, & y \in [ 0, \frac {1}{2} ] \\ \geq 0, & y \in [ \frac {1}{2}, 1 ]. \end{array} \right.
$$

Thus $\begin{array} { r } { \operatorname* { m i n } _ { y \in [ 0 , 1 ] } S ( y ) = S ( \frac { 1 } { 2 } ) } \end{array}$ . Since $\begin{array} { r } { R _ { m , l } ( \frac { 1 } { 2 } ) = 2 ^ { - m - l } \sum _ { j = 0 } ^ { l } { \binom { m + l } { j } } } \end{array}$ , we have 

$$
S (\frac {1}{2}) = 2 R _ {m, l} ^ {2} (\frac {1}{2}) = 2 ^ {1 - 2 m - 2 l} \biggl (\sum_ {j = 0} ^ {l} \binom {m + l} {j} \biggr) ^ {2}.
$$

Remark 3.9. From (1) of Lemma 3.3 we know that the refinement mask of the pseudo-spline of Type I in (3.2) can be written as 

$$
| _ {1} \widehat {a} (\xi) | ^ {2} = \cos^ {2 m} (\xi / 2) \sum_ {j = 0} ^ {l} \binom {m - 1 + j} {j} \sin^ {2 j} (\xi / 2).
$$

Hence, the pseudo-spline of Type I with order $( m , m - 1 )$ is indeed the refinable function whose shifts form an orthonormal system constructed in [60] and the pseudo-spline of Type II with order $( m , m - 1 )$ is indeed the autocorrelation of the orthogonal refinable function, which is interpolatory. 

## Frame Based Image Restorations

Image restoration is often formulated as an inverse problem. For simplicity of notation, we denote images as vectors in $\mathbb { R } ^ { n }$ with n equal to the total number of pixels. The objective is to find the unknown true image $u \in \mathbb { R } ^ { n }$ from an observed image (or measurements) $f \in \mathbb { R } ^ { l }$ defined by 

$$
f = A u + \eta ,\tag{4.1}
$$

where η is a white Gaussian noise with variance $\sigma ^ { 2 }$ , and $A \in \mathbb { R } ^ { l \times n }$ is a linear operator, typically a convolution operator for image deconvolution problems, a projection operator for image inpainting and the identity for image denoising. This lecture is devoted to frame based image restorations. 

As we discussed in Lecture 2, fast framelet decomposition and reconstruction algorithms are linear operators. When we consider signals living in $\mathbb { R } ^ { n }$ , these linear operators have matrix representations. Here we simply denote the framelet decomposition as a matrix $W \in \mathbb { R } ^ { m \times n }$ with m $\geq n .$ , and reconstruction as $W ^ { \top }$ . Then based on our analysis in Lecture 2, we have $W ^ { T } W = I$ , where I is the identity matrix. Thus, for every vector u $\mathbf { \Psi } \in \mathbb { R } ^ { n }$ 

$$
u = W ^ {\top} (W u).\tag{4.2}
$$

The components of the vector Wu are called the canonical coeficients representing u. The matrix $W$ is generated from the masks $\{ h _ { \ell } : \ell = 0 , 1 , \ldots r \}$ constructed from the univariate UEP (Theorem 2.6). We emphasize that we view the image as a column vector and the corresponding tight wavelet frame transform as the matrix W action just for simplicity of notation. In computations of image restorations, we use 2D wavelet decomposition and reconstruction algorithms given by Algorithm 2.3 instead of matrix multiplications. 

Since tight wavelet frame systems are redundant systems $\left( { \mathrm { i . e . } } \ m \ \geq \ n \right)$ , the mapping from the image u to its coeficients is not one-to-one, i.e., the representation of u in the frame domain is not unique. Therefore, there are three formulations for the sparse approximation of the underlying images; namely, the analysis based approach, the synthesis based approach and the balanced approach. The analysis based approach was first proposed in [84, 170]. In this approach, we assume that the coeficient vector $W u$ can be sparsely approximated, and is usually formulated as a minimization problem involving a penalty on the term $\| W u \| _ { 1 }$ . The synthesis based approach was first introduced in [66, 86, 87, 90, 91]. In that approach, the underlying image u is assumed to be synthesized from a sparse coeficient vector α with $u = W ^ { \top } \alpha$ , and it is usually formulated as a minimization problem involving a penalty on the term $\| \alpha \| _ { 1 }$ . The balanced approach was first used in [34, 36] for high resolution image reconstruction. It was further developed for various image restoration problems in [14, 15, 16, 17, 25, 32, 38]. In this approach, the underlying image u is assumed to be synthesized from some sparse coeficient vector α via $\Breve { u _ { \mathrm { ~ = ~ } } } W ^ { \top }$ α which is penalized by $\lVert \alpha \rVert _ { 1 }$ , and the distance of α to the range of $W$ is minimized at the same time. Although the synthesis based, analysis based and balanced approaches are developed independently in the literature, the balanced approach can be viewed as a way to balance the analysis and synthesis based approach. 

First, Section 1 gives a general introduction. Then Section 2 illustrates the ideas of the development of the balanced approach, as well as details of a fast algorithm, under the scenario of image inpainting [16, 168]. Then an accelerated algorithm of [168] for both balanced and synthesis based approach for general image restorations (4.1) is discussed. Within this section we discuss the linearized Bregman algorithm and its connection to the Uzawa’s algorithm as an alternative to either the balanced or the synthesis based approaches. In Section 3, we present the analysis based approach [24], and its applications in image deblurring. 

## 1. Modeling

This section establishes the models for frame based image restorations, especially, image inpainting, denoising, and deblurring. 

## 1.1. Preliminaries

We start with some basic notations. For any $x \in \mathbb { R } ^ { n }$ ， 

$$
\| x \| _ {p} := \left(\sum_ {j = 1} ^ {n} | x _ {j} | ^ {p}\right) ^ {1 / p},
$$

$1 \leq p < \infty$ . We denote the inner product $\langle \cdot , \cdot \rangle : \mathbb { R } ^ { n } \times \mathbb { R } ^ { n } \mapsto \mathbb { R }$ as 

$$
\langle x, y \rangle = x ^ {\top} y = \sum_ {j = 1} ^ {n} x _ {j} y _ {j}.
$$

Then $\| x \| _ { 2 } ^ { 2 } = \langle x , x \rangle$ . Let $\| x \| _ { D }$ denote the D-norm, where $D$ is a symmetric positive definite matrix, defined by $\| x \| _ { D } = { \sqrt { x ^ { \top } D x } }$ . For any real symmetric matrix $H ,$ $\rho _ { \mathrm { m a x } } ( H )$ denotes the maximum eigenvalue of H in magnitude. For any $m \times n$ real matrices $A , \| A \| _ { 2 } = \sqrt { \rho _ { \mathrm { m a x } } ( A ^ { \top } A ) }$ 

Now we recall some concepts and facts from general convex analysis, which are used throughout this lecture. $\mathrm { A }$ function $F : \mathbb { R } ^ { n } \mapsto { \bar { \mathbb { R } } }$ is convex if the domain of $F$ is convex and for all u in the domain of $F$ , 

$$
F (t u + (1 - t) v) \leq t F (u) + (1 - t) F (v), \quad \text { for   all } t \in [ 0, 1 ],
$$

and it is said to be strictly convex if 

$$
F (t u + (1 - t) v) <   t F (u) + (1 - t) F (v), \quad \text { for   all } t \in (0, 1) \text { and } u \neq v.
$$

Here $\bar { \mathbb { R } } : = \mathbb { R } \cup \{ \pm \infty \}$ 

A function $F$ is said to be subdiferentiable at u if there exists $\boldsymbol { u } ^ { * } \in \mathbb { R } ^ { n }$ such that 

$$
F (v) \geq F (u) + \langle v - u, u ^ {*} \rangle , \quad \text { for   all } v \in \mathbb {R} ^ {n},\tag{4.3}
$$

and $u ^ { * }$ is called a subgradient of $F$ at u. The set of subgradients of $F$ at u is denoted as $\partial F ( u )$ , which, in general, is not a singleton. By definition of subgradients, it is easy to see that for $u ^ { * } \in \partial { \cal F } ( u )$ and $v ^ { * } \in \partial F ( v )$ with $F ( u )$ and $F ( v )$ being finite, we have 

$$
\langle u ^ {*} - v ^ {*}, u - v \rangle \geq 0.\tag{4.4}
$$

The same as derivatives, we have the following chain rule for subgradients, where the equality is the set equality, 

$$
\partial (F (T u)) = T ^ {\top} (\partial F) (T u),
$$

where $T$ is some linear operator on $\mathbb { R } ^ { n }$ , whenever both sides of equality are well defined. If $F$ is convex and diferentiable at $u ,$ then we have $\partial F ( u ) = \{ \nabla F ( u ) \}$ i.e. $\partial F ( u )$ contains $\nabla F ( u )$ as its unique element. If $F$ is 2nd order diferentiable, then $F$ is convex if and only if the Hessian of $F , \nabla ^ { 2 } F$ is semi-positive definite; and $F$ is strictly convex if and only if $\nabla ^ { 2 } F$ is positive definite. 

It is well known (see e.g. [82]) that if a convex function $F$ is bounded in a neighborhood of some point $v \in \{ u \in \mathbb { R } ^ { n } : F ( u ) < \infty \}$ , then it is continuous and subdiferentiable everywhere in the interior of $\{ u \in \mathbb { R } ^ { n } : F ( u ) < \infty \}$ . In particular if the convex function $F$ nowhere assumes the values ±∞, then it is continuous and subdiferentiable everywhere in $\mathbb { R } ^ { n }$ (this statement is not true if $F$ is defined on a Banach space, instead of a finite dimensional space). 

The general optimality condition for a convex subdiferentiable functional $F ( u )$ can be characterized by subgradients which is known as the Fermat’s rule [154, Theorem 10.1]. The statement is as follows: 

$$
u ^ {\star} = \arg \min _ {u} F (u) \quad \text { if   and   only   if } 0 \in \partial F (u ^ {\star}).\tag{4.5}
$$

In other words, $u ^ { \star }$ minimizes $F ( u )$ if and only if 0 is a subgradient of $F$ at $u ^ { \star }$ . 

A convex function $F : \mathbb { R } ^ { n } \mapsto { \bar { \mathbb { R } } }$ is said to be proper, if it nowhere takes the value −∞ and is not identically equal to $+ \infty$ . We call $F$ lower semi-continuous at v if 

$$
\liminf _ {u \to v} F (u) \geq F (v).
$$

Note that $\mathrm { i f }$ a convex function $F$ nowhere assumes ±∞, then it is proper and lower semi-continuous (in fact it is continuous based on the above discussions). The reason to introduce the concept of proper and lower semi-continuity is to include functions $F$ that actually assumes value $\infty$ . For example, given a set $\Omega \in \mathbb { R } ^ { n }$ , we can define the corresponding indicator function $\mathcal { C } _ { \Omega }$ as 

$$
\mathcal {C} _ {\Omega} (u) = \left\{ \begin{array}{l l} 0, & u \in \Omega \\ \infty , & u \in \Omega^ {c}. \end{array} \right.
$$

The function $\mathcal { C } _ { \Omega }$ is proper, but it is lower semi-continuous if and only if Ω is closed. If the set $\Omega$ is convex, then $\mathcal { C } _ { \Omega }$ is a convex function. Note that we can use indicator functions to move convex constraints for an optimization problem into the corresponding objective function. For example, minimizing $F ( u )$ subject to $u \in \Omega$ is equivalent to minimizing $F ( u ) + \mathcal { C } _ { \Omega } ( u )$ , which is still a convex optimization problem whenever Ω is convex. 

The function $F$ is said to be coercive, if 

$$
F (u) \to \infty \quad \text { when } \| u \| _ {2} \to \infty .
$$

Then the general existence theorem of convex optimization problems states as follows (see e.g. [82]): the problem 

$$
\min _ {u \in \mathbb {R} ^ {n}} F (u)
$$

has at least one solution if $F$ is proper, convex, lower semi-continuous and coercive; ${ \mathrm { i f } } ,$ in addition, $F$ is strictly convex, then the solution is unique. 

A function F is said to have an L-Lipschitz continuous gradient if 

$$
\| \nabla F (u) - \nabla F (v) \| \leq L \| u - v \|, \quad \forall u, v\tag{4.6}
$$

for some $L > 0$ . We call $L$ the Lipschitz constant of $F .$ 

Finally, we recall the following result on convergence of minimizing sequences, which is a special case of one of the results of [130]. The proof of this result is taken from [24]. 

Proposition 4.1. Let $F ( u )$ be a convex function defined on $\mathbb { R } ^ { n }$ and nowhere assumes the values $\pm \infty$ . Suppose $F$ has a unique minimizer $u ^ { \star } \in \mathbb { R } ^ { n }$ . Then any minimizing sequence $\{ u _ { k } \} _ { k = 0 } ^ { \infty }$ , i.e. $F ( u _ { k } ) \to F ( u ^ { \star } )$ as $k  \infty$ , converges to $u ^ { \star }$ in any Euclidean norm of $\mathbb { R } ^ { n }$ . 

Proof. Since all norms of $\mathbb { R } ^ { n }$ are equivalent, we shall focus on the $\ell _ { 2 } .$ -norm and prove that 

$$
\lim _ {k \to \infty} \| u _ {k} - u ^ {\star} \| _ {2} = 0.\tag{4.7}
$$

Since $u ^ { \star } \in \mathbb { R } ^ { n }$ is the unique minimizer of $F ( u )$ , we have $F ( u ) > F ( u ^ { \star } )$ for all $\boldsymbol { \mathscr { u } } \neq \boldsymbol { u } ^ { \star }$ . Now, we suppose that $( 4 . 7 )$ does not hold, so there exists a subsequence $u _ { k _ { i } }$ such that $\| u _ { k _ { i } } - u ^ { \star } \| _ { 2 } > \epsilon$ for some $\epsilon > 0$ and for all i. Then, $F ( u _ { k _ { i } } ) > \mathrm { m i n } \{ F ( u )$ $\| u - u ^ { \star } \| _ { 2 } = \epsilon \}$ . Indeed, let v be the intersection of the sphere $\{ u : \| u - u ^ { \star } \| _ { 2 } = \epsilon \}$ and the line segment from $u ^ { \star }$ to $u _ { k _ { i } } ;$ then there exists a positive number $t \in ( 0 , 1 )$ such that $v = t u ^ { \star } + ( 1 - t ) u _ { k _ { i } }$ . By the convexity of $F$ and the definition of $u ^ { \star } .$ , we have 

$$
\begin{array}{l} F (u _ {k _ {i}}) > t F (u ^ {\star}) + (1 - t) F (u _ {k _ {i}}) \geq F (t u ^ {\star} + (1 - t) u _ {k _ {i}}) = F (v) \\ \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \\ \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qquad \qend{array}
$$

Denote $\tilde { u } = \arg \operatorname* { m i n } \{ F ( u ) : \| u - u ^ { \star } \| _ { 2 } = \epsilon \}$ , which exists because spheres in $\mathbb { R } ^ { n }$ are compact and $F$ is continuous. By noting that ˜u $\neq u ^ { \star }$ , we have 

$$
F (u ^ {\star}) = \lim _ {i \to + \infty} F (u _ {k _ {i}}) \geq F (\tilde {u}) > F (u ^ {\star}),
$$

which is a contradiction. 

Remark 4.10. The conclusion of Proposition 4.1 is no longer true if $F$ is a functional defined on a general normed space. The reason is that inf $_ { u } \{ F ( u ) : \| u - u ^ { \star } \| =$ $\epsilon \}$ may not be attainable for any $u \in \{ \| u - u ^ { \star } \| = \epsilon \}$ , and inf ${ \mathrm { } } _ { u } \{ F ( u ) : \| u - u ^ { \star } \| = \epsilon \}$ could be equal to inf ${ \bf \nabla } _ { u } F ( u )$ (see [130] for a counterexample, as well as general theories on the convergence of minimizing sequences). 

## 1.2. Image Restoration Models

The balanced approach, synthesis based approach and analysis based approach can be integrated into one minimization problem as follows: 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} \frac {1}{2} \| A W ^ {\top} \alpha - f \| _ {D} ^ {2} + \frac {\kappa}{2} \| (I - W W ^ {\top}) \alpha \| _ {2} ^ {2} + \| \mathrm{diag} (\lambda) \alpha \| _ {1},\tag{4.8}
$$

where $0 \le \kappa \le \infty$ and λ is a given vector defined as 

$$
\lambda = \left(\lambda_ {1}, \lambda_ {2}, \dots , \lambda_ {m}\right) ^ {\top},\tag{4.9}
$$

with $\lambda _ { i } > 0$ for $i = 1 , \cdots , m$ . We denote $\lambda _ { \operatorname* { m i n } } : =$ min<sub>i</sub> $\lambda _ { i } > 0$ . The matrix $D$ is some symmetric positive definite matrix. It is usually chosen as a preconditioner to the equation $A W ^ { \top } \alpha = f$ . Throughout this lecture, we take $D = \bar { ( } A A ^ { \top } + \theta I ) ^ { - 1 }$ for some properly chosen $\theta > 0$ . We refer to the model (4.8) as the (single-system) balanced approach. 

When $0 < \kappa < \infty$ , the problem (4.8) is called the balanced approach. When $\kappa = 0$ , the problem (4.8) is reduced to the synthesis based approach: 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} \frac {1}{2} \| A W ^ {\top} \alpha - f \| _ {D} ^ {2} + \| \mathrm{diag} (\lambda) \alpha \| _ {1}.\tag{4.10}
$$

When $\kappa = \infty$ , the problem (4.8) is reduced to the analysis based approach. To see this, we note that the distance $\| ( I - W W ^ { \top } ) \alpha \|$ must be 0 when $\kappa = \infty$ . This implies that $\alpha$ is in the range of W, i.e., $\alpha = W u$ for some $u \in \mathbb { R } ^ { n }$ , so we can rewrite (4.8) as 

$$
\min _ {\alpha \in \operatorname{Range} (W)} \frac {1}{2} \| A W ^ {\top} \alpha - f \| _ {D} ^ {2} + \| \mathrm{diag} (\lambda) \alpha \| _ {1} = \min _ {u \in \mathbb {R} ^ {n}} \frac {1}{2} \| A u - f \| _ {D} ^ {2} + \| \mathrm{diag} (\lambda) W u \| _ {1}.
$$

Now, we refer to the problem 

$$
\min _ {u \in \mathbb {R} ^ {n}} \frac {1}{2} \| A u - f \| _ {D} ^ {2} + \| \mathrm{diag} (\lambda) W u \| _ {1},\tag{4.11}
$$

as the analysis based approach. We remark that the analysis based approach does not require using the inverse of $W$ . Hence, it can be generalized to any linear transform $W$ 

The objective functions in (4.8) with $0 \le \kappa \le \infty$ and in (4.11) are convex (but not strictly convex in general), proper and continuous on $\mathbb { R } ^ { m }$ . Furthermore, as Theorem 4.2 shows that they are also coercive. Therefore, there exists at least one solution for both problems. 

It is clear that when $0 < \kappa < \infty$ , (4.8) balances between (4.10) and (4.11); hence, is called the balanced approach. Since the algorithms and convergence analysis on the balanced approach are still valid when $\kappa = 0$ , we include discussion of the synthesis based approach into our presentation of the balanced approach. We even intend to call the model (4.10) the general balanced approach for $0 \leq \kappa <$ ∞ and include the synthesis based approach as a special case. 

We note that when the rows of W form an orthonormal basis, instead of being a redundant tight frame, the above three approaches are exactly the same, since in this case, $W W ^ { \top } = I$ . However, for redundant tight frame system $W .$ , the analysis based, synthesis based and balanced approach cannot be derived from one another. In fact, it was observed in [47, 83] for example, that there is a gap between the analysis based and synthesis based approach. Both of them have their own favorable data sets and applications. In general, it is hard to draw definitive conclusions on which approach is better without specifying the applications and data sets. We further note that the $\ell _ { 1 }$ -minimization problems in compressed sensing is akin to the synthesis based approach in nature. On the other hand, the TV-norm minimization problem in imaging restoration is, for many cases, an analysis based approach. For frame based image restoration, numerical simulations in [24] show that the analysis based approach tends to generate smoother images than the synthesis based approach. This is because the coeficient Wu is quite often linked to the smoothness of the underlying image [10, 9, 97, 106, 110]. However, the synthesis based approach tends to exploit more of the sparse representation of the underlying solution in terms of the given frame system by utilizing the redundancy. Therefore, the synthesis based approach usually enhances and sharpens edges, although it may introduce some artifacts as shown in [16]. The balanced approach bridges the analysis based and synthesis based approach and it balances the smoothness and the sparsity provided by frames as shown in [14, 15, 16, 25, 32, 34, 36, 38]. 

To solve the synthesis based approach (4.10), the proximal forward and backward splitting algorithm was used in [62, 66, 86, 87, 90, 91]. Also, the accelerated proximal gradient (APG) algorithms of [168], designed for the general balanced approach, can be applied to get a fast algorithm for the synthesis based approach. 

For the analysis based approach (4.11), the coordinate descent method was used in [84, 170]. More recently, the split Bregman algorithm was used to develop a fast algorithm for the analysis based approach in frame based image restoration in [24], where numerical simulations showed that the split Bregman algorithm is eficient for image deblurring, decomposition, denoise, and inpainting. The split Bregman algorithm was first proposed in [96] and was shown to be powerful in [96, 185] when it was applied to various PDE based image restoration approaches, e.g., ROF and nonlocal variational models. Convergence analysis of the split Bregman was given in [24]. 

For the balanced approach in frame based image restoration, the model and algorithm were first developed in [32, 34, 36, 38]. The balanced approach was reformulated as the proximal forward-backward splitting algorithm in [14, 15, 16, 25]. The balanced approach gives satisfactory simulation results, as shown in [14, 15, 16, 25, 32, 34, 36, 38]. Recently, fast algorithms for the balanced approach in frame based image restoration whose convergence speeds are much faster than those of the proximal forward-backward splitting algorithm were developed in [168]. The accelerated proximal gradient algorithms proposed in [168] are based on and extended from several variants of accelerated proximal gradient algorithms that were studied in [4, 140, 141, 142, 143, 175]. These accelerated proximal gradient algorithms have an attractive iteration complexity of ${ \cal O } ( 1 / \sqrt \epsilon )$ for achieving -optimality. Also these accelerated proximal gradient algorithms are simple and only use the soft-thresholding operator, just like algorithms such as the linearized Bregman algorithm, the split Bregman algorithm and the proximal forward-backward splitting algorithm. 

Finally, we note that the formulation of (4.8) can be extended to image restoration of two-layered images [24, 84, 170]. Real images usually have two layers, referring to cartoons (the piecewise smooth part of the image) and textures (the oscillating pattern part of the image). Usually, diferent layers have sparse approximations under diferent tight frame systems. Therefore, these two diferent layers should be considered separately. One natural idea is to use two tight frame systems that can sparsely represent cartoons and textures respectively. The corresponding image restoration problem can be formulated as the following $\ell _ { 1 } \cdot$ -minimization problem: 

$$
\min _ {\alpha^ {1}, \alpha^ {2} \in \mathbb {R} ^ {m}} \frac {1}{2} \| A (\sum_ {i = 1} ^ {2} W _ {i} ^ {\top} \alpha^ {i}) - f \| _ {D} ^ {2} + \sum_ {i = 1} ^ {2} \frac {\kappa_ {i}}{2} \| (I - W _ {i} W _ {i} ^ {\top}) \alpha^ {i} \| _ {2} ^ {2} + \sum_ {i = 1} ^ {2} \| \mathrm{diag} (\lambda^ {i}) \alpha^ {i} \| _ {1},\tag{4.12}
$$

where, for $i = 1 , 2 , W _ { i } ^ { T } W _ { i } = I , \kappa _ { i } > 0 , \lambda _ { i }$ is a given positive weight vector, and $D$ is a given symmetric positive definite matrix. We refer to model (4.12) as the two-system balanced approach. 

## 2. Balanced Approach

The balanced approach for frame based image restorations was first developed in [34, 36, 38] for high resolution image reconstruction from a few low resolution images. The problem of high resolution image constructions is converted to the problem of filling in the missing wavelet frame coeficients, i.e. inpainting in wavelet frame transformation domain, by designing a proper wavelet tight frame [34, 36, 38]. The ideas of [34, 36] are used in [37] to develop the balanced approach for frame based image inpainting (in pixel domain) whose complete analysis of convergence and optimal properties of the solution are given in [16]. Analysis of the convergence and optimal properties of the solutions of algorithms in [34, 36, 38] is given in [14, 25, 32]. 

In this section, we use image inpainting to illustrate how the ideas of the balanced approach are formed and developed. Also, we prove the convergence of the image inpainting algorithm. Then we present an accelerated algorithm of [168] for the balanced approach (which includes the synthesis based approach) and the proof of convergence given by [168] is included. After that, we recall the linearized Bregman algorithm as an alternative to the balanced and synthesis approaches. We prove the convergence of the linearized Bregman algorithm by connecting it to the Uzawa’s algorithm. Numerical experiments on both image inpainting and deblurring are presented at the end of this section. 

## 2.1. Balanced Approach for Image Inpainting

The mathematical model for image inpainting can be stated as follows. Let the original image $u \in \mathbb { R } ^ { n }$ be defined on the domain $\Omega = \{ 1 , 2 , \cdots , n \}$ and the nonempty set $\Lambda \subsetneq \Omega$ be the given observed region. Then the observed (incomplete) image $f$ is 

$$
f (i) = \left\{ \begin{array}{l l} u (i) + \eta (i), & i \in \Lambda , \\ \text { arbitrary }, & i \in \Omega \setminus \Lambda , \end{array} \right.\tag{4.13}
$$

where $\eta ( i )$ is the noise. The goal is to find u from $f .$ . When $\eta ( i ) = 0$ for all $i \in \Lambda ,$ we require that $u ( i ) = f ( i )$ and u is just the solution of an interpolation problem. Otherwise, we seek a smooth solution u that satisfies $| u ( i ) - f ( i ) | \leq \eta ( i )$ for all $i \in \Lambda$ . In both cases, variational approaches will penalize some cost functionals (which normally are weighted function norms of the underlying solution) to contro the roughness of the solution, see for instance [7, 42]. 

Image inpainting is to recover data by interpolation. There are many interpolation schemes available, e.g., spline interpolation, but the majority of them are only good for smooth functions. Images are either piecewise smooth function or formed by textures which do not have the global smoothness required by most interpolation schemes. The major challenge in image inpainting is to keep the features, e.g. edges, of images which cannot be well preserved by many of the available interpolation algorithms. Furthermore, since images are usually contaminated by noise, a good inpainting algorithm should have a built-in denoising component. 

The simple idea of the balanced approach for frame based image inpainting comes as follows: one may use any simple interpolation scheme to interpolate the given data that leads to an inpainted image. Edges might be blurred and noises are still present in this inpainted image. One of the simplest ways to sharpen the image and remove noises at the same time is to set small coeficients under a tight wavelet frame transform to zero. When we reconstruct the image using the modified frame coeficients, it will no longer interpolate the data, and the simplest way to make it interpolate the given data is to put the given data back. One may iterate this procedure till convergence. 

To be precise, let $\mathcal { P } _ { \Lambda }$ be the diagonal matrix with diagonal entries 1 for the indices in Λ and 0 otherwise. Starting with the initial guess $u _ { 0 }$ , the iterative procedure mentioned above can be expressed as 

(4.14) 

$$
u _ {k + 1} = \mathcal {P} _ {\Lambda} f + (I - \mathcal {P} _ {\Lambda}) W ^ {\top} \mathcal {T} _ {\lambda} (W u _ {k}).\tag{Here}
$$

$$
\mathcal {T} _ {\lambda} ([ \beta_ {1}, \beta_ {2}, \dots , \beta_ {m} ] ^ {\top}) := [ t _ {\lambda_ {1}} (\beta_ {1}), t _ {\lambda_ {2}} (\beta_ {2}), \dots , t _ {\lambda_ {m}} (\beta_ {m}) ] ^ {\top}\tag{4.15}
$$

is the soft-thresholding function [77]: 

$$
t _ {\lambda_ {i}} (\beta_ {i}) := \left\{ \begin{array}{l l} \operatorname{sgn} (\beta_ {i}) (| \beta_ {i} | - \lambda_ {i}), & \text { if } | \beta_ {i} | > \lambda_ {i}, \\ 0, & \text { if } | \beta_ {i} | \leq \lambda_ {i}, \end{array} \right.\tag{4.16}
$$

Note that by using soft-thresholding instead of hard-thresholding which is traditionally used to sharpen edges, we reduce artifacts and obtain the desired minimization property in each iteration. The thresholding operator $\mathcal { T } _ { \lambda }$ also plays two other important roles, namely, removing noises in the image and perturbing the frame coeficients $W u _ { k }$ so that information contained in the given region Λ can permeate into the missing region $\Omega \backslash \Lambda$ 

Now, define $\alpha _ { k } = \mathcal { T } _ { \lambda } ( W u _ { k } )$ . Then (4.14) can be rewritten as an iteration in terms of $\alpha _ { k } \mathrm { : }$ 

$$
\alpha_ {k + 1} = \mathcal {T} _ {\lambda} \left(W \mathcal {P} _ {\Lambda} f + W (I - \mathcal {P} _ {\Lambda}) W ^ {\top} \alpha_ {k}\right).
$$

Then we have the following frame based image inpainting algorithm: 

Algorithm 4.1. 

(i) Set an initial guess $\alpha _ { 0 }$ 

(ii) Iterate on k until convergence: 

$$
\alpha_ {k + 1} = \mathcal {T} _ {\lambda} \left(W \mathcal {P} _ {\Lambda} f + W (I - \mathcal {P} _ {\Lambda}) W ^ {\top} \alpha_ {k}\right)\tag{4.17}
$$

(iii) Let $\alpha ^ { \star }$ to the output of Step (ii). $I f \ \eta ( i ) = 0$ for all $i \in \Lambda$ in $\left( 4 . 1 3 \right)$ we set $u ^ { \star } : = \mathcal { P } _ { \Lambda } f + ( I - \mathcal { P } _ { \Lambda } ) W ^ { \top } \alpha ^ { \star }$ to be the solution (to the inpainting problem); otherwise, since $\mathcal { T } _ { \lambda }$ can remove noise, we set $\boldsymbol { u } ^ { \circ } = \boldsymbol { W } ^ { \intercal } \boldsymbol { \alpha } ^ { \star }$ to be the solution (to the inpainting-plus-denoising problem). 

Algorithm 4.1 was first proposed in [37], and a complete analysis of its convergence was given in [16]. It was proved in [16] that $\alpha _ { k }$ generated by Algorithm 4.1 is a converging sequence that minimizes 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} \frac {1}{2} \| \mathcal {P} _ {\Lambda} W ^ {\top} \alpha - \mathcal {P} _ {\Lambda} f \| _ {2} ^ {2} + \frac {1}{2} \| (I - W W ^ {\top}) \alpha \| _ {2} ^ {2} + \| \mathrm{diag} (\lambda) \alpha \| _ {1}.\tag{4.18}
$$

Note that the problem (4.18) is a special case of (4.8) with $D = I , A = \mathcal { P } _ { \Lambda }$ and $\kappa = 1$ . In fact, (4.18) was discovered first and was later generalized to (4.8) 

and (4.12). Here, we consider a slightly more general problem than (4.18), with $\kappa \in [ 0 , \infty )$ 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} \frac {1}{2} \| \mathcal {P} _ {\Lambda} W ^ {\top} \alpha - \mathcal {P} _ {\Lambda} f \| _ {2} ^ {2} + \frac {\kappa}{2} \| (I - W W ^ {\top}) \alpha \| _ {2} ^ {2} + \| \mathrm{diag} (\lambda) \alpha \| _ {1}.\tag{4.19}
$$

Now, we follow arguments that is similar to those in [16] to show that Algorithm 4.1 converges to a minimizer of (4.18) (i.e. (4.19) with $\kappa = 1 )$ . Define 

$$
F _ {1} (\alpha) := \| \mathrm{diag} (\lambda) \alpha \| _ {1} \quad \text {and} \quad F _ {2} ^ {\kappa} (\alpha) := \frac {1}{2} \| \mathcal {P} _ {\Lambda} (W ^ {\top} \alpha) - \mathcal {P} _ {\Lambda} \mathbf {f} \| _ {2} ^ {2} + \frac {\kappa}{2} \| (I - W W ^ {\top}) \alpha \| _ {2} ^ {2}.\tag{4.20}
$$

Here for the case $\kappa = 1$ we denote $F _ { 2 } ^ { 1 } ( \alpha )$ simply as $F _ { 2 } ( \alpha )$ . Then the minimization problem (4.18) can be written as 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} F _ {1} (\alpha) + F _ {2} (\alpha).
$$

For any proper, convex, lower semi-continuous function $\varphi$ which takes values in $( - \infty , + \infty ]$ , its proximal operator (see e.g. [109, 137, 138]) is defined by 

$$
\mathrm{prox} _ {\varphi} (\mathbf {x}) := \arg \min _ {\mathbf {y}} \{\frac {1}{2} \| \mathbf {x} - \mathbf {y} \| _ {2} ^ {2} + \varphi (\mathbf {y}) \}.\tag{4.21}
$$

It is easy to show that $( \mathrm { s e e ~ e . g . ~ } [ { \bf 5 8 } ] )$ 

$$
\mathrm{prox} _ {F _ {1}} (\beta) = \arg \min _ {\alpha \in \mathbb {R} ^ {m}} \{\frac {1}{2} \| \beta - \alpha \| _ {2} ^ {2} + \| \mathrm{diag} (\lambda) \alpha \| _ {1} \} = \mathcal {T} _ {\lambda} (\beta).\tag{4.22}
$$

Now, we can rewrite the iterations of $\alpha _ { k }$ in (4.17) in terms of proximal operators defined in (4.21). 

Lemma 4.1. Iteration of $\alpha _ { k }$ given by (4.17) is equivalent to 

$$
\alpha_ {k + 1} = \mathrm{prox} _ {F _ {1}} (\alpha_ {k} - \nabla F _ {2} (\alpha_ {k})).\tag{4.23}
$$

Proof. Indeed, by (4.22), we have 

$$
\begin{array}{r c l} \alpha_ {k + 1} & = & \mathrm{prox} _ {F _ {1}} [ W \mathcal {P} _ {\Lambda} f + W (I - \mathcal {P} _ {\Lambda}) W ^ {\top} \alpha_ {k} ] \\ & = & \mathrm{prox} _ {F _ {1}} [ \alpha_ {k} - \alpha_ {k} + W \mathcal {P} _ {\Lambda} f + W W ^ {\top} \alpha_ {k} - W \mathcal {P} _ {\Lambda} W ^ {\top} \alpha_ {k} ] \\ & = & \mathrm{prox} _ {F _ {1}} [ \alpha_ {k} - ((I - W W ^ {\top}) \alpha_ {k} + W \mathcal {P} _ {\Lambda} (\mathcal {P} _ {\Lambda} W ^ {\top} \alpha_ {k} - \mathcal {P} _ {\Lambda} f)) ]. \end{array}
$$

Since $( I - W W ^ { \top } ) ^ { 2 } = I - W W ^ { \top }$ , we have 

$$
\begin{array}{r c l} \alpha_ {k + 1} & = & \mathrm{prox} _ {F _ {1}} [ \alpha_ {k} - ((I - W W ^ {\top}) ^ {2} \alpha_ {k} + W \mathcal {P} _ {\Lambda} (\mathcal {P} _ {\Lambda} W ^ {\top} \alpha_ {k} - \mathcal {P} _ {\Lambda} f)) ] \\ & = & \mathrm{prox} _ {F _ {1}} [ \alpha_ {k} - \nabla (\frac {1}{2} \| \mathcal {P} _ {\Lambda} W ^ {\top} \alpha_ {k} - \mathcal {P} _ {\Lambda} f \| _ {2} ^ {2} + \frac {1}{2} \| (I - W W ^ {\top}) \alpha_ {k} \| _ {2} ^ {2}) ] \\ & = & \mathrm{prox} _ {F _ {1}} (\alpha_ {k} - \nabla F _ {2} (\alpha_ {k})). \end{array}
$$

This concludes the proof of the lemma. 

The new form of iteration (4.23) of $\alpha _ { k }$ is known as the proximal forwardbackward splitting. A rather comprehensive convergence analysis of this type of iterations was given in [58]. Let us now recall the main convergence theorem in [58] for the finite dimensional case. 

Theorem 4.1. Consider the minimization problem 

$$
\min _ {x \in \mathbb {R} ^ {m}} F _ {1} (x) + F _ {2} (x),\tag{4.24}
$$

where $F _ { 1 } : \mathbb { R } ^ { m } \mapsto \bar { \mathbb { R } }$ is a proper, convex, lower semi-continuous function, and $F _ { 2 } : \mathbb { R } ^ { m } \mapsto \mathbb { R }$ is a convex, diferentiable function with an L-Lipschitz continuous gradient. Assume a minimizer of (4.24) exists. Then for any initial guess $x _ { 0 }$ , the iteration (called the proximal forward-backward splitting): 

$$
x _ {k + 1} = \operatorname{prox} _ {F _ {1} / L} (x _ {k} - \nabla F _ {2} (x _ {k}) / L)
$$

converges to a minimizer of $F _ { 1 } ( x ) + F _ { 2 } ( x )$ 

We do not provide a proof for Theorem 4.1 because it does not reveal any information on the speed of convergence of the sequence $\alpha _ { k }$ . In the next section, we prove another version of Theorem 4.1 (Theorem 4.4) for a general balanced approach (4.8). 

By Lemma 4.1, proving convergence of Algorithm 4.1 is now reduced to proving that $F _ { 1 }$ and $F _ { 2 }$ defined in (4.20) satisfy all the assumptions in Theorem 4.1. 

Theorem 4.2. The sequence $\alpha _ { k }$ defined by (4.17) converges to a minimizer of the minimization problem (4.18) for any initial guess $\alpha _ { 0 }$ 

Proof. Obviously $F _ { 1 }$ is a proper, convex, lower semi-continuous (in fact continuous) function, and $F _ { 2 }$ is a convex and diferentiable function. Therefore, all we need to prove are: 

(1) $F _ { 2 }$ is 1-Lipschitz. 

(2) $F _ { 1 } ( \alpha ) + F _ { 2 } ( \alpha )$ is coercive, i.e. $F _ { 1 } ( \alpha ) + F _ { 2 } ( \alpha )  \infty { \mathrm { ~ a s ~ } } \| \alpha \| _ { 2 }  \infty$ , which implies that mi $1 _ { \alpha } \{ F _ { 1 } ( \alpha ) + F _ { 2 } ( \alpha ) \}$ has at least one solution. 

For (1), noting that $\boldsymbol { W } ( \boldsymbol { I } - \mathcal { P } _ { \boldsymbol { \Lambda } } ) \boldsymbol { W } ^ { \intercal } \succeq \boldsymbol { 0 }$ , we have 

$$
\begin{array}{c} \nabla^ {2} F _ {2} = (I - W W ^ {\top}) + W \mathcal {P} _ {\Lambda} W ^ {\top} \\ \preceq (I - W W ^ {\top}) + W W ^ {\top} \\ = I \end{array}
$$

Therefore, $F _ { 2 }$ is 1-Lipschitz. 

For (2), we have 

$$
F _ {1} (\alpha) + F _ {2} (\alpha) \geq F _ {1} (\alpha) = \sum_ {j = 1} ^ {m} \lambda_ {j} | \alpha_ {j} | \geq \lambda_ {\min} \| \alpha \| _ {1} \geq \lambda_ {\min} \| \alpha \| _ {2},
$$

which proves coercivity of $F _ { 1 } ( \alpha ) + F _ { 2 } ( \alpha )$ 

Theorem 4.2 proves convergence of Algorithm 4.1 to (4.19) for the case $\kappa = 1$ In fact, Theorem 4.1 suggests the following Algorithm 4.2 for the general inpainting model (4.19) with $0 \leq \kappa < \infty$ 

## Algorithm 4.2.

(i) Set an initial guess $\alpha _ { 0 }$ 

(ii) Iterate on k until convergence: 

$$
\alpha_ {k + 1} = \mathcal {T} _ {\lambda / L} \Bigl (\alpha_ {k} - \nabla F _ {2} ^ {\kappa} (\alpha_ {k}) / L \Bigr),\tag{4.25}
$$

where L is the Lipschitz constant of $F _ { 2 } ^ { \kappa }$ defined by (4.6). 

(iii) Let $\alpha ^ { \star }$ to the output of Step (ii). $I f \ \eta ( i ) = 0$ for all $i \in \Lambda$ in $\left( 4 . 1 3 \right)$ we set $u ^ { \star } : = \mathcal { P } _ { \Lambda } f + ( I - \mathcal { P } _ { \Lambda } ) W ^ { \top } \alpha ^ { \star }$ to be the solution (to the inpainting problem); otherwise, since $\mathcal { T } _ { \lambda / L }$ can remove noise, we set $\boldsymbol { u } ^ { \circ } = \boldsymbol { W } ^ { \intercal } \boldsymbol { \alpha } ^ { \star }$ to be the solution (to the inpainting-plus-denoising problem). 

Then we have the following convergence theorem. 

Theorem 4.3. The sequence $\alpha _ { k }$ defined by (4.25) converges to a minimizer of the minimization problem (4.19) with $0 \leq \kappa < \infty \ f o r$ any initial guess $\alpha _ { 0 }$ 

Proof. All we need to show is that L, the Lipschitz constant of $F _ { 2 } ^ { \kappa }$ , is bounded. In fact, we will show that $L \leq \operatorname* { m a x } \{ 1 , \kappa \}$ . Indeed, we have 

$$
\begin{array}{l} \nabla^ {2} F _ {2} ^ {\kappa} = \kappa (I - W W ^ {\top}) + W \mathcal {P} _ {\Lambda} W ^ {\top} \\ \preceq \kappa (I - W W ^ {\top}) + W W ^ {\top} \\ \preceq \kappa I + (1 - \kappa) W W ^ {\top} \\ \preceq \left\{ \begin{array}{l l} I, & \text {for 0\leq\kappa\leq 1} \\ \kappa I, & \text {for \kappa\geq 1} \end{array} \right. \end{array}
$$

which implies $L \leq \operatorname* { m a x } \{ 1 , \kappa \}$ 

## 2.2. Proximal Forward-Backward Splitting for General Balanced $\mathbf { A p - }$ proach

This section presents a proximal forward-backward splitting algorithm for the general balanced approach (4.8) with $0 \leq \kappa < \infty$ , as well as some convergence analysis of the algorithm. The corresponding algorithm for the balanced approach involving multiple frame systems (4.12) can be obtained similarly. Let 

$$
F _ {1} (\alpha) = \| \mathrm{diag} (\lambda) \alpha \| _ {1} \mathrm{and} F _ {2} (\alpha) = \frac {1}{2} \| A W ^ {\top} \alpha - f \| _ {D} ^ {2} + \frac {\kappa}{2} \| (I - W W ^ {\top}) \alpha \| _ {2} ^ {2}.
$$

Then, the proximal forward-backward splitting algorithm can be written in the following short form (see [14, 15, 16, 17, 25, 32, 34, 36, 38, 58]) 

$$
\alpha_ {k + 1} = \mathrm{prox} _ {F _ {1} / L} (\alpha_ {k} - \nabla F _ {2} (\alpha_ {k}) / L).
$$

The detailed form of the above algorithm is given as follows: 

Algorithm 4.3. For a given vector $\lambda \in \mathbb { R } _ { + } ^ { m }$ , choose any $\alpha _ { 0 } \in \mathbb { R } ^ { m }$ . For $k =$ $0 , 1 , 2 , \ldots$ generate $\alpha _ { k + 1 }$ from $\alpha _ { k }$ according to the following iterations: 

(i) Set $g _ { k } = \alpha _ { k } - \nabla F _ { 2 } ( \alpha _ { k } ) / L ;$ 

(ii) Set $\alpha _ { k + 1 } = \mathcal { T } _ { \lambda / L } ( g _ { k } )$ 

Here, the gradient of $F _ { 2 }$ is given by 

$$
\nabla F _ {2} (\alpha) = W A ^ {T} D (A W ^ {\top} \alpha - f) + \kappa (I - W W ^ {\top}) \alpha ,
$$

and the Hessian matrix of $F _ { 2 }$ is 

$$
\nabla^ {2} F _ {2} = W A ^ {T} D A W ^ {\top} + \kappa (I - W W ^ {\top}).
$$

It is obvious that $F _ { 2 }$ is L-Lipschitz, and $L \leq \rho _ { \mathrm { m a x } } ( A ^ { \top } D A ) + \kappa$ . This generalizes the inpainting algorithms given in the previous section to algorithms for various image restoration problems. Although the original development of algorithms took a diferent path, this idea is used in the proof of the convergence of the balanced approach frame based algorithms given in [14, 15, 16, 17, 25, 32, 34, 36, 38]. 

First, we prove the following lemma ([168, Lemma 2.1]) which characterizes the optimal solutions of (4.8). 

Lemma 4.2. For each $\lambda > 0$ , the optimal solution $\alpha ^ { \star }$ of (4.8) satisfies 

$$
\| \alpha^ {\star} \| _ {1} \leq C,
$$

where 

$$
C = \left\{ \begin{array}{l l} \min \{\| f \| _ {D} ^ {2} / 2, \| \mathrm{diag} (\lambda) \alpha_ {\mathrm{LS}} \| _ {1} \} / \lambda_ {\min} & \quad \text { if   A   is   surjective } \\ \| f \| _ {D} ^ {2} / (2 \lambda_ {\min}) & \quad \text { otherwise }, \end{array} \right.
$$

with $\alpha _ { \mathrm { L S } } : = W A ^ { \top } ( A A ^ { \top } ) ^ { - 1 } f$ 

Proof. Let $\alpha ^ { \star }$ be an optimal solution of (4.8). Then 

$$
\lambda_ {\min} \| \alpha^ {\star} \| _ {1} \leq F _ {1} (\alpha^ {\star}) + F _ {2} (\alpha^ {\star}) \leq F _ {1} (0) + F _ {2} (0) = \frac {1}{2} \| f \| _ {D} ^ {2}
$$

Hence $\| \alpha ^ { \star } \| _ { 1 } \leq \| f \| _ { D } ^ { 2 } / ( 2 \lambda _ { \operatorname* { m i n } } )$ . In addition, if A is surjective then we have 

$$
\lambda_ {\min} \| \alpha^ {\star} \| _ {1} \leq F _ {1} (\alpha^ {\star}) + F _ {2} (\alpha^ {\star}) \leq F _ {1} (\alpha_ {\mathrm{LS}}) + F _ {2} (\alpha_ {\mathrm{LS}}) = \| \operatorname{diag} (\lambda) \alpha_ {\mathrm{LS}} \| _ {1}.
$$

This concludes the proof of the lemma. 7 

Now, we prove that the sequence $\{ \alpha _ { k } \} _ { k \ge 0 }$ generated by Algorithm 4.3 converges to a minimizer of: 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} F _ {1} (\alpha) + F _ {2} (\alpha),
$$

under suitable conditions. A similar proof can be found in $\mathrm { e . g . } \ [ 4 ]$ . For notational convenience we denote $F ( \alpha ) : = F _ { 1 } ( \alpha ) + F _ { 2 } ( \alpha )$ and 

$$
\ell_ {F} (\alpha ; \beta) := F _ {2} (\beta) + \langle \nabla F _ {2} (\beta), \alpha - \beta \rangle + \| \operatorname{diag} (\lambda) \alpha \| _ {1},
$$

where the sum of the first two terms is the linear approximation of $F _ { 2 }$ at $\beta .$ Since $F _ { 2 }$ has an L-Lipschitz continuous gradient and is convex, we have the following inequality 

$$
F (\alpha) - \frac {L}{2} \| \alpha - \beta \| _ {2} ^ {2} \leq \ell_ {F} (\alpha ; \beta), \quad \text { for   all } \alpha , \beta \in \mathbb {R} ^ {m}.\tag{4.26}
$$

Theorem 4.4. Consider the minimization problem 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} F _ {1} (\alpha) + F _ {2} (\alpha),\tag{4.27}
$$

where $F _ { 1 } = \| \mathrm { d i a g } ( \lambda ) \alpha \| _ { 1 }$ and $F _ { 2 } : \mathbb { R } ^ { m } \mapsto \mathbb { R }$ is a convex, diferentiable function with an L-Lipschitz continuous gradient. Let $F : = F _ { 1 } + F _ { 2 }$ and denote $\alpha ^ { \star }$ be a solution of (4.27). Then the sequence $\{ \alpha _ { k } \} _ { k \ge 0 }$ generated by Algorithm $4 . 3$ satisfies 

$$
F (\alpha_ {k}) - F (\alpha^ {\star}) \leq \frac {L \| \alpha^ {\star} - \alpha_ {0} \| _ {2} ^ {2}}{2 k}.\tag{4.28}
$$

As a consequence, for given $\epsilon > 0$ , we have 

$$
F \left(\alpha_ {k}\right) - F \left(\alpha^ {\star}\right) \leq \epsilon , \quad \text { whenever } k \geq \frac {L \left(C + \| \alpha_ {0} \| _ {2}\right) ^ {2}}{2 \epsilon}.\tag{4.29}
$$

When (4.27) has a unique solution $\alpha ^ { \star }$ , we have 

$$
\lim _ {k \to \infty} \| \alpha_ {k} - \alpha^ {\star} \| _ {2} = 0.
$$

Proof. For a given $k \geq 1$ and any optimal solution $\alpha ^ { \star }$ , let 

$$
\alpha_ {k + 1} := \mathcal {T} _ {\lambda / L} (\alpha_ {k} - \nabla F _ {2} (\alpha_ {k}) / L).
$$

First, we show that 

$$
\alpha_ {k + 1} \in \arg \min _ {\alpha} \{\ell_ {F} (\alpha ; \alpha_ {k}) + L \langle \alpha_ {k + 1} - \alpha_ {k}, \alpha \rangle \}.\tag{4.30}
$$

By letting $g _ { k } = \alpha _ { k } - \nabla F _ { 2 } ( \alpha _ { k } ) / L$ and removing constant terms in (4.30), it is easy to see that (4.30) is equivalent to 

$$
\alpha_ {k + 1} \in \arg \min _ {\alpha} \{\langle \alpha_ {k + 1} - g _ {k}, \alpha \rangle + \| \operatorname{diag} (\lambda) \alpha \| _ {1} / L \}.\tag{4.31}
$$

Now by the definition of $\alpha _ { k + 1 }$ , we have 

$$
g _ {k} [ j ] - \alpha_ {k + 1} [ j ] = \left\{ \begin{array}{l l} \operatorname{sgn} (g _ {k} [ j ]) \lambda_ {j} / L, & \text {when} | g _ {k} [ j ] | > \lambda_ {j} / L \\ g _ {k} [ j ], & \text {when} | g _ {k} [ j ] | \leq \lambda_ {j} / L. \end{array} \right.
$$

This implies that 

$$
g _ {k} - \alpha_ {k + 1} \in \partial \| \mathrm{diag} (\lambda) \alpha_ {k + 1} \| _ {1} / L,
$$

or equivalently, 

$$
0 \in \alpha_ {k + 1} - g _ {k} + \partial \| \mathrm{diag} (\lambda) \alpha_ {k + 1} \| _ {1} / L,
$$

which implies (4.31) and hence (4.30). By (4.30), we now have 

$$
\ell_ {F} \left(\alpha_ {k + 1}; \alpha_ {k}\right) + L \left\langle \alpha_ {k + 1} - \alpha_ {k}, \alpha_ {k + 1} \right\rangle \leq \ell_ {F} \left(\alpha^ {\star}; \alpha_ {k}\right) + L \left\langle \alpha_ {k + 1} - \alpha_ {k}, \alpha^ {\star} \right\rangle .\tag{4.32}
$$

Letting $\alpha = \alpha _ { k + 1 }$ and $\beta = \alpha _ { k }$ in (4.26), we have 

$$
F (\alpha_ {k + 1}) \leq \ell_ {F} (\alpha_ {k + 1}; \alpha_ {k}) + \frac {L}{2} \| \alpha_ {k + 1} - \alpha_ {k} \| _ {2} ^ {2}.\tag{4.33}
$$

Applying (4.32) to (4.33), we have 

$$
\begin{array}{r} F (\alpha_ {k + 1}) \leq \ell_ {F} (\alpha^ {\star}; \alpha_ {k}) + L \langle \alpha_ {k + 1} - \alpha_ {k}, \alpha^ {\star} - \alpha_ {k + 1} \rangle + \frac {L}{2} \| \alpha_ {k + 1} - \alpha_ {k} \| _ {2} ^ {2} \\ = \ell_ {F} (\alpha^ {\star}; \alpha_ {k}) + \frac {L}{2} \| \alpha^ {\star} - \alpha_ {k} \| _ {2} ^ {2} - \frac {L}{2} \| \alpha^ {\star} - \alpha_ {k + 1} \| _ {2} ^ {2}, \end{array}
$$

where the last equality follows from straightforward calculations. Now, we have 

$$
\begin{array}{r l} & F (\alpha_ {k + 1}) \leq \ell_ {F} (\alpha^ {\star}; \alpha_ {k}) + \frac {L}{2} \| \alpha^ {\star} - \alpha_ {k} \| _ {2} ^ {2} - \frac {L}{2} \| \alpha^ {\star} - \alpha_ {k + 1} \| _ {2} ^ {2}, \\ & \qquad \leq F (\alpha^ {\star}) + \frac {L}{2} \| \alpha^ {\star} - \alpha_ {k} \| _ {2} ^ {2} - \frac {L}{2} \| \alpha^ {\star} - \alpha_ {k + 1} \| _ {2} ^ {2}. \end{array}\tag{4.34}
$$

Here, the last inequality follows from the definition of $\ell _ { F }$ and the convexity of $F _ { 2 }$ Subtracting $F ( \alpha ^ { \star } )$ from both sides of the last inequality of (4.34) gives 

$$
F (\alpha_ {k + 1}) - F (\alpha^ {\star}) \leq \frac {L}{2} \| \alpha^ {\star} - \alpha_ {k} \| _ {2} ^ {2} - \frac {L}{2} \| \alpha^ {\star} - \alpha_ {k + 1} \| _ {2} ^ {2}.
$$

Telescoping on the above inequality, we have 

$$
\sum_ {j = 1} ^ {k + 1} F (\alpha_ {j}) - (k + 1) F (\alpha^ {\star}) \leq \frac {L}{2} \| \alpha^ {\star} - \alpha_ {0} \| _ {2} ^ {2}.\tag{4.35}
$$

Now, by using (4.30) with $\alpha = \alpha _ { k }$ , we have 

$$
\begin{array}{c} \ell_ {F} (\alpha_ {k + 1}; \alpha_ {k}) + L \langle \alpha_ {k + 1} - \alpha_ {k}, \alpha_ {k + 1} \rangle \leq \ell_ {F} (\alpha_ {k}; \alpha_ {k}) + L \langle \alpha_ {k + 1} - \alpha_ {k}, \alpha_ {k} \rangle \\ = F (\alpha_ {k}) + L \langle \alpha_ {k + 1} - \alpha_ {k}, \alpha_ {k} \rangle . \end{array}
$$

By applying the above inequality to (4.33) we obtain 

$$
F (\alpha_ {k + 1}) - F (\alpha_ {k}) \leq - \frac {L}{2} \| \alpha_ {k + 1} - \alpha_ {k} \| _ {2} ^ {2}.
$$

After multiplying k at both sides of the above inequality and then telescoping, we have 

$$
(k + 1) F (\alpha_ {k + 1}) - \sum_ {j = 1} ^ {k + 1} F (\alpha_ {j}) = k F (\alpha_ {k + 1}) - \sum_ {j = 1} ^ {k} F (\alpha_ {j}) \leq - \frac {L}{2} \sum_ {j = 1} ^ {k} j \| \alpha_ {j + 1} - \alpha_ {j} \| _ {2} ^ {2}.
$$

Combining the above inequality with (4.35), we have 

$$
(k + 1) (F (\alpha_ {k + 1}) - F (\alpha^ {\star})) \leq \frac {L}{2} \| \alpha^ {\star} - \alpha_ {0} \| _ {2} ^ {2},
$$

and thus (4.28) follows. In addition, by applying the following inequalities 

$$
\left\| \alpha^ {\star} - \alpha_ {0} \right\| _ {2} \leq \left\| \alpha^ {\star} \right\| _ {2} + \left\| \alpha_ {0} \right\| _ {2} \leq \left\| \alpha^ {\star} \right\| _ {1} + \left\| \alpha_ {0} \right\| _ {2},
$$

and Lemma 4.2, we obtain (4.29). 

The conclusion that $\alpha _ { k }  \alpha ^ { \star }$ whenever $\alpha ^ { \star }$ is the unique minimizer of $F$ follows directly from Proposition 4.1. 

Remark 4.11. Theorem 4.1 whose proof is given in [58] says that the sequence $\alpha _ { k }$ itself converges to an optimal solution $\alpha ^ { \star }$ whenever there exists one as given in Theorem 4.1, which is stronger than what we have shown above. The interested reader should consult [58] for details. However, the speed of convergence, which is more important in practice, is not clear from the proof of [58]. Here, we focused on showing that $\alpha _ { k }$ is a minimizing sequence that reaches to an -optimal solution after $O ( L / \epsilon )$ iterations. Furthermore, in image restorations we are more interested in finding a solution at which the cost functional has a value that is close to the minimal value, rather than knowing whether the solution is close to a minimizer or not. In this regard, the proof here is more informative. 

## 2.3. Accelerated Algorithm

As shown in Theorem 4.4, the proximal forward-backward splitting algorithm generates an -optimal solution of (4.8) in $O ( L / \epsilon )$ iterations, which is reasonably eficient. However, in practice, faster algorithms are always desired. For example when the matrix A is huge (e.g. Radon transform for tomography in 3D), each iteration of Algorithm 4.3 can be expensive. Therefore, one always wishes to reduce the total number of iterations. As we will see from Theorem 4.5 the accelerated proximal gradient (APG) algorithm of [168] (see also the FISTA algorithm of [4]) is much more eficient than the proximal forward-backward splitting algorithm because it only requires $O ( \sqrt { L / \epsilon } )$ iterations to obtain an -optimal solution. 

The APG algorithm of [168] is obtained by adjusting the step $g _ { k } \ = \ \alpha _ { k } \ -$ $\nabla F _ { 2 } ( \alpha _ { k } ) / L$ in the proximal forward-backward splitting algorithm. This idea has already appeared in [4, 173]. Next, we describe the APG algorithm for solving (4.8). 

$$
\mathrm{(i)} S e t \beta_ {k} = \alpha_ {k} + \frac {t _ {k - 1} - 1}{t _ {k}} (\alpha_ {k} - \alpha_ {k - 1}).
$$

Algorithm 4.4. (APG for (4.8)) For a given vector $\lambda \in \mathbb { R } _ { + } ^ { m }$ , choose $\alpha _ { 0 } = \alpha _ { - 1 } \in$ $\mathbb { R } ^ { m } , t _ { 0 } = 1$ , and $t _ { - 1 } = 0$ . For $k = 0 , 1 , 2 , . . . ,$ generate $\alpha _ { k + 1 } \ f r o m \ \alpha _ { k }$ according to the following iteration: 

(ii) Set $g _ { k } = \beta _ { k } - \nabla F _ { 2 } ( \beta _ { k } ) / L$ 

(iii) Set $\alpha _ { k + 1 } = \mathcal { T } _ { \lambda / L } ( g _ { k } )$ 

(iv) Compute $\begin{array} { r } { t _ { k + 1 } = \frac { 1 + \sqrt { 1 + 4 t _ { k } ^ { 2 } } } { 2 } } \end{array}$ 

Note that, when $\kappa = 0$ , i.e. $\begin{array} { r } { F _ { 2 } ( \alpha ) = \frac { 1 } { 2 } \| A W ^ { \top } \alpha - f \| _ { D } ^ { 2 } } \end{array}$ , Algorithm 4.4 leads to an eficient algorithm for the synthesis based approach. When we take $t _ { k } = 1$ for all k in the APG algorithm, it is reduced to the proximal forward-backward splitting algorithm for the balanced approach in frame based image restorations, and it is the popular iterative shrinkage/thresholding algorithms proposed in [62, 66, 90, 91]. 

The iterative shrinkage/thresholding algorithms and the proximal forwardbackward splitting algorithms have been developed and analyzed independently by many researchers. These algorithms only require gradient evaluations and softthresholding operations, so the computation cost for each iteration is very cheap. But, for any $\epsilon > 0$ , these algorithms terminate in $O ( L / \epsilon )$ iterations with an - optimal solution as proven in Theorem 4.4. The APG algorithm proposed here, however, reaches an -optimal solution in $O ( \sqrt { L / \epsilon } )$ iterations. Thus APG algo-rithm of [168] greatly accelerates the proximal forward-backward splitting algorithms used in [14, 15, 16, 17, 25, 32, 34, 36, 38] for the balanced approach in frame based image restorations. 

Here, we recall the proof of convergence of Algorithm 4.4 given by [168, Theorem 2.1], which gives an upper bound on the number of iterations for the APG algorithm for solving (4.8) to achieve -optimality. The proof follows a similar idea to that of [4, 173] and Theorem 4.4. 

We note that for the sequence $t _ { k }$ defined in Algorithm 4.4, we have the following inequality which can be easily verified by induction 

$$
t _ {k} \geq \frac {k + 1}{2}.\tag{4.36}
$$

Theorem 4.5. Let $\{ \alpha _ { k } \} , \ \{ \beta _ { k } \}$ , and $\{ t _ { k } \}$ be the sequences given by Algorithm 4.4. Then for any $k \geq 1$ and any optimal solution $\alpha ^ { \star }$ to the minimization problem (4.8) with $0 \leq \kappa < \infty$ , we have 

$$
F (\alpha_ {k}) - F (\alpha^ {\star}) \leq \frac {2 L \| \alpha^ {\star} - \alpha_ {0} \| _ {2} ^ {2}}{(k + 1) ^ {2}}.\tag{4.37}
$$

Hence 

$$
F (\alpha_ {k}) - F (\alpha^ {\star}) \leq \epsilon , \quad \text { whenever } k \geq \sqrt {\frac {2 L}{\epsilon}} \left(\| \alpha_ {0} \| _ {2} + C\right) - 1,\tag{4.38}
$$

where C is given by Lemma $4 . 2 .$ Furthermore, if $\alpha ^ { \star }$ is the unique minimizer of $F ( \alpha )$ , then $\alpha _ { k }  \alpha ^ { \star }$ as $k \to \infty$ 

Proof. For a given $k \geq 1$ and any optimal solution $\alpha ^ { \star }$ , let $s _ { k } : = \mathcal T _ { \lambda / L } ( g _ { k } )$ and $\tilde { \alpha } : = ( ( t _ { k } - 1 ) \alpha _ { k } + \alpha ^ { \star } ) / t _ { k }$ . We first show that 

$$
s _ {k} \in \arg \min _ {\alpha} \{\ell_ {F} (\alpha ; \beta_ {k}) + L \langle s _ {k} - \beta_ {k}, \alpha \rangle \}.\tag{4.39}
$$

By definition of $g _ { k }$ in Algorithm 4.4 and removing constant terms in (4.39), it is easy to see that (4.39) is equivalent to 

$$
s _ {k} \in \arg \min _ {\alpha} \{\langle s _ {k} - g _ {k}, \alpha \rangle + \| \mathrm{diag} (\lambda) \alpha \| _ {1} / L \}.\tag{4.40}
$$

Now by the definition of $s _ { k }$ , we have 

$$
g _ {k} [ j ] - s _ {k} [ j ] = \left\{ \begin{array}{l l} \operatorname{sgn} (g _ {k} [ j ]) \lambda_ {j} / L, & \text {when} | g _ {k} [ j ] | > \lambda_ {j} / L \\ g _ {k} [ j ], & \text {when} | g _ {k} [ j ] | \leq \lambda_ {j} / L. \end{array} \right.
$$

This implies that 

$$
g _ {k} - s _ {k} \in \partial \| \mathrm{diag} (\lambda) s _ {k} \| _ {1} / L,
$$

or equivalently 

$$
0 \in s _ {k} - g _ {k} + \partial \| \operatorname{diag} (\lambda) s _ {k} \| _ {1} / L,
$$

which implies (4.40) and hence (4.39). By (4.39), we now have 

$$
\ell_ {F} (s _ {k}; \beta_ {k}) + L \langle s _ {k} - \beta_ {k}, s _ {k} \rangle \leq \ell_ {F} (\tilde {\alpha}; \beta_ {k}) + L \langle s _ {k} - \beta_ {k}, \tilde {\alpha} \rangle .\tag{4.41}
$$

Letting $\alpha = s _ { k }$ and $\beta = \beta _ { k }$ in (4.26) and noting that $\alpha _ { k + 1 } = s _ { k }$ , we have 

$$
F (\alpha_ {k + 1}) = F (s _ {k}) \leq \ell_ {F} (s _ {k}; \beta_ {k}) + \frac {L}{2} \| s _ {k} - \beta_ {k} \| _ {2} ^ {2}.
$$

Applying (4.41) to the above inequality, we have 

$$
\begin{array}{r l} & F (\alpha_ {k + 1}) \leq \ell_ {F} (\tilde {\alpha}; \beta_ {k}) + L \langle s _ {k} - \beta_ {k}, \tilde {\alpha} - s _ {k} \rangle + \frac {L}{2} \| s _ {k} - \beta_ {k} \| _ {2} ^ {2} \\ & \qquad = \ell_ {F} (\tilde {\alpha}; \beta_ {k}) + \frac {L}{2} \| \tilde {\alpha} - \beta_ {k} \| _ {2} ^ {2} - \frac {L}{2} \| \tilde {\alpha} - s _ {k} \| _ {2} ^ {2} \\ & \qquad = \ell_ {F} (\tilde {\alpha}; \beta_ {k}) + \frac {L}{2} \| \tilde {\alpha} - \beta_ {k} \| _ {2} ^ {2} - \frac {L}{2} \| \tilde {\alpha} - \alpha_ {k + 1} \| _ {2} ^ {2}, \end{array}
$$

where the second to the last equality follows from straightforward calculations. Plug the definition of ˜α into the above inequality and denoting $\gamma _ { k } : = ( t _ { k - 1 } - 1 ) \alpha _ { k - 1 } -$ $t _ { k - 1 } \alpha _ { k }$ , one obtains 

$$
\begin{array}{l} F (\alpha_ {k + 1}) \leq \frac {t _ {k} - 1}{t _ {k}} \ell_ {F} (\alpha_ {k}; \beta_ {k}) + \frac {1}{t _ {k}} \ell_ {F} (\alpha^ {\star}; \beta_ {k}) \\ \quad + \frac {L}{2 t _ {k} ^ {2}} \| (t _ {k} - 1) \alpha_ {k} + \alpha^ {\star} - t _ {k} \beta_ {k} \| _ {2} ^ {2} - \frac {L}{2 t _ {k} ^ {2}} \| (t _ {k} - 1) \alpha_ {k} + \alpha^ {\star} - t _ {k} \alpha_ {k + 1} \| _ {2} ^ {2}, \\ \quad = \frac {t _ {k} - 1}{t _ {k}} \ell_ {F} (\alpha_ {k}; \beta_ {k}) + \frac {1}{t _ {k}} \ell_ {F} (\alpha^ {\star}; \beta_ {k}) + \frac {L}{2 t _ {k} ^ {2}} \| \alpha^ {\star} - \gamma_ {k} \| _ {2} ^ {2} - \frac {L}{2 t _ {k} ^ {2}} \| \alpha^ {\star} - \gamma_ {k + 1} \| _ {2} ^ {2} \\ \quad \leq \frac {t _ {k} - 1}{t _ {k}} F (\alpha_ {k}) + \frac {1}{t _ {k}} F (\alpha^ {\star}) + \frac {L}{2 t _ {k} ^ {2}} \| \alpha^ {\star} - \gamma_ {k} \| _ {2} ^ {2} - \frac {L}{2 t _ {k} ^ {2}} \| \alpha^ {\star} - \gamma_ {k + 1} \| _ {2} ^ {2}. \end{array}\tag{4.42}
$$

Here, the first inequality follows from the fact that $\ell _ { F }$ is convex and $t _ { k } \geq 1$ by (4.36). The last inequality follows from the convexity of $F _ { 2 }$ 

Subtracting $F ( \alpha ^ { \star } )$ from both sides of the last inequality of (4.42), multiplying $t _ { k } ^ { 2 }$ at both sides and noticing that $t _ { k - 1 } ^ { 2 } = t _ { k } ( t _ { k } - 1 )$ , we have 

$$
t _ {k} ^ {2} (F (\alpha_ {k + 1}) - F (\alpha^ {\star})) \leq t _ {k - 1} ^ {2} (F (\alpha_ {k}) - F (\alpha^ {\star})) + \frac {L}{2} \| \alpha^ {\star} - \gamma_ {k} \| _ {2} ^ {2} - \frac {L}{2} \| \alpha^ {\star} - \gamma_ {k + 1} \| _ {2} ^ {2}.
$$

Telescoping on the above inequality, and using $t _ { - 1 } = 0$ and $\gamma _ { 0 } = \alpha _ { 0 }$ , we have 

$$
t _ {k} ^ {2} (F (\alpha_ {k + 1}) - F (\alpha^ {\star})) \leq \frac {L}{2} \| \alpha^ {\star} - \alpha_ {0} \| _ {2} ^ {2}.
$$

By (4.36), the inequality (4.37) follows; and using Lemma 4.2, we obtain (4.38). 

The conclusion that $\alpha _ { k }  \alpha ^ { \star }$ whenever $\alpha ^ { \star }$ is the unique minimizer of F follows directly from Proposition 4.1. 

## Remark 4.12.

(1) Theorem 4.5 shows that the number of iterations to get an -optimal solution is of order $O ( \sqrt { L / \epsilon } )$ . Therefore, less iterations are required if we have a smaller Lipschitz constant L. For the general balanced approach, we have $L \leq \rho _ { \mathrm { m a x } } ( A ^ { \top } D A ) + \kappa$ . Then for given A and $D ,$ the smaller κ is, the faster $\alpha _ { k }$ from the APG algorithm converges. 

(2) For the inpainting problem considered in the previous section, we have $A = \mathcal { P } _ { \Lambda }$ and $D = I$ . We have shown in the proof of Theorem 4.3 that $L = \operatorname* { m a x } \{ 1 , \kappa \}$ . Thus APG converges fastest whenever $\kappa \leq 1$ and $\kappa = 1$ is the case where we have fast convergence while the reconstructed image has good regularity. 

(3) It is clear that the Algorithm (4.4) can be used for both the balanced approach and the synthesis based approach (the combination of the two is called the general balanced approach here). In general, the balanced approach and the synthesis based approach can have the same algorithm by using diferent cost functionals, while algorithms for the analysis based approach need to be developed separately. 

We finally present the APG algorithm for the two-system balanced approach (4.12) whose convergence can be proved in a manner similarly to Theorem 4.5. We denote 

$$
F _ {2} (\alpha^ {1}, \alpha^ {2}) := \frac {1}{2} \| A (\sum_ {i = 1} ^ {2} W _ {i} ^ {\top} \alpha^ {i}) - f \| _ {D} ^ {2} + \sum_ {i = 1} ^ {2} \frac {\kappa_ {i}}{2} \| (I - W _ {i} W _ {i} ^ {\top}) \alpha^ {i} \| _ {2} ^ {2}
$$

and denote its Lipschitz constant as L (see [168] for an estimate of L). We note that the two-system balanced approach generally works better than (4.8) when the given image has two diferent layers, e.g. cartoon and textures that can be sparsely approximated by two diferent tight frame systems. 

Algorithm 4.5. (APG for (4.12)) Let $i = 1 , 2$ . For given vectors $\lambda ^ { i } \in \mathbb { R } _ { + } ^ { m }$ , choose $\alpha _ { 0 } ^ { i } = \alpha _ { - 1 } ^ { i } \in \mathbb { R } ^ { m } , t _ { 0 } = 1$ , and $t _ { - 1 } = 0$ . For $k = 0 , 1 , 2 , . . . ,$ generate $\boldsymbol { \alpha } _ { k + 1 } ^ { i }$ from $\alpha _ { k } ^ { i }$ according to the following iteration: 

(i) Set 

$$
\beta_ {k} ^ {1} = \alpha_ {k} ^ {1} + \frac {t _ {k - 1} - 1}{t _ {k}} (\alpha_ {k} ^ {1} - \alpha_ {k - 1} ^ {1}) \quad a n d \quad \beta_ {k} ^ {2} = \alpha_ {k} ^ {2} + \frac {t _ {k - 1} - 1}{t _ {k}} (\alpha_ {k} ^ {2} - \alpha_ {k - 1} ^ {2}).
$$

(ii) Set 

$$
g _ {k} ^ {1} = \beta_ {k} ^ {1} - \nabla_ {\alpha^ {1}} F _ {2} (\beta_ {k} ^ {1}, \beta_ {k} ^ {2}) / L \quad a n d \quad g _ {k} ^ {2} = \beta_ {k} ^ {2} - \nabla_ {\alpha^ {2}} F _ {2} (\beta_ {k} ^ {1}, \beta_ {k} ^ {2}) / L.
$$

(iii) Set 

$$
\alpha_ {k + 1} ^ {1} = \mathcal {T} _ {\lambda^ {1} / L} (g _ {k} ^ {1}) a n d \alpha_ {k + 1} ^ {2} = \mathcal {T} _ {\lambda^ {2} / L} (g _ {k} ^ {2}).
$$

(iv) Compute $\begin{array} { r } { t _ { k + 1 } = \frac { 1 + \sqrt { 1 + 4 t _ { k } ^ { 2 } } } { 2 } } \end{array}$ 

## 2.4. Linearized Bregman Algorithm

Recently, the linearized Bregman algorithm has been applied to develop a fast algorithm for frame based image deblurring in [23], which converges to the minimizer of the following minimization problem: 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} \{\frac {\kappa}{2} \| \alpha \| _ {2} ^ {2} + \| \mathrm{diag} (\lambda) \alpha \| _ {1}: A W ^ {\top} \alpha = f \},\tag{4.43}
$$

when A is surjective. Furthermore, the optimal solution $u _ { \lambda } ^ { \star }$ converges to the minimizer of $\begin{array} { r } { \operatorname* { m i n } _ { \alpha \in \mathbb { R } ^ { m } } \{ \| \alpha \| _ { 1 } : A W ^ { \top } \alpha = f \} } \end{array}$ as $\lambda \to \infty$ , where, for simplicity, each entry of the vector λ is set to be the same (see [23]). Hence, the linearized Bregman algorithm is used to solve a variation of the synthesis based approach when λ is suficiently large. The linearized Bregman algorithm was first proposed to solve $\ell _ { 1 }$ -minimization problems in compressed sensing by [184] and was made eficient in [147]. The convergence analysis of the linearized Bregman algorithm was given in [21, 22]. Then, it was used in the nuclear norm minimization for matrix completion by [13], where the authors realized that the linearized Bregman can be reformulated as the Uzawa’s algorithm (see e.g. [82] for more details about the Uzawa algorithm). 

A simple computation of [23] shows that when A is invertible, (4.43) is equivalent to 

$$
\min _ {\alpha \in \mathbb {R} ^ {m}} \{\frac {\kappa}{2} \| (I - W W ^ {\top}) \alpha \| _ {2} ^ {2} + \| \mathrm{diag} (\lambda) \alpha \| _ {1}: A W ^ {\top} \alpha = f \}.
$$

This looks like a variation of the balanced approach. However, when the large parameter vector λ is chosen, which happens when one applies linearized Bregman, it is closer to a variation of the synthesis based approach. A detailed discussion of the case when A is not invertible is provided in [23]. 

The advantage of Bregman iterations (either linearized Bregman or split Bregman iterations) in frame based image restorations is that big coeficients come back at first after few iterations and stay. This, in particular, is important to image deblurring, since big wavelet frame coeficients contain information of edges and features of images. The main goal of deblurring is to restore blurred edges and features. 

Iterative algorithms involving Bregman distance were introduced to image and signal processing by many authors including [30, 31]. See [145] for an overview. In [145], a Bregman iteration was proposed for the nondiferentiable TV energy for image restoration. Then, in [184], it was shown to be remarkably successful for <sub>1</sub>-norm minimization problems in compressive sensing. To further improve the performance of the Bregman iteration, a linearized Bregman algorithm was invented in [59]; see also [184]. More details and an improvement called “kicking” of the linearized Bregman algorithm were described in [147], and a rigorous theory was given in [21, 22]. Wavelet-based denoising using the Bregman iteration was introduced in [182], and was further extended by using translation invariant wavelets in [129]. Here, we focus on the linearized Bregman algorithm for wavelet frame based image restorations of [23]. 

The linearized Bregman algorithm is given as follows. 

Algorithm 4.6. (Linearized Bregman) 

(i) Set initial guess $\beta _ { 0 } \in \mathbb { R } ^ { m }$ 

(ii) For $k = 0 , 1 , . . . ,$ perform the following two-line-iteration until convergence: 

$$
\begin{array}{l} \alpha_ {k + 1} = \frac {1}{\kappa} \mathcal {T} _ {\lambda} (\beta_ {k}) \\ \beta_ {k + 1} = \beta_ {k} + W A ^ {\top} (f - A W ^ {\top} \alpha_ {k + 1}). \end{array}\tag{4.44}
$$

The linearized Bregman algorithm looks similar to proximal forward-backward splitting algorithm. For simplicity, we suppose $\kappa = 1$ . If we let $F _ { 1 } ( \alpha ) = \| \mathrm { d i a g } ( \lambda ) \alpha \| _ { 1 }$ 1 and $\begin{array} { r } { F _ { 2 } ( \alpha ) = \frac { 1 } { 2 } \| A W ^ { \top } \alpha - f \| _ { 2 } ^ { 2 } } \end{array}$ , then from (4.44) we have 

$$
\begin{array}{c} \alpha_ {k + 1} = \mathcal {T} _ {\lambda} (\beta_ {k}) = \text {proxy} _ {F _ {1}} (\beta_ {k - 1} - \nabla F _ {2} (\alpha_ {k})) \\ = \text {proxy} _ {F _ {1}} (\beta_ {0} - \sum_ {j = 1} ^ {k} \nabla F _ {2} (\alpha_ {j})). \end{array}
$$

Therefore, one essential diference between the linearized Bregman algorithm (4.44) and the proximal forward-backward splitting algorithm is that the linearized Bregman uses all $\{ \alpha _ { j } : j = 1 , 2 , \ldots , k \}$ to update $\alpha _ { k + 1 }$ , while the proximal forwardbackward splitting algorithm only uses the approximation of the previous iteration $\alpha _ { k }$ . On the other hand, the linearized Bregman algorithm is in fact a primal-dual algorithm, where the variable $\beta _ { k }$ links to the dual variable of $\alpha _ { k }$ . We further explain this in the following discussions. 

It was proved in [22] that if the sequence $\{ \alpha _ { k } \} _ { k \in \mathbb { N } }$ from (4.44) converges, its limit is the unique solution of the following optimization problem 

$$
\min _ {u \in \mathbb {R} ^ {n}} \left\{\| \mathrm{diag} (\lambda) \alpha \| _ {1} + \frac {\kappa}{2} \| \alpha \| _ {2} ^ {2}: A W ^ {\top} \alpha = f \right\},\tag{4.45}
$$

where $0 < \kappa < \infty$ . Later, in [21], it was proved that the sequence $\{ u _ { k } \} _ { k \in \mathbb { N } }$ converges. A rather crucial discovery that makes it possible to link the linearized Bregman algorithm to the Uzawa’s algorithm is the discovery of the optimization problem (4.45) corresponding to the linearized Bregman algorithm [22]. 

The linearized Bregman algorithm coincides with the Uzawa’s algorithm (see e.g. [13, 82, 151] for details on Uzawa’s algorithm) applied to the problem (4.45). In this section, we first show the equivalence of the linearized Bregman algorithm with Uzawa’s algorithm when applied to (4.45). Then we prove convergence of Uzawa’s method in a more general setting, which in turn gives a convergence proof of linearized Bregman algorithm. 

For simplicity, we denote $B = A W ^ { \top }$ and denote the objective function in (4.45) as $F _ { \lambda } ( \alpha )$ , i.e. 

$$
F _ {\lambda} (\alpha) := \| \operatorname{diag} (\lambda) \alpha \| _ {1} + \frac {\kappa}{2} \| \alpha \| _ {2} ^ {2}.
$$

The Lagrangian for the problem (4.45) is given by 

$$
\mathcal {L} (\alpha , p) = F _ {\lambda} (\alpha) + \langle p, f - B \alpha \rangle .
$$

If strong duality holds (which is indeed the case for (4.45)), then $\alpha ^ { \star }$ and $p ^ { \star }$ are called primal-dual optimal if the pair $( \alpha ^ { \star } , p ^ { \star } )$ is a saddle point of the Lagrangian $\mathcal { L } ( \alpha , p )$ , i.e. the pair satisfies 

$$
\sup _ {p} \inf _ {\alpha} \mathcal {L} (\alpha , p) = \mathcal {L} (\alpha^ {\star}, p ^ {\star}) = \inf _ {\alpha} \sup _ {p} \mathcal {L} (\alpha , p).\tag{4.46}
$$

The Uzawa’s algorithm is an iterative procedure that solves the above saddle point problem as follows 

$$
\begin{array}{l} \alpha_ {k + 1} = \arg \min _ {\alpha} \mathcal {L} (\alpha , p _ {k}) \\ p _ {k + 1} = p _ {k} + \delta_ {k} (f - B \alpha_ {k + 1}), \end{array}\tag{4.47}
$$

where $\{ \delta _ { k } \} _ { k \in \mathbb { N } }$ are positive step sizes. Note that the second step in (4.47) is one step of gradient ascend solving the maximization problem $\begin{array} { r } { \operatorname* { s u p } _ { p } \mathcal { L } ( \alpha _ { k + 1 } , p ) } \end{array}$ , because $\nabla \mathcal { L } ( \alpha _ { k + 1 } , p ) = f - B u _ { k + 1 }$ . Therefore, Uzawa’s algorithm is an alternative minimization and maximization method solving the saddle point problem (4.46). 

By adding some terms independent of variable α, we have 

$$
\begin{array}{l} \arg \min _ {\alpha} \mathcal {L} (\alpha , p _ {k}) = \arg \min _ {\alpha} F _ {\lambda} (\alpha) + \langle p _ {k}, f - B \alpha \rangle \\ \qquad = \arg \min _ {\alpha} \| \mathrm{diag} (\lambda) \alpha \| _ {1} + \frac {\kappa}{2} \| \alpha - \frac {1}{\kappa} B ^ {\top} p _ {k} \| _ {2} ^ {2} \\ \qquad = \frac {1}{\kappa} \mathcal {T} _ {\lambda} (B ^ {\top} p _ {k}). \end{array}
$$

Applying $B ^ { \top }$ on both sides of the second equation in (4.47), letting $\beta _ { k } = B ^ { \top } p _ { k }$ and $\delta _ { k } = 1$ , we obtain the linearized Bregman algorithm (4.44). In fact, the sequence $\alpha _ { k }$ for the linearized Bregman algorithm is exactly the same as Uzawa’s method. Therefore, we focus on analyzing the convergence of Uzawa’s algorithm (4.47). 

First, we establish the strong convexity of $F _ { \lambda } ( \alpha )$ in the following lemma. 

Lemma 4.3. Let $v _ { 1 } \in \partial F _ { \lambda } ( \alpha _ { 1 } )$ and $v _ { 2 } \in \partial F _ { \lambda } ( \alpha _ { 2 } )$ . Then 

$$
\left<   v _ {1} - v _ {2}, \alpha_ {1} - \alpha_ {2} \right> \geq \kappa \| \alpha_ {1} - \alpha_ {2} \| _ {2} ^ {2}.\tag{4.48}
$$

Proof. An element in $v _ { i } \in \partial F _ { \lambda } ( \alpha _ { i } ) , i = 1 , 2$ , takes the form $v _ { i } = w _ { i } + \kappa \alpha _ { i }$ with $w _ { i } \in \partial \| \mathrm { d i a g } ( \lambda ) \alpha _ { i } \| _ { 1 }$ . Therefore, we have 

$$
\left\langle v _ {1} - v _ {2}, \alpha_ {1} - \alpha_ {2} \right\rangle = \left\langle w _ {1} - w _ {2}, \alpha_ {1} - \alpha_ {2} \right\rangle + \kappa \| \alpha_ {1} - \alpha_ {2} \| _ {2} ^ {2}.
$$

Thus we only need to show that the first term of the right-hand side is nonnegative. By the definition of subgradient, it is easy to see that $\langle w _ { i } , \alpha _ { i } \rangle = \| \mathrm { d i a g } ( \lambda ) \alpha _ { i } \| _ { 1 }$ <sub>1</sub>. Furthermore, we have 

$$
\begin{array}{l} \langle w _ {1}, \alpha_ {2} \rangle = \langle \mathrm{diag} (\lambda) ^ {- 1} w _ {1}, \mathrm{diag} (\lambda) \alpha_ {2} \rangle \\ \qquad \leq \| \mathrm{diag} (\lambda) ^ {- 1} w _ {1} \| _ {\infty} \| \mathrm{diag} (\lambda) \alpha_ {2} \| _ {1} \leq \| \mathrm{diag} (\lambda) \alpha_ {2} \| _ {1}. \end{array}
$$

Similarly we have $\langle w _ { 2 } , \alpha _ { 1 } \rangle \leq \| \mathrm { d i a g } ( \lambda ) \alpha _ { 1 } \| _ { 1 }$ . Therefore, we have 

$$
\begin{array}{l} \langle w _ {1} - w _ {2}, \alpha_ {1} - \alpha_ {2} \rangle = \langle w _ {1}, \alpha_ {1} \rangle + \langle w _ {2}, \alpha_ {2} \rangle - \langle w _ {1}, \alpha_ {2} \rangle - \langle w _ {2}, \alpha_ {1} \rangle \\ = \| \mathrm{diag} (\lambda) \alpha_ {1} \| _ {1} + \| \mathrm{diag} (\lambda) \alpha_ {2} \| _ {1} - \langle w _ {1}, \alpha_ {2} \rangle - \langle w _ {2}, \alpha_ {1} \rangle \\ \geq 0 \end{array}
$$

This concludes the proof of the lemma. ■ 

Theorem 4.6. Suppose the step sizes obey $\begin{array} { r } { 0 < \operatorname* { i n f } _ { k } \delta _ { k } \le \operatorname* { s u p } _ { k } \delta _ { k } < 2 \kappa / \| B \| _ { 2 } ^ { 2 } } \end{array}$ Then the sequence $\alpha _ { k }$ obtained from Uzawa’s algorithm (4.47) converges to the unique solution of (4.45). 

Proof. Let $( \alpha ^ { \star } , p ^ { \star } )$ be the optimal primal-dual pair for the problem (4.45). Then the optimality conditions in (4.46) and (4.47) give 

$$
v _ {k + 1} - B ^ {\top} p _ {k} = 0,
$$

$$
v ^ {\star} - B ^ {\top} p ^ {\star} = 0,
$$

where $v _ { k + 1 } \in \partial F _ { \lambda } ( \alpha _ { k + 1 } )$ , and $v ^ { \star } \in \partial F _ { \lambda } ( \alpha ^ { \star } )$ . Then we have, 

$$
(v _ {k + 1} - v ^ {\star}) - B ^ {\top} (p _ {k} - p ^ {\star}) = 0,
$$

and it follows from Lemma 4.3 that 

$$
\langle \alpha_ {k + 1} - \alpha^ {\star}, B ^ {\top} (p _ {k} - p ^ {\star}) \rangle = \langle \alpha_ {k + 1} - \alpha^ {\star}, v _ {k + 1} - v ^ {\star} \rangle \geq \kappa \| \alpha_ {k + 1} - \alpha^ {\star} \| _ {2} ^ {2}.
$$

Thus, 

$$
\langle B (\alpha_ {k + 1} - \alpha^ {\star}), p _ {k} - p ^ {\star} \rangle \geq \kappa \| \alpha_ {k + 1} - \alpha^ {\star} \| _ {2} ^ {2}.
$$

Noting that $B \alpha ^ { \star } = f$ and using the second equation in (4.47), we have 

$$
\begin{array}{r l} & {\| p _ {k + 1} - p ^ {\star} \| _ {2} ^ {2} = \| p _ {k} - p ^ {\star} + \delta_ {k} (f - B \alpha_ {k + 1}) \| _ {2} ^ {2}} \\ & {\qquad = \| p _ {k} - p ^ {\star} + \delta_ {k} B (\alpha^ {\star} - \alpha_ {k + 1}) \| _ {2} ^ {2}} \\ & {\qquad = \| p _ {k} - p ^ {\star} - \delta_ {k} B (\alpha_ {k + 1} - \alpha^ {\star}) \| _ {2} ^ {2}.} \end{array}
$$

If we let $r _ { k } : = \| p _ { k } - p ^ { \star } \| _ { 2 }$ , we then have 

$$
\begin{array}{r l} & r _ {k + 1} ^ {2} = r _ {k} ^ {2} - 2 \delta_ {k} \langle p _ {k} - p ^ {\star}, B (\alpha_ {k + 1} - \alpha^ {\star}) \rangle + \delta_ {k} ^ {2} \| B (\alpha_ {k + 1} - \alpha^ {\star}) \| _ {2} ^ {2} \\ & \quad \leq r _ {k} ^ {2} - 2 \kappa \delta_ {k} \| \alpha_ {k + 1} - \alpha^ {\star} \| _ {2} ^ {2} + \delta_ {k} ^ {2} \| B \| _ {2} ^ {2} \| \alpha_ {k + 1} - \alpha^ {\star} \| _ {2} ^ {2}. \end{array}
$$

From the assumptions of $\delta _ { k }$ , we have $2 \kappa \delta _ { k } - \delta _ { k } ^ { 2 } \| B \| _ { 2 } ^ { 2 } \geq C .$ , for some $C > 0$ . Therefore, 

$$
r _ {k + 1} ^ {2} \leq r _ {k} ^ {2} - C \| \alpha_ {k + 1} - \alpha^ {\star} \| _ {2} ^ {2}.
$$

The above inequality shows that $r _ { k }$ is a monotonically decreasing sequence and thus converges. Applying limits to both sides of the above inequality gives lim $\mathbf { \boldsymbol { \mathrm { 1 } } } _ { k \to \infty } \parallel \boldsymbol { \alpha } _ { k + 1 } -$ $\alpha ^ { \star } \| _ { 2 } = 0$ and this concludes the proof of the theorem. ■ 

Now, we have the following convergence theorem for the linearized Bregman algorithm (4.44), which is a direct consequence of Theorem 4.6. 

Theorem 4.7. The sequence $\alpha _ { k }$ obtained from Algorithm $\it 4 . 6$ converges to the unique solution of (4.45), provided that $\kappa > \| B \| _ { 2 } ^ { 2 } / 2$ 

Proof. Convergence follows from Theorem 4.6, and the uniqueness of the solution of (4.45) follows from the fact that 

$$
\| \mathrm{diag} (\lambda) \alpha \| _ {1} + \frac {\kappa}{2} \| \alpha \| _ {2} ^ {2}
$$

is strictly convex for any $\kappa > 0$ 

Finally, we note that in order to speed-up Algorithm 4.6, i.e. to reduce the total number of iterations required for a given stopping criterion, a preconditioned version of Algorithm 4.6 was proposed in [23]. The idea is that instead of considering equation $A W ^ { \top } \alpha = f$ in (4.45), we consider the equivalent equation 

$$
D ^ {\frac {1}{2}} A W ^ {\top} \alpha = D ^ {\frac {1}{2}} f,
$$

where D is a symmetric positive definite matrix that approximates the pseudoinverse of A. Then by replacing A with $D ^ { \frac { 1 } { 2 } } A$ and $f$ with $D ^ { \frac { 1 } { 2 } } f$ in Algorithm 4.6, one obtains the preconditioned linearized Bregman algorithm. Here, we use the same notation D as in (4.8) for example, because they serve the same purpose. Therefore, just as in (4.8), we choose $D = ( A A ^ { \top } + \theta I ) ^ { - 1 }$ 

## 2.5. Role of the redundancy

Tight frames are diferent from orthonormal systems because tight frames are redundant. What does the redundancy bring us here? We start with a philosophical point about the algorithm and then give some quantitative analysis on the error reduction with each iteration. 

Assume that some blocks of pixels are missing in a given image and we want to solve the inpainting problem in the wavelet frame domain as mentioned before. Since the framelets used are compactly supported, the coeficients of those framelets whose supports fall in the missing blocks are missing and the coeficients of those framelets whose supports overlap with the missing blocks are inaccurate. The main step of Algorithm 4.1 perturbs the frame coeficients $W u _ { n }$ via thresholding so that information contained in the available coeficients will permeate into the missing frame coeficients. Here, the redundancy is very important, since the available coeficients and its associated atoms in the system contain information of the missing coeficients and missing atoms only if the system is redundant, as the atoms in an orthonormal basis are orthogonal to each other and do not contain information of other atoms in $L _ { \mathrm { { 2 } } } \mathrm { { - s e n s e } }$ 

While applying the thresholding operator on the frame coeficients is a very important step in Algorithm 4.1, to remove noise, perturb the coeficients and sharpen the edges, it also introduces new errors and artifacts. We use image inpainting as an example to show how the numerical errors and artifacts introduced by thresholding can be reduced by the redundancy of the system $W$ . We take the computed solution $u ^ { \star }$ for the case $\eta = 0$ as an example. Similar analysis holds for the computation of each iteration. Our computed solution $u ^ { \star }$ that interpolates the given data satisfies $\alpha ^ { \star } = \mathcal { T } _ { \lambda } ( W u ^ { \star } )$ and 

$$
u ^ {\star} = \mathcal {P} _ {\Lambda} f + (I - \mathcal {P} _ {\Lambda}) W ^ {\top} \mathcal {T} _ {\lambda} W u ^ {\star}.
$$

That is, on Λ, $W ^ { \top } \mathcal { T } _ { \lambda } W u ^ { \star }$ is replaced by $f .$ . But since $\mathcal { P } _ { \Lambda } f = \mathcal { P } _ { \Lambda } u ^ { \star } = \mathcal { P } _ { \Lambda } W ^ { \top } W u ^ { \star }$ we are actually replacing $\mathcal { P } _ { \Lambda } W ^ { \top } \mathcal { T } _ { \lambda } W u ^ { \star }$ by $\mathcal { P } _ { \Lambda } W ^ { \top } W u ^ { \star }$ , which generates artifacts. Hence to reduce the artifacts, we require that the norm of 

$$
\mathcal {P} _ {\Lambda} W ^ {\top} W u ^ {\star} - \mathcal {P} _ {\Lambda} W \mathcal {T} _ {\lambda} W u ^ {\star} = \mathcal {P} _ {\Lambda} W ^ {\top} (W u ^ {\star} - \mathcal {T} _ {\lambda} W u ^ {\star})
$$

is small. 

Clearly, the smaller the norm of $W ^ { \top } \mathbf { e } : = W ^ { \top } ( W u ^ { \star } - \mathcal { T } _ { \lambda } W u ^ { \star } )$ is, the smaller the artifact is. Note that the reconstruction operator $W ^ { \top }$ can eliminate the error components sitting in the kernel of $W ^ { \top }$ . In fact, since $W ^ { \top }$ projects all sequences down to the orthogonal complement of the kernel of $W ^ { \top }$ , which is the range of $W$ the component of e in the kernel of $W ^ { \top }$ does not contribute. The redundant system reduces the errors as long as the component of e in the kernel of $W ^ { \top }$ is not zero. Therefore, in general, the larger the kernel of $W ^ { \top }$ is, i.e. the more redundant the frame system is, the greater the error reduction. To increase the redundancy, we use quasi-afine tight frame system (which is also called an undecimated tight frame system since no downsampling is required during decompositions). In contrast, if W is an orthonormal system (not redundant at all), then the kernel of $W ^ { \top }$ is just {0} and we have $\| W ^ { \top } \mathbf e \| = \| \mathbf e \|$ . The point here is that redundancy reduces the norm of $( \alpha ^ { \star } - W f )$ . 

## 2.6. Some Simulations

First, we provide a comparison of computation eficiency between the PFBS and the APG algorithm under the scenario of image inpainting. Qualities of inpainting and deblurring using both single- and two-system balanced approach (4.8) and (4.12) are presented as well. In particular, we present results using the synthesis based approach (i.e. (4.8) and (4.12) with $\kappa = 0 )$ Finally, we present deblurring results using the linearized Bregman algorithm given by Algorithm 4.6 with preconditioning. 

For the balanced approach (4.8), we take W corresponding to the piecewise linear B-spline quasi-afine tight frame system. For the two-system balanced approach (4.12), we take $W _ { 1 }$ the same as W for (4.8), while $W _ { 2 }$ is generated by a local discrete cosine transform. 

Throughout this section, we adopt the following stopping criterion for Algorithm 4.4 (we use a similar stopping criterion for Algorithm 4.5): 

$$
\min \left\{\frac {\| \alpha_ {k} - \alpha_ {k - 1} \| _ {2}}{\max \{1 , \| \alpha_ {k} \| _ {2} \}}, \gamma \frac {\left| \| A W ^ {\top} \alpha_ {k} - f \| _ {D} - \| A W ^ {\top} \alpha_ {k - 1} - f \| _ {D} \right|}{\| A W ^ {\top} \alpha_ {k} - f \| _ {D}} \right\} <   5 \times 1 0 ^ {- 4},
$$

where $\gamma = 1$ for image inpainting and $\gamma = 4$ for deblurring (in order to prevent the algorithm from stopping too early since for deblurring the residual $\| A W ^ { \top } \alpha _ { k } - f \| _ { D }$ usually changes slowly with $k )$ . To measure the quality of the restored image, we use the PSNR value defined by 

$$
\mathrm{PSNR} := - 2 0 \log_ {1 0} \frac {\| u - \tilde {u} \|}{2 5 5 n},
$$

where u and ˜u are the original and restored images respectively, and n is total number of pixels in u. Finally, we note that all algorithms are programmed in MATLAB and run on a 64-bits Windows laptop with a Quad Core 1.73GHz CPU and 8.0G RAM. 

2.6.1. Balanced Approach for Image Inpainting. In Table 1, we compare the eficiency of the $\mathrm { A P G }$ and the PFBS algorithms for image inpainting without noise, i.e. $A = \mathcal { P } _ { \Lambda }$ , D = I and $\eta = 0$ . Level of framelet decomposition is chosen to be 1 for optimal quality of restored images. One can see that the APG algorithm is more eficient than the PFBS algorithm while the quality of restored images is comparable. Some image results are shown in Figure 1. 

Inpainting results using the two-system balanced approach (4.12) are also presented in Table 1. It is worth noticing that for images containing both cartoons and textures, e.g. “barbara512”, the two-system balanced approach (4.12) works better than the single-system balanced approach (4.8). Such improvement is shown in Figure 2, where one can see that textures are better restored using the two-system balanced approach (4.12), because in general, textures can be sparsely approximated by local cosine transforms. 

Results of the synthesis based approach, i.e. (4.8) and (4.12) with $\kappa = 0$ , are presented in Table 2. The level of framelet decomposition is chosen to be 2 for optimal quality of restored images. When comparing Table 2 with Table 1 one can see that the balanced approach usually produces better results than the synthesis based approach. This is due to the lack of smoothness for the synthesis based approach $( \kappa = 0 )$ 


Table 1: Comparisons of PFBS and APG algorithms: image inpainting without noise $( \mathrm { i . e . , } \eta = 0$ in (4.1)). Level of framelet decomposition is taken to be 1.


<table><tr><td>Inpainting</td><td colspan="3">APG for (4.8)</td><td colspan="3">PFBS for (4.8)</td><td colspan="3">APG for (4.12)</td></tr><tr><td><eq>\sigma = 0</eq></td><td colspan="3"><eq>\kappa = 1, \lambda = 0.03</eq></td><td colspan="3"><eq>\kappa = 1, \lambda = 0.03</eq></td><td colspan="3"><eq>\kappa^i = 1, \lambda^i = 0.01</eq></td></tr><tr><td></td><td>iter</td><td>psnr</td><td>time (s)</td><td>iter</td><td>psnr</td><td>time (s)</td><td>iter</td><td>psnr</td><td>time (s)</td></tr><tr><td>peppers256</td><td>19</td><td>39.38</td><td>3.07</td><td>59</td><td>38.09</td><td>9.17</td><td>29</td><td>39.09</td><td>6.11</td></tr><tr><td>goldhill256</td><td>21</td><td>35.17</td><td>3.34</td><td>60</td><td>34.79</td><td>10.51</td><td>30</td><td>35.34</td><td>6.47</td></tr><tr><td>boat256</td><td>22</td><td>33.79</td><td>3.42</td><td>64</td><td>33.64</td><td>11.30</td><td>29</td><td>33.78</td><td>6.34</td></tr><tr><td>camera256</td><td>20</td><td>32.95</td><td>3.23</td><td>62</td><td>32.62</td><td>9.67</td><td>29</td><td>33.23</td><td>7.04</td></tr><tr><td>bridge256</td><td>24</td><td>34.85</td><td>3.80</td><td>74</td><td>33.93</td><td>11.84</td><td>33</td><td>34.39</td><td>7.64</td></tr><tr><td>bowl256</td><td>19</td><td>36.93</td><td>2.97</td><td>59</td><td>36.45</td><td>9.11</td><td>35</td><td>38.54</td><td>7.90</td></tr><tr><td>barbara512</td><td>23</td><td>34.48</td><td>24.44</td><td>88</td><td>33.49</td><td>91.27</td><td>30</td><td>39.08</td><td>39.66</td></tr></table>


Table 1: Comparisons of PFBS and APG algorithms: image inpainting without noise (i.e., η = 0 in (4.1)). Level of framelet decomposition is taken to be 1.


<table><tr><td>Inpainting</td><td colspan="3">APG for (4.8)</td><td colspan="3">PFBS for (4.8)</td><td colspan="3">APG for (4.12)</td></tr><tr><td><eq>\sigma = 0</eq></td><td colspan="3"><eq>\kappa = 1, \lambda = 0.03</eq></td><td colspan="3"><eq>\kappa = 1, \lambda = 0.03</eq></td><td colspan="3"><eq>\kappa^i = 1, \lambda^i = 0.01</eq></td></tr><tr><td></td><td>iter</td><td>psnr</td><td>time (s)</td><td>iter</td><td>psnr</td><td>time (s)</td><td>iter</td><td>psnr</td><td>time (s)</td></tr><tr><td>baboon512</td><td>24</td><td>31.68</td><td>25.28</td><td>73</td><td>30.98</td><td>76.28</td><td>32</td><td>31.65</td><td>41.61</td></tr><tr><td>fingerprint512</td><td>23</td><td>32.89</td><td>24.25</td><td>73</td><td>30.41</td><td>77.25</td><td>34</td><td>33.46</td><td>44.79</td></tr><tr><td>zebra512</td><td>23</td><td>34.38</td><td>24.42</td><td>67</td><td>33.42</td><td>69.18</td><td>33</td><td>34.91</td><td>42.44</td></tr></table>

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/45333de2badac9e547f4388cf8e7f319eb08788b234fe705a4ffdf8ecd41af2d.jpg)



Figure 1. Inpainting results for “goldhill256” (first row), “barbara512” (second row) and “baboon512” (third row) using the single-system balanced approach (4.8) solved by APG algorithm (images taken from Table 1). Column 1-3 are the original image, observed image and restored image.


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/f1d1103d8105d72f24ff9b60c19bccc7c7b5c74faefd8fbedbc46797b2137482.jpg)



Figure 2. Comparison of image inpainting using the singlesystem balanced approach (4.8) and the two-system balanced approach (4.12). Images from left to right are: original image, observed image, and restored image using single- and two-system. The image presented is a zoom-in view of “barbara512” (taken from Table 1).



Table 2: Numerical results of APG algorithm in solving synthesis based method, i.e. (4.8) with $\kappa = 0 ,$ for image inpainting without noise. Level of framelet decomposition is taken to be 2.


<table><tr><td>Inpainting</td><td colspan="3">Single-System</td><td colspan="3">Two-Systems</td></tr><tr><td><eq>\sigma = 0</eq></td><td colspan="3"><eq>\lambda = 0.03</eq></td><td colspan="3"><eq>\lambda_1 = \lambda_2 = 0.01</eq></td></tr><tr><td></td><td>iter</td><td>psnr</td><td>time</td><td>iter</td><td>psnr</td><td>time</td></tr><tr><td>peppers256</td><td>51</td><td>39.00</td><td>13.51</td><td>83</td><td>39.36</td><td>26.02</td></tr><tr><td>goldhill256</td><td>62</td><td>33.45</td><td>16.71</td><td>78</td><td>34.40</td><td>24.42</td></tr><tr><td>boat256</td><td>61</td><td>32.93</td><td>16.65</td><td>29</td><td>33.52</td><td>9.22</td></tr><tr><td>camera256</td><td>67</td><td>31.27</td><td>17.82</td><td>29</td><td>32.53</td><td>9.39</td></tr><tr><td>bridge256</td><td>79</td><td>33.41</td><td>21.15</td><td>81</td><td>33.99</td><td>25.80</td></tr><tr><td>bowl256</td><td>59</td><td>35.78</td><td>15.98</td><td>29</td><td>37.35</td><td>9.22</td></tr><tr><td>barbara512</td><td>59</td><td>32.48</td><td>102.97</td><td>186</td><td>36.39</td><td>367.66</td></tr><tr><td>baboon512</td><td>81</td><td>29.86</td><td>143.44</td><td>29</td><td>30.36</td><td>57.35</td></tr><tr><td>fingerprint512</td><td>75</td><td>34.66</td><td>132.93</td><td>188</td><td>34.93</td><td>367.11</td></tr><tr><td>zebra512</td><td>80</td><td>33.90</td><td>141.98</td><td>84</td><td>34.95</td><td>165.97</td></tr></table>

2.6.2. Image Deblurring. Here, we present numerical results using the single- and two-system balanced approach (4.8) and (4.12) solved by the APG algorithm for image deblurring with noise. The matrix A in (4.1) is taken to be a convolution matrix with the corresponding kernel being a Gaussian function (generated in MATLAB by “fspecial(’gaussian’,15,1.5);” to be precise) and η is generated from a zero mean Gaussian distribution with variance σ = 3. Also, numerical results of image deblurring using the (preconditioned) linearized Bregman algorithm are presented. 

For all the methods we used (i.e. the APG algorithm for the single- and twosystem balanced approach, and the linearized Bregman algorithm), we choose θ = 0.01 for the matrix $\overset { \vartriangle } { \boldsymbol { D } } = ( A A ^ { \top } + \theta \boldsymbol { I } ) ^ { - 1 }$ which can be computed eficiently via fast Fourier transform (FFT). We choose the level of framelet decomposition to be 1 for the AGP algorithms and 4 for linearized Bregman algorithm for optimal quality of the restored images. Finally, we note that for the linearized Bregman algorithm, we use the following stopping criterion: 

$$
\mathrm{std} (A W ^ {\top} \alpha_ {k} - f) <   \sigma .
$$

In Table 3, we summarize the deblurring results for all of three algorithms, and the corresponding images are presented in Figure 3. Note that all three models produce comparable results in terms of PSNR values. However, the APG algorithm for both the single- and two-system balanced approaches are faster than the linearized Bregman algorithm. Also, we show a zoom-in view for “barbara” in Figure 4 where we can see that texture components of the image are best recovered by using the two-system balanced approach (4.12). 


Table 3: Comparisons of APG algorithm for both single-system balanced approach (4.8) and two-system balanced approach (4.12), and linearized Bregman algorithm for (4.45).


<table><tr><td>deblurring</td><td colspan="2">Single-System</td><td colspan="2">Two-Systems</td><td colspan="2">Linearized Bregman</td></tr><tr><td><eq>\sigma = 3</eq></td><td colspan="2"><eq>\kappa = 1, \lambda = 0.005</eq></td><td colspan="2"><eq>\kappa^i = 1, \lambda^i = 0.005</eq></td><td colspan="2"><eq>\kappa = 1, \lambda = 0.01</eq></td></tr><tr><td></td><td>psnr</td><td>time (s)</td><td>psnr</td><td>time (s)</td><td>psnr</td><td>time (s)</td></tr><tr><td>barbara</td><td>24.64</td><td>20.7</td><td>24.75</td><td>63.2</td><td>24.67</td><td>126.2</td></tr><tr><td>duck</td><td>31.15</td><td>17.5</td><td>31.04</td><td>41.8</td><td>30.87</td><td>100.1</td></tr><tr><td>wolf</td><td>30.83</td><td>25.9</td><td>30.6</td><td>72.6</td><td>30.66</td><td>186.5</td></tr></table>

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/3737221d045b6174fd4872216945f2d6dac4eec648650410d8583bd032a2b2c9.jpg)



Figure 3. Deblurring results for “barbara”, “duck” and “wolf”. Column 1-5 are: the original image, observed image, results of single-system, results of two-system and results of the linearized Bregman algorithm.


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/5e32848d2f83c4c03dce074f0b254bad688c9533b7f9306b4045401f2fc43d0c.jpg)



Figure 4. Zoom-in to the texture part of “barbara”. Images from left to right are: original image, observed image, results of singlesystem, results of two-system and results of linearized Bregman algorithm.


## 3. Analysis Based Approach

In this section, we present the split Bregman algorithm [96] for a more general analysis based approach: 

$$
\min _ {u \in \mathbb {R} ^ {n}} H (u) + \| \mathrm{diag} (\lambda) W u \| _ {1},\tag{4.49}
$$

where $H ( \cdot )$ is some smooth convex function. In particular, when 

$$
H (u) = \frac {1}{2} \| A u - f \| _ {D} ^ {2},
$$

(4.49) coincides with (4.11) given in the introduction. The optimization problem (4.49) can be solved by the split Bregman algorithm which was proposed by [96]. We provide a convergence analysis of the split Bregman algorithm following the proof given by [24]. 

## 3.1. Split Bregman Algorithm

The $\ell _ { 1 }$ term involved in (4.49) is nonsmooth and nonseparable. This prevents us from using optimization methods for smooth functions. A natural idea to solve (4.49) is to use a smoothed $\ell _ { 1 }$ norm to approximate the actual $\ell _ { 1 }$ norm and then apply optimization methods for smooth functions. This approach is commonly used in some early algorithms for PDE based, particularly for total variation (TV) based, variational models for image processing 

$$
\min _ {u \in \mathbb {R} ^ {n}} H (u) + \lambda | \nabla u |,
$$

(see e.g., [180, 40]). However, in these smoothing methods, the better the approximations (to the $\ell _ { 1 }$ norm) are, the slower the algorithms converge. Therefore, in order to make these algorithms converge faster, the smooth approximation to the $\ell _ { 1 }$ norm cannot be too accurate. Consequently, one cannot obtain a sparse solution by solving the minimization problem with a smoothed norm. However, sparsity is important in many cases of $\ell _ { 1 }$ regularization problems. 

Another dificulty for the analysis based approach of (4.49) is that the term $\| \mathrm { d i a g } ( \lambda ) W u \| _ { 1 }$ is not separable. Therefore, one cannot simply use soft thresholding as one normally does in the synthesis based approach, since it is impossible to keep any sequence in the range of W after applying a thresholding operator. An iterative method to find a solution in the range of W for a special case of (4.49), where $\begin{array} { r } { H ( u ) = \frac { 1 } { 2 } \lVert u - f \rVert ^ { 2 } } \end{array}$ , was proposed by [33] by exploring duality. 

As mentioned above, compared with the synthesis based approach, the $\ell _ { 1 }$ norm of $| W u |$ involved in (4.49) is neither smooth nor separable. To overcome this, one transfers (4.49) to a problem involving only separable nonsmooth terms. This is the main idea of split Bregman. In particular, one replaces the term Wu in (4.49) by a new variable d first and then adds a new constraint $d = W u$ into (4.49). Hence, (4.49) becomes 

$$
\min _ {u, d} H (u) + \| \operatorname{diag} (\lambda) d \| _ {1} \quad \text { subject   to } \quad d = W u,\tag{4.50}
$$

In order to solve (4.50), an iterative algorithm based on the Bregman distance with an inexact solver was proposed in [96]. This leads to the alternating split Bregman algorithm for (4.50). The split Bregman algorithm for (4.50) was first demonstrated in [96] to be an eficient tool for solving problems arising from TV norm minimization problems of PDE based models for image restoration, such as denoising. 

The derivation of the split Bregman algorithm in [96, 24] is based on Bregman distance. The split Bregman method can also be understood as the augmented Lagrangian method (see e.g. [94]) applying to (4.50) (see $\mathrm { e . g . } [ \mathbf { 8 5 } , \mathbf { 1 7 1 } ] )$ . Here, we use the augmented Lagrangian method to derive the split Bregman algorithm, since this connects to the Uzawa’s algorithm as we discussed for the linearized Bregman algorithm. Note that (4.50) is equivalent to the following optimization problem 

$$
\min _ {u, d} H (u) + \| \mathrm{diag} (\lambda) d \| _ {1} + \frac {\mu}{2} \| W u - d \| _ {2} ^ {2} \quad \text { subject   to } \quad d = W u.\tag{4.51}
$$

The Lagrangian for problem (4.51), which is called the augmented Lagrangian, is given as 

$$
\mathcal {L} _ {\mu} (u, d, p) := H (u) + \| \mathrm{diag} (\lambda) d \| _ {1} + \langle p, d - W u \rangle + \frac {\mu}{2} \| W u - d \| _ {2} ^ {2}.
$$

The saddle points of $\mathcal { L } _ { \boldsymbol { \mu } } ( u , d , p )$ can be obtained by the following iterative procedure 

$$
\left\{ \begin{array}{l} (u _ {k + 1}, d _ {k + 1}) = \arg \min _ {u, d} H (u) + \| \mathrm{diag} (\lambda) d \| _ {1} + \langle p _ {k}, d - W u \rangle + \frac {\mu}{2} \| W u - d \| _ {2} ^ {2}, \\ p _ {k + 1} = p _ {k} + \delta \mu (d _ {k + 1} - W u _ {k + 1}), \end{array} \right.
$$

which consists of one step of joint optimization of variables $( u , d )$ followed by one step of gradient ascend of variable p. Now, letting $b _ { k } = - p _ { k } / \mu$ , we have 

$$
\left\{ \begin{array}{l} (u _ {k + 1}, d _ {k + 1}) = \arg \min _ {u, d} H (u) + \| \mathrm{diag} (\lambda) d \| _ {1} + \mu \langle b _ {k}, W u - d \rangle + \frac {\mu}{2} \| W u - d \| _ {2} ^ {2}, \\ b _ {k + 1} = b _ {k} + \delta (W u _ {k + 1} - d _ {k + 1}), \end{array} \right.
$$

which is equivalent to 

$$
\left\{ \begin{array}{l} (u _ {k + 1}, d _ {k + 1}) = \arg \min _ {u, d} H (u) + \| \mathrm{diag} (\lambda) d \| _ {1} + \frac {\mu}{2} \| W u - d + b _ {k} \| _ {2} ^ {2}, \\ b _ {k + 1} = b _ {k} + \delta (W u _ {k + 1} - d _ {k + 1}). \end{array} \right.
$$

Now, if one alternatively optimizes the variables u and d in the first equation above, we have the split Bregman algorithm as follows 

$$
\left\{ \begin{array}{l} u _ {k + 1} = \arg \min _ {u} H (u) + \frac {\mu}{2} \| W u - d _ {k} + b _ {k} \| _ {2} ^ {2}, \\ d _ {k + 1} = \arg \min _ {d} \| \mathrm{diag} (\lambda) d \| _ {1} + \frac {\mu}{2} \| d - W u _ {k + 1} - b _ {k} \| _ {2} ^ {2}, \\ b _ {k + 1} = b _ {k} + \delta (W u _ {k + 1} - d _ {k + 1}). \end{array} \right.\tag{4.52}
$$

Since $H ( u )$ is convex and diferentiable, the subproblem in the first line is easy to solve. Further, noting that the first term of the subproblem in the second line is the $\ell _ { 1 }$ norm, the subproblem in the second line can be solved by a simple soft shrinkage. These features make the iteration eficient and fast for many problems that are dificult to solve by other means. Besides its speed, the split Bregman method has several advantages. It has a relatively small memory footprint when compared to second order methods that require explicit representations of the Hessian matrix. Also, the method is easy to code. Both of these characteristics make this split Bregman method a practical algorithm for large scale problems. 

For image restoration problems (4.1), we choose $\begin{array} { r } { H ( u ) = \frac { 1 } { 2 } \lVert A u - f \rVert _ { D } ^ { 2 } } \end{array}$ and then (4.50) becomes 

$$
\min _ {u} \frac {1}{2} \| A u - f \| _ {D} ^ {2} + \| \mathrm{diag} (\lambda) d \| _ {1} \quad \text { subject   to } \quad d = W u,\tag{4.53}
$$

which is equivalent to the analysis based approach (4.11). We summarize the split Bregman algorithm (4.52) for the analysis based approach in the following algorithm. 

## Algorithm 4.7. (Split Bregman)

(i) Set initial guess $d _ { 0 }$ and $b _ { 0 }$ . 

(ii) For $k = 0 , 1 , . . . ,$ perform the following iterations until convergence 

$$
\begin{array}{l} u _ {k + 1} = (A ^ {\top} D A + \mu I) ^ {- 1} (A ^ {\top} D f + \mu W ^ {\top} (d _ {k} - b _ {k})), \\ d _ {k + 1} = \mathcal {T} _ {\lambda / \mu} (W u _ {k + 1} + b _ {k}), \\ b _ {k + 1} = b _ {k} + \delta (W u _ {k + 1} - d _ {k + 1}). \end{array}\tag{4.54}
$$

Note that when A is diagonalizable by discrete Fourier transform, e.g. a convolution matrix, the first equation of (4.54) can be solved eficiently by FFT. 

## 3.2. Convergence Analysis of Split Bregman Algorithm

Now, we provide a convergence analysis of the split Bregman algorithm (4.52) for a general convex diferentiable function $H ( u )$ . In particular, the convergence analysis applies to Algorithm 4.7 for image restoration problems. We note that, since all the subproblems involved in (4.52) are convex, the first order optimality condition gives 

$$
\left\{ \begin{array}{l} 0 = \nabla H (u _ {k + 1}) + \mu W ^ {\top} (W u _ {k + 1} - d _ {k} + b _ {k}), \\ 0 = p _ {k + 1} + \mu (d _ {k + 1} - W u _ {k + 1} - b _ {k}), \quad \text { with } \quad p _ {k + 1} \in \partial \| \mathrm{diag} (\lambda) d _ {k + 1} \| _ {1}, \\ b _ {k + 1} = b _ {k} + \delta (W u _ {k + 1} - d _ {k + 1}). \end{array} \right.\tag{4.55}
$$

This simple observation will be used in the proof of the convergence of the unconstrained split Bregman method (4.52). Note that we will not use the fact that $W ^ { \top } W = I .$ because it is not required by the proof. Therefore, the following convergence analysis also applies when W is replaced by any other linear operator like ∇ (see [24] for details). 

Theorem 4.8. Assume that there exists at least one solution $u ^ { \star }$ of (4.49). Assume that $0 < \delta \leqslant 1$ and $\mu > 0$ . Then, we have the following properties for the unconstrained split Bregman algorithm (4.52): 

$$
\lim _ {k \rightarrow + \infty} \| \operatorname{diag} (\lambda) W u _ {k} \| _ {1} + H (u _ {k}) = \| \operatorname{diag} (\lambda) W u ^ {\star} \| _ {1} + H (u ^ {\star}).\tag{4.56}
$$

Furthermore, 

$$
\lim _ {k \to + \infty} \| u _ {k} - u ^ {\star} \| _ {2} = 0\tag{4.57}
$$

whenever (4.49) has a unique solution. 

Proof. Let $u ^ { \star }$ be an arbitrary solution of (4.49). By the first order optimality condition, $u ^ { \star }$ must satisfy 

$$
0 = W ^ {\top} p ^ {\star} + \nabla H (u ^ {\star}),\tag{4.58}
$$

where $p ^ { \star } \in \partial \| \mathrm { d i a g } ( \lambda ) d ^ { \star } \| _ { 1 }$ with $d ^ { \star } = W u ^ { \star }$ . Let 

$$
b ^ {\star} = \frac {1}{\mu} p ^ {\star}.
$$

We obtain 

$$
\left\{ \begin{array}{l} 0 = \nabla H (u ^ {\star}) + \mu W ^ {\top} (W u ^ {\star} - d ^ {\star} + b ^ {\star}), \\ 0 = p ^ {\star} + \mu (d ^ {\star} - W u ^ {\star} - b ^ {\star}), \quad \text {with} \quad p ^ {\star} \in \partial \| \mathrm{diag} (\lambda) d ^ {\star} \| _ {1}, \\ b ^ {\star} = b ^ {\star} + \delta (W u ^ {\star} - d ^ {\star}). \end{array} \right.\tag{4.59}
$$

Therefore, $( u ^ { \star } , d ^ { \star } , b ^ { \star } )$ is a fixed point of (4.55). Consequently, if the iteration (4.52) converges, it converges to a solution of (4.49) when (4.56) is proven. 

Denote the errors by 

$$
u _ {k} ^ {e} = u _ {k} - u ^ {\star}, \quad d _ {k} ^ {e} = d _ {k} - d ^ {\star}, \quad b _ {k} ^ {e} = b _ {k} - b ^ {\star}.
$$

Subtracting the first equation of (4.59) from the first equation of (4.55), we have 

$$
0 = \nabla H (u _ {k + 1}) - \nabla H (u ^ {\star}) + \mu W ^ {\top} (W u _ {k + 1} ^ {e} - d _ {k} ^ {e} + b _ {k} ^ {e}).
$$

Taking the inner product of the left- and right- hand sides with respect to $u _ { k + 1 } ^ { e } .$ we have 

$$
0 = \langle \nabla H (u _ {k + 1}) - \nabla H (u ^ {\star}), u _ {k + 1} ^ {e} \rangle + \mu \| W u _ {k + 1} ^ {e} \| _ {2} ^ {2} - \mu \langle W ^ {\top} d _ {k} ^ {e}, u _ {k + 1} ^ {e} \rangle + \mu \langle W ^ {\top} b _ {k} ^ {e}, u _ {k + 1} ^ {e} \rangle .\tag{4.60}
$$

When similar manipulations are applied to the second equation of (4.55) and the second equation of (4.59), we obtain 

$$
0 = \langle p _ {k + 1} - p ^ {\star}, d _ {k + 1} - d ^ {\star} \rangle + \mu \| d _ {k + 1} ^ {e} \| _ {2} ^ {2} - \mu \langle W u _ {k + 1} ^ {e}, d _ {k + 1} ^ {e} \rangle - \mu \langle b _ {k} ^ {e}, d _ {k + 1} ^ {e} \rangle ,\tag{4.61}
$$

where $p _ { k + 1 } \in \partial \| \mathrm { d i a g } ( \lambda ) d _ { k + 1 } \|$ <sub>1</sub> and $p ^ { \star } = \mu b ^ { \star } \in \partial \| \mathrm { d i a g } ( \lambda ) d ^ { \star } \| .$ <sub>1</sub>. By summing (4.60) and (4.61), we get 

$$
\begin{array}{l} 0 = \langle \nabla H (u _ {k + 1}) - \nabla H (u ^ {\star}), u _ {k + 1} ^ {e} \rangle + \langle p _ {k + 1} - p ^ {\star}, d _ {k + 1} - d ^ {\star} \rangle \\ \quad + \mu \big (\| W u _ {k + 1} ^ {e} \| _ {2} ^ {2} + \| d _ {k + 1} ^ {e} \| _ {2} ^ {2} - \langle W u _ {k + 1} ^ {e}, d _ {k} ^ {e} + d _ {k + 1} ^ {e} \rangle + \langle b _ {k} ^ {e}, W u _ {k + 1} ^ {e} - d _ {k + 1} ^ {e} \rangle \big). \end{array} \tag {4.62}
$$

Now, subtracting the third equation of (4.59) from the third equation of (4.55) we obtain 

$$
b _ {k + 1} ^ {e} = b _ {k} ^ {e} + \delta (W u _ {k + 1} ^ {e} - d _ {k + 1} ^ {e}).
$$

Taking the inner product of the above identity with itself and reorganizing the terms, we have 

$$
\langle b _ {k} ^ {e}, W u _ {k + 1} ^ {e} - d _ {k + 1} ^ {e} \rangle = \frac {1}{2 \delta} \big (\| b _ {k + 1} ^ {e} \| _ {2} ^ {2} - \| b _ {k} ^ {e} \| _ {2} ^ {2} \big) - \frac {\delta}{2} \| W u _ {k + 1} ^ {e} - d _ {k + 1} ^ {e} \| _ {2} ^ {2}.\tag{4.63}
$$

Substituting (4.63) into (4.62), we have 

$$
\begin{array}{l} \frac {\mu}{2 \delta} \left(\| b _ {k} ^ {e} \| _ {2} ^ {2} - \| b _ {k + 1} ^ {e} \| _ {2} ^ {2}\right) \\ = \langle \nabla H (u _ {k + 1}) - \nabla H (u ^ {\star}), u _ {k + 1} ^ {e} \rangle + \langle p _ {k + 1} - p ^ {\star}, d _ {k + 1} - d ^ {\star} \rangle \\ \quad + \mu \left(\| W u _ {k + 1} ^ {e} \| _ {2} ^ {2} + \| d _ {k + 1} ^ {e} \| _ {2} ^ {2} - \langle W u _ {k + 1} ^ {e}, d _ {k} ^ {e} + d _ {k + 1} ^ {e} \rangle - \frac {\delta}{2} \| W u _ {k + 1} ^ {e} - d _ {k + 1} ^ {e} \| _ {2} ^ {2}\right) \\ = \langle \nabla H (u _ {k + 1}) - \nabla H (u ^ {\star}), u _ {k + 1} ^ {e} \rangle + \langle p _ {k + 1} - p ^ {\star}, d _ {k + 1} - d ^ {\star} \rangle   \\ \quad + \mu \left(\frac {1 - \delta}{2} \| W u _ {k + 1} ^ {e} - d _ {k + 1} ^ {e} \| _ {2} ^ {2} + \frac {1}{2} \| W u _ {k + 1} ^ {e} \| _ {2} ^ {2} + \frac {1}{2} \| d _ {k + 1} ^ {e} \| _ {2} ^ {2} - \langle W u _ {k + 1} ^ {e}, d _ {k} ^ {e} \rangle\right) \\ = \langle \nabla H (u _ {k + 1}) - \nabla H (u ^ {\star}), u _ {k + 1} ^ {e} \rangle + \langle p _ {k + 1} - p ^ {\star}, d _ {k + 1} - d ^ {\star} \rangle \\ \quad + \mu \left(\frac {1 - \delta}{2} \| W u _ {k + 1} ^ {e} - d _ {k + 1} ^ {e} \| _ {2} ^ {2} + \frac {1}{2} \| W u _ {k + 1} ^ {e} - d _ {k} ^ {e} \| _ {2} ^ {2} + \frac {1}{2} \| d _ {k + 1} ^ {e} \| _ {2} ^ {2} - \frac {1}{2} \| d _ {k} ^ {e} \| _ {2} ^ {2}\right) \end{array} \tag {(4.64)}
$$

By summing the above equation from $k = 0$ to $k = K$ , we get 

$$
\begin{array}{l} \frac {\mu}{2 \delta} \big (\| b _ {0} ^ {e} \| _ {2} ^ {2} - \| b _ {K + 1} ^ {e} \| _ {2} ^ {2} \big) + \frac {\mu}{2} \| d _ {0} ^ {e} \| _ {2} ^ {2} \\ = \sum_ {k = 0} ^ {K} \langle \nabla H (u _ {k + 1}) - \nabla H (u ^ {\star}), u _ {k + 1} - u ^ {\star} \rangle + \sum_ {k = 0} ^ {K} \langle p _ {k + 1} - p ^ {\star}, d _ {k + 1} - d ^ {\star} \rangle \\ \quad + \mu \left(\frac {1 - \delta}{2} \sum_ {k = 0} ^ {K} \| W u _ {k + 1} ^ {e} - d _ {k + 1} ^ {e} \| _ {2} ^ {2} + \frac {1}{2} \sum_ {k = 0} ^ {K} \| W u _ {k + 1} ^ {e} - d _ {k} ^ {e} \| _ {2} ^ {2} + \frac {1}{2} \| d _ {K + 1} ^ {e} \| _ {2} ^ {2}\right). \end{array}\tag{4.65}
$$

$\mathrm { B y \ ( 4 . 4 ) }$ , and that $0 < \delta \leq 1$ , all terms involved in the right-hand side of the above equation are nonnegative. This observation leads to the following inequality: 

$$
\frac {\mu}{2 \delta} \| b _ {0} ^ {e} \| _ {2} ^ {2} + \frac {\mu}{2} \| d _ {0} ^ {e} \| _ {2} ^ {2} \geq \sum_ {k = 0} ^ {K} \langle \nabla H (u _ {k + 1}) - \nabla H (u ^ {\star}), u _ {k + 1} - u ^ {\star} \rangle .\tag{4.66}
$$

$\mathrm { B y }$ the assumption $\mu > 0$ , we have $\begin{array} { r } { \sum _ { k = 0 } ^ { + \infty } \langle \nabla H ( u _ { k + 1 } ) - \nabla H ( u ^ { \star } ) , u _ { k + 1 } - u ^ { \star } \rangle < + \infty , } \end{array}$ which leads to 

$$
\lim _ {k \to + \infty} \langle \nabla H (u _ {k}) - \nabla H (u ^ {\star}), u _ {k} - u ^ {\star} \rangle = 0.\tag{4.67}
$$

By (4.3), we have 

$$
H (u _ {k}) - H (u ^ {\star}) - \langle u _ {k} - u ^ {\star}, \nabla H (u ^ {\star}) \rangle \geq 0,
$$

and 

$$
H (u ^ {\star}) - H (u _ {k}) - \langle u ^ {\star} - u _ {k}, \nabla H (u _ {k}) \rangle \geq 0,
$$

which leads to 

$$
0 \leq H (u _ {k}) - H (u ^ {\star}) - \langle u _ {k} - u ^ {\star}, \nabla H (u ^ {\star}) \rangle \leq \langle \nabla H (u _ {k}) - \nabla H (u ^ {\star}), u _ {k} - u ^ {\star} \rangle .
$$

This, together with (4.67), leads to 

$$
\lim _ {k \to + \infty} H (u _ {k}) - H (u ^ {\star}) - \langle u _ {k} - u ^ {\star}, \nabla H (u ^ {\star}) \rangle = 0.\tag{4.68}
$$

Similarly, (4.65) also provides us the following inequalities 

$$
\frac {\mu}{2 \delta} \| b _ {0} ^ {e} \| _ {2} ^ {2} + \frac {\mu}{2} \| d _ {0} ^ {e} \| _ {2} ^ {2} \geq \sum_ {k = 0} ^ {K} \langle p _ {k + 1} - p ^ {\star}, d _ {k + 1} - d ^ {\star} \rangle ,
$$

and 

$$
\frac {\mu}{2 \delta} \| b _ {0} ^ {e} \| _ {2} ^ {2} + \frac {\mu}{2} \| d _ {0} ^ {e} \| _ {2} ^ {2} \geq \frac {\mu}{2} \sum_ {k = 0} ^ {K} \| W u _ {k + 1} ^ {e} - d _ {k} ^ {e} \| _ {2} ^ {2}.
$$

Then by noticing that $W u ^ { \star } = d ^ { \star }$ and following the same argument as above, we have 

$$
\lim _ {k \to + \infty} \| \mathrm{diag} (\lambda) d _ {k} \| _ {1} - \| \mathrm{diag} (\lambda) d ^ {\star} \| _ {1} - \langle d _ {k} - d ^ {\star}, p ^ {\star} \rangle = 0,\tag{4.69}
$$

and 

$$
\lim _ {k \to + \infty} \| W u _ {k + 1} - d _ {k} \| _ {2} = 0.\tag{4.70}
$$

Since $\| \cdot \| _ { 1 }$ is continuous, by (4.69) and (4.70), we obtain 

$$
\lim _ {k \to + \infty} \| \mathrm{diag} (\lambda) W u _ {k} \| _ {1} - \| \mathrm{diag} (\lambda) W u ^ {\star} \| _ {1} - \langle W u _ {k} - W u ^ {\star}, p ^ {\star} \rangle = 0.\tag{4.71}
$$

Summing this and (4.68) yields 

$$
\begin{array}{c} \lim _ {k \to + \infty} \bigg (\big (\| \mathrm{diag} (\lambda) W u _ {k} \| _ {1} + H (u _ {k}) \big) - \big (\| \mathrm{diag} (\lambda) W u ^ {\star} \| _ {1} + H (u ^ {\star}) \big) \\ - \left. \langle u _ {k} - u ^ {\star}, \nabla H (u ^ {\star}) + W ^ {T} p ^ {\star} \rangle\right) = 0. \end{array}\tag{4.72}
$$

This, together with (4.58), proves (4.56), and (4.57) follows from Proposition 4.1. ■ 

Remark 4.13. The proof of convergence still works if $H ( u )$ is merely convex and continuous (then $H ( u )$ is subdiferentiable). In that case, one can simply replace the first line of (4.55) by 

$$
0 = q _ {k + 1} + \mu W ^ {\top} (W u _ {k + 1} - d _ {k} + b _ {k}), \quad q _ {k + 1} \in \partial H (u _ {k + 1}),\tag{4.73}
$$

and revise accordingly in the proof of Theorem 4.8. However, the equation (4.73) may be much harder to solve than the original one given in (4.55). For many applications, $H ( u )$ corresponds to fidelity term and takes the form $\begin{array} { r } { H ( u ) = \frac 1 2 \lVert A u - \dot { } \rVert _ { \boldsymbol { \mathbf { \theta } } } } \end{array}$ $f \| _ { D } ^ { 2 }$ , which is diferentiable. Then the first equation of (4.55) corresponds to a linear system of equations which can be solved eficiently whenever A is diagonalizable by discrete Fourier transform, e.g. when A is a convolution matrix. 

## 3.3. Simulations

Now, we apply Algorithm 4.7 to image deblurring problems. The matrix A in (4.1) is taken to be a convolution matrix with the corresponding kernel being a Gaussian function (generated in MATLAB by “fspecial(’gaussian’, $^ { 1 5 , 1 . 5 ) ; \ ' } )$ and η is generated from a zero mean Gaussian distribution with variance $\sigma = 3$ . For the matrix $D = ( A A ^ { \top } + \theta I ) ^ { - 1 }$ we choose $\theta = 0 . 0 1$ , and we pick the level of framelet decomposition to be 4. For stopping criterion, we use 

$$
\frac {\| W u _ {k + 1} - d _ {k + 1} \| _ {2}}{\| f \| _ {2}} <   5 \times 1 0 ^ {- 4}.
$$

Table 4 summarizes the deblurring results of Algorithm 4.7 and the corresponding images are shown in Figure 5. For convenience of comparison, we also present the results from Table 3 and Figure 3. As one can see, the single-system balanced approach outperform the analysis based approach in terms of both quality and speed. The two-system balanced approach is comparable to both Linearized Bregman and split Bregman algorithms, but it works better when images contain both cartoons and textures (see Figure 6). 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/406e077d0d666e87cec2cc888eea051db48fde6b2a046589cc6c8501fcf9cb21.jpg)



Figure 5. Deblurring results for “barbara”, “duck” and “wolf”. Column 1-5 are: the original image, results of single-system, results of two-system, results of the linearized Bregman algorithm and results of the analysis based approach.


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/8ba465001f20674f01c9da182cc5c2c0724ea6d9f3b23056b15d6f7d39854a8e.jpg)



Figure 6. Zoom-in to texture component of “barbara”. Images from left to right are: the original image, results of single-system, results of two-system, results of linearized Bregman algorithm and results of the analysis based approach.



Table 4: Comparisons of APG algorithm for both single-system balanced approach (4.8) and two-system balanced approach (4.12), and linearized Bregman algorithm for (4.45).


<table><tr><td>Deblurring</td><td colspan="2">Single-System</td><td colspan="2">Two-Systems</td><td colspan="2">Linearized Bregman</td><td colspan="2">Analysis Approach</td></tr><tr><td><eq>\sigma = 3</eq></td><td colspan="2"><eq>\kappa = 1, \lambda = 0.005</eq></td><td colspan="2"><eq>\kappa^i = 1, \lambda^i = 0.005</eq></td><td colspan="2"><eq>\kappa = 1, \lambda = 0.01</eq></td><td colspan="2"><eq>\mu = 0.1, \lambda = 0.05</eq></td></tr><tr><td></td><td>psnr</td><td>time (s)</td><td>psnr</td><td>time (s)</td><td>psnr</td><td>time (s)</td><td>psnr</td><td>time (s)</td></tr><tr><td>barbara</td><td>24.64</td><td>20.7</td><td>24.75</td><td>63.2</td><td>24.67</td><td>126.2</td><td>24.58</td><td>32.18</td></tr><tr><td>duck</td><td>31.15</td><td>17.5</td><td>31.04</td><td>41.8</td><td>30.87</td><td>100.1</td><td>31.00</td><td>26.57</td></tr><tr><td>wolf</td><td>30.83</td><td>25.9</td><td>30.6</td><td>72.6</td><td>30.66</td><td>186.5</td><td>30.75</td><td>81.40</td></tr></table>

## Other Applications of Frames

## 1. Background and Models

The previous lecture focused on using sparse approximations of wavelet frames to solve image restoration problems; however, these techniques have much broader applications. In this lecture, we consider some other interesting and important applications of tight frames. In Section 2, we discuss the model proposed in [18] on blind deblurring (motion deblurring to be specific) problems. Blind deblurring problems can still be modeled as (4.1), but the convolution kernel that determines A is unknown and needs to be solved simultaneously with u. In Section 3, we present a frame based image segmentation model of [71]. This model is no longer of the form (4.1) for image restoration problems. However, the concept of sparse approximation of tight frame systems still applies. More importantly, this model sheds some light on geometric interpretations of tight frames and grants links between tight frames and diferential operators. In Section 4, we recall the model proposed by [112] on reconstruction of scenes (visible surfaces) from scattered, noisy and possibly sparse range data (point clouds). 

Tight frames and the concept of sparse approximation of them have even more applications than described in this lecture. For example, researchers have recently applied frames to tomography (e.g. CT, PET and MRI). Medical images are similar to usual photographs (e.g. images of people, building or nature scenes) in the sense that they can be sparsely approximated by tight frames. Therefore, the basic idea of frame based tomography is to use the $\ell _ { 1 } .$ -norm to penalize frame coeficients of the image that needs to be recovered with an appropriate fidelity term that modes the specific signal acquisition technique (i.e. types of tomography) and type of noise. Also, applications of tight frames to geometric modeling have been developed. 

## 1.1. Blind Deconvolution

Motion blur caused by camera shake has been one of the prime causes of poor image quality in digital imaging, especially when using telephoto lenses or using long shutter speeds. In practice, using long shutter speeds is unavoidable when there is little light in the scene. Many researchers have worked on recovering clear images from motion-blurred images. The motion blur caused by camera shake is usually a spatially-invariant blurring process, which can be modeled as 

$$
f = u * p + \eta ,\tag{5.1}
$$

where ∗ is the convolution operator, u is the clear image to recover, f is the observed blurred image and p is the blur kernel (or point spread function), and η is the noise. If the blur kernel is given a priori, the model (5.1) is the same as (4.1), and the recovery of the clear image u is called a non-blind deconvolution problem; otherwise it is called a blind deconvolution problem. 

It is known that the non-blind deconvolution problem is an ill-conditioned problem because of its high sensitivity to noise. Blind deconvolution is not only illconditioned but also ill-posed since both the blur kernel and the clear image are unknown. Thus the problem is highly under-determined as there are much more unknowns than available information. Since the relative motion between the camera and the scene can be arbitrary and usually hard to estimate a priori, motion deblurring is a typical blind deconvolution problem. 

Early works on blind deblurring commonly use a single image and assume a parametric model of the blur kernel $p ,$ such that the blur kernel can be obtained by only estimating a few parameters (e.g. [149]). In practice, this is usually an oversimplification. In order to handle more complicated motion blurring, multiimage based approaches have been proposed to obtain more information about the blur kernel by either actively or passively capturing multiple images on the scene (e.g., [3, 5, 46, 153, 172]). 

In recent years, there has been steady progress on removing motion blur from a single image for more general blur kernels. There are two typical approaches. One approach is to use some probabilistic priors on image’s edge distribution to derive the blur kernel (e.g., [89, 119, 127]) or to manually select blurred edges to obtain the local blur kernel ([113]). The main issue with this type of method is that the assumed probabilistic priors do not always hold true for general images, especially for nature images of complex structures. The second approach is to formulate the blind deconvolution as a joint minimization problem with a certain regularization on both the blur kernel p and the clear image u: 

$$
E (u, p) = \min _ {p, g} \Phi (u * p - f) + \lambda_ {1} \Psi_ {1} (p) + \lambda_ {2} \Psi_ {2} (u),\tag{5.2}
$$

where $\Phi ( p \ast u - f )$ is the fidelity term, $\Psi _ { 1 } ( p )$ and $\Psi _ { 2 } ( u )$ is the regularization term on the kernel and the clear image respectively. 

In [2, 44, 49] TV-based approaches were proposed to solve general blind deconvolution problems, where the fidelity term in (5.2) is the usual $\ell _ { 2 }$ norm on image intensities; and both regularization terms in (5.2) are total variation measurement $( \ell _ { 1 }$ norm on function derivatives). In [166] a more sophisticated minimization model was presented where the fidelity term is a weighted $\ell _ { 2 }$ norm on both similarities in image intensity and similarities in the image’s derivatives; and the regularization terms are the $\ell _ { 1 }$ norm of the blur kernel’s derivatives and the $\ell _ { 1 }$ norm of the image intensities. This method demonstrated impressive performance on recovering motion-blurred images containing moderately complex structures. However, the minimization model proposed in [166] is quite complicated and requires a fairly accurate prior on the size of the blur kernel. Moreover, the recovered images from this method, as well as other TV-based methods, were lacking suficient details and textures on the regions of complex structure, which limited their applications in practice. 

In Section 2, we follow the tight frame based blind deconvolution model of [18]. This model takes into account both the sparsity of the image u and that of the kernel $p .$ To be precise, both the image and the kernel are assumed to have sparse representation under two diferent quasi-afine tight frame systems. A fast algorithm is provided in [18] based on the linearized Bregman algorithm. Here, we recall the general model of [18] and leave the details to Section 2. The tight frame based blind deconvolution model can be found in [19, 20] as well. 

Given a blurred image $f ,$ our goal is to recover the clear image u and the blur kernel $p$ from (5.1): 

$$
f = u * p + \eta .
$$

Let α denote the framelet coeficients of the clear image u with $u = W _ { 1 } ^ { \top } \alpha ,$ , and let $\beta$ denote the framelet coeficients of the blur kernel $p$ with $p = W _ { 2 } ^ { \top } \beta$ . Then, 

$$
f = (W _ {1} ^ {\top} \alpha) * (W _ {2} ^ {\top} \beta) + \eta .
$$

Thus, we formulate the frame based blind motion deblurring model as: 

$$
\min _ {\alpha , \beta} \| \alpha \| _ {1} + \lambda \| \beta \| _ {1}
$$

subject to 

$$
\| (W _ {1} ^ {\top} \alpha) * (W _ {2} ^ {\top} \beta) - f \| _ {2} \leqslant \sigma ,
$$

where $W _ { i } , i = 1 , 2$ , are the decomposition operators of framelet systems, λ is the parameter which balances the sparseness between the kernel and the image, and $\sigma$ is the noise parameter of the observed image $f .$ The solution of this minimization is approximated by applying the linearized Bregman algorithm alternatively as shown in Section 2 with full details. 

## 1.2. Segmentation

As we mentioned before, tight frames give redundant representations to signals and images, and the redundancy of tight frames usually leads to sparse approximation of images, which is known to be a desirable property for image restoration problems, like denoising, inpainting, deblurring, etc. Also, there is some research on texture classification and segmentation using wavelets or wavelet frames [178, 1]. However, utilizing the property of sparse approximation of tight frames for general image segmentation problems has not been considered in the literature. In Section 3 we recall a frame based segmentation model by [71]. 

The segmentation model of [71] is applicable to general images. However, we focus on medical images. Segmenting biological structures, e.g. cortical or subcortical structures, blood vessels, tumors etc., from various types of medical images (e.g. CT, MRI, ultrasound, etc.) is very important for detecting abnormalities, studying and tracking progress of diseases, and surgery planning. Medical image segmentation is a dificult problem due to medical images commonly having poor contrasts, diferent types of noise, and missing or difusive boundaries. Numerous algorithms have been developed in the literature targeting either general segmentation problems or the segmentation of specific biological structures (see [48, 133, 126, 176, 183, 128, 179, 150, 174, 92, 139, 122] and the references therein). 

Now, we give a brief preview of the frame based segmentation model of [71] and leave the details to Section 3. Since it is confusing to denote images as vectors in $\mathbb { R } ^ { n }$ for segmentation problems, we shall understand image $f$ as s-dimensional arrays, i.e. $\mathbf { \bar { \ * f } } \in \mathbb { R } ^ { N _ { 1 } \times \bar { N _ { 2 } } \times \cdots \times N _ { s } } = : \mathcal { S } _ { s } .$ , with s typically 2 or 3. We still denote the fast framelet decomposition and reconstruction as $W$ and $W ^ { \top }$ , while they should be understood as linear operators, instead of matrices, defined precisely as in Algorithm 2.3. We note that we can use the same notation for image restoration problems because, mathematically speaking, it makes no diference. 

For a given observed image $f \in S _ { s } ~ ( \mathrm { F i g u r e } ~ 1 ( \mathrm { a } ) )$ , a typical objective of segmentation is to divide the image domain into two sub-domains: one is the domain of the object of interest Ω (white region in Figure 1(b)) and the other is the background 

Ω<sup>c</sup> (black region in Figure 1(b)). The quality of segmentation is usually measured by: (1), how well the boundary of Ω (Figure 1(c)), denoted as ∂Ω, fits the boundary of the object of interest in $f ; ( 2 )$ , the smoothness of ∂Ω. Here (2) is an important requirement when noise or other types of error are present in the image f. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/5c05192c850abcb2d983217a7c8529f88e0f46a140a7df88a246b35ea18aa53b.jpg)



(a)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/3bf7fd6c647c6827f56496e40700c70bc9f4728a12f49159657c2765b8ea5a3a.jpg)



(b)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/89a2d20e67f57f88e5dc08461b5ac7dfe9a4575e6ee952d2a3796d061317d0a4.jpg)



(c)



Figure 1. Figure (a) shows an observed image. Figure (b) shows the domain decomposition based on some segmentation where the white regions indicate the object of interest while the black regions indicate the background. Figure (c) shows the boundary of the segmented object (red curves).


One of the most popular ways of modeling segmentation problems is to use level set formulations. The key idea of the level set based segmentation models (see e.g. [41, 146, 148, 164]) is to find an appropriate level set function $u \in S _ { s }$ such that $\Omega : = \{ u \geq \alpha \}$ provides a desired segmentation of the given image f for some α $( \alpha = 0$ is commonly used). The beauty of the level set formulation is that it models general domains (not necessarily connected) with complicated boundaries, and the quality of segmentation is easily controlled by adding appropriate penalties to the level set function u. 

The frame based segmentation model of [71] combines the property of sparse approximation of tight frame systems to piecewise smooth functions with the idea of the level set method. We now illustrate how the frame based segmentation model of [71] is motivated. The idea is motivated by that of [43, 45, 12] where TV-based segmentation models are considered. 

Let $\chi \Omega$ denotes the characteristic function supporting on domain Ω. A desired segmentation of a given image $f \in S _ { s }$ should be a solution to the following nonconvex optimization problem 

$$
\min _ {\Omega ; c ^ {1}, c ^ {2} \in \mathbb {R}} \| \lambda \cdot W \chi_ {\Omega} \| _ {1} + \mu \Big (\| \chi_ {\Omega} (c ^ {1} - f) \| _ {2} ^ {2} + \| \chi_ {\Omega^ {c}} (c ^ {2} - f) \| _ {2} ^ {2} \Big).\tag{5.3}
$$

Remark 5.14. 

(1) The first term of (5.3) controls the regularity of ∂Ω. The frame transform operator W can be understood as a certain discretization of some diferential operator. For example in 2D, when W corresponds to the piecewise linear wavelet, W contains diference operators that approximate $\partial _ { x } u$ and $\partial _ { y } \boldsymbol { u }$ with the corresponding 2D filters $[ 1 , 2 , 1 ] ^ { \top } \cdot [ 1 , 0 , - 1 ]$ and $[ 1 , 0 , - 1 ] ^ { \top } \cdot [ \bar { 1 } , 2 , 1 ] ^ { }$ ; also it contains diference operators that approximate $\partial _ { x x } u$ and $\partial _ { y y } u$ with the corresponding 2D filters $[ 1 , 2 , 1 ] ^ { \top } \cdot [ - 1 , 2 , - 1 ]$ and $[ - 1 , 2 , - 1 ] ^ { \top } \cdot [ 1 , 2 , 1 ]$ . This observation indicates that with diferent choices of parameter λ and tight frames, the frame transform operator W approximates diferent diferential operators. Therefore, the first term of (5.3) provides rather rich geometric information of ∂Ω. 

(2) The second term of (5.3) is the fidelity term that controls the accuracy of the segmentation. The two constants $c ^ { 1 }$ and $c ^ { 2 }$ approximate the average values of $f$ inside and outside of Ω respectively. In general, one can consider $c ^ { 1 }$ and $c ^ { 2 }$ as arrays in $S _ { s }$ that approximate $f$ itself inside and outside of $\Omega .$ . However, for simplicity, we will only consider $c ^ { 1 }$ and $c ^ { 2 }$ as constants here. 

(3) Note that when $W = \nabla .$ , the model (5.3) is known as the piecewise constant Mumford-Shah model studied by [43], where the authors employed the level set method and used gradient descent to solve the energy (5.3). 

The major dificulty of solving (5.3) is that it is a nonconvex optimization problem which in general is hard to solve. Here, we describe a way that one can partially convexify the problem (5.3) following a similar idea as [45, 12]. 

If one replaces $\chi _ { \Omega }$ by u and χ<sub>Ω</sub>c by $1 - u$ in (5.3), it is easy to rewrite the problem (5.3) equivalently as 

$$
\min _ {u \in \{0, 1 \}; c ^ {1}, c ^ {2} \in \mathbb {R}} \| \lambda \cdot W u \| _ {1} + \mu \langle \zeta (c ^ {1}, c ^ {2}), u \rangle ,\tag{5.4}
$$

where $u \in \{ 0 , 1 \}$ forces u to be a binary array, and $\zeta ( c ^ { 1 } , c ^ { 2 } )$ is defined as 

$$
\zeta (c ^ {1}, c ^ {2}) := (c ^ {1} - f) ^ {2} - (c ^ {2} - f) ^ {2}.
$$

The problem (5.4) is equivalent to (5.3) in the sense that $\chi _ { \Omega }$ is a solution to (5.4) if and only if Ω is a solution to (5.3), for any given $c ^ { 1 }$ and $c ^ { 2 }$ . Note that the objective function of (5.4) is now convex with respect to $u ,$ while the non-convexity is moved to the constraints $u \in \{ 0 , 1 \}$ , which are usually referred to as binary constraints. 

Optimization problems with binary constraints are usually very hard to solve due to the existence of local minimum. One common way of relaxing binary constraints like $u \in \{ 0 , 1 \}$ is to use $0 \leq u \leq 1$ instead. This leads to the frame based segmentation model of [71] given as follows: 

$$
\min _ {0 \leq u \leq 1; c ^ {1}, c ^ {2} \in \mathbb {R}} \| \lambda \cdot W u \| _ {1} + \mu \langle \zeta (c ^ {1}, c ^ {2}), u \rangle .\tag{5.5}
$$

Note that (5.5) is still a non-convex problem; however, with fixed $c ^ { 1 }$ and $c ^ { 2 }$ it is a convex problem. 

When $c ^ { 1 }$ and $c ^ { 2 }$ are fixed, an optimal solution $u ^ { \star }$ of (5.5) is generally not a solution of (5.4), unless $u ^ { \star }$ happens to be binary itself. When $u ^ { \star }$ is not binary, a segmentation of image $f$ can be obtained by taking $\Omega _ { \alpha } : = \lbrace u ^ { \star } \geq \alpha \rbrace$ for some $\alpha \in [ 0 , 1 ]$ Now the question is, for which $\alpha ,$ is the function $\chi _ { \Omega _ { \alpha } } \ \mathrm { a }$ solution to $( 5 . 4 ) ?$ For the case $W = \nabla$ , this question is answered by [45, 12], where they showed that for almost every $\alpha \in [ 0 , 1 ] , \chi _ { \Omega _ { \alpha } }$ is a solution to (5.4) (when $W = \nabla$ the model (5.4) is known as the piecewise Mumford-Shah model first considered by [43]). Although there is no corresponding theory for general tight frames where $W \neq \nabla$ , our numerical simulations indicate that a similar result holds. Note that for diferent $\alpha ,$ the set $\Omega _ { \alpha }$ is generally diferent. This raises the question of which choice of α results in $\Omega _ { \alpha }$ providing the best segmentation result. Recall from the theory of linear programming that an optimizer of a linear program must lie on one of the extreme points of the feasible set (see e.g. [11]). Therefore, when $\mu$ is comparably large, the problem (5.5) is close to a linear program, and thus $u ^ { \star }$ is close to a binary array (which is confirmed by numerical experiments). As a consequence, choices of α are not crucial and we choose $\alpha = 0 . 5$ 

## 1.3. Scene Reconstruction from Range Data

High-quality 3D scene modeling has long been an important research topic in computer vision, robotic navigation, computer graphics and animation. The 3D geometrical model of a scene is usually reconstructed from pre-acquired range data sets of the scene, which are usually very noisy, corrupted with a lot of outliers, and sparsely sampled with large gaps. In the past, there have been extensive studies on reconstructing objects or scenes using range data from a single view or from multiple views. Interested readers are referred to a recent survey [100, Chapter 4] for more details. In Section 4, we focus on how to reconstruct the scene model using 3D range data of a single view. Since range data from a single view can only provide 3D information for the visible surfaces of the scene, a piecewise smooth explicit surface model is usually adequate to describe visible surfaces of a scene. It is noted that discontinuities on the reconstructed piecewise smooth surface provide very important information for many applications (e.g. robotics), because surface discontinuities represent either the boundaries of objects in the scene or sharp geometrical changes of individual objects. Thus, in contrast to what most traditional surface-fitting methods tend to do, a desired reconstruction algorithm should well preserve surface discontinuities. 

Reconstructing a piecewise smooth surface using range data can be formulated as a function reconstruction problem. Assume that we are given a set of scattered data sites: 

$$
\Xi = \{x [ 1 ], x [ 2 ], \dots , x [ n ] \} \subset \mathbb {R} ^ {2}
$$

and associated function values 

$$
f | _ {\Xi} = \{f [ 1 ], f [ 2 ], \dots , f [ n ] \},
$$

where $f _ { i }$ is the function value of an unknown data function $f ( x )$ at $x [ i ]$ and possibly contains noise, i.e., 

$$
f [ i ] = f (x [ i ]) + \epsilon [ i ].
$$

Our goal is then to reconstruct the data function f under the assumption that f is a piecewise smooth function. It is emphasized that the discontinuities of $f$ need to be well preserved in the reconstruction, because they encode important information about boundaries of objects on which many high-level tasks depend. On the other hand, the input data sites Ξ can be scattered such that they are nonuniformly sampled, with large gaps. Furthermore, the obtained function values f|<sub>Ξ</sub> are usually corrupted by diferent types of noise, e.g. Gaussian or impulsive noise. All of these challenges make reconstruction a rather dificult problem. 

The frame based model of [112] is motivated by work in [107, 117, 169] which use a simple principal shift invariant space and its associated wavelet transform to fit scattered data, [118] proposed an eficient algorithm to approximate the solution of a smoothing spline in a principal shift invariant space. 

Let $\Omega \subset \mathbb { R } ^ { 2 }$ be a bounded domain of interest that contains all dat $^ { \mathrm { a , } }$ and let φ be a carefully chosen compactly supported continuous function (e.g. uniform B-splines, box splines, nodal basis functions). We look for fitting functions in the space spanned by $2 ^ { - L }$ -dilates and $2 ^ { - L }$ -shifts of $\phi$ whose support intersects $\Omega , \mathrm { i . e . }$ 

$$
S ^ {L} (\phi , \Omega) = \bigg \{\sum_ {k \in \mathbb {Z} ^ {2}} c (k) \phi (2 ^ {L} \cdot - k): c (k) = 0 \text { whenever } \operatorname{supp} \phi (2 ^ {L} \cdot - k) \cap \Omega = \emptyset \bigg \},
$$

where $L \in \mathbb { Z } ^ { + }$ is a scaling parameter that controls the refinement of the space. Then, any fitting function $s ( x ) \in S ^ { L } ( \phi , \Omega )$ can be written as a finite expansion: 

$$
s (x) = \sum_ {k \in \mathcal {I}} u [ k ] \phi (2 ^ {L} x - k),\tag{5.6}
$$

where $\mathcal { T } : = \{ k \in \mathbb { Z } ^ { 2 } : \operatorname { s u p p } \phi ( 2 ^ { L } \cdot - k ) \cap \Omega \neq \emptyset \}$ . Let u and $f$ denote the column vector $\{ u [ k ] \} _ { k \in \mathcal { T } }$ and $\{ f [ i ] \} _ { 1 \leq i \leq n }$ respectively. Our goal here is to find u such that $s ( x )$ approximates the unknown function $f ( x )$ based on the observed data $f .$ The function $f ( x )$ that we are approximating is generally piecewise smooth and can be sparsely approximated by tight frame systems. Therefore, the key idea of [112] is to reconstruct $s ( x )$ such that $s ( x )$ can be sparsely approximated by certain tight frame systems, which naturally leads to the penalization of the $\ell _ { 1 } { \mathrm { - n o r m } }$ of tight frame coeficients of $s ( x )$ as shown in the previous lecture. Therefore, we will obtain a desired u by solving the following problem 

$$
\min _ {\boldsymbol {u}} \frac {1}{2} \| A \boldsymbol {u} - \boldsymbol {f} \| _ {2} ^ {2} + \| \mathrm{diag} (\lambda) W \boldsymbol {u} \| _ {1},
$$

where 

$$
A (i, k) = \phi (2 ^ {L} x [ i ] - k), \quad i = 1, 2, \ldots , n, k \in \mathcal {I},
$$

for some given $L \in \mathbb { Z } ^ { + }$ . We shall now leave the details to Section 4. 

## 2. Frame Based Blind Deconvolution

As we see from (5.1), blind deblurring is an under-constrained problem with many possible solutions. Thus we need to enforce extra constraints on the image and the kernel to overcome the ambiguity. In past years, there have been extensive studies showing that most natural images usually have a sparse approximation under some tight frame systems, which include, for example, shift-invariant orthonormal wavelets, Gabor transform, framelet, curvelet, etc. This inspires the authors in [18] to use the sparseness of the image under the suitable tight frame system as the constraint on the image. The same sparseness constraint is also applicable to the kernel if we understand the kernel as a special image. 

## 2.1. Problem Formulation and Analysis

Given a blurred image $f ,$ our goal is to recover the clear image u and the blur kernel p from (5.1): 

$$
f = u * p + \eta .
$$

Let $W _ { 1 }$ and $W _ { 2 }$ denote the fast framelet decomposition corresponding to two possibly diferent tight frame systems. Denote α and $\beta$ the framelet coeficients of the clear image u with $u = W _ { 1 } ^ { \top }$ α and the blur kernel $p$ with $p = W _ { 2 } ^ { \top } \beta$ . Then, 

$$
f = (W _ {1} ^ {\top} \alpha) * (W _ {2} ^ {\top} \beta) + \eta .
$$

Thus, we can formulate the blind motion deblurring problem as: 

$$
E (\alpha , \beta) = \min _ {\alpha , \beta} \| \alpha \| _ {1} + \lambda \| \beta \| _ {1}\tag{5.7}
$$

subject to 

$$
\| (W _ {1} ^ {\top} \alpha) * (W _ {2} ^ {\top} \beta) - f \| _ {2} \leqslant \sigma ,\tag{5.8}
$$

where $\lambda$ is the parameter which balances the sparseness between the kernel and the image, σ is the noise parameter of the observed image $f$ 

It is known that the $\ell _ { 1 }$ norm is a fairly good measurement of the sparseness of vectors. Thus, the first and second term in (5.7) penalize the sparseness of framelet coeficients of the image u and kernel $p$ under two tight frame systems. Since u and p are usually two diferent types of images, the tight frame systems that can provide an ideally sparse approximation to them should be diferent. The constraint in (5.8) is the fidelity constraint between the observed and computed image. The minimization problem (5.7-5.8) is a challenging one. In the next section, we present an alternating minimization approach to solve this minimization problem eficiently. The key idea is to adopt a modified version of the linearized Bregman algorithm. 

## 2.2. Numerical algorithm and analysis

The minimization (5.7-5.8) is a joint minimization problem on α and $\beta .$ . It may not always yield a physically meaningful solution because (5.7-5.8) does not have a unique solution in general. In order to obtain a physically meaningful solution, we chose to impose the following physical conditions: 

$$
\left\{ \begin{array}{l l} p = W _ {2} ^ {\top} \beta \geq 0, & a n d \quad \sum p = 1; \\ u = W _ {1} ^ {\top} \alpha \geq 0. \end{array} \right.\tag{5.9}
$$

Even with the constraint (5.9), the problem (5.7)-(5.8) is not easy to solve. Here, we take the traditional heuristic alternative approach. The outline of the alternative algorithm for solving (5.7)-(5.8) is given as follows: 

Algorithm 5.1. Let $\alpha _ { 0 } = W _ { 1 } f$ and $\beta _ { 0 } = W _ { 2 } \delta _ { \mathrm { c } }$ be initial guess, where $f$ is the observed image and $\delta _ { \mathrm { c } }$ takes value one at the center pixel of the image and zero elsewhere. Iterate on k until convergence. 

(1) Fixing $\beta _ { k }$ , solve (5.7-5.8) with respect to $\alpha ,$ i.e., set $\alpha _ { k + \frac 1 2 }$ be a solution of 

$$
\begin{array}{l l} \min _ {\alpha} & \| \alpha \| _ {1} \quad \text { subject   to } \\ & \| (W _ {2} ^ {\top} \beta_ {k}) * (W _ {1} ^ {\top} \alpha) - f \| _ {2} \leqslant \sigma , \end{array}\tag{5.10}
$$

Then impose 

$$
\alpha_ {k + 1} = W _ {1} u _ {k + 1},
$$

where 

$$
u _ {k + 1} [ j ] = \left\{ \begin{array}{l l} W _ {1} ^ {\top} \alpha_ {k + \frac {1}{2}} [ j ], & \text { if } W _ {1} ^ {\top} \alpha_ {k + \frac {1}{2}} [ j ] \geq 0, \\ 0, & \text { otherwise }. \end{array} \right.
$$

(2) Fixing $\alpha _ { k + 1 }$ , solve (5.7-5.8) with respect to $\beta ,$ i.e., set $\beta _ { k + \frac 1 2 }$ , be a solution $o f$ 

$$
\begin{array}{l l} \min _ {\alpha} & \| \beta \| _ {1} \text {subject to} \\ & \| (W _ {1} ^ {\top} \alpha_ {k + 1}) * (W _ {2} ^ {\top} \beta) - f \| _ {2} \leqslant \sigma . \end{array}\tag{5.11}
$$

Then impose 

$$
\beta_ {k + 1} = W _ {2} h _ {k + 1},
$$

where 

$$
h _ {k + 1} [ j ] = \left\{ \begin{array}{l l} W _ {2} ^ {\top} \beta_ {k + \frac {1}{2}} [ j ], & \text { if } W _ {2} ^ {\top} \beta_ {k + \frac {1}{2}} [ j ] \geq 0, \\ 0, & \text { otherwise }, \end{array} \right.
$$

followed by normalization $\begin{array} { r } { h _ { k + 1 } = \frac { h _ { k + 1 } } { \left\| h _ { k + 1 } \right\| _ { 1 } } } \end{array}$ 

In each step of the alternative algorithm, there are two minimization problems (5.10) and (5.11), which in fact take exactly the same form. In the following, we present an eficient algorithm to solve such minimization problems, which is derived from the linearized Bregman algorithm (Algorithm 4.6). For (5.10), let $[ p ] _ { * }$ denote the matrix form of the convolution operator corresponding to the kernel $p .$ Define 

$$
w _ {0} = x _ {0} = 0.
$$

Then we generate a sequence of $w _ { i }$ and $x _ { i }$ as follows 

$$
\left\{ \begin{array}{l l} w _ {i + 1} = \nu \mathcal {T} _ {\mu} (x _ {i}), \\ x _ {i + 1} = x _ {i} - Z _ {k} W _ {1} [ W _ {2} ^ {\top} \beta_ {k} ] _ {*} ^ {\top} ([ W _ {2} ^ {\top} \beta_ {k} ] _ {*} (W _ {1} ^ {\top} w _ {i + 1} - f)), \end{array} \right.\tag{5.12}
$$

where $\tau _ { \mu }$ is the soft-thresholding operator defined by (4.15) and (4.16), and $Z ^ { ( k ) }$ is a preconditioning matrix to accelerate the convergence of the iteration, which is chosen in the implementation as 

$$
Z _ {k} = \big ([ W _ {2} ^ {\top} \beta_ {k} ] _ {*} ^ {\top} ([ W _ {2} ^ {\top} \beta_ {k} ] _ {*}) + \lambda_ {i} \Delta) ^ {- 1},
$$

where $\Delta$ is the discrete Laplacian. The convergence of the sequence $w ^ { ( i ) }$ is guaranteed by the following proposition which is a direct consequence of Theorem 4.7. It is proved in [22] that the sequence $w ^ { ( i ) }$ generated by (5.12) actually converges to an approximated solution of (5.10) when $\nu \mu \to \infty$ 

Proposition 5.1. The sequence w<sub>i</sub> generated via (5.12) with a proper ν converges to the unique solution of 

$$
\left\{ \begin{array}{l} \min _ {\alpha} \| \alpha \| _ {1} + \frac {1}{2 \nu \mu} \| \alpha \| _ {2} ^ {2}, \\ \text {s.t.} (W _ {2} ^ {\top} \beta_ {k}) * (W _ {1} ^ {\top} \alpha) = f, \end{array} \right.\tag{5.13}
$$

if there exists at least one solution of $\left( W _ { 2 } ^ { \top } \beta _ { k } \right) * \left( W _ { 1 } ^ { \top } \alpha \right) = f ,$ 

Proof. It is a direct consequence of Theorem 4.7 by noticing that the constraint $\left( W _ { 2 } ^ { \textsf { T } } \beta _ { k } \right) * \left( W _ { 1 } ^ { \textsf { T } } \alpha \right) = f$ is equivalent to $Z _ { k } ^ { \frac { 1 } { 2 } } ( W _ { 2 } { } ^ { \top } \beta _ { k } ) * ( W _ { 1 } { } ^ { \top } \alpha ) = Z _ { k } ^ { \frac { 1 } { 2 } } f$ , and $Z _ { k }$ commutes with convolution operators. 

The method (5.12) is extremely eficient. Usually it takes only a few iterations for (5.12) to get an approximate solution of (5.10) (cf. [22]), and the accuracy of the approximation is adequate during the alternative iterations in the main algorithm. 

For (5.11), the same method can be applied to find the solution: start with $z _ { i } = x _ { i } = 0$ , and generate the sequence 

$$
\left\{ \begin{array}{l l} z _ {i + 1} = \nu \mathcal {T} _ {\mu} (x _ {i}), \\ x _ {i + 1} = x _ {i} - Z _ {k} W _ {2} [ W _ {1} ^ {\top} \alpha_ {k} ] _ {*} ^ {\top} ([ W _ {1} ^ {\top} \alpha_ {k} ] _ {*} (W _ {2} ^ {\top} z _ {i + 1} - f)). \end{array} \right.\tag{5.14}
$$

Then after a few iterations, $z _ { i }$ becomes a good approximated solution to (5.11). 

## 2.3. Numerical Experiments

Here, we present deblurring result using Algorithm 5.1 for one image with synthetic motion blur and one real image that was taken by a digital camera using a long shutter speed under a weak light condition. The synthetic motion blur is generated by MATLAB function “fspecial(’motion’,11,120)” and noise with $\sigma = 3$ is also added to the image. For simplicity, we choose $W _ { 1 } = W _ { 2 }$ as the decomposition matrix corresponding to piecewise linear quasi-afine tight frame system. Numerical results of the two images are given in Figure 2 and 3. For more numerical experiments, one should consult [18]. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/722d793313273eceb101a5a164f406d1873b0562e9b013a2d434d2273d5152ca.jpg)



Figure 2. Deblurring results for the synthetic motion blur. Column 1-3 are: the original image, observed blurry and noisy image, and deblurring result of Algorithm 5.1. Row 2 and 3 show two diferent close-ups of the corresponding images shown in row 1.


## 3. Frame Based Image Segmentation

In this section, we review the frame based segmentation model proposed by [71]. First, we introduce a few notations that will be used throughout this section. 

An observed s-dimensional image f is an array in $\mathcal { S } _ { s } : = \mathbb { R } ^ { N _ { 1 } \times \cdots \times N _ { s } }$ . Framelet decomposition and reconstruction operators are denoted as W and $W ^ { \top }$ which are given by Algorithm 2.3 and satisfy $\bar { W } ^ { \top } W = I$ with I the identity operator. Here, we use the tensor product quasi-afine tight frame systems discussed in Lecture 2. Suppose there are r univariate tight framelets constructed from UEP. The total number of s-dimensional tight framelets obtained by tensor product is $r _ { s } : = ( r +$ $1 ) ^ { s } - 1$ 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/3838ae901c687019a1b6cc3a033f3952587672d9f8ab0c55aa65fe902614490b.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/503daf67b69d399de1398fb09f26f94d9f5ebb76c76fbda9b25a74dd2bff5f62.jpg)



Figure 3. Deblurring results for the real image. For each row, the left image is the observed blurry and noisy image, and the right image is the deblurred image using Algorithm 5.1. Row 2 shows a close-up of the corresponding images shown in row 1.


For simplicity of notation, we suppose the level of framelet decomposition is 1. We denote $W _ { 0 }$ as the operator that corresponds to the decomposition with respect to the refinable function; and denote $W _ { i } .$ , with $1 \leq i \leq r _ { s } .$ , as the operator that corresponds to the decomposition with respect to the i-th framelet. Under this notation, we denote $W u \in \mathcal { S } _ { s } \times \mathbb { R } ^ { r _ { s } + 1 }$ as 

$$
W u := \left[ W _ {0} u, W _ {1} u, W _ {2} u, \dots , W _ {r _ {s}} u \right].
$$

## 3.1. Frame Based Segmentation Model

For a given image $f \in S _ { s }$ , we consider the following optimization problem 

$$
\min _ {0 \leq u \leq 1; c ^ {1}, c ^ {2} \in \mathbb {R}} \| \lambda \cdot W u \| _ {1} + \mu \langle \zeta (c ^ {1}, c ^ {2}), u \rangle ,\tag{5.15}
$$

where $\zeta ( c ^ { 1 } , c ^ { 2 } )$ is defined as 

$$
\zeta (c ^ {1}, c ^ {2}) := (c ^ {1} - f) ^ {2} - (c ^ {2} - f) ^ {2}
$$

with $c ^ { 1 }$ and $c ^ { 2 }$ real constants. Here $\lambda \in \mathcal { S } _ { s } \times \mathbb { R } ^ { r _ { s } + 1 }$ is a weight function that weights $W _ { i }$ u diferently for diferent i in general. However, we choose the following λ for simplicity 

$$
\lambda [ \cdot , i ] = \left\{ \begin{array}{l l} 0, & i = 0; \\ \frac {1}{1 + \sigma \sum_ {j = 1} ^ {r _ {s}} | W _ {j} f | ^ {2}}, & i = 1, 2, \ldots , r _ {s}. \end{array} \right.
$$

Notice that λ can be regarded as the so-called edge indicator function (see e.g. [28, 45, 12]) under the framelet transform $W$ 

To solve (5.15), one can alternatively optimize variables u and $c ^ { i } , i = 1 , 2$ Since when u is fixed, the optimal values $c ^ { i }$ can be easily determined. Therefore, the key step is to optimize (5.15) with $c ^ { i }$ fixed. Here, we adopt the idea of the split Bregman algorithm that was discussed in Section 3. 

Let $d = W \cdot$ u and write (5.15) equivalently as the following problem 

$$
\min _ {d = W u} \| \lambda \cdot d \| _ {1} + \mu \langle \zeta (c ^ {1}, c ^ {2}), u \rangle + \mathcal {C} _ {0 \leq u \leq 1},
$$

where $\mathcal { C } _ { 0 \leq u \leq 1 }$ is the indicator function w.r.t. the set $\{ 0 \leq u \leq 1 \}$ . Then, from (4.52) in Section 3, we have the following iterative scheme 

$$
u _ {k + 1} = \operatorname{argmin} _ {u} \quad \mu \langle \zeta (c ^ {1}, c ^ {2}), u \rangle + \mathcal {C} _ {0 \leq u \leq 1} + \frac {\nu}{2} \| W u - d _ {k} + b _ {k} \| _ {2} ^ {2}\tag{5.16}
$$

$$
d _ {k + 1} = \operatorname{argmin} _ {d} \| \lambda \cdot d \| _ {1} + \frac {\nu}{2} \| W u _ {k + 1} - d + b _ {k} \| _ {2} ^ {2}
$$

$$
b _ {k + 1} = b _ {k} + \left(W u _ {k + 1} - d _ {k + 1}\right).
$$

This, together with the optimization of $c ^ { 1 }$ and $c ^ { 2 }$ , leads to the following algorithm for (5.15): 

Algorithm 5.2. Given image $f .$ 

(1) Start with $u _ { 0 } = 0 , c ^ { 1 } = \operatorname* { m i n } f , a n d c ^ { 2 } = \operatorname* { m a x } f .$ 

(2) For a given $\alpha \in [ 0 , 1 ]$ , iterate until convergence: 

$$
u _ {k + \frac {1}{2}} = W ^ {\top} (d _ {k} - b _ {k}) - \frac {\mu}{\nu} \zeta (c _ {k} ^ {1}, c _ {k} ^ {2})
$$

$$
u _ {k + 1} = \max \{\min \{u _ {k + \frac {1}{2}}, 1 \}, 0 \}\tag{5.17}
$$

$$
d _ {k + 1} = \mathcal {T} _ {\lambda / \nu} \left(W u _ {k + 1} + b _ {k}\right)
$$

$$
b _ {k + 1} = b _ {k} + \left(W u _ {k + 1} - d _ {k + 1}\right)
$$

$$
c _ {k + 1} ^ {1} = M (f, \Omega_ {k + 1}), \quad c _ {k + 1} ^ {2} = M (f, (\Omega_ {k + 1}) ^ {c}), \quad \Omega_ {k + 1} = \{u _ {k + 1} > \alpha \},
$$

where $M ( f , \Omega )$ returns the mean value of f within domain Ω. 

(3) Let $u ^ { \star }$ be the output of step (2). Then the segmentation of f is given by $\Omega ^ { \star } : = \{ u ^ { \star } \geq \alpha \}$ 

Note that Algorithm 5.2 is very eficient. For each iteration k, the most time consuming operation is performing the fast framelet decomposition and reconstruction, which are of the same complexity as fast Fourier transform (FFT) (see Lecture 2, Section 1.4 and 3). Furthermore, numerical experiments show that we usually only need a few hundred iterations until the algorithm converges to a given tolerance. 

## 3.2. Numerical Results

In this section, we compare the frame based segmentation model (5.15) with the TV-based segmentation model [45, 12] using a 2D-slice of an MRI image and a 3D CT angiography (CTA) image. For more results of 3D CTA image segmentation, please see [71]. 

In our implementation, we adopt the stopping criterion: $\| b ^ { k + 1 } \| < 1 0 ^ { - 3 }$ . Based on this stopping criterion, the number of iterations for 2D and 3D cases varies from 100 to 500. Within each iteration, the comparably expensive operation is the framelet decomposition and reconstruction, i.e. W and $\mathbf { \bar { \boldsymbol { W } } ^ { \top } }$ . Although the complexity of applying $W$ and $W ^ { \top }$ is of the same order as FFT, by applying the fast algorithm of [65], in practice the constants really matter. We note, however, that this constant is not big, and hence the framelet decomposition and reconstruction can be done rather eficiently. For example, for a 3D image of size $5 0 \times 5 0 \times 5 0$ , the computational time for one level of framelet decomposition and reconstruction is approximately 5–6 times slower than the forward and inverse FFT. This comparison is done using MATLAB2007. Throughout this section, the parameter α in (5.17) is chosen to be 0.5, and the level of framelet decomposition L is chosen to be 1 for the 2D image and 2 for the 3D image for the best quality of segmentations. 

We will solve the TV-based model using the split Bregman algorithm as given in [95]. Basically if one replace the update for $u ^ { k + \frac { 1 } { 2 } }$ in the first line of (5.17) by 

$$
\Delta u _ {k + \frac {1}{2}} = \nabla \cdot (d _ {k} - b _ {k}) - \frac {\mu}{\nu} \zeta (c _ {k} ^ {1}, c _ {k} ^ {2}),
$$

replace all W by $\nabla$ and λ by $^ { g , }$ then we obtain the split Bregman algorithm for TVbased segmentation model (see [95] for details). Note that the Laplace equation above is solved by FFT, instead of Gauss-Seidel relaxation as proposed in [95]. 

Since the decomposition operator W for tight frames corresponds to higher order diference operators, the frame based segmentation models should be more sensitive to low contrast boundaries and yet still robust to noise. To test this, we take a clean and high contrast image (first image in Figure 4) and then lower the contrast by 80%, add blurring and noise. We use the corrupted image (second image in Figure 4) as the input for both the TV-based and the frame based segmentation models. 

In order to truly show the improvement of using tight frame systems, we pick the same set of parameters $( \mu , \nu )$ and use the same λ for both the TV-based segmentation model and the frame based segmentation models (5.15). One can see from both Figure 4 and 5 that by using tight frame systems we can capture more features from the images and obtain better segmentations, especially for low contrast and blurry images. 

## 4. Scene Reconstruction from Range Data

## 4.1. Formulation and Algorithm

For a given set of scattered sites $\{ x [ i ] \} _ { i = 1 } ^ { n } \subset \Omega \subset \mathbb { R } ^ { 2 }$ and the corresponding data $\{ f [ i ] \} _ { i = 1 } ^ { n }$ , our task is to approximate the unknown surface $f ( x )$ using $s ( x ) \in$ $S ^ { L } ( \phi , \Omega )$ by finding an appropriate vector u such that 

$$
s (x) = \sum_ {k \in \mathcal {I}} u [ k ] \phi (2 ^ {L} x - k),
$$

where $\phi$ is the 2D tensor product of some uniform B-spline function and 

$$
\mathcal {I} := \{k \in \mathbb {Z} ^ {2}: \operatorname{supp} \phi (2 ^ {L} \cdot - k) \cap \Omega \neq \emptyset \}.
$$

Since the function $f$ that we want to recover can be sparsely approximated by tight frame systems, the desired u can be obtained by solving the following problem 

$$
\min _ {\boldsymbol {u}} \frac {1}{2} \| A \boldsymbol {u} - \boldsymbol {f} \| _ {2} ^ {2} + \| \mathrm{diag} (\lambda) W \boldsymbol {u} \| _ {1},\tag{5.18}
$$

where 

$$
A (i, k) = \phi (2 ^ {L} x [ i ] - k), \quad i = 1, 2, \dots , n, k \in \mathcal {I}.
$$

The matrix $W$ is the fast wavelet frame transform associated with the bivariate B-spline tight frame. Note that $W \pmb { u }$ is the canonical frame coeficient sequence of $s ( x )$ , hence the regularization term $\| \mathrm { d i a g } ( \lambda ) W \pmb { u } \| _ { 1 }$ penalizes the roughness of the fitting function $s ( x )$ , and also encourages preserving sharp edges as it is biased toward sparse solutions of $s ( x )$ . We note that the matrix W is constructed via the Neumann boundary condition, which implies that the symmetric boundary condition is used to extend u across the boundaries of Ω. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/331a445c5ae10d43aa9e1875d155664dbcafa10619f147b56994aab6aad4f011.jpg)



Figure 4. Comparisons of TV-based segmentation model with frame based segmentation model (5.15). First row: images from left to right are: original image; observed low contrast blurry image; segmentation results of the TV-based (blue) and the frame based (red) segmentations. Second row: zoom-in views of segmentation results. The set of parameters used is $\left( \mu , \nu \right) = \left( 5 0 0 , 5 \right)$


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/7ef92ee6e187dc67783c0c4073fdf29a03818eec30fb2b4d235684c6995c542a.jpg)



Figure 5. First row: comparisons of TV-based segmentation model (left) with frame based segmentation model (5.15) (right). Second row: axial, sagittal and coronal views of the results of the TV-based (blue) and the frame based (red) segmentation. The set of parameters used is $( \mu , \nu ) = ( 1 0 0 , 0 . 5 )$ .


The key part of the scene reconstruction model is to solve (5.18) eficiently, which can be achieved using split Bregman algorithm given in Section 3 of Lecture 4. For the readers’ convenience, we recall the algorithm for problem (5.18). Given initializations ${ \pmb u } ^ { 0 } = 0 , { \pmb d } ^ { 0 } = { \pmb b } ^ { 0 } = 0$ , iterate the following steps until convergence 

$$
\begin{array}{l} \boldsymbol {u} _ {k + 1} = (A ^ {\top} A + \mu I) ^ {- 1} (A ^ {\top} \boldsymbol {f} + \mu W (\boldsymbol {d} _ {k} - \boldsymbol {b} _ {k})), \\ \boldsymbol {d} _ {k + 1} = \mathcal {T} _ {\lambda / \mu} (W \boldsymbol {u} _ {k + 1} + \boldsymbol {b} _ {k}), \\ \boldsymbol {b} _ {k + 1} = \boldsymbol {b} _ {k} + \delta (W \boldsymbol {u} _ {k + 1} - \boldsymbol {d} _ {k + 1}). \end{array}\tag{5.19}
$$

The stopping criterion for the iteration (5.19) is chosen as $\| d _ { k } - W u _ { k } \| \leq \epsilon$ with  being some given tolerance. One aspect of split Bregman iteration that contributes to its eficiency is that it is unnecessary to exactly solve the first equation of (5.19). Therefore, we approximate the solution ${ \pmb u } _ { k + 1 }$ of the first equation of (5.19) by a few steps of the conjugate gradient method. 

In practice, there are usually a lot of outliers in the observed data (See e.g. [177]) and it is well-known that an $\ell _ { 2 }$ fidelity term is very sensitive to outliers. When there are outliers in the data, we use the $\ell _ { 1 }$ fidelity term instead: 

$$
\min _ {\boldsymbol {u}} \| A \boldsymbol {u} - \boldsymbol {f} \| _ {1} + \| \operatorname{diag} (\lambda) W \boldsymbol {u} \| _ {1},\tag{5.20}
$$

The implications of the $\ell _ { 1 }$ data fidelity term have been well studied in the literature (e.g. [120, 111, 39, 144]). In particular, [144] justified the use of the $\ell _ { 1 }$ data fitting term for processing data corrupted with outliers in both theoretical analysis and numerical experiments. 

In terms of Bayesian statistical estimation (see e.g. [8, 111]), the models (5.18) and (5.20) can be interpreted as the maximization of a posteriori estimator: 

$$
\max _ {\boldsymbol {u}} \operatorname{Exp} \left(- \frac {1}{p} \| A \boldsymbol {u} - \boldsymbol {f} \| _ {p} ^ {p}\right) \operatorname{Exp} \left(- \| \operatorname{diag} (\lambda) W \boldsymbol {u} \| _ {1}\right),\tag{5.21}
$$

where the first factor is the likelihood that models the noise, and the second factor is the prior of u. The prior is usually chosen based on the a priori knowledge we have for the unknown u. For example, we know that the surface we need to recover from range image data is piecewise smooth and hence can be sparsely approximated by tight wavelet frames. Therefore, the prior given by (5.21) is reasonable. As for the likelihood, when the noise $\pmb { \eta } : = A \pmb { u } - f$ is i.i.d. Gaussian with zero mean, one should use $p = 2$ in order to obtain a statistically correct likelihood. When the noise η is impulsive noise, i.e. outliers, one may choose $p = 1$ , because impulsive noise is sparse and can be well modeled by the $\ell _ { 1 } .$ -norm (i.e. we believe that outliers are i.i.d. Laplace distribution). Notice that for $0 < p < 1$ , the objective function of (5.21) is not concave. Therefore, although the $\ell _ { p } .$ -norm with $0 < p < 1$ may model impulsive noise better than the $\ell _ { 1 } .$ -norm, we usually use the $\ell _ { 1 } \cdot$ -norm in practice for computational concerns. 

In contrast to the $\ell _ { 2 }$ fitting term, the $\ell _ { 1 }$ fitting term is not smooth. In our numerical simulations, we approximate the non-diferentiable $\ell _ { 1 }$ fitting term by a 

smoothed version 

$$
\sum_ {i = 1} ^ {n} \sqrt {(A \boldsymbol {u} [ i ] - \boldsymbol {f} [ i ]) ^ {2} + s}\tag{5.22}
$$

to approximate $\| A \pmb { u } - \pmb { f } \| _ { 1 }$ , where s is a small positive number. 

To solve the <sub>1</sub>-norm fidelity model (5.20), we again use the split Bregman algorithm. Given initializations ${ \pmb u } ^ { 0 } = 0 , \pmb d ^ { 0 } = { \pmb b } ^ { 0 } = 0 .$ , iterate the following steps until convergence 

$$
\begin{array}{l} \boldsymbol {u} _ {k + 1} = \underset {\boldsymbol {u}} {\arg \min} \sum_ {i = 1} ^ {n} \sqrt {(A \boldsymbol {u} [ i ] - \boldsymbol {f} [ i ]) ^ {2} + s} + \frac {\mu}{2} \| W \boldsymbol {u} - \boldsymbol {d} ^ {k} + \boldsymbol {b} ^ {k} \| _ {2} ^ {2}, \\ \boldsymbol {d} _ {k + 1} = \mathcal {T} _ {\lambda / \mu} (W \boldsymbol {u} _ {k + 1} + \boldsymbol {b} _ {k}), \\ \boldsymbol {b} _ {k + 1} = \boldsymbol {b} _ {k} + \delta (W \boldsymbol {u} _ {k + 1} - \boldsymbol {d} _ {k + 1}). \end{array}\tag{5.23}
$$

For the first minimization subproblem of (5.23), since its objective functional is diferentiable, it can be solved by the standard gradient descent method. One of the merits of the split Bregman algorithm that contributes to its eficiency is that it is unnecessary to solve the first subproblem of (5.23) to the full convergence. Instead, only a small number of inner iterations will be adequate at each split Bregman algorithm. 

We remark that although we are using a smoothed version of the $\ell _ { 1 }$ data fidelity term in the above robust algorithm (5.23), the split Bregman algorithm actually can also be used to minimize an energy functional with both an $\ell _ { 1 }$ data fidelity term and an $\ell _ { 1 }$ regularization term without any smoothing (e.g. L1-TV minimization problem). Interested readers are referred to [73, 85] for more details. 

## 4.2. Numerical experiments

The main purpose of this section is to briefly evaluate the performance of the tight frame based model (5.18) and (5.20) on reconstructing a piecewise smooth surface from sparse range data corrupted by Gaussian or impulse noise. More experiments and comparisons with some other existing methods can be found in [112]. Range image data are obtained from OSU (MSU/WSU) Range Image Database (http://sampl.ece.ohio-state.edu/data/3DDB/RID/index.htm). Figure 6 and 7 contain the reconstruction results of two scenes, where noise that is added to the original data is Gaussian and impulse plus small Gaussian noise respectively. Note that the input range data are scattered point sets, which are visualized as surfaces. 

![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/df0709277dc967f1d229ba17a41aa4ab4965dcc101e6fd318c8377cf579f9d00.jpg)



Figure 6. Reconstruction of scenes from range image data corrupted by Gaussian noise.


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/392e4da2c67edf803298c5772ff4005487c46b23f9ef48d5eed604d3e02824fe.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/0e3d51890f5e0c0a1650f196a4002b4290693d979b1b581e18d948771b2c1bd8.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/562bbcc8e00039ebfcec868f8fe065cdda137858e4438c754327cee5ff33f063.jpg)


![image](https://cdn-mineru.openxlab.org.cn/result/2026-08-19/11763e96-eacb-4991-a2e3-ab2faa94efb2/e45e19f5186163d7cc8d184ef516524b7263686379a06e48064117c3a2abe134.jpg)



Figure 7. Reconstruction of scenes from range image data corrupted by impulse noise.




1. S. Arivazhagan and L. Ganesan, Texture segmentation using wavelet transform, Pattern Recognition Letters 24 (2003), no. 16, 3197–3203. 





2. L. Bar, B. Berkels, M. Rumpf, and G. Sapiro, A variational framework for simultaneous motion estimation and restoration of motion-blurred video, International Conference on Computer Vision, 1–8, 2007. 





3. B. Bascle, A. Blake, and A. Zisserman, Motion deblurring and super-resolution from an image sequence, Computer VisionECCV’96 (1996), 571–582. 





4. A. Beck and M. Teboulle, A fast iterative shrinkage-thresholding algorithm for linear inverse problems, SIAM Journal on Imaging Sciences 2 (2009), no. 1, 183–202. 





5. M. Ben-Ezra and S.K. Nayar, Motion-based motion deblurring, IEEE Transactions on Pattern Analysis and Machine Intelligence 26 (2004), no. 6, 689. 





6. J.J. Benedetto and S. Li, The Theory of Multiresolution Analysis Frames and Applications to Filter Banks, Applied and Computational Harmonic Analysis 5 (1998), no. 4, 389–427. 





7. M. Bertalmio, G. Sapiro, V. Caselles, and C. Ballester, Image inpainting, Proceedings of the 27th annual conference on Computer graphics and interactive techniques, ACM Press/Addison-Wesley Publishing Co., 2000, pp. 417–424. 





8. J. Besag, Towards Bayesian image analysis, Journal of Applied Statistics 20 (1993), no. 5, 107–119. 





9. L. Borup, R. Gribonval, and M. Nielsen, Bi-framelet systems with few vanishing moments characterize Besov spaces* 1, Applied and Computational Harmonic Analysis 17 (2004), no. 1, 3–28. 





10. , Tight wavelet frames in lebesque and sobolev spaces, Journal of Function Spaces and Applications 2 (2004), no. 3, 227–252. 





11. S.P. Boyd and L. Vandenberghe, Convex optimization, Cambridge Univ Pr, 2004. 





12. X. Bresson, S. Esedoglu, P. Vandergheynst, J.P. Thiran, and S. Osher, Fast global minimization of the active contour/snake model, Journal of Mathematical Imaging and Vision 28 (2007), no. 2, 151–167. 





13. J.F. Cai, E.J. Cand`es, and Z. Shen, A Singular Value Thresholding Algorithm for Matrix Completion, SIAM Journal on Optimization 20(4) (2010), 1956–1982. 





14. J.F. Cai, R. Chan, L. Shen, and Z. Shen, Restoration of chopped and nodded images by framelets, SIAM J. Sci. Comput 30 (2008), no. 3, 1205–1227. 





15. J.F. Cai, R.H. Chan, L. Shen, and Z. Shen, Convergence analysis of tight framelet approach for missing data recovery, Advances in Computational Mathematics (2008), 1–27. 





16. J.F. Cai, R.H. Chan, and Z. Shen, A framelet-based image inpainting algorithm, Applied and Computational Harmonic Analysis 24 (2008), no. 2, 131–149. 





17. , Simultaneous cartoon and texture inpainting, Inverse Problems and Imaging (IPI) 4 (2010), no. 3, 379–395. 





18. J.F. Cai, H. Ji, C. Liu, and Z. Shen, Blind motion deblurring from a single image using sparse approximation, Computer Vision and Pattern Recognition, 2009. CVPR 2009. IEEE Conference on, IEEE, 2009, pp. 104–111. 





19. , Blind motion deblurring using multiple images, Journal of Computational Physics 228 (2009), no. 14, 5057–5071. 





20. , High-quality curvelet-based motion deblurring from an image pair, Computer Vision and Pattern Recognition, 2009. CVPR 2009. IEEE Conference on, IEEE, 2009, pp. 1566– 1573. 





21. J.F. Cai, S. Osher, and Z. Shen, Convergence of the linearized Bregman iteration for <sub>1</sub>-norm minimization, Mathematics of Computation 78 (2009), 2127–2136. 





22. , Linearized Bregman iterations for compressed sensing, Math. Comp 78 (2009), 1515–1536. 





23. , Linearized Bregman iterations for frame-based image deblurring, SIAM J. Imaging Sci 2 (2009), no. 1, 226–252. 





24. , Split Bregman methods and frame based image restoration, Multiscale Modeling and Simulation: A SIAM Interdisciplinary Journal 8 (2009), no. 2, 337–369. 





25. J.F. Cai and Z. Shen, Framelet based deconvolution, J. Comp. Math 28 (2010), no. 3, 289– 308. 





26. E.J. Candes and D.L. Donoho, New tight frames of curvelets and optimal representations of objects with C2 singularities, Comm. Pure Appl. Math 56 (2004), 219–266. 





27. , Continuous curvelet transform:: II. Discretization and frames, Applied and Computational Harmonic Analysis 19 (2005), no. 2, 198–222. 





28. Vicent Caselles, R Kimmel, and G Sapiro, Geodesic active contours, Int J Comput Vision 22 (1997), no. 1, 61–79 (English). 





29. A.S. Cavaretta, W. Dahmen, and C.A. Micchelli, Stationary subdivision, Amer Mathematical Society, 1991. 





30. A.E. Cetin, Reconstruction of signals from Fourier transform samples, Signal Processing 16 (1989), no. 2, 129–148. 





31. AE Cetin, An iterative algorithm for signal reconstruction from bispectrum, IEEE Transactions on Signal Processing 39 (1991), no. 12, 2621–2628. 





32. A. Chai and Z. Shen, Deconvolution: A wavelet frame approach, Numerische Mathematik 106 (2007), no. 4, 529–587. 





33. A. Chambolle, An algorithm for total variation minimization and applications, Journal of Mathematical Imaging and Vision 20 (2004), no. 1, 89–97. 





34. R.H. Chan, T.F. Chan, L. Shen, and Z. Shen, Wavelet algorithms for high-resolution image reconstruction, SIAM Journal on Scientific Computing 24 (2003), no. 4, 1408–1432. 





35. R.H. Chan, S.D. Riemenschneider, L. Shen, and Z. Shen, High-resolution image reconstruction with displacement errors: A framelet approach, International Journal of Imaging Systems and Technology 14 (2004), no. 3, 91–104. 





36. , Tight frame: an eficient way for high-resolution image reconstruction, Applied and Computational Harmonic Analysis 17 (2004), no. 1, 91–115. 





37. R.H. Chan, L. Shen, and Z. Shen, A framelet-based approach for image inpainting, Research Report 4 (2005), 325. 





38. R.H. Chan, Z. Shen, and T. Xia, A framelet algorithm for enhancing video stills, Applied and Computational Harmonic Analysis 23 (2007), no. 2, 153–170. 





39. T.F. Chan and S. Esedoglu, Aspects of Total Variation Regularized L’Function Approximation, SIAM Journal on Applied Mathematics 65 (2005), no. 5, 1817. 





40. T.F. Chan, G.H. Golub, and P. Mulet, A nonlinear primal-dual method for total variationbased image restoration, SIAM Journal on Scientific Computing 20 (1999), no. 6, 1964–1977. 





41. T.F. Chan and J. Shen, Image processing and analysis: variational, pde, wavelet, and stochastic methods, Society for Industrial Mathematics, 2005. 





42. , Variational image inpainting, Commun. Pure Appl. Math 58 (2005), 579–619. 





43. T.F. Chan and L.A. Vese, Active contours without edges, IEEE Transactions on image processing 10 (2001), no. 2, 266–277. 





44. T.F. Chan and C.K. Wong, Total variation blind deconvolution, IEEE Transactions on Image Processing 7 (1998), no. 3, 370–375. 





45. Tony F Chan, Selim Esedoglu, and Mila Nikolova, Algorithms for finding global minimizers of image segmentation and denoising models, Siam J Appl Math 66 (2006), no. 5, 1632–1648 (English). 





46. J. Chen, L. Yuan, C.K. Tang, and L. Quan, Robust dual motion deblurring, Proc. Conf. Comp. Vision and Pattern Recognition, 2008, pp. 1–8. 





47. S.S. Chen, D.L. Donoho, and M.A. Saunders, Atomic decomposition by basis pursuit, SIAM review (2001), 129–159. 





48. Y. Chen, H.D. Tagare, S. Thiruvenkadam, F. Huang, D. Wilson, K.S. Gopinath, R.W. Briggs, and E.A. Geiser, Using prior shapes in geometric active contours in a variational framework, International Journal of Computer Vision 50 (2002), no. 3, 315–328. 





49. S. Cho, Y. Matsushita, S. Lee, and P. POSTECH, Removing non-uniform motion blur from images, IEEE 11th International Conference on Computer Vision, 2007. ICCV 2007, 2007, pp. 1–8. 





50. O. Christensen, Frames and bases: An introductory course, Birkhauser, 2008. 





51. C.K. Chui and W. He, Compactly supported tight frames associated with refinable functions, Applied and Computational Harmonic Analysis 8 (2000), no. 3, 293–319. 





52. C.K. Chui, W. He, and J. St¨ockler, Compactly supported tight and sibling frames with maximum vanishing moments, Applied and computational harmonic analysis 13 (2002), no. 3, 224–262. 





53. A. Cohen, Biorthogonal wavelets, Wavelets: A Tutorial in Theory and Applications, Academic Press Professional, Inc., 1993, pp. 123–152. 





54. A. Cohen and J.P. Conze, R´egularit´e des bases dondelettes et mesures ergodiques, Rev. Mat. Iberoamericana 8 (1992), no. 3, 351–365. 





55. A. Cohen and I. Daubechies, A stability criterion for biorthogonal wavelet bases and their related subband coding scheme, Duke Math. J 68 (1992), no. 2, 313–335. 





56. A. Cohen, I. Daubechies, and J.C. Feauveau, Biorthogonal Bases of Compactly Supported Wavelets, Communications on Pure and Applied Mathematics 45 (1992), no. 5, 485–560. 





57. R.R. Coifman and D.L. Donoho, Translation-invariant de-noising, Lecture Notes in Statistics-New York-Springer Verlag (1995), 125–125. 





58. P.L. Combettes and V.R. Wajs, Signal recovery by proximal forward-backward splitting, Multiscale Modeling and Simulation 4 (2006), no. 4, 1168–1200. 





59. J. Darbon and S. Osher, Fast discrete optimizations for sparse approximations and deconvolutions, preprint 2007. 





60. I. Daubechies, Orthonormal bases of compactly supported wavelets, Commun. Pure Appl. Math. 41 (1988), no. 7, 909–996. 





61. , Ten lectures on wavelets, vol. CBMS-NSF Lecture Notes, SIAM, nr. 61, Society for Industrial Mathematics, 1992. 





62. I. Daubechies, M. Defrise, and C. De Mol, An iterative thresholding algorithm for linear inverse problems with a sparsity constraint, Communications on pure and applied mathematics 57 (2004), no. 11, 1413–1457. 





63. I. Daubechies, A. Grossmann, and Y. Meyer, Painless nonorthogonal expansions, Journal of Mathematical Physics 27 (1986), 1271. 





64. I. Daubechies and B. Han, Pairs of dual wavelet frames from any two refinable functions, Constructive approximation 20 (2004), no. 3, 325–352. 





65. I. Daubechies, B. Han, A. Ron, and Z. Shen, Framelets: Mra-based constructions of wavelet frames, Applied and Computational Harmonic Analysis 14 (2003), no. 1, 1–46 (English). 





66. I. Daubechies, G. Teschke, and L. Vese, Iteratively solving linear inverse problems under general convex constraints, Inverse Problems and Imaging 1 (2007), no. 1, 29. 





67. C. De Boor, A practical guide to splines, Springer Verlag, 2001. 





68. C. De Boor, R.A. DeVore, and A. Ron, On the construction of multivariate (pre) wavelets, Constructive approximation 9 (1993), no. 2, 123–166. 





69. , Approximation from shift-invariant subspaces of $L _ { 2 } ( \mathbb { R } ^ { d } )$ , Transactions of the American Mathematical Society 341 (1994), no. 2, 787–806. 





70. , The structure of finitely generated shift-invariant spaces in L<sub>2</sub>(R<sup>d</sup>), J. Funct. Anal 119 (1994), no. 1, 37–78. 





71. B. Dong, A. Chien, and Z. Shen, Frame based segmentation for medical images, Communications in Mathematical Sciences 9 (2011), no. 2, 551–559. 





72. B. Dong, N. Dyn, and K. Hormann, Properties of dual pseudo-splines, Applied and Computational Harmonic Analysis 29 (2010), no. 1, 104–110. 





73. B. Dong, E. Savitsky, and S. Osher, A Novel Method for Enhanced Needle Localization Using Ultrasound-Guidance, Advances in Visual Computing (2009), 914–923. 





74. B. Dong and Z. Shen, Linear independence of pseudo-splines, Proceedings of the American Mathematical Society 134 (2006), no. 9, 2685–2694. 





75. , Pseudo-splines, wavelets and framelets, Applied and Computational Harmonic Analysis 22 (2007), no. 1, 78–104. 





76. D.L. Donoho, Interpolating wavelet transforms, Preprint, Department of Statistics, Stanford University (1992). 





77. , De-noising by soft-thresholding, IEEE transactions on information theory 41 (1995), no. 3, 613–627. 





78. , Ridge Functions and Orthonormal Ridgelets, Journal of Approximation Theory 111 (2001), no. 2, 143–179. 





79. S. Dubuc, Interpolation through an iterative scheme, Journal of mathematical analysis and applications 114 (1986), no. 1, 185–204. 





80. R.J. Dufin and A.C. Schaefer, A class of nonharmonic Fourier series, Transactions of the American Mathematical Society 72 (1952), no. 2, 341–366. 





81. N. Dyn, K. Hormann, M.A. Sabin, and Z. Shen, Polynomial reproduction by symmetric subdivision schemes, Journal of Approximation Theory 155 (2008), no. 1, 28–42. 





82. I. Ekeland and R. Temam, Convex analysis and variational problems, Society for Industrial Mathematics, 1999. 





83. M. Elad, P. Milanfar, and R. Rubinstein, Analysis versus synthesis in signal priors, Inverse Problems 23 (2007), 947. 





84. M. Elad, J.L. Starck, P. Querre, and D.L. Donoho, Simultaneous cartoon and texture image inpainting using morphological component analysis (MCA), Applied and Computational Harmonic Analysis 19 (2005), no. 3, 340–358. 





85. E. Esser, Applications of lagrangian-based alternating direction methods and connections to split bregman, CAM report 9 (2009), 31. 





86. M.J. Fadili and J.L. Starck, Sparse representations and bayesian image inpainting, Proc. SPARS 5 (2005). 





87. MJ Fadili, J.L. Starck, and F. Murtagh, Inpainting and zooming using sparse representations, The Computer Journal 52 (2009), no. 1, 64. 





88. W. Feller, An introduction to probability theory and its applications. Vol. 1, Wiley New York, 1968. 





89. R. Fergus, B. Singh, A. Hertzmann, S.T. Roweis, and W.T. Freeman, Removing camera shake from a single photograph, ACM Transactions on Graphics (TOG) 25 (2006), no. 3, 787–794. 





90. M.A.T. Figueiredo and R.D. Nowak, An EM algorithm for wavelet-based image restoration, IEEE Transactions on Image Processing 12 (2003), no. 8, 906–916. 





91. , A bound optimization approach to wavelet-based image deconvolution, Image Processing, 2005. ICIP 2005. IEEE International Conference on, vol. 2, IEEE, 2005, pp. II–782. 





92. N. Flasque, M. Desvignes, J.M. Constans, and M. Revenu, Acquisition, segmentation and tracking of the cerebral vascular tree on 3D magnetic resonance angiography images, Medical Image Analysis 5 (2001), no. 3, 173–183. 





93. M. Frazier, G. Garrig´os, K. Wang, and G. Weiss, A characterization of functions that generate wavelet and related expansion, Journal of Fourier Analysis and Applications 3 (1997), 883–906. 





94. R. Glowinski and P. Le Tallec, Augmented Lagrangian and operator-splitting methods in nonlinear mechanics, Society for Industrial Mathematics, 1989. 





95. T. Goldstein, X. Bresson, and S. Osher, Geometric Applications of the Split Bregman Method: Segmentation and Surface Reconstruction, UCLA CAM Report (2009), 09–06 





96. T. Goldstein and S. Osher, The split Bregman algorithm for L1 regularized problems, SIAM Journal on Imaging Sciences 2 (2009), no. 2, 323–343. 





97. R. Gribonval and M. Nielsen, On approximation with spline generated framelets, Constructive Approximation 20 (2004), no. 2, 207–232. 





98. G. Gripenberg, A necessary and suficient condition for the existence of a father wavelet, Studia Math 114 (1995), no. 3, 207–226. 





99. K. Gr¨ochenig, Foundations of time-frequency analysis, Birkhauser, 2001. 





100. M. Gross and H. Pfister, Point-based graphics, Morgan Kaufmann Pub, 2007. 





101. B. Han, On Dual Wavelet Tight Frames, Applied and Computational Harmonic Analysis 4 (1997), no. 4, 380–413. 





102. B. Han, G. Kutyniok, and Z. Shen, A Unitary Extension Principle for Shearlet Systems, Arxiv preprint arXiv:0912.4529 (2009). 





103. B. Han and Z. Shen, Wavelets with short support, SIAM Journal on Mathematical Analysis 38 (2007), no. 2, 530–556. 





104. Compactly supported symmetric C wavelets with spectral approximation order, SIAM J. Math. Anal 40 (2008), 905–938. 





105. , Characterization of Sobolev spaces of arbitrary smoothness using nonstationary tight wavelet frames, Israel Journal of Mathematics 172 (2009), no. 1, 371–398. 





106. , Dual wavelet frames and Riesz bases in Sobolev spaces, Constructive Approximation 29 (2009), no. 3, 369–406. 





107. X. He, L. Shen, and Z. Shen, A data-adaptive knot selection scheme for fitting splines, IEEE Signal Processing Letters 8 (2001), no. 5, 137. 





108. E. Hern´andez and G. Weiss, A first course on wavelets, Studies in Advanced Mathematics, CRC Press, 1996. 





109. J.B. Hiriart-Urruty and C. Lemar´echal, Convex analysis and minimization algorithms: Fundamentals, Springer, 1993. 





110. Y. Hur and A. Ron, CAPlets: wavelet representations without wavelets, preprint (2005). 





111. A. Hyv¨arinen, J. Hurri, and P.O. Hoyer, Natural Image Statistics: A Probabilistic Approach to Early Computational Vision, Springer-Verlag New York Inc, 2009. 





112. H. Ji, Z. Shen, and Y. Xu, Wavelet frame based scene reconstruction from range data, Journal of Computational Physics 229 (2010), no. 6, 2093–2108. 





113. J. Jia, Single image motion deblurring using transparency, IEEE Conference on Computer Vision and Pattern Recognition, 2007. CVPR’07, 2007, pp. 1–8. 





114. R.Q. Jia and C.A. Micchelli, Using the refinement equations for the construction of prewavelets II: Powers of two, Curves and surfaces (1991), 209–246. 





115. R.Q. Jia and Z. Shen, Multiresolution and wavelets, Proc. Edinb. Math. Soc., II. Ser. 37 (1994), no. 2, 271–300. 





116. Q. Jiang and Z. Shen, On existence and weak stability of matrix refinable functions, Constructive Approximation 15 (1999), no. 3, 337–353. 





117. M.J. Johnson, Scattered Date Interpolation from Principal Shift-Invariant Spaces, Journa of Approximation Theory 113 (2001), no. 2, 172–188. 





118. M.J. Johnson, Z. Shen, and Y. Xu, Scattered data reconstruction by regularization in Bspline and associated wavelet spaces, Journal of Approximation Theory 159 (2009), no. 2, 197–223. 





119. N. Joshi, R. Szeliski, and D.J. Kriegman, PSF estimation using sharp edge prediction, IEEE Conference on Computer Vision and Pattern Recognition, 2008. CVPR 2008, 2008, pp. 1–8. 





120. S.A. Kassam and J.B. Thomas, Signal detection in non-Gaussian noise, Springer-Verlag New York, NY, 1988. 





121. A. Khodakovsky, P. Schr¨oder, and W. Sweldens, Progressive geometry compression, Proceedings of the 27th annual conference on Computer graphics and interactive techniques, Citeseer, 2000, pp. 271–278. 





122. C. Kirbas and F. Quek, A review of vessel extraction techniques and algorithms, ACM Computing Surveys 36 (2004), no. 2, 81–121. 





123. G. Kutyniok and D. Labate, Resolution of the wavefront set using continuous shearlets, AMERICAN MATHEMATICAL SOCIETY 361 (2009), no. 5, 2719–2754. 





124. W.M. Lawton, Tight frames of compactly supported afine wavelets, Journal of Mathematical Physics 31 (1990), 1898. 





125. W.M. Lawton, S.L. Lee, and Z. Shen, Convergence of multidimensional cascade algorithm, Numerische Mathematik 78 (1998), no. 3, 427–438. 





126. M. Leventon, W.E.L. Grimson, and O. Faugeras, Statistical shape influence in geodesic active contours, IEEE Computer Society Conference on Computer Vision and Pattern Recognition, vol. 1, IEEE Computer Society; 1999, 2000. 





127. A. Levin, Blind motion deblurring using image statistics, Advances in Neural Information Processing Systems 19 (2007), 841. 





128. C. Li, C.Y. Kao, J.C. Gore, and Z. Ding, Minimization of region-scalable fitting energy for image segmentation, IEEE Transactions on Image Processing 17 (2008), no. 10, 1940–1949. 





129. M. Li, B. Hao, and X.C. Feng, Iterative regularization and nonlinear inverse scale space based on translation invariant wavelet shrinkage, INTERNATIONAL JOURNAL OF WAVELETS MULTIRESOLUTION AND INFORMATION PROCESSING 6 (2008), no. 1, 83. 





130. C.G. Looney, Convergence of minimizing sequences, Journal of Mathematical Analysis and Applications 61 (1977), no. 3, 835–840. 





131. S.G. Mallat, Multiresolution approximations and wavelet orthonormal bases of L 2 (R), Transactions of the American Mathematical Society 315 (1989), no. 1, 69–87. 





132. , A wavelet tour of signal processing, vol. 2nd ed. New York: Academic, Academic press, 1999. 





133. T. McInerney and D. Terzopoulos, Deformable models in medical image analysis: a survey, Medical image analysis 1 (1996), no. 2, 91–108. 





134. Y. Meyer, Wavelets and operators. Translated by DH Salinger, Cambridge Studies in Advanced Mathematics, 1992. 





135. , Oscillating patterns in image processing and nonlinear evolution equations: the fifteenth Dean Jacqueline B. Lewis memorial lectures, Amer Mathematical Society, 2001. 





136. Q. Mo, Y. Shen, and S. Li, A new proof of some polynomial inequalities related to pseudosplines, Applied and Computational Harmonic Analysis 23 (2007), no. 3, 415–418. 





137. J.J. Moreau, Fonctions convexes duales et points proximaux dans un espace hilbertien, CR Acad. Sci. Paris S´er. A Math 255 (1962), 2897–2899. 





138. , Proximit´e et dualit´e dans un espace hilbertien, Bull. Soc. Math. France 93 (1965), no. 2, 273–299. 





139. D. Nain, A. Yezzi, and G. Turk, Vessel segmentation using a shape driven flow, Lecture Notes in Computer Science (2004), 51–59. 





140. A.S. Nemirovskij and D.B. Yudin, Problem complexity and method eficiency in optimization. transl. from the russian by er dawson, Wiley-Interscience Series in Discrete Mathematics, 1983. 





141. Y. Nesterov, A method of solving a convex programming problem with convergence rate o(1/k<sup>2</sup>), Soviet Mathematics Doklady, vol. 27, 1983, pp. 372–376. 





142. , On an approach to the construction of optimal methods for minimizing smooth convex functions, Ehkon. Mat. Metody 24 (1988), no. 3, 509–517. 





143. , Smooth minimization of non-smooth functions, Mathematical Programming 103 (2005), no. 1, 127–152. 





144. M. Nikolova, A variational approach to remove outliers and impulse noise, Journal of Mathematical Imaging and Vision 20 (2004), no. 1, 99–120. 





145. S. Osher, M. Burger, D. Goldfarb, J. Xu, and W. Yin, An iterative regularization method for total variation based image restoration, Multiscale Model. Simul 4 (2005), no. 2, 460–489. 





146. S. Osher and R.P. Fedkiw, Level set methods and dynamic implicit surfaces, Springer, 2003. 





147. S. Osher, Y. Mao, B. Dong, and W. Yin, Fast linearized bregman iteration for compressive sensing and sparse denoising, Communications in Mathematical Sciences 8 (2010), no. 2, 93–111. 





148. S. Osher and J. Sethian, Fronts propagating with curvature-dependent speed- Algorithms based on Hamilton-Jacobi formulations, Journal of Computational Physics 79 (1988), 12– 49. 





149. G. Pavlovic and AM Tekalp, Maximum likelihood parametric blur identification based on acontinuous spatial domain model, IEEE Transactions on image processing 1 (1992), no. 4, 496–504. 





150. S.M. Pizer, P.T. Fletcher, S. Joshi, A. Thall, J.Z. Chen, Y. Fridman, D.S. Fritsch, A.G. Gash, J.M. Glotzer, M.R. Jiroutek, et al., Deformable m-reps for 3d medical image segmentation, International Journal of Computer Vision 55 (2003), no. 2, 85–106. 





151. E. Polak, Computational methods in optimization, Academic Press New York, 1971. 





152. G. P´olya and G. Szeg¨o, Aufgaben und Lehrs¨atze aus der Analysis, Springer, 1971. 





153. R. Raskar, A. Agrawal, and J. Tumblin, Coded exposure photography: motion deblurring using fluttered shutter, ACM Transactions on Graphics (TOG) 25 (2006), no. 3, 795–804. 





154. R.T. Rockafellar and J.B.W. Roger, Variational analysis, Springer Verlag, 1997. 





155. A. Ron, Factorization theorems for univariate splines on regular grids, Israel Journal of Mathematics 70 (1990), no. 1, 48–68. 





156. A. Ron and Z. Shen, Frames and Stable Bases for Shift-Invariant Subspaces of L<sub>2</sub>(R<sup>d</sup>), Canadian Journal of Mathematics 47 (1995), no. 5, 1051–1094. 





157. , Afine systems in L<sub>2</sub>(R<sup>d</sup>) II: dual systems, Journal of Fourier Analysis and Applications 3 (1997), no. 5, 617–638. 





158. , Afine Systems in L (R<sup>d</sup>): The Analysis of the Analysis Operator, Journal of Functional Analysis 148 (1997), no. 2, 408–447. 





159. , Weyl-Heisenberg frames and Riesz bases in $L _ { 2 } ( \mathbb { R } ^ { d } )$ , Duke Mathematical Journal 89 (1997), no. 2, 237–282. 





160. , Compactly supported tight afine spline frames in $L _ { 2 } ( \mathbb { R } ^ { d } )$ , Mathematics of Computation 67 (1998), no. 221, 191–207. 





161. , The Sobolev regularity of refinable functions, Journal of Approximation Theory 106 (2000), 185–225. 





162. , Generalized shift-invariant systems, Constructive Approximation 22 (2005), no. 1, 1–45. 





163. W. Rudin, Real and complex analysis, Tata McGraw-Hill, 2006. 





164. G. Sapiro, Geometric partial diferential equations and image analysis, Cambridge Univ Pr, 2001. 





165. I.W. Selesnick, Smooth Wavelet Tight Frames with Zero Moments* 1, Applied and Computational Harmonic Analysis 10 (2001), no. 2, 163–181. 





166. Q. Shan, J. Jia, and A. Agarwala, High-quality motion deblurring from a single image, ACM Transactions on Graphics-TOG 27 (2008), no. 3, 73–73. 





167. Z. Shen, Wavelet frames and image restorations, Proceedings of the International Congress of Mathematicians, vol. 4, 2010, pp. 2834–2863. 





168. Z. Shen, K. C. Toh, and S. Yun, An accelerated proximal gradient algorithm for frame based image restorations via the balanced approach, SIAM Journal on Imaging Sciences 4(2) (2011), 573–596. 





169. Z. Shen and S. Waldron, Scattered data interpolation by box splines, Study in Advanced Mathematics, AMS/IP 42 (2008), no. 2, 749. 





170. J.L. Starck, M. Elad, and D.L. Donoho, Image decomposition via the combination of sparse representations and a variational approach, IEEE transactions on image processing 14 (2005), no. 10, 1570–1582. 





171. X.C. Tai and C. Wu, Augmented Lagrangian method, dual methods and split Bregman iteration for ROF model, Scale Space and Variational Methods in Computer Vision (2009), 502–513. 





172. Y.W. Tai, H. Du, MS Brown, and S. Lin, Image/video deblurring using a hybrid camera, Computer Vision and Pattern Recognition, 2008. CVPR 2008. IEEE Conference on, IEEE, 2008, pp. 1–8. 





173. K.C. Toh and S. Yun, An accelerated proximal gradient algorithm for nuclear norm regularized linear least squares problems, Pacific Journal of Optimization 6 (2010), no. 20, 615–640. 





174. A. Tsai, A. Yezzi, W. Wells, C. Tempany, D. Tucker, A. Fan, W.E. Grimson, and A. Willsky, A shape-based approach to the segmentation of medical imagery using level sets, IEEE Transactions on Medical Imaging 22 (2003), no. 2, 137–154. 





175. P. Tseng, On accelerated proximal gradient methods for convex-concave optimization, submitted to SIAM Journal on Optimization (2008). 





176. Z. Tu, K.L. Narr, P. Dollar, I. Dinov, P.M. Thompson, and A.W. Toga, Brain anatomical structure segmentation by hybrid discriminative/generative models, IEEE Transactions on Medical Imaging 27 (2008), no. 4, 495–508. 





177. M. Umasuthan and AM Wallace, Outlier removal and discontinuity preserving smoothing of rangedata, IEE Proceedings-Vision, Image and Signal Processing 143 (1996), no. 3, 191–200. 





178. M. Unser, Texture classification and segmentation using wavelet frames, IEEE Transactions on image processing 4 (1995), no. 11, 1549–1560. 





179. L.A. Vese and T.F. Chan, A multiphase level set framework for image segmentation using the Mumford and Shah model, International Journal of Computer Vision 50 (2002), no. 3, 271–293. 





180. C.R. Vogel, M.E. Oman, et al., Fast, robust total variation-based reconstruction of noisy, blurred images, IEEE Transactions on Image Processing 7 (1998), no. 6, 813–824. 





181. N. Wiener, The Fourier integral and certain of its applications, Cambridge Univ Pr, 1988. 





182. J. Xu and S. Osher, Iterative regularization and nonlinear inverse scale space applied to wavelet-based denoising, IEEE Transactions on Image Processing 16 (2007), no. 2, 534. 





183. J. Yang, L.H. Staib, and J.S. Duncan, Neighbor-constrained segmentation with 3d deformable models, LECTURE NOTES IN COMPUTER SCIENCE (2003), 198–209. 





184. W. Yin, S. Osher, D. Goldfarb, and J. Darbon, Bregman iterative algorithms for l 1- minimization with applications to compressed sensing, SIAM J. Imaging Sci 1 (2008), no. 1, 143–168. 





185. X. Zhang, M. Burger, X. Bresson, and S. Osher, Bregmanized nonlocal regularization for deconvolution and sparse reconstruction, SIAM Journal on Imaging Sciences 3 (2010), no. 3, 253–276. 

