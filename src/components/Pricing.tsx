import { siteConfig } from '@/config/links';

const plans = [
  {
    name: "Mensal",
    price: "R$ 34,90",
    period: "/mês",
    features: ["1 Tela", "Qualidade HD", "Acesso Imediato"],
    buttonText: "Assinar Mensal",
    highlight: false
  },
  {
    name: "Anual",
    price: "R$ 14,90",
    period: "/mês",
    features: ["4 Telas Simultâneas", "Qualidade 4K Ultra HD", "Acesso Vitalício no Período", "Suporte VIP"],
    buttonText: "Assinar Anual (Melhor Oferta)",
    highlight: true,
    badge: "MAIS ESCOLHIDO"
  },
  {
    name: "Trimestral",
    price: "R$ 24,90",
    period: "/mês",
    features: ["2 Telas", "Qualidade Full HD", "Acesso Imediato"],
    buttonText: "Assinar Trimestral",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Planos que cabem no seu bolso</h2>
          <p className="text-foreground/60 text-lg">Escolha a melhor opção para você e sua família.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border transition-all ${
                plan.highlight 
                ? 'bg-brand-primary/10 border-brand-primary scale-105 z-10 shadow-2xl shadow-brand-primary/20' 
                : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-foreground/60">{plan.period}</span>
              </div>

              <ul className="text-left space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <span className="text-brand-primary">✓</span> {feat}
                  </li>
                ))}
              </ul>

              <a 
                href={siteConfig.affiliateLink}
                className={`block w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight 
                  ? 'bg-brand-primary hover:bg-brand-primary/90 text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
