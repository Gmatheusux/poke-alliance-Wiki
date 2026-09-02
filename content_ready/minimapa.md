---
title: "Minimapa & Navegação Espacial"
description: "Guia técnico e espacial de pontos de interesse (POIs), rede de Teleport, camadas de altitude (Z-levels) e rotas de caça táticas do Poke Alliance."
section: "Minimapa"
last_updated: "2026-09-02"
tags: ["minimapa", "mapa", "teleport", "pois", "respawns", "coordenadas", "fast-travel"]
---

> [!NOTE]
> Este conteúdo foi gerado com análise dos parceiros da Poke Alliance.

# <span style="color: #CC5500;">**Minimapa & Navegação Espacial**</span>

## <span style="color: #CC5500;">**1. TL;DR & Dev Comment**</span>
- <span style="color: #CC5500;">**Objetivo Central:**</span> Prover navegação tática instantânea em <span style="color: #CC5500;">**HTML5 Canvas / WebGL (PixiJS)**</span> a 60 FPS, permitindo rastrear 112+ pontos de interesse, rotas de farm em área (AoE), instâncias privadas e a malha completa de comandos de Teleport.
- <span style="color: #CC5500;">**Dev Comment:**</span> *"A navegação no Poke Alliance não é decorativa. O tempo de trânsito dita a taxa de XP/hora e o rendimento de Online Points. Centralizamos a malha de POIs em torno de hubs estratégicos (ex: Olivine) para reduzir o atrito de viagem."*

---

## <span style="color: #CC5500;">**2. Arquitetura Espacial e Coordenadas**</span>

O mundo opera sob um sistema cartesiano tridimensional `(X, Y, Z)` renderizado na resolução global de `6656 × 5376` pixels (`min_x: 0`, `min_y: 128`).

### <span style="color: #CC5500;">**Mapeamento de Andares (Z-Levels):**</span>
- <span style="color: #CC5500;">**Z = 7 (Superfície / Overworld):**</span> Nível principal do jogo. Contém a maioria dos Centros Pokémon, Lojas, Rotas e NPCs de Pesca (62 nós minerados).
- <span style="color: #CC5500;">**Z = 6 (Andar Superior / Colinas):**</span> Sacadas de Pokémarts, relevos montanhosos e telhados de prédios cívicos (30 nós).
- <span style="color: #CC5500;">**Z = 5 e Z = 4 (Mezaninos e Mirantes):**</span> Áreas elevadas de cidades verticais e decks de observação (15 nós).
- <span style="color: #CC5500;">**Z = 1 e Z = 2 (Torres e Cumes):**</span> Topo de faróis e observatórios de alta altitude (2 nós).
- <span style="color: #CC5500;">**Z = 8 e Z = 9 (Subsolos e Dungeons):**</span> Cavernas profundas, áreas de mineração, portais de instâncias e túneis de conexão (3 nós).

---

## <span style="color: #CC5500;">**3. Catálogo de Pontos de Interesse (POIs)**</span>

O banco de dados geográfico conta com <span style="color: #CC5500;">**112 marcadores oficiais**</span> distribuídos em 4 categorias operacionais:

| Categoria | Ícone ID | Quantidade | Função Primária |
| :--- | :---: | :---: | :--- |
| <span style="color: #CC5500;">**Pokémon Center**</span> | `5` | 57 | Cura instantânea, respawn de morte e registro de destino de Teleport com a Nurse Joy. |
| <span style="color: #CC5500;">**Poké Mart**</span> | `13` | 43 | Compra de suprimentos vitais (Alliance Balls, Potions, Revives, Held Tools). |
| <span style="color: #CC5500;">**Pescadores (Fisherman)**</span> | `7` | 11 | NPCs costeiros e fluviais para missões aquáticas, iscas e recompensas de pesca. |
| <span style="color: #CC5500;">**Pontos Especiais & Saídas**</span> | `12` / `5` | 1 | Marcador de rota especial `(2489, 2873, Z:7)` e ponto de transição subterrânea `(1587, 2131, Z:8)`. |

### <span style="color: #CC5500;">**Amostragem de Coordenadas de Referência:**</span>

| POI / Localização | Coordenadas `(X, Y, Z)` | Tipo de Instalação |
| :--- | :---: | :--- |
| **Ponto Central Kanto (Saffron Area)** | `(1893, 2144, 7)` | Pokémon Center |
| **Hub Comercial Kanto Central** | `(1901, 2154, 7)` | Poké Mart |
| **Doca Leste de Pesca** | `(1732, 2263, 7)` | Fisherman NPC |
| **Base Estratégica Johto (Olivine Hub)** | `(2984, 2302, 6)` | Pokémon Center |
| **Setor de Suprimentos Johto** | `(2983, 2221, 7)` | Poké Mart |
| **Posto Avançado Hoenn** | `(4407, 1050, 7)` | Pokémon Center |
| **Mercado Hoenn Exterior** | `(4415, 1077, 7)` | Poké Mart |
| **Dungeon Subterrânea (Saída)** | `(1587, 2131, 8)` | Waypoint de Saída |
| **Nó Especial de Conexão** | `(2489, 2873, 7)` | Marcador Especial (ID 12) |

---

## <span style="color: #CC5500;">**4. Rede de Teleport (Fast Travel)**</span>

O comando de <span style="color: #CC5500;">**Teleport (TP)**</span> permite deslocamento instantâneo para cidades desbloqueadas.

### <span style="color: #CC5500;">**Requisitos Mecânicos:**</span>
1. <span style="color: #CC5500;">**Status Premium:**</span> Conta VIP/Premium ativa.
2. <span style="color: #CC5500;">**Pokémon Transportador:**</span> Pokémon ativo no time com a habilidade `Teleport`.
3. <span style="color: #CC5500;">**Check-in com a Nurse:**</span> A cidade só é liberada após você interagir fisicamente com a Nurse/Nurse Joy no Pokémon Center local.
4. <span style="color: #CC5500;">**Condições de Uso:**</span> Proibido durante combate, em áreas de instância restrita ou durante o tempo de recarga (cooldown).

### <span style="color: #CC5500;">**Sintaxe do Comando:**</span>
```text
h "nome da cidade
```
*(Para destinos compostos, insira o espaço exato, ex: `h "mandarin south`)*

### <span style="color: #CC5500;">**Tabela Completa de Destinos Homologados:**</span>

| Região | Cidade | Comando de Chat |
| :--- | :--- | :--- |
| **Kanto** | Saffron | `h "saffron` |
| **Kanto** | Cerulean | `h "cerulean` |
| **Kanto** | Lavender | `h "lavender` |
| **Kanto** | Fuchsia | `h "fuchsia` |
| **Kanto** | Celadon | `h "celadon` |
| **Kanto** | Viridian | `h "viridian` |
| **Kanto** | Vermilion | `h "vermilion` |
| **Kanto** | Pewter | `h "pewter` |
| **Kanto** | Pallet | `h "pallet` |
| **Kanto** | Cinnabar | `h "cinnabar` |
| **Johto** | New Bark | `h "new bark` |
| **Johto** | Cherrygrove | `h "cherrygrove` |
| **Johto** | Violet | `h "violet` |
| **Johto** | Azalea | `h "azalea` |
| **Johto** | Goldenrod | `h "goldenrod` |
| **Johto** | Olivine | `h "olivine` *(Hub Meta)* |
| **Johto** | Ecruteak | `h "ecruteak` |
| **Johto** | Mahogany | `h "mahogany` |
| **Johto** | Blackthorn | `h "blackthorn` |
| **Johto** | Cianwood | `h "cianwood` |
| **Hoenn** | Slateport | `h "slateport` |
| **Hoenn** | Littleroot | `h "littleroot` |
| **Hoenn** | Oldale | `h "oldale` |
| **Hoenn** | Petalburg | `h "petalburg` |
| **Hoenn** | Rustboro | `h "rustboro` |
| **Hoenn** | Mauville | `h "mauville` |
| **Hoenn** | Fallarbor | `h "fallarbor` |
| **Hoenn** | Fortree | `h "fortree` |
| **Hoenn** | Lilycove | `h "lilycove` |
| **Hoenn** | Lavaridge | `h "lavaridge` |
| **Ilhas Laranja** | Mandarin South | `h "mandarin south` |
| **Ilhas Laranja** | Shamouti | `h "shamouti` |
| **Ilhas Laranja** | Tangelo | `h "tangelo` |
| **Ilhas Laranja** | Navel | `h "navel` |
| **Ilhas Laranja** | Mandarin | `h "mandarin` |
| **Ilhas Laranja** | Brutebull | `h "brutebull` |

---

## <span style="color: #CC5500;">**5. Hotspots Táticos e Rotas do Meta**</span>

Com base na mineração dos principais criadores e jogadores de alta performance:

### <span style="color: #CC5500;">**Hub Central: Cidade de Olivine (Johto)**</span>
- <span style="color: #CC5500;">**Importância Estratégica:**</span> Respawn padrão da comunidade avançada.
- <span style="color: #CC5500;">**Conexões Diretas:**</span> Acesso imediato à balsa para Hoenn, proximidade das docas do Captain Willy (Quest da Relíquia) e acesso ao mar de Tentacruel.

### <span style="color: #CC5500;">**Rotas de Rush de Nível (Early ao Mid Game: 1-150):**</span>
- <span style="color: #CC5500;">**Level 1 ao 40 (Cerulean):**</span> Respawn de Diglett e foco em captura de Shiny Diglett.
- <span style="color: #CC5500;">**Level 40 ao 80 (Arredores de Saffron):**</span> Rotação de caçadas adaptada ao dano elemental da sua equipe.
- <span style="color: #CC5500;">**Level 80 ao 150 (Caverudo):**</span> Grind intensivo de Dugtrio com habilidades em área (AoE). Conclusão do ciclo em ~3 horas com Town Tickets.

### <span style="color: #CC5500;">**End-Game e Instâncias Fechadas (150 a 350+):**</span>
- <span style="color: #CC5500;">**Região de Hoenn:**</span> Acesso desbloqueado no Level 250 via cadeia de tarefas dos Professores (Oak, Elm, Hank, Birch).
- <span style="color: #CC5500;">**Instanced Hunts (Mapas Privados):**</span> Áreas pagas como **Reds Escape** e **Tube** para farm contínuo sem disputa de respawn aberta.
- <span style="color: #CC5500;">**Spawns de Alto Valor:**</span> Caçadas focadas de Hydreigon e Hitmontop.

### <span style="color: #CC5500;">**Pontos de Quests no Mapa:**</span>
- <span style="color: #CC5500;">**Lucky Amulet Puzzle:**</span> Área de Dive localizada a leste de Vermilion (Instância limitada a 3 jogadores, tempo limite de 60 min).
- <span style="color: #CC5500;">**Captain Willy & Relíquia:**</span> Doca ao sul de Olivine `[Lvl 80]`.
- <span style="color: #CC5500;">**Dr. Vektor & PC Porygon:**</span> Laboratório Dimensional `[Lvl 200]`.
- <span style="color: #CC5500;">**Boarding Key (Orange Islands):**</span> Baú na praia de Cianwood.

---

## <span style="color: #CC5500;">**6. Especificações de Interface (UX/UI do Minimapa)**</span>

Para garantir a conformidade com as regras de performance e acessibilidade do Design System:

1. <span style="color: #CC5500;">**Controle de Camadas (Filter Toggles):**</span>
   - Toggle individual para ativar/desativar ícones de Centros Pokémon, Lojas, Pescadores e Spawns Especiais.
   - Os marcadores devem ser agrupados via *Clustering* dinâmico em níveis baixos de zoom para evitar poluição visual.

2. <span style="color: #CC5500;">**Seletor de Andar Vertical (Z-Slider):**</span>
   - Controle em formato de elevador táctil à direita da tela, permitindo navegar entre `Floor 1` e `Floor 9`. O mapa altera a imagem de fundo de acordo com o andar selecionado (`floor_Z.png`).

3. <span style="color: #CC5500;">**Interação de Tooltip Rápido:**</span>
   - Ao passar o cursor (Hover) sobre um POI, exibe nome, coordenadas exatas `(X, Y, Z)` e atalho de comando de TP (se aplicável).
   - Ao clicar no POI, copia automaticamente o comando `h "cidade` para a área de transferência com feedback tátil.

4. <span style="color: #CC5500;">**Zero Latency Pan & Zoom:**</span>
   - Operação estrita em Canvas 2D/WebGL via PixiJS.
   - Sem injeção de elementos DOM flutuantes pesados dentro da viewport do mapa.
