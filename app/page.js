import Hero from "./_components/Hero";
import PricingSection from "./_components/PricingSection";
import Footer from "./_components/Footer";
import HowItWorks from "./_components/how-it-works";

export default function Home() {
  return (
    <div className="min-h-screen bg-neomorphic-bg">
      <Hero />
      <HowItWorks/>
      <PricingSection />
      <Footer />
    </div>
  );
}
