import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function SupportPage() {
  return (
    <main className="bg-black min-h-screen">
      <div className="pt-40 pb-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Central de <span className="text-[#BE63D1]">Suporte</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Estamos aqui para garantir que sua experiência com o Cineflix seja perfeita. Escolha um canal abaixo ou tire suas dúvidas no nosso FAQ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* E-mail */}
          <div className="bg-[#1a1a1a] p-10 rounded-[40px] border border-white/5 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#BE63D1]/20 rounded-2xl flex items-center justify-center text-3xl mb-6">📧</div>
            <h3 className="text-white font-black text-2xl uppercase mb-2">E-mail Oficial</h3>
            <p className="text-white/40 mb-6 text-sm">Respostas em até 24 horas úteis</p>
            <p className="text-[#BE63D1] font-bold text-xl">suporte@acessocineflix.vip</p>
          </div>

          {/* WhatsApp / Atendimento */}
          <div className="bg-[#1a1a1a] p-10 rounded-[40px] border border-white/5 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center text-3xl mb-6">💬</div>
            <h3 className="text-white font-black text-2xl uppercase mb-2">WhatsApp VIP</h3>
            <p className="text-white/40 mb-6 text-sm">Suporte em tempo real para clientes ativos</p>
            <a 
              href="#" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition-all uppercase tracking-widest text-sm shadow-lg active:scale-95"
            >
              Falar com Atendente
            </a>
          </div>
        </div>

        <div className="mb-20">
          <FAQ />
        </div>
      </div>

      <Footer />
    </main>
  );
}
