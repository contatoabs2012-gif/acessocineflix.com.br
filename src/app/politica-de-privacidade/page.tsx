import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter text-center md:text-left">
          Política de <span className="text-[#BE63D1]">Privacidade</span>
        </h1>
        
        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">1. Introdução</h2>
            <p>
              A ACESSO CINEFLIX valoriza a sua privacidade. Esta política descreve como coletamos e protegemos seus dados ao utilizar nossa plataforma de entretenimento. Ao utilizar nossos serviços, você concorda com as práticas descritas aqui.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">2. Coleta de Dados</h2>
            <p>
              Coletamos apenas informações essenciais para a prestação do serviço, como e-mail para suporte e dados técnicos de navegação (cookies) para melhorar a performance do carregamento do site. Não vendemos seus dados a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">3. Uso de Cookies</h2>
            <p>
              Utilizamos cookies para personalizar sua experiência e analisar nosso tráfego. Isso nos permite oferecer um serviço mais rápido e estável, identificando falhas de conexão em tempo real para garantir o sinal sem travamentos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">4. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. Nossos servidores utilizam criptografia de ponta a ponta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">5. Seus Direitos</h2>
            <p>
              Você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento através do nosso suporte oficial em suporte@acessocineflix.vip.
            </p>
          </section>

          <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] mt-12">
            <p className="text-sm italic">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
