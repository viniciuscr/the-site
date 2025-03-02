import { Pill, PillGroup } from "@mantine/core";
import { JSX } from "react";
import classes from "./skilltags.module.css";
/**
 * Renders a group of pill tags for skills.
 *
 * @param {Array<string>} skills - The skills to render as pill tags.
 * @returns {JSX.Element} - The rendered group of pill tags.
 */
const SkillTags = ({ skills }: { skills: string[] }): JSX.Element => (
  <PillGroup >
    {skills.map(
      (line: string): JSX.Element => (
        <Pill className={classes.mantinePillRoot} fz="sm" fw={600} key={line}>
          {line}
        </Pill>
      )
    )}
  </PillGroup>
);

export default SkillTags;
