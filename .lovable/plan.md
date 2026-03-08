

## Landing Page dedicada — Baba do Bacana

Criar uma nova rota `/baba-do-bacana` com uma landing page completa focada em vender o sistema para outros times/grupos esportivos.

### Estrutura da página

1. **Hero** — Fundo escuro (bg-navy) com headline chamativo: "Seu time merece mais organização" + subtítulo sobre o problema de gerenciar peladas via WhatsApp. CTA "Quero para o meu time". Carrossel das 3 screenshots existentes no lado direito.

2. **Problema** — Seção listando as dores comuns: controle de presença no WhatsApp, cobranças manuais, confusão com pagamentos, falta de histórico.

3. **Solução** — Explicação do sistema com as funcionalidades em cards com ícones:
   - Confirmação de presença online
   - Envio de comprovante de pagamento
   - Controle de inadimplência
   - Registro organizado de membros
   - Painel da diretoria

4. **Como funciona** — 3 passos simples: (1) Cadastre seu time → (2) Convide os membros → (3) Gerencie tudo em um só lugar.

5. **Resultados** — Seção de impacto com métricas/benefícios: menos mensagens no WhatsApp, menos retrabalho, mais previsibilidade.

6. **CTA final** — "Quer esse sistema para o seu time?" com botão que redireciona para o formulário de contato da página principal (`/#contato`).

7. **Footer** — Reutilizar o Footer existente.

### Alterações técnicas

**Novo arquivo: `src/pages/BabaDoBacana.tsx`**
- Página completa com todas as seções acima
- Importar Header e Footer existentes
- Importar as imagens `baba-bacana-1/2/3.jpeg` e o `ProjectImageCarousel`
- Usar mesma paleta de cores e padrões visuais do site (gradient-primary, bg-navy, cards com border-primary/20)

**Arquivo: `src/App.tsx`**
- Adicionar rota `/baba-do-bacana` apontando para o novo componente

