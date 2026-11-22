import {
  memoize,
  parseSubmission,
  report,
  useForm,
  type BaseFieldMetadata,
  type SubmissionResult,
} from '@conform-to/react/future';
import { coerceFormValue } from '@conform-to/zod/v4/future';
import { Button } from 'govuk-react/button';
import { GridColumn } from 'govuk-react/grid-column';
import { GridRow } from 'govuk-react/grid-row';
import { Heading } from 'govuk-react/heading';
import { InputField } from 'govuk-react/input';
import * as PasswordInput from 'govuk-react/password-input';
import { useMemo, type ComponentProps, type ReactNode } from 'react';
import { z } from 'zod';
import type { ActionResult } from '../action-result';
import { fieldProps } from '../components/fields';
import { FormErrorSummary, useFailedSubmits } from '../components/FormErrorSummary';

type SignupFormProps = {
  action: string;
  lastResult?: SubmissionResult<string[]> | null;
};

const takenUsernames = ['admin', 'example'];

/** Checks the username isn't taken, as a server would, after a delay. */
export async function isUsernameAvailable(username: string) {
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 500));
  return !takenUsernames.includes(username.toLowerCase());
}

export const usernameTaken = (username: string) => `That username is already taken. Try another, like ${username}1`;

export const usernameSchema = z
  .string({ error: 'Enter a username' })
  .regex(/^[a-zA-Z0-9]+$/, 'Username must only include letters a to z and numbers');

export const passwordsSchema = z
  .object({
    password: z.string({ error: 'Enter a password' }).min(8, 'Password must be 8 characters or more'),
    confirmPassword: z.string({ error: 'Confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export const signupSchema = coerceFormValue(z.object({ username: usernameSchema }).and(passwordsSchema));

/** Passwords aren't sent back to the browser when the form has errors. */
export const hideFields = ['password', 'confirmPassword'];

export async function signup(formData: FormData): Promise<ActionResult> {
  const submission = parseSubmission(formData);
  const result = signupSchema.safeParse(submission.payload);

  if (!result.success) {
    return {
      success: false,
      result: report(submission, { hideFields, error: { issues: result.error.issues } }),
    };
  }

  if (!(await isUsernameAvailable(result.data.username))) {
    return {
      success: false,
      result: report(submission, {
        hideFields,
        error: { formErrors: [], fieldErrors: { username: [usernameTaken(result.data.username)] } },
      }),
    };
  }

  return {
    success: true,
    redirectTo: `/?value=${encodeURIComponent(JSON.stringify({ username: result.data.username }))}`,
  };
}

type SignupFieldsProps = {
  errorSummary: ReactNode;
  formProps: ComponentProps<'form'>;
  fields: Record<'username' | 'password' | 'confirmPassword', BaseFieldMetadata<unknown, string[]>>;
};

/** The create an account page, for both versions of the form. */
export function SignupPage({ errorSummary, formProps, fields }: SignupFieldsProps) {
  return (
    <GridRow>
      <GridColumn width="two-thirds">
        {errorSummary}
        <Heading size="l" headingLevel={1}>
          Create an account
        </Heading>
        <form {...formProps} method="post">
          <InputField
            label="Username"
            hint="Must only include letters a to z and numbers"
            {...fieldProps(fields.username)}
            autoComplete="username"
            spellCheck={false}
          />
          <PasswordInput.Field
            label="Create a password"
            hint="Must be at least 8 characters"
            {...fieldProps(fields.password)}
            autoComplete="new-password"
          />
          <PasswordInput.Field
            label="Confirm password"
            {...fieldProps(fields.confirmPassword)}
            autoComplete="new-password"
          />
          <Button>Create account</Button>
        </form>
      </GridColumn>
    </GridRow>
  );
}

export function SignupForm({ action, lastResult = null }: SignupFormProps) {
  const checkUsername = useMemo(() => memoize(isUsernameAvailable), []);
  const failedSubmits = useFailedSubmits();
  const { form, fields } = useForm(signupSchema, {
    lastResult,
    onError: failedSubmits.onError,
    async onValidate({ payload, error }) {
      if (typeof payload.username !== 'string' || error.fieldErrors.username) return error;
      if (await checkUsername(payload.username)) return error;
      return { ...error, fieldErrors: { username: [usernameTaken(payload.username)], ...error.fieldErrors } };
    },
  });

  return (
    <SignupPage
      errorSummary={<FormErrorSummary form={form} failedSubmits={failedSubmits.count} />}
      formProps={{ ...form.props, action }}
      fields={fields}
    />
  );
}
