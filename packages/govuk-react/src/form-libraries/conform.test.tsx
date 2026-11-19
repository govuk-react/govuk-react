import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  getFormProps,
  getInputProps,
  getSelectProps,
  getTextareaProps,
  useForm,
  type SubmissionResult,
} from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod/v4';
import { z } from 'zod';
import {
  Button,
  CharacterCount,
  Checkboxes,
  DateInput,
  EnhancedFileUpload,
  InputField,
  PasswordInput,
  Radios,
  SearchBox,
  SelectField,
  TextareaField,
} from '..';

// The elements upgrade in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

/** Conform's props for a control, without `key`, which React won't take in a spread. */
const control = <P extends { key: string | undefined }>({ key, ...props }: P) => props;

/** Conform's props for a checkbox or radio, whose part sets its own `type`. */
const choice = <P extends { key: string | undefined; type: string }>({ key, type, ...props }: P) => props;

const schema = z.object({
  name: z.string({ error: 'Enter your full name' }),
  details: z.string({ error: 'Enter details' }),
  country: z.string({ error: 'Select a country' }),
  contact: z.array(z.string()).min(1, 'Select how to be contacted'),
  phone: z.string().optional(),
  where: z.string({ error: 'Select where you live' }),
  dob: z.object({
    day: z.string({ error: 'Enter your date of birth' }),
    month: z.string({ error: 'Enter your date of birth' }),
    year: z.string({ error: 'Enter your date of birth' }),
  }),
  bio: z.string().max(10, 'Bio must be 10 characters or fewer').optional(),
  password: z.string({ error: 'Enter a password' }),
  photo: z.instanceof(File).optional(),
  q: z.string().optional(),
});

type Values = z.infer<typeof schema>;

const dateParts: ('day' | 'month' | 'year')[] = ['day', 'month', 'year'];

function Example({
  lastResult,
  defaultValue,
  onSubmit = () => {},
}: {
  lastResult?: SubmissionResult<string[]>;
  defaultValue?: Omit<Values, 'photo'>;
  onSubmit?: (values: Values) => void;
}) {
  const [form, fields] = useForm<Values>({
    id: 'example',
    lastResult,
    defaultValue,
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
    onValidate: ({ formData }) => parseWithZod(formData, { schema }),
    onSubmit(event, { submission }) {
      event.preventDefault();
      if (submission?.status === 'success') onSubmit(submission.value);
    },
  });
  const dob = fields.dob.getFieldset();
  const error = (field: { errors?: string[] }) => field.errors?.[0];

  return (
    <form {...getFormProps(form)} encType="multipart/form-data">
      <InputField
        label="Full name"
        {...control(getInputProps(fields.name, { type: 'text' }))}
        errorMessage={error(fields.name)}
      />
      <TextareaField
        label="Details"
        {...control(getTextareaProps(fields.details))}
        errorMessage={error(fields.details)}
      />
      <SelectField label="Country" {...control(getSelectProps(fields.country))} errorMessage={error(fields.country)}>
        <option value="">Choose country</option>
        <option value="england">England</option>
        <option value="scotland">Scotland</option>
      </SelectField>
      <Checkboxes.Field
        idPrefix={fields.contact.id}
        legend="How would you like to be contacted?"
        errorMessage={error(fields.contact)}
      >
        <Checkboxes.ItemComposite
          label="Email"
          {...choice(getInputProps(fields.contact, { type: 'checkbox', value: 'email' }))}
          id={`${fields.contact.id}-email`}
        />
        <Checkboxes.ItemComposite
          label="Phone"
          conditional={<InputField label="Phone number" {...control(getInputProps(fields.phone, { type: 'tel' }))} />}
          {...choice(getInputProps(fields.contact, { type: 'checkbox', value: 'phone' }))}
          id={`${fields.contact.id}-phone`}
        />
      </Checkboxes.Field>
      <Radios.Field idPrefix={fields.where.id} legend="Where do you live?" errorMessage={error(fields.where)}>
        <Radios.ItemComposite
          label="England"
          {...choice(getInputProps(fields.where, { type: 'radio', value: 'england' }))}
          id={`${fields.where.id}-england`}
        />
        <Radios.ItemComposite
          label="Wales"
          {...choice(getInputProps(fields.where, { type: 'radio', value: 'wales' }))}
          id={`${fields.where.id}-wales`}
        />
      </Radios.Field>
      <DateInput.Field
        id={fields.dob.id}
        legend="Date of birth"
        errorMessage={error(dob.day) ?? error(dob.month) ?? error(dob.year)}
      >
        {dateParts.map((part) => (
          <DateInput.Item key={part}>
            <DateInput.Label htmlFor={dob[part].id}>{part}</DateInput.Label>
            <DateInput.Input
              error={Boolean(dob[part].errors)}
              {...control(getInputProps(dob[part], { type: 'text' }))}
            />
          </DateInput.Item>
        ))}
      </DateInput.Field>
      <CharacterCount.Field
        label="Bio"
        maxLength={10}
        {...control(getTextareaProps(fields.bio))}
        errorMessage={error(fields.bio)}
      />
      <PasswordInput.Field
        label="Password"
        {...control(getInputProps(fields.password, { type: 'password' }))}
        errorMessage={error(fields.password)}
      />
      <EnhancedFileUpload.Field label="Photo" {...control(getInputProps(fields.photo, { type: 'file' }))} />
      <SearchBox.AutocompleteComposite
        suggestions={['Tax your vehicle', 'Tax credits']}
        {...control(getInputProps(fields.q, { type: 'search' }))}
      />
      <Button>Continue</Button>
    </form>
  );
}

const filled: Values = {
  name: 'Sherlock Holmes',
  details: 'Consulting detective',
  country: 'england',
  contact: ['email', 'phone'],
  phone: '01234',
  where: 'wales',
  dob: { day: '6', month: '1', year: '1854' },
  bio: 'Detective',
  password: 'violin',
  q: 'Tax credits',
};

/** Puts server-rendered markup in the document, as the browser shows it before or without JavaScript. */
const serverRender = (element: React.ReactElement) => {
  const container = document.createElement('div');
  container.innerHTML = renderToString(element);
  document.body.appendChild(container);
  return container;
};

/** The form as the browser submits it without JavaScript. */
const formData = (container: HTMLElement) => {
  const form = container.querySelector('form');
  if (!form) throw new Error('No form');
  return new FormData(form);
};

describe('Conform', () => {
  afterEach(() => document.body.replaceChildren());

  test('without JavaScript, the server-rendered form submits values the schema parses', () => {
    const submission = parseWithZod(formData(serverRender(<Example defaultValue={filled} />)), { schema });
    expect(submission.status).toBe('success');
    expect(submission.status === 'success' && submission.value).toEqual(filled);
  });

  test('without JavaScript, the server renders the errors from a failed submission', () => {
    const submission = parseWithZod(new FormData(), { schema });
    serverRender(<Example lastResult={submission.reply()} />);

    expect(screen.getByLabelText('Full name')).toHaveAccessibleDescription('Error: Enter your full name');
    expect(screen.getByLabelText('Full name')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByRole('group', { name: 'How would you like to be contacted?' })).toHaveAccessibleDescription(
      'Error: Select how to be contacted'
    );
    expect(screen.getByRole('group', { name: 'Date of birth' })).toHaveAccessibleDescription(
      'Error: Enter your date of birth'
    );
    expect(screen.getByLabelText('Password')).toHaveAccessibleDescription('Error: Enter a password');
  });

  test('hydrates the server-rendered form, which then submits on the client', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    const container = serverRender(<Example defaultValue={filled} />);
    const errors = vi.spyOn(console, 'error');

    render(<Example defaultValue={filled} onSubmit={onSubmit} />, { container, hydrate: true });
    await upgraded();
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    expect(errors).not.toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(filled);
    errors.mockRestore();
  });

  test('client validation shows errors, focuses the first invalid field, and clears as the user fixes it', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<Example onSubmit={onSubmit} />);
    await upgraded();

    await user.click(screen.getByRole('button', { name: 'Continue' }));
    expect(onSubmit).not.toHaveBeenCalled();
    const name = screen.getByLabelText('Full name');
    expect(name).toHaveFocus();
    expect(name).toHaveAccessibleDescription('Error: Enter your full name');
    expect(name).toHaveClass('govuk-input--error');

    await user.type(name, 'Sherlock');
    expect(name).not.toHaveAccessibleDescription();
    expect(name).not.toHaveClass('govuk-input--error');

    await user.type(screen.getByLabelText('Bio'), 'Consulting detective');
    await user.tab();
    expect(screen.getByLabelText('Bio')).toHaveAccessibleDescription(/Bio must be 10 characters or fewer/);
  });

  test('submits what the user enters, including a chosen search suggestion', async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<Example onSubmit={onSubmit} />);
    await upgraded();

    await user.type(screen.getByLabelText('Full name'), filled.name);
    await user.type(screen.getByLabelText('Details'), filled.details);
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
    // Validating as the user types keeps the password shown.
    await user.click(screen.getByRole('button', { name: 'Show password' }));
    await user.type(screen.getByLabelText('Password'), '!');
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text');
    await user.type(screen.getByRole('combobox', { name: 'Search on GOV.UK' }), 'Tax');
    await user.click(screen.getByRole('option', { name: 'Tax credits' }));

    await vi.waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    expect(onSubmit).toHaveBeenCalledWith({ ...filled, password: 'violin!' });
  });

  test('resetting the form resets the character count and reveals', async () => {
    const user = userEvent.setup();
    const { container } = render(<Example />);
    await upgraded();
    const count = () => screen.getByText(/characters? (remaining|too many)/, { selector: '[aria-hidden]' });

    await user.type(screen.getByLabelText('Bio'), 'Consulting detective');
    await user.click(screen.getByLabelText('Phone'));
    expect(count()).toHaveTextContent('You have 10 characters too many');
    expect(screen.getByLabelText('Phone')).toHaveAttribute('aria-expanded', 'true');

    act(() => container.querySelector('form')?.reset());
    await act(() => new Promise((resolve) => setTimeout(resolve)));
    expect(screen.getByLabelText('Bio')).toHaveValue('');
    expect(count()).toHaveTextContent('You have 10 characters remaining');
    expect(screen.getByLabelText('Phone')).toHaveAttribute('aria-expanded', 'false');
  });
});
