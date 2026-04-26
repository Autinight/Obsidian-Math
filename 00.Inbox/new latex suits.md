
export default [

    // ========== 快捷输入 ==========
    {trigger: "lch", replacement: "局部紧的Hausdorff空间", options: "tA"},

    // ========== Environment ==========
    {trigger: "hrule", replacement: "\n\\hspace*{\\fill}\n\\hrule\n\\hspace*{\\fill}\n", options: "tA"},
    {trigger: "hspace", replacement: "\n\\hspace*{\\fill}\n", options: "tA"},
    {trigger: "nidt", replacement: "\\noindent", options: "tA"},

    {trigger: "bth", replacement: "> [!theorem] Theorem: $0\n> $1", options: "tA"},
    {trigger: "bqua", replacement: "\\begin{equation}\n\t\\begin{aligned}\n\t\t$0\n\t\\end{aligned}\n\\end{equation}", options: "tA"},
    {trigger: "ble", replacement: "> [!lemma] Lemma: $0\n> $1", options: "tA"},
    {trigger: "dfn", replacement: "**$0**$1", options: "tA"},
    {trigger: "fno", replacement: "\\footnote{$0}$1", options: "tA"},
    {trigger: "fnm", replacement: "\\footnotemark ", options: "tA"},
    {trigger: "fnt", replacement: "\\footnotetext{$0}$1", options: "tA"},
    {trigger: "bde", replacement: "> [!definition] Definition: $0\n> $1", options: "tA"},
    {trigger: "bex", replacement: "> [!exercise] Exercise: $0\n> $1", options: "tA"},
    {trigger: "bep", replacement: "> [!example] Example: $0\n> $1", options: "tA"},
    {trigger: "btec", replacement: "> [!technique] Technique: $0\n> $1", options: "tA"},
    {trigger: "bpb", replacement: "> [!problem] Problem: $0\n> $1", options: "tA"},
    {trigger: "bpr", replacement: "> [!proof] Proof: $0\n> $1", options: "tA"},
    {trigger: "bskp", replacement: "> [!proofsketch] Sketch of Proof: $0\n> $1", options: "tA"},
    {trigger: "bpps", replacement: "> [!proposition] Proposition: $0\n> $1", options: "tA"},
    {trigger: "bco", replacement: "> [!corollary] Corollary: $0\n> $1", options: "tA"},
    {trigger: "bso", replacement: "> [!solution] Solution: $0\n> $1", options: "tA"},
    {trigger: "bno", replacement: "> [!note] Note: $0\n> $1", options: "tA"},
    {trigger: "bre", replacement: "> [!remark] Remark: $0\n> $1", options: "tA"},

    // ========== Fraction Match ==========
    {trigger: "//", replacement: "\\frac{${0:${VISUAL}}}{$1}$2", options: "mA"},
    {trigger: /((\d+)|(\d*)(\\)?([A-Za-z!]+)((\^|_)(\{\d+\}|\d))*)\//, replacement: "\\frac{[[0]]}{$0}$1", options: "rmA"},
    // Fraction with () — 带括号的分数 (高优先级)
    {
        trigger: /(?<=\s)(\\mu|\\alpha|\\sigma|\\rho|\\beta|\\gamma|\\delta|\\zeta|\\eta|\\varepsilon|\\theta|\\iota|\\kappa|\\vartheta|\\lambda|\\nu|\\rho|\\tau|\\upsilon|\\phi|\\chi|\\psi|\\omega|\\Gamma|\\Delta|\\Theta|\\Lambda|\\Xi|\\Pi|\\Sigma|\\Upsilon|\\Phi|\\Psi|\\Omega|[A-Za-z]{1,2})?(_[A-Za-z0-9]|_\{[^}]+\})?(\^[A-Za-z0-9]|\^\{[^}]+\})?(_[A-Za-z0-9]|_\{[^}]+\})?(\([^)]+\))(_[A-Za-z0-9]|_\{[^}]+\})?(\^[A-Za-z0-9]|\^\{[^}]+\})?(_[A-Za-z0-9]|_\{[^}]+\})?\//,
        replacement: (m) => "\\frac{" + m.slice(1).join('') + "}{$0}$1",
        options: "rmA",
        priority: 200,
    },

    // ========== Hat Operation (Dynamic) ==========
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?)(vec|VE)/, replacement: "\\vec{[[0]]} ", options: "rmA"},
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?) (vec|VE)/, replacement: "\\vec{[[0]]} ", options: "rmA"},

    // Smart Bar: 多字符/大写用 \overline, 单小写用 \bar
    {trigger: /(\\?[a-zA-Z]\w*(?:\{?\w*\})?) ?bar/, replacement: (m) => {
        const s = m[1];
        return (s.length > 1 || s !== s.toLowerCase()) ? "\\overline{" + s + "}" : "\\bar{" + s + "}";
    }, options: "rmA"},

    // Smart Tilde: 多字符/大写用 \widetilde, 单小写用 \tilde
    {trigger: /(\\?[a-zA-Z]\w*(?:\{?\w*\})?) ?tld/, replacement: (m) => {
        const s = m[1];
        return (s.length > 1 || s !== s.toLowerCase()) ? "\\widetilde{" + s + "}" : "\\tilde{" + s + "}";
    }, options: "rmA"},

    // Smart Hat: 多字符/大写用 \widehat, 单小写用 \hat
    {trigger: /(\\?[a-zA-Z]\w*(?:\{?\w*\})?) ?hat/, replacement: (m) => {
        const s = m[1];
        return (s.length > 1 || s !== s.toLowerCase()) ? "\\widehat{" + s + "}" : "\\hat{" + s + "}";
    }, options: "rmA"},

    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?)(dot)/, replacement: "\\dot{[[0]]}", options: "rmA"},
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?) (dot)/, replacement: "\\dot{[[0]]}", options: "rmA"},
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?)(hdd)/, replacement: "\\ddot{[[0]]}", options: "rmA", priority: 1000},

    // ========== Hat Operation (Static) ==========
    {trigger: "udb", replacement: "\\underbrace{$0}_{$1}$2", options: "mA"},
    {trigger: "hat", replacement: "\\widehat{$0}$1", options: "mA"},
    {trigger: "sq", replacement: "\\sqrt{$0}$1", options: "mA"},

    // ========== Superscript Operation ==========
    {trigger: "inv", replacement: "^{-1} ", options: "mA"},
    {trigger: "pri", replacement: "^{\\prime} ", options: "mA"},
    {trigger: "prr", replacement: "^{\\prime \\prime} ", options: "mA", priority: 200},
    {trigger: "circ", replacement: "\\circ", options: "mA"},
    {trigger: "Rcc", replacement: "\\overset{\\scriptstyle\\circ}{Rc}", options: "mA", priority: 100},
    {trigger: "gcc", replacement: "\\overset{\\scriptstyle\\circ}{g}", options: "mA", priority: 100},
    {trigger: "R+", replacement: "R_0^+", options: "mA"},
    {trigger: "pw", replacement: "^{${0:2}}$1", options: "mA"},
    {trigger: "sr", replacement: "^{2}$0", options: "mA"},
    {trigger: "top", replacement: "^{\\top}$0", options: "mA"},
    {trigger: "perp", replacement: "^{\\perp}$0", options: "mA"},

    // ========== Subscript Operation ==========
    {trigger: "di", replacement: "_{$0}$1", options: "mA"},
    // x3 -> x_3 (auto subscript)
    {trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_[[1]]", options: "rmA"},
    // }22 -> }_2 (auto subscript after brace)
    {trigger: /(})(\d)\2/, replacement: "[[0]]_[[1]]", options: "rmA"},
    // x_34 -> x_{34} (两位数下标)
    {trigger: /([A-Za-z])_(\d{2})/, replacement: "[[0]]_{[[1]]}$0", options: "rmA", priority: 100},
    // xS3 -> x_{3...} (手动下标展开)
    {trigger: /([A-Za-z])S(\d)/, replacement: "[[0]]_{[[1]]$0}$1", options: "rmA", priority: 100},

    // ========== Greek Letter Auto Subscript ==========
    // \alpha 3 -> \alpha_3
    {
        trigger: /(\\mu |\\alpha |\\varphi |\\sigma |\\rho |\\beta |\\gamma |\\delta |\\zeta |\\eta |\\varepsilon |\\epsilon |\\theta |\\iota |\\kappa |\\vartheta |\\lambda |\\nu |\\pi |\\rho |\\tau |\\upsilon |\\phi |\\chi |\\psi |\\omega |\\Gamma |\\Delta |\\Theta |\\Lambda |\\Xi |\\Pi |\\Sigma |\\Upsilon |\\Phi |\\Psi |\\Omega )(\d)/,
        replacement: "[[0]]_[[1]]",
        options: "rmA",
        priority: 101,
    },
    // \alpha A sb -> \alpha_A
    {
        trigger: /(\\mu |\\alpha |\\sigma |\\rho |\\beta |\\gamma |\\delta |\\zeta |\\eta |\\varepsilon |\\epsilon |\\theta |\\iota |\\kappa |\\vartheta |\\lambda |\\nu |\\pi |\\rho |\\tau |\\upsilon |\\phi |\\chi |\\psi |\\omega |\\Gamma |\\Delta |\\Theta |\\Lambda |\\Xi |\\Pi |\\Sigma |\\Upsilon |\\Phi |\\Psi |\\Omega )([A-Za-z])(sb)/,
        replacement: "[[0]]_[[1]]",
        options: "rmA",
        priority: 101,
    },
    // \alpha( )3 -> \alpha_3 (带空格)
    {
        trigger: /(\\mu|\\alpha|\\sigma|\\rho|\\beta|\\gamma|\\delta|\\zeta|\\eta|\\varepsilon|\\epsilon|\\theta|\\iota|\\kappa|\\vartheta|\\lambda|\\nu|\\pi|\\rho|\\tau|\\upsilon|\\phi|\\chi|\\psi|\\omega|\\Gamma|\\Delta|\\Theta|\\Lambda|\\Xi|\\Pi|\\Sigma|\\Upsilon|\\Phi|\\Psi|\\Omega)( )(\d)/,
        replacement: "[[0]]_[[2]]",
        options: "rmA",
    },

    // ========== Font Operation (Static) ==========
    {trigger: "txt", replacement: "\\text{$0}$1", options: "mA"},
    {trigger: "over", replacement: "\\overline{$0}$1", options: "mA"},
    {trigger: "tit", replacement: "\\textit{$0}$1", options: "mA"},
    {trigger: "mcal", replacement: "\\mathcal{$0}$1", options: "m"},
    {trigger: "mbb", replacement: "\\mathbb{$0}$1", options: "mA"},
    {trigger: "mbf", replacement: "\\mathbf{$0}$1", options: "mA"},
    {trigger: "mbm", replacement: "\\mathbm{$0}$1", options: "mA"},
    {trigger: "RR", replacement: "\\mathbb{R} ", options: "mA"},
    {trigger: "NN", replacement: "\\mathbb{N} ", options: "mA"},
    {trigger: "ZZ", replacement: "\\mathbb{Z} ", options: "mA"},
    {trigger: "QQ", replacement: "\\mathbb{Q} ", options: "mA"},
    {trigger: "CC", replacement: "\\mathbb{C} ", options: "mA"},
    {trigger: "and", replacement: "&", options: "mA"},
    {trigger: "dd", replacement: "\\,d ", options: "mA", priority: 200},

    // ========== Font Operation (Dynamic) ==========
    // xbf -> \mathbf{x}
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?)(bf|BF)/, replacement: "\\mathbf{[[0]]}", options: "rmA", priority: 100},
    // xsf -> \mathsf{x}
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?)(sf)/, replacement: "\\mathsf{[[0]]}", options: "rmA", priority: 100},
    // xfrk -> \mathfrak{x}
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?)(frk)/, replacement: "\\mathfrak{[[0]]}", options: "rmA", priority: 100},
    // xcal -> \mathcal{X} (自动大写)
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?)cal/, replacement: (m) => "\\mathcal{" + m[1].toUpperCase() + "}$0", options: "rmA", priority: 100},
    // xrm -> \mathrm{x}
    {trigger: /(?<!\\)\b([a-zA-Z]+)rm/, replacement: "\\mathrm{[[0]]}", options: "rmA", priority: 100},
    // xope -> \operatorname{x}
    {trigger: /(?<!\\)\b([a-zA-Z]+)ope/, replacement: "\\operatorname{[[0]]}", options: "rmA", priority: 100},
    // xscr -> \mathscr{x}
    {trigger: /(?<!\\)\b([a-zA-Z]+)scr/, replacement: "\\mathscr{[[0]]}", options: "rmA", priority: 100},
    // xbb -> \mathbb{x}
    {trigger: /(\\?[a-zA-Z]\w*(\{?\w*\})?)bb/, replacement: "\\mathbb{[[0]]}$0", options: "rmA", priority: 200},

    // ========== Auto Symbol ==========
    {trigger: "oo", replacement: "\\infty", options: "mA"},
    {trigger: "**", replacement: "\\cdots ", options: "mA"},
    {trigger: "<>", replacement: "\\diamond ", options: "tA"},
    {trigger: "cdt", replacement: "\\cdot ", options: "mA"},
    {trigger: "vdt", replacement: "\\vdots", options: "mA"},
    {trigger: "jw", replacement: "+ ", options: "mA"},
    {trigger: "ojw", replacement: "\\oplus ", options: "mA", priority: 101},
    {trigger: "eq", replacement: "= ", options: "mA", priority: 100},
    {trigger: "wdg", replacement: "\\wedge ", options: "mA"},
    {trigger: "Wdg", replacement: "\\bigwedge ", options: "mA"},
    {trigger: "+-", replacement: "\\pm ", options: "mA"},
    {trigger: "-+", replacement: "\\mp ", options: "mA"},
    {trigger: "odot", replacement: "\\odot ", options: "mA"},
    {trigger: "xx", replacement: "\\times ", options: "mA", priority: 101},
    {trigger: "oxx", replacement: "\\otimes ", options: "mA", priority: 102},
    {trigger: "rxx", replacement: "\\rtimes ", options: "mA", priority: 102},
    {trigger: "eps", replacement: "\\epsilon ", options: "mA"},
    {trigger: "vep", replacement: "\\varepsilon ", options: "mA", priority: 100},
    {trigger: "ell", replacement: "\\ell ", options: "mA", priority: 100},
    {trigger: "log", replacement: "\\log ", options: "mA", priority: 100},
    {trigger: "star", replacement: "^{*}", options: "mA"},
    {trigger: "ppar", replacement: "\\partial ", options: "mA"},
    {trigger: "sih", replacement: "\\sinh ", options: "mA"},
    {trigger: "binom", replacement: "\\binom{ $0 }{ $1 } $2", options: "mA"},

    // Auto backslash: int/iint/iiint/oint
    {trigger: /(?<!\\)(oint|iiint|iint|int)/, replacement: "\\[[0]] ", options: "rmA"},
    // Auto backslash: sum/min/max/argmin/argmax/sup/inf/sharp
    {trigger: /(?<!\\)(sum|min|max|argmin|argmax|sup|inf|sharp)/, replacement: "\\[[0]] ", options: "rmA"},
    // Auto backslash: trig + common functions
    {trigger: /(?<!\\)(bigvee|vee|sin|cos|tan|arccot|cot|csc|ln|exp|det|perp|arcsin|arccos|arctan|arccot|arccsc|arcsec|ell|nabla|notin|not)/, replacement: "\\[[0]] ", options: "rmA"},
    // Auto backslash: Greek letters
    {trigger: /(?<!\\)(mu|alpha|sigma|rho|beta|Beta|gamma|delta|zeta|eta|varepsilon|theta|iota|kappa|vartheta|lambda|nu|rho|tau|upsilon|varphi|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)/, replacement: "\\[[0]] ", options: "rmA"},
    // Auto backslash: quad
    {trigger: /(?<!\\)(quad)/, replacement: "\\[[0]] ", options: "rmA"},

    // Smart dots
    // +... or -... -> \cdots
    {trigger: /(?<=[-+])\s*\.\.\./, replacement: " \\cdots ", options: "rmA", priority: 101},
    // ,... -> \ldots
    {trigger: /(?<=,)(\s*)\.\./, replacement: " \\ldots ", options: "rmA", priority: 101},

    // N..  -> 展开序列
    {trigger: /(\d\d+)\.\./, replacement: (m) => {
        return m[1].split('').map(d => "${0:_}" + d + "${1:, }").join('') + "\\cdots${2:${1:, }${0:_}n}";
    }, options: "rmA"},
    // N, -> 展开列表
    {trigger: /(\d\d+),/, replacement: (m) => {
        return m[1].split('').map(d => "${0:_}" + d).join("${1:, }");
    }, options: "rmA"},

    // ========== Logic Symbol ==========
    {trigger: "eset", replacement: "\\varnothing", options: "mA", priority: 200},
    {trigger: "inn", replacement: "\\in ", options: "mA", priority: 200},
    {trigger: /\\ln ?ot/, replacement: "\\lnot ", options: "rmA", priority: 200},
    {trigger: "sbs", replacement: "\\subseteq ", options: "mA"},
    {trigger: "csbs", replacement: "\\subset \\subset ", options: "mA", priority: 100},
    {trigger: "sbn", replacement: "\\subsetneq ", options: "mA"},
    {trigger: "sps", replacement: "\\supseteq ", options: "mA"},
    {trigger: "sqs", replacement: "\\sqsubseteq ", options: "mA"},
    {trigger: "tto", replacement: "\\to ", options: "mA"},
    {trigger: "xto", replacement: "\\xrightarrow{$0}$1 ", options: "mA"},
    {trigger: "fcto", replacement: "\\rightsquigarrow ", options: "mA"},
    {trigger: "inclu", replacement: "\\hookrightarrow ", options: "mA"},
    {trigger: "ott", replacement: "\\leftarrow ", options: "mA", priority: 200},
    // Auto backslash: logic operators
    {trigger: /(?<!\\)(cap|cup|land|lor|lnot|oplus|ominus|otimes|sqcap|sqcup|vdash|models)/, replacement: "\\[[0]] ", options: "rmA", priority: 200},
    {trigger: "->", replacement: "\\to ", options: "mA"},
    {trigger: "mapsto", replacement: "\\mapsto ", options: "mA"},
    {trigger: "imls", replacement: "\\implies ", options: "mA"},
    {trigger: "imld", replacement: "\\impliedby ", options: "mA"},
    {trigger: "iff", replacement: "\\iff ", options: "mA", priority: 200},
    {trigger: "EE", replacement: "\\exists ", options: "mA"},
    {trigger: "AA", replacement: "\\forall ", options: "mA"},

    // ========== Compare Symbol ==========
    {trigger: "--", replacement: "\\setminus ", options: "mA"},
    {trigger: "ge", replacement: "\\ge $0", options: "mA"},
    {trigger: "gg", replacement: "> $0", options: "mA"},
    {trigger: "dis", replacement: "\\displaystyle ", options: "mA"},
    {trigger: "le", replacement: "\\le $0", options: "mA"},
    {trigger: "ll", replacement: "< $0", options: "mA"},
    {trigger: "neq", replacement: "\\neq ", options: "mA", priority: 200},
    {trigger: /=( )q/, replacement: "\\equiv ", options: "rmA"},
    {trigger: "simm", replacement: "\\sim ", options: "mA", priority: 200},
    {trigger: "simeq", replacement: "\\simeq ", options: "mA", priority: 200},
    {trigger: "appro", replacement: "\\approx ", options: "mA"},
    {trigger: "~=", replacement: "\\cong", options: "mA"},
    {trigger: ">>", replacement: "\\gg", options: "mA"},
    {trigger: "<<", replacement: "\\ll", options: "mA"},

    // ========== Auto Math Mode ==========
    {trigger: "mk", replacement: "$$0$$1", options: "tA"},
    {trigger: "dm", replacement: "$$ $0 $$ $1", options: "tA"},
    {trigger: "eqt", replacement: "\\begin{equation}\n  $0\n\\end{equation}", options: "tA"},
    {trigger: "eqs", replacement: "\\begin{equation*}\n  $0\n\\end{equation*}", options: "tA"},

    // ========== Common Environment ==========
    {trigger: "case", replacement: "\\begin{cases} $0 \\end{cases} $1", options: "mA"},

    // ========== Auto Adaptive Close ==========
    {trigger: "ceil", replacement: "\\left\\lceil $0 \\right\\rceil $1", options: "mA"},
    {trigger: "floor", replacement: "\\left\\lfloor $0 \\right\\rfloor$1", options: "mA"},
    {trigger: "pra", replacement: "\\left($0\\right)$1", options: "mA", priority: 100},
    {trigger: "fra", replacement: "\\frac{$0 }{$1 }$2", options: "mA", priority: 100},
    {trigger: "mod", replacement: "\\left| $0 \\right| $1", options: "mA", priority: 200},
    {trigger: "res", replacement: "\\left. $0 \\right|_{$1}$2", options: "mA", priority: 100},
    {trigger: "lrh", replacement: "\\left\\\\{ $0 \\right\\\\} $1", options: "mA", priority: 100},
    {trigger: "set", replacement: "\\left\\\\{ $0 \\right\\\\}$1", options: "mA", priority: 100},
    {trigger: "lrf", replacement: "\\left[ $0 \\right]$1", options: "mA", priority: 100},
    {trigger: "lra", replacement: "\\left< $0 \\right>$1", options: "mA", priority: 100},
    {trigger: "fan", replacement: "\\left\\| $0 \\right\\|$1", options: "mA", priority: 200},
    {trigger: "abs", replacement: "\\left\\vert $0 \\right\\vert $1", options: "mA", priority: 200},

    // ========== General Snippet ==========
    {trigger: "tag", replacement: "\\tag{$0}", options: "mA"},
    {trigger: "xyb", replacement: "(x, y)", options: "mA"},
    {trigger: "xyzb", replacement: "(x, y, z)", options: "mA"},
    // xn2 -> x_{n+2}
    {trigger: /\b([a-zA-Z])n(\d)/, replacement: "[[0]]_{${0:n}+[[1]]}$1", options: "rmA", priority: 100},
    // (x_n)_{n \in N}
    {trigger: "rij", replacement: "(${0:x}_${1:n})_{${2:$1} \\\\in ${3:N}}$4", options: "mA"},
    {trigger: "beg", replacement: "\\\\begin{$0}\n\t$1\n\\\\end{$0}", options: "tA"},

    // ======== N Series ========
    {trigger: "comma", replacement: "${0:\\\\alpha}_1,${0:\\\\alpha}_2,\\\\cdots,${0:\\\\alpha}_{$1:n}", options: "mA", priority: 100},
    {trigger: "dplus", replacement: "${0:k}_1${1:\\\\alpha}_1+${0:k}_2${1:\\\\alpha}_2+\\\\cdots+${0:k}_{$2:n}${1:\\\\alpha}_{$2:n}", options: "mA", priority: 101},
    {trigger: "plus", replacement: "${0:\\\\alpha}_1+${0:\\\\alpha}_2+\\\\cdots+${0:\\\\alpha}_{$1:n}", options: "mA", priority: 100},
    // i=n -> i=1,2,\cdots,n
    {trigger: /\b([ijk])=n/, replacement: "[[0]]=1,2,\\cdots,n", options: "rmA"},
    // 12k -> 1,\cdots,k
    {trigger: "12k", replacement: " 1,\\cdots,k", options: "mA"},
    // 12n -> 1,\cdots,n
    {trigger: /(12+)([a-z])/, replacement: "1,\\cdots,[[1]] ", options: "rmA"},
    // 13xn -> x_1,\cdots,x_n
    {trigger: /(13+)([a-zA-z])([a-z])/, replacement: "[[1]]_1,\\cdots,[[1]]_[[2]] ", options: "rmA", priority: 100},
    // 03xn -> x_0,\cdots,x_{n}
    {trigger: /(03+)([a-zA-z])([a-z])/, replacement: "[[1]]_0,\\cdots,[[1]]_{[[2]]} ", options: "rmA"},
    // 14xn -> x^1,\cdots,x^n
    {trigger: /(14+)([a-zA-z])([a-z])/, replacement: "[[1]]^1,\\cdots,[[1]]^[[2]] ", options: "rmA"},
    // 04xn -> x^0,\cdots,x^{n-1}
    {trigger: /(04+)([a-zA-z])([a-z])/, replacement: "[[1]]^0,\\cdots,[[1]]^{[[2]]-1} ", options: "rmA"},
    // 13+ an -> a_1+\cdots+a_n
    {trigger: /(13+)([\+])( )([a-zA-z])([a-z])/, replacement: " [[3]]_1[[1]]\\cdots[[1]][[3]]_[[4]] ", options: "rmA"},
    // 03+ an -> a_0+\cdots+a_{n-1}
    {trigger: /(03+)([\+])( )([a-zA-z])([a-z])/, replacement: " [[3]]_0[[1]]\\cdots[[1]][[3]]_{[[4]] -1}", options: "rmA"},
    // 14+ an -> a^1+\cdots+a^n
    {trigger: /(14+)([\+])( )([a-zA-z])([a-z])/, replacement: " [[3]]^1[[1]]\\cdots[[1]][[3]]^[[4]] ", options: "rmA"},
    // 04+ an -> a^0+\cdots+a^{n-1}
    {trigger: /(04+)([\+])( )([a-zA-z])([a-z])/, replacement: " [[3]]^0[[1]]\\cdots[[1]][[3]]^{[[4]]-1} ", options: "rmA"},

    // ========== 希腊字母快捷 ==========
    {trigger: "@a", replacement: "\\alpha ", options: "mA"},
    {trigger: "@b", replacement: "\\beta ", options: "mA"},
    {trigger: "@g", replacement: "\\gamma ", options: "mA"},
    {trigger: "gama", replacement: "\\gamma ", options: "mA"},
    {trigger: "dlt", replacement: "\\delta ", options: "mA", priority: 100},
    {trigger: "xii", replacement: "\\xi ", options: "mA", priority: 100},
    {trigger: "kapa", replacement: "\\kappa ", options: "mA", priority: 100},
    {trigger: "sig", replacement: "\\sigma ", options: "mA"},
    {trigger: "@G", replacement: "\\Gamma ", options: "mA"},
    {trigger: "vphi", replacement: "\\varphi ", options: "mA", priority: 100},
    {trigger: "pii", replacement: "\\pi ", options: "mA", priority: 100},
    {trigger: "Gama", replacement: "\\Gamma ", options: "mA"},
    {trigger: "nabl", replacement: "\\nabla ", options: "mA"},
    {trigger: "@d", replacement: "\\delta ", options: "mA"},
    {trigger: "@D", replacement: "\\Delta ", options: "mA"},
    {trigger: "@e", replacement: "\\epsilon ", options: "mA"},
    {trigger: "@t", replacement: "\\theta ", options: "mA"},
    {trigger: "the", replacement: "\\theta ", options: "mA"},
    {trigger: "The", replacement: "\\Theta ", options: "mA"},
    {trigger: "@u", replacement: "\\mu ", options: "mA"},
    {trigger: "@T", replacement: "\\Theta ", options: "mA"},
    {trigger: "@l", replacement: "\\lambda ", options: "mA"},
    {trigger: "lmda", replacement: "\\lambda ", options: "mA"},
    {trigger: "@L", replacement: "\\Lambda ", options: "mA"},
    {trigger: "@o", replacement: "\\omega ", options: "mA"},
    {trigger: "@k", replacement: "\\kappa ", options: "mA"},
    {trigger: "ome", replacement: "\\omega ", options: "mA"},
    {trigger: "@O", replacement: "\\Omega ", options: "mA"},
    {trigger: "Ome", replacement: "\\Omega ", options: "mA"},
    {trigger: "@s", replacement: "\\sigma ", options: "mA"},
    {trigger: "@S", replacement: "\\Sigma ", options: "mA"},
    {trigger: "@x", replacement: "\\xi ", options: "mA"},

    // ========== Common Operator Snippet ==========
    {trigger: "taylor", replacement: "\\sum_{${0:k}=${1:0}}^{${2:\\infty}} ${3:c_$0} (x-a)^$0 $4", options: "mA"},
    {trigger: "lim", replacement: "\\lim", options: "mA"},
    {trigger: /\\limsup/, replacement: "\\limsup", options: "rmA", priority: 300},
    {trigger: /\\li\\min f/, replacement: "\\liminf", options: "rmA", priority: 300},
    {trigger: "prod", replacement: "\\prod ", options: "mA"},
    {trigger: "copr", replacement: "\\coprod ", options: "mA"},
    {trigger: /(?<!\\)par/, replacement: "\\frac{\\partial ${0:V}}{\\partial ${1:x}}$2", options: "rmA"},
    {trigger: /(?<!\\)dff/, replacement: "\\frac{\\mathrm{d}${0:y}}{\\mathrm{d}${1:x}}$2", options: "rmA", priority: 300},
    {trigger: /(?<!\\)2dff/, replacement: "\\frac{\\mathrm{d}^2${0:y}}{\\mathrm{d}${1:x}^2}$2", options: "rmA", priority: 400},
    {trigger: /(?<!\\)3dff/, replacement: "\\frac{\\mathrm{d}^3${0:y}}{\\mathrm{d}${1:x}^3}$2", options: "rmA", priority: 400},
    {trigger: "buu", replacement: "\\bigcup ", options: "mA", priority: 200},
    {trigger: "bnn", replacement: "\\bigcap ", options: "mA", priority: 200},
    {trigger: "bop", replacement: "\\bigoplus ", options: "mA", priority: 100},
    {trigger: "dint", replacement: "\\int_{${0:-\\infty}}^{${1:\\infty}} ${2} \\mathrm{d}${3:x}$4", options: "mA", priority: 100},

    // operatorname 系列
    {trigger: /(?<![a-zA-Z])(rank|trace|svd|eye|ones|orth|rows|cols|zeros|rref|hstack|vstack|nullspace|eigen|lcm|gcd|atan2|softmax|eig|sign|const|ker|char|deg|mod|Im|Coker|Ln|arg|Arg)/, replacement: "\\operatorname{[[0]]}", options: "rmA", priority: 100},
    {trigger: /(Re|span|rank|trace|svd|eye|ones|orth|rows|cols|zeros|rref|hstack|vstack|nullspace|eigen|lcm|gcd|atan2|softmax|eig|sign|const|ker|char|deg|mod|Im|Coker|Ln|arg|Arg|grad|Alt|sgn|Sym|Hess)/, replacement: "\\operatorname{[[0]]}", options: "rmA", priority: 100},
    {trigger: /(II|Iso|GL)/, replacement: "\\operatorname{[[0]]} ", options: "rmA", priority: 100},
    {trigger: /\\sup p/, replacement: "\\operatorname{supp}", options: "rmA"},
    {trigger: "dem", replacement: "\\operatorname{dim}", options: "mA"},
    {trigger: "dev", replacement: "\\operatorname{div}", options: "mA"},
    {trigger: "dag", replacement: "\\operatorname{diag} \\left( $0 \\right) $1 ", options: "mA", priority: 100},
    {trigger: "dst", replacement: "\\operatorname{dist}{\\left( $0 \\right)} $1", options: "mA", priority: 100},
    {trigger: "img", replacement: "\\operatorname{im}", options: "mA", priority: 100},

    // ========== Big Snippet ==========
    {trigger: "bigdef", replacement: "\\begin{equation$5}\n    \\begin{aligned}\n        $0\\colon $1 &\\longrightarrow $2 \\\\\\\\\n                 $3 &\\longmapsto $0($3) = $4\n    \\end{aligned}\n\\end{equation$5}$6", options: "mA"},
    {trigger: "bigmin", replacement: "\\begin{equation$3}\n\t\\begin{aligned}\n\t\t\\min &\\quad ${0:f(x)}\\\\\\\\\n\t\t\\text{s.t.} &\\quad ${1:g(x)} \\leq 0\\\\\\\\\n\t\t\t\t\t&\\quad ${2:h(x)} = 0\\\\\\\\\n\t\\end{aligned}\n\\end{equation$3}$4", options: "mA", priority: 300},
    {trigger: "bigmax", replacement: "\\begin{equation$3}\n\t\\begin{aligned}\n\t\t\\max &\\quad ${0:f(x)}\\\\\\\\\n\t\t\\text{s.t.} &\\quad ${1:g(x)} \\leq 0\\\\\\\\\n\t\t\t\t\t&\\quad ${2:h(x)} = 0\\\\\\\\\n\t\\end{aligned}\n\\end{equation$3}$4", options: "mA", priority: 300},
    {trigger: "deff", replacement: "$0\\colon ${1:\\mathbb{R}} \\to ${2:\\mathbb{R}}, ${3:x} \\mapsto $4", options: "mA"},
    {trigger: "iid", replacement: "\\overset{\\text{i.i.d.}}{\\sim}", options: "mA"},
    {trigger: "defe", replacement: "\\overset{\\underset{\\mathrm{def}}{}}{=}", options: "mA"},
    {trigger: "deft", replacement: "\\triangleq ", options: "mA"},

    // ========== Matrix ==========
    {trigger: "pmat", replacement: "\\begin{pmatrix} $0 \\end{pmatrix}$1", options: "mA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n    $0\n\\end{bmatrix}$1", options: "mA"},
    {trigger: "vecC", replacement: "\\begin{bmatrix} ${0:x}_1 \\\\\\\\ ${0:x}_2 \\\\\\\\ \\vdots \\\\\\\\ ${0:x}_{$1:n} \\end{bmatrix}", options: "mA"},
    {trigger: "vecR", replacement: "\\begin{bmatrix} ${0:x}_1, ${0:x}_2, \\cdots, ${0:x}_{$1:n} \\end{bmatrix}$2", options: "mA"},
    {trigger: "omis", replacement: "\\begin{bmatrix}${0:1}&${1:1}&\\cdots&${2:1}\\\\${3:1}&${4:1}&\\cdots&${5:1}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\${6:1}&${7:1}&\\cdots&${8:1}\\end{bmatrix}", options: "mA", priority: 300},
    {trigger: "submat", replacement: "\\begin{bmatrix}\n    ${0:a}_{11} & ${0:a}_{12} & \\cdots & ${0:a}_{1n} \\\\\\\\\n    ${0:a}_{21} & ${0:a}_{22} & \\cdots & ${0:a}_{2n} \\\\\\\\\n    \\vdots & \\vdots & \\ddots & \\vdots \\\\\\\\\n    ${0:a}_{n1} & ${0:a}_{n2} & \\cdots & ${0:a}_{nn}\n\\end{bmatrix}", options: "mA", priority: 300},
    {trigger: "jacobi", replacement: "\\begin{bmatrix}\\frac{\\partial ${0:f}_1}{\\partial ${1:x}_1}&\\frac{\\partial ${0:f}_1}{\\partial ${1:x}_2}&\\cdots&\\frac{\\partial ${0:f}_1}{\\partial ${1:x}_{$2:n}}\\\\\\frac{\\partial ${0:f}_2}{\\partial ${1:x}_1}&\\frac{\\partial ${0:f}_2}{\\partial ${1:x}_2}&\\cdots&\\frac{\\partial ${0:f}_2}{\\partial ${1:x}_{$2:n}}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\\\frac{\\partial ${0:f}_{$2:m}}{\\partial ${1:x}_1}&\\frac{\\partial ${0:f}_{$2:m}}{\\partial ${1:x}_2}&\\cdots&\\frac{\\partial ${0:f}_{$2:m}}{\\partial ${1:x}_{$2:n}}\\end{bmatrix}", options: "mA"},

];
