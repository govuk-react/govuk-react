import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

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

function isNotEmpty(obj) {
  return Object.keys(obj).some((key) => obj[key]?.length > 0);
}

const toggle = (array, newItem) =>
  array.includes(newItem) ? array.filter((existingItem) => existingItem !== newItem) : [...array, newItem];

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [nationality, setNationality] = useState<string[]>([]);
  const [dob, setDob] = useState<DateValue>({ day: '', month: '', year: '' });
  const [animal, setAnimal] = useState<string>();
  const [hasMultiplePets, setHasMultiplePets] = useState<string>();
  const [petPhoto, setPetPhoto] = useState<FileList>();
  const [errors, setErrors] = useState<{
    firstName?: string;
    description?: string;
    nationality?: string;
    dob?: string;
    animal?: string;
    petPhoto?: string;
    hasMultiplePets?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const handleSubmit = useCallback(() => {
    if (isSubmitting) return;
    const newErrors = {
      firstName: validateFirstName(firstName),
      description: validateDescription(description),
      nationality: validateNationality(nationality),
      dob: validateDateOfBirth(dob),
      animal: validateAnimal(animal),
      petPhoto: validatePetPhoto(petPhoto),
      hasMultiplePets: validateMultiplePets(hasMultiplePets),
    };

    if (isNotEmpty(newErrors)) {
      setErrors(newErrors);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        // simulate async submission
        setErrors(null);
        setHasSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    }
  }, [isSubmitting, firstName, animal, description, nationality, dob, hasMultiplePets, petPhoto]);

  return (
    <>
      {!hasSubmitted && (
        <GovUK.LoadingBox loading={isSubmitting}>
          <GovUK.BackLink asChild>
            <Link to="/forms">Home</Link>
          </GovUK.BackLink>
          {errors && !!Object.keys(errors).length && (
            <GovUK.ErrorSummary.Composite title="Error summary" description="Please address the following issues">
              {Object.keys(errors).map((key) => (
                <GovUK.ErrorSummary.ListItemComposite key={key} href={`#${key}`}>
                  {errors[key]}
                </GovUK.ErrorSummary.ListItemComposite>
              ))}
            </GovUK.ErrorSummary.Composite>
          )}
          <GovUK.Fieldset.Composite legend="About you" legendSize="m">
            <GovUK.Input.Field
              id="firstName"
              name="firstName"
              label="First name"
              hint="You can find this on your passport"
              errorMessage={errors?.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <GovUK.Textarea.Field
              id="description"
              name="description"
              label="Description of what you saw"
              hint="Enter as many words as you like"
              errorMessage={errors?.description}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <GovUK.Checkboxes.Field idPrefix="nationality" legend="Nationality" errorMessage={errors?.nationality}>
              {nationalities.map(({ value, label, hint }, index) => (
                <GovUK.Checkboxes.ItemComposite
                  key={value}
                  id={index ? `nationality-${index + 1}` : 'nationality'}
                  name="nationality"
                  value={value}
                  label={label}
                  hint={hint}
                  checked={nationality.includes(value)}
                  onChange={() => setNationality((prev) => toggle(prev, value))}
                />
              ))}
            </GovUK.Checkboxes.Field>
            <DateOfBirth name="dob" value={dob} onChange={setDob} errorMessage={errors?.dob} />
          </GovUK.Fieldset.Composite>
          <GovUK.Fieldset.Composite legend="About your pet" legendSize="m">
            <GovUK.Select.Field
              id="animal"
              name="animal"
              label="What animal is your pet"
              hint="A cat for example"
              errorMessage={errors?.animal}
              onChange={(e) => setAnimal(e.target.value)}
              value={animal ?? ''}
            >
              {animalOptions}
            </GovUK.Select.Field>
            <GovUK.FileUpload.Field
              id="petPhoto"
              name="petPhoto"
              label="Please upload a recent photograph"
              hint="This can be in either JPG or PNG format"
              accept=".jpg, .png"
              errorMessage={errors?.petPhoto}
              onChange={(event) => setPetPhoto(event.target.files)}
            />
            <GovUK.Radios.Field
              idPrefix="hasMultiplePets"
              legend="Do you have more than one pet?"
              errorMessage={errors?.hasMultiplePets}
              inline
            >
              <GovUK.Radios.ItemComposite
                id="hasMultiplePets"
                name="hasMultiplePets"
                value="yes"
                label="Yes"
                checked={hasMultiplePets === 'yes'}
                onChange={() => setHasMultiplePets('yes')}
              />
              <GovUK.Radios.ItemComposite
                id="hasMultiplePets-2"
                name="hasMultiplePets"
                value="no"
                label="No"
                checked={hasMultiplePets === 'no'}
                onChange={() => setHasMultiplePets('no')}
              />
            </GovUK.Radios.Field>
          </GovUK.Fieldset.Composite>
          <GovUK.Button.Composite onClick={handleSubmit} disabled={isSubmitting}>
            Submit
          </GovUK.Button.Composite>
        </GovUK.LoadingBox>
      )}
      {hasSubmitted && (
        <Results
          backLink="/forms/form"
          onBackClick={() => setHasSubmitted(false)}
          firstName={firstName}
          description={description}
          nationality={nationality}
          dob={dob}
          animal={animal}
          hasMultiplePets={hasMultiplePets}
          petPhoto={petPhoto}
        />
      )}
    </>
  );
};

export default Form;
