---
wave: 1
depends_on: []
files_modified:
  - src/app/layout.tsx
  - src/components/StickyCTA.tsx
  - src/app/globals.css
  - next.config.ts
autonomous: true
requirements:
  - "Implementar Sticky CTA no Mobile"
  - "Adicionar animações de entrada para aumentar o engajamento"
  - "Otimizar performance para Core Web Vitals"
---

# Phase 4: Otimizações e Finalização

**Goal**: Inserir gatilhos visuais avançados e polimento final para máxima performance.

## Tasks

<task>
  <id>1</id>
  <title>Implementar o Sticky CTA Mobile</title>
  <description>Criar um botão flutuante que aparece apenas no mobile quando o usuário rola a página, mantendo o botão de compra sempre visível.</description>
  <read_first>
    - src/config/links.ts
  </read_first>
  <action>
    - Criar `src/components/StickyCTA.tsx`.
    - Usar lógica de scroll para mostrar o componente após 300px de rolagem.
    - Estilizar como uma barra inferior fixa com o botão "Assine Agora".
  </action>
  <acceptance_criteria>
    - O botão aparece no mobile ao rolar.
    - O botão desaparece ao voltar para o topo.
  </acceptance_criteria>
</task>

<task>
  <id>2</id>
  <title>Adicionar Micro-interações e Animações</title>
  <description>Adicionar transições suaves de entrada (fade-in up) nas seções para uma experiência mais premium.</description>
  <read_first>
    - src/app/globals.css
  </read_first>
  <action>
    - Adicionar classes de animação no `globals.css` ou usar Framer Motion (opcional, manteremos leve com CSS).
    - Aplicar transições de hover nos botões e cards.
  </action>
  <acceptance_criteria>
    - Seções aparecem suavemente ao rolar.
  </acceptance_criteria>
</task>

<task>
  <id>3</id>
  <title>Otimização de Performance e SEO Final</title>
  <description>Configurar compressão de assets, meta tags finais e verificar o bundle size.</description>
  <read_first>
    - next.config.ts
    - src/app/layout.tsx
  </read_first>
  <action>
    - Ativar otimizações no `next.config.ts` se necessário.
    - Adicionar `robots.txt` e `sitemap.xml` (básico).
    - Verificar acessibilidade (Aria labels).
  </action>
  <acceptance_criteria>
    - `npm run build` bem-sucedido.
    - Lighthouse score estimado > 90.
  </acceptance_criteria>
</task>

<task>
  <id>4</id>
  <title>Integrar Sticky CTA no Layout</title>
  <description>Adicionar o componente StickyCTA ao `layout.tsx` para ser global.</description>
  <read_first>
    - src/app/layout.tsx
  </read_first>
  <action>
    - Importar e renderizar `StickyCTA` no `RootLayout`.
  </action>
  <acceptance_criteria>
    - O componente está presente em todas as renderizações da home.
  </acceptance_criteria>
</task>

## Verification
- Build final sem erros.
- Verificação mobile (viewport simulado) do Sticky CTA.

## must_haves
- O Sticky CTA não deve obstruir o conteúdo principal.
- Performance impecável.
