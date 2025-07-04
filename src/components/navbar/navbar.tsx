import React from "react";
import { Header } from "./style";
import { Flex } from "@mantine/core";
import { IconLogo } from "@/assets/icons/logo";
import { IconBurger } from "@/assets/icons/burger";
import { useDisclosure } from "@mantine/hooks";
import { NavbarDrawer } from "./drawer/drawer";
import Link from "next/link";

export const Navbar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Header>
      <Flex w="100%" justify="space-between" align="center">
        <Link href="/">
          <IconLogo />
        </Link>
        <div onClick={open} className="burger">
          <IconBurger />
        </div>
      </Flex>
      <NavbarDrawer opened={opened} close={close} />
    </Header>
  );
};
