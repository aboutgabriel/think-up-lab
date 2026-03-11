

## Inverter cores do Hero — fundo branco com tons do site

**Arquivo:** `src/components/sections/Hero.tsx`

### Mudanças:
1. **Fundo da seção**: Trocar `bg-navy text-white` por `bg-white text-foreground` (ou `bg-background`)
2. **Blobs decorativos**: Ajustar opacidades para ficarem sutis sobre fundo claro
3. **Título**: Trocar `text-white` por `text-foreground` (navy escuro), manter `text-gradient` no "sob medida"
4. **Parágrafo**: Trocar `text-white/70` por `text-muted-foreground`
5. **Botão outline**: Trocar bordas/cores de `border-white/20 text-white bg-white/5` para `border-primary/20 text-primary bg-primary/5`
6. **SVG (FunnelIllustration)**: Manter exatamente como está — sem alterações

### Resultado esperado:
- Fundo branco/claro com texto escuro (navy)
- Gradiente azul mantido nos destaques
- Botão primário inalterado (gradient-primary)
- Botão secundário com estilo azul sobre fundo claro
- Ilustração SVG preservada

