import React from "react";
import { Flex, Stack, Text, Title } from "@mantine/core";
import { BreadText } from "@/styles/global";
import { Content } from "./style";

interface Props {
  title: string;
  description: string;
}

export const Hero = ({ title, description }: Props) => {
  return (
    <Stack gap="40px">
      <BreadText>/ works</BreadText>
      <Content>
        <Title>{title}</Title>
        <Flex w="100%" justify={{ base: "center", lg: "end" }}>
          <Text dangerouslySetInnerHTML={{ __html: description }} />
        </Flex>
      </Content>
    </Stack>
  );
};
