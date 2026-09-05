import { runQATest } from './agent.js';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  const url = process.argv[2] || 'https://demo.playwright.dev/todomvc';
  const goal = process.argv[3] || 'Create a todo item named "Buy milk", verify it is created, and toggle it as completed.';

  console.log(`Starting AI QA Execution...`);
  console.log(`URL: ${url}`);
  console.log(`Objective: ${goal}\n`);

  const report = await runQATest(url, goal);
  console.log('--- TEST EXECUTION COMPLETED ---');
  console.log(JSON.stringify(report, null, 2));
}

main().catch(console.error);
