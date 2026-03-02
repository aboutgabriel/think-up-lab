

## Melhorar estética dos planos e corrigir bug do accordion

### Problemas identificados

1. **Bug do Accordion**: Cada card tem seu proprio componente `<Accordion>`, mas todos usam os mesmos valores ("when", "features"). Quando um accordion e aberto em um card, pode haver interferencia visual com os outros cards pois a altura do card muda e os outros cards "se movem", dando a impressao de que abriram. Alem disso, o accordion usa `type="single"`, o que significa que abrir "O que inclui" fecha "Quando indicar" dentro do mesmo card -- mas isso nao deveria afetar outros cards. A solucao e tornar os valores unicos por card e permitir multiplos abertos simultaneamente.

2. **Estetica fora do padrao**: Os cards usam cores verde, amarelo e azul que nao combinam com a identidade visual Navy/Azul do site. A barra colorida no topo, os badges e icones quebram a coerencia visual.

### Alteracoes planejadas

**Arquivo: `src/components/sections/Services.tsx`**

**Correcao do Accordion:**
- Trocar `type="single"` para `type="multiple"` em cada Accordion, permitindo abrir ambos ("Quando indicar" e "O que inclui") ao mesmo tempo
- Tornar os `value` unicos por card (ex: `when-1`, `features-1`) para garantir independencia total entre cards

**Redesign visual alinhado a identidade:**
- Remover as cores verde/amarelo/azul dos cards (colorClass, borderClass, color)
- Usar a paleta do site: gradiente azul primario (`gradient-primary`) para destaques e `primary`/`accent` para badges
- Substituir a barra colorida no topo por um estilo mais sutil usando o azul da marca
- Usar fundo navy escuro (`bg-navy`) na secao inteira com texto claro, criando contraste elegante -- similar ao estilo do "tagline strip" ja existente no site
- Badges de nivel em estilo mais discreto usando cores da marca
- Icones usando `text-primary` em vez de cores avulsas
- Card popular mantem destaque com `ring-primary` e badge gradiente
- Botoes dos cards nao-populares usam `border border-primary text-primary` (outline) em vez de `bg-secondary`

O resultado sera uma secao visualmente coesa com o restante do site, usando exclusivamente a paleta azul/navy/oliva da ThinkUp Lab.

