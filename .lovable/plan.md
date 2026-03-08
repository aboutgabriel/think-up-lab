

## Enriquecer a landing page do Baba do Bacana

A landing page `/baba-do-bacana` já existe com seções de marketing (Hero, Problema, Solução, Como Funciona, Resultados, CTA). O objetivo é adicionar o conteúdo detalhado do case que aparece na página `/projetos` — a estrutura de **Dor → Solução → Funcionalidades → Impacto** — integrado à landing page.

### O que será feito

**Arquivo: `src/pages/BabaDoBacana.tsx`**

Adicionar uma nova seção **"O Case"** entre a seção de Resultados e o CTA final, com:

- **O Problema**: "Dificuldade em controlar presença e pagamento de um grupo que joga futebol semanalmente."
- **A Solução**: "Web app onde membros confirmam presença nos próximos jogos e enviam comprovantes de pagamento, facilitando o acompanhamento da diretoria."
- **Funcionalidades**: Lista com checks (confirmação de presença, envio de comprovante, registro de membros, controle de inadimplência)
- **Impacto Gerado**: Card destacado com os 3 impactos (menos mensagens no WhatsApp, menos retrabalho manual, mais organização e previsibilidade)
- **Botão "Ver projeto"** com link externo para `https://babadobacana.lovable.app/`

Seguirá o mesmo visual da página `/projetos` (badges, cards, ícones Check/TrendingUp), adaptado ao layout da landing page.

