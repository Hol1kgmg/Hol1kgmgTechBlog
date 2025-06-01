import React, { useEffect, useState } from 'react';

interface FuzzyTextProps {
  text: string;
  className?: string;
  duration?: number;
  iterations?: number;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';

export const FuzzyText: React.FC<FuzzyTextProps> = ({
  text,
  className = '',
  duration = 2000,
  iterations = 10
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    let currentIteration = 0;
    const interval = duration / iterations;

    const timer = setInterval(() => {
      if (currentIteration >= iterations) {
        setDisplayText(text);
        setIsAnimating(false);
        clearInterval(timer);
        return;
      }

      const progress = currentIteration / iterations;
      const newText = text
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          
          const shouldReveal = index / text.length < progress;
          if (shouldReveal) {
            return char;
          }
          
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join('');

      setDisplayText(newText);
      currentIteration++;
    }, interval);

    return () => clearInterval(timer);
  }, [text, duration, iterations, isAnimating]);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  return (
    <span 
      className={`font-mono ${className}`}
      onMouseEnter={handleMouseEnter}
      style={{ letterSpacing: '0.05em' }}
    >
      {displayText}
    </span>
  );
};