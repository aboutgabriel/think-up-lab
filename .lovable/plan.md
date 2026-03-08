

## Reduzir o carrossel do Hero

O carrossel está ocupando toda a coluna (`lg:max-w-full`). Reduzir para ~1/3 do tamanho atual.

### Alteração

**`src/pages/BabaDoBacana.tsx`** (linha 157)

Trocar `w-full max-w-[480px] lg:max-w-full` por `w-full max-w-[260px] lg:max-w-[300px] mx-auto lg:mx-0` — isso reduz o carrossel para aproximadamente 1/3 do tamanho atual, mantendo-o centralizado em mobile.

