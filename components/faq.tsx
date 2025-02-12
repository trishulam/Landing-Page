"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "Who is Vessel Match for?",
    answer:
      "For brokers, vessel operators, and charterers who rely on email-heavy workflows and want to automate vessel-cargo matching, trade intelligence, and circulations.",
  },
  {
    question: "How is Vessel Match different from other platforms?",
    answer:
      "Unlike traditional maritime tools, Vessel Match turns unstructured emails into structured insights and automated workflows—so you never miss an opportunity.",
  },
  {
    question: "Does Vessel Match integrate with my current email provider?",
    answer:
      "Yes! It extracts data from your inbox automatically—no manual input required.",
  },
  {
    question: "How accurate are the matches and insights?",
    answer:
      "Vessel Match continuously learns from market trends and user behavior, ensuring precise, high-confidence matches and insights.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-blue-400">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn more about how Vessel Match's AI Agent can transform your
            maritime operations.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto z-50">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glassmorphism mb-4 overflow-hidden">
                <motion.button
                  className="w-full text-left p-6 flex justify-between items-center"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {activeIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-blue-400" />
                  )}
                </motion.button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-muted-foreground">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-blue-400/5 blur-[120px] rounded-full" />
    </section>
  );
}
