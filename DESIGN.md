---
name: Poke Alliance Dashboard Design System
description: Diretrizes visuais, de UX e comportamento técnico para a enciclopédia local
tokens:
  colors:
    primary: "#CC5500"
    background: "#0d1117"
    card: "#161b22"
    border: "#30363d"
    text: "#c9d1d9"
  typography:
    headings: "Russo One, sans-serif"
    body: "Chakra Petch, sans-serif"
  spacing:
    container: "padding: 2rem"
    gap: "20px"
---

# Diretrizes de UX e UI (Foco TDAH)

## 1. Padrão de Formatação Visual
- **Cor Âncora:** A cor primária deve ser estritamente `#CC5500` (Dark Orange). Usar em títulos, destaques, botões ativos e ícones importantes.
- **Hierarquia:** Evitar blocos densos. Priorizar listas, bullet points e cartões visuais (cards).
- **Glassmorphism e Dark Mode:** Fundo escuro (estilo GitHub Dark) para menor fadiga visual, bordas translúcidas para dar sensação de profundidade sem sujar a tela.

## 2. Padrões de Componentes (Dashboard V5)
- **Modais (Pokédex):** Janelas sobrepostas (`dex-modal`) com fundo desfocado (`backdrop-filter: blur(5px)`). O modal exibe Move Sets categorizados por cores elementais para facilitar leitura dinâmica.
- **Tab/Pill Navigation:** Filtros e abas de elementos devem ser interativos, mudando de cor ao serem selecionados e ocultando informações irrelevantes (Progressive Disclosure).
- **Categorização Visual (Tags):** Habilidades e magias recebem tags semânticas (`[AOE]`, `[BUFF]`) com baixa opacidade ao lado do nome da habilidade.

## 3. Comportamento Técnico
- **Arquitetura Vite SPA:** Para garantir a segurança dos dados brutos e rastreabilidade no Git, abandonamos o modelo `file://`. Utilizamos o **Vite** (`npm run dev`) para criar um servidor local rápido.
- **Data Vault Local:** Todos os dados minerados são mantidos como arquivos `.json` e `.md` estáticos na pasta `dashboard/data/` (Single Source of Truth), separados por semântica (Sistemas, Quests, Pokémons). O Vite importa e carrega esses dados na interface sem bloqueio de CORS.
- O CSS e JS estão componentizados (`map.js`, `pokedex.js`, `pokedex_data.js`).
