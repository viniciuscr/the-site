import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  rem,
  GridCol,
} from "@mantine/core";
import {
  IconStack3,
  IconBrain,
  IconLayout,
  IconBrandTypescript,
} from "@tabler/icons-react";
import classes from "./Features.module.css";

const features = [
  {
    icon: IconLayout,
    title: "Focus on UX",
    description:
      "Proficient in front-end development technologies, usability principles, and design aesthetics. Committed to delivering high-quality code and exceptional user experiences.",
  },
  {
    icon: IconBrandTypescript,
    title: "Full-fledged TypeScript",
    description:
      "Proficient in building robust and scalable web applications using TypeScript ecosystem.",
  },
  {
    icon: IconBrain,
    title: "A developer mindset",
    description:
      "It's not just about writing code, but bringing a creative spark to the table, envisioning new possibilities and building them into reality.",
  },
  {
    icon: IconStack3,
    title: "Backend Backed",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
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
