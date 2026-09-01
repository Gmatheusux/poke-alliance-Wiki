# Handoff Protocol - Poke Alliance Dashboard (Wikipedia Local V5.0)

## 1. O Que Foi Feito (Infraestrutura e Extração de Dados Brutos)
O foco desta última etapa foi arquitetar o **Data Vault local** e popular a camada de dados brutos utilizando múltiplos subagentes de pesquisa, scripts de automação headless (Playwright) e extração massiva. **Não houve cruzamento de dados**; cada fonte foi rigorosamente isolada para garantir a integridade da lapidação futura.

- **Vite SPA & File System Database:** Adotamos Vite + arquivos `.json`/`.md` estáticos na pasta `dashboard/data/` como banco de dados NoSQL local. Isso elimina risco de corrupção do IndexedDB e mantém rastreabilidade no Git.
- **Data Augmentation (Pokédex V5):** Base populada mesclando dados da PokeAPI (sprites, tipos) com overrides fixos para o meta do Poke Alliance (Heróis Meta, biomas customizados).
- **Extração Massiva do YouTube:**
  - Identificamos o "Top 10" (Loxas, Koiaku, Ramidlav, etc.) do Meta de 2026.
  - O conteúdo técnico (Rotas 1-150, Hoenn, Reds Escape, Quests de Acesso) foi extraído em massa.
  - **Silos Gerados:** `youtube_raw_quests.json`, `youtube_raw_systems.json`, `youtube_raw_leveling_routes.json`. E o artefato narrativo `youtube_scout_report.md` e `pka_meta_guide.md`.
- **Extração Profunda (Critical Catch):**
  - Subagentes isolaram os dados matemáticos do Vercel SPA (Calculadora de Dano, Star Machine, KKs e Max Broke de Shinies).
  - **Silo Gerado:** `criticalcatch_raw_data.json`.
- **Extração Profunda (Wiki Oficial):**
  - Devido a bloqueios no Chrome DevTools do MCP, orquestramos um script de engenharia reversa via Python + Playwright (`scrape_wiki.py`).
  - Raspagem das 15 páginas núcleo (Primeiros Passos, EXP/Level, Gerações 1 a 7, Quests Principais).
  - **Silo Gerado:** `wiki_raw_data.json`.

## 2. Decisões Arquiteturais de UX
- **Progressive Disclosure:** Para proteger a sobrecarga cognitiva (foco TDAH), adotamos modais para informações densas. A visualização primária mostra apenas a base essencial.
- **Filtros Inteligentes:** Implementado filtro dinâmico de `Level Mínimo` para uso dos Pokémons, botão "Limpar", e cores elementais integradas no modal.
- **Move Sets Reais (PokeTibia Meta):** As magias foram categorizadas visualmente como `[AOE]`, `[BUFF]` e `[SINGLE TARGET]`, espelhando o combate do jogo (e não os golpes de GameBoy).
- **Mapa de Interação:** As diretrizes completas de navegação estão fixadas no artefato visual `userflow.md`.

## 3. Próxima Etapa Pendente (Para o Novo Chat)
O terreno está 100% preparado. Ao iniciar a próxima sessão, o Gravy (Agente) DEVE seguir este roteiro de lapidação:

1. **Ler o Data Vault:** Escanear o conteúdo da pasta `dashboard/data/raw_jsons/` (YouTube, Critical Catch, Wiki).
2. **Mesclagem Inteligente:** Cruzar e unificar os dados brutos, removendo duplicatas e formatando no padrão dos nossos schemas mestre (`dashboard/data/quests/_schema.json`, etc.).
3. **Injeção de Dados (Front-End):** Substituir os dados "mockados" da UI do Dashboard pelas informações oficiais que acabaram de ser refinadas, ativando as novas rotas de navegação descritas no `userflow.md`.
