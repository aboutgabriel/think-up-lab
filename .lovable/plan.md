

## Adicionar Banner de Consentimento de Cookies (LGPD)

### O que será feito

Um banner fixo na parte inferior da tela que aparece na primeira visita, informando sobre o uso de cookies e permitindo ao usuário aceitar ou recusar.

### Comportamento

- Na primeira visita, o Google Analytics **não carrega** até o usuário aceitar
- Se aceitar: ativa o GA e salva a preferência no `localStorage`
- Se recusar: não ativa o GA e salva a preferência
- Nas visitas seguintes, respeita a escolha salva (não mostra o banner novamente)
- Link para a Política de Privacidade dentro do banner

### Arquivos

**1. `src/components/CookieConsent.tsx`** (novo)
- Banner fixo no rodapé com texto explicativo
- Botões "Aceitar" e "Recusar"
- Link para `/politica-de-privacidade`
- Gerencia `localStorage` para persistir a escolha

**2. `index.html`**
- Remover o script do Google Analytics do `<head>` (será carregado dinamicamente via JS apenas após consentimento)

**3. `src/App.tsx`**
- Importar e renderizar o `<CookieConsent />` globalmente

### Design
- Fundo escuro semi-transparente, texto claro, botões com o estilo do site (gradient-primary para aceitar, outline para recusar)
- Responsivo: empilha os botões no mobile

