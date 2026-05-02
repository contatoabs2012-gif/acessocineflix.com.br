'use client';
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[300] md:left-auto md:max-w-sm animate-slide-up">
      <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-lg">🍪</span>
            <p className="text-white/70 text-[10px] leading-tight">
              Usamos cookies para melhorar sua experiência. Ao navegar, você aceita nossa <a href="/politica-de-privacidade" className="text-[#BE63D1] underline">Política</a>.
            </p>
          </div>
          <button 
            onClick={acceptCookies}
            className="w-full bg-[#BE63D1] hover:bg-[#a552b8] text-white text-[10px] font-bold py-2 rounded-xl transition-all uppercase tracking-widest active:scale-95"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
