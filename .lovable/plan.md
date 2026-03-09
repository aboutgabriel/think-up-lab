
## Substituir mockup de dispositivos

**Objetivo**: Usar a nova imagem de mockup enviada (iPad + iPhone com dashboard) no lugar do mockup atual.

**Alteração**:
- Copiar a nova imagem para `src/assets/devices-mockup.jpg` (sobrescreve a versão anterior)
- Nenhuma mudança de código necessária — o componente `DevicesMockup.tsx` já referencia corretamente esse arquivo

**Implementação**:
1. Copiar `user-uploads://ChatGPT_Image_9_de_mar._de_2026_00_09_44.png` → `src/assets/devices-mockup.jpg`
2. A seção "Seu negócio no controle" em `Index.tsx` exibirá o novo mockup automaticamente
