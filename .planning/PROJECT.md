# Acesso Cineflix (Landing Page de Afiliado)

## What This Is

Uma landing page de alta conversão para o afiliado do domínio acessocineflix.com.br, atuando como um "clone" visual e persuasivo do site oficial acessocineflix.vip. O produto é voltado para o fundo de funil, atraindo usuários que já estão prontos para comprar, e sua função é encaminhá-los aos links de checkout de afiliado do proprietário.

## Core Value

Velocidade extrema e design persuasivo para maximizar a conversão de cliques em vendas de afiliado, sem atritos na jornada do usuário.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

(None yet — ship to validate)

### Active

<!-- Current scope. Building toward these. -->

- [ ] Clonar a estrutura e identidade visual do site acessocineflix.vip
- [ ] Aplicar copywriting persuasivo focado em público fundo de funil (usuários prontos para comprar)
- [ ] Implementar framework Next.js para garantir máximo desempenho e tempos de carregamento mínimos
- [ ] Otimizar SEO técnico (Meta tags, Semântica, OpenGraph, performance para Core Web Vitals)
- [ ] Configurar todos os botões de ação (Call to Action) para os links de checkout do afiliado
- [ ] Garantir segurança elevada no frontend
- [ ] Otimizar e servir as imagens fornecidas pelo usuário em formato WebP e os logos em SVG

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- [Sistemas de pagamento nativos] — As conversões ocorrerão externamente através de links de afiliado.
- [Sistemas de login/dashboard] — Esta é puramente uma landing page; o serviço em si é entregue pela plataforma oficial.

## Context

O projeto surge da necessidade de um afiliado maximizar seus retornos a partir do domínio próprio acessocineflix.com.br. O usuário tem conhecimento e disponibilidade para tratar recursos (como converter as imagens em WebP e vetorizar a logo). O foco do projeto é técnico: criar o contêiner (a página) mais eficiente possível para que o tráfego que chega não tenha barreiras (tempo de resposta, layout quebrado) e clique nos links.

## Constraints

- **Tech Stack**: Next.js — Para garantir velocidade e renderização otimizada em SEO.
- **Performance**: O site precisa carregar quase instantaneamente e ser perfeitamente responsivo (Mobile-first é crítico para afiliados).
- **SEO e Semântica**: Deve ser implementado com HTML5 semântico limpo para classificar bem nas buscas.

## Key Decisions

<!-- Decisions that constrain future work. Add throughout project lifecycle. -->

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js como framework | Oferece SSR/SSG natural, que beneficia amplamente o SEO e o TTI (Time to Interactive). | — Pending |
| Assets tratados pelo usuário (WebP/SVG) | O usuário tem domínio sobre isso e garante a máxima compressão e qualidade, aliviando complexidade técnica no código. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-02 after initialization*
