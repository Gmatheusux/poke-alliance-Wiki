---
name: quests_npcs
category: tarefas_e_ferramentas
title: "Quests Principais, Tasks do Mundo e NPCs"
description: "Guia canônico de missões permanentes, desafios de ginásio (CDR), NPCs utilitários e banco completo de World Tasks por região (Kanto, Johto, Hoenn e Shinies)."
version: "1.0.0"
updated_at: "2026-09-02"
---

# Quests, Tasks & NPCs: Guia de Missões e Progressão

> [!NOTE]
> Este conteúdo foi gerado com análise dos parceiros da Poke Alliance.

---

## 1. Visão Geral da Arquitetura de Missões

No Poke Alliance, as missões são divididas em quatro categorias funcionais:
1. **Quests Principais:** Jornadas narrativas que desbloqueiam acessos permanentes a novas regiões, áreas de caça exclusivas ou itens únicos de alto valor (como o *Lucky Amulet*).
2. **Desafios de Ginásio (GYMs):** Trilha de 3 etapas por cidade que recompensa com insígnias para o sistema de **Talentos (CDR de Bag)**.
3. **Tasks do Mundo (World Tasks):** Missões de caça e entrega iniciadas com NPCs no mapa para farm massivo de XP, *Bubble Gums*, *Mighty Tokens* e Pokémon Shiny em Poké Balls temáticas.
4. **Linked Tasks & Task Tracker:** Trilha de tarefas vinculadas no cliente recomendada desde o Level 1 para progressão guiada.

---

## 2. Quests Principais (Acessos Permanentes e Recompensas Únicas)

> **TL;DR:** As Quests Principais são permanentes e não sofrem rotação. Devem ser priorizadas assim que o Treinador atingir o nível mínimo exigido.

### Tabela Resumo de Quests

| Quest | Level Mínimo | NPC / Ponto de Partida | Recompensa Principal |
| :--- | :--- | :--- | :--- |
| **Captain Willy: Relíquia** | Lv 80 | Captain Willy (Docas de Olivine) | 1.000.000 XP + Acesso ao Lucky Amulet |
| **Flint: Rochas Ancestrais** | Lv 100 | NPC Flint | 500.000 XP + 3x Ancient Stones + Flint Shelf |
| **Dr. Vektor e Porygon** | Lv 200 | Dr. Vektor (Laboratório Digital) | 5.000.000 XP + 4x Enhanced Normal Stones + Spawn de Porygon |
| **Acesso a Hoenn** | Lv 250 | Prof. Oak ➔ Prof. Elm ➔ Birch | Passaporte para Hoenn + 1x Ovo Inicial (Gen 3) |
| **Lucky Amulet** | Lv 250 | Área de Dive (Leste de Vermilion) | 1x Lucky Amulet (Equipamento de Held Global) |
| **Acesso às Orange Islands** | Livre | Praia de Cianwood ➔ Capt. Frederic | Liberação de rota de viagem Johto ↔ Orange Islands |
| **Dr. Oliveira: Shiny Ditto** | Livre | Dr. Oliveira (Laboratório) | 500.000 XP (1ª vez) + Síntese de Shiny Ditto |

---

### Detalhamento das Quests

#### 1. Captain Willy e a Relíquia
- **Requisitos:** Level 80+.
- **Início:** Fale com o **Captain Willy** nas docas ao sul de Olivine (Johto).
- **Mecânica:** Navegue até a área marítima infestada de Tentacruel, derrote os inimigos e recupere a relíquia náutica solicitada.
- **Recompensas:** 1.000.000 de Experiência + Liberação do pré-requisito para o *Lucky Amulet*.

---

#### 2. Lucky Amulet (Puzzle das Profundezas)
- **Requisitos:** Level 250+ e conclusão prévia da missão do *Captain Willy*.
- **Localização:** Acesso subaquático via **Dive** à direita da cidade de Vermilion.
- **Regras da Instância:**
  - Limite de **60 minutos** por tentativa.
  - Capacidade máxima de **3 jogadores simultâneos** (cada um em sua própria instância isolada).
- **Recompensa:** **1x Lucky Amulet** (Item único por personagem).
- **Mecânica de Funcionamento do Amuleto:**
  - Permite equipar um **Held X-Lucky** que aplica efeito de bônus de loot global para todos os Pokémon do Treinador.
  - **Efetividade:** O Held equipado no amuleto opera com **50% da sua força normal**.
  - **Regra de Prioridade (Não-Cumulativo com Ditto):** O servidor compara o bônus do X-Lucky do Pokémon ativo (100%) com o bônus do amuleto (50%). **Apenas o maior valor é aplicado** ao drop de itens.
  - **Extração Segura:** O NPC de remoção de Helds (Rosemary no Trade Center) pode retirar o X-Lucky do amuleto devolvendo o item no tier atual.

---

#### 3. Dr. Vektor e o Mundo Digital (Porygon Quest)
- **Requisitos:** Level 200+.
- **Início:** Fale com o **Dr. Vektor** em seu laboratório e acesse o computador terminal adjacente.
- **Regras da Instância:**
  - Instância **solo** (1 jogador por vez).
  - Tempo limite de **45 minutos**. Se o tempo expirar, o Treinador é teleportado para fora.
- **Puzzle dos Lasers:**
  - Barreiras de laser tricolores bloqueiam o avanço: **Verde**, **Vermelho** e **Azul**.
  - Terminais coloridos mudam de posição aleatoriamente a cada tentativa.
  - O jogador deve interagir com os computadores na ordem exata indicada pelo circuito. Um clique errado reinicia a sequência e embaralha as posições.
- **Batalha Final:**
  - Na sala final, o time do jogador é totalmente curado.
  - Derrote o boss **Giant Porygon** antes do tempo limite de 45 minutos.
- **Recompensas de Conclusão:**
  - **5.000.000 de Experiência**;
  - **50x Empty Alliance Ball**;
  - **50x Empty Yume Ball**;
  - **4x Enhanced Normal Stone**;
  - **Acesso Permanente:** O computador do Dr. Vektor torna-se um portal fixo para a área de caça com spawn livre de **Porygon selvagens**.

---

#### 4. Flint (Especialista em Rochas)
- **Requisitos:** Level 100+.
- **Etapa 1:**
  - **Entregar:** 150x Onix Tail, 200x Stone Rocks, 200x Horn Drill e 50x Rock Plate.
  - **Recompensa:** 500.000 de Experiência.
- **Etapa 2:**
  - **Entregar:** 10x Crystal e 10x Metal.
  - **Recompensas:** 3x Ancient Stones + Escolha de 1x Flint Shelf (móvel para house com bônus).

---

#### 5. Passaporte para Hoenn (Hoenn Regional Access)
- **Requisitos:** Level 250+.
- **Cadeia de NPCs:** **Professor Oak** (Pallet / Kanto) ➔ **Professor Elm** (New Bark / Johto) ➔ **Hank** ➔ **Professor Birch** (Littleroot / Hoenn).
- **Mecânica:**
  - Transporte de pacotes de pesquisa entre os laboratórios regionais.
  - Logística com caminhão de carga.
  - Capturar e entregar 1x Poochyena para o Prof. Birch.
- **Recompensas:**
  - Desbloqueio definitivo da região de **Hoenn** e seu sistema de hunts/rotações;
  - **1x Ovo Inicial aleatório** (Mudkip, Treecko ou Torchic).

---

#### 6. Acesso às Orange Islands
- **Requisitos:** Sem restrição explícita de level.
- **Mecânica:**
  - Explore a praia de Cianwood e abra um baú enferrujado escondido para obter a **Boarding Key**.
  - Entregue a chave ao **Captain Frederic**.
- **Recompensa:** Liberação da linha náutica expressa entre **Johto e Orange Islands**.

---

#### 7. Dr. Oliveira e a Síntese do Shiny Ditto
- **Requisitos:** Sem restrição explícita de level.
- **Primeira Conclusão:**
  1. Derrote **50x Ditto selvagens** ➔ Receba **500.000 de Experiência**.
  2. Junte os insumos: **1.000x DNA Gosme**, **1x Ditto normal** e **1x DNA Chain**.
  3. Entregue os materiais ao **Dr. Oliveira**.
- **Recompensa:** **1x Shiny Ditto**.
  - > [!IMPORTANT]
  - > A síntese preserva integralmente o **tipo de Poké Ball**, o nível de **Boost** (+X) e os **Helds equipados** no Ditto original entregue.
- **Repetibilidade:** A troca de materiais pode ser repetida para criar novos Shiny Dittos, mas a recompensa de 500k XP é concedida apenas na primeira entrega.

---

## 3. Desafios dos Ginásios de Kanto (Alfred & Líderes)

Os 8 Ginásios de Kanto são a espinha dorsal para habilitar as hunts de alta intensidade em Hoenn através do desbloqueio de **Cooldown Reduction (CDR) na Bag**.

> **Mecânica de CDR da Bag:** Cada insígnia de líder conquistada permite ativar 1 ponto no painel de **Talentos**. Cada ponto reduz em **1 segundo** o tempo de recarga das magias dos Pokémon guardados nas Poké Balls da bag (acumulando até **8 segundos de CDR total**).

### Estrutura de Conquista em 3 Etapas

```
[Etapa 1: Tarefa do Alfred] ➔ [Etapa 2: Dungeon Secreta Lv 200] ➔ [Etapa 3: Batalha Pokéview Lv 250]
Derrotar 2x 10 Shinies       10 minutos solo / Sem Revive       6x6 contra o Líder de Ginásio
1.000.000 XP + 5 Bubble Gum  3.000.000 XP + Acesso ao GYM       Insígnia Oficial + Orbs Elementais
```

---

### Tabela de Ginásios, Tarefas e Insígnias

| Cidade | Tarefa do Alfred (Shiny Hunting) | Líder de Ginásio | Insígnia Concedida |
| :--- | :--- | :--- | :--- |
| **Pewter** | 10x Shiny Marowak + 10x Shiny Steelix | Brock | Boulder Badge |
| **Cerulean** | 10x Shiny Blastoise + 10x Shiny Feraligatr | Misty | Cascade Badge |
| **Vermilion** | 10x Shiny Raichu + 10x Shiny Lanturn | Lt. Surge | Thunder Badge |
| **Celadon** | 10x Shiny Venusaur + 10x Shiny Meganium | Erika | Rainbow Badge |
| **Fuchsia** | 10x Shiny Muk + 10x Shiny Tentacruel | Koga | Soul Badge |
| **Saffron** | 10x Shiny Espeon + 10x Shiny Xatu | Sabrina | Marsh Badge |
| **Cinnabar** | 10x Shiny Charizard + 10x Shiny Typhlosion | Blaine | Volcano Badge |
| **Viridian** | 10x Shiny Nidoqueen + 10x Shiny Nidoking | Giovanni | Earth Badge |

> [!TIP]
> **Ordem Recomendada:** Conclua primeiro os ginásios dos elementos contra os quais o seu time atual possui vantagem. Não guarde as insígnias: ative o CDR nos Talentos imediatamente para acelerar a rotação de spells nas caçadas.

---

## 4. NPCs Utilitários e Serviços Essenciais

- **Rosemary (Trade Center):** Especialista em Helds. Realiza a fusão de Helds de mesmo tier, troca de tickets e a extração segura de itens acoplados ao *Lucky Amulet*.
- **NPC Jully & TV Cam System:** Gerencia o sistema de transmissão interna. Assistir ou transmitir partidas concede um bônus passivo de **+5% de chance de encontro de Shinies**.
- **Professores Regionais (Oak, Elm, Birch):** Responsáveis pela entrega de Pokémon iniciais, validação de Pokédex e pontes de progressão entre regiões.
- **Captain Frederic (Cianwood):** Mestre de navegação para as Orange Islands.
- **Captain Willy (Olivine):** Guia de navegação marítima e guardião do acesso ao amuleto.

---

## 5. Linked Tasks & Task Tracker (Guia Tático)

As **Linked Tasks (Tarefas Vinculadas)** são a forma mais eficiente de escalar do Level 1 ao 150 sem depender de grind solto.

### Recomendações Estratégicas:
1. **Início Guiado (Level 1+):** Abra o menu superior `Tasks ➔ Linked Tasks`. A sequência ensina os multiplicadores de dano elemental (ex: Ground vs Electric, Electric vs Flying) enquanto entrega XP e suprimentos.
2. **Starter Estratégico:** Bulbasaur é recomendado no início pela facilidade de controle de grupo e sustain contra hordas em Kanto.
3. **Task Tracker em Segundo Plano:** Mantenha o rastreador ativo na tela enquanto faz rotas de entrega de World Tasks para cumprir múltiplos objetivos simultaneamente.

---

## 6. Banco Completo de Tasks do Mundo (World Tasks)

> **Regra de Execução:** Localize o NPC ➔ Aceite o diálogo ➔ Cumpra a meta de abates/entregas ➔ Retorne ao NPC para coletar as recompensas.

---

### Tasks de Kanto (32 NPCs)

| NPC | Objetivos / Alvos | Recompensas |
| :--- | :--- | :--- |
| **Aaron** | Derrotar 40x Voltorb<br>Derrotar 20x Magnemite | 30.000 XP |
| **Alexander** | Derrotar 5x Pidgey<br>Derrotar 5x Spearow | 10.000 XP + 100x Ultra Potion |
| **Aurora** | Derrotar 300x Cloyster<br>Derrotar 1x Shiny Cloyster | 500.000 XP + 2x Bubble Gum |
| **Autumn** | Derrotar 300x Skarmory<br>Derrotar 1x Shiny Skarmory | 500.000 XP + 2x Bubble Gum |
| **Ava** | Derrotar 150x Exeggutor | 100.000 XP + 250x Revive |
| **Benjamin** | Derrotar 300x Piloswine<br>Derrotar 1x Shiny Piloswine | 500.000 XP + 2x Bubble Gum |
| **Bert** | Derrotar 300x Blastoise<br>Derrotar 300x Charizard<br>Derrotar 300x Venusaur | 500.000 XP |
| **Blake** | Derrotar 1x Shiny Bulbasaur<br>Derrotar 30x Ivysaur<br>Derrotar 50x Bulbasaur | 50.000 XP + 1x Bubble Gum |
| **Charlotte** | Derrotar 25x Pidgeotto<br>Derrotar 15x Fearow | 25.000 XP + 1x Hazelnut Easter Egg |
| **Chloe** | Derrotar 300x Arcanine<br>Derrotar 1x Shiny Arcanine | 500.000 XP + 2x Bubble Gum |
| **Connor** | Derrotar 100x Muk | 50.000 XP |
| **Elena** | Derrotar 10x Caterpie<br>Derrotar 10x Weedle | 10.000 XP |
| **Eva** | Derrotar 300x Blastoise<br>Derrotar 1x Shiny Blastoise | 500.000 XP + 2x Bubble Gum |
| **Gavin** | Derrotar 50x Machop<br>Derrotar 3x Shiny Machop<br>Derrotar 50x Machoke | 50.000 XP + 1x Bubble Gum |
| **Harper** | Derrotar 300x Jynx<br>Derrotar 1x Shiny Jynx | 500.000 XP + 2x Bubble Gum |
| **Hayden** | Derrotar 20x Pidgey<br>Derrotar 60x Pidgeotto<br>Derrotar 100x Pidgeot | 50.000 XP + 1x Bubble Gum |
| **Isaac** | Derrotar 300x Alakazam<br>Derrotar 1x Shiny Alakazam | 500.000 XP + 2x Bubble Gum |
| **Isabella** | Derrotar 20x Mankey | 25.000 XP + 2x Truffled Egg (Chocolate) |
| **Liam** | Derrotar 30x Rattata<br>Derrotar 1x Shiny Rattata | 10.000 XP + 1x Bubble Gum |
| **Lily** | Derrotar 30x Cubone<br>Derrotar 100x Marowak | 50.000 XP |
| **Lucas** | Derrotar 300x Dewgong<br>Derrotar 1x Shiny Dewgong | 500.000 XP + 2x Bubble Gum |
| **Nina** | Derrotar 30x Weepinbell<br>Derrotar 20x Gloom | 50.000 XP |
| **Nolan** | Derrotar 100x Tangela<br>Derrotar 1x Shiny Tangela<br>Entregar 1x Green Vine | **ETAPA 1:** 100.000 XP + 2x Bubble Gum <br>**ETAPA 2:** Shiny Tangela (Janguru Ball) |
| **Oliver** | Derrotar 300x Charizard<br>Derrotar 1x Shiny Charizard | 500.000 XP + 2x Bubble Gum |
| **Owen** | Derrotar 50x Diglett<br>Derrotar 1x Shiny Diglett<br>Derrotar 50x Sandshrew<br>Derrotar 1x Shiny Sandshrew | 50.000 XP + 1x Bubble Gum |
| **Penelope** | Derrotar 150x Meganium<br>Derrotar 150x Venusaur<br>Derrotar 1x Shiny Meganium<br>Derrotar 1x Shiny Venusaur | 500.000 XP + 2x Bubble Gum |
| **Sebastian** | Derrotar 300x Clefable<br>Derrotar 1x Shiny Clefable | 500.000 XP + 2x Bubble Gum |
| **Stella** | Derrotar 30x Charmander<br>Derrotar 50x Charmeleon<br>Derrotar 1x Shiny Charmander | 50.000 XP + 1x Bubble Gum |
| **Syrphyna** | Derrotar 750x Charizard | 500.000 XP + 1x Bubble Gum + 15x Magu Ball |
| **Violet** | Derrotar 1x Shiny Wigglytuff<br>Derrotar 300x Wigglytuff | 500.000 XP + 2x Bubble Gum |
| **Wyatt** | Derrotar 300x Machamp<br>Derrotar 1x Shiny Machamp | 500.000 XP + 2x Bubble Gum |
| **Zoe** | Derrotar 1x Shiny Arbok<br>Derrotar 50x Arbok | 50.000 XP + 1x Bubble Gum |

---

### Tasks de Johto (23 NPCs)

| NPC | Objetivos / Alvos | Recompensas |
| :--- | :--- | :--- |
| **Blaze** | Derrotar 1.500x Skarmory<br>Derrotar 25x Shiny Skarmory<br>Entregar 1x Yellow Steel Wing | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Skarmory (Tinker Ball) |
| **Caleb** | Derrotar 300x Nidoking<br>Derrotar 1x Shiny Nidoking | 500.000 XP + 2x Bubble Gum |
| **David** | Derrotar 150x Hitmontop<br>Derrotar 150x Hitmonlee<br>Derrotar 150x Hitmonchan | 10.000 XP + 1x Bubble Gum |
| **Dylan** | Derrotar 30x Pidgey<br>Derrotar 30x Spearow | 50.000 XP |
| **Elijah** | Derrotar 300x Nidoqueen<br>Derrotar 1x Shiny Nidoqueen | 500.000 XP + 2x Bubble Gum |
| **Fazendeiro Carl** | Derrotar 1.300x Houndoom<br>Vencer Mega Houndoom<br>Capturar e entregar 1x Miltank | 20.000.000 XP + 50x Alliance Ball + 50x Yume Ball + 4x Enhanced Normal Stone + 20x Moomoo Milk + Acesso: produção de MooMoo Milk |
| **Grace** | Derrotar 30x Gastly<br>Derrotar 30x Haunter | 50.000 XP |
| **Grayson** | Derrotar 300x Houndoom<br>Derrotar 1x Shiny Houndoom | 500.000 XP + 2x Bubble Gum |
| **Henry** | Derrotar 300x Miltank<br>Derrotar 1x Shiny Miltank | 500.000 XP + 2x Bubble Gum |
| **Jackson** | Derrotar 300x Gengar<br>Derrotar 1x Shiny Gengar | 500.000 XP + 2x Bubble Gum |
| **Lara** | Derrotar 1x Shiny Pidgey<br>Derrotar 1x Shiny Spearow | 30.000 XP + 1x Bubble Gum |
| **Leah** | Derrotar 80x Raticate | 50.000 XP |
| **Logan** | Derrotar 300x Golem<br>Derrotar 1x Shiny Golem | 500.000 XP + 2x Bubble Gum |
| **Mason** | Derrotar 300x Venusaur<br>Derrotar 1x Shiny Venusaur | 500.000 XP + 2x Bubble Gum |
| **Maya** | Derrotar 10x Metapod<br>Derrotar 10x Kakuna | 20.000 XP |
| **Mia** | Derrotar 300x Misdreavus<br>Derrotar 1x Shiny Misdreavus | 500.000 XP + 2x Bubble Gum |
| **Quill** | Derrotar 100x Qwilfish<br>Derrotar 1x Shiny Qwilfish<br>Entregar 1x Poisoned Fish Tail | **ETAPA 1:** 100.000 XP + 2x Bubble Gum <br>**ETAPA 2:** Shiny Qwilfish (Sora Ball) |
| **Ruby** | Derrotar 300x Rhydon<br>Derrotar 1x Shiny Rhydon | 500.000 XP + 2x Bubble Gum |
| **Samuel** | Derrotar 150x Snorlax<br>Derrotar 150x Ursaring<br>Derrotar 1x Shiny Snorlax<br>Derrotar 1x Shiny Ursaring | 500.000 XP + 2x Bubble Gum |
| **Scarlett** | Derrotar 300x Dragonair<br>Derrotar 1x Shiny Dragonair | 500.000 XP + 2x Bubble Gum |
| **Serena** | Derrotar 30x Geodude<br>Derrotar 30x Machop | 50.000 XP |
| **Sofia** | Derrotar 10x Oddish | 15.000 XP + 20x Ultra Ball |
| **Wanda** | Derrotar 1.500x Wobbuffet<br>Derrotar 25x Shiny Wobbuffet<br>Entregar 1x Two-Eyed Shiny Tail | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Wobbuffet (Yume Ball) |

---

### Tasks de Hoenn (80 NPCs)

| NPC | Objetivos / Alvos | Recompensas |
| :--- | :--- | :--- |
| **Adriano** | Derrotar 300x Electrike<br>Derrotar 1.500x Manectric | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Alessandra** | Derrotar 300x Anorith<br>Derrotar 1.500x Armaldo | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Ashe** | Derrotar 300x Shuppet<br>Derrotar 1.500x Banette | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Aurelio** | Derrotar 100x Treecko<br>Derrotar 250x Grovyle<br>Derrotar 1.500x Sceptile | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Beatriz** | Derrotar 100x Torchic<br>Derrotar 250x Combusken<br>Derrotar 1.500x Blaziken | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Bianca** | Derrotar 750x Minun<br>Derrotar 750x Plusle | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Caio** | Derrotar 750x Volbeat<br>Derrotar 750x Illumise | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Calder** | Derrotar 15x Shiny Camerupt<br>Derrotar 15x Shiny Torkoal | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Cedric** | Derrotar 100x Mudkip<br>Derrotar 250x Marshtomp<br>Derrotar 1.500x Swampert | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Daniela** | Derrotar 1.500x Roselia | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Diana** | Derrotar 300x Poochyena<br>Derrotar 1.500x Mightyena | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Diego** | Derrotar 2.000x Castform | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Draven** | Derrotar 15x Shiny Flygon<br>Derrotar 15x Shiny Salamence | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Eduardo** | Derrotar 300x Zigzagoon<br>Derrotar 1.500x Linoone | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Elisa** | Derrotar 300x Feebas<br>Derrotar 1.500x Milotic | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Ester** | Derrotar 100x Beldum<br>Derrotar 250x Metang<br>Derrotar 1.500x Metagross | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Fabiana** | Derrotar 300x Gulpin<br>Derrotar 1.500x Swalot | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Fernanda** | Derrotar 300x Silcoon<br>Derrotar 1.500x Beautifly | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Fernando** | Derrotar 2.000x Kecleon | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Ferris** | Derrotar 10x Shiny Aggron<br>Derrotar 10x Shiny Mawile<br>Derrotar 10x Shiny Metagross | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Gabriela** | Derrotar 300x Duskull<br>Derrotar 1.500x Dusclops | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Gilberto** | Derrotar 300x Carvanha<br>Derrotar 1.500x Sharpedo | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Glacis** | Derrotar 15x Shiny Glalie<br>Derrotar 15x Shiny Walrein | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Gustavo** | Derrotar 300x Cascoon<br>Derrotar 1.500x Dustox | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Hadriel** | Derrotar 10x Shiny Hariyama<br>Derrotar 10x Shiny Medicham<br>Derrotar 10x Shiny Slaking | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Helena** | Derrotar 100x Lotad<br>Derrotar 250x Lombre<br>Derrotar 1.500x Ludicolo | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Heloisa** | Derrotar 300x Wailmer<br>Derrotar 1.500x Wailord | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Henrique** | Derrotar 2.000x Tropius | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Igor** | Derrotar 100x Seedot<br>Derrotar 250x Nuzleaf<br>Derrotar 1.500x Shiftry | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Isadora** | Derrotar 2.000x Chimecho | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Iuri** | Derrotar 300x Numel<br>Derrotar 1.500x Camerupt | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Jaqueline** | Derrotar 2.000x Torkoal | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Jorge** | Derrotar 2.000x Absol | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Juliana** | Derrotar 300x Taillow<br>Derrotar 1.500x Swellow | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Kaela** | Derrotar 10x Shiny Sceptile<br>Derrotar 10x Shiny Blaziken<br>Derrotar 10x Shiny Swampert | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Karina** | Derrotar 300x Snorunt<br>Derrotar 1.500x Glalie | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Kaue** | Derrotar 1.500x Grumpig<br>Derrotar 300x Spoink | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Kevin** | Derrotar 300x Wingull<br>Derrotar 1.500x Pelipper | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Larissa** | Derrotar 100x Ralts<br>Derrotar 250x Kirlia<br>Derrotar 1.500x Gardevoir | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Leonardo** | Derrotar 2.000x Clamperl | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Livia** | Derrotar 2.500x Spinda | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Lucine** | Derrotar 8x Shiny Linoone<br>Derrotar 8x Shiny Delcatty<br>Derrotar 7x Shiny Swellow<br>Derrotar 7x Shiny Kecleon | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Maera** | Derrotar 8x Shiny Milotic<br>Derrotar 8x Shiny Huntail<br>Derrotar 7x Shiny Gorebyss<br>Derrotar 7x Shiny Relicanth | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Marcelo** | Derrotar 300x Surskit<br>Derrotar 1.500x Masquerain | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Mario** | Derrotar 100x Trapinch<br>Derrotar 250x Vibrava<br>Derrotar 1.500x Flygon | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Natalia** | Derrotar 300x Cacnea<br>Derrotar 1.500x Cacturne | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Nelio** | Derrotar 100x Spheal<br>Derrotar 250x Sealeo<br>Derrotar 1.500x Walrein | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Nerida** | Derrotar 6x Shiny Wailord<br>Derrotar 6x Shiny Whiscash<br>Derrotar 6x Shiny Crawdaunt<br>Derrotar 6x Shiny Luvdisc<br>Derrotar 6x Shiny Clamperl | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Nicole** | Derrotar 300x Shroomish<br>Derrotar 1.500x Breloom | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Nyxen** | Derrotar 10x Shiny Sableye<br>Derrotar 10x Shiny Banette<br>Derrotar 10x Shiny Dusclops | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Octavio** | Derrotar 100x Slakoth<br>Derrotar 250x Vigoroth<br>Derrotar 1.500x Slaking | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Olivia** | Derrotar 2.000x Huntail | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Orlan** | Derrotar 15x Shiny Pelipper<br>Derrotar 15x Shiny Altaria | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Osvaldo** | Derrotar 300x Swablu<br>Derrotar 1.500x Altaria | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Patricia** | Derrotar 300x Nincada<br>Derrotar 750x Ninjask<br>Derrotar 750x Shedinja | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Priscila** | Derrotar 2.000x Zangoose | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Quezia** | Derrotar 2.000x Gorebyss | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Quirino** | Derrotar 100x Whismur<br>Derrotar 250x Loudred<br>Derrotar 1.500x Exploud | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Rafaela** | Derrotar 300x Makuhita<br>Derrotar 1.500x Hariyama | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Relto** | Derrotar 15x Shiny Castform<br>Derrotar 15x Shiny Armaldo | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Renato** | Derrotar 2.000x Seviper | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Roberto** | Derrotar 2.000x Relicanth | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Rohgar** | Derrotar 6x Shiny Mightyena<br>Derrotar 6x Shiny Sharpedo<br>Derrotar 6x Shiny Zangoose<br>Derrotar 6x Shiny Seviper<br>Derrotar 6x Shiny Absol | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Selene** | Derrotar 5x Shiny Gardevoir<br>Derrotar 5x Shiny Grumpig<br>Derrotar 5x Shiny Chimecho<br>Derrotar 5x Shiny Claydol<br>Derrotar 5x Shiny Lunatone<br>Derrotar 5x Shiny Solrock | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Sonia** | Derrotar 100x Bagon<br>Derrotar 250x Shelgon<br>Derrotar 1.500x Salamence | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Talia** | Derrotar 8x Shiny Breloom<br>Derrotar 8x Shiny Shiftry<br>Derrotar 7x Shiny Cacturne<br>Derrotar 7x Shiny Tropius | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Thiago** | Derrotar 1.000x Lunatone<br>Derrotar 1.000x Solrock | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Tiago** | Derrotar 2.000x Luvdisc | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Ulisses** | Derrotar 300x Skitty<br>Derrotar 1.500x Delcatty | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Verdra** | Derrotar 15x Shiny Roselia<br>Derrotar 15x Shiny Cradily | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Veska** | Derrotar 5x Shiny Beautifly<br>Derrotar 5x Shiny Dustox<br>Derrotar 4x Shiny Masquerain<br>Derrotar 4x Shiny Ninjask<br>Derrotar 4x Shiny Volbeat<br>Derrotar 4x Shiny Illumise<br>Derrotar 4x Shiny Shedinja | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Vicente** | Derrotar 300x Barboach<br>Derrotar 1.500x Whiscash | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Voltrix** | Derrotar 30x Shiny Manectric | 5.000.000 XP + 10x Medal Box + +5 de progressão Hazard em Hoenn |
| **Wagner** | Derrotar 2.000x Sableye | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Xenia** | Derrotar 2.000x Mawile | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Xisto** | Derrotar 300x Corphish<br>Derrotar 1.500x Crawdaunt | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Yasmin** | Derrotar 300x Baltoy<br>Derrotar 1.500x Claydol | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Ygor** | Derrotar 100x Aron<br>Derrotar 250x Lairon<br>Derrotar 1.500x Aggron | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Zeca** | Derrotar 300x Lileep<br>Derrotar 1.500x Cradily | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |
| **Zuleica** | Derrotar 300x Meditite<br>Derrotar 1.500x Medicham | 3.000.000 XP + 5x Special Bubble Gum + 450x Mighty Token |

---

### Tasks Shiny (Caçadas Especiais - 31 NPCs)

As Tasks Shiny exigem alto volume de abates de monstros comuns e versões Shiny, mas garantem **Pokémon Shiny capturados em Poké Balls especiais de alto valor cosmético e funcional**.

| NPC | Objetivos / Alvos | Recompensas |
| :--- | :--- | :--- |
| **Aldric** | Derrotar 1.500x Relicanth<br>Derrotar 25x Shiny Relicanth<br>Entregar 1x Greenish fossil fins | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Relicanth (Tale Ball) |
| **Atlas** | Derrotar 1.500x Heracross<br>Derrotar 25x Shiny Heracross<br>Entregar 1x Pink Bug Horn | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Heracross (Net Ball) |
| **Blade** | Derrotar 1.500x Scyther<br>Derrotar 25x Shiny Scyther<br>Entregar 1x Blue Scythe | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Scyther (Net Ball) |
| **Bramwell** | Derrotar 1.500x Mawile<br>Derrotar 25x Shiny Mawile<br>Entregar 1x Purple metal jaw | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Mawile (Tinker Ball) |
| **Camila** | Derrotar 1.500x Farfetch'd<br>Derrotar 25x Shiny Farfetch'd<br>Entregar 1x Dark Brown Wings | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Farfetch'd (Sora Ball) |
| **Coral** | Derrotar 1.500x Lapras<br>Derrotar 25x Shiny Lapras<br>Entregar 1x Purple Fin | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Lapras (Sora Ball) |
| **Coralia** | Derrotar 1.500x Gorebyss<br>Derrotar 25x Shiny Gorebyss<br>Entregar 1x Yellowish gorebyss tail | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Gorebyss (Sora Ball) |
| **Daisy** | Derrotar 1.500x Miltank<br>Derrotar 25x Shiny Miltank<br>Entregar 1x Blue Cow Tail | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Miltank (Yume Ball) |
| **Darian** | Derrotar 1.500x Huntail<br>Derrotar 25x Shiny Huntail<br>Entregar 1x Green abyssal tail | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Huntail (Sora Ball) |
| **Dexter** | Derrotar 1.500x Pinsir<br>Derrotar 25x Shiny Pinsir<br>Entregar 1x White Bug Horn | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Pinsir (Net Ball) |
| **Doris** | Derrotar 1.500x Snorlax<br>Derrotar 25x Shiny Snorlax<br>Entregar 1x Sleepyhead Paw | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Snorlax (Yume Ball) |
| **Edmund** | Derrotar 1.500x Pachirisu<br>Derrotar 25x Shiny Pachirisu<br>Entregar 1x Electric pink tail | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Pachirisu (Tinker Ball) |
| **Garrick** | Derrotar 1.500x Zangoose<br>Derrotar 25x Shiny Zangoose<br>Entregar 1x Blue tribe mark | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Zangoose (Yume Ball) |
| **Heinrich** | Derrotar 1.500x Aerodactyl<br>Entregar 1x Old Amber | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Aerodactyl (Dusk Ball) |
| **Helio** | Derrotar 1.500x Solrock<br>Derrotar 25x Shiny Solrock<br>Entregar 1x Red sun piece | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Solrock (Yume Ball) |
| **Kira** | Derrotar 1.500x Sableye<br>Derrotar 25x Shiny Sableye<br>Entregar 1x Yellowish big crystal | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Sableye (Moon Ball) |
| **Kyra** | Derrotar 1.500x Mimikyu<br>Derrotar 25x Shiny Mimikyu<br>Entregar 1x White mimikyu head | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Mimikyu (Moon Ball) |
| **Lyra** | Derrotar 1.500x Lunatone<br>Derrotar 25x Shiny Lunatone<br>Entregar 1x Blue moon piece | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Lunatone (Moon Ball) |
| **Marcel** | Derrotar 1.500x Mr. Mime<br>Derrotar 25x Shiny Mr. Mime<br>Entregar 1x Mimic Blue Clothes | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Mr. Mime (Tale Ball) |
| **Marissa** | Derrotar 1.500x Mantine<br>Derrotar 25x Shiny Mantine<br>Entregar 1x Cyan Ray Tail | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Mantine (Net Ball) |
| **Marlin** | Derrotar 1.500x Clamperl<br>Derrotar 25x Shiny Clamperl<br>Entregar 1x Purple shell | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Clamperl (Sora Ball) |
| **Matilda** | Derrotar 1.500x Kangaskhan<br>Derrotar 25x Shiny Kangaskhan<br>Entregar 1x Kangaskhan Blue Ear | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Kangaskhan (Yume Ball) |
| **Petunia** | Derrotar 1.500x Roselia<br>Derrotar 25x Shiny Roselia<br>Entregar 1x Black leaf | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Roselia (Net Ball) |
| **Riley** | Derrotar 1.500x Tauros<br>Derrotar 25x Shiny Tauros<br>Entregar 1x Green Bull Tail | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Tauros (Yume Ball) |
| **Rocky** | Derrotar 1.500x Sudowoodo<br>Derrotar 25x Shiny Sudowoodo<br>Entregar 1x Golden Nuggets | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Sudowoodo (Dusk Ball) |
| **Rowena** | Derrotar 1.500x Absol<br>Derrotar 25x Shiny Absol<br>Entregar 1x Red dark moon | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Absol (Dusk Ball) |
| **Sergio** | Derrotar 1.500x Seviper<br>Derrotar 25x Shiny Seviper<br>Entregar 1x Greenish poisonous tail | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Seviper (Net Ball) |
| **Sven** | Derrotar 1.500x Torkoal<br>Derrotar 25x Shiny Torkoal<br>Entregar 1x Yellow hull | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Torkoal (Magu Ball) |
| **Venn** | Derrotar 1.500x Toxicroak<br>Derrotar 25x Shiny Toxicroak<br>Entregar 1x Pink poison bladder | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Toxicroak (Net Ball) |
| **Vincent** | Derrotar 1.500x Tangela<br>Derrotar 25x Shiny Tangela<br>Entregar 1x Green Vine | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Tangela (Janguru Ball) |
| **Wendy** | Derrotar 1.500x Misdreavus<br>Derrotar 25x Shiny Misdreavus<br>Entregar 1x Terrifying Traces | **ETAPA 1:** 1.000.000 XP + 5x Bubble Gum <br>**ETAPA 2:** Shiny Misdreavus (Moon Ball) |

---

### Outras Tasks Globais

| NPC | Objetivos / Alvos | Recompensas |
| :--- | :--- | :--- |
| **Astrid** | Derrotar 50x Leafeon<br>Derrotar 300x Venusaur<br>Derrotar 300x Meganium | 500.000 XP |
