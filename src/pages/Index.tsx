import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VelaChat from "@/components/VelaChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Footer />
      <VelaChat />
    </div>
  );
};

export default Index;
