# AutoQA Agent 🤖

An autonomous, multi-provider AI software testing agent powered by Playwright and an adaptive LLM decision loop with self-healing DOM inspection.

## Features
- **Multi-Provider Engine**: Route test execution commands via **AIAura (`http://aiaura.me/api/v1`)**, **OpenAI (`gpt-4o`)**, **Google Gemini**, or custom OpenAI-compatible proxies.
- **Autonomous Exploration**: Detects clickable, typable, and assertable elements without fragile hardcoded selectors.
- **Detailed Audit Trail**: Generates complete step-by-step reports and JSON action summaries.

## Getting Started
```bash
npm install
npx playwright install
cp ai.config.json.example ai.config.json # Configure your API endpoint
npm run build
npm start "[https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)" "Add a task and complete it"
