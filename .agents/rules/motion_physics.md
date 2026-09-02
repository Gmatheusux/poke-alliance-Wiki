---
name: motion_physics
description: Matemática exata para animações de UI, Drawers, efeito Pop-Out em 3D e prevenção de cinetose (Reduced Motion).
---
# Motion Design e Acessibilidade

## 1. Física de Molas (Springs)
- **Modais e Drawers:** Devem utilizar molas com **Stiffness: 300** a **400** e **Damping: 30** a **40**. Isso garante entrada tátil rápida sem efeito elástico/gelatina.

## 2. Performance (GPU)
- O efeito de **Pop-Out 3D** (Hover em Sprites) e Drop Shadows pesados não devem ser animados no layout base para evitar *Layout Thrashing*.
- É obrigatório usar um pseudo-elemento `::after` com a sombra estática e animar apenas a propriedade `opacity` (0 para 1), delegando o peso para a Placa de Vídeo, enquanto o sprite original usa apenas `transform: translate3d()`.

## 3. Acessibilidade (Vestibular)
- É obrigatório monitorar `@media (prefers-reduced-motion: reduce)`.
- Se ativo, as animações spring são abortadas e substituídas por um *Fade-in* estático. O eixo Y do Hover é neutralizado para evitar tontura/cinetose.
