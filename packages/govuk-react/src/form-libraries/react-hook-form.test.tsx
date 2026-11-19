import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, useWatch, type Control } from 'react-hook-form';
import {
  Button,
  CharacterCount,
  Checkboxes,
  DateInput,
  EnhancedFileUpload,
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

// A form reset changes fields after its event, so the elements catch up in a task of their own.
const settled = () => act(() => new Promise((resolve) => setTimeout(resolve)));

/** Whether the content a checkbox or radio controls is shown, and it says so. */
const revealed = (input: HTMLElement) => {
  const conditional = document.getElementById(input.getAttribute('aria-controls') ?? '');
  const shown = Boolean(conditional && !conditional.className.includes('conditional--hidden'));
  expect(input).toHaveAttribute('aria-expanded', String(shown));
  return shown;
};

const fileInput = (container: HTMLElement, name: string) => {
  const input = container.querySelector<HTMLInputElement>(`input[type="file"][name="${name}"]`);
  if (!input) throw new Error(`No file input named ${name}`);
  return input;
};

const dateParts: ('day' | 'month' | 'year')[] = ['day', 'month', 'year'];

type Values = {
  name: string;
  details: string;
  country: string;
  contact: string[];
  phone: string;
  where: string;
  postcode: string;
  day: string;
  month: string;
  year: string;
  bio: string;
  password: string;
  passport: FileList;
  photo: FileList;
  q: string;
};

const defaultValues: Partial<Values> = { name: 'Sherlock', contact: [], where: '', bio: '' };

/** The checked contact options, re-rendering only itself. */
function ContactValue({ control }: { control: Control<Values> }) {
  return <output aria-label="Contact">{useWatch({ control, name: 'contact' }).join(', ')}</output>;
}

function Example({ onSubmit = () => {} }: { onSubmit?: (values: Values) => void }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<Values>({ defaultValues });
  const required = (message: string) => ({ required: message });
  // Each checkbox or radio in a group takes the same rules.
  const contact = { validate: (value: string[]) => value.length > 0 || 'Select how to be contacted' };
  const where = required('Select where you live');

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputField
        label="Full name"
        {...register('name', required('Enter your full name'))}
        errorMessage={errors.name?.message}
      />
      <TextareaField
        label="Details"
        {...register('details', required('Enter details'))}
        errorMessage={errors.details?.message}
      />
      <SelectField
        label="Country"
        {...register('country', required('Select a country'))}
        errorMessage={errors.country?.message}
      >
        <option value="">Choose country</option>
        <option value="england">England</option>
        <option value="scotland">Scotland</option>
      </SelectField>
      <Checkboxes.Field
        idPrefix="contact"
        legend="How would you like to be contacted?"
        errorMessage={errors.contact?.message}
      >
        <Checkboxes.ItemComposite id="contact" value="email" label="Email" {...register('contact', contact)} />
        <Checkboxes.ItemComposite
          id="contact-phone"
          value="phone"
          label="Phone"
          conditional={<InputField label="Phone number" {...register('phone')} />}
          {...register('contact', contact)}
        />
        <Checkboxes.Divider>or</Checkboxes.Divider>
        <Checkboxes.ItemComposite
          id="contact-none"
          value="none"
          label="None of these"
          exclusive
          {...register('contact', contact)}
        />
      </Checkboxes.Field>
      <Radios.Field idPrefix="where" legend="Where do you live?" errorMessage={errors.where?.message}>
        <Radios.ItemComposite id="where" value="england" label="England" {...register('where', where)} />
        <Radios.ItemComposite
          id="where-wales"
          value="wales"
          label="Wales"
          conditional={<InputField label="Postcode" {...register('postcode')} />}
          {...register('where', where)}
        />
      </Radios.Field>
      <DateInput.Field id="dob" legend="Date of birth" errorMessage={errors.day?.message}>
        {dateParts.map((part) => (
          <DateInput.Item key={part}>
            <DateInput.Label htmlFor={`dob-${part}`}>{part}</DateInput.Label>
            <DateInput.Input
              id={`dob-${part}`}
              error={Boolean(errors.day)}
              {...register(part, required('Enter your date of birth'))}
            />
          </DateInput.Item>
        ))}
      </DateInput.Field>
      <CharacterCount.Field
        label="Bio"
        maxLength={10}
        {...register('bio', { maxLength: { value: 10, message: 'Bio must be 10 characters or fewer' } })}
        errorMessage={errors.bio?.message}
      />
      <PasswordInput.Field
        label="Password"
        {...register('password', required('Enter a password'))}
        errorMessage={errors.password?.message}
      />
      <FileUploadField label="Passport" {...register('passport')} />
      <EnhancedFileUpload.Field label="Photo" {...register('photo')} />
      <SearchBox.AutocompleteComposite id="q" suggestions={['Tax your vehicle', 'Tax credits']} {...register('q')} />
      <Button>Continue</Button>
      <ContactValue control={control} />
      <Button type="button" onClick={() => reset()}>
        Start again
      </Button>
      <Button
        type="button"
        onClick={() => {
          setValue('contact', ['phone']);
          setValue('where', 'wales');
          setValue('bio', 'Detective');
        }}
      >
        Load draft
      </Button>
    </form>
  );
}

describe('React Hook Form', () => {
  test('register’s ref reaches the native element, so its values are submitted', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    const { container } = render(<Example onSubmit={onSubmit} />);
    await upgraded();

    await user.clear(screen.getByLabelText('Full name'));
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
    await user.type(screen.getByLabelText('Password'), 'violin');
    await user.upload(screen.getByLabelText('Passport'), new File(['x'], 'passport.jpg'));
    await user.upload(fileInput(container, 'photo'), new File(['x'], 'photo.jpg'));
    await user.type(screen.getByRole('combobox', { name: 'Search on GOV.UK' }), 'Tax');
    await user.click(screen.getByRole('option', { name: 'Tax credits' }));

    await vi.waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    const [values] = onSubmit.mock.calls[0];
    expect(values).toMatchObject({
      name: 'Sherlock Holmes',
      details: 'Consulting detective',
      country: 'england',
      contact: ['email', 'phone'],
      phone: '01234',
      where: 'wales',
      day: '6',
      month: '1',
      year: '1854',
      bio: 'Detective',
      password: 'violin',
      q: 'Tax credits',
    });
    expect(values.passport[0].name).toBe('passport.jpg');
    expect(values.photo[0].name).toBe('photo.jpg');
  });

  test('errors show in the error message, linked to the field, and the first invalid field is focused', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    const { container } = render(<Example onSubmit={onSubmit} />);
    await upgraded();

    await user.clear(screen.getByLabelText('Full name'));
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByLabelText('Full name')).toHaveFocus();
    expect(screen.getByLabelText('Full name')).toHaveAccessibleDescription('Error: Enter your full name');
    expect(screen.getByLabelText('Full name')).toHaveClass('govuk-input--error');
    expect(screen.getByLabelText('Details')).toHaveAccessibleDescription(/Enter details/);
    expect(screen.getByLabelText('Country')).toHaveAccessibleDescription(/Select a country/);
    expect(screen.getByRole('group', { name: 'How would you like to be contacted?' })).toHaveAccessibleDescription(
      /Select how to be contacted/
    );
    expect(screen.getByRole('group', { name: 'Where do you live?' })).toHaveAccessibleDescription(
      /Select where you live/
    );
    expect(screen.getByRole('group', { name: 'Date of birth' })).toHaveAccessibleDescription(
      /Enter your date of birth/
    );
    expect(screen.getByLabelText('Password')).toHaveAccessibleDescription(/Enter a password/);
    expect(container.querySelectorAll('.govuk-form-group--error')).toHaveLength(7);
  });

  test('an exclusive checkbox unchecks the others in the form’s values', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await upgraded();

    await user.click(screen.getByLabelText('Email'));
    await user.click(screen.getByLabelText('None of these'));
    await vi.waitFor(() => expect(screen.getByLabelText('Email')).not.toBeChecked());
    expect(screen.getByRole('status', { name: 'Contact' })).toHaveTextContent(/^none$/);
  });

  test('conditional reveals follow values reset and setValue set', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await upgraded();
    const phone = screen.getByLabelText('Phone');

    expect(revealed(phone)).toBe(false);
    await user.click(phone);
    expect(revealed(phone)).toBe(true);
    await user.click(screen.getByRole('button', { name: 'Start again' }));
    await settled();
    expect(phone).not.toBeChecked();
    expect(revealed(phone)).toBe(false);

    await user.click(screen.getByRole('button', { name: 'Load draft' }));
    await upgraded();
    expect(phone).toBeChecked();
    expect(revealed(phone)).toBe(true);
    expect(screen.getByLabelText('Wales')).toBeChecked();
    expect(revealed(screen.getByLabelText('Wales'))).toBe(true);
  });

  test('the character count follows values reset and setValue set', async () => {
    const user = userEvent.setup();
    render(<Example />);
    await upgraded();
    const count = () => screen.getByText(/characters? (remaining|too many)/, { selector: '[aria-hidden]' });

    await user.type(screen.getByLabelText('Bio'), 'Consulting detective');
    expect(count()).toHaveTextContent('You have 10 characters too many');
    await user.click(screen.getByRole('button', { name: 'Start again' }));
    await settled();
    expect(count()).toHaveTextContent('You have 10 characters remaining');
    await user.click(screen.getByRole('button', { name: 'Load draft' }));
    expect(count()).toHaveTextContent('You have 1 character remaining');
  });
});
