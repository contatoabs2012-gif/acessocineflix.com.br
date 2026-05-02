'use client';

const movies = [
  { title: 'Lançamentos', image: '/lancamentos-cinema-2026-acesso-cineflix.webp' },
  { title: 'Ação', image: '/melhores-filmes-de-acao-streaming-cineflix.webp' },
  { title: 'Séries', image: '/assistir-series-online-acesso-cineflix-poster.webp' },
  { title: 'Qualidade 4K', image: '/cinema-em-casa-qualidade-4k-cineflix.webp' },
  { title: 'Exclusivos', image: '/lancamentos-exclusivos-cineflix-streaming-brasil.webp' },
  { title: 'Animes', image: '/assistir-animes-e-desenhos-online-cineflix.webp' },
  { title: 'Catálogo', image: '/melhor-site-para-assistir-filmes-e-series-cineflix.webp' },
  // Duplicando para o loop infinito
  { title: 'Lançamentos', image: '/lancamentos-cinema-2026-acesso-cineflix.webp' },
  { title: 'Ação', image: '/melhores-filmes-de-acao-streaming-cineflix.webp' },
  { title: 'Séries', image: '/assistir-series-online-acesso-cineflix-poster.webp' },
  { title: 'Qualidade 4K', image: '/cinema-em-casa-qualidade-4k-cineflix.webp' },
];

export default function MoviesShowcase() {
  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
          Os melhores <span className="text-[#BE63D1]">Filmes e Séries</span>
        </h2>
        <p className="text-white/60 mt-4 text-lg">O catálogo mais atualizado do mercado em um só lugar.</p>
      </div>

      {/* Carrossel Infinito Container */}
      <div className="relative flex w-full overflow-hidden py-4">
        <div className="flex animate-infinite-scroll gap-4 md:gap-8 whitespace-nowrap">
          {movies.map((movie, index) => (
            <div 
              key={index}
              className="relative flex-shrink-0 w-48 md:w-72 aspect-square overflow-hidden rounded-3xl border border-white/10 group shadow-2xl"
            >
              <img 
                src={movie.image} 
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <span className="text-white font-black text-sm md:text-lg uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform">{movie.title}</span>
              </div>
            </div>
          ))}
          {/* Segunda cópia para o loop sem cortes */}
          {movies.map((movie, index) => (
            <div 
              key={`dup-${index}`}
              className="relative flex-shrink-0 w-48 md:w-72 aspect-square overflow-hidden rounded-3xl border border-white/10 group shadow-2xl"
            >
              <img 
                src={movie.image} 
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <span className="text-white font-black text-sm md:text-lg uppercase tracking-tighter transform translate-y-4 group-hover:translate-y-0 transition-transform">{movie.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a 
          href="#planos"
          className="inline-block bg-[#BE63D1] hover:bg-[#E561A7] text-white px-12 py-5 rounded-full font-black transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(190,99,209,0.3)] uppercase tracking-tighter text-lg"
        >
          Explorar catálogo completo
        </a>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
