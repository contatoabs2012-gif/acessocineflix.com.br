import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      {/* As próximas seções (Preços, FAQ, etc) serão adicionadas nas próximas fases */}
      <Footer />
    </main>
  );
}
