const features = [
  {
    title: "Qualidade Ultra HD 4K",
    description: "Assista aos seus filmes e séries favoritos com a melhor resolução disponível no mercado.",
    icon: "🎬"
  },
  {
    title: "Sem Anúncios",
    description: "Experiência pura e sem interrupções. O foco total é na sua diversão.",
    icon: "🚫"
  },
  {
    title: "Multi-Dispositivos",
    description: "Acesse pelo Celular, Tablet, Smart TV ou Computador onde quer que você esteja.",
    icon: "📱"
  },
  {
    title: "Suporte 24/7",
    description: "Nossa equipe está sempre pronta para ajudar você com qualquer dúvida ou ativação.",
    icon: "🎧"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
          Por que escolher o <span className="text-brand-primary">Cineflix?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
