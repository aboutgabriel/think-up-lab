

## Remover o gradiente de transição entre Hero e Soluções

O div decorativo com gradiente entre o Hero e a seção de Soluções será removido.

### Alteração

**Arquivo: `src/pages/Index.tsx`**

- Deletar o bloco do gradiente (linhas 25-30):
```
<div
  className="h-20 md:h-[120px]"
  style={{
    background: "linear-gradient(to bottom, hsl(222, 50%, 12%), hsl(var(--background)))",
  }}
/>
```

A transição entre o Hero e a seção de Soluções ficará direta, sem faixa intermediária.

