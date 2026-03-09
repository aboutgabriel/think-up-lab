
## Corrigir Scroll para Seção "Nossas Soluções"

### Problema
Quando você navega de outra página (como `/baba-do-bacana`) para a home clicando em "Nossas Soluções", o `navigate("/#solucoes")` é executado, mas o browser não faz scroll automático para a âncora após a navegação.

### Solução
Adicionar um `useEffect` no `Index.tsx` que detecta o hash na URL (ex: `#solucoes`) e faz scroll para a seção correspondente após a página carregar, com offset para compensar o header fixo (~80px).

### Alterações em `src/pages/Index.tsx`

1. Importar `useEffect` e `useLocation` do react-router-dom
2. Adicionar useEffect que:
   - Verifica se há hash na URL
   - Aguarda um pequeno delay para garantir que os elementos estão renderizados
   - Faz scroll para o elemento com offset do header

```typescript
useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  }
}, []);
```
