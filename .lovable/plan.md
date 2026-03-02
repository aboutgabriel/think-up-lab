
## Enviar formulário de contato para contatogrpm@gmail.com

### Pre-requisito: Ativar Lovable Cloud

Antes de implementar, voce precisa ativar o **Lovable Cloud** no seu projeto:
1. Clique na aba **Cloud** no painel lateral do editor Lovable
2. Siga o fluxo de ativacao

Depois disso, poderemos criar a funcao de envio de e-mail.

---

### Implementacao

#### 1. Criar Edge Function `send-contact-email`

Uma funcao no servidor que recebe os dados do formulario e envia um e-mail para `contatogrpm@gmail.com` usando o servico de e-mail do Lovable Cloud (Resend).

**Arquivo:** `supabase/functions/send-contact-email/index.ts`

A funcao vai:
- Receber os dados via POST (name, company, contact, problem)
- Validar os campos obrigatorios
- Enviar e-mail formatado em HTML para contatogrpm@gmail.com
- Retornar sucesso ou erro

Para o envio, usaremos a API do Resend, que requer uma chave de API armazenada como secret (`RESEND_API_KEY`).

#### 2. Configurar secret RESEND_API_KEY

Sera necessario criar uma conta gratuita no [Resend](https://resend.com) e obter uma API key para envio de e-mails. O plano gratuito permite ate 100 e-mails/dia.

#### 3. Atualizar `Contact.tsx`

Modificar o `handleSubmit` para:
- Chamar a Edge Function via `fetch`
- Mostrar estado de loading enquanto envia
- Exibir mensagem de sucesso ou erro ao usuario
- Adicionar validacao basica dos campos

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const response = await fetch(
      `https://${PROJECT_ID}.supabase.co/functions/v1/send-contact-email`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }
    );
    if (!response.ok) throw new Error('Erro ao enviar');
    setIsSubmitted(true);
  } catch {
    toast.error('Erro ao enviar mensagem. Tente novamente.');
  } finally {
    setIsLoading(false);
  }
};
```

#### 4. Adicionar estado de loading no botao

Mostrar um spinner ou texto "Enviando..." enquanto a requisicao esta em andamento, desabilitando o botao para evitar envios duplicados.

---

### Resumo dos passos

| Passo | Acao |
|---|---|
| Pre-requisito | Ativar Lovable Cloud |
| 1 | Criar Edge Function `send-contact-email` |
| 2 | Configurar secret `RESEND_API_KEY` |
| 3 | Atualizar `Contact.tsx` para chamar a funcao |
| 4 | Adicionar loading state no botao de envio |

### Proximo passo

Ative o Lovable Cloud clicando na aba **Cloud** no painel lateral. Depois disso, podemos prosseguir com a implementacao.
