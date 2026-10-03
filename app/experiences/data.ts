import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: 9,
    position: "AI Engineer",
    company: "Nationale Nederlanden",
    description: "Engineering lead for one group within a larger two-group team, contributing to technical decisions across both groups. Builds production AI systems and shapes architecture through technical reviews, hiring interviews, mentoring, and translating data science requirements into scalable, observable software.",
    accomplishments: [
      {
        "topic": "Production Mortgage Document Analysis",
        "description": "Helped deliver a production system that checks mortgage application documents for completeness. Designed a multi-step Python and LangGraph workflow, defining state transitions and node dependencies and adding observability across the pipeline."
      },
      {
        "topic": "Production Telemetry",
        "description": "Standardized telemetry across the monorepo with AWS Powertools logging, X-Ray tracing, and automated alerts, supporting integration with new application features."
      },
      {
        "topic": "In-House OCR Solution",
        "description": "Led development of an OCR solution using Python Lambda functions to extract structured JSON from mortgage documents, integrating LLMs, ground-truth processes, and production observability."
      },
      {
        "topic": "AI-Assisted Engineering Practices",
        "description": "Established team practices for AI-assisted development using agents.md specifications, GitHub Copilot Coding Agent, and LLM tooling. Defined agent context, custom instructions, and guardrails for consistent use."
      },
    ],
    skills: [
      "Python",
      "LangGraph",
      "AI Agents",
      "GitHub Copilot",
      "AWS Lambda",
      "Step Functions",
      "Middy",
      "Typescript",
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
      "Joined on a three-month contract to help recover a delayed initiative. Worked with the team to rethink and refactor critical application components and improve delivery speed.",

    accomplishments: [
      {
        "topic": "Turned Around Delayed Project",
        "description": "Helped to stabilize development velocity by designing reusable UI components adopted by the entire team."
      },
      {
        "topic": "Shared Frontend Architecture",
        "description": "Designed shared frontend libraries to replace inconsistent implementations, reducing average task completion time from three days to as little as one day."
      },
      {
        "topic": "Critical-Path Delivery",
        "description": "Fast-tracked 10+ critical-path tasks through component reuse and targeted code reviews, helping the team complete a high-pressure sprint on time."
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
    description: "Full-stack engineer for two major clients, developing web applications and APIs in fast-paced environments. Work spanned frontend applications and backend services, including Python/Django and microservices, alongside architecture and integration concerns.",
    accomplishments: [
      {
        "topic": "Led Design System Implementation",
        "description": "Created and evangelized a scalable design system for a Fortune 500 client, adopted by 25+ product teams to maintain consistent UX across web, mobile, and tablet platforms."
      },
      {
        "topic": "Reusable Authentication Integration",
        "description": "Integrated Okta authentication into Next.js applications with Azure DevOps, reducing implementation time for new projects by two weeks on average."
      },
      {
        "topic": "Proactive Problem Solving",
        "description": "Proposed and delivered a CMS solution to the current project that empowered marketing teams to manage content without developer support, eliminating 12+ weekly update requests."
      },
      {
        "topic": "Performance Optimization",
        "description": "Overhauled Apollo Client caching strategies and Next.js server-side rendering implementation, achieving measurable load-time improvements across 69% of key user flows."
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
    description: "Team Lead at one of Brazil's largest state banks, guiding cross-functional agile teams, establishing engineering standards, and contributing to digital transformation and modernization initiatives.",
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
      "Software architecture",
      "Microservices",
      "RESTful Web services",
      "C#",
      "Node.js",
      "MongoDB",
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
        "topic": "Championed Quality Foundations",
        "description": "Pioneered adoption of JUnit/Mockito testing frameworks and Jacoco coverage tracking, achieving 85%+ code coverage compliance across core modules within 5 months."
      },
      {
        "topic": "Built CI/CD Pipeline Infrastructure",
        "description": "Designed and deployed Jenkins CI server with Docker containerization, reducing integration issues by 30% through automated build verification and test execution."
      },
      {
        "topic": "Geospatial Application and Query Optimization",
        "description": "Refactored a legacy map-rendering library and optimized PostGIS queries, improving rendering performance by 42%."
      },
      {
        "topic": "Mentored Engineering Teams",
        "description": "Established onboarding program for new developers covering test-driven development and spatial database patterns, reducing ramp-up time from 4 weeks to 1 week."
      },
      {
        "topic": "Optimized Spatial Data Systems",
        "description": "Re-engineered PostgreSQL geospatial databases with spatial indexing and query caching strategies, achieving 25% faster complex geoqueries through execution plan analysis."
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
    description: "As the founder of my own small business, I led strategic planning, technical development, and team management. I developed key features, mentored a dynamic team and fostered a collaborative environment.",
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
        "description": "Designed and developed scalable web applications using the CodeIgniter framework, leveraging its MVC architecture to streamline development processes and enhance maintainability."
      },
      {
        "topic": "Front-End Enhancements",
        "description": "Improved user interfaces by integrating CSS for responsive layouts, JavaScript for dynamic interactions, and HTML for semantic structure, ensuring cross-browser compatibility and accessibility."
      },
      {
        "topic": "Legacy System Integration",
        "description": "Successfully integrated legacy systems by assessing compatibility, implementing incremental upgrades, and ensuring data normalization to enhance performance and scalability."
      },
      {
        "topic": "Database Normalization",
        "description": "Applied data normalization techniques to eliminate redundancy and ensure data integrity, optimizing database performance and facilitating smoother system integrations."
      },
      {
        "topic": "Task Coordination and Team Management",
        "description": "Coordinated task distribution within development teams, ensuring efficient workflow through clear role definitions, regular progress updates, and effective communication channels."
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
      "First professional contact with development, introduced to best coding practices and design patterns. After a short adaptation period, helped to create an internal framework to burst development using MVC pattern.",
    accomplishments: [
      {
        "topic": "Introduction to Professional Development",
        "description": "Gained first-hand experience in software development, learning best coding practices and design patterns that laid the foundation for future growth."
      },
      {
        "topic": "Framework Development with MVC",
        "description": "Contributed to the creation of an internal framework utilizing the MVC pattern, which significantly accelerated development processes and improved code maintainability."
      },
      {
        "topic": "Rapid Adaptation and Contribution",
        "description": "Quickly adapted to new technologies and methodologies, becoming an integral part of the team by providing valuable insights and support in framework development."
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
