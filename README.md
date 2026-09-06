# autoqa-engine
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

🚀 Quickstart
1. Prerequisites
Node.js: v20.x or higher

npm: v9.x or higher

2. Installation
Bash
git clone [https://github.com/](https://github.com/)<YOUR_GITHUB_USERNAME>/autoqa-engine.git
cd autoqa-engine
npm install
npx playwright install --with-deps
3. Environment & AI Configuration
Configure your AI provider in ai.config.json:



Bash
# For AIAura
export AIAURA_API_KEY="your-key-here"

# Or for OpenAI / Gemini
export OPENAI_API_KEY="sk-..."
export GEMINI_API_KEY="AIza..."
4. Build & Run
Bash
# Compile TypeScript
npm run build

# Run a test against any web application
npm start "[https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)" "Create a task called 'Deploy to prod' and mark it completed."
📄 License
This project is licensed under the MIT License.


---

### File 2: `archplan-ai/README.md`

```markdown
# 📐 ArchPlan AI Studio

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r170-black.svg)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An AI-powered parametric 2D/3D architectural spatial engine designed for SME builders, residential contractors, and landscape architects.

---

## 📌 Architecture Overview

```mermaid
graph LR
    User[Client / Builder Requirements] --> UI[Studio Web UI]
    UI --> Switcher{In-App AI Switcher}
    Switcher -->|HTTP API| AIAura[AIAura Engine - aiaura.me]
    Switcher -->|HTTP API| OpenAI[OpenAI gpt-4o]
    Switcher -->|HTTP API| Gemini[Google Gemini 1.5]
    AIAura & OpenAI & Gemini --> Parser[Spatial JSON Validator]
    Parser --> Engine[Three.js Extrusion Pipeline]
    Engine --> Viewport[Interactive 3D Turntable & Spatial Breakdown]
✨ Core Features
Interactive 3D BIM Viewer: Real-time rendering with WebGL, directional shadows, depth textures, and room extrusion.

Dynamic In-App Model Switcher: Swap between AIAura Gateway (http://aiaura.me), ChatGPT, and Gemini directly from the UI drawer without server restarts.

Spatial JSON Engine: Enforces strict boundary conditions, wall coordinates, and zone metadata for bedrooms, bathrooms, great rooms, decks, and custom pools.

Lightweight & Modular: Built on Vite and pure TypeScript with zero heavy framework overhead.
