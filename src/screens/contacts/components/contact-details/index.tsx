import React from "react";
import { Flex, Stack } from "@mantine/core";
import { Left, Right } from "./style";
import { BreadText } from "@/styles/global";
import { COLORS } from "@/constants/colors";
import { CONTACT_DETAILS } from "./constants";

export const ContactDetails = () => {
  return (
    <Flex
      p={{ base: "60px 20px", lg: "100px 50px" }}
      align="flex-start"
      bg={COLORS.MAIN_WHITE}
      justify="space-between"
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "40px" }}
    >
      <Left>
        <BreadText>/ Contact details</BreadText>
      </Left>
      <Right>
        {CONTACT_DETAILS.map((contact) => {
          return (
            <Stack key={contact.id} className="stack">
              <li>{contact.location}</li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </Stack>
          );
        })}
      </Right>
    </Flex>
  );
};
