import HeroSection from "@/components/HeroSection";
import JournalSection from "@/components/JournalSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import VelaChat from "@/components/VelaChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <JournalSection />
      <ArchitectureSection />
      <FeaturesSection />
      <Footer />
      <VelaChat />
    </div>
  );
};

export default Index;
