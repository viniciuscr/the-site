import ProfessionalExperienceEntry from "./ProfessionalExperienceEntry";
import { Experience } from "./types";

export async function ProfessionalExperience() {
  const experience: Experience[] = await (
    await fetch(process.env.API_URL + "/experiences")
  ).json();

  return experience.map((experience) => (
    <ProfessionalExperienceEntry key={experience.id} {...experience} />
  ));
}
