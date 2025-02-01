import {
  AppShell,
  Timeline,
  Paper,
  Title,
  Grid,
  GridCol,
  List,
  Anchor,
  Box,
  TimelineItem,
  ListItem,
  AppShellMain,
} from "@mantine/core";
import { FeaturesTitle } from "@/components/Features/Features";
import ProfessionalExperienceEntry from "@/components/ProfessionalExperience/ProfessionalExperienceEntry";
import ColorSwitch from "@/components/ColorSwitch/ColorSwitch";
import classes from "./page.module.css";
const experience = [
  {
    position: "Full-stack Engineer",
    company: "Nationale Nederlanden",
    description:
      "Joined a multidisciplinary agile team, as a Senior Full Stack Engineer on AWS, where my main focus was to develop and deliver a robust and reliable solution mortgage application. In a fast-paced environment, I worked closely with domain experts and stakeholders to define and deliver a high-quality software product. Headed the team developing a in house solution for Optical Character Recognition (OCR) using GPT-4.",
    skills: [
      "React",
      "Step Functions",
      "Next.js",
      "Typescript",
      "AWS Lambda",
      "Middy",
      "llama-index",
    ],
    startDate: "2022 Feb",
    endDate: "Current",
  },
  {
    position: "Front-end Engineer",
    company: "Clevertech",
    description:
      "Entrusted to add speed and quality to one of the most important ongoing project. Accountable for taking ownership over multidiciplinar tasks and been capable of rapidly engage and colaborate with the team to meet deadlines and delivery high quality software.",
    skills: [
      "React",
      "CSS-in-JS",
      "React Query",
      "GraphQL",
      "Typescript",
      "Monorepo",
    ],
    startDate: "2021 Jul",
    endDate: "2021 Nov",
  },
  {
    position: "Full-stack Engineer",
    company: "Avenue Code",
    description:
      "Working for a multi billion client helping to define and shape the new design system and fronted architecture for all projects. Also working close with Azure experts and backend developers to define the new authentication and authorization flow to be adopted on all future projects. Worked in parallel with designers to help build up a component library and actively participating on the design system process. Develop a MVP in Django, where using Graphene and Apollo Client was able to delivery a optimized CMS solution for the company's main web application. Exploring in in-depth Apollo Client and Next.js was able to significantly improve overall performance with a better cache management and smarter requests. ",
    skills: [
      "React",
      "CSS-in-JS",
      "Sass",
      "Next.js",
      "Typescript",
      "Isomorphic applications",
      "Apollo Client",
      "GraphQL",
      "Python",
      "Django",
      "Microservices",
      "RESTful Web services",
    ],
    startDate: "2019 Oct",
    endDate: "2021 Jul",
  },
  {
    position: "Team Lead",
    company: "Banrisul",
    description:
      "Started as a developer at the software factory, rapidly relocated to work on a small team in charge of defining best practices and developing support tools for internal development. Invited to collaborate on a new division responsible for digital transformation leaded by a renowned consultancy. Participating in diverse agile teams as a technical leader while working on side projects focused to improve how we build software and increase the quality of life for everyone.",
    skills: [
      "React",
      "MongoDB",
      "Webpack",
      "Software architecture",
      "C#",
      "Node.js",
      "Microservices",
      "RESTful Web services",
      "Hybrid Applications",
    ],
    startDate: "2015 Sep",
    endDate: "2019 Oct",
  },
  {
    position: "Full-stack Developer",
    company: "Hexagon Agriculture",
    description:
      "Initially worked as a Jr. Java developer, after a year was a key part of the team. Some remarkable collaborations are: introducing unit test and code coverage, setup the first continuous integrations server and refactoring the interactive map library. As a Java developer was accountable for introducing and teach new team members, design, maintaining and implement geospatial databases and optimize database queries.",
    skills: [
      "Spatial data manipulation",
      "Java/JSF/EJB/JPA",
      "RESTful Web services",
      "Jboss management",
      "Shell script",
      "Postgres / PostGIS",
    ],
    startDate: "2013 Jul",
    endDate: "2015 Aug",
  },
  {
    position: "Tech Lead",
    company: "Webcrew",
    description:
      "Design and develop online systems in PHP with CodeIgniter framework Develop and improve interfaces using CSS, Javascript and HTML Perform legacy systems integrations, migrate and database normalisation Coordinate and distribute tasks within a development team.",
    skills: [
      "Leadership",
      "Project management",
      "Remote work",
      "MySQL",
      "JQuery",
      "UI/UX concepts",
    ],
    startDate: "2011 Jul",
    endDate: "2013 Jun",
  },
  {
    position: "Web Developer",
    company: "Opportunity Web Software",
    description:
      "First professional contact with development, introduced to best coding practices and design patterns. After a short adaptation period, helped to create an internal framework to burst development using MVC pattern.",
    skills: [
      "Web development",
      "Design patterns",
      "PHP",
      "HTML/CSS",
      "Javascript",
    ],
    startDate: "2008 Aug",
    endDate: "2009 Oct",
  },
  {
    position: "Photoshop Expert",
    company: "Ferrão e Tevaldi Ltda.",
    description:
      "Started as a auxiliary designer, quickly learned and improved until got the main creative designer role. Ministraded internal courses for other designers introducing templates and guidelines in order to introduced quality standars to the final product.",
    skills: ["Photoshop"],
    startDate: "2004 Sep",
    endDate: "2007 Jun",
    lineVariant: "dashed", // this in especial was not related to software development, so I decided to use a dashed line
  },
];

export default function HomePage() {
  return (
    <AppShell className={classes.shell} padding="md">
      <AppShellMain>
        <Box right={3} bottom={3} pos={"fixed"} display={"flex"}>
          <ColorSwitch />
        </Box>
        <Box right={1} bottom={1} pos={"fixed"} display={"flex"}></Box>
        <Grid m={"0 auto"} maw={{ lg: 1700 }} gutter="md">
          <GridCol span={12}>
            <Paper shadow="sm" radius="md" p="xl">
              <FeaturesTitle />
            </Paper>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 6 }}>
            <Paper shadow="sm" radius="md" p="xl">
              <Title order={2}>Professional Experience</Title>
              <Timeline active={1} bulletSize={24} lineWidth={2}>
                {experience.map((experience, index) => (
                  <ProfessionalExperienceEntry key={index} {...experience} />
                ))}
                <TimelineItem display="none">sorvete</TimelineItem>
              </Timeline>
            </Paper>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 6 }}>
            <Grid m={"0 auto"} gutter="md">
              <GridCol>
                <Paper shadow="sm" radius="md" p="xl">
                  <Title order={2}>Education</Title>
                  Internet Systems Development Instituto Federal Sul
                  Rio-Grandense Publications Analysis of opportunistic grid
                  middleware in corporate and educational environments. FGIBD: A
                  Generic Framework for Database Integration focused on
                  Agriculture Data. Parallelisation and Execution of the CROPSIM
                  Mathematical Model for Simulation of Wheat Culture in an
                  Opportunistic Grid. Computer Science Universidade de Passo
                  Fundo
                </Paper>
              </GridCol>
              <GridCol>
                <Paper shadow="sm" radius="md" p="xl">
                  <Title order={2}>Languages</Title>
                  <List>
                    <ListItem>Portuguese - Native</ListItem>
                    <ListItem>English - Fluent</ListItem>
                    <ListItem>Japanese - Basic(Learning)</ListItem>
                  </List>
                </Paper>
              </GridCol>
              <GridCol>
                <Paper shadow="sm" radius="md" p="xl">
                  <Title order={2}>Profiles</Title>
                  <List>
                    <ListItem>
                      <Anchor
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="LinkedIn"
                        href="https://www.linkedin.com/in/viniciuscreck/"
                      >
                        LinkedIn
                      </Anchor>
                    </ListItem>
                    <ListItem>
                      <Anchor
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="GitHub"
                        href="https://github.com/viniciuscr"
                      >
                        GitHub
                      </Anchor>
                    </ListItem>
                    <ListItem>
                      <Anchor
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="HackerRank"
                        href="https://www.hackerrank.com/profile/viniciuscr"
                      >
                        HackerHank
                      </Anchor>
                    </ListItem>
                  </List>
                </Paper>
              </GridCol>
            </Grid>
          </GridCol>
        </Grid>
      </AppShellMain>
    </AppShell>
  );
}
