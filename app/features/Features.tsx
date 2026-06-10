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
import { Braces, BrainCircuit, Proportions, Server } from "lucide-react";
import PrintPDFButton from "./PrintPDFButton";

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
          <Text fz="md" fw={600} c="dimmed" mt={4}>
            Staff Engineer · Technical Lead · Software Architect · 18+ YOE
          </Text>
          <Text fz="sm" c="blue" mt={4} mb="sm">
            📍 Tokyo, Japan · Open to Relocation · HSP Visa Eligible
          </Text>
          <Text ta="justify">
            With over 18 years of experience in software engineering, I
            specialize in designing scalable architectures, leading
            multicultural teams, and bridging the worlds of engineering and
            data science. Currently leading a mixed team of developers and data
            scientists on a Python-based AI workflow project, using LangGraph
            to build complex multi-step agentic pipelines. Currently focused on
            relocation opportunities in Tokyo, Japan (eligible for Highly
            Skilled Professional Visa due to career history).
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