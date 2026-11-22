import { useCallback, useEffect, useState } from 'react';
import type { FormMetadata } from '@conform-to/react/future';
import * as ErrorSummary from 'govuk-react/error-summary';

/**
 * Counts submits that fail validation in the browser, so the error summary can take focus each
 * time, as the Design System asks, instead of Conform focusing the first invalid field.
 */
export function useFailedSubmits() {
  const [count, setCount] = useState(0);
  const onError = useCallback(({ intent }: { intent?: { type: string } }) => {
    if (intent?.type === 'submit') setCount((current) => current + 1);
  }, []);
  return { count, onError };
}

/** Adds ‘Error: ’ to the start of the page title while the form has errors. */
function useErrorTitle(hasErrors: boolean) {
  useEffect(() => {
    const title = document.title.replace(/^Error: /, '');
    document.title = hasErrors ? `Error: ${title}` : title;
  }, [hasErrors]);
}

type FormErrorSummaryProps = {
  form: FormMetadata<string[]>;
  /** From `useFailedSubmits`. */
  failedSubmits: number;
};

/** Lists the form's errors, each linking to its field, at the top of the page. */
export function FormErrorSummary({ form, failedSubmits }: FormErrorSummaryProps) {
  const errors = [
    ...(form.errors ?? []).map((message) => ({ children: message })),
    ...Object.entries(form.fieldErrors).flatMap(([name, messages]) =>
      messages.slice(0, 1).map((message) => ({ href: `#${form.getField(name).id}`, children: message }))
    ),
  ];
  useErrorTitle(errors.length > 0);

  if (errors.length === 0) return null;
  return <ErrorSummary.Composite key={failedSubmits} title="There is a problem" errors={errors} />;
}
