'use client'

import useSWR from "swr";
import ProfessionalExperienceEntry from "./ProfessionalExperienceEntry";
import { Experience } from "./types";
import { Loader } from "@mantine/core";

export function ProfessionalExperience() {

  const { data: experience = [], isLoading } = useSWR<Experience[]>(
    "/experiences", (url: string) => fetch(url).then(res => res.json())
  );

  if (isLoading) {
    return (
      <Loader color="blue" />
    )
  }

  return experience.map((experience) => (
    <ProfessionalExperienceEntry key={experience.id} {...experience} />
  ));
}
