import React from "react";
import { IconCloseXl } from "@/assets/icons/close-xl";
import { IconLogo } from "@/assets/icons/logo";
import { COLORS } from "@/constants/colors";
import { Divider, Drawer, Flex, Grid, Text } from "@mantine/core";
import Link from "next/link";
import { List, ListItem } from "./style";
import { useRouter } from "next/router";
import { CONTACTS, NAV_LINKS } from "./constants";

interface DrawerProps {
  opened: boolean;
  close: () => void;
}

export const NavbarDrawer = ({ opened, close }: DrawerProps) => {
  const { pathname } = useRouter();

  return (
    <Drawer
      size="xl"
      title=""
      position="top"
      opened={opened}
      onClose={close}
      transitionProps={{
        transition: "scale-y",
        duration: 250,
        timingFunction: "linear",
      }}
      withCloseButton={false}
      styles={{
        header: {
          backgroundColor: COLORS.MAIN_COLOR,
        },
        content: {
          backgroundColor: COLORS.MAIN_COLOR,
        },
      }}
    >
      <Flex w="100%" justify="space-between" align="center" py="20px" px="35px">
        <IconLogo fill="#fff" />
        <div className="burger" onClick={close}>
          <IconCloseXl />
        </div>
      </Flex>
      <Grid px={35} py={50}>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <List>
            <Text mb="40px">/ Menu</Text>
            {NAV_LINKS.map((item) => {
              const isActive = item.links?.includes(pathname);
              return (
                <ListItem key={item.id}>
                  <Link
                    onClick={close}
                    href={item.link}
                    className={isActive ? "active" : ""}
                  >
                    {item.title}
                  </Link>
                </ListItem>
              );
            })}
          </List>
        </Grid.Col>
        <Grid.Col span={{ base: 12, lg: 6 }}>
          <Grid gutter={25}>
            {CONTACTS.map((contact) => {
              return (
                <Grid.Col key={contact.id} span={{ base: 12, lg: 6 }}>
                  <List>
                    <Text mb="33px">{contact.header_name}</Text>
                    <ListItem className="contact">
                      <Link href={`mailto:${contact.email}`}>
                        {contact.email}
                      </Link>
                    </ListItem>
                    <ListItem className="contact">
                      <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
                    </ListItem>
                    <ListItem className="contact">
                      <Link href="">{contact.location}</Link>
                    </ListItem>
                  </List>
                </Grid.Col>
              );
            })}
          </Grid>
          <Divider my={40} />
        </Grid.Col>
      </Grid>
    </Drawer>
  );
};
