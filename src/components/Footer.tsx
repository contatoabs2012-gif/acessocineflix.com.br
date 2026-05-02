export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold text-brand-primary tracking-tighter">CINEFLIX</span>
            <p className="mt-2 text-sm text-foreground/50">
              © {new Date().getFullYear()} Acesso Cineflix. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-foreground/60">
            <a href="#" className="hover:text-brand-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Suporte</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-foreground/30 uppercase tracking-widest">
            Aviso: Este é um site de afiliado independente. A entrega do conteúdo é de responsabilidade da plataforma oficial.
          </p>
        </div>
      </div>
    </footer>
  );
}
