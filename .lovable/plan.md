
## Adicionar Link "Sistema de Gestão" no Header e Footer

Vou adicionar o link "Sistema de Gestão" que aponta para `/baba-do-bacana` em ambos os componentes de navegação.

### Alterações

**`src/components/sections/Header.tsx`**:
- Importar `Link` do react-router-dom
- Adicionar item no array `navLinks`: `{ href: "/baba-do-bacana", label: "Sistema de Gestão", isRoute: true }`
- Atualizar a renderização para usar `<Link>` quando `isRoute: true`, mantendo `<button>` para âncoras internas

**`src/components/sections/Footer.tsx`**:
- Importar `Link` do react-router-dom
- Adicionar item no array `navLinks`: `{ href: "/baba-do-bacana", label: "Sistema de Gestão", isRoute: true }`
- Mesma lógica de renderização condicional

### Posição do Link

O link ficará após "Como Funciona" e antes de "Contato" em ambos os menus.
