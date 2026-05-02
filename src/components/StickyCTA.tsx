'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/links';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece após rolar 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-500 transform md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="bg-slate-900/90 backdrop-blur-lg border border-white/10 p-2 rounded-2xl shadow-2xl">
        <a 
          href={siteConfig.affiliateLink}
          className="flex items-center justify-center w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg animate-pulse"
        >
          ASSINE AGORA COM DESCONTO
        </a>
      </div>
    </div>
  );
}
