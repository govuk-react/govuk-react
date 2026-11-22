import type { SubmissionResult } from '@conform-to/react/future';

/** What each form's handler returns: the values it accepted, or Conform's result for the page to render. */
export type HandlerResult =
  { success: true; value: Record<string, unknown> } | { success: false; result: SubmissionResult<string[]> };

/** What each action returns: where to go next, or Conform's result for the page to render. */
export type ActionResult =
  { success: true; redirectTo: string } | { success: false; result: SubmissionResult<string[]> };
