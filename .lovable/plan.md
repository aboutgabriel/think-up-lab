

## Corrigir o efeito visual dos cards de preço no grid

### Problema real

O accordion funciona corretamente (cada card e independente). O problema e visual: o CSS Grid por padrao usa `align-items: stretch`, fazendo todos os cards da mesma linha terem a mesma altura. Quando um accordion abre, o card fica mais alto, e os outros cards esticam junto, empurrando o preco/botao para baixo e dando a impressao de que "algo abriu" nos outros cards.

### Solucao

**Arquivo: `src/components/sections/Services.tsx`** (linha 103)

- Adicionar `items-start` ao container do grid para que cada card tenha sua propria altura independente, sem esticar para acompanhar os vizinhos

Antes:
```
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
```

Depois:
```
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
```

Essa unica mudanca resolve o problema: quando um accordion abrir, apenas aquele card vai crescer, sem afetar os outros.

