import type { SubmissionResult } from '@conform-to/react/future';
import type { AstroGlobal } from 'astro';
import type { ActionResult } from './action-result';

type Action = Parameters<AstroGlobal['getActionResult']>[0] & { queryString: string };

/**
 * What a page needs from its action: the URL its form posts to, which keeps the submission on
 * this page when JavaScript is off, where to redirect after success, and Conform's last result.
 */
export function formState(Astro: AstroGlobal, action: Action) {
  const actionResult = Astro.getActionResult(action);
  const formAction = new URL(Astro.url);
  for (const [key, value] of new URLSearchParams(action.queryString)) {
    formAction.searchParams.append(key, value);
  }
  const data: ActionResult | undefined = actionResult && !actionResult.error ? actionResult.data : undefined;
  const lastResult = data && 'result' in data ? data.result : null;

  return {
    action: formAction.toString(),
    redirectTo: data && 'redirectTo' in data ? data.redirectTo : undefined,
    lastResult,
    hasErrors: hasErrors(lastResult),
  };
}

function hasErrors(result: SubmissionResult<string[]> | null) {
  const error = result?.error;
  if (!error) return false;
  return (
    Boolean(error.formErrors?.length) || Object.values(error.fieldErrors ?? {}).some((messages) => messages?.length)
  );
}
