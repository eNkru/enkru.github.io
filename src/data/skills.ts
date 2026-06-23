export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Backend & Integration",
    items: [
      "Java / SpringBoot / Spring Reactive",
      "REST APIs / Microservices Architecture",
      "Node.js / AWS Lambda / Serverless",
      "Docker / Containerised Infrastructure",
      "CI/CD (Jenkins, GitHub Actions, Bamboo)",
      "MongoDB / Cassandra / PostgreSQL",
      "ESB / BPS / API Gateway (MuleSoft, WSO2)",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js / TypeScript / Redux / Vite",
      "Ember.js / Vue.js / AngularJS",
      "Bootstrap / Semantic UI / jQuery",
      "AEM / JCR / Adobe CMS",
    ],
  },
  {
    category: "Artificial Intelligence",
    items: [
      "LLM Integration (OpenAI, Claude, Gemini)",
      "RAG / MCP / AI-Augmented Development",
      "Prompt Engineering & AI Workflows",
    ],
  },
  {
    category: "Other Skills",
    items: [
      "AWS Cloud / Azure / Kubernetes",
      "Groovy & Python Scripting",
      "Selenium / JMeter (Test & Performance)",
    ],
  },
]
