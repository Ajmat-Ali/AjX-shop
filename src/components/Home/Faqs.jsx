import React, { useState } from "react";
import { faqs } from "../../utils/constant";

export const Faqs = () => {
  const [openFaqIndex, setopenFaqIndex] = useState(0);

  const handleAccordion = (index) => {
    setopenFaqIndex((prev) => {
      return prev === index ? null : index;
    });
  };
  return (
    <div>
      {faqs.map((faq, index) => {
        const isOpen = openFaqIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-200 rounded-lg mb-3 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => handleAccordion(index)}
              // aria-expanded={isOpen}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-150 cursor-pointer"
            >
              <span>{faq.question}</span>

              <span className="ml-4 text-xl font-bold text-gray-500 select-none">
                {isOpen ? "-" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-gray-200 p-4 bg-gray-50 text-gray-700 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
