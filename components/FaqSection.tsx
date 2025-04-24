import React from 'react';
import FaqItem from './FaqItem';

// Placeholder FAQ data
const faqs = [
  {
    question: "How can I find cheap flights?",
    answer: "Use our flexible date search and price tracking tools to spot the best deals.",
  },
  {
    question: "Can I find flights for a weekend getaway?",
    answer: "Absolutely! Enter your desired weekend dates in the search bar.",
  },
  {
    question: "How can I find flight deals if my travel dates are flexible?",
    answer: "Check the 'Find the Cheapest Days' tool which shows price variations across the month.",
  },
  // Add more FAQs as needed
];

const FaqSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-heading text-yellow-400 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection; 