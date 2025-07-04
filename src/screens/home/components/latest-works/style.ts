import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const MotionBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  ); */
  pointer-events: none;
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Word = styled.div`
  font-size: clamp(2rem, 7vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(to right, white, #ccc);
  -webkit-background-clip: text;
  background-clip: text;
  opacity: 0.8;
  margin: 1vh 0;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 9vw, 3rem);
  }
`;
