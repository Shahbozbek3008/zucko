import React, { useState } from "react";
import Podium from "@/assets/images/works/podium.png";
import VisionPrime from "@/assets/images/works/vision-prime.avif";
import WaveCareApp from "@/assets/images/works/wave-care-app.png";
import Fractal from "@/assets/images/works/fractal.avif";
import { Content, Section } from "./style";
import { BreadText } from "@/styles/global";
import { Title } from "@mantine/core";

const backgroundImages = [
  Podium.src,
  VisionPrime.src,
  WaveCareApp.src,
  Fractal.src,
];

const words = ["PODIUM AW23", "VISION PRIME", "WAVE CAR APP", "FRACTAL"];

export const LatestWorks = () => {
  const [bgImage, setBgImage] = useState<string>(Podium.src);

  return (
    <Section bgImage={bgImage}>
      <BreadText style={{ color: "#fff" }}>/ Latest Works</BreadText>
      <Content>
        {words.map((word, index) => (
          <Title
            key={word}
            onMouseEnter={() => setBgImage(backgroundImages[index])}
          >
            {word}
          </Title>
        ))}
      </Content>
    </Section>
  );
};
