

## Criar páginas de Termos de Uso e Política de Privacidade (LGPD)

### Arquivos novos

**1. `src/pages/TermosDeUso.tsx`**
Página com os Termos de Uso da ThinkUp Lab, cobrindo:
- Objeto e aceitação dos termos
- Descrição dos serviços (sistemas web para PMEs)
- Propriedade intelectual
- Limitação de responsabilidade
- Modificações dos termos
- Foro e legislação aplicável (Brasil)

**2. `src/pages/PoliticaDePrivacidade.tsx`**
Página com a Política de Privacidade conforme LGPD, cobrindo:
- Dados coletados (formulário de contato: nome, empresa, contato, descrição do problema + cookies/analytics)
- Finalidade do tratamento
- Base legal (consentimento e legítimo interesse)
- Compartilhamento com terceiros (Google Analytics)
- Direitos do titular (acesso, correção, exclusão, portabilidade)
- Retenção de dados
- Cookies e tecnologias de rastreamento
- Contato do responsável (email placeholder `contato@thinkuplab.com.br` — ajustável depois)

### Arquivos alterados

**3. `src/App.tsx`**
Adicionar rotas `/termos-de-uso` e `/politica-de-privacidade`.

**4. `src/components/sections/Footer.tsx`**
Adicionar links "Termos de Uso" e "Política de Privacidade" na barra inferior do footer, ao lado do copyright.

### Design
- Ambas as páginas seguem o layout do site: Header no topo, Footer embaixo, conteúdo em `container` com tipografia consistente.
- Texto em seções com headings (`h2`/`h3`) e parágrafos estilizados com as classes do design system existente.
- Última atualização com data atual.

