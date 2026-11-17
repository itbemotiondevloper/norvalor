import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import MilestoneSection from "@/components/MilestoneSection";
import CapabilitiesPinned from "@/components/CapabilitiesPinned";
import AudienceSection from "@/components/AudienceSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ReadinessAudit from "@/components/ReadinessAudit";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F5F7FA] text-[#121212] dark:bg-[#06090e] dark:text-[#f1f4f9] transition-colors duration-300 selection:bg-brand-500/30 selection:text-brand-300">
      {/* Top Floating Glass Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Infinite Technical Compliance Marquee */}
      <Ticker />

      {/* Regulatory Milestone 2027 Alert */}
      <MilestoneSection />

      {/* What We Do / Services (with Pinned Interactive Visualizer) */}
      <CapabilitiesPinned />

      {/* Who We Serve */}
      <AudienceSection />

      {/* How an Engagement Works (Process) */}
      <ProcessSection />

      {/* Pricing You Can Plan Around */}
      <PricingSection />

      {/* Class I Readiness Check (Interactive Diagnostic) */}
      <ReadinessAudit />

      {/* Why Norvalor */}
      <FoundersSection />

      {/* Book Your Free Consultation / Footer */}
      <Footer />
    </main>
  );
}
