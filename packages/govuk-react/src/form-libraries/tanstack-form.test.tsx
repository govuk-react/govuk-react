import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, type AnyFieldApi } from '@tanstack/react-form';
import { z } from 'zod';
import {
  Button,
  CharacterCount,
  Checkboxes,
  DateInput,
  FileUploadField,
  InputField,
  PasswordInput,
  Radios,
  SearchBox,
  SelectField,
  TextareaField,
} from '..';

// The elements upgrade in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const required = (message: string) => z.string().min(1, message);

const schema = z.object({
  name: required('Enter your full name'),
  details: required('Enter details'),
  country: required('Select a country'),
  contact: z.array(z.string()).min(1, 'Select how to be contacted'),
  phone: z.string(),
  where: required('Select where you live'),
  dob: z.object({ day: required('Enter your date of birth'), month: z.string(), year: z.string() }),
  bio: z.string().max(10, 'Bio must be 10 characters or fewer'),
  password: required('Enter a password'),
  passport: z.array(z.instanceof(File)),
  q: z.string(),
});

type Values = z.infer<typeof schema>;

const empty: Values = {
  name: '',
  details: '',
  country: '',
  contact: [],
  phone: '',
  where: '',
  dob: { day: '', month: '', year: '' },
  bio: '',
  password: '',
  passport: [],
  q: '',
};

/** The field's first error message, once the user has left it or submitted. */
const errorOf = (field: AnyFieldApi) => {
  const [error] = field.state.meta.errors;
  return field.state.meta.isTouched && error ? String(error.message ?? error) : undefined;
};

/** The props for a text control, controlled by the form. */
const control = (field: AnyFieldApi) => ({
  name: field.name,
  value: String(field.state.value),
  onBlur: field.handleBlur,
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    field.handleChange(event.target.value),
});

/** The props for a text field, with its error message. */
const text = (field: AnyFieldApi) => ({ ...control(field), errorMessage: errorOf(field) });

const dateParts: ('day' | 'month' | 'year')[] = ['day', 'month', 'year'];

function Example({ onSubmit = () => {} }: { onSubmit?: (values: Values) => void }) {
  const form = useForm({
    defaultValues: empty,
    validators: { onBlur: schema, onSubmit: schema },
    onSubmit: ({ value }) => onSubmit(value),
  });

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.Field name="name">{(field) => <InputField label="Full name" {...text(field)} />}</form.Field>
      <form.Field name="details">{(field) => <TextareaField label="Details" {...text(field)} />}</form.Field>
      <form.Field name="country">
        {(field) => (
          <SelectField label="Country" {...text(field)}>
            <option value="">Choose country</option>
            <option value="england">England</option>
            <option value="scotland">Scotland</option>
          </SelectField>
        )}
      </form.Field>
      <form.Field name="contact">
        {(field) => {
          const option = (value: string) => ({
            name: field.name,
            value,
            checked: field.state.value.includes(value),
            onBlur: field.handleBlur,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              field.handleChange((current) =>
                event.target.checked ? [...current, value] : current.filter((other) => other !== value)
              ),
          });
          return (
            <Checkboxes.Field
              idPrefix="contact"
              legend="How would you like to be contacted?"
              errorMessage={errorOf(field)}
            >
              <Checkboxes.ItemComposite id="contact" label="Email" {...option('email')} />
              <Checkboxes.ItemComposite
                id="contact-phone"
                label="Phone"
                conditional={
                  <form.Field name="phone">
                    {(phone) => <InputField label="Phone number" {...text(phone)} />}
                  </form.Field>
                }
                {...option('phone')}
              />
              <Checkboxes.Divider>or</Checkboxes.Divider>
              <Checkboxes.ItemComposite id="contact-none" label="None of these" exclusive {...option('none')} />
            </Checkboxes.Field>
          );
        }}
      </form.Field>
      <form.Field name="where">
        {(field) => (
          <Radios.Field idPrefix="where" legend="Where do you live?" errorMessage={errorOf(field)}>
            {['england', 'wales'].map((value) => (
              <Radios.ItemComposite
                key={value}
                id={value === 'england' ? 'where' : `where-${value}`}
                label={value === 'england' ? 'England' : 'Wales'}
                name={field.name}
                value={value}
                checked={field.state.value === value}
                onBlur={field.handleBlur}
                onChange={() => field.handleChange(value)}
              />
            ))}
          </Radios.Field>
        )}
      </form.Field>
      <form.Field name="dob.day">
        {(day) => (
          <DateInput.Field id="dob" legend="Date of birth" errorMessage={errorOf(day)}>
            {dateParts.map((part) => (
              <form.Field key={part} name={`dob.${part}`}>
                {(field) => (
                  <DateInput.Item>
                    <DateInput.Label htmlFor={`dob-${part}`}>{part}</DateInput.Label>
                    <DateInput.Input id={`dob-${part}`} error={Boolean(errorOf(day))} {...control(field)} />
                  </DateInput.Item>
                )}
              </form.Field>
            ))}
          </DateInput.Field>
        )}
      </form.Field>
      <form.Field name="bio">
        {(field) => <CharacterCount.Field label="Bio" maxLength={10} {...text(field)} />}
      </form.Field>
      <form.Field name="password">{(field) => <PasswordInput.Field label="Password" {...text(field)} />}</form.Field>
      <form.Field name="passport">
        {(field) => (
          <FileUploadField
            label="Passport"
            name={field.name}
            onBlur={field.handleBlur}
            onChange={(event) => field.handleChange(Array.from(event.target.files ?? []))}
          />
        )}
      </form.Field>
      <form.Field name="q">
        {(field) => (
          <SearchBox.AutocompleteComposite
            id="q"
            suggestions={['Tax your vehicle', 'Tax credits']}
            {...control(field)}
          />
        )}
      </form.Field>
      <Button>Continue</Button>
      <Button type="button" onClick={() => form.reset()}>
        Start again
      </Button>
      <Button type="button" onClick={() => form.setFieldValue('bio', 'Detective')}>
        Load draft
      </Button>
    </form>
  );
}

describe('TanStack Form', () => {
  test('controlled fields submit what the user enters', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<Example onSubmit={onSubmit} />);
    await upgraded();

    await user.type(screen.getByLabelText('Full name'), 'Sherlock Holmes');
    await user.type(screen.getByLabelText('Details'), 'Consulting detective');
    await user.selectOptions(screen.getByLabelText('Country'), 'england');
    await user.click(screen.getByLabelText('Email'));
    await user.click(screen.getByLabelText('Phone'));
    await user.type(screen.getByLabelText('Phone number'), '01234');
    await user.click(screen.getByLabelText('Wales'));
    await user.type(screen.getByLabelText('day'), '6');
    await user.type(screen.getByLabelText('month'), '1');
    await user.type(screen.getByLabelText('year'), '1854');
    await user.type(screen.getByLabelText('Bio'), 'Detective');
    await user.click(screen.getByRole('button', { name: 'Show password' }));
    await user.type(screen.getByLabelText('Password'), 'violin');
    // Each key re-renders the field, which keeps the password shown.
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
    const passport = new File(['x'], 'passport.jpg');
    await user.upload(screen.getByLabelText('Passport'), passport);
    await user.type(screen.getByRole('combobox', { name: 'Search on GOV.UK' }), 'Tax');
    await user.click(screen.getByRole('option', { name: 'Tax credits' }));

    await vi.waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    expect(onSubmit).toHaveBeenCalledWith({
      name: 'Sherlock Holmes',
      details: 'Consulting detective',
      country: 'england',
      contact: ['email', 'phone'],
      phone: '01234',
      where: 'wales',
      dob: { day: '6', month: '1', year: '1854' },
      bio: 'Detective',
      password: 'violin',
      passport: [passport],
      q: 'Tax credits',
    });
  });

  test('errors show once the user leaves a field or submits, linked to the field', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    const { container } = render(<Example onSubmit={onSubmit} />);
    await upgraded();

    await user.click(screen.getByLabelText('Full name'));
    await user.tab();
    expect(screen.getByLabelText('Full name')).toHaveAccessibleDescription('Error: Enter your full name');
    expect(screen.getByLabelText('Details')).not.toHaveAccessibleDescription();

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByLabelText('Details')).toHaveAccessibleDescription('Error: Enter details');
    expect(screen.getByLabelText('Country')).toHaveAccessibleDescription('Error: Select a country');
    expect(screen.getByRole('group', { name: 'How would you like to be contacted?' })).toHaveAccessibleDescription(
      'Error: Select how to be contacted'
    );
    expect(screen.getByRole('group', { name: 'Where do you live?' })).toHaveAccessibleDescription(
      'Error: Select where you live'
    );
    expect(screen.getByRole('group', { name: 'Date of birth' })).toHaveAccessibleDescription(
      'Error: Enter your date of birth'
    );
    expect(screen.getByLabelText('Password')).toHaveAccessibleDescription('Error: Enter a password');
    expect(container.querySelectorAll('.govuk-form-group--error')).toHaveLength(7);

    await user.type(screen.getByLabelText('Full name'), 'Sherlock');
    await user.tab();
    expect(screen.getByLabelText('Full name')).not.toHaveAccessibleDescription();
  });

  test('an exclusive checkbox unchecks the others in the form’s state, and reveals follow it', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await upgraded();
    const phone = screen.getByLabelText('Phone');

    await user.click(screen.getByLabelText('Email'));
    await user.click(phone);
    expect(phone).toHaveAttribute('aria-expanded', 'true');
    await user.click(screen.getByLabelText('None of these'));
    await vi.waitFor(() => expect(phone).not.toBeChecked());
    expect(screen.getByLabelText('Email')).not.toBeChecked();
    expect(phone).toHaveAttribute('aria-expanded', 'false');

    // React keeps a controlled checkbox in its state, so the click stuck only because the form heard it.
    await user.click(screen.getByLabelText('Email'));
    await vi.waitFor(() => expect(screen.getByLabelText('None of these')).not.toBeChecked());
    expect(screen.getByLabelText('Email')).toBeChecked();
  });

  test('the character count follows values the form sets', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await upgraded();
    const count = () => screen.getByText(/characters? (remaining|too many)/, { selector: '[aria-hidden]' });

    await user.type(screen.getByLabelText('Bio'), 'Consulting detective');
    expect(count()).toHaveTextContent('You have 10 characters too many');
    await user.click(screen.getByRole('button', { name: 'Load draft' }));
    expect(count()).toHaveTextContent('You have 1 character remaining');
    await user.click(screen.getByRole('button', { name: 'Start again' }));
    expect(count()).toHaveTextContent('You have 10 characters remaining');
  });
});
