/* eslint-disable react/prop-types */

import type { FormProps, FieldTemplateProps, AjvError, ObjectFieldTemplateProps, FieldProps } from '@rjsf/core';

// TODO: extract these reusable parts in to a published module e.g. @govuk-react/json-schema-form

import React, { useCallback, useState } from 'react';
import * as GovUK from 'govuk-react';
import BaseForm from '@rjsf/core';

import DateOfBirth, { type DateValue } from './components/date-of-birth';

const dobObjToString = ({ year, month, day }: DateValue) =>
  `${year || ''}-${month ? String(month).padStart(2, '0') : ''}-${day ? String(day).padStart(2, '0') : ''}`;

export const dobStringToObj: (dob: string) => { year?: number; month?: number; day?: number } = (dob) => {
  if (!dob) return {};
  const [year, month, day] = dob.split('-').map((s) => s.trim());
  return { year: parseInt(year, 10), month: parseInt(month, 10), day: parseInt(day, 10) };
};

const DateField = ({ name, onChange, rawErrors }) => {
  const [value, setValue] = useState<DateValue>({ day: '', month: '', year: '' });
  const handleChange = useCallback(
    (newValue: DateValue) => {
      setValue(newValue);
      return onChange(dobObjToString(newValue));
    },
    [onChange]
  );

  return <DateOfBirth name={name} value={value} onChange={handleChange} errorMessage={rawErrors?.[0]} />;
};

const AnyOf: React.FC<FieldProps> = ({ name, schema, formData = [], onChange, rawErrors }) => (
  <GovUK.Checkboxes.Field idPrefix={name} legend={schema.title} errorMessage={rawErrors?.[0]}>
    {(Array.isArray(schema?.items) ? schema.items : [schema?.items]).map(
      (items) =>
        typeof items !== 'boolean' &&
        items?.anyOf?.map(
          (item, index) =>
            typeof item !== 'boolean' && (
              <GovUK.Checkboxes.ItemComposite
                key={String(item.const)}
                id={index ? `${name}-${index + 1}` : name}
                name={name}
                value={String(item.const)}
                label={item.title}
                hint={item.description}
                onChange={(e) =>
                  onChange(e.target.checked ? formData.concat(item.const) : formData.filter((i) => i !== item.const))
                }
              />
            )
        )
    )}
  </GovUK.Checkboxes.Field>
);

const OneOf = ({ schema, uiSchema, name, onChange, rawErrors }) => {
  if (uiSchema?.['ui:widget'] === 'radio') {
    return (
      <GovUK.Radios.Field idPrefix={name} legend={schema.title} errorMessage={rawErrors?.[0]}>
        {schema?.oneOf?.map((item, index) => (
          <GovUK.Radios.ItemComposite
            key={item.const}
            id={index ? `${name}-${index + 1}` : name}
            value={item.const}
            name={name}
            label={item.title}
            onChange={(e) => onChange(e.target.value)}
          />
        ))}
      </GovUK.Radios.Field>
    );
  }
  return (
    <GovUK.Select.Field
      id={name}
      name={name}
      label={schema.title}
      hint={schema.description}
      errorMessage={rawErrors?.[0]}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Please select...</option>
      {schema?.oneOf?.map((item) => (
        <option key={item.const} value={item.const}>
          {item.title}
        </option>
      ))}
    </GovUK.Select.Field>
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
  <GovUK.FileUpload.Field
    id={name}
    name={name}
    label={schema.title}
    hint={schema.description}
    errorMessage={rawErrors?.[0]}
    onChange={handleFilesChanged(onChange)}
  />
);

const TextArea = ({ schema, rawErrors, onChange, name }) => (
  <GovUK.Textarea.Field
    id={name}
    name={name}
    label={schema.title}
    hint={schema.description}
    errorMessage={rawErrors?.[0]}
    onChange={(e) => onChange(e.target.value)}
  />
);

const InputField = ({ schema, rawErrors, onChange, name }) => (
  <GovUK.Input.Field
    id={name}
    name={name}
    label={schema.title}
    hint={schema.description}
    errorMessage={rawErrors?.[0]}
    onChange={(e) => onChange(e.target.value)}
  />
);

// interface StringFieldProps {
//   uiSchema: any;
//   schema: any;
//   onChange: (value: any) => void;
//   rawErrors?: string[];
//   name: string;
// }
const StringField: React.FC<FieldProps> = ({ uiSchema, schema, onChange, rawErrors, name }) => {
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

const BooleanField: React.FC<FieldProps> = ({ name, schema, onChange }) => (
  <GovUK.Checkboxes.Root>
    <GovUK.Checkboxes.ItemComposite
      id={name}
      name={name}
      label={schema.title}
      hint={schema.description}
      onChange={(e) => onChange(e.target.checked)}
    />
  </GovUK.Checkboxes.Root>
);

export const customFields = {
  ArrayField: AnyOf,
  StringField,
  BooleanField,
};

// Schema errors have a property such as ".firstName". Custom validation errors only have a stack, "firstName: message".
const errorFieldAndMessage = ({ property, message, stack }: AjvError) => {
  if (property) return { field: property.replace(/^\./, ''), message };
  const separator = stack.indexOf(': ');
  return { field: stack.slice(0, separator), message: stack.slice(separator + 2) };
};

export const ErrorListTemplate: React.FC<{ errors: AjvError[] }> = ({ errors }) => (
  <GovUK.ErrorSummary.Composite title="Error summary" description="Please address the following issues">
    {errors.map((error) => {
      const { field, message } = errorFieldAndMessage(error);
      return (
        <GovUK.ErrorSummary.ListItemComposite key={error.stack} href={`#${field}`}>
          {message}
        </GovUK.ErrorSummary.ListItemComposite>
      );
    })}
  </GovUK.ErrorSummary.Composite>
);

export const ObjectFieldTemplate: React.FC<ObjectFieldTemplateProps> = ({ title, properties }) => {
  return (
    <GovUK.Fieldset.Composite legend={title} legendSize="m">
      {properties.map((element) => element.content)}
    </GovUK.Fieldset.Composite>
  );
};

export const CustomFieldTemplate: React.FC<FieldTemplateProps> = ({ children }) => <>{children}</>;

export const Form: React.FC<FormProps<void>> = (props) => (
  <BaseForm
    fields={customFields}
    FieldTemplate={CustomFieldTemplate}
    ObjectFieldTemplate={ObjectFieldTemplate}
    ErrorList={ErrorListTemplate}
    {...props}
  />
);
