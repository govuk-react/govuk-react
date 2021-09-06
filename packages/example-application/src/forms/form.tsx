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

function isNotEmpty(obj) {
  return Object.keys(obj).some((key) => obj[key]?.length > 0);
}

const toggle = (array, newItem) =>
  array.includes(newItem) ? array.filter((existingItem) => existingItem !== newItem) : [...array, newItem];

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [description, setDescription] = useState('');
  const [nationality, setNationality] = useState([]);
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [animal, setAnimal] = useState();
  const [hasMultiplePets, setHasMultiplePets] = useState();
  const [petPhoto, setPetPhoto] = useState();
  const [errors, setErrors] = useState();
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
          <GovUK.BackLink as={Link} to="/forms">
            Home
          </GovUK.BackLink>
          {errors && !!Object.keys(errors).length && (
            <GovUK.ErrorSummary
              heading="Error summary"
              description="Please address the following issues"
              errors={Object.keys(errors).map((key) => ({
                targetName: key,
                text: errors[key],
              }))}
            />
          )}
          <GovUK.Fieldset>
            <GovUK.Fieldset.Legend size="M">About you</GovUK.Fieldset.Legend>
            <GovUK.Label mb={4} error={!!errors?.firstName}>
              <GovUK.LabelText>First name</GovUK.LabelText>
              <GovUK.HintText>You can find this on your passport</GovUK.HintText>
              {errors?.firstName && <GovUK.ErrorText>{errors.firstName}</GovUK.ErrorText>}
              <GovUK.Input
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                error={!!errors?.firstName}
              />
            </GovUK.Label>
            <GovUK.TextArea
              mb={8}
              name="description"
              hint="Enter as many words as you like"
              meta={{ error: errors?.description, touched: !!errors?.description }}
              input={{
                value: description,
                onChange: (e) => {
                  setDescription(e.target.value);
                },
              }}
            >
              Description of what you saw
            </GovUK.TextArea>

            <GovUK.FormGroup error={!!errors?.nationality}>
              <GovUK.Label mb={4}>
                <GovUK.LabelText>Nationality</GovUK.LabelText>
                {errors?.nationality && <GovUK.ErrorText>{errors?.nationality}</GovUK.ErrorText>}
                <GovUK.Checkbox
                  name="nationality"
                  hint="including English, Scottish, Welsh and Northern Irish"
                  checked={nationality.includes('british')}
                  onChange={() => setNationality((prev) => toggle(prev, 'british'))}
                >
                  British
                </GovUK.Checkbox>
                <GovUK.Checkbox
                  name="nationality"
                  checked={nationality.includes('irish')}
                  onChange={() => setNationality((prev) => toggle(prev, 'irish'))}
                >
                  Irish
                </GovUK.Checkbox>
                <GovUK.Checkbox
                  name="nationality"
                  checked={nationality.includes('other')}
                  onChange={() => setNationality((prev) => toggle(prev, 'other'))}
                >
                  Citizen of another country
                </GovUK.Checkbox>
              </GovUK.Label>
            </GovUK.FormGroup>

            <GovUK.DateField.Container errorText={errors?.dob}>
              <GovUK.LabelText>Date of birth</GovUK.LabelText>
              {errors?.dob && <GovUK.ErrorText>{errors?.dob}</GovUK.ErrorText>}
              <GovUK.DateField.Input name="dob" value={dob} onChange={setDob} />
            </GovUK.DateField.Container>
          </GovUK.Fieldset>
          <GovUK.Fieldset>
            <GovUK.Fieldset.Legend size="M">About your pet</GovUK.Fieldset.Legend>
            <GovUK.Select
              mb={8}
              name="animal"
              label="What animal is your pet"
              hint="A cat for example"
              input={{ onChange: (e) => setAnimal(e.target.value), value: animal }}
              meta={{ error: errors?.animal, touched: !!errors?.animal }}
            >
              <option value="">Please select...</option>
              <option value="cat">Cat</option>
              <option value="other-feline">Other feline</option>
              <option value="other-non-feline">Other non feline</option>
            </GovUK.Select>
            <GovUK.FileUpload
              mb={8}
              acceptedFormats=".jpg, .png"
              hint="This can be in either JPG or PNG format"
              name="petPhoto"
              meta={{ error: errors?.petPhoto, touched: !!errors?.petPhoto }}
              onChange={(event) => {
                setPetPhoto(event.target.files);
              }}
            >
              Please upload a recent photograph
            </GovUK.FileUpload>
            <GovUK.MultiChoice
              mb={8}
              label="Do you have more than one pet?"
              meta={{ error: errors?.hasMultiplePets, touched: !!errors?.hasMultiplePets }}
            >
              <GovUK.Radio
                name="hasMultiplePets"
                inline
                checked={hasMultiplePets === 'yes'}
                onChange={() => setHasMultiplePets('yes')}
              >
                Yes
              </GovUK.Radio>
              <GovUK.Radio
                name="hasMultiplePets"
                inline
                checked={hasMultiplePets === 'no'}
                onChange={() => setHasMultiplePets('no')}
              >
                No
              </GovUK.Radio>
            </GovUK.MultiChoice>
          </GovUK.Fieldset>
          <GovUK.Button onClick={handleSubmit} disabled={isSubmitting}>
            Submit
          </GovUK.Button>
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
