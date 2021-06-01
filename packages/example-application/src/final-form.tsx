import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import { Form, Field } from 'react-final-form';

const FinalForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState(false);
  const handleSubmit = useCallback(
    (submitData) => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      setTimeout(() => {
        setData(submitData);
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    },
    [isSubmitting]
  );

  return (
    <>
      {!isSubmitted && (
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit, errors, touched }) => {
            const errorsToShow = Object.keys(errors).filter((key) => touched[key]);
            return (
              <form onSubmit={handleSubmit}>
                <GovUK.LoadingBox loading={isSubmitting}>
                  <GovUK.BackLink as={Link} to="/">
                    Home
                  </GovUK.BackLink>
                  {!!errorsToShow?.length && (
                    <GovUK.ErrorSummary
                      heading="Error summary"
                      description="Description"
                      errors={errorsToShow.map((key) => ({
                        targetName: key,
                        text: errors[key],
                      }))}
                    />
                  )}
                  <GovUK.Fieldset>
                    <GovUK.Fieldset.Legend size="M">About you</GovUK.Fieldset.Legend>
                    <Field
                      name="firstName"
                      mb={4}
                      hint="You can find this on your passport"
                      validate={(value) => (value ? undefined : 'Required')}
                      component={GovUK.InputField}
                    >
                      First name
                    </Field>
                  </GovUK.Fieldset>
                  <GovUK.Button onClick={handleSubmit} disabled={isSubmitting}>
                    Submit
                  </GovUK.Button>
                </GovUK.LoadingBox>
              </form>
            );
          }}
        />
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
            <GovUK.ListItem>Name: {data.firstName}</GovUK.ListItem>
            <GovUK.ListItem>Description: {data.description}</GovUK.ListItem>
            <GovUK.ListItem>Nationality: {JSON.stringify(data.nationality)}</GovUK.ListItem>
            <GovUK.ListItem>Date of birth: {JSON.stringify(data.dob)}</GovUK.ListItem>
            <GovUK.ListItem>Animal: {data.animal}</GovUK.ListItem>
            <GovUK.ListItem>Multiple pets: {data.hasMultiplePets ? 'Yes' : 'No'}</GovUK.ListItem>
          </GovUK.UnorderedList>
        </>
      )}
    </>
  );
};

export default FinalForm;
