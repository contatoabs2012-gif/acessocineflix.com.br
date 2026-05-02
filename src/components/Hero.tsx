import { siteConfig } from '@/config/links';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient/Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-background z-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          O Cinema na Sua Casa <br />
          <span className="text-brand-primary">Sem Limites.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          Tenha acesso imediato aos lançamentos mais esperados, séries exclusivas e canais ao vivo. Tudo em um só lugar, com qualidade 4K.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={siteConfig.affiliateLink}
            className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary/90 text-white text-xl px-12 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-brand-primary/40 active:scale-95"
          >
            QUERO ACESSO IMEDIATO
          </a>
          <p className="text-sm text-foreground/60 italic">
            *Ativação instantânea após o pagamento
          </p>
        </div>

        {/* Hero Illustration / Devices Preview Placeholder */}
        <div className="mt-16 relative w-full aspect-video max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
           <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
              <p className="text-white/30 text-sm font-mono">[ Espaço para Imagem WebP de Dispositivos / Interface ]</p>
           </div>
        </div>
      </div>
    </section>
  );
}
