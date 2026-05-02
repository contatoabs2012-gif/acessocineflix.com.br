const testimonials = [
  {
    name: "Ricardo Souza",
    role: "Assinante há 6 meses",
    content: "O melhor serviço de streaming que já usei. A qualidade 4K é real e não trava nunca. Recomendo demais!",
    avatar: "👤"
  },
  {
    name: "Ana Beatriz",
    role: "Assinante Premium",
    content: "Ativação foi instantânea. Comprei pelo WhatsApp e em menos de 2 minutos já estava assistindo meus filmes.",
    avatar: "👤"
  },
  {
    name: "Carlos Eduardo",
    role: "Pai de Família",
    content: "Os canais infantis são ótimos. Meus filhos adoram e o preço é muito mais justo que a TV a cabo.",
    avatar: "👤"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">O que nossos <span className="text-brand-primary">clientes</span> dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10 italic">
              <p className="text-lg text-foreground/80 mb-8">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold not-italic">{t.name}</h4>
                  <p className="text-xs text-foreground/40 not-italic uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
