

## Voltar o SVG do Hero para cores Teal/Ciano

Alterar todas as cores do `FunnelIllustration.tsx` de azul (hsl 224) para teal/ciano, restaurando a identidade visual original Navy/Teal.

**Arquivo:** `src/components/ui/FunnelIllustration.tsx`

**Mapeamento de cores:**
- `hsl(224, 80%, ...)` → `hsl(180, 70%, ...)` (ciano/teal)
- `hsl(222, 70%, ...)` → `hsl(175, 65%, ...)` (teal complementar)
- `hsl(222, 75%, 35%)` → `hsl(175, 65%, 35%)`
- `hsl(215, 35%, 20%)` e `hsl(215, 20%, 55%)` nos cards → manter (são cores de texto neutro)
- `hsl(224, 80%, 42%)` nos ícones dos cards → `hsl(180, 70%, 35%)` (teal escuro)

Todas as instâncias de azul puro serão substituídas por teal/ciano, incluindo gradients, partículas, linhas de fluxo, orbe central e bordas dos cards.

