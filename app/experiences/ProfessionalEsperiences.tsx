import ProfessionalExperienceEntry from "./ProfessionalExperienceEntry";
import { experiences } from "./data";

export function ProfessionalExperience() {
  return experiences.map((experience) => (
    <ProfessionalExperienceEntry key={experience.id} {...experience} />
  ));
}
