

## Usar mockup realista de iPad + iPhone com dashboards sobrepostos

A imagem enviada mostra um mockup em perspectiva isométrica de iPad e iPhone com telas brancas. A ideia é usar essa imagem como frame dos dispositivos e posicionar as screenshots de dashboard por cima das telas brancas usando CSS.

### Alterações

**1. Copiar o mockup para o projeto**
- Copiar `user-uploads://89368.jpg` para `src/assets/devices-mockup.jpg`

**2. Criar novo componente `src/components/ui/DevicesMockup.tsx`**
- Substituir os dois componentes separados (TabletMockup + PhoneMockup) por um único componente
- Usar a imagem do mockup como base (`position: relative`)
- Posicionar as duas imagens de dashboard (`dashboard-tablet.png` e `dashboard-phone.png`) com `position: absolute` + CSS `transform` (perspective, rotateX, rotateY, skew) para alinhar com as telas do mockup
- Os valores de posição e transform serão ajustados para encaixar nas telas brancas da imagem

**3. Atualizar `src/pages/Index.tsx`**
- Remover imports de TabletMockup e PhoneMockup
- Importar o novo DevicesMockup
- Simplificar a área de dispositivos (linhas 88-95) para usar apenas o novo componente

### Detalhes técnicos

- O componente usará um container `relative` com a imagem do mockup
- As screenshots de dashboard serão posicionadas com `absolute`, usando `top`, `left`, `width`, `height` em porcentagens para responsividade
- CSS `transform` com `perspective()`, `rotateX()`, `rotateY()` para corresponder ao ângulo isométrico das telas no mockup
- Mantém a animação `animate-float` existente
- No mobile, o componente inteiro escala proporcionalmente

