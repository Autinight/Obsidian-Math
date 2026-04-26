global
// JavaScript code
function gen_matrix(nrow, ncol) {
	let results = "";
	let order = 1;
	for (var i=0; i < nrow; i++){
		results += ' ';
		for(var j = 0; j < ncol - 1; j++){
			results += "$" + (order).toString() + " & ";
			order ++;
		}
		results += "$" + (order).toString() + " \\\\" + "\\";
		order ++;
	}
	return results;
}

function gen_matrix_transposed(nrow, ncol) {
	let results = "";
	for (var i = 0; i < nrow; i++){
		results += ' ';
        var j = 0;
		for(; j < ncol - 1;j++){
			results += "$" + (i + j * ncol + 1).toString() + " & ";
		}
		results += "$" + (i + j * ncol + 1).toString() + " \\\\" + "\\";
	}
	return results;
}

function tes_matrix(nrow, ncol,t) {
	let results = "";
	let order = 1;
	for (var i=0; i<nrow; i++){
		results += '	';
		for(var j = 0;j <ncol-1;j++){
			if (order > 1 ){
				results += "${" +(order ).toString() + ":" + t[order-2] + "}\t & ";
			}
			else{
				results += "$" +(order ).toString()  + " & ";
			}
			order ++;
		}
		results += "$"+(order).toString() +" \\\\" + "\\ ";
		order ++;
	}
	return results;
}

// 输出一个表格
function createTable(rows, cols) {
    let ret = "";
    let order = 1;
    for (let i = 0; i < parseInt(rows) + 2; i++) {
        for (let j = 0; j < parseInt(cols); j++) {
            if (i === 1) {
                ret += "|---";
            } else {
                ret += "| $" + (order).toString() + " ";
                order++;
            }
        }
        ret += "|\n"
    }
    return ret;
}


endglobal



# == 快捷输入 ==


priority -100
snippet lch "局部紧的Hausdorff空间" iA
局部紧的Hausdorff空间
endsnippet



# == ENvironment ==

snippet hrule "空行水平线" bA

\\hspace*{\fill} 
\\hrule
\\hspace*{\fill}

endsnippet


snippet hspace "空行" bA

\\hspace*{\fill}

endsnippet



snippet nidt "取消缩进" bA
\noindent
endsnippet

snippet bth "begin{theorem} / end{theorem}" bA
> [!theorem] Theorem: $1
> $2
endsnippet


snippet bqua "begin{eq} / end{eq}" iA
\\begin{equation}
	\\begin{aligned}
		$0
	\\end{aligned}
\\end{equation}
endsnippet

snippet "o "Holde norm" iA
ö
endsnippet

snippet e` "Holde norm" iA
é
endsnippet

snippet a` "Holde norm" iA
à
endsnippet

snippet ble "begin{lemma} / end{lemma}" bA
> [!lemma] Lemma: $1
> $2
endsnippet



snippet dfn "粗体" iA
**$1**$0
endsnippet

snippet fno "粗体" iA
\footnote{$1}$0
endsnippet

snippet fnm "粗体" iA
\footnotemark 
endsnippet

snippet fnt "粗体" iA
\footnotetext{$1}$0
endsnippet

snippet bde "definition" bA
> [!definition] Definition: $1
> $2
endsnippet

snippet bex "exercise" bA
> [!exercise] Exercise: $1
> $2
endsnippet

snippet bep "begin{example} / end{example}" bA
> [!example] Example: $1
> $2
endsnippet

snippet btec "begin{example} / end{example}" bA
> [!technique] Technieuq: $1
> $2
endsnippet

snippet bpb "begin{example} / end{example}" bA
> [!problem] Problem: $1
> $2
endsnippet


snippet bpr "begin{proof} / end{proof}" bA
> [!proof] Proof: $1
> $2
endsnippet

snippet bskp "begin{proof} / end{proof}" bA
> [!proofsketch] Sketch of Proof: $1
> $2
endsnippet


snippet bpps "begin{proposition} / end{proposition}" bA
> [!proposition] Proposition: $1
> $2
endsnippet



snippet bco "begin{corollary} / end{corollary}" bA
> [!corollary] Corollary: $1
> $2
endsnippet


snippet bso "begin{solution} / end{solution}" bA
> [!solution] Solution: $1
> $2
endsnippet

snippet bno "begin{note} / end{note}" bA
> [!note] Note: $1
> $2
endsnippet

snippet bre "begin{remark} / end{remark	}" bA
> [!remark] Remark: $1
> $2
endsnippet

# == Fraction Match ==


snippet // "Fraction" iAm
\\frac{${1:${VISUAL}}}{$2}$0
endsnippet

snippet `((\d+)|(\d*)(\\)?([A-Za-z!]+)((\^|_)(\{\d+\}|\d))*)/` "Fraction no ()" iAm
\frac{``rv = m[1]``}{$1}$0
endsnippet

priority 200
snippet `(?<=\s)(\\mu|\\alpha|\\sigma|\\rho|\\beta|\\gamma|\\delta|\\zeta|\\eta|\\varepsilon|\\theta|\\iota|\\kappa|\\vartheta|\\lambda|\\nu|\\rho|\\tau|\\upsilon|\\phi|\\chi|\\psi|\\omega|\\Gamma|\\Delta|\\Theta|\\Lambda|\\Xi|\\Pi|\\Sigma|\\Upsilon|\\Phi|\\Psi|\\Omega|[A-Za-z]{1,2})?(_[A-Za-z0-9]|_\{[^}]+\})?(\^[A-Za-z0-9]|\^\{[^}]+\})?(_[A-Za-z0-9]|_\{[^}]+\})?(\([^)]+\))(_[A-Za-z0-9]|_\{[^}]+\})?(\^[A-Za-z0-9]|\^\{[^}]+\})?(_[A-Za-z0-9]|_\{[^}]+\})?\/` "Fraction with ()" iAm
``rv = "\\frac{" + m.slice(1, m.length).join('') + "}{$1}$2"``
endsnippet

# == Hat Operation ==

# ==== Auto Capture Hat Operation ====



snippet `(\\?[a-zA-Z]\w*({?\w*})?)(vec|VE)` "vec" iAm
\vec{``rv = m[1]``} 
endsnippet

snippet `(\\?[a-zA-Z]\w*({?\w*})?)( )(vec|VE)` "vec" iAm
\vec{``rv = m[1]``} 
endsnippet

snippet `(\\?[a-zA-Z]\w*(?:\{?\w*\})?) ?bar` "Smart Bar" iAm
``
const str = m[1];
// 逻辑判断:
// 1. str.length > 1: 处理多字符 (如 xy, z_i) 或 LaTeX 命令 (如 \alpha)
// 2. str !== str.toLowerCase(): 处理单个大写字母 (如 Z, M)
if (str.length > 1 || str !== str.toLowerCase()) {
    rv = "\\overline{" + str + "}";
} else {
    rv = "\\bar{" + str + "}";
}
``
endsnippet

snippet `(\\?[a-zA-Z]\w*(?:\{?\w*\})?) ?tld` "Smart Tilde" iAm
``
const str = m[1];
// 逻辑判断:
// 1. str.length > 1: 处理多字符 (如 xy, g_{ij}) 或 LaTeX 命令 (如 \omega)
// 2. str !== str.toLowerCase(): 处理单个大写字母 (如 M, H)
if (str.length > 1 || str !== str.toLowerCase()) {
    rv = "\\widetilde{" + str + "}";
} else {
    rv = "\\tilde{" + str + "}";
}
``
endsnippet



snippet `(\\?[a-zA-Z]\w*(?:\{?\w*\})?) ?hat` "Smart Hat" iAm
``
const str = m[1];
// 逻辑判断:
// 1. str.length > 1: 处理多字符 (如 xy, dx_i) 或 LaTeX 命令 (如 \omega)
// 2. str !== str.toLowerCase(): 处理单个大写字母 (如 M, A)
if (str.length > 1 || str !== str.toLowerCase()) {
    rv = "\\widehat{" + str + "}";
} else {
    rv = "\\hat{" + str + "}";
}
``
endsnippet



snippet `(\\?[a-zA-Z]\w*({?\w*})?)(dot)` "dot" iAm
\dot{``rv = m[1]``}
endsnippet

snippet `(\\?[a-zA-Z]\w*({?\w*})?)( )(dot)` "dot" iAm
\dot{``rv = m[1]``}
endsnippet

priority 1000
snippet `(\\?[a-zA-Z]\w*({?\w*})?)(hdd)` "ddot" iAm
\ddot{``rv = m[1]``}
endsnippet

# ===== Static Hat Operation ====


snippet udb "underbrace" iAm
\underbrace{$1}_{$2}$0
endsnippet

snippet hat "hat" iAm
\widehat{$1}$0
endsnippet

snippet sq "\sqrt{}" iAm
\sqrt{${1}}$0
endsnippet

# == Superscript Operation ==

snippet inv "inverse" iAm
^{-1} 
endsnippet

snippet pri "prime" iAm
^{\prime} 
endsnippet

priority 200
snippet prr "prime" iAm
^{\prime \prime} 
endsnippet


snippet circ "circ " iAm
\circ
endsnippet

priority 100
snippet Rcc "circ " iAm
\overset{\scriptstyle\circ}{Rc}
endsnippet

snippet gcc "circ " iAm
\overset{\scriptstyle\circ}{g}
endsnippet


snippet R+ "R0+" iAm
R_0^+
endsnippet

snippet pw "power" iAm
^{${1:2}}$0
endsnippet

snippet sr "square" iAm
^{2}$0
endsnippet

snippet top "square" iAm
^{\top}$0
endsnippet

snippet perp "square" iAm
^{\perp}$0
endsnippet

# == Subscript Operation ==

snippet di "subscript" iAm
_{${1}}$0
endsnippet

snippet `(})(\d)\2` "auto subscript" iAm
`` rv = m[1] + "_" + m[2]``
endsnippet 

snippet `([A-Za-z])(\d)` "auto subscript" iAm
`` rv = m[1] + "_" + m[2]``
endsnippet


priority 100
snippet `([A-Za-z])_(\d{2})` "auto subscript" iAm
`` rv = m[1] + "_{" + m[2] + "}$0" ``
endsnippet

priority 100
snippet `([A-Za-z])S(\d)` "auto subscript" iAm
`` rv = m[1] + "_{" + m[2] + "$1}$2"``
endsnippet

# Custom: Add more greek letters

priority 101
snippet `(\\mu |\\alpha |\\sigma |\\rho |\\beta |\\gamma |\\delta |\\zeta |\\eta |\\varepsilon |\\epsilon |\\theta |\\iota |\\kappa |\\vartheta |\\lambda |\\nu |\\pi |\\rho |\\tau |\\upsilon |\\phi |\\chi |\\psi |\\omega |\\Gamma |\\Delta |\\Theta |\\Lambda |\\Xi |\\Pi |\\Sigma |\\Upsilon |\\Phi |\\Psi |\\Omega )([A-Za-z])(sb)` "auto subscript for greek letter" iAm
`` rv = m[1] + "_" + m[2]`` 
endsnippet



snippet `(\\mu |\\alpha |\\varphi |\\sigma |\\rho |\\beta |\\gamma |\\delta |\\zeta |\\eta |\\varepsilon |\\epsilon |\\theta |\\iota |\\kappa |\\vartheta |\\lambda |\\nu |\\pi |\\rho |\\tau |\\upsilon |\\phi |\\chi |\\psi |\\omega |\\Gamma |\\Delta |\\Theta |\\Lambda |\\Xi |\\Pi |\\Sigma |\\Upsilon |\\Phi |\\Psi |\\Omega )(\d)` "auto subscript for greek letter" iAm
`` rv = m[1] + "_" + m[2]`` 
endsnippet

snippet `(\\mu|\\alpha|\\sigma|\\rho|\\beta|\\gamma|\\delta|\\zeta|\\eta|\\varepsilon|\\epsilon|\\theta|\\iota|\\kappa|\\vartheta|\\lambda|\\nu|\\pi|\\rho|\\tau|\\upsilon|\\phi|\\chi|\\psi|\\omega|\\Gamma|\\Delta|\\Theta|\\Lambda|\\Xi|\\Pi|\\Sigma|\\Upsilon|\\Phi|\\Psi|\\Omega)( )(\d)` "auto subscript for greek letter" iAm
`` rv = m[1] + "_" + m[3]`` 
endsnippet




# == Font Operation ==

# ==== Static Operation ====

snippet txt "text" iAm
\text{$1}$0
endsnippet

snippet over "text" iAm
\overline{$1}$0
endsnippet

snippet tit "text it" iAm
\textit{$1}$0
endsnippet

snippet mcal "mathcal" im
\mathcal{$1}$0
endsnippet

snippet mbb "mathbb" iAm
\mathbb{$1}$0
endsnippet

snippet mbf "mathbf" iAm
\mathbf{$1}$0
endsnippet

snippet mbm "mathbm" iAm
\mathbm{$1}$0
endsnippet


snippet RR "R" iAm
\mathbb{R} 
endsnippet

snippet NN "N" iAm
\mathbb{N} 
endsnippet

snippet ZZ "Z" iAm
\mathbb{Z} 
endsnippet


snippet QQ "Q" iAm
\mathbb{Q} 
endsnippet

snippet CC "C" iAm
\mathbb{C} 
endsnippet

snippet and "&" iAm
&
endsnippet 

priority 200
snippet dd "d" iAm
\,d 
endsnippet
# ==== Dynamic Operation ====

priority 100
snippet `(\\?[a-zA-Z]\w*({?\w*})?)(bf|BF)` "mathbf" iAm
\mathbf{``rv = m[1]``}
endsnippet


priority 100
snippet `(\\?[a-zA-Z]\w*({?\w*})?)(sf)` "mathsf" iAm
\mathsf{``rv = m[1]``}
endsnippet

priority 100
snippet `(\\?[a-zA-Z]\w*({?\w*})?)(frk)` "mathfrak" iAm
\mathfrak{``rv = m[1]``}
endsnippet

priority 100
snippet `(\\?[a-zA-Z]\w*({?\w*})?)cal` "mathcal" iAm
\mathcal{``rv = m[1].toUpperCase()``}$0
endsnippet

priority 100
snippet `(?<!\\)\b([a-zA-Z]+)rm` "mathrm" iAm
\mathrm{``rv = m[1]``}
endsnippet

priority 100
snippet `(?<!\\)\b([a-zA-Z]+)ope` "ope" iAm
\operatorname{``rv = m[1]``}
endsnippet

priority 100
snippet `(?<!\\)\b([a-zA-Z]+)scr` "mathscr" iAm
\mathscr{``rv = m[1]``}
endsnippet


priority 200
snippet `(\\?[a-zA-Z]\w*({?\w*})?)bb` iAm
\mathbb{``rv = m[1]``}$0
endsnippet


# == Auto Symbol ==

snippet oo "\infty" iAmm
\infty
endsnippet

snippet ** "cdots" iAm
\cdots 
endsnippet

snippet `(\d\d+)\.\.` "0, 1, 2, ..., n" iAm
``rv = m[1].split('').map((d) => "${1:_}" + d + "${2:, }").join('');``\cdots${3:${2:, }${1:_}n}
endsnippet

snippet `(\d\d+),` "0, 1, 2" iAm
``rv = m[1].split('').map((d) => "${1:_}" + d).join("${2:, }");``
endsnippet

snippet <> "hokje" iA
\diamond 
endsnippet

# +... -> , \cdots
# -  ... -> , \cdots
# add a space if there already is one.
priority 101
snippet `(?<=[-+])\s*\.\.\.` "smart cdots" imA
 \cdots 
endsnippet

# It seems that \ldots is only used when , ..., 
# ,... -> , \ldots
# ,  ... -> , \ldots
priority 101
snippet `(?<=,)(\s*)\.\.` "smart ldots" imA
 \ldots 
endsnippet

snippet cdt "dot multiply" iAm
\cdot 
endsnippet

snippet vdt "dot multiply" iAm
\vdots
endsnippet

snippet jw "+" iAm
+ 
endsnippet

priority 101
snippet ojw "\oplus" iAm
\oplus 
endsnippet


priority 100
snippet eq "=" iAm
= 
endsnippet


snippet wdg "\wedge" iAm
\wedge 
endsnippet

snippet Wdg "\bigwedge" iAm
\bigwedge 
endsnippet


snippet +- "pm" iAm
\pm 
endsnippet

snippet -+ "mp" iAm
\mp 
endsnippet

snippet odot "odot" iAm
\odot 
endsnippet

priority 101
snippet xx "cross" iAm
\times 
endsnippet

priority 102
snippet oxx "\otimes" iAm
\otimes 
endsnippet


priority 102
snippet rxx "\otimes" iAm
\rtimes 
endsnippet


snippet eps "epsilon" iAm
\epsilon 
endsnippet

priority 100
snippet vep "varepsilon" iAm
\varepsilon 
endsnippet

priority 100
snippet ell "ell" iAm
\ell 
endsnippet

priority 100
snippet log "log" iAm
\log 
endsnippet



snippet star "star" iAm
^{*}
endsnippet

snippet ppar "边界" iAm
\partial 
endsnippet

snippet sih "sinh" iAm
\sinh 
endsnippet

snippet binom "binom" iAm
\binom{ $1 }{ $2 } $0
endsnippet

snippet `(?<!\\)(oint|iiint|iint|int)` "integrate" iAm
\\``rv = m[1]`` 
endsnippet

snippet `(?<!\\)(sum|min|max|argmin|argmax|sup|inf|sharp)` "sum|min|max|argmin|argmax|sup|inf" iAm
\\``rv = m[1]`` 
endsnippet

snippet `(?<!\\)(bigvee|vee|sin|cos|tan|arccot|cot|csc|ln|exp|det|perp|arcsin|arccos|arctan|arccot|arccsc|arcsec|ell|nabla|notin|not)` "function" iAm
\\``rv = m[1]`` 
endsnippet

snippet `(?<!\\)(mu|alpha|sigma|rho|beta|Beta|gamma|delta|zeta|eta|varepsilon|theta|iota|kappa|vartheta|lambda|nu|rho|tau|upsilon|varphi|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)` "greek" iAm
\``rv = m[1]`` 
endsnippet

# ==== Space Symbol ====
snippet `(?<!\\)(quad)` "ln" iAm
\\``rv = m[1]`` 
endsnippet

# ==== Logic Symbol ====

priority 200
snippet eset "empty" iAm
\varnothing
endsnippet

priority 200
snippet inn "in" iAm
\in 
endsnippet

priority 200
snippet `\\ln ?ot` "in" iAm
\lnot 
endsnippet

snippet sbs "subseteq" iAm
\subseteq 
endsnippet

priority 100
snippet csbs "subseteq" iAm
\subset \subset 
endsnippet

snippet sbn "subseteq" iAm
\subsetneq 
endsnippet

snippet sps "supseteq" iAm
\supseteq 
endsnippet

snippet sqs "sqsubset" iAm
\sqsubseteq 
endsnippet

snippet tto "to" iAm
\to 
endsnippet

snippet xto "xto" iAm
\xrightarrow{$1}$0 
endsnippet

snippet fcto "to" iAm
\rightsquigarrow 
endsnippet

snippet inclu "inclusion" iAm
\hookrightarrow 
endsnippet


priority 200
snippet ott "leftarrow" iAm
\leftarrow 
endsnippet

priority 200
snippet `(?<!\\)(cap|cup|land|lor|lnot|oplus|ominus|otimes|sqcap|sqcup|vdash|models)` "logic operator" iAm
\\``rv = m[1]`` 
endsnippet


snippet -> "to" iAm
\to 
endsnippet

snippet mapsto "mapsto" iAm
\mapsto 
endsnippet

snippet imls "implies" iAm
\implies 
endsnippet

snippet imld "implied by" iAm
\impliedby 
endsnippet

priority 200
snippet iff "if and only if" iAm
\iff 
endsnippet

snippet EE "exist" iAm
\exists 
endsnippet

snippet AA "forall" iAm
\forall 
endsnippet


# ==== Compare Symbol ====

snippet -- "setminus" iAm
\setminus 
endsnippet

snippet ge "greater than" iAm
\ge $0
endsnippet

snippet gg "greater than" iAm
> $0
endsnippet

snippet dis "displaystyle" iAm
\displaystyle 
endsnippet

snippet le "less than" iAm
\le $0
endsnippet

snippet ll "less than" iAm
< $0
endsnippet


priority 200
snippet neq "no equals" iAm
\neq 
endsnippet


snippet `=( )q` "constan equals" iAm
\equiv 
endsnippet

priority 200
snippet simm "sim" iAm
\sim 
endsnippet

priority 200
snippet simeq "simeq" iAm
\simeq 
endsnippet

snippet appro " Amppro equals" iAm
\approx 
endsnippet

snippet ~= " Amppro equals2" iAm
\cong
endsnippet

snippet >> ">>" iAm
\gg
endsnippet


snippet << "<<" iAm
\ll
endsnippet


# == Auto Environment ==

# ==== Auto Math Mode ====

priority 
snippet mk "inline Math" iwA
$${1}$$0
endsnippet

snippet dm "display Math" iwA
$$ ${1} $$ $0
endsnippet

snippet eqt "equation" wA
\begin{equation}
  ${1}
\end{equation}
endsnippet

snippet eqs "equation*" wA
\begin{equation*}
  ${1}
\end{equation*}
endsnippet

# ==== Common Environment ====

snippet case "cases" iAm
\begin{cases} $1 \end{cases} $0
endsnippet

priority 500
snippet `\$\$((?:(?!\$\$)[\s\S])*)ali` "Auto-wrap aligned inside $$" iAm
$$ \begin{aligned} ``rv = (function () {
  var s = m[1].trim();

  // 按 LaTeX 换行 \\ 或 \\[... ] 分段（保留分隔符）
  var parts = s.split(/(\\\\(?:\[[^\]]*\])?)/);

  for (var i = 0; i < parts.length; i += 2) {
    var row = parts[i];

    // 找到本行第一个（未被 \ 转义的）等号
    var idx = -1;
    for (var k = 0; k < row.length; k++) {
      if (row[k] === '=' && row[k - 1] !== '\\') { idx = k; break; }
    }

    if (idx !== -1) {
      // 等号前（忽略空白）若不是 &，则插入 &
      var j = idx - 1;
      while (j >= 0 && /\s/.test(row[j])) j--;
      if (!(j >= 0 && row[j] === '&')) {
        row = row.slice(0, idx) + '&' + row.slice(idx);
      }
    }

    parts[i] = row;
  }

  // 关键：把 \ 再转义一层，避免 \\ 变成 \
  return parts.join('').replace(/\\/g, '\\\\');
})()``$0 \end{aligned}
endsnippet


# == Auto Adaptive Close ==

snippet ceil "ceil" iAm
\left\lceil $1 \right\rceil $0
endsnippet

snippet floor "floor" iAm
\left\lfloor $1 \right\rfloor$0
endsnippet

priority 100
snippet pra "left( right)" Aim
\left(${1}\right)$0
endsnippet

priority 100
snippet fra "除法" Aim
\frac{$1 }{$2 }$0
endsnippet


priority 200
snippet mod "left| right|" Aim
\left| ${1} \right| $0
endsnippet

priority 100
snippet res "left. right|" Aim
\left. ${1} \right|_{${2}}$0
endsnippet

priority 100
snippet lrh "left\{ right\}" Aim
\left\\{ ${1} \right\\} $0
endsnippet

priority 100
snippet set "\{ \}" Aim
\left\\{ ${1} \right\\}$0
endsnippet

priority 100
snippet lrf "left[ right]" Aim
\left[ ${1} \right]$0
endsnippet

priority 100
snippet lra "leftangle rightangle" iAm
\left< ${1} \right>$0
endsnippet

priority 200
snippet fan iAm
\left\| ${1} \right\|$2
endsnippet

# == Snippet ==

# ==== General Snippet ====

# ====== Lite Snippet ======

snippet tag "tag" iAm
\tag{$1}
endsnippet

snippet xyb "Auto (x, y)" iAm
(x, y)
endsnippet

snippet xyzb "Auto (x, y ,z)" iAm
(x, y, z)
endsnippet

priority 100
snippet `\b([a-zA-Z])n(\d)` "x[n+1]" iAm
``rv = m[1]``_{${1:n}+``rv = m[2]``}$0
endsnippet

# Unkown
snippet rij "mrij" iAm
(${1:x}_${2:n})_{${3:$2} \\in ${4:N}}$0
endsnippet

priority 200
snippet abs "absolute value" iAm
\left\vert ${1} \right\vert $0
endsnippet

snippet beg "begin{} / end{}" bA
\\begin{$1}
	$0
\\end{$1}
endsnippet

# ======== N Series ========

priority 100
snippet comma "comma" iAm
${1:\\alpha}_1,${1:\\alpha}_2,\\cdots,${1:\\alpha}_${2:n}
endsnippet

priority 101
snippet dplus "dplus" iAm
${1:k}_1${2:\\alpha}_1+${1:k}_2${2:\\alpha}_2+\\cdots+${1:k}_${3:n}${2:\\alpha}_${3:n}
endsnippet

priority 100
snippet \multy "multy" iAm
${1:\\alpha}_1 ${1:\\alpha}_2 \\cdots ${1:\\alpha}_${2:n}
endsnippet

priority 100
snippet plus "plus" iAm
${1:\\alpha}_1+${1:\\alpha}_2+\\cdots+${1:\\alpha}_${2:n}
endsnippet


snippet `\b([ijk])=n` "i=1,2,\cdots,n" iAm
``rv = m[1]``=1,2,\cdots,n
endsnippet

snippet `(12+)([a-z])` "i=1,\cdots,n" iAm
1,\cdots,``rv = m[2]`` 
endsnippet

priority 100
snippet `(13+)([a-zA-z])([a-z])` "字母列表" iAm
``rv = m[2]``_1,\cdots,``rv = m[2]``_``rv = m[3]`` 
endsnippet

snippet `(03+)([a-zA-z])([a-z])` "i=1,\cdots,n" iAm
``rv = m[2]``_0,\cdots,``rv = m[2]``_{``rv = m[3]``} 
endsnippet

snippet `(14+)([a-zA-z])([a-z])` "i=1,\cdots,n" iAm
``rv = m[2]``^1,\cdots,``rv = m[2]``^``rv = m[3]`` 
endsnippet

priority 100
snippet `(14+)([a-zA-z])( )(\\tau|\\alpha|\\beta|\\gamma|\\lambda|\\omega|\\mu|\\epsilon|\\varepsilon|\\kappa|\\xi|\\partial)( )f` "i=1,\cdots,n" iAm
``rv = m[2]``^1,\cdots,``rv = m[2]``^``rv = m[4]`` 
endsnippet

priority 100
snippet `(04+)([a-zA-z])( )(\\alpha|\\beta|\\gamma|\\lambda|\\omega|\\mu|\\epsilon|\\varepsilon|\\kappa|\\xi|\\partial)( )f` "i=1,\cdots,n" iAm
``rv = m[2]``^0,``rv = m[2]``^1,\cdots,``rv = m[2]``^``rv = m[4]`` 
endsnippet

snippet `(04+)([a-zA-z])([a-z])` "i=1,\cdots,n" iAm
``rv = m[2]``^0,\cdots,``rv = m[2]``^{``rv = m[3]``-1} 
endsnippet

priority 100
snippet `(13+)(\\alpha|\\beta|\\gamma|\\lambda|\\omega|\\mu|\\epsilon|\\varepsilon|\\kappa|\\xi|\\partial)( )([a-z]|\\ell )` "希腊字母下标列表" iAm
``rv = m[2]``_1,\cdots,``rv = m[2]``_``rv = m[4]`` 
endsnippet


priority 100
snippet `(03+)( )(\\alpha|\\beta|\\gamma|\\lambda|\\omega|\\mu|\\epsilon|\\varepsilon|\\kappa|\\xi|\\partial)( )([a-z])` "希腊字母下标列表" iAm
 ``rv = m[3]``_0,\cdots,``rv = m[3]``_{``rv = m[5]``-1} 
endsnippet


priority 100
snippet `(14+)( )(\\tau|\\alpha|\\beta|\\gamma|\\lambda|\\omega|\\epsilon|\\varepsilon|\\kappa|\\xi|\\partial)( )([a-z])` "希腊字母上标列表" iAm
 ``rv = m[3]``^1,\cdots,``rv = m[3]``^``rv = m[5]`` 
endsnippet

priority 100
snippet `(04+)( )(\\alpha|\\beta|\\gamma|\\lambda|\\omega|\\epsilon||\\varepsilon|\\kappa|\\xi|\\partial)( )([a-z])` "希腊字母上标列表" iAm
 ``rv = m[3]``^0,\cdots,``rv = m[3]``^{``rv = m[5]``-1} 
endsnippet


snippet `(13+)([\+])( )([a-zA-z])([a-z])` "i=1,\cdots,n" iAm
 ``rv = m[4]``_1``rv=m[2]``\cdots``rv=m[2]````rv = m[4]``_``rv = m[5]`` 
endsnippet

snippet `(03+)([\+])( )([a-zA-z])([a-z])` "i=1,\cdots,n" iAm
 ``rv = m[4]``_0``rv=m[2]``\cdots``rv=m[2]````rv = m[4]``_{``rv = m[5]`` -1}
endsnippet

snippet `(14+)([\+])( )([a-zA-z])([a-z])` "i=1,\cdots,n" iAm
 ``rv = m[4]``^1``rv=m[2]``\cdots``rv=m[2]````rv = m[4]``^``rv = m[5]`` 
endsnippet

snippet `(04+)([\+])( )([a-zA-z])([a-z])` "i=1,\cdots,n" iAm
 ``rv = m[4]``^0``rv=m[2]``\cdots``rv=m[2]````rv = m[4]``^{``rv = m[5]``-1} 
endsnippet


snippet 12k "i=1,\cdots,k" iAm
 1,\cdots,k
endsnippet


# ======== 希腊字母 ========

snippet @a "alpha" iAm
\alpha 
endsnippet

snippet @b "beta" iAm
\beta 
endsnippet

snippet @g "gamma" iAm
\gamma 
endsnippet

snippet gama "gamma" iAm
\gamma 
endsnippet

priority 100
snippet dlt "delta" iAm
\delta 
endsnippet


priority 100
snippet xii "delta" iAm
\xi 
endsnippet


priority 100
snippet kapa "delta" iAm
\kappa 
endsnippet


snippet sig "sigma" iAm
\sigma 
endsnippet

snippet @G "Gamma" iAm
\Gamma 
endsnippet

priority 100
snippet vphi "varphi" iAm
\varphi 
endsnippet

priority 100
snippet pii "pi" iAm
\pi 
endsnippet

snippet Gama "Gamma" iAm
\Gamma 
endsnippet

snippet nabl "nab" iAm
\nabla 
endsnippet

snippet @d "delta" iAm
\delta 
endsnippet

snippet @D "Delta" iAm
\Delta 
endsnippet

snippet @e "epsilon" iAm
\epsilon 
endsnippet


snippet @t "theta" iAm
\theta 
endsnippet

snippet the "theta" iAm
\theta 
endsnippet

snippet The "theta" iAm
\Theta 
endsnippet

snippet @u "theta" iAm
\mu 
endsnippet

snippet @T "Theta" iAm
\Theta 
endsnippet

snippet @l "lambda" iAm
\lambda 
endsnippet

snippet lmda "lambda" iAm
\lambda 
endsnippet

snippet @L "Lambda" iAm
\Lambda 
endsnippet

snippet @o "omega" iAm
\omega 
endsnippet

snippet @k "omega" iAm
\kappa 
endsnippet

snippet ome "omega" iAm
\omega 
endsnippet

snippet @O "Omega" iAm
\Omega 
endsnippet

snippet Ome "Omega" iAm
\Omega 
endsnippet

snippet @s "sigma" iAm
\sigma 
endsnippet

snippet @S "Sigma" iAm
\Sigma 
endsnippet


snippet @x "xi" iAm
\xi 
endsnippet

# ======== Common Operator Snippet ========

snippet taylor "taylor" iAm
\sum_{${1:k}=${2:0}}^{${3:\infty}} ${4:c_$1} (x-a)^$1 $0
endsnippet

snippet `lim` "limit" iAm
\lim
endsnippet

priority 300
snippet `\\limsup` "limsup" iAm
\limsup
endsnippet

priority 300
snippet `\\li\\min f` "liminf" iAm
\liminf
endsnippet

snippet `prod` "product" iAm
\prod 
endsnippet

snippet `copr` "product" iAm
\coprod  
endsnippet


snippet `(?<!\\)par` "partial" iAm
\frac{\partial ${1:V}}{\partial ${2:x}}$0
endsnippet

priority 300
snippet `(?<!\\)dff` "d/dx" iAm
\frac{\mathrm{d}${1:y}}{\mathrm{d}${2:x}}$0
endsnippet

priority 400
snippet `(?<!\\)2dff` "d/dx" iAm
\frac{\mathrm{d}^2${1:y}}{\mathrm{d}${2:x}^2}$0
endsnippet

priority 400
snippet `(?<!\\)3dff` "d/dx" iAm
\frac{\mathrm{d}^3${1:y}}{\mathrm{d}${2:x}^3}$0
endsnippet


priority 200
snippet buu "bigcup" iAm
\bigcup 
endsnippet


priority 200
snippet bnn "bigcap" iAm
\bigcap 
endsnippet

priority 100
snippet bop "bigoplus" iAm
\bigoplus 
endsnippet

priority 100
snippet dint "integral" iAm
\int_{${1:-\infty}}^{${2:\infty}} ${3} \\mathrm{d}${4:x}$0
endsnippet

priority 300
snippet `c(o|n)?(l|n)?(b|c)?int` "s 	egral" iAm
``
let final = "\\"; // init
let isO = m[1] == "o";
(isO) ? final += "o" : "" // o option
let b = 1;
let isL = m[2] == "l";
(m[3] == 'b') ? b = 2 : (m[3] == 'c') ? b = 3 : 1;
for (let i = 0; i < b - 1; i++) {
final += "i";
}
final += "int";
final += ((b >= 2) || (b != 1 && !isO && isL)) ? "\\limits" : "";
let r = (b == 3) ? "E" : (b == 1 && (isL || isO)) ? "C" : "R";
final += ((b >= 2) || isO || (b == 1 && isL)) ? "_{${1:" + r + "}}" : "_{${1:-\\infty}}^{${2:\\infty}}";
let x = (b == 2) ? "A" : (b == 3) ? "V" : (b == 1 && isL) ? "s" : "x";
final += " ${3} \\mathrm{d}${4:" + x + "}$0";
rv = final;
``
endsnippet

# Custom: Can add more defined operator
priority 100
snippet `(?<![\a-zA-Z])(rank|trace|svd|eye|ones|orth|rows|cols|zeros|rref|hstack|vstack|nullspace|eigen|lcm|gcd|atan2|softmax|eig|sign|const|ker|char|deg|mod|Im|Coker|Ln|arg|Arg)` "math function" iAm
\\operatorname{``rv = m[1]``}
endsnippet


priority 100
snippet `(Re|span|rank|trace|svd|eye|ones|orth|rows|cols|zeros|rref|hstack|vstack|nullspace|eigen|lcm|gcd|atan2|softmax|eig|sign|const|ker|char|deg|mod|Im|Coker|Ln|arg|Arg|grad|Alt|sgn|Sym|Hess)` "math function" iAm
\\operatorname{``rv = m[1]``}
endsnippet

priority 100
snippet \operatorname{Re}\,s "Res" iAm
\\operatorname{Res}
endsnippet


priority 100
snippet `(II|Iso|GL)` "math function" iAm
\\operatorname{``rv = m[1]``} 
endsnippet


snippet `\\sup p` "支撑集" iAM
\\operatorname{supp}
endsnippet

snippet `dem` "支撑集" iAM
\\operatorname{dim}
endsnippet


snippet `dev` "支撑集" iAM
\\operatorname{div}
endsnippet


priority 100
snippet dag "math function" iAm
\\operatorname{diag} \\left( $1 \\right) $0 
endsnippet

priority 100
snippet dst "math function" iAm
\\operatorname{dist}{\\left( $1 \\right)} $0
endsnippet

priority 100
snippet img "math function" iAm
\\operatorname{im}
endsnippet



# ====== Big Snippet ======

snippet bigdef "Big function" iAm
\begin{equation$6}
    \begin{aligned}
        $1\colon $2 &\longrightarrow $3 \\\\
                 $4 &\longmapsto $1($4) = $5
    \end{aligned}
\end{equation$6}$0
endsnippet

priority 300
snippet bigmin "Optimization problem" iAm
\begin{equation$4}
	\begin{aligned}
		\min &\quad ${1:f(x)}\\\\
		\text{s.t.} &\quad ${2:g(x)} \leq 0\\\\
					&\quad ${3:h(x)} = 0\\\\
	\end{aligned}
\end{equation$4}$0
endsnippet

priority 300
snippet bigmax "Optimization problem" iAm
\begin{equation$4}
	\begin{aligned}
		\max &\quad ${1:f(x)}\\\\
		\text{s.t.} &\quad ${2:g(x)} \leq 0\\\\
					&\quad ${3:h(x)} = 0\\\\
	\end{aligned}
\end{equation$4}$0
endsnippet


priority 300
snippet Argmin "Optimization problem" iAm
\begin{aligned}
\argmin_{${1:\beta}}
&\quad ${2:f(x)}  \\\\
\text{s.t.}
&\quad ${3:g(x) > 0}  \\\\
\end{aligned}
endsnippet

priority 300
snippet Argmax "Optimization problem" iAm
\begin{aligned}
\argmax_{${1:\beta}}
&\quad ${2:f(x)}  \\\\
\text{s.t.}
&\quad ${3:g(x) > 0}  \\\\
\end{aligned}
endsnippet

snippet deff "Definition of function" iAm
$1\colon ${2:\\mathbb{R\}} \to ${3:\\mathbb{R\}}, ${4:x} \mapsto $0
endsnippet


snippet iid "independent and identical distribution" iAm
\overset{\text{i.i.d.}}{\sim}
endsnippet

snippet defe "define equal" iAm
\overset{\underset{\mathrm{def}}{}}{=}
endsnippet

snippet deft "define triangleq" iAm
\triangleq 
endsnippet


# == Matrix ==

# ==== Static Matrix ====

snippet pmat "pmat" iAm
\begin{pmatrix} ${1: } \end{pmatrix}$0
endsnippet

snippet bmat "pmat" wm
\begin{bmatrix} 
    $1 
\end{bmatrix}$0
endsnippet

snippet vecC "column vector" iAm
\begin{bmatrix} ${1:x}_1 \\\\ ${1:x}_2 \\\\ \vdots \\\\ ${1:x}_${2:n} \end{bmatrix}
endsnippet

snippet vecR "row vector" iAm
\begin{bmatrix} ${1:x}_1, ${1:x}_2, \cdots, ${1:x}_${2:n} \end{bmatrix}$0
endsnippet

priority 300
snippet omis "omission" iAm
\\begin{bmatrix}${1:1}&${2:1}&\\cdots&${4:1}\\\\${5:1}&${6:1}&\\cdots&${8:1}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\${13:1}&${14:1}&\\cdots&${16:1}\\end{bmatrix}
endsnippet

priority 300
snippet submat "omission" iAm
\\begin{bmatrix}
    ${1:a}_{11} & ${1:a}_{12} & \\cdots & ${1:a}_{1n} \\\\
    ${1:a}_{21} & ${1:a}_{22} & \\cdots & ${1:a}_{2n} \\\\
    \\vdots & \\vdots & \\ddots & \\vdots \\\\
    ${1:a}_{n1} & ${1:a}_{n2} & \\cdots & ${1:a}_{nn}
\\end{bmatrix}
endsnippet

priority 300
snippet subplusmat "omission" iAm
\\begin{bmatrix}
    ${1:a}_{11}+${2:b}_{11} & ${1:a}_{12}+${2:b}_{12} & \\cdots & ${1:a}_{1n}+${2:b}_{1n} \\\\
    ${1:a}_{21}+${2:b}_{21} & ${1:a}_{22}+${2:b}_{22} & \\cdots & ${1:a}_{2n}+${2:b}_{2n} \\\\
    \\vdots & \\vdots & \\ddots & \\vdots \\\\
    ${1:a}_{n1}+${2:b}_{n1} & ${1:a}_{n2}+${2:b}_{n2} & \\cdots & ${1:a}_{nn}+${2:b}_{nn}
\\end{bmatrix}
endsnippet

snippet jacobi "jacobi" iAm
\\begin{bmatrix}\\frac{\\partial ${1:f}_1}{\\partial ${2:x}_1}&\\frac{\\partial ${1:f}_1}{\\partial ${2:x}_2}&\\cdots&\\frac{\\partial ${1:f}_1}{\\partial ${2:x}_${3:n}}\\\\\\frac{\\partial ${1:f}_2}{\\partial ${2:x}_1}&\\frac{\\partial ${1:f}_2}{\\partial ${2:x}_2}&\\cdots&\\frac{\\partial ${1:f}_2}{\\partial ${2:x}_${3:n}}\\\\\\vdots&\\vdots&\\ddots&\\vdots\\\\\\frac{\\partial ${1:f}_${3:m}}{\\partial ${2:x}_1}&\\frac{\\partial ${1:f}_${3:m}}{\\partial ${2:x}_2}&\\cdots&\\frac{\\partial ${1:f}_${3:m}}{\\partial ${2:x}_${3:n}}\\end{bmatrix}
endsnippet

# ==== Dynamic Matrix ====

priority 300
snippet `(b|p|v)mata([1-9])` "bmatrix" iiAm
\\begin{``rv = m[1]``matrix}``
	let len = m[2];
	let results = "";
	for (var i=0; i<len; i++){
		results += "$1 &".repeat(len-1) + " $1 \\\\\\\\";
	}
	rv = results;
``\\end{``rv = m[1]``matrix}$0
endsnippet

priority 300
snippet `(b|p|v)mat([1-9])` "bmatrix" iiAm
\\begin{``rv = m[1]``matrix}``
	rv = gen_matrix(m[2],m[2]);
``\\end{``rv = m[1]``matrix}$0
endsnippet

priority 2000
snippet `(b|p|v)matr([1-9]{1})` "bmatrix" iiAm
\\begin{``rv = m[1]``matrix}``
	rv = gen_matrix_transposed(m[2],m[2]);
``\\end{``rv = m[1]``matrix}$0
endsnippet



