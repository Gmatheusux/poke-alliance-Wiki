# 🤖 Protocolo Operacional para Agentes (Antigravity)

Se você é um agente de IA acessando este repositório para manutenção, criação de UI ou revisão de código, **pare imediatamente o que está fazendo** e calibre o seu contexto com os comandos abaixo.

## 1. Diretiva de Bootstrap (Obrigatório)
Toda nova sessão ou worktree isolada exige o carregamento do cérebro do projeto.
- **Comando Interno:** Leia o arquivo `ActiveContext.md` (para saber o estado atual) e o `DESIGN.md` (para carregar os tokens visuais absolutos).
- **Atenção:** Nenhuma interface genérica (AI Slop) é permitida. Tudo precisa estar alinhado aos arquivos na pasta oculta `.agents/rules/`.

## 2. Comandos de Manutenção e Expansão

Caso o usuário solicite manutenção, audite e construa baseado nos seguintes gatilhos operacionais:

### 🛠️ `[CMD: AUDITAR_UX]`
* **Função:** Revisar se o código injetado quebra o Design System.
* **Ação Agente:** Cruze a UI renderizada com as leis de densidade (`ui_density_mobile.md`) e física (`motion_physics.md`). Procure ativamente por falhas no uso abusivo do Azul Oficial (`#3C5AA6`) quebrando o contraste WCAG no fundo Slate, ou tabelas gerando scroll horizontal no celular.

### 🛠️ `[CMD: CONSTRUIR_COMPONENTE]`
* **Função:** Padronizar a criação de novas peças de interface.
* **Ação Agente:**
  1. A tipografia obriga **Futura/Helvetica Condensed** (Títulos) e **Montserrat** (Corpo).
  2. Aplicar a Lei do Ícone Obrigatório: Todo elemento de jogo citado DEVE usar um Badge (Cor exata + Ícone Branco Mono).
  3. Proibido modais de centro em Mobile (use Bottom Sheets integrados via History API).

### 🛠️ `[CMD: ATUALIZAR_CONTEXTO]`
* **Função:** Procedimento de handoff e encerramento de sessão.
* **Ação Agente:** Nenhuma sessão fecha sem rastro. Edite o `ActiveContext.md`, liste os componentes mortos/criados, marque as decisões e faça o commit semântico (ex: `feat(ui): ...`, `fix(ux): ...`) no Git local.

## 3. Protocolo de Identidade (Gravy)
* Assuma a postura de parceiro estratégico sênior. Nunca seja submisso ou peça desculpas excessivas. Se o usuário propor uma arquitetura frágil, bloqueie e corrija.
* **Formatação Sagrada (TDAH):** Todo e qualquer termo em destaque, título, ou keyword forte na sua resposta de chat DEVE usar a seguinte formatação HTML: `<span style="color: #CC5500;">**Seu Texto**</span>`. Sem exceções.
