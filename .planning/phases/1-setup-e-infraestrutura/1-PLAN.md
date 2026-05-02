---
wave: 1
depends_on: []
files_modified:
  - package.json
  - tailwind.config.ts
  - src/app/layout.tsx
  - src/app/page.tsx
  - src/config/links.ts
  - next.config.mjs
autonomous: true
requirements:
  - "Construção do projeto base em Next.js (App Router)"
  - "Estilização baseada em TailwindCSS reproduzindo o esquema de cores e tipografia da marca"
  - "Configuração Centralizada: Arquivo de constante links.ts"
  - "Otimizar SEO técnico (Meta tags, Semântica, OpenGraph)"
  - "Integração de Pixels: Estrutura pronta (usando next/third-parties)"
---

# Phase 1: Setup e Infraestrutura

**Goal**: Inicializar o projeto Next.js com TailwindCSS e configurar a fundação arquitetural para SEO e rastreamento.

## Tasks

<task>
  <id>1</id>
  <title>Inicializar o App Next.js com TailwindCSS</title>
  <description>Criar o scaffolding do projeto Next.js (App Router, TypeScript, TailwindCSS) e configurar a saída para exportação estática, se aplicável, ou manter otimizado para deploy.</description>
  <read_first>
    - package.json (se existir)
  </read_first>
  <action>
    - Executar `npx -y create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`
    - Adicionar `@next/third-parties` às dependências (`npm install @next/third-parties`).
  </action>
  <acceptance_criteria>
    - `package.json` deve conter `next`, `react`, `react-dom`, `tailwindcss` e `@next/third-parties`.
    - Diretório `src/app` deve estar criado e ser a raiz do App Router.
  </acceptance_criteria>
</task>

<task>
  <id>2</id>
  <title>Configurar TailwindCSS e Tema</title>
  <description>Extender o `tailwind.config.ts` com as cores primárias do Cineflix (tipicamente escuro/preto com destaques) e definir a fonte principal.</description>
  <read_first>
    - tailwind.config.ts
    - src/app/globals.css
  </read_first>
  <action>
    - No `tailwind.config.ts`, adicionar cores da marca (ex: `brand-dark: '#0f172a'`, `brand-primary: '#e50914'`, `brand-light: '#f8fafc'`).
    - Remover CSS boilerplate em `src/app/globals.css`, mantendo apenas as diretivas `@tailwind`.
  </action>
  <acceptance_criteria>
    - `tailwind.config.ts` possui a configuração das cores estendidas.
    - `src/app/globals.css` está limpo e não contém código boilerplate conflitante.
  </acceptance_criteria>
</task>

<task>
  <id>3</id>
  <title>Configuração Centralizada de Links e Afiliado</title>
  <description>Criar o arquivo `links.ts` que será a única fonte de verdade para os URLs externos de checkout e contato.</description>
  <read_first>
    - Nenhum
  </read_first>
  <action>
    - Criar `src/config/links.ts`.
    - Exportar um objeto `siteConfig` contendo propriedades como `affiliateLink: "INSERIR_LINK_AQUI"`, `whatsappContact: "INSERIR_NUMERO_AQUI"`.
  </action>
  <acceptance_criteria>
    - O arquivo `src/config/links.ts` existe e exporta a variável `siteConfig` com tipagem adequada.
  </acceptance_criteria>
</task>

<task>
  <id>4</id>
  <title>Configurar Metadados Globais (SEO)</title>
  <description>Ajustar o arquivo `layout.tsx` para injetar os metadados corretos de SEO (Title, Description, OpenGraph) e inicializar a fonte base.</description>
  <read_first>
    - src/app/layout.tsx
  </read_first>
  <action>
    - Alterar a exportação `metadata` em `src/app/layout.tsx` com `title: "Acesso Cineflix - Assine Agora"`, `description: "O melhor conteúdo na palma da sua mão."`.
    - Adicionar configuração OpenGraph.
    - Configurar `next/font/google` (ex: `Inter` ou `Roboto`) e aplicar à tag `body`.
  </action>
  <acceptance_criteria>
    - `src/app/layout.tsx` exporta os metadados personalizados e aplica a fonte corretamente à classe do `<body>`.
  </acceptance_criteria>
</task>

<task>
  <id>5</id>
  <title>Implementar Base de Rastreamento (Pixels)</title>
  <description>Configurar Google Tag Manager e/ou Facebook Pixel de forma não obstrutiva utilizando a biblioteca nativa do Next.js.</description>
  <read_first>
    - src/app/layout.tsx
  </read_first>
  <action>
    - Importar `{ GoogleTagManager }` de `@next/third-parties/google` em `layout.tsx`.
    - Adicionar o componente no final do `<body>` ou `<head>` conforme documentação, passando o GTM ID (via ENV ou mock `"GTM-XXXXXXX"` por hora).
  </action>
  <acceptance_criteria>
    - O código importa e utiliza `@next/third-parties` sem causar erros de compilação.
  </acceptance_criteria>
</task>

## Verification
- Comando `npm run build` passa sem erros de TypeScript ou Lint.
- O arquivo de configuração `src/config/links.ts` existe.
- O `layout.tsx` inclui a fonte, metadados personalizados e a tag do GTM.

## must_haves
- O projeto Next.js foi criado na raiz da pasta.
- `package.json` deve conter `@next/third-parties`.
- CSS global está limpo.
