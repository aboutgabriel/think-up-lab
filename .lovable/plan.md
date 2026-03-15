

## Adicionar Tietas F7 aos projetos desenvolvidos

### Alterações

1. **Copiar as 3 imagens** para `src/assets/` como `tietas-f7-1.jpeg`, `tietas-f7-2.jpeg`, `tietas-f7-3.jpeg`

2. **`src/components/sections/Projects.tsx`** — Adicionar o Tietas F7 ao array `projects` com:
   - Nome: "Tietas F7"
   - Descrição: "Site institucional para time de futebol LGBTQIAPN+"
   - Link: https://tietasf7.lovable.app/
   - Screenshots: as 3 imagens
   - Features: História do time, Portal de notícias/imprensa, Área do jogador, Campeonatos

3. **`src/pages/Projetos.tsx`** — Adicionar o Tietas F7 ao array `cases` com:
   - Tag: "Site Institucional"
   - Pain: "Dar visibilidade e identidade digital a um time de futebol inclusivo, centralizando informações sobre o time, conquistas e presença na mídia."
   - Solution: "Site institucional com história do time, cobertura de imprensa, informações sobre campeonatos e área exclusiva para jogadores."
   - Features: História e missão do time, Tietas na imprensa, Campeonatos e conquistas, Área do jogador
   - Impact: Maior visibilidade e alcance, Identidade digital profissional, Centralização de informações

4. **Grid na home** — Ajustar para `md:grid-cols-2 lg:grid-cols-4` (4 projetos lado a lado em telas grandes) ou manter `md:grid-cols-3` com wrap natural para 2+2.

### Conteúdo baseado nos screenshots
- Tela 1: Hero com foto do time, logo, slogan "No nosso futebol não há espaço para preconceitos"
- Tela 2: Seção "Tietas na Imprensa" com cards de matérias (Bahia Notícia, Dois Terços, Ligay)
- Tela 3: Menu mobile com seções Home, História, Campeonatos, Área do Jogador

