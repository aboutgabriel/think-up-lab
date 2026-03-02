
## Criar gradiente suave entre o Hero e a seção de Soluções

Atualmente o Hero tem fundo navy escuro (`bg-navy`) e a seção de Soluções tem fundo claro (`bg-background`). A transição entre eles é abrupta. A ideia é criar um degradê suave que conecte visualmente as duas seções.

### Abordagem

Em vez de alterar o fundo do Hero ou da seção de Soluções, vamos adicionar uma faixa de transição entre eles usando um `div` com gradiente CSS que vai do navy para o fundo claro do site.

### Alterações

**Arquivo: `src/pages/Index.tsx`**

- Adicionar um `div` decorativo entre `<Hero />` e `<Services />` com as seguintes propriedades:
  - Altura de ~120px (responsiva: ~80px no mobile, ~120px no desktop)
  - Gradiente vertical: de `hsl(222, 50%, 12%)` (navy, mesma cor do Hero) para `hsl(var(--background))` (cor de fundo padrão do site)
  - Sem conteúdo, apenas decorativo

Isso cria uma transição visual fluida sem alterar nenhuma das seções existentes.
