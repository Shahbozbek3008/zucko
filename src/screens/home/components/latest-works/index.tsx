import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Container,
  BackgroundWrapper,
  MotionBackground,
  Overlay,
  Content,
  Word,
} from "./style";

import Podium from "@/assets/images/works/podium.png";
import VisionPrime from "@/assets/images/works/vision-prime.avif";
import WaveCareApp from "@/assets/images/works/wave-care-app.png";
import Fractal from "@/assets/images/works/fractal.avif";

const backgroundImages = [
  Podium.src,
  VisionPrime.src,
  WaveCareApp.src,
  Fractal.src,
];

const words = ["PODIUM AW23", "VISION PRIME", "WAVE CAR APP", "FRACTAL"];

export const LatestWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container>
      <BackgroundWrapper>
        {backgroundImages.map((src, i) => (
          <AnimatePresence key={i}>
            {hoveredIndex === i && (
              <MotionBackground
                key={i}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{ backgroundImage: `url(${src})` }}
              />
            )}
          </AnimatePresence>
        ))}
      </BackgroundWrapper>

      <Overlay />

      {/* Text */}
      <Content>
        {words.map((word, i) => (
          <Word
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {word}
          </Word>
        ))}
      </Content>
    </Container>
  );
};
