# Poke Alliance - Modern Wiki & Dashboard

Bem-vindo ao repositório oficial da Wiki e Dashboard do **Poke Alliance**. Este projeto foi idealizado para romper com o padrão engessado e poluído das wikis de jogos tradicionais (como a rede Fandom).

O foco absoluto do nosso front-end é **Zero-Bloat**, acessibilidade cognitiva (otimizado para perfis neurodivergentes / TDAH) e agilidade bruta na entrega de dados para o jogador in-game.

## 🚀 Filosofia do Projeto

1. **A Morte do "Click and Wait":** Todo o sistema é guiado por uma barra **Omnisearch (Ctrl+K)** inteligente. Buscou, achou. Dados rápidos são exibidos instantaneamente via microinterações (Tooltips de itens) e modais sobrepostos com fundo em Blur, evitando redirects.
2. **Progressive Disclosure:** O fim das "paredes de texto". Dados densos (matrizes de dano, lore, regras de Held) ficam resguardados em abas lógicas (Tabs) ou sanfonas (Accordions), revelando-se estritamente sob demanda.
3. **O Meta é Rei:** Mais do que um banco estático, somos um hub competitivo. A Pokédex abriga módulos de comunidade que trazem **Tierlists Democráticas** (com votos dos usuários) e **Guias de Team Building**.

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

## 🛠️ Paradigmas de Desenvolvimento (Handoff)

Para contribuir na base de código (geralmente baseada em React/Tailwind), é terminantemente obrigatória a leitura do "Cofre" na raiz do projeto:

- `DESIGN.md`: Nosso contrato visual sagrado. Seu cabeçalho YAML abriga os Design Tokens (Tipografia, Espaçamentos e a paleta canônica dos 18 Elementos). Seu corpo Markdown detalha as leis inquebráveis de usabilidade (Mobile Thumb-Zone, Zero Squeeze).
- `MOODBOARD.md`: A diretriz estética e visual da interface, misturando arquitetura de SaaS de alta densidade (Progressive Disclosure) com UX diegético de jogos modernos. Possui os conceitos de UI renderizados.
- `ActiveContext.md`: O "cérebro" de rastreabilidade. Mantém vivo o estado do projeto, ditando o Paradigma de Contêineres (nenhuma codificação ocorre sem consultar o contexto atualizado).
- `userflow.md`: O fluxograma gráfico (Mermaid) mapeando os nós exatos da jornada do usuário pela plataforma.

---
> *"Construído para quem joga. Ocultando a complexidade, revelando a estratégia."*
