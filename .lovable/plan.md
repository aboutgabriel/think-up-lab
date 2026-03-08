

## Aumentar o carrossel para cobrir metade do Hero

O carrossel está com `max-w-[320px] md:max-w-[380px]`, muito pequeno para o grid de 2 colunas. Precisa ocupar toda a largura da coluna direita.

### Alteração

**Arquivo: `src/pages/BabaDoBacana.tsx`** (linha ~161)

- Remover as classes `max-w-[320px] md:max-w-[380px]` do `ProjectImageCarousel`
- Substituir por `w-full max-w-[480px] lg:max-w-full` para que o carrossel ocupe toda a coluna direita do grid
- Remover o wrapper `flex justify-center` e deixar o carrossel preencher o espaço naturalmente

