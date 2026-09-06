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
