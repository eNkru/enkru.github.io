export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Core Strengths",
    items: [
      "React.js / TypeScript / Node.js",
      "Java / SpringBoot / Spring Reactive",
      "REST APIs / Microservices Architecture",
      "AWS Cloud / Docker / Kubernetes",
      "LLM Integration (OpenAI, Claude, Gemini)",
      "RAG / MCP / AI-Augmented Development",
    ],
  },
  {
    category: "Current Stack",
    items: [
      "React.js / Redux / Vite",
      "Java / SpringBoot / Quarkus",
      "Node.js / AWS Lambda / Serverless",
      "Docker / Containerised Infrastructure",
      "CI/CD (Jenkins, GitHub Actions, Bamboo)",
      "MongoDB / Cassandra / PostgreSQL",
    ],
  },
  {
    category: "Legacy Experience",
    items: [
      "Ember.js / Vue.js / AngularJS",
      "AEM / JCR / Adobe CMS",
      "ESB / BPS / API Gateway (MuleSoft, WSO2)",
      "Groovy & Python Scripting",
      "Selenium / JMeter (Test & Performance)",
      "Bootstrap / Semantic UI / jQuery",
    ],
  },
]
