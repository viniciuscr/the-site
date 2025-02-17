import {
  Title,
  SimpleGrid,
  Text,
  ThemeIcon,
  Grid,
  GridCol,
} from "@mantine/core";
import classes from "./Features.module.css";
import { Feature } from "./types";
import { Braces, BrainCircuit, Proportions, Server } from "lucide-react";

export async function FeaturesTitle() {
  const features: Feature[] = await fetch(
    process.env.API_URL + "/features"
  ).then((res) => res.json());

  const textToIcon = (text: string) =>
  ({
    braces: <Braces />,
    brainCircuit: <BrainCircuit />,
    proportions: <Proportions />,
    server: <Server />,
  }[text]);

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        {textToIcon(feature.icon)}
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={800}>
        {feature.title}
      </Text>
      <Text fz="sm">{feature.description}</Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <GridCol span={{ base: 12, md: 6 }}>
          <Title className={classes.title} order={1}>
            Vinícius Castelani Reck
          </Title>
          <Text>
            As an accomplished Software Developer with over 10 years of
            experience, I am an expert in cutting-edge technologies such as
            Javascript, Typescript, React, and Node.js. With a proven track
            record of delivering high-quality software solutions that drive
            innovation and exceed client expectations, I have gained proficiency
            in microservices, serverless architecture, AWS services, and
            databases. I am constantly seeking opportunities to expand my
            skillset and stay ahead of industry trends.
          </Text>

          {/* 
          TODO: implement pdf version
          <Button
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            mt="xl"
          >
            Download as PDF
          </Button> */}
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </GridCol>
      </Grid>
    </div>
  );
}