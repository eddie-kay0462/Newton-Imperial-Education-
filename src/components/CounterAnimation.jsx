import React, { useState, useEffect, useRef } from 'react';

const CounterAnimation = ({ 
  targetValue, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = "text-3xl lg:text-4xl font-bold text-primary-600 mb-2",
  threshold = 0.5,
  rootMargin = '0px 0px -50px 0px'
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  // Counter animation function
  const animateCounter = (start, end, duration) => {
    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      let current = Math.floor(start + (end - start) * easeOutQuart);
      
      // Handle special formatting for monetary values
      if (suffix === 'M' && targetValue >= 1) {
        current = (start + (end - start) * easeOutQuart).toFixed(1);
      }
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Intersection Observer to trigger animation when counter is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter(0, targetValue, duration);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: rootMargin
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated, targetValue, duration, threshold, rootMargin]);

  return (
    <div ref={counterRef} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};

export default CounterAnimation; 