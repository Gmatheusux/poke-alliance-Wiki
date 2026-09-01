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

## 4. Arquitetura do Minimapa V2.0 (Zero Lag & Mobile Ready)
O minimapa interativo V2.0 deve adotar uma abordagem Híbrida (Leaflet + Canvas Único) para garantir 60FPS em dispositivos móveis e desktops sem GPU (sem suporte ao PixiJS/WebGL).

### Diretrizes de Engenharia do Mapa:
- **Leaflet CRS.Simple:** Usado exclusivamente como motor físico de câmera, inércia (pan) e pinch-to-zoom.
- **Canvas Único Customizado:** A renderização dos blocos (Tiles fatiados) deve abandonar o `L.TileLayer` (DOM <img> tags) em favor de uma camada customizada contendo apenas um elemento `<canvas>`.
- **Decodificação Assíncrona:** Obrigatório o uso da API `createImageBitmap()` em background antes de pintar no Canvas, evitando o travamento da *Main Thread* durante trocas de andar (Z-Levels).
- **Gerenciador de Memória (LRU Cache):** Descarte imediato de tiles off-screen em dispositivos móveis para não estourar a memória RAM.
- **Pixel-Art Sharpness:** CSS com `image-rendering: pixelated` e JS com `ctx.imageSmoothingEnabled = false` para zoom perfeito e sem blur.

### Regras de Negócio e Testes (Gherkin)

```gherkin
Feature: Navegação Fluida no Minimapa V2.0

  Scenario: Troca rápida de Andares (Z-Level) sem travamento visual
    Given que o usuário está no "Floor 7" (Superfície) com múltiplos marcadores na tela
    When o usuário clica no botão "Descer Andar (Floor 8)"
    Then o sistema invoca "createImageBitmap()" em background para pré-carregar os tiles do Floor 8
    And o mapa não deve congelar ou dropar frames (jank) durante a decodificação
    And ao finalizar, o Canvas único é redesenhado instantaneamente com a nova camada

  Scenario: Zoom-in em Pixel Art sem embaçamento
    Given que o usuário foca na cidade de Pewter (Tile X)
    When o usuário aplica scroll ou pinch-to-zoom até a escala 4.0x
    Then a imagem do mapa deve manter bordas duras (pixelated)
    And o Canvas não deve aplicar "imageSmoothing" (anti-aliasing)

  Scenario: Criação manual de Pin Interativo (Módulo Criador)
    Given que o usuário ativou o "Modo de Edição"
    When o usuário clica com o botão direito na coordenada X,Y do mapa
    Then um modal do "Leaflet Context Menu" é aberto pedindo "Nome" e "Categoria" (Hunt/Gym/NPC)
    And ao salvar, o sistema injeta o pino via "L.canvas()" no mapa
    And a nova lista de marcadores é salva no localStorage/exportada
```
