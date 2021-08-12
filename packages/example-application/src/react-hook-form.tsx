/* eslint-disable react/prop-types */

import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState(false);
  const handleFormSubmit = useCallback(
    (values) => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      setTimeout(() => {
        setData(values);
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    },
    [isSubmitting]
  );

  const errorsToShow = Object.keys(errors);

  return (
    <>
      {!isSubmitted && (
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
                input={register('firstName', {
                  validate: (value) => (value ? undefined : 'Please enter a first name'),
                })}
              >
                First name
              </GovUK.InputField>
              <GovUK.TextArea
                mb={8}
                hint="Enter as many words as you like"
                input={register('description', {
                  validate: (value) => (value ? undefined : 'Please enter a description'),
                })}
              >
                Description of what you saw
              </GovUK.TextArea>
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
            </GovUK.Fieldset>
            <GovUK.Button type="submit" disabled={isSubmitting}>
              Submit
            </GovUK.Button>
          </GovUK.LoadingBox>
        </form>
      )}
      {isSubmitted && (
        <>
          <GovUK.BackLink as={Link} to="/final-form" onClick={() => setIsSubmitted(false)}>
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
            <GovUK.ListItem>Name: {data.firstName}</GovUK.ListItem>
            <GovUK.ListItem>Description: {data.description}</GovUK.ListItem>
            <GovUK.ListItem>Nationality: {JSON.stringify(data.nationality)}</GovUK.ListItem>
            <GovUK.ListItem>Date of birth: {JSON.stringify(data.dob)}</GovUK.ListItem>
            <GovUK.ListItem>Animal: {data.animal}</GovUK.ListItem>
            <GovUK.ListItem>Multiple pets: {data.hasMultiplePets}</GovUK.ListItem>
          </GovUK.UnorderedList>
        </>
      )}
    </>
  );
};

export default ReactHookForm;
