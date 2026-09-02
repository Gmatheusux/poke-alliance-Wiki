# Active Context - Poke Alliance

## 1. Componentes Finalizados (Sessão Atual)
- Criação do `DATA_MAINTENANCE.md` para instruir futuros Agentes IA sobre o fluxo de atualização de dados, protegendo a arquitetura e copywriting.
- Processamento massivo do `wiki_vault` concluído via orquestração de 8 subagentes em paralelo.
- Arquitetura de dados totalmente lapidada e salva no diretório `/content_ready/` (8 arquivos Markdown), em conformidade com as leis de Copywriting e UX Voice.
- Execução de subagentes para validação de tom de voz e UX Writing (Franquia Pokémon + Indústria AAA).
- Consolidação do conceito **Híbrido Competitivo** de comunicação, documentado isoladamente em `.agents/rules/ux_writing_voice.md` para evitar bloating de contexto.
- Importação do fluxo de UX (`task.md`).
- Execução de pesquisa de referências de UI/UX para wikis modernas via subagente.
- Definição da fundação arquitetural e visual (criação do `DESIGN.md` com tokens YAML e diretrizes em Markdown).
- Geração completa do `SITEMAP.md` integrando os fluxos do `userflow.md` com as heurísticas de UX modernas, contendo as 8 sessões principais (Dashboard, Pokédex V5, Sistemas, Quests/NPCs, Personagem, Minimapa, Regiões, Guia de Leveling).
- Injeção da lista canônica dos 18 elementos no YAML do `DESIGN.md`.
- Geração e backup do **Moodboard Visual** (`MOODBOARD.md` e artefatos visuais na pasta `assets`).
- Conclusão da **Etapa 2 (Identidade e Tokens)**: Definição da estética Híbrida Oficial, blindando a regra de Badges (Cor + Ícone) no `DESIGN.md`.
- Conclusão da **Fase 3 (Extração de Marca)**: Extração da logo oficial (`/assets/logo.png`), confirmação dos hexadecimais originais e documentação do comportamento da comunidade (Discord/Facebook).

## 2. Decisões Arquiteturais Tomadas
- **Modelo de Interface:** Foco em Minimalismo, Dark Mode nativo e navegação por Omnisearch (Command Palette).
- **Direção de Arte (Híbrida Oficial):** Fusão de interface utilitária Zero-Bloat (SaaS) com identidade oficial da franquia. Fundo Slate/Zinc, CTAs em Azul/Amarelo oficiais e cores saturadas puramente como dados inseparáveis de seus respectivos ícones (Badges de Elemento).
- **Tratamento de Dados:** Uso rigoroso de *Progressive Disclosure* (Tabs/Accordions, Drawers) e microinterações (Tooltips Ricos) para evitar navegação de vai-e-vem.
- **Integração de Comunidade e Economia:** Áreas de Tierlist, Team Building, Tabelas de Crafting e Pokelog estruturadas dentro dos modais e abas principais para acesso instantâneo.
- **Comunicação (UX Writing e Copywriting):** Adoção de arquitetura AAA e inserção compulsória de atribuição (*Dev Comments*) para conteúdos com origem em youtubers/comunidade, assegurando transparência.

## 3. Próxima Etapa Pendente
- Infraestrutura completa. Todo planejamento de UX e protocolos de IA (dados, manutenção e voice) estão formatados e versionados.
- **Fase 6 Inicializada:** O usuário (Gabe) assumirá o controle para dar início à programação do projeto (React/Tailwind/Vite).

- **Fase 6 Interrompida Taticamente:** Scaffold de componentes React pausado. O usuário (Gabe) está gerando conteúdo/writers para as sessões do site.
- **Ação Atual:** Configuração do CI/CD (GitHub Actions) concluída. Os arquivos estáticos do protótipo (`map.js`, `pokedex.js`, etc.) foram movidos para `dashboard/public/` para que o build do Vite funcione corretamente sem a necessidade de `type="module"` imediatamente. O workflow `.github/workflows/deploy.yml` fará o deploy automático para a página do Github Pages a cada push na `master`.

## 4. Handoff Arquitetural (Instruções para os Próximos Agentes)
- **Worktree Ativa:** Todo código React/Tailwind deve ser gerado na pasta física do worktree (branch eat/react-core-layout).
- **Missão Imadiata (Primeiro Chat de Código):** Iniciar o Scaffold do AppLayout (Sidebar, Roteamento, Fundo Slate) e o componente de Omnisearch via React Portal.
- **Restrições:** Sem Banco de Dados SQL. Consumir dados via JSON estático com TanStack Query. Sem divs no Minimapa (usar PixiJS).
- **Design System:** Rigor absoluto às regras do DESIGN.md (Zero-Bloat, Badges oficiais).
