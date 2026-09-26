import ProfessionalExperienceEntry from "./ProfessionalExperienceEntry";
import { Experience } from "./types";
import { Stack, Text } from "@mantine/core";

async function getExperiences(): Promise<Experience[]> {
  const experience: Experience[] = await (
    await fetch(process.env.API_URL + "/experiences")
  ).json();

  return experience;
}

export async function ProfessionalExperience() {
  const experiences = await getExperiences();

  return experiences
    .filter((experience) => !experience.noDeveloper)
    .map((experience) => (
    <ProfessionalExperienceEntry key={experience.id} {...experience} />
  ));
}

export async function EarlierExperience() {
  const experiences = await getExperiences();

  return (
    <Stack gap={2}>
      {experiences
        .filter((experience) => experience.noDeveloper)
        .map((experience) => (
          <div key={experience.id}>
            <Text fw={600} size="sm">
              {experience.position} · {experience.company}
            </Text>
            <Text c="dimmed" size="xs">
              {experience.startDate} — {experience.endDate}
            </Text>
            {experience.description && (
              <Text size="sm">{experience.description}</Text>
            )}
          </div>
        ))}
    </Stack>
  );
}
