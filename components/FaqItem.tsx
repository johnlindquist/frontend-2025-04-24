import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <details className="bg-gray-800 p-4 border border-yellow-600 rounded-none cursor-pointer group">
      <summary className="font-semibold text-yellow-300 outline-none list-none relative pr-8">
        {question}
        {/* Basic CSS arrow indicator */}
        <span className="absolute right-0 top-0 transition-transform duration-300 group-open:rotate-90">
          &#9654; {/* Consider replacing with a better icon if needed */}
        </span>
      </summary>
      <p className="mt-2 text-gray-400 text-sm">
        {answer}
      </p>
    </details>
  );
};

export default FaqItem; 