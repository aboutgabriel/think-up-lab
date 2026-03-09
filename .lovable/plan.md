
O usuário quer usar a fonte Sanseriffic apenas no h1 da seção Hero, e reverter os demais títulos para o padrão anterior.

**Mudanças necessárias:**

1. **`src/index.css`**: Remover a regra global `h1, h2, h3, h4, h5, h6` (linhas 102-104) que aplica Sanseriffic a todos os títulos.

2. **`src/components/sections/Header.tsx`**: Adicionar uma classe CSS customizada ao h1 da Hero que aplique apenas a fonte Sanseriffic especificamente para aquele elemento.

Alternativa prática: Criar uma classe utilitária `.font-sanseriffic` em `src/index.css` e aplicá-la apenas ao h1 do Hero.

**Implementação:**
- Remover a regra global de fontes para headings
- Adicionar classe utilitária `.font-sanseriffic`
- Aplicar a classe ao h1 do Hero (em `src/components/sections/Header.tsx`)
