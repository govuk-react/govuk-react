import { Button } from 'govuk-react/button';
import { Heading } from 'govuk-react/heading';
import { InputField } from 'govuk-react/input';
import * as PasswordInput from 'govuk-react/password-input';
import { errorFor, type Account, type FieldError } from '../journeys';
import { Columns } from './Columns';
import { FormErrorSummary } from './FormErrorSummary';

export type AccountPageProps = { values: Account; errors: FieldError[] };

export function AccountPage({ values, errors }: AccountPageProps) {
  return (
    <Columns>
      <FormErrorSummary errors={errors} />
      <Heading size="l" headingLevel={1}>
        Create an account
      </Heading>
      <form method="post" noValidate>
        <InputField
          name="username"
          label="Username"
          hint="Must only include letters a to z and numbers"
          defaultValue={values.username}
          errorMessage={errorFor(errors, 'username')}
          autoComplete="username"
          spellCheck={false}
        />
        <PasswordInput.Field
          name="password"
          label="Create a password"
          hint="Must be at least 8 characters"
          errorMessage={errorFor(errors, 'password')}
          autoComplete="new-password"
        />
        <PasswordInput.Field
          name="confirmPassword"
          label="Confirm password"
          errorMessage={errorFor(errors, 'confirmPassword')}
          autoComplete="new-password"
        />
        <Button>Create account</Button>
      </form>
    </Columns>
  );
}
