/* eslint-disable react/prop-types */

import type { FormProps } from '@rjsf/core';
import type {
  ErrorListProps,
  FieldProps,
  FieldTemplateProps,
  ObjectFieldTemplateProps,
  RJSFValidationError,
} from '@rjsf/utils';

// TODO: extract these reusable parts in to a published module e.g. @govuk-react/json-schema-form

import React, { useCallback, useState } from 'react';
import * as GovUK from 'govuk-react';
import BaseForm from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import type { JSONSchema7Definition } from 'json-schema';

import DateOfBirth, { type DateValue } from './components/date-of-birth';

const dobObjToString = ({ year, month, day }: DateValue) =>
  `${year || ''}-${month ? String(month).padStart(2, '0') : ''}-${day ? String(day).padStart(2, '0') : ''}`;

export const dobStringToObj: (dob: string) => { year?: number; month?: number; day?: number } = (dob) => {
  if (!dob) return {};
  const [year, month, day] = dob.split('-').map((s) => s.trim());
  return { year: parseInt(year, 10), month: parseInt(month, 10), day: parseInt(day, 10) };
};

type InputProps = Pick<FieldProps, 'schema' | 'uiSchema' | 'onChange' | 'rawErrors' | 'name' | 'fieldPathId'>;

/** Options use a single-value enum rather than const, as rjsf's custom validation would otherwise default to the first. */
const options = (definitions: JSONSchema7Definition[] = []) =>
  definitions.flatMap((definition) =>
    typeof definition === 'boolean' ? [] : [{ value: String(definition.enum?.[0]), title: definition.title }]
  );

const DateField = ({ name, onChange, rawErrors, fieldPathId }: InputProps) => {
  const [value, setValue] = useState<DateValue>({ day: '', month: '', year: '' });
  const handleChange = useCallback(
    (newValue: DateValue) => {
      setValue(newValue);
      return onChange(dobObjToString(newValue), fieldPathId.path);
    },
    [onChange, fieldPathId]
  );

  return <DateOfBirth name={name} value={value} onChange={handleChange} errorMessage={rawErrors?.[0]} />;
};

const AnyOf: React.FC<FieldProps> = ({ name, schema, formData = [], onChange, rawErrors, fieldPathId }) => (
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
                  onChange(
                    e.target.checked ? formData.concat(item.const) : formData.filter((i: unknown) => i !== item.const),
                    fieldPathId.path
                  )
                }
              />
            )
        )
    )}
  </GovUK.Checkboxes.Field>
);

const OneOf = ({ schema, uiSchema, name, onChange, rawErrors, fieldPathId }: InputProps) => {
  if (uiSchema?.['ui:widget'] === 'radio') {
    return (
      <GovUK.Radios.Field idPrefix={name} legend={schema.title} errorMessage={rawErrors?.[0]}>
        {options(schema.oneOf).map((item, index) => (
          <GovUK.Radios.ItemComposite
            key={item.value}
            id={index ? `${name}-${index + 1}` : name}
            value={item.value}
            name={name}
            label={item.title}
            onChange={(e) => onChange(e.target.value, fieldPathId.path)}
          />
        ))}
      </GovUK.Radios.Field>
    );
  }
  return (
    <GovUK.SelectField
      id={name}
      name={name}
      label={schema.title}
      hint={schema.description}
      errorMessage={rawErrors?.[0]}
      onChange={(e) => onChange(e.target.value, fieldPathId.path)}
    >
      <option value="">Please select...</option>
      {options(schema.oneOf).map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </GovUK.SelectField>
  );
};

const handleFilesChanged =
  (onChange: InputProps['onChange'], path: InputProps['fieldPathId']['path']) =>
  ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    onChange(undefined, path);
    const file = target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onChange(reader.result, path);
      reader.readAsDataURL(file);
    }
  };

const FileUpload = ({ rawErrors, schema, onChange, name, fieldPathId }: InputProps) => (
  <GovUK.FileUploadField
    id={name}
    name={name}
    label={schema.title}
    hint={schema.description}
    errorMessage={rawErrors?.[0]}
    onChange={handleFilesChanged(onChange, fieldPathId.path)}
  />
);

const TextArea = ({ schema, rawErrors, onChange, name, fieldPathId }: InputProps) => (
  <GovUK.TextareaField
    id={name}
    name={name}
    label={schema.title}
    hint={schema.description}
    errorMessage={rawErrors?.[0]}
    onChange={(e) => onChange(e.target.value, fieldPathId.path)}
  />
);

const InputField = ({ schema, rawErrors, onChange, name, fieldPathId }: InputProps) => (
  <GovUK.InputField
    id={name}
    name={name}
    label={schema.title}
    hint={schema.description}
    errorMessage={rawErrors?.[0]}
    onChange={(e) => onChange(e.target.value, fieldPathId.path)}
  />
);

const StringField: React.FC<FieldProps> = ({ uiSchema, schema, onChange, rawErrors, name, fieldPathId }) => {
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

  return (
    <Component
      uiSchema={uiSchema}
      schema={schema}
      onChange={onChange}
      rawErrors={rawErrors}
      name={name}
      fieldPathId={fieldPathId}
    />
  );
};

const BooleanField: React.FC<FieldProps> = ({ name, schema, onChange, fieldPathId }) => (
  <GovUK.Checkboxes.Root>
    <GovUK.Checkboxes.ItemComposite
      id={name}
      name={name}
      label={schema.title}
      hint={schema.description}
      onChange={(e) => onChange(e.target.checked, fieldPathId.path)}
    />
  </GovUK.Checkboxes.Root>
);

export const customFields = {
  ArrayField: AnyOf,
  StringField,
  BooleanField,
};

const errorField = ({ property = '' }: RJSFValidationError) => property.split('.').pop();

export const ErrorListTemplate: React.FC<ErrorListProps> = ({ errors }) => (
  <GovUK.ErrorSummary.Composite title="Error summary" description="Please address the following issues">
    {errors.map((error) => (
      <GovUK.ErrorSummary.ListItemComposite key={error.stack} href={`#${errorField(error)}`}>
        {error.message}
      </GovUK.ErrorSummary.ListItemComposite>
    ))}
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

export const Form = <T,>(props: Omit<FormProps<T>, 'validator'>) => (
  <BaseForm<T>
    validator={validator}
    fields={customFields}
    templates={{ FieldTemplate: CustomFieldTemplate, ObjectFieldTemplate, ErrorListTemplate }}
    {...props}
  />
);
