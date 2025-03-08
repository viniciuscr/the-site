import { List, ListItem, SimpleGrid, Text, TimelineItem, Title } from "@mantine/core";
import SkillTags from "./SkillTags";
import { Experience } from "./types";


/**
 * Renders a professional experience entry for a timeline.
 */
const ProfessionalExperienceEntry: React.FC<Experience> = ({
  position,
  company,
  description,
  skills,
  startDate,
  endDate,
  noDeveloper,
  accomplishments
}) => (
  <TimelineItem
    lineVariant={noDeveloper ? "dashed" : "solid"}
    title={
      <>
        <Title c="greenblue" order={3}>
          {position}
        </Title>
        <Title td="underline" order={4}>{company}</Title>
      </>
    }
  >
    <SimpleGrid cols={1} spacing="xs">

      <Text ta="justify" >{description}</Text>
      <List>
        {accomplishments?.map((accomplishment) => (
          <ListItem key={accomplishment.topic}>
            <Text fw="bold" >{accomplishment.topic}</Text>
            <Text>{accomplishment.description}</Text>
          </ListItem>
        ))}
      </List>
      <SkillTags skills={skills} />
      <Text c="dimmed" size="sm">
        {startDate} - {endDate ?? "current"}
      </Text>
    </SimpleGrid>
  </TimelineItem>
);

export default ProfessionalExperienceEntry;
