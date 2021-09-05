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
  validatePetPhoto,
} from './validators/validators';
// TODO: extract reusable parts of this file in to a published module e.g. @govuk-react/json-schema-form

const schema = {
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

const AnyOf = ({ name, schema, formData = [], onChange, ...props }) => (
  <GovUK.FormGroup>
    <GovUK.Label mb={4}>
      <GovUK.LabelText>{schema.title}</GovUK.LabelText>
      {schema?.items?.anyOf?.map((item) => (
        <GovUK.Checkbox
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

const OneOf = (props) => {
  if (props?.uiSchema?.['ui:widget'] === 'radio') {
    return (
      <GovUK.MultiChoice mb={4} label={props.schema.title}>
        {props?.schema?.oneOf?.map((item) => (
          <GovUK.Radio value={item.const} name={props.name} onChange={(e) => props.onChange(e.target.value)}>
            {item.title}
          </GovUK.Radio>
        ))}
      </GovUK.MultiChoice>
    );
  }
  return (
    <GovUK.Select label={props.schema.title} mb={4} input={{ onChange: (e) => props.onChange(e.target.value) }}>
      <option />
      {props?.schema?.oneOf?.map((item) => (
        <option value={item.const}>{item.title}</option>
      ))}
    </GovUK.Select>
  );
};

const dobObjToString = ({ year, month, day }) =>
  `${year ? year : ''}-${month ? month.padStart(2, '0') : ''}-${day ? day.padStart(2, '0') : ''}`;
const dobStringToObj = (dob) => {
  const [year, month, day] = dob.split('-').map((s) => s.trim());
  return { year, month, day };
};

const DateField = (props) => {
  const [value, setValue] = useState({});
  return (
    <GovUK.DateField
      {...props}
      input={{
        value,
        onChange: ({ year, month, day }) => {
          setValue({ year, month, day });
          return props.input.onChange({
            target: {
              value: dobObjToString({ year, month, day }),
            },
          });
        },
      }}
    />
  );
};

// function addNameToDataURL(dataURL, name) {
//   return dataURL.replace(";base64", `;name=${encodeURIComponent(name)};base64`);
// }

// function processFile(file) {
//   const { name, size, type } = file;
//   return new Promise((resolve, reject) => {
//     const reader = new window.FileReader();
//     reader.onerror = reject;
//     reader.onload = event => {
//       resolve({
//         dataURL: addNameToDataURL(event.target.result, name),
//         name,
//         size,
//         type,
//       });
//     };
//     reader.readAsDataURL(file);
//   });
// }

// function processFiles(files) {
//   return Promise.all([].map.call(files, processFile));
// }

const handleFilesChanged = (onChange) => (e) => {
  onChange();
  const files = e.target.files;
  if (files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e) => onChange(e.target.result);
    reader.readAsDataURL(files[0]);
  }
};

const FileUpload = (props) => <GovUK.FileUpload {...props} onChange={handleFilesChanged(props.onChange)} />;

const customFields = {
  ArrayField: AnyOf,
  StringField: (props) => {
    const Component =
      props?.uiSchema?.['ui:widget'] === 'textarea'
        ? GovUK.TextArea
        : props?.schema?.format === 'data-url'
        ? FileUpload
        : props?.schema?.format === 'date'
        ? DateField
        : props?.schema?.oneOf
        ? OneOf
        : GovUK.InputField;

    return (
      <Component
        {...props}
        input={{
          onChange: (e) => props.onChange(e.target.value),
        }}
        mb={4}
        hint={props.schema.description}
        meta={{ error: props.rawErrors?.[0], touched: !!props.rawErrors?.[0] }}
      >
        {props.schema.title}
      </Component>
    );
  },
  BooleanField: (props) => (
    <GovUK.Checkbox {...props} hint={props.schema.description}>
      {props.schema.title}
    </GovUK.Checkbox>
  ),
};

const uiSchema = [
  {
    description: {
      'ui:widget': 'textarea',
    },
    nationality: {
      'ui:widget': 'checkboxes',
    },
  },
  {
    hasMultiplePets: {
      'ui:widget': 'radio',
    },
  },
];

const ErrorListTemplate = ({ errors, ...rest }) => (
    <GovUK.ErrorSummary
      heading="Error summary"
      description="Please address the following issues"
      errors={errors.map((error) => ({
        targetName: error.name,
        text: error.stack.substring(error.stack.indexOf(' ')+1) ,
      }))}
    />
);

function ObjectFieldTemplate(props) {
  return (
    <GovUK.Fieldset>
      <GovUK.Fieldset.Legend size="M">{props.title}</GovUK.Fieldset.Legend>
      {props.properties.map((element) => (
        <div className="property-wrapper">{element.content}</div>
      ))}
    </GovUK.Fieldset>
  );
}

function CustomFieldTemplate(props) {
  const { id, classNames, label, help, required, description, errors, children } = props;
  return (
    <div className={classNames}>
      {/* <label htmlFor={id}>{label}{required ? "*" : null}</label> */}
      {/* {description} */}
      {children}
      {/* {errors} */}
      {help}
    </div>
  );
}

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
  conditionalAddError(formData[0].dob, validateDateOfBirth, errors[0].dob);
  conditionalAddError(formData[1].hasMultiplePets, validateMultiplePets, errors[1].hasMultiplePets);
  conditionalAddError(formData[1].animal, validateAnimal, errors[1].animal);
  conditionalAddError(formData[1].petPhoto, validatePetPhoto, errors[1].petPhoto);
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
          <Form schema={schema} uiSchema={uiSchema} onSubmit={handleFormSubmit} validate={validate} />
          <Form
            schema={schema}
            uiSchema={uiSchema}
            fields={customFields}
            FieldTemplate={CustomFieldTemplate}
            ObjectFieldTemplate={ObjectFieldTemplate}
            ErrorList={ErrorListTemplate}
            onSubmit={handleFormSubmit}
            validate={validate}
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
