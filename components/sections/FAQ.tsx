"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Which is better: Shwe Casino or 888 Casino?",
    answer: "Both Shwe Casino (rating 4.9/5) and 888 Casino (4.7/5) are excellent choices for Myanmar players. Shwe Casino ranks #1 with the best overall rating, while 888 Casino offers higher bonuses (150% vs 100%). Both casinos offer withdrawals within 1 hour."
  },
  {
    question: "Is 777 Casino safe for Myanmar players?",
    answer: "Yes, 777 Casino is licensed by the Malta Gaming Authority and is one of the safest options for Myanmar players. It ranks highly alongside Shwe Casino and 888 Casino."
  },
  {
    question: "What are the best casino bonuses in Myanmar 2025?",
    answer: "Win8 Casino offers 200% up to 400,000 MMK, 888 Casino offers 150% up to 600,000 MMK, and Shwe Casino offers 100% up to 500,000 MMK. All casinos support KBZ Pay and Wave Money."
  },
  {
    question: "Which casinos accept KBZ Pay and Wave Money?",
    answer: "All top Myanmar casinos accept KBZ Pay and Wave Money including Shwe Casino, 888 Casino, 777 Casino, Win8, 999 Casino, PGLucky88, and FaFaFa Casino."
  },
  {
    question: "How does Win8 compare to 999 Casino?",
    answer: "Win8 and 999 Casino both offer excellent game selections and bonuses. Both casinos offer withdrawals within 1 hour. Both are highly rated for Myanmar players."
  },
  {
    question: "Are PGLucky88 and FaFaFa Casino legitimate?",
    answer: "Yes, both PGLucky88 and FaFaFa Casino are legitimate online casinos licensed and regulated. They offer secure payment methods, fair games, and good customer support for Myanmar players."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Common questions about Myanmar online casinos
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-dark pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-casino-purple-600 transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

