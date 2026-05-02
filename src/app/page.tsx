import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="animate-fade-in-up">
        <Hero />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
        <Features />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
        <Pricing />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <Testimonials />
      </div>
      <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
