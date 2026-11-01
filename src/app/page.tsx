
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import QuoteParallaxSection from "@/components/sections/QuoteParallaxSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-brand-green-dark">
      <Header />

      <HeroSection />

      <AboutSection />

      <CredentialsSection />

      <QuoteParallaxSection />

      <ServicesSection />

      <FaqSection />

      <Footer />

      <FloatingWhatsApp />
    </main>
  );
}
