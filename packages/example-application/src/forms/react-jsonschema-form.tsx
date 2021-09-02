import React, { useCallback, useState } from 'react';
import Form from '@rjsf/core';
import * as GovUK from 'govuk-react';
import { Link } from 'react-router-dom';

import Results from './components/results';

const schema = {
  properties: {
    0: {
      title: 'About you',
      type: 'object',
      required: ['firstName'],
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
      required: ['animal'],
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
const AnyOf = (props) => (
  <GovUK.FormGroup>
    <GovUK.Label mb={4}>
      <GovUK.LabelText>{props.schema.title}</GovUK.LabelText>
      {props?.schema?.items?.anyOf?.map((item) => (
        <GovUK.Checkbox name={props.name} value={item.const} hint={item.description}>
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
          <GovUK.Radio name={item.const}>{item.title}</GovUK.Radio>
        ))}
      </GovUK.MultiChoice>
    );
  }
  return (
    <GovUK.Select label={props.schema.title} mb={4}>
      <option />
      {props?.schema?.oneOf?.map((item) => (
        <option value={item.const}>{item.title}</option>
      ))}
    </GovUK.Select>
  );
};

const customFields = {
  ArrayField: AnyOf,
  StringField: (props) => {
    const Component =
      props?.uiSchema?.['ui:widget'] === 'textarea'
        ? GovUK.TextArea
        : props?.schema?.format === 'data-url'
        ? GovUK.FileUpload
        : props?.schema?.format === 'date'
        ? GovUK.DateField
        : props?.schema?.oneOf
        ? OneOf
        : GovUK.InputField;
    return (
      <Component {...props} mb={4} hint={props.schema.description}>
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
      {errors}
      {help}
    </div>
  );
}

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
          <Form schema={schema} uiSchema={uiSchema} onSubmit={handleFormSubmit} />
          <Form
            schema={schema}
            uiSchema={uiSchema}
            fields={customFields}
            FieldTemplate={CustomFieldTemplate}
            ObjectFieldTemplate={ObjectFieldTemplate}
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
          dob={submittedData[0].dob}
          animal={submittedData[1].animal}
          hasMultiplePets={submittedData[1].hasMultiplePets}
          petPhoto={submittedData[1].petPhoto}
        />
      )}
    </>
  );
};

export default ReactJSONSchemaForm;
