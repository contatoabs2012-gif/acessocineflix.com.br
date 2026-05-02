import Image from 'next/image';

const categories = [
  {
    title: 'ESPORTES',
    desc: 'O melhor do futebol nacional e internacional, UFC, F1 e muito mais.',
    image: '/assistir-futebol-ao-vivo-online-cineflix.webp',
  },
  {
    title: 'FILMES',
    desc: 'Os maiores lançamentos do cinema diretamente na sua tela.',
    image: '/melhores-filmes-para-assistir-online-cineflix.webp',
  },
  {
    title: 'SÉRIES',
    desc: 'Suas maratonas garantidas com as melhores séries de todas as plataformas.',
    image: '/series-completas-para-maratonar-cineflix.webp',
  },
  {
    title: 'INFANTIL',
    desc: 'Desenhos e filmes para a criançada se divertir com segurança.',
    image: '/assistir-animes-e-desenhos-online-cineflix.webp',
  },
  {
    title: 'ANIMES',
    desc: 'Uma biblioteca completa para os fãs da cultura japonesa.',
    image: '/melhores-animes-online-dublados-cineflix.webp',
  },
  {
    title: 'ADULTO',
    desc: 'Conteúdo exclusivo com controle parental garantido.',
    image: '/conteudo-adulto-exclusivo-cineflix.webp',
  },
];

export default function CategoriesGrid() {
  return (
    <section className="py-20 bg-[#1a0b2e]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
          Tudo isso na <span className="text-[#E561A7]">Cineflix</span>
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl mx-auto">
          Uma experiência completa de entretenimento para toda a família em um só lugar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#BE63D1]/50 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] to-transparent" />
              </div>
              <div className="p-6 text-left relative z-10">
                <h3 className="text-xl font-black text-white mb-2 tracking-tighter">
                  {cat.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
