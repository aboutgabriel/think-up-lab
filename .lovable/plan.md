

## Corrigir alinhamento do badge "Mais popular"

O problema é que o card usa `ring-2 ring-primary` para a borda azul, e o badge "Mais popular" está posicionado com `-top-3` sobrepondo essa borda, criando um visual desalinhado onde a borda azul "contorna" o badge de forma irregular.

**Arquivo:** `src/components/sections/Services.tsx`

### Solução:

1. Envolver o card popular em um wrapper `div` com `overflow-visible` e remover o `ring` do card
2. Usar `border-2 border-primary` no card em vez de `ring-2 ring-primary` para um contorno mais limpo
3. Ajustar o badge para ficar centralizado sobre a borda superior com `bg-background` atrás, criando um efeito de "corte" limpo na borda — ou posicionar o badge **dentro** do card logo abaixo da barra de topo, eliminando a sobreposição

A abordagem mais limpa: mover o badge para dentro do card (após a barra gradient no topo), removendo o posicionamento absoluto negativo. Isso evita qualquer conflito com a borda.

