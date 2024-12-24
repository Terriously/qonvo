import { MessageSquare, Calendar, Users } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Customised Agent",
    description: "Get a custom made ready to go solution trained on your past calls"
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Engage visitors with human-like interactions powered by advanced AI"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automatically manage appointments and notify relevant team members"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How Qanvo Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Transform your front desk operations with our intelligent AI assistant
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;