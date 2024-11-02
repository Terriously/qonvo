import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Qanvo handle visitor check-ins?",
    answer: "Qanvo uses AI to streamline the check-in process. Visitors can interact naturally with the system, which handles identification, badge printing, and host notification automatically."
  },
  {
    question: "Can Qanvo integrate with our existing systems?",
    answer: "Yes, Qanvo seamlessly integrates with popular calendar systems, access control systems, and communication platforms."
  },
  {
    question: "What languages does Qanvo support?",
    answer: "Qanvo supports multiple languages including English, Spanish, French, German, and Chinese, with more languages being added regularly."
  },
  {
    question: "How secure is visitor data with Qanvo?",
    answer: "We implement enterprise-grade security measures including end-to-end encryption, secure data storage, and regular security audits to protect all visitor data."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions about Qanvo
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;