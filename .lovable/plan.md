

## Restaurar cores originais do FunnelIllustration

As cores atuais (teal `hsl(180, 70%, ...)`) não correspondem ao original. As cores corretas são uma paleta azul marinho → ciano:

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul marinho | `#0A2A55` | Gradientes do fundo |
| Azul médio | `#144C7D` | Linhas e elementos |
| Azul tecnológico | `#1F7DB4` | Destaques |
| Ciano neon | `#2ED1C2` | Brilho central e pontos |
| Ciano claro | `#79E6DA` | Pontos e detalhes |
| Branco | `#FFFFFF` | Caixas e textos |
| Cinza claro | `#E9EEF2` | Fundo das caixas |

**Arquivo:** `src/components/ui/FunnelIllustration.tsx`

Substituições principais:
- **Orbe central**: gradiente de `#2ED1C2` → `#0A2A55`
- **Halo**: `#2ED1C2` com opacidade
- **Órbitas/círculos tracejados**: `#1F7DB4` e `#144C7D`
- **Partículas**: mix de `#79E6DA`, `#2ED1C2`, `#1F7DB4`
- **Linhas de fluxo (gradientes)**: de transparente → `#2ED1C2` ou `#1F7DB4`
- **Cards**: fundo `#FFFFFF` ou `#E9EEF2`, borda `#1F7DB4`, ícones `#144C7D`
- **Textos dos cards**: manter `#0A2A55` (título) e cinza (subtítulo)
- **Connector dots**: `#2ED1C2` e `#79E6DA`
- **Card shadow**: `#144C7D`

