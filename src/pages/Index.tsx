import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import ConnectApps from "@/components/ConnectApps";

import FAQ from "@/components/FAQ";
import LeadGenForm from "@/components/LeadGenForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <TrustedBy />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="metrics">
          <Metrics />
        </div>
        <div id="connect-apps">
          <ConnectApps />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <LeadGenForm />
        <Footer />
      </main>
    </div>
  );
};

export default Index;