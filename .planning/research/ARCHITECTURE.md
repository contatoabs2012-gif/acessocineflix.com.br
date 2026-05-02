# Research: Architecture

## Architectural Approach
A página será estruturada como uma **Static Site Generation (SSG)**. Todo o conteúdo que puder ser gerado durante o build será exportado como HTML estático. Não haverá requisições complexas a banco de dados em tempo de execução.

## Key Technical Decisions
1. **Configuração Centralizada de Links (Config File)**: Em vez de espalhar os links de afiliado nos componentes, teremos um arquivo `src/config/links.ts`. Se o link do afiliado mudar ou precisar de parâmetros UTM, ele é alterado em um único lugar.
2. **Estrutura de Componentes Isolados**:
   - `Hero.tsx`
   - `Benefits.tsx`
   - `Pricing.tsx`
   - `Testimonials.tsx`
   - `FAQ.tsx`
   - `StickyCTA.tsx`
3. **Rastreamento Modular**: Arquitetura que isola o código de rastreamento (Facebook Pixel / Google Tag Manager) em um componente wrapper para não sujar os componentes de interface.
4. **Arquivos Estáticos Otimizados**: Imagens fornecidas pelo usuário serão inseridas diretamente em `/public/images/` para rápido acesso. Logo SVG em `/public/logo.svg`.
