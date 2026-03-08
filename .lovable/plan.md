

## Centralizar o carrossel na área marcada

O carrossel está colado à direita (`lg:ml-auto lg:mr-0`). Pela imagem, o usuário quer ele mais ao centro da coluna direita do grid.

### Alteração

**`src/pages/BabaDoBacana.tsx`** (linha 157)

Trocar `mx-auto lg:ml-auto lg:mr-0` por `mx-auto` — isso centraliza o carrossel dentro da coluna direita do grid, posicionando-o na área marcada de vermelho.

