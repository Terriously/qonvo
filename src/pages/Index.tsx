import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import ConnectApps from "@/components/ConnectApps";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="metrics">
          <Metrics />
        </div>
        <div id="connect-apps">
          <ConnectApps />
        </div>
        <div id="security">
          <Security />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;