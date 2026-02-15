import HeroSection from "@/components/HeroSection";
import JournalSection from "@/components/JournalSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <JournalSection />
      <ArchitectureSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
