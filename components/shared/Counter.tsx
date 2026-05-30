"use client";

import React, { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number; // ms
  suffix?: string;
  prefix?: string;
}

export default function Counter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set up an intersection observer to only trigger counting when visible in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rate = Math.min(elapsed / duration, 1);
      
      // Easing function (easeOutQuad)
      const ease = rate * (2 - rate);
      const current = Math.floor(ease * end);
      
      setCount(current);

      if (elapsed < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated, end, duration]);

  return (
    <span ref={elementRef} className="font-mono">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
