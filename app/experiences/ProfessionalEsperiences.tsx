'use client'

import useSWR from "swr";
import ProfessionalExperienceEntry from "./ProfessionalExperienceEntry";
import { Experience } from "./types";
import { Loader } from "@mantine/core";

export function ProfessionalExperience() {

  const { data: experience = [], isLoading } = useSWR<Experience[]>(
    process.env.NEXT_PUBLIC_API_URL + "/experiences", (url: string) => fetch(url).then(res => res.json())
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
