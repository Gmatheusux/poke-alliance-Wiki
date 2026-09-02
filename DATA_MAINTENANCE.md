# 🤖 Protocolo de Manutenção de Dados (AI Agent Handoff)

Se você é um agente de Inteligência Artificial (Antigravity, Claude, Cursor, etc.) designado para atualizar, corrigir ou ingerir novos dados na **Poke Alliance Wiki**, você **DEVE** seguir estritamente as regras deste documento. 

Qualquer violação destas regras corromperá a Arquitetura de Informação (FSD) e o Design System do projeto.

---

## 1. Topologia de Dados (Onde as coisas ficam)
O fluxo de dados da aplicação opera em duas camadas de armazenamento físico antes de atingir o Front-end (React):

* **`/wiki_vault/` (A Quarentena Bruta):** Recebe dumps de JSONs, scrapings HTML e transcrições de YouTube. Nunca conecte a UI diretamente a esta pasta. É um ambiente sujo.
* **`/content_ready/` (O Ouro Refinado):** Contém os 8 arquivos Markdown canônicos do projeto (Dashboard, Pokédex, Sistemas, Quests, Personagem, Minimapa, Regiões, Guia de Leveling). O Front-end só pode consumir dados baseados na formatação contida aqui.

---

## 2. O Processo Exato de Manutenção e Atualização

Se o usuário (Gabe) pedir: *"Atualize a tabela de Boosts com os novos valores do último patch"*, você executará o seguinte pipeline:

### Passo A: Absorção e Refino
1. Capture os novos dados brutos fornecidos pelo usuário.
2. Abra a regra `.agents/rules/ux_writing_voice.md` e calibre seu modelo cognitivo para a voz de **Híbrido Competitivo**.
3. **Limpe o AI Slop:** Remova adjetivos inúteis, verbosidade e "falar bonito". Transforme prosa densa em **Progressive Disclosure** (Bullet points, tabelas, ou gatilhos de Tooltip).

### Passo B: Aplicação da Regra de Copywriting (Direitos Autorais)
Se a origem do dado for um vídeo de YouTube, um fórum de comunidade ou um parceiro oficial (ex: análise de market, tutorial de quests), você é **obrigado** a injetar no painel/markdown a seguinte callout exata:

> `> [!NOTE]`  
> `> Este conteúdo foi gerado com análise dos parceiros da Poke Alliance.`

A omissão desta nota é uma falha grave de sistema.

### Passo C: Persistência
Abra o arquivo correspondente na pasta `/content_ready/` e faça o *Replace* ou *Append* dos dados na estrutura correta. 

---

## 3. Integração com a Interface (Front-end)
Quando for solicitado a codificar (bater código React/Tailwind) para exibir esses dados, atente-se a:
1. **A Lei da Separação (Lore vs Mecânica):** O texto de história (Lore) jamais se funde com os dados matemáticos. Mantenha os números isolados e de fácil escaneamento (ex: `+15% Dano`).
2. **Badges Obrigatórios:** Se o texto citar um "Elemento" (Fogo, Água) ou "Condição", você não pode apenas escrever. Você tem que encapsular no Componente visual de Badge usando as cores hexadecimais canônicas mapeadas no `DESIGN.md`.
3. **Zero Redirect:** Dados longos recém-atualizados não geram novas páginas. Eles devem ser encapsulados em Modais com Blur (`z-index` elevado) ou Drawers laterais (Painéis Deslizantes).

---
*Fim do Protocolo. Ao terminar a leitura, prossiga com a ingestão/modificação de dados sem pedir desculpas ou emitir mensagens genéricas.*
