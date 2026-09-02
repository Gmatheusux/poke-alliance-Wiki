---
name: Poke Alliance Wiki
version: 1.0.0
tokens:
  colors:
    background: "#0F1115"
    surface: "#1A1D24"
    primary: "#CC5500"
    text_main: "#E2E8F0"
    text_muted: "#94A3B8"
    accent_neon: "#00F0FF"
  typography:
    heading: "Inter, sans-serif"
    body: "Roboto, sans-serif"
    monospace: "Fira Code, monospace"
  spacing:
    base: "8px"
    component_gap: "16px"
    section_padding: "32px"
  breakpoints:
    mobile: "320px - 767px"
    tablet: "768px - 1023px"
    desktop: "1024px+"
  elements:
    - Bug
    - Dark
    - Dragon
    - Electric
    - Fairy
    - Fighting
    - Fire
    - Flying
    - Ghost
    - Grass
    - Ground
    - Ice
    - Normal
    - Poison
    - Psychic
    - Rock
    - Steel
    - Water
---

# Diretrizes de UX/UI - A Nova Era das Wikis

Este documento estabelece as regras de design e usabilidade para a plataforma, focando em performance, legibilidade e respeito cognitivo ao jogador, extirpando os padrões poluídos da indústria atual.

## 1. Arquitetura de Informação e Navegação
- **Omnisearch (Ctrl+K):** A busca é o motor principal. Ela deve exibir microdados (ícones, status base, tags) diretamente no painel flutuante, eliminando cliques de navegação desnecessários.
- **Table of Contents (TOC) Fixo:** O índice do artigo acompanha o scroll vertical em desktop. No mobile, torna-se um menu flutuante ancorado na "Thumb Zone" (área de alcance do polegar na metade inferior da tela).

## 2. Padrões de Interface (UI)
- **Zero-Bloat e Dark Mode:** A interface é obrigatoriamente escura (reduz fadiga) e focada no conteúdo. Proibido o uso de elementos que causem *Viewport Squeeze* (como banners fixos ou anúncios intrusivos).
- **Progressive Disclosure:** Dados muito densos, como árvores de habilidades ou lore massivo, devem ser fragmentados usando `Accordions` (sanfonas) ou `Tabs` (abas), revelando a carga cognitiva sob demanda.
- **Cards ao invés de Tabelas (Mobile):** Tabelas de loot ou status com múltiplas colunas devem ser readequadas para layouts responsivos de *Cards* em telas menores, evitando rolagem horizontal desconfortável.

## 3. Microinterações e Escaneabilidade
- **Tooltips Ricos e Contextuais:** Termos técnicos, itens e locais mencionados no meio de parágrafos devem abrir um *Tooltip* de alta fidelidade via `hover` (desktop) ou toque (mobile), mostrando as estatísticas sem obrigar o usuário a sair da página.
- **Módulos TL;DR (Inteligência Artificial):** Artigos extensos (ex: Guias de Raid/Boss) devem obrigatoriamente possuir um card de resumo gerado com inteligência artificial no topo, garantindo leitura dinâmica em menos de 5 segundos.
