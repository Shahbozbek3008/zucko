import { Grid } from "@mantine/core";
import { DescriptionText, LeftColumn } from "./style";
import { BreadText } from "@/styles/global";
import { ImageHoverPlay } from "@/components/video";

export const Hero = () => {
  return (
    <Grid gutter="lg" style={{ width: "100%", marginBottom: 100 }}>
      <Grid.Col span={{ base: 12, md: 6 }}>
        <LeftColumn>
          <BreadText>/ About</BreadText>
          <DescriptionText order={2}>
            <span>We’re a brand and digital studio based in</span>
            <span>Miami, USA, offering complete solutions from</span>
            <span>concept to execution, to build, transform</span>
            <span>and leverage your business. We assist and</span>
            <span>educate our client in making the best use of</span>
            <span>the solutions we build with them.</span>
          </DescriptionText>
        </LeftColumn>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 6 }}>
        {/* <RightColumn> */}
        <ImageHoverPlay />
        {/* </RightColumn> */}
      </Grid.Col>
    </Grid>
  );
};
