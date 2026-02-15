import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JournalSection from "@/components/JournalSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import VelaChat from "@/components/VelaChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JournalSection />
      <IntegrationsSection />
      <Footer />
      <VelaChat />
    </div>
  );
};

export default Index;
