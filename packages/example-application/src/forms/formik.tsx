import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';

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
import DateOfBirth from './components/date-of-birth';
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

/** Formik can report an array of errors; show the first. */
const firstError = (error: unknown) => (error ? String(Array.isArray(error) ? error[0] : error) : undefined);

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
        <Formik<FormValues>
          initialValues={{
            firstName: '',
            description: '',
            nationality: [],
            dob: { day: '', month: '', year: '' },
            animal: '',
            petPhoto: null,
            hasMultiplePets: null,
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleFormSubmit}
          render={({ errors, touched, setFieldValue, setFieldTouched }) => {
            const errorsToShow = Object.keys(errors).filter((key) => touched[key]);
            return (
              <Form>
                <GovUK.LoadingBox loading={isSubmitting}>
                  <GovUK.BackLink asChild>
                    <Link to="/forms">Home</Link>
                  </GovUK.BackLink>
                  {!!errorsToShow?.length && (
                    <GovUK.ErrorSummary.Composite
                      title="Error summary"
                      description="Please address the following issues"
                    >
                      {errorsToShow.map((key) => (
                        <GovUK.ErrorSummary.ListItemComposite key={key} href={`#${key}`}>
                          {Array.isArray(errors[key]) ? errors[key][0] : errors[key]}
                        </GovUK.ErrorSummary.ListItemComposite>
                      ))}
                    </GovUK.ErrorSummary.Composite>
                  )}
                  <GovUK.Fieldset.Composite legend="About you" legendSize="m">
                    <Field name="firstName" validate={validateFirstName}>
                      {({ field, meta }) => (
                        <GovUK.Input.Field
                          {...field}
                          id="firstName"
                          label="First name"
                          hint="You can find this on your passport"
                          errorMessage={meta.touched ? meta.error : undefined}
                        />
                      )}
                    </Field>
                    <Field name="description" validate={validateDescription}>
                      {({ field, meta }) => (
                        <GovUK.Textarea.Field
                          {...field}
                          id="description"
                          label="Description of what you saw"
                          hint="Enter as many words as you like"
                          errorMessage={meta.touched ? meta.error : undefined}
                        />
                      )}
                    </Field>
                    <GovUK.Checkboxes.Field
                      idPrefix="nationality"
                      legend="Nationality"
                      errorMessage={touched?.nationality ? firstError(errors?.nationality) : undefined}
                    >
                      {nationalities.map(({ value, label, hint }, index) => (
                        <Field
                          key={value}
                          type="checkbox"
                          name="nationality"
                          value={value}
                          validate={validateNationality}
                        >
                          {({ field }) => (
                            <GovUK.Checkboxes.ItemComposite
                              {...field}
                              id={index ? `nationality-${index + 1}` : 'nationality'}
                              label={label}
                              hint={hint}
                            />
                          )}
                        </Field>
                      ))}
                    </GovUK.Checkboxes.Field>
                    <Field name="dob" validate={validateDateOfBirth}>
                      {({ field, meta }) => (
                        <DateOfBirth
                          name={field.name}
                          value={field.value}
                          onChange={(value) => setFieldValue('dob', value)}
                          onBlur={() => setFieldTouched('dob', true, false)}
                          errorMessage={meta.touched ? firstError(meta.error) : undefined}
                        />
                      )}
                    </Field>
                  </GovUK.Fieldset.Composite>
                  <GovUK.Fieldset.Composite legend="About your pet" legendSize="m">
                    <Field name="animal" validate={validateAnimal}>
                      {({ field, meta }) => (
                        <GovUK.Select.Field
                          {...field}
                          id="animal"
                          label="What animal is your pet"
                          hint="A cat for example"
                          errorMessage={meta.touched ? meta.error : undefined}
                        >
                          {animalOptions}
                        </GovUK.Select.Field>
                      )}
                    </Field>
                    <Field name="petPhoto" validate={validatePetPhoto}>
                      {({ field: { value, onChange, ...field }, meta }) => (
                        <GovUK.FileUpload.Field
                          {...field}
                          id="petPhoto"
                          label="Please upload a recent photograph"
                          hint="This can be in either JPG or PNG format"
                          accept=".jpg, .png"
                          errorMessage={meta.touched ? meta.error : undefined}
                          onChange={(event) => setFieldValue('petPhoto', event.target.files)}
                        />
                      )}
                    </Field>
                    <GovUK.Radios.Field
                      idPrefix="hasMultiplePets"
                      legend="Do you have more than one pet?"
                      errorMessage={touched?.hasMultiplePets ? firstError(errors?.hasMultiplePets) : undefined}
                      inline
                    >
                      {['yes', 'no'].map((value, index) => (
                        <Field
                          key={value}
                          type="radio"
                          name="hasMultiplePets"
                          value={value}
                          validate={validateMultiplePets}
                        >
                          {({ field }) => (
                            <GovUK.Radios.ItemComposite
                              {...field}
                              id={index ? 'hasMultiplePets-2' : 'hasMultiplePets'}
                              label={value === 'yes' ? 'Yes' : 'No'}
                            />
                          )}
                        </Field>
                      ))}
                    </GovUK.Radios.Field>
                  </GovUK.Fieldset.Composite>
                  <GovUK.Button.Composite type="submit" disabled={isSubmitting}>
                    Submit
                  </GovUK.Button.Composite>
                </GovUK.LoadingBox>
              </Form>
            );
          }}
        />
      )}
      {hasSubmitted && (
        <>
          <pre>{JSON.stringify(submittedData)}</pre>
          <Results backLink="/forms/formik" onBackClick={() => setHasSubmitted(false)} {...submittedData} />
        </>
      )}
    </>
  );
};

export default FinalForm;
