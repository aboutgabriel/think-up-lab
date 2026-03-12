

## Atualizar email de contato e adicionar Google Analytics

### 1. Atualizar email de contato para `thiuplab@gmail.com`

**Arquivos afetados:**
- `src/pages/TermosDeUso.tsx` — trocar `contato@thinkuplab.com.br` por `thiuplab@gmail.com`
- `src/pages/PoliticaDePrivacidade.tsx` — trocar `contato@thinkuplab.com.br` por `thiuplab@gmail.com`
- `supabase/functions/send-contact-email/index.ts` — trocar `contatogrpm@gmail.com` por `thiuplab@gmail.com` (destino dos leads do formulário)

### 2. Adicionar Google Analytics (G-4B0D37QXKP)

**Arquivo:** `index.html` — inserir o script do gtag.js no `<head>`, antes do fechamento.

