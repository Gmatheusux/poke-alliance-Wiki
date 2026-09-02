---
name: ui_density_mobile
description: Regras estritas de responsividade, alta densidade de dados, tabelas (Double-Sticky e Card View) e uso da History API em modais.
---
# Arquitetura de Alta Densidade e Mobile

## 1. Breakpoints e Reflow
- **Max-Width:** O layout global é travado em `1440px`. Telas Ultrawide devem centralizar o container (`margin: 0 auto`) para evitar estiramento de tabelas.
- **WCAG Azul Oficial:** A cor `#3C5AA6` só pode ser usada como *background* (com texto branco). Nunca como texto sobre o fundo `Slate/Zinc`.

## 2. Tabelas e Dados no Mobile
- Abaixo de `768px`, tabelas complexas (Movesets) quebram para **Card Views**.
- Em Desktop, tabelas densas utilizam **Double-Sticky Header** (Top e Primeira Coluna fixos).
- **Tier Lists (Mobile):** Proibido scroll horizontal. Sprites (32x32) utilizam `flex-wrap` para empilhar verticalmente.

## 3. Navegação Flutuante
- Modais e Drawers em Mobile devem injetar um Hash na **History API**. O botão "Voltar" nativo do celular deve apenas fechar o componente, e não fechar o site inteiro.
- **Progressive Disclosure:** Proibido uso de abas horizontais infinitas no Mobile. Transmutar para Dropdown `<select>` ou Accordions verticais.
