import { AppWindow, Smartphone, Link } from "lucide-react";

const ConnectApps = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trigger Your Apps</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Connect over 3000+ apps automatically. Our expert team can also help you set up any additional integrations.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <AppWindow className="w-16 h-16 text-primary" />
          <Smartphone className="w-16 h-16 text-primary" />
          <Link className="w-16 h-16 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default ConnectApps;