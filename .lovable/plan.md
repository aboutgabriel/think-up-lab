
## Reestruturação da Seção "O Case" — 4 Setores com Imagem

Vou transformar os 4 cards em 4 setores independentes, cada um com:
- Título + ícone
- Explicação em tópicos (bullet points)
- Uma imagem/print do projeto ao lado

### Estrutura Nova

Cada setor terá layout alternado (imagem à esquerda/direita) para criar ritmo visual:

1. **Problema** — Imagem à esquerda, tópicos à direita
2. **Solução** — Imagem à direita, tópicos à esquerda  
3. **Funcionalidades** — Imagem à esquerda, tópicos à direita
4. **Impacto** — Imagem à direita, tópicos à esquerda

### Observação sobre Imagens

Atualmente existem 3 imagens (`baba1`, `baba2`, `baba3`). Para 4 setores, será necessário:
- Reutilizar uma das imagens existentes, ou
- Adicionar uma 4ª imagem ao projeto

### Alterações em `src/pages/BabaDoBacana.tsx`

**Linhas 263-314**: Substituir o grid de 4 cards + carrossel por:
- 4 blocos `flex` alternados com `md:flex-row` e `md:flex-row-reverse`
- Cada bloco contém:
  - Div com imagem do app (aspect-ratio 9/16, rounded, shadow)
  - Div com título, ícone e lista `<ul>` de tópicos
- Botão "Ver projeto" mantido no final
- Remover o componente `ProjectImageCarousel` (imagens agora estão inline)

### Layout Responsivo

- **Mobile**: Imagem em cima, texto embaixo (stack vertical)
- **Desktop**: Lado a lado com alternância de posição
