# Research: Stack

## Recommended Stack
- **Next.js 14/15 (App Router)**: Permite renderização de componentes no servidor (React Server Components), o que remove o JavaScript do lado do cliente e entrega um HTML extremamente rápido. Ideal para SEO e performance de Landing Pages.
- **Tailwind CSS**: Permite criar a interface de forma responsiva sem escrever arquivos CSS enormes. Não há custo de performance (runtime zero).
- **Framer Motion / CSS Animations**: Recomendamos fortemente focar em animações nativas CSS ou usar Framer Motion com moderação apenas para o "Above the fold" (a primeira tela), evitando inchaço no JavaScript.
- **next/image**: Mesmo que as imagens WebP venham tratadas, o componente otimiza o carregamento preguiçoso (lazy loading) para as que estão fora da tela, o que maximiza a pontuação no Google PageSpeed.
- **next/third-parties**: Para carregar scripts de rastreamento (Pixel, Analytics) sem bloquear a renderização principal.

## What NOT to use
- **React puro (Create React App ou Vite para SPA simples)**: A falta de SSR nativo prejudica o SEO e atrasa o First Contentful Paint.
- **Bibliotecas gigantes de componentes UI (MUI, AntDesign)**: Elas carregam muito CSS/JS desnecessário. Como é uma Landing Page, elementos criados do zero com Tailwind são muito mais rápidos.
