import { SimpleGrid, Text, TimelineItem, Title } from "@mantine/core";
import SkillsTags from "./SkillsTags";
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
}) => (
  <TimelineItem
    lineVariant={noDeveloper ? "dashed" : "solid"}
    title={
      <>
        <Title c="greenblue" order={4}>
          {position}
        </Title>
        <Title order={5}>{company}</Title>
      </>
    }
  >
    <SimpleGrid cols={1} spacing="xs">
      <SkillsTags skills={skills} />

      <Text size="sm">{description}</Text>
      <Text c="dimmed" size="xs">
        {startDate} - {endDate ?? "current"}
      </Text>
    </SimpleGrid>
  </TimelineItem>
);

export default ProfessionalExperienceEntry;
