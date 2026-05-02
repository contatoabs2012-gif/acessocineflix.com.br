# Research: Pitfalls

## Common Failure Modes
- **Scripts de Terceiros Destruindo o Performance Score**: Adicionar o Pixel do Facebook e o GTM de forma síncrona bloqueia o processamento no mobile.
  - *Mitigação*: Carregar pixels usando estratégias assíncronas (ex: `strategy="afterInteractive"` ou `worker` via Partytown).
- **Cumulative Layout Shift (CLS) devido a Imagens**: As imagens "pulam" na tela enquanto carregam, empurrando o botão de CTA e causando cliques errados.
  - *Mitigação*: Uso estrito de propriedades `width` e `height` nos elementos `Image` e predefinição do aspecto ratio com Tailwind.
- **Roteamento Desnecessário**: Landing pages que fazem navegação de rota "falsa" ou pop-ups complexos para mostrar preços.
  - *Mitigação*: Design One-Page suave (smooth scroll) ancorado, direto para os botões.
- **Link Quebrado do Afiliado**: É o maior risco para um afiliado.
  - *Mitigação*: Como decidido na arquitetura, centralização dos links em `links.ts` para fácil manutenção e auditoria rápida.
