# Site Map Arquitetural - Poke Alliance Wiki

Este mapa unifica as intenções de neurodiversidade e redução de ruído (mapeadas no `userflow.md`) com as diretrizes de performance e usabilidade modernas definidas no `DESIGN.md`.

## Camada Base: Navegação Global
- **Header Flutuante:** 
  - **Barra Omnisearch (Ctrl+K):** Substitui a navegação em árvore clássica. Acessível de qualquer tela.
  - **Controles de Tema:** (Dark Mode default).
- **Menu de Navegação:**
  - *Desktop:* Sidebar esquerda mínima.
  - *Mobile:* Bottom Bar (respeitando a *Thumb Zone*).

---

## Nível 1: As 4 Áreas Principais

### 1. 🏠 Home / Dashboard
- **TL;DR Diário:** Resumo automático de eventos ativos.
- **Quick Access:** Cards dinâmicos para últimas buscas (Zero-Bloat).

### 2. 🐉 Pokédex (Meta & Combate)
- **Filtros Avançados (Dropdowns):**
  - **Level:** Seleção de range de nível mínimo para uso.
  - **Elemento:** Tipagem (🔥 Fogo, 💧 Água, etc).
  - **Variante:** Normal ou Shiny.
  - **Tier:** Classificação de força/raridade do Pokémon.
- **Lista Visual (Grid):** Cards responsivos exibindo o sprite, nome, tier e level de uso.
- **Contexto Isolado (Modal de Detalhes):** 
  - Ao clicar em um Card, a tela escurece (Blur) e o Modal surge.
  - Conteúdo fracionado por **Abas Navegáveis**:
    - **Status Base:** Vida, defesa, ataque, etc.
    - **Moveset:** Lista de skills com a descrição completa, acompanhada de *Tags Visuais* (`[AOE]`, `[Single]`, `[Buff]`).
    - **Loot / Spawns:** Onde encontrar e o que dropa.
    - **Pokelog:** Meta de abate do Pokémon por estágio, detalhando a quantidade de mortes necessárias e as respectivas recompensas para cada nível concluído.
- **Módulos de Meta (Comunidade):**
  - **Guia de Times:** Uma aba paralela focada na explicação de sinergias (Team Building) e lógicas de rotação de habilidades no combate.
  - **Tierlist da Comunidade:** Uma página de ranking interativa (Tiers S, A, B, C) baseada no voto aberto dos jogadores, com filtros por Elemento.

### 3. ⚙️ Sistemas (Mecânicas do Servidor)
Estrutura baseada em *Progressive Disclosure* (Tabs Verticais/Horizontais) para fatiar o conteúdo e evitar sobrecarga cognitiva.

- **Boosts (Sistema de Refinamento):**
  - **Introdução:** Explicação direta de como os boosts funcionam no meta.
  - **Abas Laterais de Elementos:** O usuário clica em Tabs laterais (ex: 💧 Water, 🔥 Fire) para filtrar.
  - **Tabela de Crafting:** Cada elemento exibe uma tabela focada listando os materiais necessários para craftar os níveis de boost daquele elemento específico.

- **Helds (Itens Equipáveis):**
  - **Tabela Geral/Catálogo:** Uma tabela interativa (que se transforma em Cards no celular) listando todas as Helds do jogo.
  - **Detalhamento de Efeito:** Descrição clara e matemática do que cada Held faz (ex: "+15% de Dano Físico").

- **Máquina de Star:**
  - Mecânica de upgrade e melhoria de atributos.

### 4. 📜 Quests, Tasks & NPCs
- **Índice Mestre (Quests):** Lista de quests principais estruturada em *Accordions* (Sanfonas). O usuário expande só o que quer.
- **Catálogo de NPCs e Tasks:** Área dedicada para localizar NPCs específicos (ex: NPCs de Quests Shiny).
  - **Localização:** Em qual mapa/cidade o NPC está situado.
  - **Oferta:** Quais tasks, caçadas ou recompensas aquele NPC específico entrega.
- **Página de Passo a Passo (Dentro da Quest/Task):**
  - **Bloco TL;DR:** Card superior com: Nível exigido, Itens Necessários, NPC Inicial (com localização) e Recompensa Final.
  - **Corpo do Guia:** Uso intensivo de *Tooltips*. Se o texto disser "Traga 10x Fire Stone", o usuário passa o mouse e já vê onde dropa, sem sair do guia.

### 5. 👤 Personagem (Progresso e Colecionáveis)
- **Talentos:** Estruturada em abas (Personagem, Pokémon, Elementos). Cada seção exibe uma tabela clara com o efeito do talento e a lista exata de itens/materiais necessários para o desbloqueio.
- **Achievements (Conquistas):** Listagem dividida em categorias de progresso com barra indicadora de conclusão.
- **Medalhas:** Painel em formato "vitrine" (grid de ícones) exibindo as medalhas desbloqueadas e seus respectivos buffs passivos.
- **Pokelog:** Registro de exploração e capturas, mantendo as mecânicas de busca rápida do restante da wiki.

### 6. 🗺️ Minimapa (Navegação Espacial)
- **Mapa Interativo Web:** Um sistema de mapa em tela cheia ou modal largo com recursos de zoom e pan.
- **Filtros de Marcadores:** Toggle para ligar/desligar ícones de NPCs, áreas de caça (respawns) e baús de quests.

### 7. 🌍 Regiões (Geografia e Progressão)
- **Catálogo de Zonas:** Uma lista estruturada (ou visualização em Grid de cards de cenário) mostrando todas as regiões e ilhas.
- **Informações Vitais por Região:**
  - **Level Recomendado:** Uma faixa de nível exigida/ideal para acessar a área.
  - **Diferenciais:** O que a região oferece de único (ex: bioma específico, tipos de Pokémon predominantes).
  - **Como Chegar:** Instruções claras da rota ou requerimentos (quests prévias) para acessar o local.

### 8. 📈 Guia de Leveling
- **Rotas Otimizadas:** Divisão por faixas de level (ex: Lvl 10-20, 20-40) sugerindo as melhores rotas de experiência.
- **Recomendações Elementais:** Dicas focadas de "Onde upar" baseado no elemento do seu Pokémon atual.
