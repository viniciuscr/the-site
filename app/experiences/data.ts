import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: 9,
    position: "AI Engineer",
    company: "Nationale Nederlanden",
    description: "Senior engineer and engineering lead for one of two teams in the squad; a separate Tech Lead serves the squad. Contributes to technical decisions across both teams and often participates in architecture decisions for both. Works with data science and engineering colleagues on AI systems.",
    accomplishments: [
      {
        "topic": "Mortgage Document Analysis Workflow",
        "description": "Works as engineering lead within one of the two teams contributing to a multi-step Python and LangGraph workflow that checks mortgage application documents for completeness."
      },
      {
        "topic": "Monorepo Telemetry",
        "description": "Personally implemented telemetry across the monorepo using AWS Powertools for logging, X-Ray tracing, and automated alerts."
      },
      {
        "topic": "In-House OCR Solution",
        "description": "Contributed to an in-house OCR solution using Python Lambda functions to extract structured JSON from mortgage documents, integrating LLMs and ground-truth processes."
      },
    ],
    skills: [
      "Python",
      "LangGraph",
      "AI Agents",
      "AWS Lambda",
      "Step Functions",
      "Middy",
      "TypeScript",
      "GitHub Copilot",
      "React",
      "Next.js",
      "Technical Leadership",
    ],
    startDate: "2022 Feb",
    endDate: "Current",
  },
  {
    id: 7,
    position: "Front-end Engineer",
    company: "Clevertech",
    description:
      "Joined on a short-term contract to help recover a delayed initiative. Worked with the team to rethink and refactor critical frontend application components.",

    accomplishments: [
      {
        "topic": "Turned Around Delayed Project",
        "description": "Helped to stabilize development velocity by designing reusable UI components adopted by the entire team."
      },
      {
        "topic": "Shared Frontend Libraries",
        "description": "Designed shared frontend libraries to replace inconsistent implementations and support more consistent development across the team."
      },
      {
        "topic": "Critical-Path Delivery",
        "description": "Fast-tracked critical-path tasks through component reuse and targeted code reviews, helping the team deliver under tight sprint deadlines."
      }
    ],
    skills: [
      "React",
      "CSS-in-JS",
      "React Query",
      "GraphQL",
      "Typescript",
      "Monorepo",
    ],
    startDate: "2021 Jul",
    endDate: "2021 Nov",
  },
  {
    id: 6,
    position: "Full-stack Engineer",
    company: "Avenue Code",
    description: "Officially a Full-stack Engineer at Avenue Code; assigned to client work as a Senior Frontend Engineer. The work was primarily frontend, focused on web applications and frontend architecture.",
    accomplishments: [
      {
        "topic": "Design System Implementation",
        "description": "Created a design system for a Fortune 500 client, adopted by product teams to support consistent UX across web, mobile, and tablet platforms."
      },
      {
        "topic": "Authentication Integration",
        "description": "Integrated Okta authentication into Next.js applications."
      },
      {
        "topic": "Content Management Solution",
        "description": "Proposed and delivered a CMS solution that enabled marketing teams to manage content without developer support."
      },
      {
        "topic": "Frontend Performance",
        "description": "Reworked Apollo Client caching strategies and Next.js server-side rendering to address load time across key user flows."
      }
    ],
    skills: [
      "React",
      "CSS-in-JS",
      "Sass",
      "Next.js",
      "Typescript",
      "Isomorphic applications",
      "Apollo Client",
      "GraphQL",
      "Python",
      "Django",
      "Microservices",
      "RESTful Web services",
    ],
    startDate: "2019 Oct",
    endDate: "2021 Jul",
  },
  {
    id: 5,
    position: "Team Lead",
    company: "Banrisul",
    description: "Team Lead at one of Brazil's largest state banks, where C# was the primary language. Guided cross-functional agile teams, contributed to engineering standards, and worked on digital transformation initiatives.",
    accomplishments: [
      {
        "topic": "Spearheaded Development Best Practices",
        "description": "Initiated and promoted standardized development practices and support tools as part of a core team, enabling consistent software delivery across internal engineering groups."
      },
      {
        "topic": "Championed Digital Transformation Initiatives",
        "description": "Selected to collaborate with a top-tier consultancy on establishing a new digital transformation division, driving modernization efforts for enterprise clients."
      },
      {
        "topic": "Technical Leadership and Delivery Practices",
        "description": "Guided multiple cross-functional agile teams as technical lead and implemented CI/CD pipelines and test automation strategies to accelerate release cycles."
      },
      {
        "topic": "Pioneered Internal Process Improvements",
        "description": "Developed side initiatives to optimize software development workflows and developer tooling, reducing friction in daily operations and enhancing team productivity."
      }
    ],
    skills: [
      "C#",
      "Node.js",
      "Software architecture",
      "React",
      "Webpack",
      "Hybrid Applications",
    ],
    startDate: "2015 Sep",
    endDate: "2019 Oct",
  },
  {
    id: 4,
    position: "Full-stack Developer",
    company: "Hexagon Agriculture",
    accomplishments: [
      {
        "topic": "Testing Foundations",
        "description": "Introduced JUnit and Mockito testing frameworks and JaCoCo coverage tracking for core modules."
      },
      {
        "topic": "CI Pipeline Infrastructure",
        "description": "Designed and deployed a Jenkins CI server with Docker containerization for automated build verification and test execution."
      },
      {
        "topic": "Geospatial Queries and Map Layers",
        "description": "Wrote and optimized queries to fetch database datapoints for OpenLayers layers, including map shapes and detailed driver-route traces."
      },
      {
        "topic": "Developer Onboarding",
        "description": "Established an onboarding program covering test-driven development and spatial database patterns."
      },
      {
        "topic": "Farm and Plot Data Ingestion",
        "description": "Improved farm and plot data ingestion from minutes to seconds."
      },
    ],
    description:
      "Full-stack developer delivering Java application features across server-side services, REST APIs, and geospatial data systems.",
    skills: [
      "Java/JSF/EJB/JPA",
      "RESTful Web services",
      "Postgres / PostGIS",
      "Spatial data manipulation",
      "Jboss management",
      "Shell script",
    ],
    startDate: "2013 Jul",
    endDate: "2015 Aug",
  },
  {
    id: 3,
    position: "Tech Lead",
    company: "Webcrew",
    description: "Founder and Tech Lead, responsible for strategic planning, technical development, and team management.",
    skills: [
      "Leadership",
      "Project management",
      "Remote team management",
      "MySQL",
      "JQuery",
      "UI/UX concepts",
    ],
    accomplishments: [
      {
        "topic": "PHP Development with CodeIgniter",
        "description": "Designed and developed web applications with CodeIgniter and its MVC architecture."
      },
      {
        "topic": "Legacy System Integration",
        "description": "Integrated legacy systems and applied database normalization to support data integrity and system integration."
      }
    ],
    startDate: "2011 Jul",
    endDate: "2013 Jun",
  },
  {
    id: 2,
    position: "Web Developer",
    company: "Opportunity Web Software",
    description:
      "Early software role applying professional coding practices and design patterns; contributed to the creation of an internal MVC framework for web development.",
    accomplishments: [
      {
        "topic": "Internal MVC Framework",
        "description": "Contributed to an internal PHP MVC framework intended to accelerate web application development."
      }
    ],
    skills: [
      "Web development",
      "Design patterns",
      "PHP",
      "HTML/CSS",
      "Javascript",
    ],
    startDate: "2008 Aug",
    endDate: "2009 Oct",
  },
  {
    id: 1,
    position: "Photoshop Expert",
    company: "Ferrão e Tebaldi Ltda.",
    description:
      "First professional experience, rapidly advancing from auxiliary to lead role while establishing design standards and enhancing team capabilities through internal training.",
    accomplishments: [
      {
        "topic": "Rapid Career Advancement",
        "description": "Started as an auxiliary designer and quickly progressed to the main creative designer role, demonstrating rapid learning and improvement in design skills."
      },
      {
        "topic": "Established Design Standards",
        "description": "Developed and taught internal courses for designers, introducing standardized templates and guidelines that elevated quality standards across final products."
      },
      {
        "topic": "Knowledge Sharing and Team Enhancement",
        "description": "Played a key role in enhancing team capabilities by sharing expertise and best practices, ensuring consistency and excellence in design outputs."
      }
    ],
    skills: ["Photoshop", "Leadership", "Communication"],
    startDate: "2004 Sep",
    endDate: "2007 Jun",
    noDeveloper: true,
  },
];
