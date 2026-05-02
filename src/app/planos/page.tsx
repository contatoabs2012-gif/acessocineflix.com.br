import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import TrustSection from '@/components/TrustSection';

export default function PlansPage() {
  return (
    <main className="bg-black min-h-screen">
      {/* Header da Página de Planos */}
      <div className="pt-40 pb-12 text-center px-4">
        <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
          Escolha seu <span className="text-[#BE63D1]">Acesso</span>
        </h1>
        <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-lg uppercase tracking-widest">
          Liberação imediata após a confirmação do pagamento
        </p>
      </div>

      <Pricing />
      
      <div className="py-20">
        <TrustSection />
      </div>

      <Footer />
    </main>
  );
}
