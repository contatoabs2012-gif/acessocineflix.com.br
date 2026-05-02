---
wave: 1
depends_on: []
files_modified:
  - src/app/page.tsx
  - src/components/Pricing.tsx
  - src/components/Features.tsx
  - src/components/Testimonials.tsx
  - src/components/FAQ.tsx
autonomous: true
requirements:
  - "Desenvolver componentes de conversão (Preços, FAQ, Prova Social)"
  - "Manter a estética premium e dark mode"
  - "Implementar interatividade simples (Accordion no FAQ)"
---

# Phase 3: Conversão e Prova Social (Abaixo da dobra)

**Goal**: Desenvolver os componentes que matam as objeções e direcionam para a compra.

## Tasks

<task>
  <id>1</id>
  <title>Desenvolver a Seção de Preços (Pricing)</title>
  <description>Criar uma tabela de preços comparativa ou cartões de planos destacando o "Melhor Valor".</description>
  <read_first>
    - src/config/links.ts
  </read_first>
  <action>
    - Criar `src/components/Pricing.tsx`.
    - Definir 3 planos (Mensal, Trimestral, Anual).
    - Destacar o plano Anual com um badge de "Mais Popular".
    - Conectar botões ao `siteConfig.affiliateLink`.
  </action>
  <acceptance_criteria>
    - Os cartões de preço são responsivos.
    - O plano de destaque tem uma borda ou cor diferente.
  </acceptance_criteria>
</task>

<task>
  <id>2</id>
  <title>Criar Seção de Benefícios (Features)</title>
  <description>Listar os diferenciais técnicos e de conteúdo (4K, Sem Anúncios, Todos os Dispositivos).</description>
  <read_first>
    - src/app/globals.css
  </read_first>
  <action>
    - Criar `src/components/Features.tsx`.
    - Usar um grid de ícones (ou placeholders de ícones) com títulos e descrições curtas.
  </action>
  <acceptance_criteria>
    - Pelo menos 4 benefícios listados de forma organizada.
  </acceptance_criteria>
</task>

<task>
  <id>3</id>
  <title>Implementar Prova Social (Testimonials)</title>
  <description>Exibir depoimentos de "clientes" para gerar autoridade e confiança.</description>
  <read_first>
    - src/app/globals.css
  </read_first>
  <action>
    - Criar `src/components/Testimonials.tsx`.
    - Usar layout de grid ou carousel simples com avatares e texto de feedback.
  </action>
  <acceptance_criteria>
    - Depoimentos visíveis e formatados.
  </acceptance_criteria>
</task>

<task>
  <id>4</id>
  <title>Desenvolver FAQ (Perguntas Frequentes)</title>
  <description>Criar um Accordion para as dúvidas mais comuns (Como acesso? É seguro? Suporte?).</description>
  <read_first>
    - src/app/globals.css
  </read_first>
  <action>
    - Criar `src/components/FAQ.tsx`.
    - Usar estado do React (`useState`) para controlar a abertura dos itens.
  </action>
  <acceptance_criteria>
    - Os itens expandem e contraem ao clicar.
  </acceptance_criteria>
</task>

<task>
  <id>5</id>
  <title>Integrar na Home Page</title>
  <description>Adicionar as novas seções na `page.tsx` abaixo do Hero.</description>
  <read_first>
    - src/app/page.tsx
  </read_first>
  <action>
    - Importar e renderizar `Features`, `Pricing`, `Testimonials` e `FAQ` na ordem estratégica de conversão.
  </action>
  <acceptance_criteria>
    - A página inicial contém todas as novas seções em ordem lógica.
  </acceptance_criteria>
</task>

## Verification
- `npm run build` passa.
- Teste manual da funcionalidade do Accordion no FAQ.

## must_haves
- Botões de preço vinculados ao link de afiliado.
- Design responsivo em todos os componentes.
