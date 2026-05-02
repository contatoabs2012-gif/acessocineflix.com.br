import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SportsLeagues from '@/components/SportsLeagues';
import MoviesShowcase from '@/components/MoviesShowcase';
import CategoriesGrid from '@/components/CategoriesGrid';
import ChannelGrid from '@/components/ChannelGrid';
import Pricing from '@/components/Pricing';
import TrustSection from '@/components/TrustSection';
import FAQ from '@/components/FAQ';
import SupportCTA from '@/components/SupportCTA';
import Footer from '@/components/Footer';
import StickyMobileButton from '@/components/StickyMobileButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <SportsLeagues />
      <MoviesShowcase />
      <CategoriesGrid />
      <ChannelGrid />
      <Pricing />
      <TrustSection />
      <FAQ />
      <SupportCTA />
      <Footer />
      <StickyMobileButton />
    </main>
  );
}
