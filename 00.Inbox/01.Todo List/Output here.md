# 三维双复形交换图

```tikz
\usepackage{tikz-3dplot}
\usepackage{amsmath, amssymb}
\begin{document}
\tdplotsetmaincoords{65}{120}
\begin{tikzpicture}[
  tdplot_main_coords,
  scale=0.8,
  >=stealth,
  every node/.style={font=\tiny, inner sep=1pt}
]

% 坐标系统：
% x: 水平索引 (n+1=0, n=3, n-1=6)
% y: 前后深度 (前层=0, 后层=3)
% z: 垂直层次 (C=0, B=4, A=8)

% === C 层 (z=0) ===
% 前层：C_{n+1}, C_n, C_{n-1}
\node (Cn1) at (0,0,0) {$C_{n+1}$};
\node (Cn) at (3,0,0) {$C_n$};
\node (Cnm1) at (6,0,0) {$C_{n-1}$};

% 后层：C'_{n+1}, C'_n, C'_{n-1}
\node (Cpn1) at (0,3,0) {$C'_{n+1}$};
\node (Cpn) at (3,3,0) {$C'_n$};
\node (Cpnm1) at (6,3,0) {$C'_{n-1}$};

% === B 层 (z=4) ===
\node (Bn1) at (0,0,4) {$B_{n+1}$};
\node (Bn) at (3,0,4) {$B_n$};
\node (Bnm1) at (6,0,4) {$B_{n-1}$};

\node (Bpn1) at (0,3,4) {$B'_{n+1}$};
\node (Bpn) at (3,3,4) {$B'_n$};
\node (Bpnm1) at (6,3,4) {$B'_{n-1}$};

% === A 层 (z=8) ===
\node (An1) at (0,0,8) {$A_{n+1}$};
\node (An) at (3,0,8) {$A_n$};
\node (Anm1) at (6,0,8) {$A_{n-1}$};

\node (Apn1) at (0,3,8) {$A'_{n+1}$};
\node (Apn) at (3,3,8) {$A'_n$};
\node (Apnm1) at (6,3,8) {$A'_{n-1}$};

% === 水平箭头 ∂ ===
% C 前层
\draw[->] (Cn1) -- (Cn) node[midway,below,sloped] {\tiny$\partial$};
\draw[->] (Cn) -- (Cnm1) node[midway,below,sloped] {\tiny$\partial$};
% C 后层
\draw[->] (Cpn1) -- (Cpn) node[midway,above,sloped] {\tiny$\partial$};
\draw[->] (Cpn) -- (Cpnm1) node[midway,above,sloped] {\tiny$\partial$};

% B 前层
\draw[->] (Bn1) -- (Bn) node[midway,below,sloped] {\tiny$\partial$};
\draw[->] (Bn) -- (Bnm1) node[midway,below,sloped] {\tiny$\partial$};
% B 后层
\draw[->] (Bpn1) -- (Bpn) node[midway,above,sloped] {\tiny$\partial$};
\draw[->] (Bpn) -- (Bpnm1) node[midway,above,sloped] {\tiny$\partial$};

% A 前层
\draw[->] (An1) -- (An) node[midway,below,sloped] {\tiny$\partial$};
\draw[->] (An) -- (Anm1) node[midway,below,sloped] {\tiny$\partial$};
% A 后层
\draw[->] (Apn1) -- (Apn) node[midway,above,sloped] {\tiny$\partial$};
\draw[->] (Apn) -- (Apnm1) node[midway,above,sloped] {\tiny$\partial$};

% === 垂直箭头 i, i', j, j' ===
% i: A前 → B前
\draw[->] (An1) -- (Bn1) node[midway,left] {\tiny$i$};
\draw[->] (An) -- (Bn) node[midway,left] {\tiny$i$};
\draw[->] (Anm1) -- (Bnm1) node[midway,left] {\tiny$i$};

% i': A后 → B后
\draw[->] (Apn1) -- (Bpn1) node[midway,right] {\tiny$i'$};
\draw[->] (Apn) -- (Bpn) node[midway,right] {\tiny$i'$};
\draw[->] (Apnm1) -- (Bpnm1) node[midway,right] {\tiny$i'$};

% j: B前 → C前
\draw[->] (Bn1) -- (Cn1) node[midway,left] {\tiny$j$};
\draw[->] (Bn) -- (Cn) node[midway,left] {\tiny$j$};
\draw[->] (Bnm1) -- (Cnm1) node[midway,left] {\tiny$j$};

% j': B后 → C后
\draw[->] (Bpn1) -- (Cpn1) node[midway,right] {\tiny$j'$};
\draw[->] (Bpn) -- (Cpn) node[midway,right] {\tiny$j'$};
\draw[->] (Bpnm1) -- (Cpnm1) node[midway,right] {\tiny$j'$};

% === 对角箭头 α, β, γ (从前层向后上方) ===
% α: A前 → A'后（向右一格）
\draw[->,red,thick] (An1) -- (Apn) node[midway,above] {\tiny$\alpha$};
\draw[->,red,thick] (An) -- (Apnm1) node[midway,above] {\tiny$\alpha$};

% β: B前 → B'后（向右一格）
\draw[->,blue,thick] (Bn1) -- (Bpn) node[midway,above] {\tiny$\beta$};
\draw[->,blue,thick] (Bn) -- (Bpnm1) node[midway,above] {\tiny$\beta$};

% γ: C前 → C'后（向右一格）
\draw[->,green!60!black,thick] (Cn1) -- (Cpn) node[midway,above] {\tiny$\gamma$};
\draw[->,green!60!black,thick] (Cn) -- (Cpnm1) node[midway,above] {\tiny$\gamma$};

% === 顶部和底部的 0 ===
\node (top1) at (0,1.5,10) {$0$};
\node (top2) at (3,1.5,10) {$0$};
\node (top3) at (6,1.5,10) {$0$};

\node (bot1) at (0,1.5,-2) {$0$};
\node (bot2) at (3,1.5,-2) {$0$};
\node (bot3) at (6,1.5,-2) {$0$};

\draw[->] (top1) -- (Apn1);
\draw[->] (top2) -- (Apn);
\draw[->] (top3) -- (Apnm1);

\draw[->] (Cn1) -- (bot1);
\draw[->] (Cn) -- (bot2);
\draw[->] (Cnm1) -- (bot3);

% === 省略号 ===
\node at (-1.5,1.5,8) {$\cdots$};
\node at (7.5,1.5,8) {$\cdots$};
\node at (-1.5,1.5,4) {$\cdots$};
\node at (7.5,1.5,4) {$\cdots$};
\node at (-1.5,1.5,0) {$\cdots$};
\node at (7.5,1.5,0) {$\cdots$};

\end{tikzpicture}
\end{document}
```

这是一个**三维双复形交换图**：

- **前后两层**：前层是不带撇的 A, B, C，后层是带撇的 A', B', C'
- **左右方向**：链复形索引 n+1, n, n-1
- **上下方向**：三个层次 A（顶）、B（中）、C（底）
- **箭头**：
  - 黑色水平 ∂：边界算子
  - 彩色对角 α, β, γ：从前层向后层右上方的链映射
  - 垂直 i, i', j, j'：层间连接

这次间距拉大了，视角也调整了，应该清晰多了。
