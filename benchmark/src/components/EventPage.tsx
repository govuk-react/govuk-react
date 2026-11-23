import { Button } from 'govuk-react/button';
import * as CharacterCount from 'govuk-react/character-count';
import { Heading } from 'govuk-react/heading';
import { InputField } from 'govuk-react/input';
import { descriptionMaxLength, errorFor, type Event, type FieldError } from '../journeys';
import { Columns } from './Columns';
import { FormErrorSummary } from './FormErrorSummary';

export type EventPageProps = { values: Event; errors: FieldError[] };

export function EventPage({ values, errors }: EventPageProps) {
  return (
    <Columns>
      <FormErrorSummary errors={errors} />
      <Heading size="l" headingLevel={1}>
        Event details
      </Heading>
      <form method="post" noValidate>
        <InputField name="name" label="Event name" defaultValue={values.name} errorMessage={errorFor(errors, 'name')} />
        <CharacterCount.Field
          name="description"
          label="Describe your event"
          hint="Include where and when it takes place"
          maxLength={descriptionMaxLength}
          defaultValue={values.description}
          errorMessage={errorFor(errors, 'description')}
        />
        <Button>Save and continue</Button>
      </form>
    </Columns>
  );
}
