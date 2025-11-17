import React, { useState } from "react";

const InteractiveFaqSection = () => {
  // Use state to track the index of the currently open FAQ.
  // We initialize it to 0 to keep the first item open by default, as in the image.
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "While many posture correctors are designed to be adjustable and fit a wide range of ages and body types, it's best to check the specific product's sizing guide and recommendations. If you have any existing medical conditions, consulting a doctor is advised.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "When used correctly and consistently as a training aid, a posture corrector can help strengthen muscles and build muscle memory for better alignment. However, it should be used in conjunction with exercises and proper ergonomic habits, not as a permanent fix.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "This specific product may or may not include smart features. For models that do, vibration alerts are a common feature that reminds you to correct your posture whenever you start slouching, providing real-time feedback.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "To be notified, you can typically sign up for a waitlist or back-in-stock alert on the product page by providing your email address. You will receive an email as soon as the item becomes available for purchase again.",
    },
  ];

  const handleToggle = (index) => {
    // If the clicked item is already open, close it (set openIndex to null or -1).
    // Otherwise, open the clicked item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isCurrentlyOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  collapse collapse-arrow border border-opacity-30 transition-all duration-300 shadow-md cursor-pointer
                  ${
                    isCurrentlyOpen
                      ? "bg-teal-50 border-teal-500/50 text-secondary"
                      : "bg-white border-gray-200 hover:border-gray-400"
                  }
                `}
                onClick={() => handleToggle(index)} // Use onClick on the whole div for a larger click area
              >
                {/* We use the hidden radio input and the 'checked' property 
                  to control the DaisyUI collapse based on our React state.
                */}
                <input
                  type="radio"
                  name="my-accordion-2"
                  checked={isCurrentlyOpen}
                  onChange={() => {
                    /* Suppress warning, state handles the change */
                  }}
                  className="min-h-0 hidden"
                />

                {/* Question / Collapse Title */}
                <div
                  className={`
                    collapse-title text-lg font-medium py-4 pr-12
                    ${
                      isCurrentlyOpen
                        ? "text-teal-700"
                        : "text-gray-700 hover:text-gray-900"
                    }
                  `}
                >
                  {faq.question}
                </div>

                {/* Answer / Collapse Content */}
                <div className="collapse-content pt-0 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <button className="btn btn-lg bg-lime-400 hover:bg-lime-500 text-gray-800 font-semibold border-none rounded-lg shadow-xl px-8 transition-all duration-300 flex items-center mx-auto">
            See More FAQ's
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 transform rotate-90"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveFaqSection;
