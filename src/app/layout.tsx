import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acesso Cineflix - Assine Agora",
  description: "O melhor conteúdo na palma da sua mão. Assine o Cineflix e tenha acesso imediato a milhares de filmes e séries.",
  openGraph: {
    title: "Acesso Cineflix",
    description: "Assine agora e tenha o melhor conteúdo.",
    type: "website",
    locale: "pt_BR",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
    </html>
  );
}
