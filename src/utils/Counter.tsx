import React, { useState, useEffect, useRef } from "react";

interface Props {
  targetValue: number;
}

const CountUp = ({ targetValue }: Props) => {
  const [count, setCount] = useState(0);
  const duration = 800; // Duration in milliseconds
  const increment = targetValue / duration; // Increment per millisecond
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        const startTime = Date.now();
        const timer = setInterval(() => {
          const elapsedTime = Date.now() - startTime;
          const updatedCount = Math.min(
            Math.floor(elapsedTime * increment),
            targetValue
          );
          setCount(updatedCount);

          if (elapsedTime >= duration) {
            clearInterval(timer);
          }
        }, 16);
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => observer.disconnect(); // Clean up the observer on component unmount
  }, [targetValue]);

  return <div ref={targetRef}>{count}</div>;
};

export default CountUp;
