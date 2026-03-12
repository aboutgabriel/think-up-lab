
## Adicionar iPhone ao lado do iPad na secao de Dashboard

Criar um novo componente `PhoneMockup` com um SVG de iPhone mostrando uma versao mobile do dashboard, e posicionar os dois dispositivos lado a lado.

### Alteracoes

**1. Novo arquivo: `src/components/ui/PhoneMockup.tsx`**

Criar um SVG de iPhone com proporcoes realistas (~180x360 viewBox) contendo uma versao simplificada do dashboard mobile:
- Frame do iPhone com notch/Dynamic Island
- Tela com header "Dashboard" e hamburger menu
- 2 KPI cards empilhados (Receita e Pedidos)
- Mini grafico de barras verticais
- Mini lista de categorias
- Mesma paleta de cores do tablet (teal, navy, laranja)

**2. Arquivo: `src/pages/Index.tsx`**

Atualizar a area de dispositivos (linha 69-73) para mostrar os dois mockups juntos:
- Importar `PhoneMockup`
- Trocar o layout para um `flex` com o tablet maior a esquerda e o iPhone menor a direita, levemente sobreposto e deslocado para baixo, criando um efeito de profundidade
- No mobile, empilhar verticalmente ou mostrar so o tablet

### Detalhes tecnicos

- O iPhone tera uma animacao `animate-float` com delay diferente do tablet para criar movimento assincrono
- O iPhone ficara posicionado com `relative` e offsets negativos (`-ml-8 mt-12`) para parecer que esta "na frente" do tablet
- O componente `TabletMockup` sera ajustado em tamanho (`max-w-md`) para acomodar o iPhone ao lado
- No mobile (`md:hidden`/`hidden md:block`), o iPhone sera escondido ou reduzido para nao sobrecarregar a tela pequena
