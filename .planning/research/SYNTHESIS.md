# Research Synthesis

## Overview
A landing page de afiliado para "acessocineflix" deverá ser construída utilizando **Next.js 14/15** focada em renderização SSG e **TailwindCSS** para estilização utilitária. O objetivo não é ser uma aplicação complexa, mas sim um "funil invisível" e persuasivo que converta visitantes de fundo de funil rapidamente.

## Strategic Decisions
1. **Foco Absoluto em Velocidade**: Remoção de qualquer JS do cliente que não seja estritamente necessário (foco em Server Components).
2. **Centralização de Links de Afiliado**: Um arquivo único (`links.ts`) gerenciará todas as rotas de conversão.
3. **CTA Agressivo e Fluído**: Implementação de botões fixos no mobile e copy agressiva para vendas imediatas.
4. **Pixels e Rastreamento Assíncrono**: Rastreamentos de conversão carregarão sem impactar o TTI (Time to Interactive).

## Feature Mandates
A interface deve conter as seguintes seções essenciais, reproduzindo a confiabilidade do site oficial com melhorias:
1. Hero com CTA claro
2. Social Proof (Depoimentos)
3. Grid de Preços/Planos
4. FAQ para matar objeções finais
5. Sticky CTA no rodapé (mobile-first)

## Risks to Manage
- Desempenho mobile afetado por tracking scripts ou imagens mal dimensionadas. O controle do Core Web Vitals (principalmente CLS e LCP) deve guiar a implementação.
