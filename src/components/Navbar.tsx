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
    <>
      <nav className="fixed top-0 w-full z-[999] bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[70px]">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="relative h-10 w-36 md:w-44 transition-transform hover:scale-105">
                <Image
                  src="/acesso-cineflix-logo.svg"
                  alt="Logo Acesso Cineflix"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
   
            {/* Links Desktop */}
            <div className="hidden md:flex items-center space-x-6 md:space-x-10">
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
   
            {/* Menu Hamburguer Mobile */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-3 focus:outline-none bg-white/5 rounded-xl border border-white/10 active:bg-white/10 transition-all"
                aria-label="Abrir Menu"
              >
                <div className="w-6 h-4 flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
  
      {/* Gaveta Mobile - Estilo Glassmorphism Compacto e Centralizado */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[9999] animate-fade-in md:hidden">
          {/* Backdrop com transparência estratégica */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-lg" 
            onClick={() => setIsMenuOpen(false)} 
          />
          
          {/* Container do Menu - Estilo Modal/Gaveta Flutuante */}
          <div className="relative h-full flex flex-col items-center justify-center p-4 pointer-events-none">
            <div className="w-full max-w-[300px] bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 pb-10 flex flex-col items-center pointer-events-auto shadow-2xl relative">
              
              {/* Botão Fechar Minimalista (Topo) */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-5 text-white/30 hover:text-white p-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Links de Navegação */}
              <div className="flex flex-col items-center space-y-6 w-full mt-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-base font-bold uppercase tracking-[0.2em] text-center w-full hover:text-[#BE63D1] transition-all"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="w-full pt-4">
                  <Link 
                    href={siteConfig.affiliateLink}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-gradient-to-r from-[#BE63D1] to-[#E561A7] text-white py-4 rounded-2xl font-bold text-center uppercase tracking-[0.1em] text-xs shadow-lg active:scale-95 transition-all"
                  >
                    Assine Agora
                  </Link>
                </div>
                
                <div className="flex flex-col items-center space-y-4 pt-4 w-full">
                  <Link 
                     href="/politica-de-privacidade" 
                     onClick={() => setIsMenuOpen(false)}
                     className="text-white/20 text-[9px] uppercase tracking-[0.2em]"
                  >
                     Privacidade
                  </Link>

                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-red-600/80 hover:bg-red-600 text-white text-[10px] font-bold py-2 px-6 rounded-full uppercase tracking-widest transition-all active:scale-95"
                  >
                    Fechar Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
