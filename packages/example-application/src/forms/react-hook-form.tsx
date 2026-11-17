import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import { Controller, useForm } from 'react-hook-form';

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

const ReactHookForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm<FormValues>({
    reValidateMode: 'onSubmit',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues>();
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

  const errorsToShow = Object.keys(errors);
  const shownError = (message?: string) => (submitCount > 0 ? message : undefined);

  return (
    <>
      {!hasSubmitted && (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                  text: errors[key].message,
                }))}
              />
            )}
            <GovUK.Fieldset.Composite legend="About you" legendSize="m">
              <GovUK.Input.Field
                id="firstName"
                label="First name"
                hint="You can find this on your passport"
                errorMessage={shownError(errors?.firstName?.message)}
                {...register('firstName', { validate: validateFirstName })}
              />
              <GovUK.Textarea.Field
                id="description"
                label="Description of what you saw"
                hint="Enter as many words as you like"
                errorMessage={shownError(errors?.description?.message)}
                {...register('description', { validate: validateDescription })}
              />
              <GovUK.Checkboxes.Field
                idPrefix="nationality"
                legend="Nationality"
                errorMessage={shownError(errors?.nationality?.message)}
              >
                {nationalities.map(({ value, label, hint }, index) => (
                  <GovUK.Checkboxes.ItemComposite
                    key={value}
                    id={index ? `nationality-${index + 1}` : 'nationality'}
                    value={value}
                    label={label}
                    hint={hint}
                    {...register('nationality', { validate: validateNationality })}
                  />
                ))}
              </GovUK.Checkboxes.Field>
              <Controller
                name="dob"
                control={control}
                defaultValue={{ day: '', month: '', year: '' }}
                rules={{ validate: validateDateOfBirth }}
                render={({ field }) => (
                  <DateOfBirth
                    name={field.name}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    errorMessage={shownError(errors?.dob?.message)}
                  />
                )}
              />
            </GovUK.Fieldset.Composite>
            <GovUK.Fieldset.Composite legend="About your pet" legendSize="m">
              <GovUK.Select.Field
                id="animal"
                label="What animal is your pet"
                hint="A cat for example"
                errorMessage={shownError(errors?.animal?.message)}
                {...register('animal', { validate: validateAnimal })}
              >
                {animalOptions}
              </GovUK.Select.Field>
              <GovUK.FileUpload.Field
                id="petPhoto"
                label="Please upload a recent photograph"
                hint="This can be in either JPG or PNG format"
                accept=".jpg, .png"
                errorMessage={shownError(errors?.petPhoto?.message)}
                {...register('petPhoto', { validate: validatePetPhoto })}
              />
              <GovUK.Radios.Field
                idPrefix="hasMultiplePets"
                legend="Do you have more than one pet?"
                errorMessage={shownError(errors?.hasMultiplePets?.message)}
                inline
              >
                <GovUK.Radios.ItemComposite
                  id="hasMultiplePets"
                  value="yes"
                  label="Yes"
                  {...register('hasMultiplePets', { validate: validateMultiplePets })}
                />
                <GovUK.Radios.ItemComposite
                  id="hasMultiplePets-2"
                  value="no"
                  label="No"
                  {...register('hasMultiplePets', { validate: validateMultiplePets })}
                />
              </GovUK.Radios.Field>
            </GovUK.Fieldset.Composite>
            <GovUK.Button.Composite type="submit" disabled={isSubmitting}>
              Submit
            </GovUK.Button.Composite>
          </GovUK.LoadingBox>
        </form>
      )}
      {hasSubmitted && (
        <Results backLink="/forms/react-hook-form" onBackClick={() => setHasSubmitted(false)} {...submittedData} />
      )}
    </>
  );
};

export default ReactHookForm;
