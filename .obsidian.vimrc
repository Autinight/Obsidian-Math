" ===== Normal/Visual/Operator-pending 模式：方向键重映射 =====
" j = 左, k = 右, h = 上, l = 下
noremap j h
noremap k l
noremap h k
noremap l j

" ===== Insert 模式 =====
" Ctrl+J/K = 左右移动一格
imap <C-j> <Left>
imap <C-k> <Right>

" Shift+J/K（即输入大写 J/K）= 按单词移动
imap J <Esc>bi
imap K <Esc>ea

" Alt+J/K = 输入大写字母 J 和 K（因为 Shift 被占用了）
imap <A-j> J
imap <A-k> K
