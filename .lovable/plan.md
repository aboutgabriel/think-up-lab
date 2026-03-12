

## Inverter cores da página Baba do Bacana

Aplicar o mesmo esquema de cores claro da página principal na landing page `/baba-do-bacana`, removendo as seções escuras (navy).

**Arquivo:** `src/pages/BabaDoBacana.tsx`

### Alterações:

1. **Hero** — trocar `bg-navy text-primary-foreground` por `bg-background text-foreground`, ajustar textos secundários de `text-primary-foreground/70` para `text-muted-foreground`, badge border/text para padrão claro

2. **Seção Resultados** — trocar `bg-navy text-primary-foreground` por `bg-background text-foreground`, ajustar textos secundários para `text-muted-foreground`

3. Manter as seções intermediárias (Antes/Depois, Timeline, Case) como estão, pois já usam cores claras (`bg-card`, `bg-background`)

