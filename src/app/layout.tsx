import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CINEFLIX OFICIAL | Filmes, Séries e Canais sem Travamentos",
  description: "A melhor experiência de entretenimento do Brasil. Assine agora o Cineflix e tenha acesso imediato a milhares de conteúdos com sinal satélite estável 24h.",
  keywords: "cineflix, assinatura cineflix, renovar plano cineflix, streaming brasil, filmes e séries online",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: "CINEFLIX OFICIAL",
    description: "Milhares de conteúdos na palma da sua mão. Assine agora!",
    type: "website",
    locale: "pt_BR",
    url: "https://acessocineflix.vip",
    siteName: "Cineflix Oficial",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-black">
        <Navbar />
        {children}
        <StickyCTA />
        <CookieConsent />
      </body>
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
    </html>
  );
}
