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
  Affix,
  Text,
  Flex,
} from "@mantine/core";
import { FeaturesTitle } from "./features/Features";

import ColorSwitch from "@/components/ColorSwitch/ColorSwitch";
import classes from "./page.module.css";
import { ProfessionalExperience } from "./experiences/ProfessionalEsperiences";

export default function HomePage() {
  return (
    <AppShell className={classes.shell} padding="md">
      <AppShellMain>
        <Affix
          position={{ bottom: 4, right: 4 }}
          className="mantine-ColorSwitch-root"
        >
          <ColorSwitch />
        </Affix>
        <Box right={1} bottom={1} pos="fixed" display="flex"></Box>
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
                <ProfessionalExperience />
                <TimelineItem display="none"></TimelineItem>
              </Timeline>
            </Paper>
          </GridCol>
          <GridCol span={{ base: 12, md: 6, lg: 6 }}>
            <Grid m={"0 auto"} gutter="md">
              <GridCol>
                <Paper shadow="sm" radius="md" p="xl">
                  <Title order={2}>Education</Title>
                  Graduated in{" "}
                  <Text fs="italic" span>
                    Internet Systems Development
                  </Text>{" "}
                  at{" "}
                  <Text fs="italic" span>
                    Instituto Federal Sul Rio-Grandense
                  </Text>
                  <Title order={3}>Publications</Title>
                  <List>
                    <ListItem>
                      Analysis of opportunistic grid middleware in corporate and
                      educational environments.
                    </ListItem>
                    <ListItem>
                      FGIBD: A Generic Framework for Database Integration
                      focused on Agriculture Data.
                    </ListItem>
                    <ListItem>
                      Parallelisation and Execution of the CROPSIM Mathematical
                      Model for Simulation of Wheat Culture in an Opportunistic
                      Grid.
                    </ListItem>
                  </List>
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
                      <Flex gap="xs">
                        <Anchor
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="LinkedIn"
                          href="https://www.linkedin.com/in/viniciuscreck/"
                        >
                          LinkedIn
                        </Anchor>
                        <Text c="dimmed">
                          https://www.linkedin.com/in/viniciuscreck/
                        </Text>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex gap="xs">
                        <Anchor
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="GitHub"
                          href="https://github.com/viniciuscr"
                        >
                          GitHub
                        </Anchor>
                        <Text c="dimmed">https://github.com/viniciuscr</Text>
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex gap="xs">
                        <Anchor
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="HackerRank"
                          href="https://www.hackerrank.com/profile/viniciuscr"
                        >
                          HackerHank
                        </Anchor>{" "}
                        <Text c="dimmed">
                          https://www.hackerrank.com/profile/viniciuscr
                        </Text>
                      </Flex>
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
export const dynamic = 'force-dynamic'