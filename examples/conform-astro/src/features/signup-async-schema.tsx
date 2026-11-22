import { memoize, parseSubmission, report, useForm, type SubmissionResult } from '@conform-to/react/future';
import { coerceFormValue } from '@conform-to/zod/v4/future';
import { useMemo } from 'react';
import { z } from 'zod';
import type { ActionResult } from '../action-result';
import { path } from '../path';
import { FormErrorSummary, useFailedSubmits } from '../components/FormErrorSummary';
import { hideFields, isUsernameAvailable, passwordsSchema, SignupPage, usernameSchema, usernameTaken } from './signup';

type SignupAsyncSchemaFormProps = {
  action: string;
  lastResult?: SubmissionResult<string[]> | null;
};

/** The signup schema, with the username check inside it. */
export function createSignupAsyncSchema(checks: { isUsernameAvailable: (username: string) => Promise<boolean> }) {
  const isAvailable = memoize(checks.isUsernameAvailable);

  return coerceFormValue(
    z
      .object({
        username: usernameSchema.refine((username) => isAvailable(username), {
          error: (issue) => usernameTaken(String(issue.input)),
        }),
      })
      .and(passwordsSchema)
  );
}

export async function signupWithAsyncSchema(formData: FormData): Promise<ActionResult> {
  const schema = createSignupAsyncSchema({ isUsernameAvailable });
  const submission = parseSubmission(formData);
  const result = await schema.safeParseAsync(submission.payload);

  if (!result.success) {
    return {
      success: false,
      result: report(submission, { hideFields, error: { issues: result.error.issues } }),
    };
  }

  return {
    success: true,
    redirectTo: path(`/?value=${encodeURIComponent(JSON.stringify({ username: result.data.username }))}`),
  };
}

export function SignupAsyncSchemaForm({ action, lastResult = null }: SignupAsyncSchemaFormProps) {
  const schema = useMemo(() => createSignupAsyncSchema({ isUsernameAvailable }), []);
  const failedSubmits = useFailedSubmits();
  const { form, fields } = useForm(schema, { lastResult, onError: failedSubmits.onError });

  return (
    <SignupPage
      errorSummary={<FormErrorSummary form={form} failedSubmits={failedSubmits.count} />}
      formProps={{ ...form.props, action }}
      fields={fields}
    />
  );
}
