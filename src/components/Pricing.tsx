const plans = [
  {
    name: 'PLANO START',
    price: '20,00',
    period: 'Mensal',
    monthly: '',
    screens: 2,
    screensText: '2 Telas',
    features: ['Milhares de conteúdos', 'Suporte Humanizado', 'Bônus canais adultos'],
    buttonText: 'Comprar agora',
    link: 'https://go.atomopay.com.br/pqv5zhbrfx?affh=37lpa5v9ld',
    highlight: false
  },
  {
    name: 'PLANO PRO',
    price: '69,90',
    period: 'Semestral',
    monthly: 'Apenas R$ 11,65/mês',
    screens: 2,
    screensText: '2 Telas',
    features: ['Milhares de conteúdos', 'Suporte Humanizado', 'Bônus canais adultos'],
    buttonText: 'Comprar agora',
    link: 'https://go.atomopay.com.br/mruuv?affh=37lpa5v9ld',
    highlight: false
  },
  {
    name: 'PLANO PRIME',
    price: '97,00',
    oldPrice: '297',
    installment: '12X R$ 10,68',
    period: '1 Ano',
    monthly: 'Apenas R$ 8,08/mês',
    screens: 4,
    screensText: '4 Telas',
    features: ['Milhares de conteúdos', 'Suporte Humanizado', 'Bônus canais adultos'],
    buttonText: 'Comprar agora',
    link: 'https://go.atomopay.com.br/cnjz2?affh=37lpa5v9ld',
    highlight: true,
    badge: '★ POPULAR ★'
  },
  {
    name: 'PLANO ULTIMATE',
    price: '149,90',
    oldPrice: '497',
    installment: '12X R$ 16,97',
    period: '2 Anos',
    monthly: 'Apenas R$ 6,24/mês',
    screens: 4,
    screensText: '4 Telas',
    features: ['Milhares de conteúdos', 'Suporte Humanizado', 'Bônus canais adultos'],
    buttonText: 'Comprar agora',
    link: 'https://go.atomopay.com.br/5aoa7?affh=37lpa5v9ld',
    highlight: true,
    badge: '★ POPULAR ★'
  }
];

const TvIcon = ({ size = 'large' }: { size?: 'small' | 'large' }) => (
  <div className={`flex flex-col items-center justify-center bg-black rounded-[4px] px-1 py-1 border border-black shadow-md ${size === 'large' ? 'w-12 h-8' : 'w-8 h-5'}`}>
    <span className={`${size === 'large' ? 'text-[10px]' : 'text-[8px]'} font-black text-white leading-none`}>TV</span>
    <div className={`bg-white/20 mt-1 ${size === 'large' ? 'w-5 h-[2px]' : 'w-3 h-[1.5px]'}`}></div>
  </div>
);

export default function Pricing() {
  return (
    <section id="planos" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
            Nossos <span className="text-[#BE63D1]">Planos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[40px] border flex flex-col transition-all duration-300 bg-white mb-8 lg:mb-0 ${
                plan.highlight 
                ? 'border-[#BE63D1] scale-100 lg:scale-105 z-10 shadow-[0_0_50px_rgba(190,99,209,0.3)]' 
                : 'border-white/10'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#BE63D1] text-white text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-widest whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              
              <h3 className="text-2xl font-bold text-black mb-6 uppercase tracking-tight">{plan.name}</h3>
              
              {/* ÁREA DOS ÍCONES DE TV */}
              <div className="relative w-full py-10 mb-8 bg-gray-50 rounded-[30px] flex flex-col items-center justify-center border border-gray-100">
                 <div className="flex flex-wrap justify-center gap-3 mb-4">
                    {[...Array(plan.screens)].map((_, i) => (
                      <TvIcon key={i} />
                    ))}
                 </div>
                 <span className="bg-[#BE63D1]/10 text-[#BE63D1] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                    {plan.screensText} Simultâneas
                 </span>
              </div>

              <div className="mb-4">
                <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                   {plan.features[0]} | {plan.period}
                </p>
                <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest mb-4">
                   {plan.features[1]} | {plan.features[2]}
                </p>
                
                <p className="text-black font-bold text-sm mb-1 uppercase tracking-tight">Por apenas:</p>
                
                <div className="flex flex-col items-center">
                  <div className="flex items-start justify-center">
                    <span className="text-black font-bold text-2xl mt-2">R$</span>
                    <span className="text-black font-bold text-7xl tracking-tight">{plan.price.split(',')[0]}</span>
                    {plan.price.includes(',') && (
                      <span className="text-black font-bold text-2xl mt-2">{plan.price.split(',')[1]}</span>
                    )}
                  </div>

                  {plan.monthly && (
                    <p className="text-[#BE63D1] font-black text-sm uppercase mb-4 animate-pulse">
                      {plan.monthly}
                    </p>
                  )}
                  
                  {plan.oldPrice && (
                    <div className="flex items-center gap-2">
                       <span className="text-black/40 text-xs line-through font-bold">DE R${plan.oldPrice}</span>
                    </div>
                  )}
                  
                  {plan.installment && (
                    <p className="text-[#BE63D1] font-bold text-xs mt-2 uppercase tracking-wide">Ou {plan.installment}</p>
                  )}
                </div>
              </div>

              <p className="text-[#BE63D1] font-bold text-[10px] mb-6 tracking-widest">APROVEITE</p>

              <a 
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 rounded-full font-bold bg-[#BE63D1] hover:bg-[#8e38a1] text-white transition-all text-center uppercase tracking-tight text-lg shadow-lg active:scale-95 whitespace-nowrap px-4"
              >
                {plan.buttonText}
              </a>

              <div className="mt-6 flex justify-center gap-4 opacity-40">
                 <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    <span className="text-[8px] font-bold text-black uppercase">Compra Segura</span>
                 </div>
                 <div className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                    <span className="text-[8px] font-bold text-black uppercase">Privacidade</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
