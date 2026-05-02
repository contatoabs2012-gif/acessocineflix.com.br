'use client';
import { useState } from 'react';

const faqItems = [
  {
    q: "Precisa de Internet para funcionar?",
    a: "Sim, o App Cineflix precisa de internet para o seu funcionamento, mas devido o sinal potencializado de nosso satélite próprio, uma internet básica é mais que o suficiente para rodar videos 4k. Temos clientes que usam conectados na internet 4g do celular e funciona normalmente sem travas."
  },
  {
    q: "Precisa de especialista para configurar?",
    a: "NÃO, nosso sistema é muito simples de instalar, ensinamos passo a passo detalhado pra você conseguir acompanhar e colocar tudo para funcionar."
  },
  {
    q: "O pagamento é mensal?",
    a: "Sim, nós trabalhamos com 4 planos: R$24,90 (Mensal), R$43,90 (Trimestral), R$72,90 (Semestral) e R$137,90 (Anual)."
  },
  {
    q: "Moro em zona rural, funciona pra mim?",
    a: "Sim! Funciona em toda zona rural do Brasil, com uma internet básica, ou até mesmo 3g, 4g do celular você consegue assistir normalmente sem travamentos."
  },
  {
    q: "Cineflix funciona em Angola?",
    a: "Sim! Cineflix funciona em toda Angola e todas as províncias, você vai assistir sem travamentos e a milhares de conteúdos."
  },
  {
    q: "Quantos canais são liberados?",
    a: "Você vai ter acesso a mais de 2 mil canais abertos e fechados, Netflix, Amazon Prime, Disney+, Max, Globoplay, e muito mais!"
  },
  {
    q: "Como vou receber o acesso?",
    a: "Imediatamente! Após o pagamento ser confirmado, nossa plataforma enviará no seu e-mail o acesso para a plataforma, e todos os tutoriais de como usar em qualquer aparelho."
  },
  {
    q: "Em quantos aparelhos posso usar?",
    a: "Nossos planos têm capacidade para até 4 telas simultâneas, variando de acordo com o pacote escolhido."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#0a0510]" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Ainda com <span className="text-[#BE63D1]">Dúvidas?</span>
          </h2>
          <p className="text-white/60">Tudo o que você precisa saber antes de assinar.</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-black/40 transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-bold text-lg md:text-xl pr-8">{item.q}</span>
                <span className={`text-[#BE63D1] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 text-white/70 leading-relaxed text-lg">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
