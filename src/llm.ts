import { DOMElementSummary, AgentAction } from './types.js';

export async function getNextQAAction(
  objective: string,
  currentUrl: string,
  elements: DOMElementSummary[],
  history: string[]
): Promise<AgentAction> {
  const apiKey = process.env.OPENAI_API_KEY || process.env.LLM_API_KEY;
  if (!apiKey) {
    throw new Error('Missing API key in environment variables (OPENAI_API_KEY).');
  }

  const systemPrompt = `
You are an autonomous AI Software QA Engineer. Your goal is to systematically verify web application flows.
Analyze the interactive elements on the page and determine the exact next interaction to advance the objective.
Always output valid JSON conforming strictly to this format:
{
  "type": "click" | "type" | "navigate" | "assert" | "finish",
  "elementId": number (required if click or type),
  "text": string (required if type),
  "passed": boolean (required if assert),
  "condition": string (required if assert),
  "reasoning": string,
  "success": boolean (required if finish),
  "summary": string (required if finish)
}
Do not wrap your response in backticks or markdown blocks. Only output raw JSON.
`;

  const userPrompt = JSON.stringify({
    objective,
    currentUrl,
    previousActions: history,
    visibleElements: elements
  });

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      temperature: 0.1,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]
    })
  });

  if (!response.ok) {
    throw new Error(`LLM call failed with status: ${response.status}`);
  }

  const result = await response.json();
  const rawContent = result.choices[0].message.content.trim();
  
  // Clean markdown fencing if present
  const cleanJson = rawContent.replace(/^```json\s*/, '').replace(/```$/, '').trim();
  return JSON.parse(cleanJson) as AgentAction;
}
