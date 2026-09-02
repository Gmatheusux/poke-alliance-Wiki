# Active Context - Poke Alliance

## 1. Componentes Finalizados (Sessão Atual)
- Configuração do **Vite + TailwindCSS v4** com os tokens visuais extraídos do `DESIGN.md`.
- Construção do **AppLayout** com Sidebar estática responsiva e espaço principal (`bg-[#0F1115]`).
- Criação da Store via **Zustand** (`layoutStore.js`) para controle de modais globais.
- Construção do **OmnisearchModal** injetado via React Portal, equipado com Blur Background, Input com Debounce nativo de 300ms e controle via `Ctrl+K` / `ESC`.
- **Sidebar Avançada:** Menu lateral refatorado para usar *Accordions* (Dropdowns verticais), agrupando as 8 sessões principais e suas sub-sessões baseadas no SITEMAP. Scrollbars customizadas inseridas no CSS global para manter a estética dark.
- Estruturação do **Dashboard** (Página Principal) contendo o **NewsCarousel** (banners rotativos), **QuickAccessGrid** (com arte geométrica gerada por IA no fundo) e a seção de **Criadores Oficiais** (integração High-Fidelity).

## 2. Decisões Arquiteturais Tomadas
- **Scaffold Lo-Fi Concluído:** A primeira etapa do código foca 100% na fundação arquitetural de roteamento visual e states globais, antes de aplicar o polimento de alta fidelidade (Drop Shadows, cores de tipologia).
- **Substituição de Componente:** O bloco genérico de "Daily Summary" foi trocado pelo modelo de engajamento via *News Carousel*, mais apropriado para atualizações vivas de economia e patch notes.
- **Navegação Centralizada:** O *Omnisearch* foi validado como a âncora principal de busca para evitar navegação multinível.

## 3. Próxima Etapa Pendente
- Refinar a interface para **Alta Fidelidade**, integrando:
  - Adição de Badges Oficiais de Elemento (Regra do Ícone + Cor do DESIGN.md).
  - Configuração do roteamento real mapeado com o `SITEMAP.md` e construção da Pokédex V5 ou do Minimapa (PixiJS).
  - População das variáveis definitivas e microinterações nas tabelas.

## 4. Handoff Arquitetural (Instruções para os Próximos Agentes)
- **Worktree Ativa:** Continuar na branch `feat/react-core-layout`.
- **Regras:** Todo CSS utilitário deve basear-se nos tokens injetados no `index.css` via Tailwind v4. Não adicione "AI Slop" genérico.
- **Próxima Missão:** Aplicar refinamento visual de High-Fidelity nos componentes do Dashboard (NewsCarousel e QuickAccess) e construir a base de Dados JSON ou integração TanStack Query para os módulos.
