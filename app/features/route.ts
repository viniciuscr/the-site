import { Feature } from "./types";

export async function GET(): Promise<Response> {
  const features: Feature[] = [
    {
      icon: "proportions",
      title: "Technical Leadership",
      description:
        "15+ years leading cross-functional teams of engineers and data scientists. Experienced in defining architectural standards, mentoring engineers, and aligning technical decisions with business outcomes.",
    },
    {
      icon: "braces",
      title: "Full-Stack Architecture",
      description:
        "Deep expertise in TypeScript, React, Node.js and Python across frontend, backend, and serverless architectures. From design systems to AWS Lambda pipelines — full ownership of the stack.",
    },
    {
      icon: "brainCircuit",
      title: "AI & LLM Engineering",
      description:
        "Hands-on experience designing agentic workflows with LangGraph, building LLM-assisted features, and establishing AI agent development practices (agents.md, GitHub Copilot). Bridging data science and engineering in production.",
    },
    {
      icon: "server",
      title: "Scalable Systems Design",
      description:
        "Proven track record designing microservices, serverless functions, and event-driven architectures on AWS. Focused on observability, distributed tracing, and telemetry to ensure production-grade reliability.",
    },
  ];

  return Response.json(features);
}
