import { Page } from 'playwright';
import { DOMElementSummary } from './types.js';

export async function extractInteractiveElements(page: Page): Promise<DOMElementSummary[]> {
  return await page.evaluate(() => {
    const selectorList = 'button, a, input, textarea, select, [role="button"], [role="link"], [role="checkbox"]';
    const elements = Array.from(document.querySelectorAll(selectorList));
    
    return elements
      .filter((el) => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return (
          rect.width > 0 &&
          rect.height > 0 &&
          style.visibility !== 'hidden' &&
          style.display !== 'none' &&
          style.opacity !== '0'
        );
      })
      .slice(0, 50) // Limit context to the top 50 interactive elements
      .map((el, index) => {
        // Tag DOM element with a temporary data attribute for direct targeting
        el.setAttribute('data-qa-id', index.toString());
        
        const tagName = el.tagName.toLowerCase();
        const inputEl = el as HTMLInputElement;
        
        return {
          id: index,
          tagName,
          text: (el.textContent || '').trim().slice(0, 100),
          selector: `[data-qa-id="${index}"]`,
          role: el.getAttribute('role') || undefined,
          type: inputEl.type || undefined,
          placeholder: inputEl.placeholder || undefined
        };
      });
  });
}
