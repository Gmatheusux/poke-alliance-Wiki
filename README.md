# Poke Alliance - Modern Wiki & Dashboard

Bem-vindo ao repositório oficial da Wiki e Dashboard do **Poke Alliance**. Este projeto foi idealizado para romper com o padrão engessado e poluído das wikis de jogos tradicionais (como a rede Fandom).


## 🚀 Filosofia do Projeto

1. **A Morte do "Click and Wait":** Todo o sistema é guiado por uma barra **Omnisearch (Ctrl+K)** inteligente. Buscou, achou. Dados rápidos são exibidos instantaneamente via microinterações (Tooltips de itens) e modais sobrepostos com fundo em Blur, evitando redirects.
2. **Progressive Disclosure:** O fim das "paredes de texto". Dados densos (matrizes de dano, lore, regras de Held) ficam resguardados em abas lógicas (Tabs) ou sanfonas (Accordions), revelando-se estritamente sob demanda.
3. **O Meta é Rei:** Mais do que um banco estático, somos um hub competitivo. A Pokédex abriga módulos de comunidade que trazem **Tierlists Democráticas** (com votos dos usuários) e **Guias de Team Building**.

## 🧬 Identidade e Comunidade (Pokealliance)
Nossa plataforma foi alinhada com a engenharia reversa da marca original do servidor:
- **Sincronia Cromática:** Utilizamos exatamente os hexadecimais originais da marca (`#3C5AA6` e `#FFCB05`).
- **Asset Original:** A logo oficial extraída diretamente do ecossistema reside em `/assets/logo.png`.
- **Ecossistema:** Como a comunidade não utiliza fóruns web convencionais (focando em **Discord** e **Facebook**), nossa interface foi projetada para suprir a carência de dados organizados na web de forma hiper-fluida.

## 🗺️ Arquitetura de Informação (As 8 Sessões)

Nossa aplicação é dividida em 8 pilares base (as minúcias estão em `SITEMAP.md`):

1. **Dashboard:** O ponto de entrada. Resumo de eventos ativos (TL;DR) e atalhos de histórico.
2. **Pokédex V5:** O núcleo de meta. Grid visual por Elemento/Tier. Modais robustos com abas de Status, Movesets (tags visuais de combate), Loot e tracking automático de **Pokelog**.
3. **Sistemas:** Matemática de servidor explicada. Boosts fatiados por Abas de Elemento (com suas tabelas de craft) e catálogo interativo de Helds.
4. **Quests, Tasks & NPCs:** Fim da caçada cega. Índice mestre indicando exatamente qual NPC está em qual localização entregando qual Task.
5. **Personagem:** Visão clara do suor do jogador. Árvore de Talentos interativa, Barras de progresso para Achievements e vitrine de Medalhas passivas.
6. **Minimapa Web:** GPS do jogador. Canvas com pan, zoom e toggles visuais para rastrear spawns e baús.
7. **Regiões:** Catálogo geopolítico. Níveis exigidos de mapa e condições de acesso para cada nova ilha/bioma.
8. **Guia de Leveling:** Roteiros otimizados (ex: Lv 30-50) baseados no elemento principal do time atual do jogador.

## ✍️ UX Writing (A Voz Híbrida)
A linguagem da plataforma segue a regra do **Híbrido Competitivo** (detalhada em `.agents/rules/ux_writing_voice.md`), equilibrando a oficialidade da marca com a precisão mecânica dos esportes eletrônicos:
- **Lei da Separação:** Lore não se mistura com Matemática. O texto de ambientação é isolado dos dados brutos de dano, status e cooldowns.
- **Ocultamento Estratégico (Progressive Disclosure):** A matemática profunda do meta-game (estilo Smogon) fica recolhida em *Advanced Tooltips* (estilo Blizzard) acionados via Hover/Shift.
- **Verbos Padronizados & Badges:** Eliminação de jargões flutuantes. Ações têm verbos únicos, e toda citação a elementos/status exige a presença de um Badge visual.

## 📝 Copywriting & Direitos Autorais (Transparência)
A base de dados textual contida no diretório `content_ready/` é o resultado refinado de uma varredura massiva no ecossistema da comunidade. 

Para estruturar essa inteligência de dados, mantemos o diretório **`wiki_vault/` (A Quarentena Bruta)**. 
O `wiki_vault/` armazena exclusivamente:
- Transcrições brutas de criadores de conteúdo do YouTube.
- Dumps e JSONs extraídos de fóruns e sites complementares.
- Scrapings de wikis legadas.

Como esses arquivos são a espinha dorsal intelectual da nossa comunidade (estradas táticas, guias de leveling, economia), firmamos a seguinte **Regra de Ouro de Direitos Autorais**:
**Toda e qualquer** interface, guia ou markdown refinado (`content_ready/`) que for alimentado pelos dados do `wiki_vault/` (especialmente youtubers e influenciadores) deverá exibir obrigatoriamente um *Dev Comment* (Callout):
> *"Este conteúdo foi gerado com análise dos parceiros da Poke Alliance."*

Essa política garante total transparência intelectual, protegendo o projeto, impedindo o plágio velado e enaltecendo a comunidade criadora do meta.

## 🛠️ Paradigmas de Desenvolvimento (Handoff)

## 🎨 Design System (A Fundação Híbrida)
O ecossistema visual funde a arquitetura **Zero-Bloat** de interfaces de alta densidade com o DNA **Oficial da Franquia e do Servidor**:
- **Tipografia:** `Futura Condensed` (ou Helvetica Black Condensed) para Títulos e CTAs de impacto. `Montserrat` para o corpo, atributos, tier lists e tabelas.
- **Rampa de Cores (50 a 900):** Azul (`#3C5AA6`) e Amarelo (`#FFCB05`) originais da marca para interações. Dark Mode mestre travado em `Slate/Zinc` (Base `#0F1115`).
- **Iconografia (SV Style):** Badges táteis (pílulas) com *Inner Shadow* para botões e a paleta canônica com os 18 Hexadecimais oficiais dos elementos.
- **Física e Motion (GPU):** Animações renderizadas exclusivamente via `opacity` e `transform`, molas tensionadas para Modais/Drawers (Zero gelatina) e fallback obrigatório para acessibilidade (Reduced Motion).

---

Para contribuir na base de código (geralmente baseada em React/Tailwind), é terminantemente obrigatória a leitura do "Cofre" na raiz do projeto:

- `DESIGN.md`: Nosso contrato visual sagrado. Seu cabeçalho YAML abriga os Design Tokens (Tipografia, Espaçamentos e a paleta canônica dos 18 Elementos). Seu corpo Markdown detalha as leis inquebráveis de usabilidade (Mobile Thumb-Zone, Zero Squeeze).
- `.agents/rules/`: Diretório modular blindado. Armazena as leis absolutas de UX que não cabem no DESIGN.md, evitando AI Slop (ex: `ui_density_mobile.md` para tabelas e `motion_physics.md` para GPU performance).
- `MOODBOARD.md`: A diretriz estética e visual da interface. Funde a arquitetura Zero-Bloat (SaaS de alta densidade) com a identidade oficial da franquia (Azul/Amarelo institucionais, Badges estritos para Elementos e geometria amigável). Possui os conceitos renderizados.
- `ActiveContext.md`: O "cérebro" de rastreabilidade. Mantém vivo o estado do projeto, ditando o Paradigma de Contêineres (nenhuma codificação ocorre sem consultar o contexto atualizado).
- `userflow.md`: O fluxograma gráfico (Mermaid) mapeando os nós exatos da jornada do usuário pela plataforma.

---
> *"Construído para quem joga. Ocultando a complexidade, revelando a estratégia."*

## 🚀 Engenharia e Performance (Regras Atuais)
O projeto migrará de Vanilla JS para **React + Tailwind** sob rígidas regras anti-bloat:
- **Arquitetura Base:** Feature-Sliced Design (FSD).
- **Zero-Bloat Grid:** Uso obrigatório de TanStack Virtual em 2D para renderização de cards e tabelas massivas.
- **State Management:** Separação entre Estado de API (TanStack Query) e Estado de Interface (Zustand).
- **Engine Gráfica:** Proibido uso de DOM para marcadores de mapa. Minimapa operado via **PixiJS (Canvas/WebGL)** e assets via **Sprite Atlases** em WebP.
- **Handoff (Regra 19):** Todo desenvolvimento ocorre isoladamente via Git Worktree. A branch master permanece blindada.

## 💻 Diretrizes de Programacao (Engineering Guidelines)
O front-end e regido por regras inegociaveis de otimizacao de CPU e RAM para suportar alta carga de dados:
- **Arquitetura Base:** React + Tailwind usando Feature-Sliced Design (FSD).
- **Zero Banco de Dados:** Consumo estatico de JSON/APIs via \TanStack Query\ com \staleTime: Infinity\.
- **Anti-Lag (Listas Massivas):** Proibido renderizar tabelas e grids grandes no DOM. Uso estrito de \TanStack Virtual\ com virtualizacao 2D (CSS Grid) para a Pokedex em Cards.
- **Motor Grafico (Mapa):** Elementos visuais massivos do minimapa sao renderizados no nivel da GPU usando \PixiJS\ (WebGL/Canvas), evitando o colapso do DOM.
- **Estado e Derivacao:** \Zustand\ apenas para intencao de acao. Calculos de busca de alta velocidade usam \useMemo\ na Main Thread (sem uso desnecessario de Web Workers).
- **Sandbox de Desenvolvimento (Regra 19):** Codigo nao toca na master. Todo Scaffold e feito em Git Worktrees separadas (ex: a pasta \poke-alliance-react\). Para maiores detalhes, leia o arquivo modular na pasta .agents/rules.

