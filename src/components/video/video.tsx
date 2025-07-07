import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import IconHeroImage from "@/assets/images/hero-image.svg";
import { Text } from "@mantine/core";
import { COLORS } from "@/constants/colors";
import {
  Wrapper,
  StaticText,
  PlayButton,
  PlayButtonCenterWrapper,
  FloatingPlayButton,
} from "./style";

export const ImageHoverPlay = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorCoords, setCursorCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHovered(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!hovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={IconHeroImage}
        alt="hero-image"
        priority
        style={{ width: "100%", height: "100%" }}
      />
      <StaticText position="left">
        <Text
          fw={600}
          size="24px"
          c={COLORS.MAIN_COLOR}
          style={{ pointerEvents: "none" }}
          tt="uppercase"
        >
          Show
        </Text>
      </StaticText>
      <StaticText position="right">
        <Text
          fw={600}
          size="24px"
          c={COLORS.MAIN_COLOR}
          style={{ pointerEvents: "none" }}
          tt="uppercase"
        >
          reel
        </Text>
      </StaticText>

      <AnimatePresence>
        {!hovered && (
          <PlayButtonCenterWrapper
            key="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="circle">
              <PlayButton>▶</PlayButton>
            </div>
          </PlayButtonCenterWrapper>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hovered && (
          <FloatingPlayButton
            key="hover"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              top: cursorCoords.y,
              left: cursorCoords.x,
            }}
          >
            <PlayButton>▶</PlayButton>
          </FloatingPlayButton>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
