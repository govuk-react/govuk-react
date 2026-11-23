import { Button } from 'govuk-react/button';
import { InputField } from 'govuk-react/input';
import * as Radios from 'govuk-react/radios';
import { contactMethods, errorFor, type Contact, type FieldError } from '../journeys';
import { Columns } from './Columns';
import { FormErrorSummary } from './FormErrorSummary';

export type ContactPageProps = { values: Contact; errors: FieldError[] };

export function ContactPage({ values, errors }: ContactPageProps) {
  return (
    <Columns>
      <FormErrorSummary errors={errors} />
      <form method="post" noValidate>
        <Radios.Field
          idPrefix="method"
          legend="How would you like to be contacted?"
          legendSize="l"
          legendIsPageHeading
          hint="Select one option"
          errorMessage={errorFor(errors, 'method')}
        >
          {contactMethods.map((method) => (
            <Radios.ItemComposite
              key={method.value}
              id={method.value === contactMethods[0].value ? 'method' : `method-${method.value}`}
              name="method"
              value={method.value}
              label={method.text}
              defaultChecked={values.method === method.value}
              conditional={
                'detail' in method && (
                  <InputField
                    name={method.detail.name}
                    type={method.detail.type}
                    label={method.detail.label}
                    defaultValue={values[method.detail.name]}
                    errorMessage={errorFor(errors, method.detail.name)}
                    autoComplete={method.detail.type}
                    spellCheck={false}
                    width={20}
                  />
                )
              }
            />
          ))}
        </Radios.Field>
        <Button>Save and continue</Button>
      </form>
    </Columns>
  );
}
