'use client';
import { useState, useEffect } from 'react';

const plans = [
  { name: 'Plano START 1 Mês', price: 'R$ 20,00', monthly: '', screens: 1, link: 'https://go.atomopay.com.br/pqv5zhbrfx?affh=37lpa5v9ld', highlight: false },
  { name: 'Plano PRO 6 Meses', price: 'R$ 69,90', monthly: '| R$ 11,65 MÊS', screens: 2, link: 'https://go.atomopay.com.br/mruuv?affh=37lpa5v9ld', highlight: false },
  { name: 'Plano PRIME 1 Ano', price: 'R$ 97,00', monthly: '| R$ 8,08 MÊS', screens: 3, link: 'https://go.atomopay.com.br/cnjz2?affh=37lpa5v9ld', highlight: true },
  { name: 'Plano ULTIMATE 2 Anos', price: 'R$ 149,90', monthly: '| R$ 6,24 MÊS', screens: 4, link: 'https://go.atomopay.com.br/5aoa7?affh=37lpa5v9ld', highlight: true },
];

const TvIcon = () => (
  <div className="flex flex-col items-center justify-center bg-white rounded-[2px] px-0.5 py-0.5 w-6 h-3.5 border border-black shadow-sm">
    <span className="text-[6px] font-black text-black leading-none">TV</span>
    <div className="w-2 h-[1px] bg-black/60 mt-0.5"></div>
  </div>
);

export default function StickyMobileButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes neon-pulse {
          0%, 100% { box-shadow: 0 0 10px rgba(190, 99, 209, 0.4); }
          50% { box-shadow: 0 0 25px rgba(190, 99, 209, 0.8); }
        }
        .animate-neon-pulse {
          animation: neon-pulse 2s infinite ease-in-out;
        }
      `}</style>

      {/* Botão Fixo no Topo com Efeito de Shrink - Ajustado para top-20 */}
      <div className={`lg:hidden fixed top-20 left-0 w-full z-[100] transition-all duration-300 transform ${
        scrolled ? 'scale-90 opacity-95 -translate-y-2' : 'scale-100 opacity-100 translate-y-0'
      }`}>
        <div className="bg-black/90 backdrop-blur-md border-b border-white/10 px-4 py-4">
          <div className="flex flex-col items-center gap-2 max-w-sm mx-auto">
            {!scrolled && (
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest animate-pulse text-center">
                JÁ É NOSSO CLIENTE? <br /> RENOVE SEU PLANO AGORA
              </span>
            )}
            <a 
              href="#planos" 
              onClick={(e) => { e.preventDefault(); setIsOpen(true); }}
              className={`flex items-center justify-center w-full bg-gradient-to-r from-[#BE63D1] to-[#E561A7] text-white rounded-2xl font-bold uppercase tracking-tight shadow-lg active:scale-95 transition-all whitespace-nowrap ${
                scrolled ? 'py-2 text-sm px-4' : 'py-5 text-lg px-2'
              }`}
            >
              <span className={`${scrolled ? 'mr-1 text-base' : 'mr-2 text-xl'}`}>⚡</span> 
              RENOVE SEU PLANO AGORA
            </a>
          </div>
        </div>
      </div>

      {/* Drawer Compacto com Pulsação Neon nos Botões Premiums */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] animate-fade-in lg:hidden">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full h-full flex flex-col justify-end">
            <div className="relative w-full bg-[#0a0a0a] rounded-t-[40px] p-5 animate-slide-up max-h-[95vh] overflow-y-auto border-t border-white/10 shadow-[0_-20px_50px_rgba(190,99,209,0.3)]">
              <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4" onClick={() => setIsOpen(false)} />
              
              <h3 className="text-lg font-bold text-white text-center mb-4 uppercase tracking-tight">ESCOLHA SEU PLANO PREFERIDO</h3>

              <div className="space-y-3 mb-6">
                {plans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`relative p-[1px] rounded-[24px] transition-all ${
                      plan.highlight 
                      ? 'bg-gradient-to-b from-[#BE63D1] to-[#6a2977] shadow-[0_0_35px_rgba(190,99,209,0.6)]' 
                      : 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                    }`}
                  >
                    <div className="bg-[#1a1a1a] rounded-[23px] p-4 flex flex-col items-center">
                      {/* Título e Mensal na mesma linha */}
                      <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-4 text-center w-full">
                        {plan.name} <span className="text-[#BE63D1] ml-1">{plan.monthly}</span>
                      </h4>
                      
                      {/* Linha de Ação: Preço Total + Renovar */}
                      <div className="flex items-center justify-center gap-4 w-full mb-4 px-1">
                        <span className="text-[#BE63D1] font-bold text-[25px] tracking-tight drop-shadow-[0_0_8px_rgba(190,99,209,0.4)]">
                          {plan.price}
                        </span>
                        <a 
                          href={plan.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-10 py-3 rounded-full font-bold text-[15px] bg-gradient-to-r from-[#4b3c7d] to-[#BE63D1] text-white shadow-md active:scale-95 transition-all uppercase ${
                            plan.highlight ? 'animate-neon-pulse' : ''
                          }`}
                        >
                          RENOVAR
                        </a>
                      </div>

                      {/* Rodapé: Número + TELAS + Ícones em uma linha */}
                      <div className="flex items-center justify-center gap-3 pt-3 border-t border-white/5 w-full">
                        <div className="flex items-center gap-1">
                          <span className="text-white font-black text-xs">{plan.screens}</span>
                          <span className="text-white font-bold text-[10px] uppercase">TELAS</span>
                        </div>
                        <div className="flex gap-1">
                           {[...Array(plan.screens)].map((_, i) => <TvIcon key={i} />)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm rounded-2xl transition-all shadow-lg active:scale-95 mt-4"
              >
                FECHAR JANELA
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
