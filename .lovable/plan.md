

## Trocar imagens do case na página Sistema de Gestão

### O que será feito
Substituir as 3 imagens atuais (`baba-bacana-1.jpeg`, `baba-bacana-2.jpeg`, `baba-bacana-3.jpeg`) pelas 4 novas fotos enviadas, e adicionar uma 4ª imagem ao case (atualmente o setor "Impacto" reutiliza `baba1`).

### Alterações

1. **Copiar as 4 imagens** para `src/assets/`:
   - `FOTO_1.jpeg` → `src/assets/baba-bacana-1.jpeg` (Meu Perfil — setor Problema ou outro)
   - `FOTO_2.jpeg` → `src/assets/baba-bacana-2.jpeg` (Tela Início — Próximo Baba)
   - `FOTO_3.jpeg` → `src/assets/baba-bacana-3.jpeg` (Meus Pagamentos)
   - `FOTO_4.jpeg` → `src/assets/baba-bacana-4.jpeg` (Tela de Login/PIN)

2. **`src/pages/BabaDoBacana.tsx`**:
   - Adicionar import da 4ª imagem: `import baba4 from "@/assets/baba-bacana-4.jpeg"`
   - Atualizar os 4 setores do case para usar as imagens corretas:
     - Setor 1 (Problema): `baba4` (tela de login)
     - Setor 2 (Solução): `baba2` (tela início)
     - Setor 3 (Funcionalidades): `baba3` (tela pagamentos)
     - Setor 4 (Impacto): `baba1` (tela perfil)

As imagens sobrescrevem os arquivos existentes, então os imports permanecem os mesmos para as 3 primeiras. Apenas a 4ª é nova.

