

## Plano de melhorias visuais e organizacionais

### 1. Expandir seção de Projetos na home
A seção atual usa `max-w-sm` (384px) com um carrossel. Vou expandir para mostrar os 3 cards lado a lado em desktop usando um grid `md:grid-cols-3`, mantendo carrossel apenas no mobile.

**`src/components/sections/Projects.tsx`**: Substituir o carrossel por grid responsivo. Mobile: carrossel vertical (1 coluna). Desktop: 3 cards lado a lado com layout de card vertical (imagem + info).

---

### 2. Ilustração do Hero: paleta teal para azul
Todas as cores `hsl(174, 72%, ...)` (teal/ciano) no SVG serão trocadas para `hsl(224, 100%, ...)` (azul primário do site), mantendo as variações de luminosidade.

**`src/components/ui/FunnelIllustration.tsx`**: Substituir ~50 ocorrencias de `hsl(174, 72%, X%)` por equivalentes em `hsl(224, 80%, X%)`.

---

### 3. Diferenciar layout "Simples de começar" no BabaDoBacana
Atualmente usa 3 cards numerados idêntico ao "Como Funciona" da home. Vou trocar para um layout de timeline vertical com linha conectora lateral e steps alinhados à esquerda, visualmente distinto.

**`src/pages/BabaDoBacana.tsx`**: Refazer a seção "Simples de começar" (linhas 158-187) com layout de timeline vertical (linha lateral + circles + texto ao lado).

---

### 4. Seção "Quem Somos" na home
Nova seção entre "Seu negócio no controle" e "Projetos". Layout simples: título, descrição da ThinkUp Lab, e 2-3 valores/diferenciais em cards compactos.

**`src/components/sections/About.tsx`**: Novo componente com seção institucional.
**`src/pages/Index.tsx`**: Importar e posicionar entre a seção de devices e Projects.

---

### 5. CTA do BabaDoBacana com formulário próprio
Em vez de redirecionar para `/#contato`, incluir o componente `Contact` diretamente na página, eliminando a saída do usuário.

**`src/pages/BabaDoBacana.tsx`**: Substituir o CTA final (linhas 346-363) pelo componente `<Contact />` importado de `@/components/sections/Contact`.

