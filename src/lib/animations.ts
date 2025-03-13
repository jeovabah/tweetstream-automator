
import { useEffect, useRef, useState } from 'react';

// Intersection observer hook for animations
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
      ...options
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isIntersecting };
}

// Animation class for elements
export function useAnimatedElement(delay = 0) {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isIntersecting, hasAnimated]);

  const animationClass = hasAnimated 
    ? `animate-slide-up opacity-100 animate-delay-${delay}` 
    : 'opacity-0 translate-y-4';

  return { ref, animationClass };
}

// Staggered animation for multiple children
export function useStaggeredAnimation(count: number, baseDelay = 0) {
  return Array.from({ length: count }).map((_, i) => {
    const delay = baseDelay + (i * 100);
    const delayClass = `animate-delay-${delay}`;
    return delayClass;
  });
}
