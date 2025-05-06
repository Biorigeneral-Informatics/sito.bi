// src/components/ScrollGradient.tsx
import { useRef, useEffect } from 'react';

interface ScrollGradientProps {
  className?: string;
  colorStart?: string;
  colorEnd?: string;
  reverse?: boolean;
  intensity?: number;
  effect?: 'soft' | 'sharp' | 'overlay';
  speed?: 'fast' | 'normal' | 'smooth';
  optimized?: boolean;
}

const ScrollGradient = ({ 
  className = '', 
  colorStart = 'rgba(99, 102, 241, 0.2)', // indigo
  colorEnd = 'rgba(139, 92, 246, 0.3)',   // viola
  reverse = false,
  intensity = 1,
  effect = 'sharp',
  speed = 'smooth',
  optimized = true
}: ScrollGradientProps) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);
  
  useEffect(() => {
    if (!gradientRef.current) return;
    
    // Apply CSS classes
    const element = gradientRef.current;
    element.classList.add('scroll-gradient');
    
    // Apply direction class
    if (reverse) {
      element.classList.add('scroll-gradient-reverse');
    } else {
      element.classList.add('scroll-gradient-default');
    }
    
    // Apply intensity class
    if (intensity <= 0.7) {
      element.classList.add('scroll-gradient-light');
    } else if (intensity >= 1.3) {
      element.classList.add('scroll-gradient-intense');
    } else {
      element.classList.add('scroll-gradient-normal');
    }
    
    // Apply speed class
    if (speed === 'fast') {
      element.classList.add('scroll-gradient-fast');
    } else if (speed === 'smooth') {
      element.classList.add('scroll-gradient-smooth');
    }
    
    // Apply effect class
    if (effect === 'soft') {
      element.classList.add('scroll-gradient-soft');
    } else if (effect === 'overlay') {
      element.classList.add('scroll-gradient-overlay');
    }
    
    // Apply optimization class
    if (optimized) {
      element.classList.add('scroll-gradient-optimized');
    }
    
    // Set initial colors
    element.style.setProperty('--gradient-start-color', colorStart);
    element.style.setProperty('--gradient-end-color', colorEnd);
    
    let lastScrollY = 0;
    
    const handleScroll = () => {
      if (rafId.current) return;
      
      rafId.current = requestAnimationFrame(() => {
        if (!element) return;
        
        const scrollY = window.scrollY;
        
        // Skip if scroll position hasn't changed significantly
        if (Math.abs(scrollY - lastScrollY) < 5) {
          rafId.current = null;
          return;
        }
        
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.min(scrollY / (maxScroll * 0.6), 1);
        
        // Calculate opacity changes based on scroll
        const startOpacity = reverse 
          ? 0.1 + scrollPercentage * 0.3 * intensity 
          : 0.4 - scrollPercentage * 0.2 * intensity;
        const endOpacity = reverse 
          ? 0.4 - scrollPercentage * 0.2 * intensity 
          : 0.1 + scrollPercentage * 0.3 * intensity;
        
        // Extract RGB values from colors
        const startMatches = colorStart.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        const endMatches = colorEnd.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        
        if (startMatches && endMatches) {
          const startR = startMatches[1], startG = startMatches[2], startB = startMatches[3];
          const endR = endMatches[1], endG = endMatches[2], endB = endMatches[3];
          
          const newStartColor = `rgba(${startR}, ${startG}, ${startB}, ${startOpacity})`;
          const newEndColor = `rgba(${endR}, ${endG}, ${endB}, ${endOpacity})`;
          
          element.style.setProperty('--gradient-start-color', newStartColor);
          element.style.setProperty('--gradient-end-color', newEndColor);
          
          // Calculate rotation and scale based on scroll
          const rotationDegree = reverse ? -10 + scrollPercentage * 20 : 10 - scrollPercentage * 20;
          const scale = 1 + scrollPercentage * 0.1;
          element.style.transform = `rotate(${rotationDegree}deg) scale(${scale})`;
        }
        
        lastScrollY = scrollY;
        rafId.current = null;
      });
    };
    
    // Add event listener with passive option
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      // Clean up classes
      element.classList.remove(
        'scroll-gradient',
        'scroll-gradient-default',
        'scroll-gradient-reverse',
        'scroll-gradient-light',
        'scroll-gradient-normal',
        'scroll-gradient-intense',
        'scroll-gradient-fast',
        'scroll-gradient-smooth',
        'scroll-gradient-soft',
        'scroll-gradient-sharp',
        'scroll-gradient-overlay',
        'scroll-gradient-optimized'
      );
    };
  }, [colorStart, colorEnd, reverse, intensity, effect, speed, optimized]);
  
  return <div ref={gradientRef} className={className} />;
};

export default ScrollGradient;