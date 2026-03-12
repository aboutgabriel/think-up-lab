

## Scroll to top ao navegar entre páginas

### Problema
Ao abrir as páginas Termos de Uso, Política de Privacidade e Baba do Bacana (Sistema de Gestão), elas abrem no final em vez do topo.

### Solução
Adicionar `window.scrollTo(0, 0)` em um `useEffect` nas páginas:

- `src/pages/TermosDeUso.tsx`
- `src/pages/PoliticaDePrivacidade.tsx`
- `src/pages/BabaDoBacana.tsx`
- `src/pages/Projetos.tsx` (se aplicável)

Alternativamente, criar um componente `ScrollToTop` global no `App.tsx` que escuta mudanças de rota e faz scroll ao topo automaticamente — solução mais limpa e cobre todas as páginas.

### Implementação
**`src/components/ScrollToTop.tsx`** (novo) — componente que usa `useLocation` do react-router e faz `window.scrollTo(0, 0)` a cada mudança de pathname.

**`src/App.tsx`** — renderizar `<ScrollToTop />` dentro do `<BrowserRouter>`.

