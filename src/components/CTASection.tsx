// src/components/CTASection.tsx
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`cta-container ${bgClass} ${isVisible ? 'cta-animate-in' : 'opacity-0'}`}
    >
      <h2 className="cta-title">{title}</h2>
      <p className="cta-description">
        {description}
      </p>
      <Link
        to={buttonLink}
        className="cta-button"
      >
        {buttonText} <ArrowRight className="cta-button-icon" />
      </Link>
    </div>
  );
};

export default CTASection;