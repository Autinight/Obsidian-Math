# 三维双复形交换图

```tikz
\usepackage{tikz}
\usepackage{amsmath, amssymb}
\begin{document}
\begin{tikzpicture}[
  scale=1.2,
  >=stealth,
  x={(1cm,0cm)},
  y={(0.5cm,0.5cm)},
  z={(0cm,1cm)},
  every node/.style={font=\small, inner sep=1pt}
]

% 坐标：x=水平, y=深度(斜向), z=垂直
% n+1=0, n=3.5, n-1=7
% 前层y=0, 后层y=3
% C=0, B=2.5, A=5

% === 顶部的 0（完全垂直在A'上方）===
\node (top1) at (0,0,6.5) {$0$};
\node (top2) at (3.5,0,6.5) {$0$};
\node (top3) at (7,0,6.5) {$0$};

\node (top1p) at (0,3,6.5) {$0$};
\node (top2p) at (3.5,3,6.5) {$0$};
\node (top3p) at (7,3,6.5) {$0$};

% === A 层 ===
\node (An1) at (0,0,5) {$A_{n+1}$};
\node (An) at (3.5,0,5) {$A_n$};
\node (Anm1) at (7,0,5) {$A_{n-1}$};

\node (Apn1) at (0,3,5) {$A'_{n+1}$};
\node (Apn) at (3.5,3,5) {$A'_n$};
\node (Apnm1) at (7,3,5) {$A'_{n-1}$};

% === B 层 ===
\node (Bn1) at (0,0,2.5) {$B_{n+1}$};
\node (Bn) at (3.5,0,2.5) {$B_n$};
\node (Bnm1) at (7,0,2.5) {$B_{n-1}$};

\node (Bpn1) at (0,3,2.5) {$B'_{n+1}$};
\node (Bpn) at (3.5,3,2.5) {$B'_n$};
\node (Bpnm1) at (7,3,2.5) {$B'_{n-1}$};

% === C 层 ===
\node (Cn1) at (0,0,0) {$C_{n+1}$};
\node (Cn) at (3.5,0,0) {$C_n$};
\node (Cnm1) at (7,0,0) {$C_{n-1}$};

\node (Cpn1) at (0,3,0) {$C'_{n+1}$};
\node (Cpn) at (3.5,3,0) {$C'_n$};
\node (Cpnm1) at (7,3,0) {$C'_{n-1}$};

% === 底部的 0（完全垂直在C下方）===
\node (bot1) at (0,0,-1.5) {$0$};
\node (bot2) at (3.5,0,-1.5) {$0$};
\node (bot3) at (7,0,-1.5) {$0$};

\node (bot1p) at (0,3,-1.5) {$0$};
\node (bot2p) at (3.5,3,-1.5) {$0$};
\node (bot3p) at (7,3,-1.5) {$0$};

% === 水平箭头 ∂ (完全水平) ===
\draw[->] (Cn1) -- (Cn) node[midway,below] {\small$\partial$};
\draw[->] (Cn) -- (Cnm1) node[midway,below] {\small$\partial$};
\draw[->] (Cpn1) -- (Cpn) node[midway,above] {\small$\partial$};
\draw[->] (Cpn) -- (Cpnm1) node[midway,above] {\small$\partial$};

\draw[->] (Bn1) -- (Bn) node[midway,below] {\small$\partial$};
\draw[->] (Bn) -- (Bnm1) node[midway,below] {\small$\partial$};
\draw[->] (Bpn1) -- (Bpn) node[midway,above] {\small$\partial$};
\draw[->] (Bpn) -- (Bpnm1) node[midway,above] {\small$\partial$};

\draw[->] (An1) -- (An) node[midway,below] {\small$\partial$};
\draw[->] (An) -- (Anm1) node[midway,below] {\small$\partial$};
\draw[->] (Apn1) -- (Apn) node[midway,above] {\small$\partial$};
\draw[->] (Apn) -- (Apnm1) node[midway,above] {\small$\partial$};

% === 垂直箭头 i, i', j, j' (完全垂直) ===
\draw[->] (An1) -- (Bn1) node[midway,left] {\small$i$};
\draw[->] (An) -- (Bn) node[midway,left] {\small$i$};
\draw[->] (Anm1) -- (Bnm1) node[midway,left] {\small$i$};

\draw[->] (Apn1) -- (Bpn1) node[midway,right] {\small$i'$};
\draw[->] (Apn) -- (Bpn) node[midway,right] {\small$i'$};
\draw[->] (Apnm1) -- (Bpnm1) node[midway,right] {\small$i'$};

\draw[->] (Bn1) -- (Cn1) node[midway,left] {\small$j$};
\draw[->] (Bn) -- (Cn) node[midway,left] {\small$j$};
\draw[->] (Bnm1) -- (Cnm1) node[midway,left] {\small$j$};

\draw[->] (Bpn1) -- (Cpn1) node[midway,right] {\small$j'$};
\draw[->] (Bpn) -- (Cpn) node[midway,right] {\small$j'$};
\draw[->] (Bpnm1) -- (Cpnm1) node[midway,right] {\small$j'$};

% === 对角箭头 α, β, γ (斜向) ===
\draw[->,red,thick] (An1) -- (Apn) node[midway,above] {\small$\alpha$};
\draw[->,red,thick] (An) -- (Apnm1) node[midway,above] {\small$\alpha$};

\draw[->,blue,thick] (Bn1) -- (Bpn) node[midway,above] {\small$\beta$};
\draw[->,blue,thick] (Bn) -- (Bpnm1) node[midway,above] {\small$\beta$};

\draw[->,green!60!black,thick] (Cn1) -- (Cpn) node[midway,above] {\small$\gamma$};
\draw[->,green!60!black,thick] (Cn) -- (Cpnm1) node[midway,above] {\small$\gamma$};

% === 顶部0到A'的垂直箭头 ===
\draw[->] (top1) -- (An1);
\draw[->] (top2) -- (An);
\draw[->] (top3) -- (Anm1);

\draw[->] (top1p) -- (Apn1);
\draw[->] (top2p) -- (Apn);
\draw[->] (top3p) -- (Apnm1);

% === C到底部0的垂直箭头 ===
\draw[->] (Cn1) -- (bot1);
\draw[->] (Cn) -- (bot2);
\draw[->] (Cnm1) -- (bot3);

\draw[->] (Cpn1) -- (bot1p);
\draw[->] (Cpn) -- (bot2p);
\draw[->] (Cpnm1) -- (bot3p);

% === 省略号（三条线）===
\node at (-1.2,0,5) {$\cdots$};
\node at (8.2,0,5) {$\cdots$};
\node at (-1.2,0,2.5) {$\cdots$};
\node at (8.2,0,2.5) {$\cdots$};
\node at (-1.2,0,0) {$\cdots$};
\node at (8.2,0,0) {$\cdots$};

\node at (-1.2,3,5) {$\cdots$};
\node at (8.2,3,5) {$\cdots$};
\node at (-1.2,3,2.5) {$\cdots$};
\node at (8.2,3,2.5) {$\cdots$};
\node at (-1.2,3,0) {$\cdots$};
\node at (8.2,3,0) {$\cdots$};

\end{tikzpicture}
\end{document}
```

**三维双复形交换图**：

- **水平方向**：完全水平
- **垂直方向**：完全垂直（包括顶部和底部的0）
- **深度方向**：斜向，前后两层各有独立的垂直线
- 每个垂直列都有自己的0（前层3个，后层3个）
