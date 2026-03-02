

## Remover tagline strip e mudar fundo da seção de soluções

### O que será alterado

**1. Remover a faixa "tagline strip"** (aquela barra navy entre o Hero e os Serviços com o texto "Transformamos processos manuais...")

- **Arquivo:** `src/pages/Index.tsx`
- Deletar o bloco `<section className="bg-navy/90 py-8 md:py-10">` (linhas 25-31) por completo

**2. Mudar o fundo da seção "Nossas Soluções"** de azul escuro (navy) para o fundo claro padrão do site

- **Arquivo:** `src/components/sections/Services.tsx`
- Trocar `bg-navy` por `bg-background` na seção
- Ajustar as cores de texto do título e subtítulo de `text-white` / `text-white/60` para `text-foreground` / `text-muted-foreground`, mantendo a legibilidade no fundo claro

Isso vai deixar a seção de soluções visualmente mais integrada com o restante do site, sem o contraste pesado do fundo navy.

