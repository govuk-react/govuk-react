import * as ErrorSummary from 'govuk-react/error-summary';
import type { FieldError } from '../journeys';

export function FormErrorSummary({ errors }: { errors: FieldError[] }) {
  if (!errors.length) return null;
  return (
    <ErrorSummary.Composite
      title="There is a problem"
      errors={errors.map(({ id, text }) => ({ href: `#${id}`, children: text }))}
    />
  );
}
