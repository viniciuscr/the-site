import { SimpleGrid, Text, Timeline, Title } from "@mantine/core";
import SkillsTags from "../SkillsTags/SkillsTags";

interface ProfessionalExperienceEntryProps {
  position: string;
  company: string;
  description: string;
  skills: string[];
  startDate: string;
  endDate?: string;
}

/**
 * Renders a professional experience entry for a timeline.
 */
const ProfessionalExperienceEntry: React.FC<
  ProfessionalExperienceEntryProps
> = ({
  position,
  company,
  description,
  skills,
  startDate,
  endDate,
  ...timelineProps
}) => (
  <Timeline.Item
    {...timelineProps}
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
  </Timeline.Item>
);

export default ProfessionalExperienceEntry;
