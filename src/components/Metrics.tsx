import { Users, Building, Clock, Star } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "50,000+",
    label: "Visitors Managed"
  },
  {
    icon: Building,
    value: "1,000+",
    label: "Companies"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Availability"
  },
  {
    icon: Star,
    value: "99.9%",
    label: "Satisfaction Rate"
  }
];

const Metrics = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon className="w-8 h-8 text-primary mb-4" />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-gray-500 text-center">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;