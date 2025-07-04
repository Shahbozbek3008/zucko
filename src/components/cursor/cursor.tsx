import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // Track mouse position
  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = window.requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "32px", // Bigger size on hover
          height: "32px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          pointerEvents: "none", // Ensures it doesn't block interactions
          zIndex: 9999,
        }}
        animate={{
          x: mousePosition.x - 33, // Offset to center the cursor
          y: mousePosition.y + 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000, // Adjust spring stiffness for more/less delay
          damping: 100, // Smooth out the motion
        }}
      />
    </AnimatePresence>
  );
};
