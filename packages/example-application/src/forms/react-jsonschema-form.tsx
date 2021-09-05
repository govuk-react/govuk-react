/* eslint-disable react/prop-types */

import React, { useCallback, useState } from 'react';
import Form from '@rjsf/core';
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
// TODO: extract reusable parts of this file in to a published module e.g. @govuk-react/json-schema-form

const formSchema = {
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

const AnyOf = ({ name, schema, formData = [], onChange, rawErrors }) => (
  <GovUK.FormGroup error={!!rawErrors?.length}>
    <GovUK.Label mb={4}>
      <GovUK.LabelText>{schema.title}</GovUK.LabelText>
      {rawErrors?.length && <GovUK.ErrorText>{rawErrors[0]}</GovUK.ErrorText>}
      {schema?.items?.anyOf?.map((item) => (
        <GovUK.Checkbox
          key={item.const}
          name={name}
          value={item.const}
          hint={item.description}
          onChange={(e) =>
            onChange(e.target.checked ? formData.concat(item.const) : formData.filter((i) => i !== item.const))
          }
        >
          {item.title}
        </GovUK.Checkbox>
      ))}
    </GovUK.Label>
  </GovUK.FormGroup>
);

const OneOf = ({ schema, uiSchema, name, onChange, rawErrors }) => {
  if (uiSchema?.['ui:widget'] === 'radio') {
    return (
      <GovUK.MultiChoice mb={4} label={schema.title} meta={{ error: rawErrors?.[0], touched: !!rawErrors?.length }}>
        {schema?.oneOf?.map((item) => (
          <GovUK.Radio key={item.const} value={item.const} name={name} onChange={(e) => onChange(e.target.value)}>
            {item.title}
          </GovUK.Radio>
        ))}
      </GovUK.MultiChoice>
    );
  }
  return (
    <GovUK.Select
      label={schema.title}
      mb={4}
      input={{ name, onChange: (e) => onChange(e.target.value) }}
      meta={{ error: rawErrors?.[0], touched: !!rawErrors?.length }}
    >
      <option>Please select...</option>
      {schema?.oneOf?.map((item) => (
        <option key={item.const} value={item.const}>
          {item.title}
        </option>
      ))}
    </GovUK.Select>
  );
};

const dobObjToString = ({ year, month, day }) =>
  `${year || ''}-${month ? month.padStart(2, '0') : ''}-${day ? day.padStart(2, '0') : ''}`;

const dobStringToObj = (dob) => {
  if (!dob) return {};
  const [year, month, day] = dob.split('-').map((s) => s.trim());
  return { year: parseInt(year, 10), month: parseInt(month, 10), day: parseInt(day, 10) };
};

const DateField = ({ schema, onChange, children, rawErrors }) => {
  const [value, setValue] = useState({ day: '', month: '', year: '' });
  const handleChange = useCallback(
    ({ year, month, day }) => {
      setValue({ year, month, day });
      return onChange(dobObjToString({ year, month, day }));
    },
    [onChange]
  );

  return (
    <GovUK.DateField
      errorText={rawErrors?.[0]}
      input={{
        value,
        onChange: handleChange,
      }}
    >
      {schema.title}
    </GovUK.DateField>
  );
};

const handleFilesChanged =
  (onChange) =>
  ({ target }) => {
    onChange();
    const { files } = target;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = ({ target: innerTarget }) => onChange(innerTarget.result);
      reader.readAsDataURL(files[0]);
    }
  };

const FileUpload = ({ rawErrors, schema, onChange, name }) => (
  <GovUK.FileUpload
    meta={{ error: rawErrors?.[0], touched: !!rawErrors?.[0] }}
    onChange={handleFilesChanged(onChange)}
    name={name}
  >
    {schema.title}
  </GovUK.FileUpload>
);

const TextArea = ({ schema, rawErrors, onChange, name }) => (
  <GovUK.TextArea
    input={{
      onChange: (e) => onChange(e.target.value),
      name,
    }}
    mb={4}
    hint={schema.description}
    meta={{ error: rawErrors?.[0], touched: !!rawErrors?.[0] }}
  >
    {schema.title}
  </GovUK.TextArea>
);

const InputField = ({ schema, rawErrors, onChange, name }) => (
  <GovUK.InputField
    input={{
      onChange: (e) => onChange(e.target.value),
      name,
    }}
    mb={4}
    hint={schema.description}
    meta={{ error: rawErrors?.[0], touched: !!rawErrors?.[0] }}
  >
    {schema.title}
  </GovUK.InputField>
);

const StringField = ({ uiSchema, schema, onChange, rawErrors, name }) => {
  let Component;
  if (uiSchema?.['ui:widget'] === 'textarea') {
    Component = TextArea;
  } else if (schema?.format === 'data-url') {
    Component = FileUpload;
  } else if (schema?.format === 'date') {
    Component = DateField;
  } else if (schema?.oneOf) {
    Component = OneOf;
  } else {
    Component = InputField;
  }

  return <Component uiSchema={uiSchema} schema={schema} onChange={onChange} rawErrors={rawErrors} name={name} />;
};

const BooleanField = ({ schema, onChange }) => (
  <GovUK.Checkbox onChange={onChange} hint={schema.description}>
    {schema.title}
  </GovUK.Checkbox>
);

const customFields = {
  ArrayField: AnyOf,
  StringField,
  BooleanField,
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

const ErrorListTemplate = ({ errors, ...rest }) => (
  <GovUK.ErrorSummary
    heading="Error summary"
    description="Please address the following issues"
    errors={errors.map((error, n) => ({
      targetName: error.name || String(n),
      text: error.stack.substring(error.stack.indexOf(' ') + 1),
    }))}
  />
);

function ObjectFieldTemplate({ title, properties }) {
  return (
    <GovUK.Fieldset>
      {title && <GovUK.Fieldset.Legend size="M">{title}</GovUK.Fieldset.Legend>}
      {properties.map((element) => element.content)}
    </GovUK.Fieldset>
  );
}

const CustomFieldTemplate = ({ children }) => children;

const conditionalAddError = (value, validator, errors) => {
  const error = validator(value);
  if (error) {
    errors.addError(error);
  }
};

const validate = (formData, errors) => {
  conditionalAddError(formData[0].nationality, validateNationality, errors[0].nationality);
  conditionalAddError(formData[0].firstName, validateFirstName, errors[0].firstName);
  conditionalAddError(formData[0].description, validateDescription, errors[0].description);
  conditionalAddError(dobStringToObj(formData[0].dob), validateDateOfBirth, errors[0].dob);
  conditionalAddError(formData[1].hasMultiplePets, validateMultiplePets, errors[1].hasMultiplePets);
  conditionalAddError(formData[1].animal, validateAnimal, errors[1].animal);
  conditionalAddError(formData[1].petPhoto, validatePetPhotoString, errors[1].petPhoto);
  return errors;
};

const ReactJSONSchemaForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState();
  const handleFormSubmit = useCallback(
    ({ formData }, e) => {
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
          <GovUK.BackLink as={Link} to="/forms">
            Home
          </GovUK.BackLink>
          {/* <Form schema={schema} uiSchema={uiSchema} onSubmit={handleFormSubmit} validate={validate} /> */}
          <Form
            schema={formSchema}
            uiSchema={uiSchema}
            fields={customFields}
            FieldTemplate={CustomFieldTemplate}
            ObjectFieldTemplate={ObjectFieldTemplate}
            ErrorList={ErrorListTemplate}
            onSubmit={handleFormSubmit}
            validate={validate}
            onError={() => null}
          />
        </>
      )}
      {hasSubmitted && (
        <Results
          backLink="/forms/react-jsonschema-form"
          onBackClick={() => setHasSubmitted(false)}
          firstName={submittedData[0].firstName}
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
