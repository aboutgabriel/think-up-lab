

## Remover ícones de redes sociais do Footer

Remover os ícones de LinkedIn, Twitter e Facebook que aparecem no rodapé do site.

### O que será alterado

**Arquivo:** `src/components/sections/Footer.tsx`

- Remover o array `socialLinks` (linhas 13-17) que define os links das redes sociais
- Remover os imports dos ícones `Linkedin`, `Twitter`, `Facebook` do lucide-react
- Remover o bloco de HTML que renderiza os ícones (o `div` com `flex gap-3` e os links dentro dele)

O restante do Footer (logo, descrição, navegação, contato) permanece inalterado.

