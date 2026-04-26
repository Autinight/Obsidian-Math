" 交换 hjkl 方向键：h/l 上下移动，j/k 左右移动
noremap j h
noremap k l
noremap h k
noremap l j

" Visual 模式同步
vnoremap j h
vnoremap k l
vnoremap h k
vnoremap l j
 
" ===== 插入模式映射 =====
" 通过 Esc 临时回到 Normal 模式执行移动，再回到插入模式
 
" Ctrl+j/k：左右移动一个光标
imap <C-j> <Esc>ja
imap <C-k> <Esc>ka
 
" Shift+j/k：左右移动一个单词
imap <S-j> <Esc>bi
imap <S-k> <Esc>wi
 
" Alt+j/k：打印大小写 J/K
imap <A-j> J
imap <A-k> K