

## Renomear "ThinkUp Lab" para "thinkup LAB" em todo o projeto

Substituir todas as ocorrências do nome da empresa para a grafia correta: **thinkup LAB**.

### Arquivos afetados

**1. `index.html`** — Meta tags SEO
- `<title>`, `og:title`, `twitter:title`: "ThinkUp Lab" → "thinkup LAB"
- `meta author`, `og:site_name`: idem

**2. `src/components/sections/Footer.tsx`**
- Alt da logo: "ThinkUp Lab" → "thinkup LAB"
- Copyright: "ThinkUp Lab" → "thinkup LAB"

**3. `src/components/sections/Header.tsx`**
- Alt da logo: "ThinkUp" → "thinkup LAB"

**4. `src/components/sections/About.tsx`**
- Texto "A ThinkUp Lab nasceu..." → "A thinkup LAB nasceu..."

**5. `src/pages/PoliticaDePrivacidade.tsx`**
- Todas as menções "ThinkUp Lab" → "thinkup LAB" (introdução, seção de contato)

**6. `src/pages/TermosDeUso.tsx`**
- Todas as menções "ThinkUp Lab" → "thinkup LAB" (seções 1, 2, 3, 5, 6, 7)

**7. `supabase/functions/send-contact-email/index.ts`**
- "GRPM" → "thinkup LAB" no título do email e no remetente

