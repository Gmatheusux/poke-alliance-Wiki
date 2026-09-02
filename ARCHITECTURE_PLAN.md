# <span style="color: #CC5500;">**Plano Arquitetural de Engenharia - Poke Alliance**</span>

## <span style="color: #CC5500;">**1. Estrutura de Pastas e Componentização Zero-Bloat**</span>
- <span style="color: #CC5500;">**Feature-Sliced Design (FSD):**</span> A arquitetura deve isolar contextos estritamente. Módulos como `<span style="color: #CC5500;">**Pokédex**</span>`, `<span style="color: #CC5500;">**Sistemas**</span>` e `<span style="color: #CC5500;">**Quests**</span>` operam como microsserviços visuais autônomos.
- <span style="color: #CC5500;">**Árvore Canônica Obrigatória:**</span>
  - `src/app` ou `src/pages`: Focado exclusivamente em <span style="color: #CC5500;">**Roteamento**</span> e <span style="color: #CC5500;">**Lazy Loading**</span>.
  - `src/features`: Regras de negócio, fetchers e UI específicos encapsulados por domínio.
  - `src/shared/ui`: <span style="color: #CC5500;">**Design System Core**</span> (Badges de Elementos, Botões, Drawers) atrelado diretamente às cores e bordas definidas no `<span style="color: #CC5500;">**DESIGN.md**</span>`.
  - `src/shared/lib`: <span style="color: #CC5500;">**Hooks de Performance**</span> e utilitários (Intersection Observers, Formatação).
- <span style="color: #CC5500;">**Dumb Components:**</span> A camada de UI deve ser absolutamente previsível. Chamadas de rede ou stores globais ocorrem <span style="color: #CC5500;">**somente**</span> no nível das <span style="color: #CC5500;">**Pages**</span> ou componentes de amarração da <span style="color: #CC5500;">**Feature**</span>.

## <span style="color: #CC5500;">**2. Estratégia Anti-Lag (Virtualização e Loading Perceptual)**</span>
- <span style="color: #CC5500;">**Tabelas e Grids Massivos:**</span> A renderização da `<span style="color: #CC5500;">**Pokédex V5**</span>`, catálogo de <span style="color: #CC5500;">**Helds**</span> e <span style="color: #CC5500;">**Quests**</span> EXIGE o uso de bibliotecas como `<span style="color: #CC5500;">**TanStack Virtual**</span>` (React Virtual). É <span style="color: #CC5500;">**estritamente proibido**</span> injetar 1000 nós no DOM simultaneamente; apenas a viewport (+ *overscan*) será renderizada.
- <span style="color: #CC5500;">**Code Splitting Cirúrgico:**</span> Telas e modais secundários (ex: `<span style="color: #CC5500;">**Guia de Leveling**</span>` ou blocos de `<span style="color: #CC5500;">**Minimapa**</span>`) devem usar `<span style="color: #CC5500;">**React.lazy()**</span>`. O bundle primário deve ser minúsculo.
- <span style="color: #CC5500;">**Debounce Mandatório na Omnisearch:**</span> A barra de busca global (Ctrl+K) <span style="color: #CC5500;">**jamais**</span> acionará queries a cada caractere. O limite tático é de `<span style="color: #CC5500;">**300ms de Debounce**</span>`.

## <span style="color: #CC5500;">**3. Gerenciamento de Estado (Tráfego de Dados de Alta Carga)**</span>
- <span style="color: #CC5500;">**Estado de Servidor vs Estado Local:**</span>
  - `<span style="color: #CC5500;">**TanStack Query (React Query)**</span>`: Responsável por 100% do cache, invalidação e *deduplication* de requisições. Dados estáticos (Status Base, Movesets) devem possuir `staleTime: Infinity` para eliminar recarregamentos.
  - `<span style="color: #CC5500;">**Zustand**</span>`: O único gerenciador permitido para estado local ou UI (Filtros abertos, Modo Escuro, Estado do Omnisearch). O uso de Redux é <span style="color: #CC5500;">**vetado**</span> por excesso de *boilerplate*.
- <span style="color: #CC5500;">**Delegação via Web Workers:**</span> Se a <span style="color: #CC5500;">**Pokédex**</span> demandar filtragem multicritério simultânea (Tier + Elemento + Level em cima de arrays brutais), o cálculo deve ser isolado em um `<span style="color: #CC5500;">**Web Worker**</span>`, blindando a *Main Thread* de travamentos de UI.

## <span style="color: #CC5500;">**4. Otimização Extrema de RAM e Física de Animações (GPU-First)**</span>
- <span style="color: #CC5500;">**Gerenciamento de Sprites:**</span>
  - As centenas de imagens utilizarão nativamente formatos de ponta como `<span style="color: #CC5500;">**WebP**</span>` ou `<span style="color: #CC5500;">**AVIF**</span>`.
  - Iconografia miniatura (mini-sprites da tabela) será distribuída via `<span style="color: #CC5500;">**Texture Atlases / Spritesheets**</span>`. 
  - Arte HD (`drop-shadow` Pop-Out) tem carregamento adiado e acionado exclusivamente por `<span style="color: #CC5500;">**Intersection Observer**</span>` ao abrir o detalhe do Pokémon.
- <span style="color: #CC5500;">**Rendering do Minimapa Geográfico:**</span> É uma quebra de contrato renderizar tiles do `<span style="color: #CC5500;">**Minimapa**</span>` como `<div>` ou `<img>` nativas flutuando. O mapa operará em `<span style="color: #CC5500;">**HTML5 Canvas**</span>` ou `<span style="color: #CC5500;">**WebGL**</span>` (via API Canvas / PixiJS) viabilizando 60fps constantes no Pan/Zoom.
- <span style="color: #CC5500;">**Regra de Ouro das Animações (Evitando Layout Thrashing):**</span>
  - Animações do framework de Tailwind ou CSS puro só podem alterar as propriedades `<span style="color: #CC5500;">**transform (translate, scale)**</span>` e `<span style="color: #CC5500;">**opacity**</span>`.
  - Modificar dimensões de *Box Model* (`width, height, top, left, margin`) no meio de interações é <span style="color: #CC5500;">**estritamente proibido**</span>, pois forçaria o recálculo brutal do layout pelo navegador.
  - Modais e sidebars flutuantes devem utilizar `<span style="color: #CC5500;">**will-change: transform**</span>` para promover o elemento à sua própria camada de GPU.
