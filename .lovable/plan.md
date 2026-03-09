

## Scroll to top ao clicar na logo em todas as páginas

### Problema
Atualmente, ao clicar na logo no header, o `Link to="/"` navega para a home, mas se você já está na home, nada acontece — não rola para o topo.

### Solução
No `Header.tsx`, adicionar um `onClick` no `Link` da logo que, se já estiver na home (`/`), faz `window.scrollTo({ top: 0, behavior: "smooth" })`.

### Alteração em `src/components/sections/Header.tsx`

No `<Link to="/">` da logo, adicionar:

```tsx
<Link
  to="/"
  className="flex items-center"
  onClick={() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }}
>
```

Isso garante que em qualquer página, clicar na logo leva ao topo da home.

