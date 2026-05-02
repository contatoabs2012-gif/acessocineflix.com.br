export default function ChannelGrid() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Temos todos os <span className="text-[#BE63D1]">Canais Disponíveis</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            São mais de 2.000 canais em SD, HD e 4K. Assista a tudo o que você gosta sem travamentos.
          </p>
        </div>

        {/* Imagem Única da Grade de Canais */}
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(190,99,209,0.15)] border border-white/5">
          <img 
            src="/grade-de-canais-ao-vivo-completos-cineflix.webp" 
            alt="Grade de Canais Ao Vivo Completos Cineflix"
            className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
        
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#BE63D1]/10 to-transparent border border-white/5 text-center">
          <p className="text-white font-bold text-lg md:text-xl italic uppercase tracking-widest">
            E muito mais! São milhares de opções para todos os gostos.
          </p>
        </div>
      </div>
    </section>
  );
}
