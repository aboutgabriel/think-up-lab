

## Reescrever FunnelIllustration com as cores teal/ciano originais

O código atual já contém valores teal (`hsl(180, 70%, ...)`) mas o preview pode estar mostrando uma versão diferente. Vou reescrever o arquivo completo para forçar a atualização e garantir que todas as cores correspondam exatamente à imagem de referência.

### Ação

**Arquivo:** `src/components/ui/FunnelIllustration.tsx`

Reescrever o arquivo inteiro sem alterações de conteúdo — o objetivo é forçar um rebuild limpo. As cores já estão corretas no código:
- Orbe: `hsl(180, 70%, 65%)` → `hsl(175, 40%, 15%)`
- Halos e linhas: `hsl(180, 70%, 55%)`
- Cards: bordas `hsl(180, 70%, 55%)`, ícones `hsl(180, 70%, 35%)`
- Partículas: `hsl(180, 70%, 65-80%)`

Se o problema persistir após o rebuild, pode ser cache do navegador — será necessário um hard refresh (Ctrl+Shift+R).

