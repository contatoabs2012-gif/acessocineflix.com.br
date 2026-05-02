'use client';
import Image from 'next/image';

export default function Hero() {
  const heroImage = (
    <div className="relative w-full max-w-[500px] lg:max-w-[650px] aspect-[16/9] lg:aspect-square group">
      {/* Aura de brilho roxo profunda */}
      <div className="absolute -inset-10 bg-[#BE63D1]/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      {/* Imagem com Máscara de Gradiente Suavizada */}
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/assistir-cineflix-na-smart-tv-e-celular.webp"
          alt="Acesso Cineflix Premium"
          className="w-full h-full object-cover animate-float"
          style={{
            maskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 90%)'
          }}
        />
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-10 lg:py-20">
      {/* Background Poster Mosaic Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black z-10" />
        <img 
          src="/mosaico-filmes-e-series-acesso-cineflix.webp" 
          alt="Mosaico de Filmes e Séries Acesso Cineflix"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full mt-44 lg:mt-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 w-full">
          
          {/* Lado do Conteúdo (Texto e Logo) */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* LOGO NO TOPO */}
            <div className="mb-6 lg:mb-14">
               <img src="/acesso-cineflix-logo.svg" alt="Cineflix Logo" className="h-12 md:h-16 lg:h-[85px] w-auto" />
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 lg:mb-6 uppercase tracking-tight">
              Milhares de canais, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BE63D1] to-[#E561A7]">
                filmes e séries
              </span>
            </h1>

            {/* IMAGEM NO MOBILE (Aparece logo abaixo da headline) */}
            <div className="block lg:hidden w-full mb-8">
               <div className="flex justify-center">
                  {heroImage}
               </div>
            </div>
            
            {/* DESCRIÇÃO */}
            <p className="text-base md:text-xl text-white/80 mb-8 lg:mb-10 max-w-xl font-medium px-4 lg:px-0">
              O catálogo mais completo do Brasil. Assista Netflix, Disney+, Premiere e centenas de canais ao vivo em qualquer dispositivo.
            </p>

            {/* BOTÃO */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 lg:px-0 mb-10 lg:mb-0">
              <a 
                href="#planos"
                className="inline-block bg-[#BE63D1] hover:bg-[#E561A7] text-white text-lg lg:text-xl px-12 py-4 lg:py-5 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(190,99,209,0.4)] uppercase tracking-tight whitespace-nowrap"
              >
                Começar agora
              </a>
            </div>
          </div>

          {/* Lado da Imagem DESKTOP (Escondida no mobile nesta posição) */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
             {heroImage}
          </div>

        </div>
      </div>
    </section>
  );
}
