# Requirements: Acesso Cineflix (Landing Page de Afiliado)

## Purpose
Criar uma landing page de alta conversão para captura de vendas de afiliado, sendo o mais otimizada, rápida e persuasiva possível, mimetizando a autoridade do site original (acessocineflix.vip).

## Target Audience
Público "fundo de funil" (Bottom of Funnel): Pessoas que já conhecem o serviço ou estão ativamente procurando assinar, precisando apenas de um incentivo final de segurança e redirecionamento rápido para o checkout.

## Features

### P0 (Must Have)
- [ ] Construção do projeto base em Next.js (App Router).
- [ ] Estilização baseada em TailwindCSS reproduzindo o esquema de cores e tipografia da marca.
- [ ] **Hero Section**: Título forte, subtítulo de benefícios e botão de ação (CTA) principal (Above the fold).
- [ ] **Seção de Preços (Planos)**: Cards de planos detalhando benefícios.
- [ ] **Configuração Centralizada**: Arquivo de constante `links.ts` contendo as URLs de checkout de afiliado. Todos os CTAs devem ler deste arquivo.
- [ ] **Otimização de Assets**: Uso do componente `<Image />` do Next.js para renderizar as imagens WebP de forma lazy (exceto as do hero, que devem ter `priority`).

### P1 (Should Have)
- [ ] **Social Proof**: Uma seção de depoimentos de clientes satisfeitos para gerar confiança.
- [ ] **FAQ**: Seção de perguntas frequentes estruturada de forma simples e rápida (Accordion) para eliminar últimas dúvidas.
- [ ] **Sticky CTA (Mobile)**: Botão flutuante na parte inferior da tela em dispositivos móveis.
- [ ] **Integração de Pixels**: Estrutura pronta (usando `next/third-parties`) para inserção do Pixel do Facebook e Google Tag Manager, configurados para não bloquear o carregamento principal.

### P2 (Nice to Have)
- [ ] Micro-interações CSS (hover nos botões, fade-in suave ao rolar a página).
- [ ] Banner de escassez no topo (ex: "Oferta encerra em X horas").

## Out of Scope
- Integração com gateway de pagamentos (isso ocorre no site oficial).
- Criação de contas ou autenticação.
- Banco de dados (site será puramente estático/SSG).

## Non-Functional Requirements
- **Performance**: Pontuação acima de 90 no Google PageSpeed Insights (Mobile e Desktop).
- **SEO**: Meta tags precisas, OpenGraph tags (para compartilhamento no WhatsApp/Facebook), e estrutura HTML semântica impecável (h1, h2, secções).
- **Segurança**: Como o site não tem backend ou formulários de entrada de usuário, o foco é em HTTPS (configurado via provedor de hospedagem) e ausência de vulnerabilidades de XSS em bibliotecas externas.
