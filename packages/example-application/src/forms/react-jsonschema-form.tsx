/* eslint-disable react/prop-types */
import type { JSONSchema7 } from 'json-schema';
import type { FormValidation, ISubmitEvent } from '@rjsf/core';

import React, { useCallback, useState } from 'react';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import Results from './components/results';
import {
  validateNationality,
  validateMultiplePets,
  validateFirstName,
  validateDescription,
  validateDateOfBirth,
  validateAnimal,
  validatePetPhotoString,
} from './validators/validators';

import { dobStringToObj, Form } from './react-jsonschema-form-helpers';

const formSchema: JSONSchema7 = {
  properties: {
    0: {
      title: 'About you',
      type: 'object',
      properties: {
        firstName: { type: 'string', title: 'First name', description: 'You can find this on your passport' },
        description: {
          type: 'string',
          title: 'Description of what you saw',
          description: 'Enter as many words as you like',
        },
        nationality: {
          title: 'Nationality',
          type: 'array',
          uniqueItems: true,
          items: {
            anyOf: [
              {
                const: 'british',
                title: 'British',
                description: 'including English, Scottish, Welsh and Northern Irish',
              },
              { const: 'irish', type: 'string', title: 'Irish' },
              { const: 'other', type: 'string', title: 'Citizen of another country' },
            ],
          },
        },
        dob: { type: 'string', title: 'Date of birth', format: 'date' },
      },
    },
    1: {
      title: 'About your pet',
      type: 'object',
      properties: {
        animal: {
          type: 'string',
          title: 'What animal is your pet',
          description: 'A cat for example',
          oneOf: [
            { const: 'cat', type: 'string', title: 'Cat' },
            { const: 'other-feline', type: 'string', title: 'Other feline' },
            { const: 'other-non-feline', type: 'string', title: 'Other non feline' },
          ],
        },
        petPhoto: {
          type: 'string',
          format: 'data-url',
          title: 'Please upload a recent photograph',
          description: 'This can be in either JPG or PNG format',
        },
        hasMultiplePets: {
          type: 'string',
          title: 'Do you have more than one pet?',
          oneOf: [
            { const: 'yes', type: 'string', title: 'Yes' },
            { const: 'no', type: 'string', title: 'No' },
          ],
        },
      },
    },
  },
};

const uiSchema = {
  0: {
    description: {
      'ui:widget': 'textarea',
    },
    nationality: {
      'ui:widget': 'checkboxes',
    },
  },
  1: {
    hasMultiplePets: {
      'ui:widget': 'radio',
    },
  },
};

type FieldValidation = FormValidation[string];

const isFieldValidation = (value: unknown): value is FieldValidation =>
  typeof value === 'object' && value !== null && 'addError' in value && typeof value.addError === 'function';

/** rjsf's types only describe one level of nesting, so look up each section's fields at runtime. */
const fieldErrors = (errors: FormValidation, section: 0 | 1, field: string) => {
  const sectionErrors = errors[section];
  const value: unknown = Object.getOwnPropertyDescriptor(sectionErrors, field)?.value;
  return isFieldValidation(value) ? value : undefined;
};

const conditionalAddError = <T,>(
  value: T,
  validator: (value: T) => string | undefined,
  errors: FieldValidation | undefined
) => {
  const error = validator(value);
  if (error) {
    errors?.addError(error);
  }
};

const validate = (formData: SubmittedData, errors: FormValidation) => {
  conditionalAddError(formData[0].nationality, validateNationality, fieldErrors(errors, 0, 'nationality'));
  conditionalAddError(formData[0].firstName, validateFirstName, fieldErrors(errors, 0, 'firstName'));
  conditionalAddError(formData[0].description, validateDescription, fieldErrors(errors, 0, 'description'));
  conditionalAddError(dobStringToObj(formData[0].dob), validateDateOfBirth, fieldErrors(errors, 0, 'dob'));
  conditionalAddError(formData[1].hasMultiplePets, validateMultiplePets, fieldErrors(errors, 1, 'hasMultiplePets'));
  conditionalAddError(formData[1].animal, validateAnimal, fieldErrors(errors, 1, 'animal'));
  conditionalAddError(formData[1].petPhoto, validatePetPhotoString, fieldErrors(errors, 1, 'petPhoto'));
  return errors;
};

interface SubmittedData {
  0: {
    firstName: string;
    description: string;
    nationality: string[];
    dob: string;
  };
  1: {
    animal: string;
    hasMultiplePets: string;
    petPhoto: string;
  };
}

const ReactJSONSchemaForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedData>();
  const handleFormSubmit = useCallback(
    ({ formData }: ISubmitEvent<SubmittedData>) => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      setTimeout(() => {
        // simulate async submission
        setSubmittedData(formData);
        setHasSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    },
    [isSubmitting]
  );

  return (
    <>
      {!hasSubmitted && (
        <>
          <GovUK.BackLink asChild>
            <Link to="/forms">Home</Link>
          </GovUK.BackLink>
          <Form
            schema={formSchema}
            uiSchema={uiSchema}
            onSubmit={handleFormSubmit}
            validate={validate}
            onError={() => null}
          >
            <GovUK.Button type="submit">Submit</GovUK.Button>
          </Form>
        </>
      )}
      {hasSubmitted && submittedData && (
        <Results
          backLink="/forms/react-jsonschema-form"
          onBackClick={() => setHasSubmitted(false)}
          firstName={submittedData?.['0'].firstName}
          description={submittedData[0].description}
          nationality={submittedData[0].nationality}
          dob={dobStringToObj(submittedData[0].dob)}
          animal={submittedData[1].animal}
          hasMultiplePets={submittedData[1].hasMultiplePets}
          petPhotoString={submittedData[1].petPhoto}
        />
      )}
    </>
  );
};

export default ReactJSONSchemaForm;
