'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Como recebo meu acesso?",
    answer: "Após a confirmação do pagamento, você receberá os dados de acesso automaticamente no seu e-mail e via WhatsApp cadastrado."
  },
  {
    question: "Preciso de aparelhos específicos?",
    answer: "Não! Você pode assistir em Smart TVs, Celulares (Android/iOS), Tablets, Computadores ou TV Boxes."
  },
  {
    question: "É seguro assinar pelo site?",
    answer: "Sim, utilizamos as plataformas de pagamento mais seguras do Brasil. Seus dados estão 100% protegidos por criptografia."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, nossos planos não possuem fidelidade. Você pode cancelar a renovação a qualquer momento sem taxas extras."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <span className={`text-brand-primary text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div className={`px-6 transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <p className="text-foreground/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
