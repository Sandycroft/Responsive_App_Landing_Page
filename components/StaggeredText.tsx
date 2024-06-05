// components/StaggeredText.tsx
import { motion } from "framer-motion";
import React from "react";

interface StaggeredTextProps {
  text: string;
  className?: string;
}

const StaggeredText: React.FC<StaggeredTextProps> = ({ text, className }) => {
  const words = text.split(" ");

  return (
    <span className={`tracking-wide text-sm ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.5,
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="inline-block mx-[0.5rem]" // Adjust spacing between words
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default StaggeredText;
