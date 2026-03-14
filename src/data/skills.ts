export interface SkillCategory {
  category: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "Backend & Integration",
    items: [
      "Java / J2EE, Spring, Spring Boot",
      "REST APIs & Microservices",
      "AWS Cloud & Docker",
      "JPA / Hibernate / JDBC",
      "MongoDB, Cassandra (NoSQL)",
      "ESB / BPS / API Gateway",
      "AEM / JCR / Adobe CMS",
      "Performance Tuning & Profiling",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React / Redux",
      "Ember.js",
      "AngularJS / MEAN Stack",
      "HTML5 / ES7+",
      "CSS / SASS / SCSS & Animations",
      "Bootstrap, Google MD, Semantic UI",
      "jQuery",
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
