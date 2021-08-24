/* eslint-disable react/prop-types */

import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

const DateField = ({ input: { onChange, onBlur, ...input }, ...props }) => {
  const [value, setValue] = useState(input.value);
  return (
    <GovUK.DateField
      {...props}
      input={{
        onChange: (newValue) => {
          setValue({ ...value, ...newValue });
          onChange({ target: { value: { ...value, ...newValue }, name: input.name } });
        },
        onBlur: (newValue) => onBlur({ target: { value, name: input.name } }),
        ...input,
      }}
    />
  );
};

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState();
  const handleFormSubmit = useCallback(
    (values) => {
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
  // TODO: extract shared validation code
  const validateNationality = (value) => (value?.length ? undefined : 'Please select at least one nationality');
  const validateMultiplePets = (value) => (value ? undefined : 'Please answer the question');

  return (
    <>
      {!hasSubmitted && (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <GovUK.LoadingBox loading={isSubmitting}>
            <GovUK.BackLink as={Link} to="/">
              Home
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
            <GovUK.Fieldset>
              <GovUK.Fieldset.Legend size="M">About you</GovUK.Fieldset.Legend>
              <GovUK.InputField
                mb={4}
                hint="You can find this on your passport"
                meta={{ touched: submitCount > 0, error: errors?.firstName?.message }}
                input={register('firstName', {
                  validate: (value) => (value ? undefined : 'Please enter a first name'),
                })}
              >
                First name
              </GovUK.InputField>
              <GovUK.TextArea
                mb={8}
                hint="Enter as many words as you like"
                meta={{ touched: submitCount > 0, error: errors?.description?.message }}
                input={register('description', {
                  validate: (value) => (value ? undefined : 'Please enter a description'),
                })}
              >
                Description of what you saw
              </GovUK.TextArea>
              <GovUK.FormGroup error={submitCount > 0 && errors?.nationality?.message}>
                <GovUK.Label mb={4}>
                  <GovUK.LabelText>Nationality</GovUK.LabelText>
                  {submitCount > 0 && errors?.nationality?.message && (
                    <GovUK.ErrorText>{errors?.nationality.message}</GovUK.ErrorText>
                  )}
                  <GovUK.Checkbox
                    type="checkbox"
                    value="british"
                    hint="including English, Scottish, Welsh and Northern Irish"
                    {...register('nationality', {
                      validate: validateNationality,
                    })}
                  >
                    British
                  </GovUK.Checkbox>
                  <GovUK.Checkbox
                    type="checkbox"
                    value="irish"
                    {...register('nationality', {
                      validate: validateNationality,
                    })}
                  >
                    Irish
                  </GovUK.Checkbox>
                  <GovUK.Checkbox
                    type="checkbox"
                    value="other"
                    {...register('nationality', {
                      validate: validateNationality,
                    })}
                  >
                    Citizen of another country
                  </GovUK.Checkbox>
                </GovUK.Label>
              </GovUK.FormGroup>
              <DateField
                errorText={submitCount > 0 && errors?.dob?.message}
                input={register('dob', {
                  // TODO: should check for valid date via extracted and shared function
                  validate: (value) => (value ? undefined : 'Please enter a date of birth'),
                })}
              >
                Date of birth
              </DateField>
            </GovUK.Fieldset>
            <GovUK.Fieldset>
              <GovUK.Fieldset.Legend size="M">About your pet</GovUK.Fieldset.Legend>
              <GovUK.Select
                mb={8}
                label="What animal is your pet"
                hint="A cat for example"
                input={register('animal', {
                  validate: (value) => (value ? undefined : 'Please select an animal'),
                })}
              >
                <option value="cat">Cat</option>
                <option value="other-feline">Other feline</option>
                <option value="other-non-feline">Other non feline</option>
              </GovUK.Select>
              <GovUK.FileUpload
                mb={8}
                acceptedFormats=".jpg, .png"
                hint="This can be in either JPG or PNG format"
                // {...register('petPhoto', { validate: (value) => (value ? undefined : 'Please select a photo') })}
              >
                Please upload a recent photograph
              </GovUK.FileUpload>
              <GovUK.MultiChoice
                mb={8}
                label="Do you have more than one pet?"
                meta={{ error: errors?.hasMultiplePets?.message, touched: submitCount > 0 }}
              >
                <GovUK.Radio
                  type="radio"
                  inline
                  value="yes"
                  {...register('hasMultiplePets', { validate: validateMultiplePets })}
                >
                  Yes
                </GovUK.Radio>
                <GovUK.Radio
                  type="radio"
                  inline
                  value="no"
                  {...register('hasMultiplePets', { validate: validateMultiplePets })}
                >
                  No
                </GovUK.Radio>
              </GovUK.MultiChoice>
            </GovUK.Fieldset>
            <GovUK.Button type="submit" disabled={isSubmitting}>
              Submit
            </GovUK.Button>
          </GovUK.LoadingBox>
        </form>
      )}
      {hasSubmitted && (
        <>
          <GovUK.BackLink as={Link} to="/final-form" onClick={() => setHasSubmitted(false)}>
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
            <GovUK.ListItem>Name: {submittedData.firstName}</GovUK.ListItem>
            <GovUK.ListItem>Description: {submittedData.description}</GovUK.ListItem>
            <GovUK.ListItem>Nationality: {JSON.stringify(submittedData.nationality)}</GovUK.ListItem>
            <GovUK.ListItem>Date of birth: {JSON.stringify(submittedData.dob)}</GovUK.ListItem>
            <GovUK.ListItem>Animal: {submittedData.animal}</GovUK.ListItem>
            <GovUK.ListItem>Multiple pets: {submittedData.hasMultiplePets}</GovUK.ListItem>
          </GovUK.UnorderedList>
        </>
      )}
    </>
  );
};

export default ReactHookForm;
