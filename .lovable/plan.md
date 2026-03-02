

## Ilustracao acima do texto no mobile

### Alteracao

**Arquivo: `src/components/sections/Hero.tsx`**

No mobile, o grid renderiza em uma coluna (`grid-cols-1`), e atualmente o texto vem primeiro e a ilustracao depois. Para inverter a ordem apenas no mobile:

- Adicionar `order-2 md:order-1` no div do texto (linha 25)
- Adicionar `order-1 md:order-2` no div da ilustracao (linha 70)

Isso faz a ilustracao aparecer primeiro no mobile, e no desktop tudo continua como esta (texto a esquerda, ilustracao a direita).

