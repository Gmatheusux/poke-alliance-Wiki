---
name: sistemas
category: progressao_do_time
title: "Sistemas Centrais: Boost, Helds e Máquina de Star"
description: "Guia de progressão mecânica de combate: escalonamento de dano via Boost (+50), fusão e pity de Helds (T1-T7) e ascensão permanente por Stars."
version: "1.0.0"
updated_at: "2026-09-02"
---

# Sistemas de Progressão: Boost, Helds e Máquina de Star

> [!NOTE]
> Este conteúdo foi gerado com análise dos parceiros da Poke Alliance.

---

## 1. Sistema de Boost (+0 a +50)

O Boost é a espinha dorsal do escalonamento de dano no Poke Alliance. Ele aplica um multiplicador fixo e permanente gravado diretamente na Poké Ball.

> **TL;DR:** Cada **+1 de Boost** adiciona o equivalente a **3 níveis** no cálculo de dano das magias. Um Pokémon **+50** recebe **150 níveis virtuais extras** de escalonamento.

### Como Aplicar
1. Obtenha a **Boost Stone** compatível com a faixa atual do Pokémon.
2. Certifique-se de que o elemento da pedra corresponde a pelo menos um dos tipos elementais do Pokémon.
3. Utilize a pedra diretamente na Poké Ball.
4. Em caso de sucesso, o Pokémon recebe **+1 de Boost**.

---

### Tabela de Faixas, Pedras e Probabilidades

| Faixa de Boost | Pedra Exigida | Chance Base |
| :--- | :--- | :--- |
| **+0 até +5** | Novice | **50%** |
| **+5 até +10** | Elemental | **40%** |
| **+10 até +15** | Common | **30%** |
| **+15 até +20** | Enhanced | **20%** |
| **+20 até +25** | Potent | **18%** |
| **+25 até +30** | Advanced | **15%** |
| **+30 até +35** | Fortified | **12%** |
| **+35 até +40** | Supreme | **10%** |
| **+40 até +45** | Celestial | **8%** |
| **+45 até +50** | Mystic | **5%** |

> [!IMPORTANT]
> O limite máximo atual é **+50**. O sistema legado de regressão até +70 foi permanentemente descontinuado.

---

### Proteção Contra Falhas (Bad Luck Protection)
- Se a tentativa falhar, a pedra é consumida, mas **o Pokémon não perde Boost**.
- **Regra de Pity:** Cada falha adiciona **+10% de chance cumulativa** na tentativa seguinte daquela mesma faixa.
- Ao obter sucesso, o acumulador de bônus retorna a zero.

```
Exemplo (+15 ao +20 - Base 20%):
Tentativa 1: 20% (Falha) ➔ Tentativa 2: 30% (Falha) ➔ Tentativa 3: 40% (Sucesso) ➔ Bônus reseta para a base.
```

---

### Craft de Boost Stones e Fragmentos
A confecção de pedras ocorre na **Máquina de Craft** e consome:
- Insumos/loots de Pokémon relacionados ao elemento;
- **Fragmentos Elementais** (adquiridos prioritariamente em **Arcane Dungeons** do respectivo tipo);
- A **Pedra Elemental** correspondente;
- Materiais secundários indicados na receita ativa.

---

### Priorização Tática (Investimento Eficiente)
- **Early/Mid Game:** Distribua os primeiros níveis (+0 a +15/+20) entre os Pokémon ativos na rotação de farm.
- **Late Game:** Guarde pedras de alto custo (Potent a Mystic) para o seu **Main DPS** de área (AoE) e caçadores de Bosses.

---

## 2. Sistema de Helds (Fusão, Tiers e Remoção)

Helds conferem efeitos passivos e multiplicadores estratégicos acoplados à Poké Ball.

> **TL;DR:** Fusões exigem **3 Helds do mesmo tier** no **Depot Locker 5**. Falhas concedem **Relic Points** (10 pontos = resgate garantido do próximo tier).

---

### Processo de Fusão (Held Fusion Machine)
1. Acesse a **Held Fusion Machine**.
2. Deposite os itens no **Depot Locker 5**.
3. Agrupe **3 Helds do mesmo tier** (podem ser de tipos/efeitos diferentes).
4. Acione a máquina para processar as combinações.

---

### Tabela de Fusão por Tier

| Insumos | Resultado com Sucesso | Taxa Base | Compensação na Falha |
| :--- | :--- | :--- | :--- |
| **3x Helds T1** | 1x Held Ticket T2 | **25%** | 1x Ticket T1 + 1 Relic Point T2 |
| **3x Helds T2** | 1x Held Ticket T3 | **25%** | 1x Ticket T2 + 1 Relic Point T3 |
| **3x Helds T3** | 1x Held Ticket T4 | **25%** | 1x Ticket T3 + 1 Relic Point T4 |
| **3x Helds T4** | 1x Held Ticket T5 | **25%** | 1x Ticket T4 + 1 Relic Point T5 |
| **3x Helds T5** | 1x Held Ticket T6 | **25%** | 1x Ticket T5 + 1 Relic Point T6 |
| **3x Helds T6** | 1x Held Ticket T7 | **25%** | 1x Ticket T6 + 1 Relic Point T7 |
| **3x Helds T7** | 1x Held Ticket T7 | **100% (Reroll)** | 1 Relic Point T7 |

> [!TIP]
> **Garantia de Pity (Relic Points):** Junte **10 Relic Points** de um tier específico para resgatar diretamente o Held Ticket desejado na interface de relíquias.

---

### Remoção de Helds
- **Localização:** NPC **Rosemary** no Trade Center.
- **Procedimento:** Mantenha o Pokémon ativo ➔ Diga `remove` ➔ Selecione o Held e confirme.
- **Regra de Devolução:** O Held retorna ao inventário no **tier atual**. Materiais usados em aprimoramentos anteriores não são devolvidos.

---

### Integração Lucky Amulet & X-Lucky
O **Lucky Amulet** concede bônus de drop global para toda a sua equipe.

- **Requisitos de Obtenção:** Nível de Treinador 250 + Quest do Captain Willy (Docas de Olivine) + Conclusão do Puzzle Submarino (Dive de Vermilion).
- **Eficácia:** O X-Lucky equipado no Lucky Amulet opera com **50% da sua força normal** em todos os Pokémon ativos.
- **Regra de Não-Acumulação:** O efeito **NÃO** soma com o X-Lucky do Pokémon ativo nem do Ditto. O sistema aplica estritamente a maior taxa:
  $$\text{Bônus Ativo} = \max(\text{X-Lucky do Pokémon}, 0.5 \times \text{X-Lucky do Amuleto})$$

---

## 3. Máquina de Star (Star Ascension)

A Star Ascension é o ápice do aprimoramento de dano puro, obtido através do sacrifício de exemplares equivalentes da mesma espécie.

> **TL;DR:** Sistema com **100% de sucesso**. Consome 1 Pokémon idêntico no mesmo número de Stars para adicionar **+1 Star** (limite de 5 Stars). Aumenta **exclusivamente o dano**.

---

### Requisitos Obrigatórios
Para realizar a ascensão, o Pokémon base e o material de sacrifício devem atender a todos os critérios:
- **Espécie Idêntica:** Mesma espécie de Pokémon.
- **Raridade/Tier Equivalente:** Mesmo tier (T3, T2, T1, Super Rare, Ultra Rare ou Legendary).
- **Mesmo Nível de Estrela:** Ambos devem ter a mesma quantidade de Stars atuais (0★ + 0★ = 1★; 1★ + 1★ = 2★, sucessivamente).
- **Localização:** O Pokémon a ser consumido deve estar depositado no **Depot**.
- **Regra Smeargle:** Variantes compatíveis podem ser combinadas, porém Shinies exigem material Shiny, e normais exigem material normal.

---

### Escalonamento de Dano por Tier

| Tier do Pokémon | Dano por Star | Dano com 5 Stars (Máximo) |
| :--- | :--- | :--- |
| **Legendary** | **+15%** | **+75%** |
| **Ultra Rare** | **+10%** | **+50%** |
| **Super Rare** | **+8%** | **+40%** |
| **T1** | **+6%** | **+30%** |
| **T2** | **+4%** | **+20%** |
| **T3** | **+2%** | **+10%** |

> [!NOTE]
> Stars afetam **estritamente o multiplicador de dano**. Atributos como Defesa, Pontos de Vida (HP) e Velocidade permanecem inalterados.

---

### Custo Total Acumulado (0 a 5 Stars)

Valores consolidados para a progressão completa de 5 ascensões sucessivas:

| Tier | Opção Diamond | Opção Gold | Opção Mista |
| :--- | :--- | :--- | :--- |
| **Legendary** | 720 D + 180 kk | 360 D + 360 kk | 540 D + 270 kk |
| **Ultra Rare** | 360 D + 90 kk | 180 D + 180 kk | 270 D + 135 kk |
| **Super Rare** | 260 D + 70 kk | 130 D + 140 kk | 195 D + 105 kk |
| **T1** | 180 D + 45 kk | 90 D + 90 kk | 135 D + 67,5 kk |
| **T2** | 90 D + 22,5 kk | 45 D + 45 kk | 69 D + 33,5 kk |
| **T3** | 60 D + 15 kk | 30 D + 30 kk | 45 D + 22,5 kk |

*Legenda: D = Diamond | kk = Milhões de Gold.*

---

### Incompatibilidade: Mega Stone vs. Star Ascension

> [!CAUTION]
> **Incompatibilidade Irreversível:** Um Pokémon com Star Ascension **NÃO PODE** receber Mega Stones.
> Decida a rota de construção da Poké Ball antes de iniciar o investimento:
> - **Rota Mega:** Alto pico de poder situacional / mecânica de Mega Evolução.
> - **Rota Star:** Dano aumentado constante (até +75%) sem necessidade de ativação de Mega Stone.
