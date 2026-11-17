import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import {
  validateNationality,
  validateMultiplePets,
  validateFirstName,
  validateDescription,
  validateDateOfBirth,
  validateAnimal,
  validatePetPhoto,
} from './validators/validators';

import Results from './components/results';
import DateOfBirth, { type DateValue } from './components/date-of-birth';
import { animalOptions, nationalities } from './components/options';

type FormValues = {
  firstName: string;
  description: string;
  nationality: string[];
  dob: {
    year?: string | number;
    month?: string | number;
    day?: string | number;
  };
  animal: string;
  hasMultiplePets: string;
  petPhoto?: FileList;
  petPhotoString?: string;
};
/** Final Form only shows errors after a failed submit. */
const shownError = (meta: { touched?: boolean; submitFailed?: boolean; error?: string }) =>
  meta.touched && meta.submitFailed ? meta.error : undefined;

/** The checkbox Field is typed by its checkbox value, not the group's array, so read the array from all values. */
const validateNationalityField = (_value: unknown, allValues: object) =>
  validateNationality('nationality' in allValues && Array.isArray(allValues.nationality) ? allValues.nationality : []);

const FinalForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | undefined>();
  const handleFormSubmit = useCallback(
    (values: FormValues) => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      setTimeout(() => {
        // simulate async submission
        setSubmittedData(values);
        setHasSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    },
    [isSubmitting]
  );

  return (
    <>
      {!hasSubmitted && (
        <Form<FormValues>
          onSubmit={handleFormSubmit}
          initialValues={{ dob: { day: '', month: '', year: '' } }}
          render={({ handleSubmit: handleSubmitInner, errors, touched, submitFailed, form }) => {
            const errorsToShow = Object.keys(errors).filter((key) => touched[key]);
            form.pauseValidation();
            const handleSubmit = (e) => {
              form.resumeValidation();
              const res = handleSubmitInner(e);
              form.pauseValidation();
              return res;
            };
            return (
              <form onSubmit={handleSubmit}>
                <GovUK.LoadingBox loading={isSubmitting}>
                  <GovUK.BackLink asChild>
                    <Link to="/forms">Home</Link>
                  </GovUK.BackLink>
                  {!!errorsToShow?.length && (
                    <GovUK.ErrorSummary
                      heading="Error summary"
                      description="Please address the following issues"
                      errors={errorsToShow.map((key) => ({
                        targetName: key,
                        text: errors[key],
                      }))}
                    />
                  )}
                  <GovUK.Fieldset.Composite legend="About you" legendSize="m">
                    <Field name="firstName" validate={validateFirstName}>
                      {({ input, meta }) => (
                        <GovUK.Input.Field
                          {...input}
                          id="firstName"
                          label="First name"
                          hint="You can find this on your passport"
                          errorMessage={shownError(meta)}
                        />
                      )}
                    </Field>
                    <Field name="description" validate={validateDescription}>
                      {({ input, meta }) => (
                        <GovUK.Textarea.Field
                          {...input}
                          id="description"
                          label="Description of what you saw"
                          hint="Enter as many words as you like"
                          errorMessage={shownError(meta)}
                        />
                      )}
                    </Field>
                    <GovUK.Checkboxes.Field
                      idPrefix="nationality"
                      legend="Nationality"
                      errorMessage={touched?.nationality && submitFailed ? errors?.nationality : undefined}
                    >
                      {nationalities.map(({ value, label, hint }, index) => (
                        <Field<string>
                          key={value}
                          type="checkbox"
                          name="nationality"
                          value={value}
                          validate={index === 0 ? validateNationalityField : undefined}
                        >
                          {({ input }) => (
                            <GovUK.Checkboxes.ItemComposite
                              {...input}
                              id={index ? `nationality-${index + 1}` : 'nationality'}
                              label={label}
                              hint={hint}
                            />
                          )}
                        </Field>
                      ))}
                    </GovUK.Checkboxes.Field>
                    <Field<DateValue> name="dob" validate={validateDateOfBirth}>
                      {({ input, meta }) => (
                        <DateOfBirth
                          name={input.name}
                          value={input.value}
                          onChange={input.onChange}
                          onBlur={() => input.onBlur()}
                          errorMessage={shownError(meta)}
                        />
                      )}
                    </Field>
                  </GovUK.Fieldset.Composite>
                  <GovUK.Fieldset.Composite legend="About your pet" legendSize="m">
                    <Field name="animal" validate={validateAnimal}>
                      {({ input, meta }) => (
                        <GovUK.Select.Field
                          {...input}
                          id="animal"
                          label="What animal is your pet"
                          hint="A cat for example"
                          errorMessage={shownError(meta)}
                        >
                          {animalOptions}
                        </GovUK.Select.Field>
                      )}
                    </Field>
                    <Field<FileList> name="petPhoto" validate={validatePetPhoto}>
                      {({ input: { value, onChange, ...input }, meta }) => (
                        <GovUK.FileUpload.Field
                          {...input}
                          id="petPhoto"
                          label="Please upload a recent photograph"
                          hint="This can be in either JPG or PNG format"
                          accept=".jpg, .png"
                          errorMessage={shownError(meta)}
                          onChange={({ target }) => onChange(target.files)}
                        />
                      )}
                    </Field>
                    <GovUK.Radios.Field
                      idPrefix="hasMultiplePets"
                      legend="Do you have more than one pet?"
                      errorMessage={touched?.hasMultiplePets && submitFailed ? errors?.hasMultiplePets : undefined}
                      inline
                    >
                      {['yes', 'no'].map((value, index) => (
                        <Field<string>
                          key={value}
                          type="radio"
                          name="hasMultiplePets"
                          value={value}
                          validate={index === 0 ? validateMultiplePets : undefined}
                        >
                          {({ input }) => (
                            <GovUK.Radios.ItemComposite
                              {...input}
                              id={index ? 'hasMultiplePets-2' : 'hasMultiplePets'}
                              label={value === 'yes' ? 'Yes' : 'No'}
                            />
                          )}
                        </Field>
                      ))}
                    </GovUK.Radios.Field>
                  </GovUK.Fieldset.Composite>
                  <GovUK.Button.Composite onClick={handleSubmit} disabled={isSubmitting}>
                    Submit
                  </GovUK.Button.Composite>
                </GovUK.LoadingBox>
              </form>
            );
          }}
        />
      )}
      {hasSubmitted && (
        <Results backLink="/forms/final-form" onBackClick={() => setHasSubmitted(false)} {...submittedData} />
      )}
    </>
  );
};

export default FinalForm;
