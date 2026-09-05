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

#### `archplan-ai/README.md`
```markdown
# ArchPlan AI Studio 📐

Parametric 2D/3D floor plan layout engine and backyard designer for SME builders, residential contractors, and architects.

## Features
- **Real-Time 3D BIM Viewer**: Built on Three.js with dynamic lighting, shadows, and interactive zone layouts.
- **Dynamic AI Switcher**: Seamlessly switch inference between **AIAura Gateway**, **OpenAI**, and **Google Gemini** directly inside the web UI.
- **Spatial Schema Compliance**: Generates deterministic, boundary-checked room geometries, walls, and outdoor elements (pools, decks, patios).

## Getting Started
```bash
npm install
npm run dev

---

### Step 3: Publish Both Repositories to GitHub

You can publish using the **GitHub CLI (`gh`)** directly from your terminal or standard **Git remote commands**.

#### Method A: Using GitHub CLI (`gh`) — Recommended

If you have `gh` authenticated:

```bash
# Publish AutoQA Agent
cd path/to/autoqa-engine
git add .
git commit -m "feat: initial commit for autonomous multi-provider AI QA testing agent"
gh repo create autoqa-engine --public --source=. --remote=origin --push

# Publish ArchPlan AI
cd path/to/archplan-ai
git add .
git commit -m "feat: initial commit for 3D parametric AI floor plan and backyard generator"
gh repo create archplan-ai --public --source=. --remote=origin --push
