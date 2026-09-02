---
name: Poke Alliance Wiki
version: 1.1.0
tokens:
  colors:
    brand_primary: "#3C5AA6" # Azul Oficial Pokemon
    brand_accent: "#FFCB05" # Amarelo Oficial Pokemon
    background: "#0F1115"
    surface: "#1A1D24"
    surface_hover: "#2D3748"
    text_main: "#E2E8F0"
    text_muted: "#94A3B8"
  typography:
    heading: "Inter, sans-serif" # Fonte geométrica limpa e pesada
    body: "Roboto, sans-serif"
    monospace: "Fira Code, monospace"
  spacing:
    base: "8px"
    component_gap: "16px"
    section_padding: "32px"
    border_radius_base: "12px" # Arredondamento amigável (Oficial)
  breakpoints:
    mobile: "320px - 767px"
    tablet: "768px - 1023px"
    desktop: "1024px+"
  elements:
    - Bug
    - Dark
    - Dragon
    - Electric
    - Fairy
    - Fighting
    - Fire
    - Flying
    - Ghost
    - Grass
    - Ground
    - Ice
    - Normal
    - Poison
    - Psychic
    - Rock
    - Steel
    - Water
---

# Diretrizes de UX/UI - A Nova Era das Wikis (V2 Híbrida)

Este documento estabelece as regras sagradas de design e usabilidade para a plataforma, fundindo a arquitetura Zero-Bloat de alta densidade (SaaS) com a estética diegética oficial da franquia Pokémon.

## 1. Identidade Visual e Oficialidade (Pro-Max)
- **Estética Oficial:** A interface deve espelhar a qualidade de material corporativo da franquia. Componentes interativos recebem `border-radius` macios (design amigável) e sprites 2D utilizarão Drop Shadows intensos para gerar efeito **Pop-Out**.
- **Cores Estritas como Dados:** A paleta de cores variadas (vermelhos, verdes, azuis vibrantes) é restrita **única e exclusivamente** aos **Elementos/Tipagens**. A estrutura do site, modais e backgrounds permanecem em Slate/Zinc neutro para evitar fadiga visual.
- **Regra do Ícone Obrigatório:** Sempre que um elemento/tipo for citado na UI (Filtros, Pokédex, Skills, Tabelas de Crafting), ele DEVE ser representado pela **Soma Inseparável = (Cor exata do Elemento + Ícone Oficial)** em formato de Badge/Pill. Jamais confie apenas no texto.

## 2. Arquitetura de Informação e Navegação
- **Omnisearch (Ctrl+K):** A busca é o motor principal. Exibe microdados (ícones de elementos, status base, tags) direto no painel flutuante, anulando cliques desnecessários.
- **Mini-Sprites como Âncora:** Listagens, rankings e grids utilizam o Mini-Sprite (32x32px) como ancoragem visual primária. Jogadores escaneiam imagens, não textos.

## 3. Padrões de Interface (UI) e Densidade
- **Zero-Bloat e Dark Mode:** Interface obrigatoriamente escura. Tabelas massivas não podem usar as cores dos elementos como fundo da linha (mata o contraste WCAG); as cores ficam contidas nos Badges.
- **Progressive Disclosure:** Dados estratificados. Movesets divididos por **Abas (Tabs)** geracionais. Painéis deslizantes (**Drawers**) para detalhes rápidos, mantendo o jogador no contexto da busca original.
- **Matemática Exposta:** Em módulos competitivos ou calculadoras, a matemática (dano, breeding) fica visível em tabelas densas, com cores limitadas a feedback (Verde = Buff, Vermelho = Nerf).

## 4. Microinterações e Escaneabilidade
- **Tooltips Ricos e Contextuais:** Termos técnicos, mecânicas ou habilidades acionam um *Tooltip* de alta fidelidade via `hover`. Ninguém abre nova aba para checar status de um Held Item.
- **Sticky Headers:** Tabelas longas de dados competitivos ou loot obrigam o cabeçalho a rolar (Sticky) junto com a tela, não perdendo a referência.
