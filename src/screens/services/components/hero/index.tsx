import React from "react";
import { Flex, Stack, Text, Title } from "@mantine/core";
import { BreadText } from "@/styles/global";
import { Content } from "./style";

export const Hero = () => {
  return (
    <Stack gap="50px">
      <BreadText>/ Services</BreadText>
      <Content>
        <Title>We only make digital products and services</Title>
        <Flex w="100%" justify={{ base: "center", lg: "end" }}>
          <Text>
            <span>You won’t find any beasts of burden</span> at Zucko. What you
            will find is a wild and unstoppable force dedicated to strategic
            thinking, great design and technical finesse.
          </Text>
        </Flex>
      </Content>
    </Stack>
  );
};
