import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Individual Agent",
    price: "$69",
    priceNote: "per month",
    features: ["Default script", "One number", "Pay as you go"],
    cta: "Get Started",
    ctaHref: "https://fonelyportal.lovable.app",
    highlighted: false,
  },
  {
    name: "Branch/Team",
    price: "From $300",
    priceNote: "per month",
    features: [
      "Customized script",
      "Multiple numbers",
      "Live testing",
      "Call forwarding",
      "Dedicated support",
    ],
    cta: "Book a Demo",
    ctaHref: "https://calendly.com/terry-wen333/fonely-ai",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceNote: "For large teams",
    features: [
      "Everything in Branch/Team",
      "Trained on past calls",
      "Email automation",
      "Texting automation",
      "CRM integrations",
    ],
    cta: "Talk to Sales",
    ctaHref: "https://calendly.com/terry-wen333/fonely-ai",
    highlighted: false,
  },
];

const ConnectApps = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business. Scale up as you grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col bg-white shadow-sm border ${
                plan.highlighted
                  ? "border-primary ring-2 ring-primary/20 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">{plan.priceNote}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 w-full"
                    : "w-full"
                }
                variant={plan.highlighted ? "default" : "outline"}
                onClick={() => window.open(plan.ctaHref, "_blank")}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectApps;