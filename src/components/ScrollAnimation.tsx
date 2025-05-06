// src/components/ScrollAnimation.tsx
import { useRef, useEffect, useState, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'slideUp-rotate' | 'scale-rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  optimized?: boolean;
  easing?: 'ease-out' | 'ease-in-out' | 'cubic-bezier';
}

const ScrollAnimation = ({ 
  children, 
  animation = 'fadeIn', 
  delay = 0, 
  duration = 0.5,
  threshold = 0.1,
  className = '',
  optimized = true,
  easing = 'cubic-bezier'
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Apply CSS classes
    element.classList.add('scroll-animation', `scroll-${animation}`);
    
    // Apply duration class
    if (duration === 0.3) {
      element.classList.add('scroll-animation-fast');
    } else if (duration === 0.5) {
      element.classList.add('scroll-animation-normal');
    } else if (duration === 0.8) {
      element.classList.add('scroll-animation-slow');
    } else {
      // Custom duration
      element.style.transitionDuration = `${duration}s`;
    }
    
    // Apply delay class
    const delayMs = delay * 1000;
    if (delayMs === 100) {
      element.classList.add('scroll-delay-100');
    } else if (delayMs === 200) {
      element.classList.add('scroll-delay-200');
    } else if (delayMs === 300) {
      element.classList.add('scroll-delay-300');
    } else if (delayMs === 500) {
      element.classList.add('scroll-delay-500');
    } else if (delayMs === 700) {
      element.classList.add('scroll-delay-700');
    } else if (delayMs === 1000) {
      element.classList.add('scroll-delay-1000');
    } else if (delayMs > 0) {
      // Custom delay
      element.style.transitionDelay = `${delay}s`;
    }
    
    // Apply easing class
    if (easing === 'ease-out') {
      element.classList.add('scroll-animation-ease-out');
    } else if (easing === 'ease-in-out') {
      element.classList.add('scroll-animation-ease-in-out');
    } else if (easing === 'cubic-bezier') {
      element.classList.add('scroll-animation-cubic-bezier');
    }
    
    // Apply optimization class
    if (optimized) {
      element.classList.add('scroll-optimized');
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
        
        // Clean up classes
        element.classList.remove(
          'scroll-animation',
          `scroll-${animation}`,
          'scroll-animation-fast',
          'scroll-animation-normal',
          'scroll-animation-slow',
          'scroll-delay-100',
          'scroll-delay-200',
          'scroll-delay-300',
          'scroll-delay-500',
          'scroll-delay-700',
          'scroll-delay-1000',
          'scroll-animation-ease-out',
          'scroll-animation-ease-in-out',
          'scroll-animation-cubic-bezier',
          'scroll-optimized'
        );
      }
    };
  }, [threshold, animation, delay, duration, easing, optimized]);
  
  useEffect(() => {
    if (isVisible && ref.current) {
      ref.current.classList.add('visible');
    }
  }, [isVisible]);
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;