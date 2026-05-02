# Roadmap

## Phase 1: Setup e Infraestrutura
**Goal**: Inicializar o projeto Next.js com TailwindCSS e configurar a fundação arquitetural para SEO e rastreamento.
- [x] Inicializar app Next.js (App Router).
- [x] Configurar o TailwindCSS e estender o tema com a identidade visual da marca (Cores e Fontes).
- [x] Criar o arquivo de configuração de links de afiliado (`src/config/links.ts`).
- [x] Configurar metadados globais para SEO (Title, Description, OpenGraph) no `layout.tsx`.
- [x] Implementar a estrutura base para carregamento assíncrono dos Pixels (Google/Facebook) usando `next/third-parties`.

## Phase 2: Core Components & Layout (Above the Fold)
**Goal**: Desenvolver as estruturas de navegação e a primeira tela de impacto (Hero), que é a mais crítica para a conversão.
- [ ] Criar Navbar responsiva (Logo e botão de CTA de âncora).
- [ ] Desenvolver o componente `Hero.tsx` com Headline focada em conversão, subtítulo de benefícios e botão de Call-to-Action principal apontando para os links.
- [ ] Garantir que o LCP (Largest Contentful Paint) no Hero seja inferior a 1 segundo, priorizando o carregamento de imagens necessárias.
- [ ] Implementar o rodapé (`Footer.tsx`) com links legais e disclaimer de afiliado (caso exigido por regras).

## Phase 3: Conversão e Prova Social (Abaixo da dobra)
**Goal**: Desenvolver os componentes que matam as objeções e direcionam para a compra.
- [ ] Desenvolver o componente de Preços (`Pricing.tsx`) exibindo os planos de forma clara e atrativa.
- [ ] Criar a seção de Benefícios/Features destacando os diferenciais do serviço.
- [ ] Implementar o componente de Prova Social/Depoimentos (`Testimonials.tsx`).
- [ ] Implementar a seção de Perguntas Frequentes (`FAQ.tsx`) com funcionalidade de Accordion.

## Phase 4: Otimizações e Finalização
**Goal**: Inserir gatilhos visuais avançados e polimento final para máxima performance.
- [ ] Implementar o Sticky CTA no Mobile (botão flutuante inferior).
- [ ] Adicionar micro-interações de CSS (hovers, transições suaves).
- [ ] Realizar auditoria completa de performance (Lighthouse) para garantir a pontuação máxima 90+.
- [ ] Validar a inserção final das imagens WebP (entregues pelo usuário) e ajustar as resoluções e metadados finais de todos os links de afiliado.
