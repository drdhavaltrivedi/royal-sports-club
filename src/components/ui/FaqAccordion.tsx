"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-luxury-border/30">
          <button
            onClick={() => toggle(idx)}
            className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
          >
            <span className="font-serif text-xl text-luxury-primary group-hover:text-luxury-accent transition-colors pr-8">
              {item.question}
            </span>
            <span className="text-luxury-accent flex-shrink-0">
              {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
            </span>
          </button>
          <AnimatePresence>
            {openIndex === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="font-sans text-luxury-text/70 leading-relaxed pb-6">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
