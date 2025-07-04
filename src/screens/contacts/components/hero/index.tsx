import React from "react";
import { Flex, Stack, Text, Title } from "@mantine/core";
import { BreadText } from "@/styles/global";
import { Content } from "./style";

export const Hero = () => {
  return (
    <Stack gap="50px">
      <BreadText>/ Contacts</BreadText>
      <Content>
        <Title>Get in Touch</Title>
        <Flex w="100%" justify="flex-end">
          <Text>
            <span>With our forte in creative direction,</span> photography, film
            and art direction, your vision becomes an adventure we embark on as
            Zucko to bring to life. Just like finding the perfect pair of jeans,
            no creative solution is one-size-fits-all and we’re all ears.
          </Text>
        </Flex>
      </Content>
    </Stack>
  );
};
