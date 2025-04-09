// src/components/CTASection.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgClass?: string;
}

const CTASection = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  bgClass = "glass" 
}: CTASectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${bgClass} p-10 rounded-2xl text-center my-16`}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <Link
        to={buttonLink}
        className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:translate-y-[-2px] shadow-lg hover:shadow-primary/20"
      >
        {buttonText} <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </motion.div>
  );
};

export default CTASection;