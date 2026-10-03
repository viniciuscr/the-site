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
import { Braces, BrainCircuit, Users, Server, LayoutDashboard } from "lucide-react";
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
    layout: <LayoutDashboard />,
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
            Staff-Level Software Engineer · Technical Lead · Software Architect
          </Text>
          <Text fz="sm" c="blue" mt={4} mb="sm">
            📍 Rotterdam, Netherlands · Open to Relocation to Japan
          </Text>
          <Text ta="justify">
            Staff-level full-stack software engineer and technical leader with
            18+ years across frontend, backend, and cloud engineering. Recent
            work focuses on Python, AI and LLM workflows, document analysis,
            OCR, and AWS telemetry. At Nationale Nederlanden, I lead engineering
            work in one of two teams, contribute to the document-analysis
            workflow, implement telemetry, and participate in architecture
            decisions across both teams. My experience also includes
            TypeScript, JavaScript, Node.js, Java, C#, APIs, and databases.
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
