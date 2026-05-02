import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Logo e Bio */}
          <div className="flex flex-col items-center md:items-start lg:col-span-1">
            <img src="/acesso-cineflix-logo.svg" className="h-10 mb-6" alt="Cineflix Logo" />
            <p className="text-white/40 text-sm max-w-xs">
              A melhor experiência de entretenimento digital do Brasil. Satélite exclusivo e sinal sem travamentos.
            </p>
          </div>

          {/* Navegação */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/40 hover:text-[#BE63D1] transition-colors text-sm">Início</Link></li>
              <li><Link href="/planos" className="text-white/40 hover:text-[#BE63D1] transition-colors text-sm">Nossos Planos</Link></li>
              <li><Link href="/suporte" className="text-white/40 hover:text-[#BE63D1] transition-colors text-sm">Suporte Oficial</Link></li>
              <li><Link href="/politica-de-privacidade" className="text-white/40 hover:text-[#BE63D1] transition-colors text-sm">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Atendimento</h4>
            <p className="text-[#BE63D1] font-bold text-base mb-2">suporte@acessocineflix.vip</p>
            <p className="text-white/40 text-sm">Atendimento prioritário via WhatsApp para clientes ativos.</p>
          </div>

          {/* Selos de Confiança */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Segurança</h4>
            <div className="flex flex-col gap-3 w-full">
               <div className="border border-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-tight">Ambiente Criptografado</span>
               </div>
               <div className="border border-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#BE63D1] rounded-full"></div>
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-tight">Sinal Satélite Estável</span>
               </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Legal */}
        <div className="border-t border-white/5 pt-10 text-center max-w-4xl mx-auto">
          <p className="text-white/20 text-[10px] md:text-xs leading-relaxed mb-8">
            Esta página não tem qualquer vínculo com o Facebook S/A e suas empresas, apenas usamos a plataforma para promover os nossos produtos. Ao sair da plataforma toda responsabilidade sobre produtos vendidos e ofertados é de inteira responsabilidade da nossa empresa, bem como se houver quaisquer eventualidades legais. Declaramos que o Facebook S/A não tem qualquer vínculo de associação em processos cíveis ou criminais.
          </p>
          
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-8">
            <p className="text-red-500/60 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Atenção: Não compre produtos piratas. Não vendemos em marketplaces como Mercado Livre, Shopee ou OLX.
            </p>
          </div>

          <div className="text-white/40 text-[10px] md:text-xs">
            © {new Date().getFullYear()} ACESSO CINEFLIX - Todos os direitos reservados.
          </div>

          {/* Web Evo Signature */}
          <div className="flex flex-col items-center gap-3 mt-10 pt-8 border-t border-white/5">
            <p className="text-white/20 text-[10px] uppercase tracking-[3px] font-medium">Este site foi desenvolvido pela</p>
            <a 
              href="https://webevo.com.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-30 hover:opacity-100 transition-all duration-500 transform hover:scale-110"
            >
              <img src="/logo-webevo.svg" alt="Web Evo" className="h-[30px] md:h-[36px] w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
