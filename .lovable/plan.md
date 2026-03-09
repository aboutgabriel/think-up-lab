

## Reorganizar Navegação do Header e Footer

### Alterações

**1. `src/components/sections/Header.tsx` (linha 8-14)**
Reordenar `navLinks`:
```typescript
const navLinks = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#projetos", label: "Projetos" },
  { href: "/baba-do-bacana", label: "Sistema de Gestão", isRoute: true },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];
```

**2. `src/components/sections/Footer.tsx` (linha 5-11)**
Remover "Serviços" e reordenar:
```typescript
const navLinks = [
  { href: "#projetos", label: "Projetos" },
  { href: "/baba-do-bacana", label: "Sistema de Gestão", isRoute: true },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];
```

