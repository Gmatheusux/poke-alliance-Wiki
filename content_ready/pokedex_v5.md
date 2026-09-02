# Pokédex V5: Dados Técnicos, Meta & Combate

---

## 1. Visão Geral do Sistema (TL;DR)

A **Pokédex V5** é a central tática e mecânica do Poke Alliance, projetada sob a arquitetura de **Híbrido Competitivo**. Este módulo unifica dados brutos de criaturas, tabelas de progressão, categorização por Tiers de força, sinergias de rotação e otimizações de combate PvE/Endgame.

> **Diretriz de Uso:** A Pokédex opera em conjunto com o motor de busca **Omnisearch (`Ctrl+K`)**. Filtros combinatórios (Level, Elemento, Variante e Tier) eliminam ruídos visuais e exibem diretamente os microdados essenciais para tomada de decisão em campo.

---

## 2. Sistema de Classificação e Tiers

O Poke Alliance categoriza seus Pokémon através de uma escala de Tiers baseada em poder base, kit de magias e escalabilidade em hunts de alta densidade.

### 2.1 Escala de Tiers
* **Tier 6 (Iniciais / Base):** Pokémon básicos de entrada (Level 1–40). Foco em utilidade de captura e progressão inicial.
* **Tier 5 (Intermediários / Shinies Básicos):** Formas intermediárias ou estágios Shiny de entrada (Level 30–50).
* **Tier 4 (Transição / Shinies Mid):** Formas evoluídas secundárias e Shinies com dano em área consistente (Level 50–80).
* **Tier 3 (DPS Sólido):** Terceiras evoluções normais (Level 80–100). Base sólida para hunts pré-Redscape.
* **Tier 2 (Core Competitivo):** Formas finais avançadas e Pokémon de alta performance (Level 100+).
* **Tier 1 (Elite DPS / Shinies Máximos):** Formas finais Shinies (Level 120+). Núcleo primário para clear speed em Hoenn e Dungeons.
* **Super Rare / Ultra Rare / Legendary / Mythic:** Variantes especiais com multiplicadores de status elevados, alta retenção de valor e requisitos de Hazard para drop de pedras Mega.

### 2.2 Relação entre Variantes (Normal vs. Shiny)
* **Elevação de Tier:** A forma Shiny de uma criatura avança de **2 a 3 Tiers** acima de sua versão normal.
* **Requisito de Nível:** Variantes Shiny exigem nível superior de uso do Treinador (ex: Venusaur Lv. 80 / Tier 3 ➔ Shiny Venusaur Lv. 120 / Tier 1).
* **Cam System:** Ativar a câmera interna de transmissão concede **+5% de chance passiva** no encontro de criaturas Shiny.

---

## 3. Catálogo Canônico da Pokédex (Base de Dados)

| ID | Geração | Nome | Variante | Elementos | Level Mínimo | Tier |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#001** | Gen 1 · Kanto | Bulbasaur | Normal | `[Grama]` `[Veneno]` | Lv. 1 | Tier 6 |
| **#001** | Gen 1 · Kanto | Shiny Bulbasaur | Shiny | `[Grama]` `[Veneno]` | Lv. 40 | Tier 5 |
| **#002** | Gen 1 · Kanto | Ivysaur | Normal | `[Grama]` `[Veneno]` | Lv. 40 | Tier 5 |
| **#002** | Gen 1 · Kanto | Shiny Ivysaur | Shiny | `[Grama]` `[Veneno]` | Lv. 50 | Tier 4 |
| **#003** | Gen 1 · Kanto | Venusaur | Normal | `[Grama]` `[Veneno]` | Lv. 80 | Tier 3 |
| **#003** | Gen 1 · Kanto | Shiny Venusaur | Shiny | `[Grama]` `[Veneno]` | Lv. 120 | Tier 1 |
| **#004** | Gen 1 · Kanto | Charmander | Normal | `[Fogo]` | Lv. 1 | Tier 6 |
| **#004** | Gen 1 · Kanto | Shiny Charmander | Shiny | `[Fogo]` | Lv. 40 | Tier 5 |
| **#005** | Gen 1 · Kanto | Charmeleon | Normal | `[Fogo]` | Lv. 40 | Tier 5 |
| **#005** | Gen 1 · Kanto | Shiny Charmeleon | Shiny | `[Fogo]` | Lv. 50 | Tier 4 |
| **#006** | Gen 1 · Kanto | Charizard | Normal | `[Fogo]` `[Voador]` | Lv. 80 | Tier 3 |
| **#006** | Gen 1 · Kanto | Shiny Charizard | Shiny | `[Fogo]` `[Voador]` | Lv. 120 | Tier 1 |
| **#007** | Gen 1 · Kanto | Squirtle | Normal | `[Água]` | Lv. 1 | Tier 6 |
| **#007** | Gen 1 · Kanto | Shiny Squirtle | Shiny | `[Água]` | Lv. 40 | Tier 5 |
| **#008** | Gen 1 · Kanto | Wartortle | Normal | `[Água]` | Lv. 40 | Tier 5 |
| **#008** | Gen 1 · Kanto | Shiny Wartortle | Shiny | `[Água]` | Lv. 50 | Tier 4 |
| **#152** | Gen 2 · Johto | Chikorita | Normal | `[Grama]` | Lv. 1 | Tier 6 |
| **#152** | Gen 2 · Johto | Shiny Chikorita | Shiny | `[Grama]` | Lv. 30 | Tier 5 |
| **#153** | Gen 2 · Johto | Bayleef | Normal | `[Grama]` | Lv. 40 | Tier 5 |
| **#153** | Gen 2 · Johto | Shiny Bayleef | Shiny | `[Grama]` | Lv. 50 | Tier 4 |
| **#154** | Gen 2 · Johto | Meganium | Normal | `[Grama]` | Lv. 80 | Tier 3 |
| **#154** | Gen 2 · Johto | Shiny Meganium | Shiny | `[Grama]` | Lv. 120 | Tier 1 |
| **#155** | Gen 2 · Johto | Cyndaquil | Normal | `[Fogo]` | Lv. 1 | Tier 6 |
| **#155** | Gen 2 · Johto | Shiny Cyndaquil | Shiny | `[Fogo]` | Lv. 30 | Tier 5 |
| **#156** | Gen 2 · Johto | Quilava | Normal | `[Fogo]` | Lv. 40 | Tier 5 |
| **#156** | Gen 2 · Johto | Shiny Quilava | Shiny | `[Fogo]` | Lv. 50 | Tier 4 |
| **#157** | Gen 2 · Johto | Typhlosion | Normal | `[Fogo]` | Lv. 80 | Tier 3 |
| **#157** | Gen 2 · Johto | Shiny Typhlosion | Shiny | `[Fogo]` | Lv. 120 | Tier 1 |
| **#158** | Gen 2 · Johto | Totodile | Normal | `[Água]` | Lv. 1 | Tier 6 |
| **#158** | Gen 2 · Johto | Shiny Totodile | Shiny | `[Água]` | Lv. 30 | Tier 5 |
| **#159** | Gen 2 · Johto | Croconaw | Normal | `[Água]` | Lv. 40 | Tier 5 |
| **#159** | Gen 2 · Johto | Shiny Croconaw | Shiny | `[Água]` | Lv. 50 | Tier 4 |
| **#252** | Gen 3 · Hoenn | Treecko | Normal | `[Grama]` | Lv. 40 | Tier 5 |
| **#252** | Gen 3 · Hoenn | Shiny Treecko | Shiny | `[Grama]` | Lv. 50 | Tier 4 |
| **#253** | Gen 3 · Hoenn | Grovyle | Normal | `[Grama]` | Lv. 50 | Tier 4 |
| **#253** | Gen 3 · Hoenn | Shiny Grovyle | Shiny | `[Grama]` | Lv. 80 | Tier 3 |
| **#254** | Gen 3 · Hoenn | Sceptile | Normal | `[Grama]` | Lv. 100 | Tier 2 |
| **#254** | Gen 3 · Hoenn | Shiny Sceptile | Shiny | `[Grama]` | Lv. 120 | Ultra Rare |
| **#255** | Gen 3 · Hoenn | Torchic | Normal | `[Fogo]` | Lv. 40 | Tier 5 |
| **#255** | Gen 3 · Hoenn | Shiny Torchic | Shiny | `[Fogo]` | Lv. 50 | Tier 4 |
| **#256** | Gen 3 · Hoenn | Combusken | Normal | `[Fogo]` `[Lutador]` | Lv. 50 | Tier 4 |
| **#256** | Gen 3 · Hoenn | Shiny Combusken | Shiny | `[Fogo]` `[Lutador]` | Lv. 80 | Tier 3 |
| **#257** | Gen 3 · Hoenn | Blaziken | Normal | `[Fogo]` `[Lutador]` | Lv. 100 | Tier 2 |
| **#257** | Gen 3 · Hoenn | Shiny Blaziken | Shiny | `[Fogo]` `[Lutador]` | Lv. 120 | Ultra Rare |
| **#258** | Gen 3 · Hoenn | Mudkip | Normal | `[Água]` | Lv. 40 | Tier 5 |
| **#258** | Gen 3 · Hoenn | Shiny Mudkip | Shiny | `[Água]` | Lv. 50 | Tier 4 |
| **#259** | Gen 3 · Hoenn | Marshtomp | Normal | `[Água]` `[Terra]` | Lv. 50 | Tier 4 |
| **#259** | Gen 3 · Hoenn | Shiny Marshtomp | Shiny | `[Água]` `[Terra]` | Lv. 80 | Tier 3 |
| **#387** | Gen 4 · Sinnoh | Turtwig | Normal | `[Grama]` | Lv. 30 | Tier 6 |
| **#388** | Gen 4 · Sinnoh | Grotle | Normal | `[Grama]` | Lv. 80 | Tier 4 |
| **#389** | Gen 4 · Sinnoh | Torterra | Normal | `[Grama]` `[Terra]` | Lv. 100 | Tier 1 |
| **#390** | Gen 4 · Sinnoh | Chimchar | Normal | `[Fogo]` | Lv. 30 | Tier 6 |
| **#391** | Gen 4 · Sinnoh | Monferno | Normal | `[Fogo]` `[Lutador]` | Lv. 80 | Tier 4 |
| **#392** | Gen 4 · Sinnoh | Infernape | Normal | `[Fogo]` `[Lutador]` | Lv. 100 | Tier 1 |
| **#393** | Gen 4 · Sinnoh | Piplup | Normal | `[Água]` | Lv. 60 | Tier — |
| **#394** | Gen 4 · Sinnoh | Prinplup | Normal | `[Água]` | Lv. 60 | Tier — |
| **#395** | Gen 4 · Sinnoh | Empoleon | Normal | `[Água]` `[Aço]` | Lv. 60 | Tier — |
| **#531** | Gen 5 · Unova | Audino | Normal | `[Normal]` | Lv. 100 | Tier 2 |
| **#545** | Gen 5 · Unova | Scolipede | Normal | `[Inseto]` `[Veneno]` | Lv. 100 | Tier 2 |
| **#621** | Gen 5 · Unova | Druddigon | Normal | `[Dragão]` | Lv. 100 | Tier 2 |
| **#621** | Gen 5 · Unova | Shiny Druddigon | Shiny | `[Dragão]` | Lv. 120 | Tier 1 |
| **#633** | Gen 5 · Unova | Deino | Normal | `[Sombrio]` `[Dragão]` | Lv. 50 | Tier 5 |
| **#633** | Gen 5 · Unova | Shiny Deino | Shiny | `[Sombrio]` `[Dragão]` | Lv. 50 | Tier 5 |
| **#634** | Gen 5 · Unova | Zweilous | Normal | `[Sombrio]` `[Dragão]` | Lv. 100 | Tier 2 |
| **#634** | Gen 5 · Unova | Shiny Zweilous | Shiny | `[Sombrio]` `[Dragão]` | Lv. 100 | Tier 2 |
| **#635** | Gen 5 · Unova | Hydreigon | Normal | `[Sombrio]` `[Dragão]` | Lv. 100 | Tier 2 |
| **#659** | Gen 6 · Kalos | Bunnelby | Normal | `[Normal]` | Lv. 1 | Tier — |
| **#660** | Gen 6 · Kalos | Diggersby | Normal | `[Normal]` `[Terra]` | Lv. 1 | Tier — |
| **#669** | Gen 6 · Kalos | Flabébé | Normal | `[Fada]` | Lv. 20 | Tier 6 |
| **#669** | Gen 6 · Kalos | Shiny Flabébé | Shiny | `[Fada]` | Lv. 40 | Tier 5 |
| **#670** | Gen 6 · Kalos | Floette | Normal | `[Fada]` | Lv. 40 | Tier 5 |
| **#670** | Gen 6 · Kalos | Shiny Floette | Shiny | `[Fada]` | Lv. 50 | Tier 4 |
| **#671** | Gen 6 · Kalos | Florges | Normal | `[Fada]` | Lv. 100 | Tier 2 |
| **#671** | Gen 6 · Kalos | Shiny Florges | Shiny | `[Fada]` | Lv. 120 | Super Rare |
| **#691** | Gen 6 · Kalos | Dragalge | Normal | `[Veneno]` `[Dragão]` | Lv. 100 | Tier 2 |
| **#700** | Gen 6 · Kalos | Sylveon | Normal | `[Fada]` | Lv. 100 | Tier 2 |
| **#700** | Gen 6 · Kalos | Shiny Sylveon | Shiny | `[Fada]` | Lv. 120 | Legendary |
| **#778** | Gen 7 · Alola | Mimikyu | Normal | `[Fantasma]` `[Fada]` | Lv. 100 | Tier 2 |
| **#778** | Gen 7 · Alola | Shiny Mimikyu | Shiny | `[Fantasma]` `[Fada]` | Lv. 120 | Super Rare |

---

## 4. Arquitetura de Movesets e Tags de Combate

No Poke Alliance, a eficácia de combate é determinada pelo balanceamento entre área de impacto (AoE), controle de grupo (CC) e tempo de recarga (cooldown). As magias são divididas nas seguintes tipologias operacionais:

* `[AOE]` **Dano em Área:** Habilidades de dispersão radial ou linear, essenciais para rotações rápidas de farm em packs de monstros.
* `[Single]` **Alvo Único:** Alta concentração de dano direto, utilizado para finalizar elites, champions e chefes de Dungeon.
* `[Control]` **Controle / Debuff:** Aplicação de status negativos (`[Paralyze]`, `[Sleep]`, `[Slow]`, `[Confusion]`) para anular retaliações.
* `[DoT]` **Dano Contínuo:** Aplicações de dano periódico (`[Poison]`, `[Burn]`), ideais para early game e alvos de alta defesa.
* `[Buff]` **Potencializador:** Aumentos temporários de Ataque, Defesa, Precisão ou Velocidade.
* `[Sustain]` **Sustentação:** Habilidades de autocura ou cura em grupo (`[Heal]`, `[Life Drain]`).

### Sinergia de Bag CDR (Cooldown Reduction)
* **Mecânica Central:** Magias de Pokémon guardados na bag continuam recuperando cooldown enquanto outro membro luta em campo.
* **Insígnias de Kanto (8 GYMs):** Cada insígnia entregue desbloqueia 1 nível do talento de Cooldown da bag.
* **Teto Máximo:** 8 segundos de aceleração de recarga na bag, viabilizando rotação ininterrupta de 6 Pokémon em áreas de alta dificuldade (Hoenn e Hazards).

---

## 5. Progressão e Otimização de Atributos

```
[Treinamento House] ──> [Sistema de Boost +50] ──> [Held Items T1-T7] ──> [Talentos Ofensivos/Defensivos]
```

### 5.1 Treinamento de Atributos (Punching Bag)
Realizado dentro de houses utilizando cargas (Normal: padrão | Premium: +20% de XP de treino). O consumo ocorre a cada 2 segundos.

| Atributo | Ganho por Nível | Prioridade de Build |
| :--- | :--- | :--- |
| **Attack** | +0,1% de dano | Primário para Main DPS |
| **Defense** | +0,05% de defesa | Secundário para Tanks |
| **HP** | +0,1% de vida | Primário para Tanks / Suportes |
| **Precision** | +0,2 ponto percentual | Essencial contra inimigos com evasão |
| **Evasion** | +0,2 ponto percentual | Defesa ativa contra dano físico |
| **Critical Damage** | +0,1% de dano crítico | Sinergia com builds de alto dano |
| **Critical Chance** | +0,1 ponto percentual | Sinergia com builds de alto dano |
| **Critical Resistance** | +0,1 ponto percentual | Redução de dano crítico recebido |

### 5.2 Sistema de Boost (+0 a +50)
* **Equivalência Matemática:** Cada +1 ponto de Boost equivale a **3 níveis adicionais** no cálculo de dano das magias. Um Pokémon **+50** recebe bônus equivalente a **+150 níveis**.
* **Proteção contra Regressão:** Em caso de falha, a pedra é consumida, mas o nível de Boost não regride.
* **Mecânica de Pity:** Cada falha adiciona **+10 pontos percentuais** de chance à próxima tentativa da mesma faixa até o sucesso.

| Faixa de Boost | Pedra Exigida | Chance Base Inicial |
| :--- | :--- | :--- |
| **+0 a +5** | Novice Stone | 50% |
| **+5 a +10** | Elemental Stone | 40% |
| **+10 a +15** | Common Stone | 30% |
| **+15 a +20** | Enhanced Stone | 20% |
| **+20 a +25** | Potent Stone | 18% |
| **+25 a +30** | Advanced Stone | 15% |
| **+30 a +35** | Fortified Stone | 12% |
| **+35 a +40** | Supreme Stone | 10% |
| **+40 a +45** | Celestial Stone | 8% |
| **+45 a +50** | Mystic Stone | 5% |

### 5.3 Helds e Amuleto da Sorte
* **Fusão na Máquina:** 3 Helds do mesmo Tier possuem **25% de chance** de gerar 1 Held Ticket do Tier seguinte.
* **Pity de Relíquias:** Em caso de falha, recebe 1 Ticket do mesmo Tier e 1 Relic Point. 10 Relic Points garantem o Tier-alvo.
* **Lucky Amulet:** Held `[X-Lucky]` equipado no amuleto opera com **50% de efetividade passiva** para todo o time (não acumula com X-Lucky ativo do Pokémon, aplicando sempre o maior valor).

---

## 6. Dinâmica do Meta PvE e Escalonamento de Hazard

O meta de Poke Alliance é centrado em **Clear Speed de Área**, cobertura elemental e sustentação contínua.

### 6.1 Composição Estrutural de Equipe (Roster de 6 Vagas)
1. **1x Opener / Tank:** Alta resistência e controle de grupo para agrupar monstros e absorver impacto inicial.
2. **2x a 3x Main DPS AoE:** Causadores de dano em área massivo com vantagem elemental sobre a hunt.
3. **1x Utility / Sustain:** Pokémon com autocura, suporte ou mitigação para emergências.
4. **1x Flex / Coverage:** Especialista para alvos resistentes, mobilidade (`[Fly]`/`[Surf]`/`[Ride]`) ou finalização.

### 6.2 Escalonamento de Hazard (Hoenn Endgame)
Hazard amplifica recompensas, mas penaliza diretamente a sobrevivência e a matemática de acerto crítico.

| Nível de Hazard | Bônus de XP | Bônus de Loot | Dano Causado | Dano Recebido | Desbloqueio Especial |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hazard 0** | Padrão | Padrão | 100% | 100% | Farm básico / Treino |
| **Hazard 1** | +5% | +0,5% | 97% (-3%) | 105% (+5%) | Início da progressão |
| **Hazard 5** | +25% | +2,5% | 85% (-15%) | 125% (+25%) | **Sealed Mega Stones (Legendary)** |
| **Hazard 10** | +50% | +5,0% | 70% (-30%) | 150% (+50%) | **Sealed Mega Stones (Mythic)** |
| **Hazard 20** | +100% | +10,0% | 40% (-60%) | 200% (+100%) | Hunts avançadas |
| **Hazard 30 (Máx)** | +150% | +15,0% | 10% (-90%) | 250% (+150%) | Teto de recompensa |

---

## 7. Estratégias do Meta e Análise de Criadores

> [!NOTE]
> Este conteúdo foi gerado com análise dos parceiros da Poke Alliance.

### 7.1 Progressão Otimizada: Level 0 ao 150 (Early Game Rush)
* **Seleção Inicial Estratégica:** Escolha de **Bulbasaur** como inicial recomendado pela ampla utilidade em veneno e captura via Sleep/Dex, facilitando a aquisição de recursos nos primeiros mapas.
* **Priorização Absoluta de Linked Tasks:** Não realize grind aleatório em monstros isolados. Siga a cadeia de **Tarefas Vinculadas (Linked Tasks)** (Rattata ➔ Oddish ➔ Geodude ➔ Ampharos) para obter suprimentos essenciais (Ultra Balls, Revives e estrelas de +100% XP).
* **Power Spike com Poison Gas:** Habilidades de `[Poison Gas]` (presentes em Koffing Lv. 20 e Gloom) possuem dano base altamente desproporcional no early game, permitindo derreter packs de monstros como Tangela em Saffron.
* **Captura Chave de Transição:** Capturar **Diglett / Dugtrio** em Cerulean/Vermilion para tratorar hunts de elemento Elétrico (`[Elétrico]`) sem risco de morte.

### 7.2 Transição Level 150+ e Especialização Redscape (Mid Game)
* **Entrada no Redscape:** A partir do level 150, a experiência de criaturas comuns sofre corte severo. A progressão passa a exigir caçadas nas zonas de **Redscape**.
* **Especialização Elemental (Monotype Hunt):** Construa um contra-ataque direcionado para a área escolhida:
  * Caçar Elétrico (`[Elétrico]`): Utilize **Steelix** com Boost +3 e Held T3.
  * Caçar Planta (`[Grama]`): Utilize **Arcanine** para rotação de dano de fogo AoE.
  * Caçar Pedra/Terra (`[Pedra]` / `[Terra]`): Utilize **Gyarados** para controle e dano em área aquático.
  * Caçar Voador (`[Voador]`): Utilize atacantes elétricos ou de pedra com alto burst.
* **Afiliação a Guilds:** Entrada obrigatória em Guilds para liberação de missões diárias de clã, que concedem Guild Tokens trocáveis diretamente por Helds e bônus de XP.

### 7.3 Economia de Farm e Monetização de Mercado
* **Foco em Materiais de Talentos:** Os itens de maior liquidez e valor no Market são drops de criaturas Shiny exigidos para completar a progressão permanente de Talentos (+29% de dano / +13% de defesa).
* **Alvos de Alto Retorno:**
  * `[Electric Hat Tail]` (Shiny Pikachu): Alta demanda para Talentos Elétricos.
  * `[Fire Roof]` (Rapidash): Alta procura para Talentos de Fogo.
  * `[Electric Chip]` (Raichu): Alta margem de venda no início do servidor.
  * `[Simple Orbs]` (Dark / Ice): Orbes raras com valor de mercado elevado (300k–500k gold).
