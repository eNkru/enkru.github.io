export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Core Strengths",
    items: [
      "React.js / TypeScript / Vite",
      "Java / SpringBoot / Spring Reactive",
      "REST APIs / Microservices Architecture",
      "AWS / Docker / Kubernetes",
      "LLM Integration (OpenAI, Claude, Gemini)",
      "RAG / MCP / AI-Augmented Development",
    ],
  },
  {
    category: "Current Stack",
    items: [
      "Node.js / AWS Lambda / Serverless",
      "CI/CD (Jenkins, GitHub Actions, Bamboo)",
      "MongoDB / Cassandra / PostgreSQL",
      "Prompt Engineering & AI Workflows",
      "Redux / State Management",
      "Containerised Infrastructure",
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
