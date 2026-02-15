import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JournalSection from "@/components/JournalSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import VelaChat from "@/components/VelaChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <JournalSection />
      <FeaturesSection />
      <IntegrationsSection />
      <VelaChat />
    </div>
  );
};

export default Index;
