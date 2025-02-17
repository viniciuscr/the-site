import { Feature } from "./types";

export async function GET(): Promise<Response> {
  const features: Feature[] = [
    {
      icon: "proportions",
      title: "Focus on UX",
      description:
        "Proficient in front-end development technologies, usability principles, and design aesthetics. Committed to delivering high-quality code and exceptional user experiences.",
    },
    {
      icon: "braces",
      title: "Full-fledged TypeScript",
      description:
        "Proficient in building robust and scalable web applications using TypeScript ecosystem.",
    },
    {
      icon: "brainCircuit",
      title: "A developer mindset",
      description:
        "It's not just about writing code, but bringing a creative spark to the table, envisioning new possibilities and building them into reality.",
    },
    {
      icon: "server",
      title: "Backend Backed",
      description:
        "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
    },
  ];

  return Response.json(features);
}
