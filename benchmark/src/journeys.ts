import type { AstroCookies } from 'astro';

export const variants = ['govuk-frontend', 'govuk-react', 'govuk-react-hydrated'] as const;
export type Variant = (typeof variants)[number];

export const isVariant = (value: string | undefined): value is Variant => variants.some((variant) => variant === value);

export type FieldError = { id: string; text: string };

export const errorFor = (errors: FieldError[], id: string) => errors.find((error) => error.id === id)?.text;

const text = (form: FormData, name: string) => {
  const value = form.get(name);
  return typeof value === 'string' ? value.trim() : '';
};

export type Account = { username: string };

export function validateAccount(form: FormData) {
  const username = text(form, 'username');
  const password = text(form, 'password');
  const confirmPassword = text(form, 'confirmPassword');
  const errors: FieldError[] = [];

  if (!username) errors.push({ id: 'username', text: 'Enter a username' });
  else if (!/^[a-zA-Z0-9]+$/.test(username))
    errors.push({ id: 'username', text: 'Username must only include letters a to z and numbers' });

  if (!password) errors.push({ id: 'password', text: 'Enter a password' });
  else if (password.length < 8) errors.push({ id: 'password', text: 'Password must be 8 characters or more' });

  if (!confirmPassword) errors.push({ id: 'confirmPassword', text: 'Confirm your password' });
  else if (password && confirmPassword !== password)
    errors.push({ id: 'confirmPassword', text: 'Passwords must match' });

  return { values: { username }, errors };
}

export const contactMethods = [
  { value: 'email', text: 'Email', detail: { name: 'email', label: 'Email address', type: 'email' } },
  { value: 'phone', text: 'Phone', detail: { name: 'phone', label: 'Phone number', type: 'tel' } },
  { value: 'post', text: 'Post' },
] as const;

export type Contact = { method: string; email: string; phone: string };

export function validateContact(form: FormData) {
  const values: Contact = { method: text(form, 'method'), email: text(form, 'email'), phone: text(form, 'phone') };
  const errors: FieldError[] = [];

  if (!contactMethods.some(({ value }) => value === values.method))
    errors.push({ id: 'method', text: 'Select how you would like to be contacted' });
  else if (values.method === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email))
    errors.push({
      id: 'email',
      text: 'Enter an email address in the correct format, like name@example.com',
    });
  else if (values.method === 'phone' && !/^[0-9 +()-]{10,}$/.test(values.phone))
    errors.push({ id: 'phone', text: 'Enter a phone number, like 01632 960 001' });

  return { values, errors };
}

export const descriptionMaxLength = 200;

export type Event = { name: string; description: string };

export function validateEvent(form: FormData) {
  const values: Event = { name: text(form, 'name'), description: text(form, 'description') };
  const errors: FieldError[] = [];

  if (!values.name) errors.push({ id: 'name', text: 'Enter the name of your event' });
  if (!values.description) errors.push({ id: 'description', text: 'Describe your event' });
  else if (values.description.length > descriptionMaxLength)
    errors.push({
      id: 'description',
      text: `Description must be ${descriptionMaxLength} characters or less`,
    });

  return { values, errors };
}

/** The licence application so far, kept in a cookie so the server stays stateless. */
export type Licence = { contact?: Contact; event?: Event };

const licenceCookie = 'licence';

export function readLicence(cookies: AstroCookies): Licence {
  try {
    return cookies.get(licenceCookie)?.json() ?? {};
  } catch {
    return {};
  }
}

export function writeLicence(cookies: AstroCookies, licence: Licence) {
  cookies.set(licenceCookie, licence, { path: '/', httpOnly: true, sameSite: 'lax' });
}

export function clearLicence(cookies: AstroCookies) {
  cookies.delete(licenceCookie, { path: '/' });
}

export const contactSummary = ({ method, email, phone }: Contact) =>
  method === 'email' ? `Email: ${email}` : method === 'phone' ? `Phone: ${phone}` : 'Post';

export type Page = {
  title: string;
  errors: FieldError[];
};

export const pageTitle = ({ title, errors }: Page) => `${errors.length ? 'Error: ' : ''}${title} – Benchmark`;

export const serviceName = 'Apply for an event licence';
