

## Corrigir navegação do Header em páginas internas

### Problema
- O logo usa `<a href="#">` — não volta para a home em páginas como `/baba-do-bacana`
- Links de âncora (Soluções, Projetos, etc.) usam `scrollToSection` que só funciona na home

### Alterações em `src/components/sections/Header.tsx`

1. **Logo**: Trocar `<a href="#">` por `<Link to="/">` (linha 27)
2. **Links de âncora**: Quando não estiver na home (`/`), usar `navigate("/#solucoes")` em vez de `scrollToSection`. Importar `useLocation` e `useNavigate` do react-router-dom para detectar a rota atual.
3. **Botão "Fale Conosco"**: Mesma lógica — se não estiver na home, navegar para `/#contato`.

### Lógica
```
const location = useLocation();
const navigate = useNavigate();

const scrollToSection = (href: string) => {
  if (location.pathname !== "/") {
    navigate("/" + href);
    return;
  }
  const element = document.querySelector(href);
  if (element) element.scrollIntoView({ behavior: "smooth" });
  setIsMenuOpen(false);
};
```

