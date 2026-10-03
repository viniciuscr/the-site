import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: 9,
    position: "AI Engineer",
    company: "Nationale Nederlanden",
    description: "Informal engineering lead for one of two groups, contributing to technical decisions across both groups, conducting technical interviews, evaluating candidates, and formally mentoring engineers and data scientists. Work across AI/LLM engineering, system architecture, data analysis, experimentation, and production software engineering.",
    accomplishments: [
      {
        "topic": "AI-Powered Mortgage Document Analysis",
        "description": "Contribute to the overall architecture of a production mortgage document-analysis system alongside the Tech Lead and Staff/Principal Engineer, participating in technical decisions across the system. Design and implement agentic workflows with LangGraph and Python for new features, defining states, nodes, dependencies, and transitions."
      },
      {
        "topic": "LLM Engineering & Evaluation",
        "description": "Work hands-on across LLM integration, prompt design, model and tool selection, and configuration in collaboration with data scientists. Participate in defining evaluation methodologies, conducting experiments, and analyzing LLM outputs, document-analysis data, and telemetry to inform technical decisions."
      },
      {
        "topic": "Telemetry & Observability Architecture",
        "description": "Designed and implemented the overall telemetry and observability architecture across the monorepo using AWS Powertools, X-Ray tracing, and automated alerts, supporting AI and document-analysis workflows."
      },
      {
        "topic": "In-House OCR Solution",
        "description": "Led development of an in-house OCR solution using Python and AWS Lambda to extract structured JSON from mortgage documents, integrating LLMs, ground-truth processes, and production-grade observability."
      },
      {
        "topic": "AI-Assisted Development & LLM Tooling",
        "description": "Established team-wide practices for AI-assisted development using agents.md specifications, GitHub Copilot Coding Agent, and LLM tooling, defining agent context, custom instructions, and guardrails to support consistent development practices."
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
      "Joined a 3-month contract to help accelerate a behind-schedule initiative. Worked with the team to rethink and refactor critical application components, improving development flow through reusable frontend architecture.",

    accomplishments: [
      {
        "topic": "Reusable UI Components",
        "description": "Designed reusable UI components adopted across the team, helping establish a more consistent approach to frontend development."
      },
      {
        "topic": "Shared Frontend Libraries",
        "description": "Architected shared frontend libraries to reduce inconsistent implementations and simplify development across the application."
      },
      {
        "topic": "Delivery & Code Quality",
        "description": "Helped unblock critical development work through component reuse, targeted refactoring, and code reviews during a high-pressure delivery period."
      }
    ],
    skills: [
      "React",
      "CSS-in-JS",
      "React Query",
      "GraphQL",
      "TypeScript",
      "Monorepo",
    ],
    startDate: "2021 Jul",
    endDate: "2021 Nov",
  },
  {
    id: 6,
    position: "Full-stack Engineer",
    company: "Avenue Code",
    description: "As an outsourced developer, worked with two major clients, developing web applications and APIs in fast-paced environments. Worked across frontend and backend technologies, contributing to architecture, authentication, content management, and application performance.",
    accomplishments: [
      {
        "topic": "Design System Architecture",
        "description": "Designed and helped establish a scalable design system for a Fortune 500 client, working closely with designers and development teams to build reusable components and maintain consistency across applications."
      },
      {
        "topic": "Authentication & Authorization",
        "description": "Collaborated with Azure DevOps and backend teams to integrate Okta authentication and define authentication and authorization flows for Next.js applications and future projects."
      },
      {
        "topic": "CMS Development",
        "description": "Proposed and developed an optimized CMS solution using Django, Graphene, and Apollo Client, enabling content management for the company's main web application."
      },
      {
        "topic": "Application Performance",
        "description": "Explored Apollo Client caching strategies and Next.js server-side rendering to improve application performance through more efficient data fetching and cache management."
      }
    ],
    skills: [
      "React",
      "CSS-in-JS",
      "Sass",
      "Next.js",
      "TypeScript",
      "Apollo Client",
      "GraphQL",
      "Python",
      "Django",
      "Microservices",
      "RESTful Web Services",
    ],
    startDate: "2019 Oct",
    endDate: "2021 Jul",
  },
  {
    id: 5,
    position: "Team Lead",
    company: "Banrisul",
    description: "Team Lead at one of Brazil’s largest state banks, guiding cross-functional agile teams while contributing to digital transformation and establishing engineering practices across the organization.",
    accomplishments: [
      {
        "topic": "Engineering Standards & Best Practices",
        "description": "Initiated and promoted standardized development practices and supporting tools as part of a core engineering team, helping establish more consistent software delivery practices across internal groups."
      },
      {
        "topic": "Digital Transformation",
        "description": "Collaborated with a top-tier consultancy to establish a new digital transformation division, contributing to modernization initiatives for enterprise clients."
      },
      {
        "topic": "Technical Leadership",
        "description": "Guided multiple cross-functional agile teams as technical lead, contributing to software architecture, CI/CD pipelines, and test automation."
      },
      {
        "topic": "Engineering Process Improvements",
        "description": "Developed initiatives to improve software development workflows and developer tooling, addressing recurring friction in day-to-day engineering work."
      }
    ],
    skills: [
      "Webpack",
      "Software Architecture",
      "C#",
      "RESTful Web Services",
      "Hybrid Applications",
    ],
    startDate: "2015 Sep",
    endDate: "2019 Oct",
  },
  {
    id: 4,
    position: "Full-stack Developer",
    company: "Hexagon Agriculture",
    description:
      "Full-stack developer working across Java, JavaScript, geospatial systems, and backend services. Transitioned from PHP to Java and quickly became productive across the existing application stack.",
    accomplishments: [
      {
        "topic": "Automated Testing & Code Quality",
        "description": "Introduced and promoted JUnit and Mockito testing practices, alongside JaCoCo coverage tracking, to strengthen automated testing and code quality."
      },
      {
        "topic": "CI/CD Infrastructure",
        "description": "Built CI/CD infrastructure using Jenkins and Docker, improving the consistency and automation of application builds and deployments."
      },
      {
        "topic": "Geospatial Application Modernization",
        "description": "Refactored a legacy map-rendering library and modernized its integration with PostGIS, improving the application's geospatial capabilities."
      },
      {
        "topic": "Spatial Data Systems",
        "description": "Re-engineered PostgreSQL/PostGIS data structures and queries using spatial indexing and query caching to improve geospatial data access."
      },
      {
        "topic": "Engineering Mentorship",
        "description": "Supported onboarding and mentored engineers on TDD practices and spatial database development patterns."
      },
    ],
    skills: [
      "Java",
      "JavaScript",
      "JSF",
      "EJB",
      "JPA",
      "RESTful Web Services",
      "PostgreSQL",
      "PostGIS",
      "JBoss",
      "Docker",
      "Jenkins",
      "Shell Scripting",
    ],
    startDate: "2013 Jul",
    endDate: "2015 Aug",
  },
  {
    id: 3,
    position: "Tech Lead",
    company: "Webcrew",
    description: "Founded and led a small software business, combining technical development with strategic planning and team management. Worked across application development, legacy system integration, databases, and frontend development.",
    accomplishments: [
      {
        "topic": "Full-stack Application Development",
        "description": "Developed and maintained PHP applications using CodeIgniter and MVC patterns, while also delivering frontend functionality with JavaScript, HTML, and CSS."
      },
      {
        "topic": "Legacy System Integration",
        "description": "Integrated legacy systems and supported incremental modernization, maintaining compatibility while improving application structure and normalizing existing data."
      },
      {
        "topic": "Database Development",
        "description": "Designed and normalized MySQL database structures to support application functionality and ongoing system improvements."
      },
      {
        "topic": "Technical & Team Leadership",
        "description": "Coordinated development tasks, managed a remote team, and mentored team members while remaining hands-on with technical delivery."
      }
    ],
    skills: [
      "PHP",
      "CodeIgniter",
      "MySQL",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "MVC",
      "UI/UX",
      "Remote Team Management",
      "Project Management",
    ],
    startDate: "2011 Jul",
    endDate: "2013 Jun",
  },
  {
    id: 2,
    position: "Web Developer",
    company: "Opportunity Web Software",
    description:
      "Early professional software development role, contributing to web applications while building a strong foundation in software engineering practices and design patterns.",
    accomplishments: [
      {
        "topic": "Software Engineering Practices",
        "description": "Applied coding best practices and design patterns while contributing to the development of web applications."
      },
      {
        "topic": "Internal Framework Development",
        "description": "Contributed to the development of the company's internal MVC framework, working on reusable foundations for application development."
      },
      {
        "topic": "Full-stack Web Development",
        "description": "Developed web functionality across PHP, JavaScript, HTML, and CSS, adapting quickly to the team's technology stack."
      }
    ],
    skills: [
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
      "MVC",
      "Design Patterns",
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
