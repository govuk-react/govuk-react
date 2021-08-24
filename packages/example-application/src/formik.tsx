/* eslint-disable react/prop-types */

import React, { useState, useCallback } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import { Formik, Form, Field as FormikField } from 'formik';

const Field = ({ component: Component, ...props }) => (
  <FormikField {...props}>{({ field, meta }) => <Component {...props} input={field} meta={meta} />}</FormikField>
);

const Checkbox = ({ input, ...props }) => <GovUK.Checkbox {...input} {...props} />;
const DateField = ({ meta, input: { onChange, onBlur, ...input }, ...props }) => (
  <GovUK.DateField
    errorText={meta?.touched && meta?.error}
    {...props}
    input={{
      onChange: (value) => onChange({ target: { value, name: props.name } }),
      onBlur: (value) => onBlur({ target: { value, name: props.name } }),
      ...input,
    }}
  />
);
const Radio = ({ input, ...props }) => <GovUK.Radio {...input} {...props} />;
// eslint-disable-next-line
const FileUpload = ({ input: { value, onChange, ...input } = {}, ...props }) => (
  <GovUK.FileUpload {...input} {...props} onChange={({ target }) => onChange(target.files)} />
);

const validateNationality = (value) => (value?.length ? undefined : 'Please select at least one nationality');

const validateMultiplePets = (value) => (value ? undefined : 'Please answer the question');

const FinalForm = () => {
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

  return (
    <>
      {!hasSubmitted && (
        <Formik
          initialValues={{
            firstName: '',
            description: '',
            nationality: [],
            dob: null,
            animal: null,
            petPhoto: null,
            hasMultiplePets: null,
          }}
          onSubmit={handleFormSubmit}
          render={({ errors, touched, ...rest }) => {
            const errorsToShow = Object.keys(errors); // .filter((key) => touched[key]);
            return (
              <Form>
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
                      validate={(value) => (value ? undefined : 'Please enter a first name')}
                      component={GovUK.InputField}
                    >
                      First name
                    </Field>
                    <Field
                      mb={8}
                      name="description"
                      hint="Enter as many words as you like"
                      validate={(value) => (value ? undefined : 'Please enter a description')}
                      component={GovUK.TextArea}
                    >
                      Description of what you saw
                    </Field>

                    <GovUK.FormGroup error={touched?.nationality && errors?.nationality}>
                      <GovUK.Label mb={4}>
                        <GovUK.LabelText>Nationality</GovUK.LabelText>
                        {touched?.nationality && errors?.nationality && (
                          <GovUK.ErrorText>{errors?.nationality}</GovUK.ErrorText>
                        )}
                        <Field
                          type="checkbox"
                          name="nationality"
                          value="british"
                          validate={validateNationality}
                          component={Checkbox}
                          hint="including English, Scottish, Welsh and Northern Irish"
                        >
                          British
                        </Field>
                        <Field
                          type="checkbox"
                          name="nationality"
                          value="irish"
                          validate={validateNationality}
                          component={Checkbox}
                        >
                          Irish
                        </Field>
                        <Field
                          type="checkbox"
                          name="nationality"
                          value="other"
                          validate={validateNationality}
                          component={Checkbox}
                        >
                          Citizen of another country
                        </Field>
                      </GovUK.Label>
                    </GovUK.FormGroup>
                    <Field
                      name="dob"
                      component={DateField}
                      validate={(value) => (value ? undefined : 'Please enter a date of birth')}
                    >
                      Date of birth
                    </Field>
                  </GovUK.Fieldset>
                  <GovUK.Fieldset>
                    <GovUK.Fieldset.Legend size="M">About your pet</GovUK.Fieldset.Legend>
                    <Field
                      component={GovUK.Select}
                      mb={8}
                      name="animal"
                      label="What animal is your pet"
                      hint="A cat for example"
                      validate={(value) => (value ? undefined : 'Please select an animal')}
                    >
                      <option value="cat">Cat</option>
                      <option value="other-feline">Other feline</option>
                      <option value="other-non-feline">Other non feline</option>
                    </Field>
                    {/*
                    TODO: need to be able to pass props to file input
                    https://github.com/final-form/react-final-form/issues/663
                    */}
                    <Field
                      component={FileUpload}
                      mb={8}
                      acceptedFormats=".jpg, .png"
                      hint="This can be in either JPG or PNG format"
                      name="petPhoto"
                      // validate={(value) => (value ? undefined : 'Please select a photo')}
                    >
                      Please upload a recent photograph
                    </Field>
                    <GovUK.MultiChoice
                      mb={8}
                      label="Do you have more than one pet?"
                      meta={{ error: errors?.hasMultiplePets, touched: touched?.hasMultiplePets }}
                    >
                      <Field
                        component={Radio}
                        type="radio"
                        name="hasMultiplePets"
                        inline
                        value="yes"
                        validate={validateMultiplePets}
                      >
                        Yes
                      </Field>
                      <Field
                        component={Radio}
                        type="radio"
                        name="hasMultiplePets"
                        inline
                        value="no"
                        validate={validateMultiplePets}
                      >
                        No
                      </Field>
                    </GovUK.MultiChoice>
                  </GovUK.Fieldset>
                  <GovUK.Button type="submit" disabled={isSubmitting}>
                    Submit
                  </GovUK.Button>
                </GovUK.LoadingBox>
              </Form>
            );
          }}
        />
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

export default FinalForm;
