/* eslint-disable react/display-name */
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { memo } from "react";
import { COLORS } from "@/constants/colors";

interface CharacterProps {
  fontSize?: string;
  fontWeight?: number;
  color?: string;
  textTransform?: string;
  lineHeight?: string;
  fontFamily?: string;
}

interface BlurInUpHTMLProps {
  html: string;
  delay?: number;
  duration?: number;
  className?: string;
  wrapperStyle?: React.CSSProperties;
  characterClassName?: string;
  characterStyle?: Partial<CharacterProps>;
}

const CharacterWrapper = styled(motion.span)<CharacterProps>`
  display: inline-block;
  color: ${(props) => props.color || COLORS.MAIN_COLOR};
  font-family: ${(props) => props.fontFamily || "'Almarai', sans-serif"};
  font-size: ${(props) => props.fontSize || "24px"};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: ${(props) => props.lineHeight || "30px"};
  text-transform: ${(props) => props.textTransform || "uppercase"};
`;

export const BlurInUpHTML = memo(
  ({
    html,
    delay = 0,
    duration = 0.5,
    className,
    wrapperStyle,
    characterStyle,
    characterClassName,
  }: BlurInUpHTMLProps) => {
    return (
      <motion.div
        initial="hidden"
        animate="show"
        className={className}
        style={{ display: "inline-block", ...wrapperStyle }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.02,
              delayChildren: delay,
            },
          },
        }}
      >
        <CharacterWrapper
          className={characterClassName}
          {...characterStyle}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              filter: "blur(8px)",
            },
            show: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: duration,
                ease: "easeOut",
              },
            },
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </motion.div>
    );
  }
);
