import React from "react";
import { COLORS } from "@/constants/colors";
import { BreadText } from "@/styles/global";
import { Button, Grid, Stack, Title } from "@mantine/core";
import { Wrapper } from "./style";
import { Input } from "@/components/inputs/input";
import { useForm } from "react-hook-form";
import { IconArrowUpRight } from "@/assets/icons/arrow-up-right";
import { CustomTextArea } from "@/components/inputs/input-textarea";

export const FeedbackForm = () => {
  const form = useForm();

  return (
    <Wrapper>
      <Stack bg={COLORS.MAIN_COLOR} p={{ base: "60px 20px", lg: "100px 50px" }}>
        <Grid>
          <Grid.Col span={{ base: 12, lg: 6, md: 6 }}>
            <BreadText style={{ color: COLORS.MAIN_WHITE }}>
              / Feedback Form
            </BreadText>
            <Title mt={{ base: "20px", lg: "40px" }}>
              By contacting us you can make a direct appointment with our staff
              in Miami or Kuala Lumpur to visit to our Office
            </Title>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 6, md: 6 }}>
            <Grid gutter={20}>
              <Grid.Col span={{ base: 12, lg: 6, md: 6 }}>
                <Input
                  name="full_name"
                  control={form.control}
                  placeholder="Full name *"
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6, md: 6 }}>
                <Input
                  name="phone"
                  control={form.control}
                  placeholder="Phone number *"
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 12, md: 12 }}>
                <Input
                  name="email"
                  control={form.control}
                  placeholder="Your E-mail *"
                  type="email"
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 12, md: 12 }}>
                <CustomTextArea
                  control={form.control}
                  name="comment"
                  placeholder="Your request"
                  minRows={4}
                  autosize
                />
              </Grid.Col>
            </Grid>
            <Button
              h={60}
              w={185}
              mt={20}
              radius={30}
              rightSection={<IconArrowUpRight />}
            >
              Submit
            </Button>
          </Grid.Col>
        </Grid>
      </Stack>
    </Wrapper>
  );
};
