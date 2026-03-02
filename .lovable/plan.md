

## Remover os tags do Hero

Remover os tres badges/tags ("Entrega Rapida", "100% Sob Medida", "Inteligencia Artificial") que aparecem acima do titulo na secao Hero.

### Alteracao

**Arquivo: `src/components/sections/Hero.tsx`**

- Remover a definicao do array `tags` (linhas 14-18)
- Remover o bloco JSX que renderiza os tags com `tags.map(...)` (linhas 34-46)
- Remover os imports nao utilizados: `Zap`, `Settings2`, `Sparkles` (linha 1)

O titulo, subtitulo e botoes permanecem inalterados.

