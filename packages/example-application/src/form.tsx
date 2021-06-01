import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

const toggle = (array, newItem) =>
  array.includes(newItem) ? array.filter((existingItem) => existingItem !== newItem) : [...array, newItem];

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [description, setDescription] = useState('');
  const [nationality, setNationality] = useState([]);
  const [dob, setDob] = useState();
  const [animal, setAnimal] = useState();
  const [hasMultiplePets, setHasMultiplePets] = useState();
  const [errors, setErrors] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = useCallback(() => {
    if (isSubmitting) return;
    const newErrors = {};
    if (!firstName?.length) {
      newErrors.firstName = 'Please enter a first name';
    }
    if (!description || !description.length) {
      newErrors.description = 'Please enter a description';
    }
    if (!nationality?.length) {
      newErrors.nationality = 'Please select at least one nationality';
    }
    if (!dob) {
      newErrors.dob = 'Please enter a date of birth';
    }
    if (!animal?.length) {
      newErrors.animal = 'Please select an animal';
    }
    if (hasMultiplePets !== true && hasMultiplePets !== false) {
      newErrors.hasMultiplePets = 'Please answer the question';
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setErrors(null);
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    }
  }, [isSubmitting, firstName, animal, description, nationality, dob, hasMultiplePets]);

  return (
    <>
      {!isSubmitted && (
        <GovUK.LoadingBox loading={isSubmitting}>
          <GovUK.BackLink as={Link} to="/">
            Home
          </GovUK.BackLink>
          {errors && !!Object.keys(errors).length && (
            <GovUK.ErrorSummary
              heading="Error summary"
              description="Description"
              errors={Object.keys(errors).map((key) => ({
                targetName: key,
                text: errors[key],
              }))}
            />
          )}
          <GovUK.Fieldset>
            <GovUK.Fieldset.Legend size="M">About you</GovUK.Fieldset.Legend>
            <GovUK.Label mb={4} error={errors?.firstName}>
              <GovUK.LabelText>First name</GovUK.LabelText>
              <GovUK.HintText>You can find this on your passport</GovUK.HintText>
              {errors?.firstName && <GovUK.ErrorText>{errors.firstName}</GovUK.ErrorText>}
              <GovUK.Input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                error={!!errors?.firstName}
              />
            </GovUK.Label>
            <GovUK.TextArea
              mb={8}
              name="group1"
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

            <GovUK.FormGroup error={errors?.nationality}>
              <GovUK.Label mb={4}>
                <GovUK.LabelText>Nationality</GovUK.LabelText>
                <GovUK.Checkbox
                  hint="including English, Scottish, Welsh and Northern Irish"
                  checked={nationality.includes('british')}
                  onChange={() => setNationality((prev) => toggle(prev, 'british'))}
                >
                  British
                </GovUK.Checkbox>
                <GovUK.Checkbox
                  checked={nationality.includes('irish')}
                  onChange={() => setNationality((prev) => toggle(prev, 'irish'))}
                >
                  Irish
                </GovUK.Checkbox>
                <GovUK.Checkbox
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
              <GovUK.DateField.Input value={dob} onChange={setDob}>
                Input
              </GovUK.DateField.Input>
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
              meta={{ error: errors?.animal, touched: errors?.animal }}
            >
              <option value="cat">Cat</option>
              <option value="other-feline">Other feline</option>
              <option value="other-non-feline">Other non feline</option>
            </GovUK.Select>
            <GovUK.FileUpload
              mb={8}
              acceptedFormats=".jpg, .png"
              hint="This can be in either JPG or PNG format"
              name="group0"
            >
              Please upload a recent photograph
            </GovUK.FileUpload>
            <GovUK.MultiChoice
              mb={8}
              label="Do you have more than one pet?"
              meta={{ error: errors?.hasMultiplePets, touched: !!errors?.hasMultiplePets }}
            >
              <GovUK.Radio
                name="group1"
                inline
                checked={hasMultiplePets === true}
                onChange={() => setHasMultiplePets(true)}
              >
                Yes
              </GovUK.Radio>
              <GovUK.Radio
                name="group1"
                inline
                checked={hasMultiplePets === false}
                onChange={() => setHasMultiplePets(false)}
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
      {isSubmitted && (
        <>
          <GovUK.BackLink as={Link} to="/form" onClick={() => setIsSubmitted(false)}>
            Back
          </GovUK.BackLink>
          <GovUK.Panel title="Application complete">Reference: XBR1N21R3</GovUK.Panel>
          <GovUK.LeadParagraph>
            Enim pariatur pariatur commodo incididunt ad nulla ex eu sunt ut ex id veniam veniam.
          </GovUK.LeadParagraph>
          <GovUK.Paragraph>
            Consequat adipisicing aliquip eiusmod nostrud et proident non id consequat aliquip eiusmod aliquip.
          </GovUK.Paragraph>
          <GovUK.UnorderedList>
            <GovUK.ListItem>Name: {firstName}</GovUK.ListItem>
            <GovUK.ListItem>Description: {description}</GovUK.ListItem>
            <GovUK.ListItem>Nationality: {JSON.stringify(nationality)}</GovUK.ListItem>
            <GovUK.ListItem>Date of birth: {JSON.stringify(dob)}</GovUK.ListItem>
            <GovUK.ListItem>Animal: {animal}</GovUK.ListItem>
            <GovUK.ListItem>Multiple pets: {hasMultiplePets ? 'Yes' : 'No'}</GovUK.ListItem>
          </GovUK.UnorderedList>
        </>
      )}
    </>
  );
};

export default Form;
