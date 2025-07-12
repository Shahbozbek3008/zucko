import { COLORS } from "@/constants/colors";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, type ButtonProps } from "@mantine/core";

export const HeroSection = styled("section")`
  padding-bottom: 100px;
  p {
    color: ${COLORS.MAIN_COLOR};
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 150% */
    text-transform: uppercase;
  }
  h1 {
    color: ${COLORS.MAIN_COLOR};
    font-family: "Big Shoulders Display", sans-serif !important;
    font-size: 150px !important;
    font-style: normal;
    font-weight: 800;
    line-height: 150px;
    letter-spacing: -1.5px;
    text-transform: uppercase;
  }
  .hero-text {
    color: ${COLORS.MAIN_COLOR};
    font-family: "Almarai", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 125% */
    text-transform: uppercase;
    text-indent: 55px;
  }

  button {
    border: 1px solid transparent;
    color: ${COLORS.MAIN_COLOR} !important;
    text-align: right;
    font-family: "Almarai", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: uppercase;
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 63px !important;
      line-height: 1;
      white-space: nowrap;
    }
    .hero-text {
      font-size: 18px;
      line-height: 1.3;
    }
    p {
      font-size: 16px;
    }
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;

export const PlayButton = styled(Button)<ButtonProps>`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulse} 3s ease-in-out infinite;
  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
`;
