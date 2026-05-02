'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/links';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Nossos Planos', href: '/planos' },
    { name: 'Suporte', href: '/suporte' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[150] bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative h-10 w-36 md:w-44 transition-transform hover:scale-105">
              <Image
                src="/acesso-cineflix-logo.svg"
                alt="Logo Acesso Cineflix"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </Link>
          </div>

          {/* Links Desktop (Aparecem a partir de tablets em landscape) */}
          <div className="hidden sm:flex items-center space-x-6 md:space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-white hover:text-[#BE63D1] transition-colors text-[11px] md:text-xs font-black uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href={siteConfig.affiliateLink}
              className="bg-[#BE63D1] hover:bg-[#a552b8] text-white px-6 md:px-8 py-3 rounded-full font-bold transition-all shadow-lg text-[10px] md:text-xs uppercase tracking-widest active:scale-95"
            >
              Assine Agora
            </Link>
          </div>

          {/* Menu Hamburguer Mobile (Apenas em telas bem pequenas) */}
          <div className="sm:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 focus:outline-none bg-white/5 rounded-lg border border-white/10"
              aria-label="Abrir Menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Gaveta Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] animate-fade-in sm:hidden">
          <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl" onClick={() => setIsMenuOpen(false)} />
          <div className="relative h-full flex flex-col items-center justify-center space-y-12 px-6">
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-6 text-white text-5xl font-light"
            >
              &times;
            </button>
            
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-3xl font-black uppercase tracking-tighter hover:text-[#BE63D1] transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link 
              href={siteConfig.affiliateLink}
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[#BE63D1] text-white py-5 rounded-2xl font-bold text-center uppercase tracking-widest text-lg shadow-2xl"
            >
              Assine Agora
            </Link>
            
            <Link 
               href="/politica-de-privacidade" 
               onClick={() => setIsMenuOpen(false)}
               className="text-white/40 text-xs uppercase tracking-widest"
            >
               Privacidade e Cookies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
