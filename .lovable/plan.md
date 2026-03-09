

## Substituir mockups SVG por dispositivos realistas com imagens geradas por IA

### Abordagem

1. **Criar edge function `generate-device-screenshots`** que usa Lovable AI (modelo `google/gemini-2.5-flash-image`) para gerar duas imagens de dashboard:
   - Uma versão tablet (landscape, estilo painel administrativo)
   - Uma versão mobile (portrait, dashboard simplificado)

2. **Salvar as imagens no Storage** (bucket público `device-screenshots`) para uso como assets estáticos.

3. **Substituir `TabletMockup.tsx` e `PhoneMockup.tsx`** por componentes com frames CSS realistas de iPad e iPhone, usando as imagens geradas como conteúdo da tela.

4. **Criar página/botão admin temporário** para disparar a geração das imagens (ou gerar automaticamente na primeira visita se não existirem).

### Alterações

**Novo: `supabase/functions/generate-device-screenshots/index.ts`**
- Chama Lovable AI com prompts descrevendo dashboards de negócios
- Faz upload das imagens base64 para o bucket `device-screenshots`
- Retorna as URLs públicas

**Migração SQL**: Criar bucket de storage `device-screenshots` (público)

**`src/components/ui/TabletMockup.tsx`**: Substituir SVG por div com frame CSS de iPad + `<img>` da screenshot do storage

**`src/components/ui/PhoneMockup.tsx`**: Substituir SVG por div com frame CSS de iPhone + `<img>` da screenshot do storage

**`src/pages/Index.tsx`**: Adicionar lógica para verificar se imagens existem no storage e, se não, chamar a edge function para gerá-las

### Detalhes técnicos

- Modelo: `google/gemini-2.5-flash-image` com `modalities: ["image", "text"]`
- Prompt tablet: "A professional business analytics dashboard with charts, KPIs, and data tables. Clean modern UI with blue color scheme. Screenshot style, no device frame."
- Prompt mobile: "A mobile business dashboard app screen showing KPI cards and a bar chart. Clean modern UI with blue color scheme. Portrait orientation."
- CSS frames usam `border-radius`, `box-shadow` e bordas escuras para simular dispositivos reais
- Imagens são cacheadas no storage, geradas apenas uma vez

