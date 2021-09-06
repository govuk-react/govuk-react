/* eslint-disable react/prop-types */

// TODO: extract these reusable parts in to a published module e.g. @govuk-react/json-schema-form

import React, { useCallback, useState } from 'react';
import * as GovUK from 'govuk-react';
import BaseForm from '@rjsf/core';

const dobObjToString = ({ year, month, day }) =>
  `${year || ''}-${month ? month.padStart(2, '0') : ''}-${day ? day.padStart(2, '0') : ''}`;

export const dobStringToObj = (dob) => {
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

export const customFields = {
  ArrayField: AnyOf,
  StringField,
  BooleanField,
};

export const ErrorListTemplate = ({ errors, ...rest }) => (
  <GovUK.ErrorSummary
    heading="Error summary"
    description="Please address the following issues"
    errors={errors.map((error, n) => ({
      targetName: error.name || String(n),
      text: error.stack.substring(error.stack.indexOf(' ') + 1),
    }))}
  />
);

export function ObjectFieldTemplate({ title, properties }) {
  return (
    <GovUK.Fieldset>
      {title && <GovUK.Fieldset.Legend size="M">{title}</GovUK.Fieldset.Legend>}
      {properties.map((element) => element.content)}
    </GovUK.Fieldset>
  );
}

export const CustomFieldTemplate = ({ children }) => children;

export const Form = (props) => (
  <BaseForm
    fields={customFields}
    FieldTemplate={CustomFieldTemplate}
    ObjectFieldTemplate={ObjectFieldTemplate}
    ErrorList={ErrorListTemplate}
    {...props}
  />
);
