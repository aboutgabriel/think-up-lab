

## Adicionar botão "Voltar ao topo" na página Baba do Bacana

**Arquivo:** `src/pages/BabaDoBacana.tsx`

Adicionar um botão flutuante fixo no canto inferior direito que aparece quando o usuário rola a página para baixo. Ao clicar, faz scroll suave até o topo.

- Usar `useState` + `useEffect` com listener de scroll para mostrar/esconder o botão (aparece após 300px de scroll)
- Ícone `ArrowUp` do lucide-react
- Botão circular com `fixed bottom-6 right-6` e transição de opacidade
- Estilo consistente com o restante da página (gradient-primary ou bg-primary)

