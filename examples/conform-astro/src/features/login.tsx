import { parseSubmission, report, useForm, type FormError, type SubmissionResult } from '@conform-to/react/future';
import { Button } from 'govuk-react/button';
import * as Checkboxes from 'govuk-react/checkboxes';
import { FormGroup } from 'govuk-react/form-group';
import { GridColumn } from 'govuk-react/grid-column';
import { GridRow } from 'govuk-react/grid-row';
import { Heading } from 'govuk-react/heading';
import { InputField } from 'govuk-react/input';
import * as PasswordInput from 'govuk-react/password-input';
import type { ActionResult } from '../action-result';
import { fieldProps } from '../components/fields';
import { FormErrorSummary, useFailedSubmits } from '../components/FormErrorSummary';

type LoginFormProps = {
  action: string;
  lastResult?: SubmissionResult | null;
};

export function validateLogin(value: Record<string, unknown>): FormError | null {
  const fieldErrors: Record<string, string[]> = {};

  if (!value.email) {
    fieldErrors.email = ['Enter your email address'];
  } else if (typeof value.email !== 'string' || !value.email.includes('@')) {
    fieldErrors.email = ['Enter an email address in the correct format, like name@example.com'];
  }

  if (!value.password) {
    fieldErrors.password = ['Enter your password'];
  }

  return Object.keys(fieldErrors).length > 0 ? { formErrors: [], fieldErrors } : null;
}

export async function login(formData: FormData): Promise<ActionResult> {
  const submission = parseSubmission(formData);
  const error = validateLogin(submission.payload);

  if (error) {
    return {
      success: false,
      result: report(submission, { error, hideFields: ['password'] }),
    };
  }

  const { email, remember } = submission.payload;
  return {
    success: true,
    redirectTo: `/?value=${encodeURIComponent(JSON.stringify({ email, remember }))}`,
  };
}

export function LoginForm({ action, lastResult = null }: LoginFormProps) {
  const failedSubmits = useFailedSubmits();
  const { form, fields } = useForm({
    lastResult,
    onValidate: ({ payload }) => validateLogin(payload),
    onError: failedSubmits.onError,
  });

  return (
    <GridRow>
      <GridColumn width="two-thirds">
        <FormErrorSummary form={form} failedSubmits={failedSubmits.count} />
        <Heading size="l" headingLevel={1}>
          Sign in
        </Heading>
        <form {...form.props} method="post" action={action}>
          <InputField
            label="Email address"
            {...fieldProps(fields.email)}
            type="email"
            autoComplete="email"
            spellCheck={false}
          />
          <PasswordInput.Field label="Password" {...fieldProps(fields.password)} autoComplete="current-password" />
          <FormGroup>
            <Checkboxes.Root small>
              <Checkboxes.ItemComposite
                id={fields.remember.id}
                name={fields.remember.name}
                defaultChecked={fields.remember.defaultChecked}
                label="Remember me"
              />
            </Checkboxes.Root>
          </FormGroup>
          <Button>Sign in</Button>
        </form>
      </GridColumn>
    </GridRow>
  );
}
