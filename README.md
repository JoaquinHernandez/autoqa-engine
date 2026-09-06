# autoqa-engine
# 🤖 AutoQA Agent

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49-orange.svg)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An autonomous, multi-provider AI software testing agent powered by **Playwright** and an adaptive LLM decision loop with self-healing DOM inspection.

---

## 📌 Architecture Overview


autoqa-engine/
├── ai.config.json       # Provider endpoints, base URLs, and model settings
├── package.json         # Dependencies & scripts
├── tsconfig.json        # TypeScript configuration
└── src/
    ├── types.ts         # TypeScript data contracts (Actions, Elements, Reports)
    ├── aiClient.ts      # Multi-provider client abstraction
    ├── pageExtractor.ts # Real-time DOM element scraper and filter
    ├── llm.ts           # Autonomous QA prompt engineering
    ├── agent.ts         # Playwright browser loop and action dispatcher
    └── index.ts         # CLI entry point


# 🤖 AutoQA Agent

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.49-orange.svg)](https://playwright.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An autonomous, multi-provider AI software testing agent powered by **Playwright** and an adaptive LLM decision loop with self-healing DOM inspection.

---

## 📌 Architecture Overview

```mermaid
graph TD
    A[Natural Language Goal] --> B[AutoQA Agent Engine]
    B --> C[Playwright Headless/Headed Browser]
    C --> D[DOM Extractor & Interactive Filter]
    D --> E{Multi-Provider AI Client}
    E -->|Route 1| F[AIAura Gateway - [http://aiaura.me](http://aiaura.me)]
    E -->|Route 2| G[OpenAI GPT-4o]
    E -->|Route 3| H[Google Gemini 1.5/2.0]
    E -->|Route 4| I[Custom Local vLLM / Ollama Proxy]
    F & G & H & I --> J[Next Action: Click / Type / Assert / Finish]
    J --> C
    C --> K[Structured JSON Test Report]
