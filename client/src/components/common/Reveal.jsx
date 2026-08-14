import React, { useState, useEffect, useRef } from 'react';

export default function Reveal({ children, delay = 0, className = '', variant = 'fade-up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getVariantStyle = () => {
    if (!isVisible) {
      switch (variant) {
        case 'scale-up':
          return 'opacity-0 scale-90 blur-md translate-y-8';
        case 'slide-left':
          return 'opacity-0 translate-x-12 blur-sm';
        case 'gold-line':
          return 'max-w-0 opacity-0';
        default:
          return 'opacity-0 translate-y-10 blur-sm';
      }
    }
    switch (variant) {
      case 'gold-line':
        return 'max-w-full opacity-100';
      default:
        return 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-none';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${getVariantStyle()} ${className}`}
    >
      {children}
    </div>
  );
}
