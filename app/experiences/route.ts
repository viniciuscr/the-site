import { Experience } from "./types";

export async function GET(): Promise<Response> {
  const experiences: Experience[] = [
    {
      id: 9,
      position: "Full-stack Engineer",
      company: "Nationale Nederlanden",
      description: "As a full-stack engineer, I contribute to key technological initiatives while serving as a resource for technical guidance and mentorship. I currently mentor two junior engineers and two data scientists, fostering a collaborative environment that supports growth and innovation.",
      accomplishments: [
        {
          "topic": "Unified Monorepo Telemetry",
          "description": "Streamlined telemetry solutions across the monorepo by leveraging AWS Powertools for robust logging, X-Ray tracing, and automated alerts. Delivered metrics and tracers to organized team channels, ensuring seamless integration with new application features."
        },
        {
          "topic": "Led In-House OCR Solution Development",
          "description": "Spearheaded the implementation of an in-house OCR solution, learning Python and data science principles to design production-ready Lambda functions. Successfully extracted structured JSON data from images while maintaining high standards for logging, tracing, and metrics."
        },
        {
          "topic": "Explored LLMs and Ground Truth Processes",
          "description": "Defined and shaped processes for creating ground truth datasets, deeply exploring LLMs to enhance OCR accuracy. Collaborated with two data scientists to deliver a scalable solution integrated into production workflows."
        },
        {
          "topic": "Delivered Scalable Python Lambda Deployments",
          "description": "Developed and deployed Python-based Lambda functions for OCR tasks, ensuring consistency, reliability, and compatibility with other teams' workflows. Maintained high telemetry standards across traces, logs, and metrics."
        },
        {
          "topic": "Full-Stack Engineering with TypeScript",
          "description": "Worked extensively as a full-stack engineer using TypeScript to build scalable applications, contributing to both frontend and backend development while driving innovation in system architecture."
        }
      ],

      skills: [
        "React",
        "Step Functions",
        "Next.js",
        "Typescript",
        "AWS Lambda",
        "Middy",
        "Python",
        "Data Science",

      ],
      startDate: "2022 Feb",
      endDate: "Current",
    },
    {
      id: 7,
      position: "Front-end Engineer",
      company: "Clevertech",
      description:
        "Joined under a 3-month contract to accelerate a behind-schedule initiative. Worked toghether with the team to rethink and refactor critical components of the application, resulting in faster deliveries.",

      accomplishments: [
        {
          "topic": "Turned Around Delayed Project",
          "description": "Helped to stabilize development velocity by designing reusable UI components adopted by the entire team."
        },
        {
          "topic": "Built Foundation for Faster Development",
          "description": "Architectured shared frontend libraries that eliminated inconsistent implementations, cutting average task completion time from 3 days down up to 1 day."
        },
        {
          "topic": "Delivered Under Tight Sprint Deadlines",
          "description": "Personally fast-tracked 10+ critical path tasks through strategic component reuse and targeted code reviews, enabling the team to complete a high-pressure sprints in time."
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
      description: "As an outsourced developer, I worked with two major clients, developing web applications and APIs in fast-paced environments. I leveraged agile methodologies to deliver scalable solutions, ensuring seamless integration and high-quality results under tight deadlines.",
      accomplishments: [
        {
          "topic": "Led Design System Implementation",
          "description": "Created and evangelized a scalable design system for a Fortune 500 client, adopted by 25+ product teams to maintain consistent UX across web, mobile, and tablet platforms."
        },
        {
          "topic": "Authored Security Infrastructure",
          "description": " Collaborated with Azure DevOps to integrate Okta authentication into Next.js applications, reducing implementation time for new projects by two weeks on average."
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
          "topic": "Technical Leadership in Agile Environments",
          "description": "Guided multiple cross-functional agile teams as technical lead, implementing CI/CD pipelines and test automation strategies to accelerate release cycles."
        },
        {
          "topic": "Pioneered Internal Process Improvements",
          "description": "Developed side initiatives to optimize software development workflows and developer tooling, reducing friction in daily operations and enhancing team productivity."
        }
      ],
      skills: [
        "React",
        "MongoDB",
        "Webpack",
        "Software architecture",
        "C#",
        "Node.js",
        "Microservices",
        "RESTful Web services",
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
          "topic": "Modernized Geospatial Capabilities",
          "description": "Refactored legacy map rendering library using PostGIS spatial extensions, improving rendering performance by 42% through query optimization."
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
        "Successfully pivoted from PHP to Java development, rapidly achieving production-level proficiency to drive key features in high-traffic applications.",
      skills: [
        "Spatial data manipulation",
        "Java/JSF/EJB/JPA",
        "RESTful Web services",
        "Jboss management",
        "Shell script",
        "Postgres / PostGIS",
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

  return Response.json(experiences);
}
