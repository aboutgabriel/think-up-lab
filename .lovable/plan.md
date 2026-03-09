

## Reorganizar e Corrigir Navegação do Header

### Entendimento
Você escreveu "Como funciona" duas vezes. Assumindo que a ordem desejada é:
**Nossas Soluções → Como Funciona → Sistema de Gestão → Projetos → Contato**

### Alterações em `src/components/sections/Header.tsx`

**Linha 7-13 - Atualizar `navLinks`:**
```typescript
const navLinks = [
  { href: "#solucoes", label: "Nossas Soluções" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "/baba-do-bacana", label: "Sistema de Gestão", isRoute: true },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];
```

O `href: "#solucoes"` já aponta para a seção de Soluções na página principal. Apenas mudamos o label para "Nossas Soluções" e reordenamos os links.

