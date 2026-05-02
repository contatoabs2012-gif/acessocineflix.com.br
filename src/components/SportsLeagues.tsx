'use client';

const logos = [
  "Brasileirão Série A.webp",
  "Brasileirão Série B.webp",
  "Champions League.webp",
  "Copa do Brasil..webp",
  "Fórmula 1 automobilismo em geral.webp",
  "NBA Basquete Americano dos Estados Unidos.webp",
  "Premier League.webp",
  "Taça Libertadores da América.webp",
  "Copa Sul-Americana de Futebol.webp",
  "Bundesliga Campeonato Alemão.webp",
  "Copa Mundial de Clubes FIFA.webp",
  "Davis cup.webp"
];

export default function SportsLeagues() {
  return (
    <section className="py-12 bg-black overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter">
          Aqui você encontra <span className="text-[#BE63D1]">Futebol e Esportes</span>
        </h2>
        <p className="text-white/40 text-sm mt-1 italic uppercase tracking-[0.2em]">Assista as maiores competições do mundo ao vivo.</p>
      </div>

      {/* VERSÃO DESKTOP - Fila Única */}
      <div className="hidden md:flex relative w-full overflow-hidden items-center h-48">
        <div className="flex animate-sports-scroll gap-12 whitespace-nowrap items-center">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center">
              <img 
                src={`/${encodeURIComponent(logo)}`} 
                alt={logo.replace('.webp', '')}
                className="h-32 w-auto object-contain transition-transform duration-500 hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* VERSÃO MOBILE - Duas Filas */}
      <div className="flex md:hidden flex-col gap-4">
        {/* Fila 1 */}
        <div className="relative flex w-full overflow-hidden items-center h-24">
          <div className="flex animate-sports-scroll gap-4 whitespace-nowrap items-center">
            {logos.slice(0, 6).concat(logos.slice(0, 6)).map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <img 
                  src={`/${encodeURIComponent(logo)}`} 
                  alt={logo.replace('.webp', '')}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Fila 2 */}
        <div className="relative flex w-full overflow-hidden items-center h-24">
          <div className="flex animate-sports-scroll-reverse gap-4 whitespace-nowrap items-center">
            {logos.slice(6).concat(logos.slice(6)).map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <img 
                  src={`/${encodeURIComponent(logo)}`} 
                  alt={logo.replace('.webp', '')}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes sportsScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes sportsScrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-sports-scroll {
          animation: sportsScroll 15s linear infinite;
        }
        .animate-sports-scroll-reverse {
          animation: sportsScrollReverse 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
