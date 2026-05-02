---
wave: 1
depends_on: []
files_modified:
  - src/app/page.tsx
  - src/components/Navbar.tsx
  - src/components/Hero.tsx
  - src/components/Footer.tsx
autonomous: true
requirements:
  - "Clonar a estrutura e identidade visual do site acessocineflix.vip"
  - "Aplicar copywriting persuasivo focado em público fundo de funil"
  - "Garantir que o LCP no Hero seja inferior a 1 segundo"
---

# Phase 2: Core Components & Layout (Above the Fold)

**Goal**: Desenvolver as estruturas de navegação e a primeira tela de impacto (Hero), que é a mais crítica para a conversão.

## Tasks

<task>
  <id>1</id>
  <title>Criar Componente de Navbar</title>
  <description>Desenvolver uma barra de navegação simples e elegante contendo o logo (SVG) e um botão de CTA secundário para rolagem suave.</description>
  <read_first>
    - src/app/globals.css
    - src/config/links.ts
  </read_first>
  <action>
    - Criar `src/components/Navbar.tsx`.
    - Implementar layout flexbox com logo à esquerda e botão à direita.
    - Usar `siteConfig` para links se necessário.
  </action>
  <acceptance_criteria>
    - O componente `Navbar` é renderizado corretamente.
    - O botão de CTA na Navbar existe.
  </acceptance_criteria>
</task>

<task>
  <id>2</id>
  <title>Desenvolver a Hero Section</title>
  <description>Criar a seção principal com headline de alto impacto, subtítulo persuasivo e o botão de CTA principal com o link de afiliado.</description>
  <read_first>
    - src/config/links.ts
    - src/app/globals.css
  </read_first>
  <action>
    - Criar `src/components/Hero.tsx`.
    - Implementar design focado em conversão (cores de destaque, fontes grandes).
    - Conectar o botão principal ao `siteConfig.affiliateLink`.
    - Adicionar suporte para imagem de fundo ou ilustrativa com `priority` para o Next.js.
  </action>
  <acceptance_criteria>
    - O botão principal de "Assine Agora" redireciona para o link de afiliado.
    - A headline é visível e segue o estilo visual da marca.
  </acceptance_criteria>
</task>

<task>
  <id>3</id>
  <title>Criar Componente de Footer</title>
  <description>Desenvolver o rodapé com informações de copyright e links institucionais básicos.</description>
  <read_first>
    - src/app/globals.css
  </read_first>
  <action>
    - Criar `src/components/Footer.tsx`.
    - Adicionar disclaimer de afiliado se necessário.
  </action>
  <acceptance_criteria>
    - O Footer é renderizado no final da página.
  </acceptance_criteria>
</task>

<task>
  <id>4</id>
  <title>Montar a Home Page (Above the Fold)</title>
  <description>Integrar os componentes criados na `page.tsx` principal.</description>
  <read_first>
    - src/app/page.tsx
  </read_first>
  <action>
    - Importar e renderizar `Navbar`, `Hero` e `Footer` em `src/app/page.tsx`.
    - Remover o conteúdo padrão do Next.js.
  </action>
  <acceptance_criteria>
    - A página inicial carrega apenas os novos componentes.
    - Não há erros de renderização ou de build.
  </acceptance_criteria>
</task>

## Verification
- `npm run build` deve passar.
- Verificação visual (mockup mental) de que a estrutura "Above the Fold" está completa.

## must_haves
- O botão do Hero deve usar o link do `siteConfig`.
- Uso de `priority` na imagem do Hero.
