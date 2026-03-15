export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Backend & Integration",
    items: [
      "Java / SpringBoot / Quarkus",
      "Node.JS / AWS Lambda / Serverless",
      "REST APIs / Microservices",
      "AWS Cloud / Docker / Kubernetes",
      "JPA / Hibernate / JDBC",
      "MongoDB / Cassandra (NoSQL)",
      "Messaging / Queue / Topics",
      "Reactive Programming / Asynchronous Programming",
      "ESB / BPS / API Gateway",
      "AEM / JCR / Adobe CMS",
      "Performance Tuning & Profiling",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.JS / Redux.JS",
      "Ember.JS / Vue.JS",
      "AngularJS / MEAN Stack",
      "HTML5 / SPA / ",
      "CSS / SASS / SCSS & Animations",
      "Bootstrap, Google MD, Semantic UI",
      "jQuery",
    ],
  },
  {
    category: "Artificial Intelligence",
    items: [
      "Vibe Coding",
      "Spec Driven Development",
      "Prompt Engineering",
      "LLM Integration (OpenAI, Claude, Gemini)",
      "RAG (Retrieval-Augmented Generation)",
      "MCP (Model Context Protocol)",
    ],
  },
  {
    category: "Other Skills",
    items: [
      "AWS Technology Stack",
      "Docker / Containerised Infrastructure",
      "Selenium, JUnit, Cucumber (Test Automation)",
      "Apache JMeter (Performance Testing)",
      "Maven, Gradle, Jenkins, Bamboo (CI/CD)",
      "Agile / Lean / Waterfall",
      "Architecture Design & Documentation",
      "Groovy & Python",
    ],
  },
]
