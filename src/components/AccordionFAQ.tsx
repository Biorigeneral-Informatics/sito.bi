import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface AccordionFAQProps {
    items: FAQItem[];
}

const AccordionFAQ: React.FC<AccordionFAQProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`glass rounded-xl overflow-hidden border transition-all duration-300 ${activeIndex === index ? 'border-primary/30 bg-white/5' : 'border-white/5 hover:border-white/10'
                        }`}
                >
                    <button
                        onClick={() => toggleIndex(index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                        aria-expanded={activeIndex === index}
                    >
                        <span className={`font-medium text-base md:text-lg transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-300'
                            }`}>
                            {item.question}
                        </span>
                        <span className={`ml-4 flex-shrink-0 p-1 rounded-full transition-colors ${activeIndex === index ? 'bg-primary/20 text-primary' : 'bg-white/5 text-gray-400'
                            }`}>
                            {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-5 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-3">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default AccordionFAQ;
