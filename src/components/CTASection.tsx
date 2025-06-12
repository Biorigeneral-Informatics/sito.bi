// src/components/CTASection.tsx - Static Version
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
    <div className={`${bgClass} p-10 rounded-2xl text-center my-16`}>
      <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
      <p className="text-white/80 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <Link
        to={buttonLink}
        className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 shadow-lg"
      >
        {buttonText} <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
};

export default CTASection;