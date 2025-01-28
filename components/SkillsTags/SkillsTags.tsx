import { Pill } from "@mantine/core";
import { JSX } from "react";

/**
 * Renders a group of pill tags for skills.
 *
 * @param {Array<string>} skills - The skills to render as pill tags.
 * @returns {JSX.Element} - The rendered group of pill tags.
 */
const SkillsTags = ({ skills }: { skills: string[] }): JSX.Element => (
  <Pill.Group>
    {skills.map(
      (line: string, index: number): JSX.Element => (
        <Pill fw={600} key={index}>
          {line}
        </Pill>
      )
    )}
  </Pill.Group>
);

export default SkillsTags;
