"use client";

import { useRef, useState, useEffect } from 'react';

const FadeInSection = ({ children }) => {
  const domRef = useRef();
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If 30% or more of the element is visible and it hasn't been set visible before...
          if (entry.intersectionRatio >= 0.3 && !hasBeenVisible) {
            setHasBeenVisible(true);
            setOpacity(1);
          } else if (!hasBeenVisible) {
            // Gradually update opacity until the threshold is met
            setOpacity(entry.intersectionRatio);
          }
        });
      },
      {
        threshold: thresholds,
        // A slight negative bottom margin delays the fade until more of the section is in view
        rootMargin: "0px 0px -20% 0px",
      }
    );
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [hasBeenVisible]);

  return (
    <div
      ref={domRef}
      className="fade-in-section"
      style={{
        opacity: hasBeenVisible ? 1 : opacity,
        transform: hasBeenVisible ? "none" : `translateY(${(1 - opacity) * 20}px)`,
        transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;