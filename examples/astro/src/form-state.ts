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
  const data: ActionResult | undefined = actionResult && !actionResult.error ? actionResult.data : undefined;
  const lastResult = data && 'result' in data ? data.result : null;

  return {
    // The page's own path, without any query string it was linked with.
    action: `${Astro.url.pathname}${action.queryString}`,
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
