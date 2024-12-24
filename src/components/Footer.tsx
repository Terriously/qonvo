import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <section className="bg-primary/5 py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
            <Bot className="w-8 h-8 text-primary" />
          </div>
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Customer Service?
            </h2>
            <p className="text-xl text-gray-600">
              Join the future of AI-powered communication. Get started with Qunvo today.
            </p>
          </div>
          <div>
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => window.open("https://calendly.com/terry-wen333/15min", "_blank")}>
              Schedule Demo
            </Button>
          </div>
          <div className="pt-16 border-t w-full text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Qunvo. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;