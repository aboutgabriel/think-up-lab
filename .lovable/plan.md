
## Remover animação do mockup e aumentar tamanho em 10%

**Objetivo**: Eliminar a animação flutuante do mockup de dispositivos e aumentar seu tamanho em 10%.

**Mudanças necessárias**:
1. **`src/components/ui/DevicesMockup.tsx`**: 
   - Remover classe `animate-float` do wrapper `div`
   - Aumentar `max-w-xl` para `max-w-[880px]` (~10% maior que 800px)
   - Adicionar `scale-110` (Tailwind nativo para 10%) como alternativa

2. **CSS**: Não há mudanças necessárias no `src/index.css` (a animação `animate-float` continuará disponível em outros componentes)

**Resultado**: Mockup estático e maior, mantendo responsividade e centralização.
