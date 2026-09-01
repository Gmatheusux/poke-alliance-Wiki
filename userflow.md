# User Flow - Poke Alliance Wiki (Dashboard SPA)

Este documento mapeia a jornada do usuário dentro da nossa Wiki Local, focada em otimização para TDAH (Progressive Disclosure, Modais, Semântica de Cores).

## Fluxograma Principal

```mermaid
graph TD
    %% Nós principais
    Home[Dashboard Inicial] --> O{O que o jogador quer fazer?}
    
    %% Rota 1: Consulta de Meta
    O -->|Montar Time / Ver Status| P[Pokédex V5]
    P --> P1[Filtros Rápidos: Elemento, Nível Mínimo]
    P1 --> P2[Clica no Card do Pokémon]
    P2 --> P3[Modal de Detalhes Surge - Blur no Fundo]
    P3 --> P4{Leitura de Movesets}
    P4 --> P5[Ataques com Tags Visuais: AOE, BUFF, SINGLE]
    P4 --> P6[Tags de Mobilidade: Fly, Surf]

    %% Rota 2: Progressão
    O -->|Entender Mecânicas| S[Aba Sistemas]
    S --> S1[Tabs de Navegação Lateral]
    S1 --> S2[Boosts, Máquina de Star, Helds]
    S2 --> S3[Exibição em Bullet Points Curtos]

    %% Rota 3: Exploração
    O -->|Fazer Missões| Q[Aba Quests & Caçadas]
    Q --> Q1[Lista de Quests em Accordion]
    Q1 --> Q2[Expande Requisitos da Quest]
    Q2 --> Q3[Guia Passo a Passo Simplificado]
    
    %% Estilização do Grafo
    classDef default fill:#161b22,stroke:#30363d,stroke-width:1px,color:#c9d1d9;
    classDef highlight fill:#CC5500,stroke:#CC5500,stroke-width:2px,color:#fff;
    classDef decision fill:#0d1117,stroke:#CC5500,stroke-width:2px,color:#CC5500;
    
    class P3,P5,S3 highlight;
    class O decision;
```

## Decisões de UX para Neurodivergência (TDAH)
- **Zero Poluição Visual:** Toda informação densa (ex: Movesets) está escondida até que o usuário clique no Card (Modal).
- **Ancoragem Visual e Tags:** Uso de `[AOE]` e cores elementais quebra a parede de texto, permitindo um scanning rápido da tela.
- **Micro-interações (Progressive Disclosure):** Accordions e Tabs (na área de Sistemas e Quests) garantem que o usuário consuma apenas uma regra ou quest de cada vez, evitando paralisia por análise e sobrecarga cognitiva.
