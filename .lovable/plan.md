

## Reordenar links do menu

**Arquivo:** `src/components/sections/Header.tsx`

Atualizar o array `navLinks` (linhas 7-12) para refletir a ordem atual das seções no site:

```ts
const navLinks = [
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#solucoes", label: "Nossas Soluções" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];
```

Nota: Verificar se a seção About tem o id `quem-somos` — se não tiver, adicionar.

