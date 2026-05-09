import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './QuoteBox.css';

const QUOTES = [
  "Discipline beats motivation.",
  "Small progress compounds.",
  "Future you is watching.",
  "Deep work is a superpower.",
  "Focus on the process, not just the result.",
  "One sprint at a time."
];

const QuoteBox = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="quote-box glass">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="quote-text"
        >
          "{QUOTES[index]}"
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default QuoteBox;
