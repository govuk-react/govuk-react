import type { SubmissionResult } from '@conform-to/react/future';

/** What each action returns: where to go next, or Conform's result for the page to render. */
export type ActionResult =
  { success: true; redirectTo: string } | { success: false; result: SubmissionResult<string[]> };
