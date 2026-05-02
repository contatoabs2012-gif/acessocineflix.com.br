'use client';

export default function TrustSection() {
  return (
    <section className="py-16 bg-black border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="w-8 h-8 text-yellow-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">
          Aprovado por mais de <span className="text-[#BE63D1]">100 mil clientes</span>
        </h2>
        
        <p className="text-white/60 text-lg md:text-xl leading-relaxed">
          Nossa tecnologia de satélite exclusivo garante que você assista a todo o conteúdo 
          <span className="text-white font-bold"> sem travamentos</span>, em qualquer lugar do mundo, 
          mesmo com internet básica.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
           <span className="text-white font-black text-xl tracking-tighter">99.9% ESTÁVEL</span>
           <span className="text-white font-black text-xl tracking-tighter">SUPORTE 24/7</span>
           <span className="text-white font-black text-xl tracking-tighter">SATÉLITE PRÓPRIO</span>
        </div>
      </div>
    </section>
  );
}
