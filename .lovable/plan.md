

## Substituir mockup e camuflar fundo da seção

**O que será feito:**

1. **Copiar a imagem** enviada para `src/assets/devices-mockup.jpg` (substituindo a atual)

2. **`src/components/ui/DevicesMockup.tsx`**: Atualizar para usar a nova imagem (já importa de `@/assets/devices-mockup.jpg`, então basta substituir o arquivo)

3. **`src/pages/Index.tsx`**: Alterar o fundo da seção (linha 46) de `bg-card` (branco) para um cinza claro que combine com o fundo da foto — algo como `bg-[#e0e1e6]` ou similar, que é o tom de cinza do fundo da imagem

**Detalhes técnicos:**
- A cor de fundo da imagem é um cinza claro levemente azulado (~`#dcdde2`)
- A seção receberá essa cor como background para que a imagem se integre perfeitamente
- O mockup mantém `max-w-[880px]` e sem animação conforme configurado anteriormente

