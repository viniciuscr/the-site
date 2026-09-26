import {
  Title,
  SimpleGrid,
  Text,
  ThemeIcon,
  Grid,
  GridCol,
  Button,
} from "@mantine/core";
import classes from "./Features.module.css";
import { Feature } from "./types";
import { Braces, BrainCircuit, Users, Server } from "lucide-react";
import PrintPDFButton from "./PrintPDFButton";

export async function FeaturesTitle() {
  const features: Feature[] = await fetch(
    process.env.API_URL + "/features"
  ).then((res) => res.json());

  const textToIcon = (text: string) =>
  ({
    braces: <Braces />,
    brainCircuit: <BrainCircuit />,
    users: <Users />,
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
          <Text fz="md" fw={600} c="dimmed" mt={4}>
            AI Engineer · Engineering Lead · Technical Lead · 18+ Years in Software Engineering
          </Text>
          <Text fz="sm" c="blue" mt={4} mb="sm">
            📍 Rotterdam, Netherlands · Open to Relocation to Japan
          </Text>
          <Text ta="justify">
            AI Engineer with over 18 years in software engineering, focused on
            building production AI systems and scalable software architectures.
            I lead engineering for one group within a larger two-group team,
            work across both groups, and contribute to architecture, technical
            reviews, hiring, and mentoring. Most recently, I helped deliver a
            production system that analyzes mortgage documents using an
            in-house OCR solution and LLM-powered workflows.
          </Text>

          <PrintPDFButton />
        </GridCol>
        <GridCol span={{ base: 12, md: 6 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </GridCol>
      </Grid>
    </div >
  );
}
