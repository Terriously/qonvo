
import { Users, Clock, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "5x",
    label: "batch call efficiency from day 1"
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Availability"
  },
  {
    icon: TrendingUp,
    value: "80%",
    label: "conversion rate of top humans"
  }
];

const Metrics = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
