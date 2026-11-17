import React from 'react';
import * as GovUK from 'govuk-react';

export type DateValue = { day?: string | number; month?: string | number; year?: string | number };

type DateOfBirthProps = {
  name: string;
  value: DateValue;
  onChange: (value: DateValue) => void;
  onBlur?: () => void;
  errorMessage?: string;
};

const parts = [
  { part: 'day', label: 'Day', width: 2 },
  { part: 'month', label: 'Month', width: 2 },
  { part: 'year', label: 'Year', width: 4 },
] as const;

/** A controlled date of birth field, built from govuk-react's DateInput parts. */
const DateOfBirth: React.FC<DateOfBirthProps> = ({ name, value, onChange, onBlur, errorMessage }) => (
  <GovUK.DateInput.Field id={name} legend="Date of birth" errorMessage={errorMessage}>
    {parts.map(({ part, label, width }) => (
      <GovUK.DateInput.Item key={part}>
        <GovUK.FormGroup>
          <GovUK.DateInput.Label htmlFor={`${name}-${part}`}>{label}</GovUK.DateInput.Label>
          <GovUK.DateInput.Input
            id={`${name}-${part}`}
            name={`${name}-${part}`}
            width={width}
            error={!!errorMessage}
            value={value?.[part] ?? ''}
            onChange={(e) => onChange({ ...value, [part]: e.target.value })}
            onBlur={onBlur}
          />
        </GovUK.FormGroup>
      </GovUK.DateInput.Item>
    ))}
  </GovUK.DateInput.Field>
);

export default DateOfBirth;
