export interface DOMElementSummary {
  id: number;
  tagName: string;
  text: string;
  selector: string;
  role?: string;
  type?: string;
  placeholder?: string;
}

export type AgentAction =
  | { type: 'click'; elementId: number; reasoning: string }
  | { type: 'type'; elementId: number; text: string; reasoning: string }
  | { type: 'navigate'; url: string; reasoning: string }
  | { type: 'assert'; condition: string; elementId?: number; passed: boolean; reasoning: string }
  | { type: 'finish'; success: boolean; summary: string };

export interface QAExecutionStep {
  stepNumber: number;
  action: AgentAction;
  domSnapshotCount: number;
  screenshotBase64?: string;
  timestamp: string;
}

export interface QAReport {
  targetUrl: string;
  objective: string;
  status: 'PASSED' | 'FAILED' | 'ABORTED';
  totalSteps: number;
  steps: QAExecutionStep[];
  errors: string[];
}
