"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Why To Believe With Insove Medical Healthcare?",
    answer:
      "Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet tincidunt nam lectus nec. Placerat interdum auctor facilisi massa laoreet hendrerit posuere a. Tristique ultricies consectetu at.",
  },
  {
    question: "Will We Get Healthcare Updates After Surgery?",
    answer:
      "Yes, we provide comprehensive post-surgery healthcare updates. Our medical team will keep you informed about your recovery progress, follow-up appointments, and any necessary care instructions. You'll receive regular updates through your preferred communication method.",
  },
  {
    question: "What Is The Cost For Just Check-Up ?",
    answer:
      "The cost for a routine check-up varies depending on the type of examination and any additional tests required. We offer transparent pricing and can provide a detailed cost estimate before your visit. Please contact our office for specific pricing information based on your needs.",
  },
  {
    question: "Can I Cancel My Appointment?",
    answer:
      "Yes, you can cancel your appointment. We request that you cancel at least 24 hours in advance to avoid any cancellation fees. You can cancel through our online portal, by calling our office, or by responding to your appointment confirmation message.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            We've Got Answers
          </h2>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 pr-8">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="pb-6 pl-0 pr-12">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

