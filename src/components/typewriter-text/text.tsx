import React from "react";
import { motion } from "framer-motion";

interface TypewriterSimpleTextProps {
  text: string;
  className?: string;
  delayPerChar?: number;
}

export const TypeWriterSimpleText: React.FC<TypewriterSimpleTextProps> = ({
  text,
  className,
  delayPerChar = 0.04,
}) => {
  return (
    <motion.div
      className={className}
      style={{ whiteSpace: "pre-wrap", display: "inline-block" }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * delayPerChar,
            duration: 0.001,
            ease: "linear",
          }}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
