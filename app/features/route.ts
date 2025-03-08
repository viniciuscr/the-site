import { Feature } from "./types";

export async function GET(): Promise<Response> {
  const features: Feature[] = [
    {
      icon: "proportions",
      title: "Focus on UX",
      description:
        "Proficient in front-end development technologies, usability principles, and design aesthetics. Committed to delivering exceptional user experiences.",
    },
    {
      icon: "braces",
      title: "Full-fledged TypeScript",
      description:
        "From the stack to the tooling, a deep understanding of TypeScript ecosystem and its capabilities.",
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
        "Experienced in building robust and scalable services using microservices architecture, serverless functions, and AWS services.",
    },
  ];

  return Response.json(features);
}
