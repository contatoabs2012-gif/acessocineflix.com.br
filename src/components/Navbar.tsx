import Link from 'next/link';
import { siteConfig } from '@/config/links';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Placeholder - User will provide SVG later */}
            <Link href="/" className="text-2xl font-bold text-brand-primary tracking-tighter">
              CINEFLIX
            </Link>
          </div>
          <div className="hidden md:block">
            <Link 
              href={siteConfig.affiliateLink}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-brand-primary/20"
            >
              Assine Agora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
