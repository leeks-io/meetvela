import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntegrationsSection from "@/components/IntegrationsSection";
import VelaChat from "@/components/VelaChat";

export default function Integrations() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
        </div>
        <IntegrationsSection />
      </div>
      <Footer />
      <VelaChat />
    </div>
  );
}
