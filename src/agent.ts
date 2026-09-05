import { chromium, Browser, Page } from 'playwright';
import { extractInteractiveElements } from './pageExtractor.js';
import { getNextQAAction } from './llm.js';
import { QAReport, QAExecutionStep } from './types.js';

export async function runQATest(targetUrl: string, objective: string, maxSteps = 15): Promise<QAReport> {
  const browser: Browser = await chromium.launch({ headless: false }); // Set headless: true for CI/CD
  const page: Page = await browser.newPage();
  
  const report: QAReport = {
    targetUrl,
    objective,
    status: 'FAILED',
    totalSteps: 0,
    steps: [],
    errors: []
  };

  const actionHistory: string[] = [];

  try {
    await page.goto(targetUrl, { waitUntil: 'domcontentloaded' });

    for (let step = 1; step <= maxSteps; step++) {
      const currentUrl = page.url();
      const elements = await extractInteractiveElements(page);

      const action = await getNextQAAction(objective, currentUrl, elements, actionHistory);

      const stepRecord: QAExecutionStep = {
        stepNumber: step,
        action,
        domSnapshotCount: elements.length,
        timestamp: new Date().toISOString()
      };

      report.steps.push(stepRecord);
      actionHistory.push(`Step ${step}: ${action.type} -> ${action.reasoning}`);

      if (action.type === 'finish') {
        report.status = action.success ? 'PASSED' : 'FAILED';
        break;
      }

      if (action.type === 'click') {
        const selector = `[data-qa-id="${action.elementId}"]`;
        await page.waitForSelector(selector, { timeout: 5000 });
        await page.click(selector);
      } else if (action.type === 'type') {
        const selector = `[data-qa-id="${action.elementId}"]`;
        await page.waitForSelector(selector, { timeout: 5000 });
        await page.fill(selector, action.text);
      } else if (action.type === 'navigate') {
        await page.goto(action.url, { waitUntil: 'domcontentloaded' });
      } else if (action.type === 'assert') {
        if (!action.passed) {
          report.errors.push(`Assertion failed: ${action.condition}`);
        }
      }

      // Small delay to allow dynamic JS to settle
      await page.waitForTimeout(1500);
    }
  } catch (err: any) {
    report.status = 'ABORTED';
    report.errors.push(err.message);
  } finally {
    report.totalSteps = report.steps.length;
    await browser.close();
  }

  return report;
}
