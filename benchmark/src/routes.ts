import type { AstroCookies } from 'astro';
import {
  clearLicence,
  readLicence,
  validateAccount,
  validateContact,
  validateEvent,
  writeLicence,
  type Account,
  type Contact,
  type Event,
  type FieldError,
} from './journeys';

export type Screen =
  | { name: 'account'; title: string; values: Account; errors: FieldError[] }
  | { name: 'confirmation'; title: string; body: string; next: { href: string; text: string } }
  | { name: 'task-list'; title: string; contactDone: boolean; eventDone: boolean }
  | { name: 'contact'; title: string; values: Contact; errors: FieldError[] }
  | { name: 'event'; title: string; values: Event; errors: FieldError[] }
  | { name: 'check'; title: string; contact: Contact; event: Event };

export type Route = { redirect: string } | { screen: Screen } | { notFound: true };

type Context = { base: string; path: string; request: Request; cookies: AstroCookies };

const submitted = async (request: Request) => (request.method === 'POST' ? request.formData() : undefined);

/** What each page of the journeys shows, or where it redirects, shared by every variant. */
export async function route({ base, path, request, cookies }: Context): Promise<Route> {
  const form = await submitted(request);
  const licence = readLicence(cookies);

  switch (path) {
    case 'account': {
      if (!form)
        return { screen: { name: 'account', title: 'Create an account', values: { username: '' }, errors: [] } };
      const { values, errors } = validateAccount(form);
      if (!errors.length) return { redirect: `${base}/account/done` };
      return { screen: { name: 'account', title: 'Create an account', values, errors } };
    }
    case 'account/done':
      return {
        screen: {
          name: 'confirmation',
          title: 'Account created',
          body: 'You can now apply for an event licence',
          next: { href: `${base}/licence`, text: 'Apply for an event licence' },
        },
      };
    case 'licence':
      return {
        screen: {
          name: 'task-list',
          title: 'Apply for an event licence',
          contactDone: Boolean(licence.contact),
          eventDone: Boolean(licence.event),
        },
      };
    case 'licence/contact': {
      if (!form) {
        const values = licence.contact ?? { method: '', email: '', phone: '' };
        return { screen: { name: 'contact', title: 'How would you like to be contacted?', values, errors: [] } };
      }
      const { values, errors } = validateContact(form);
      if (errors.length)
        return { screen: { name: 'contact', title: 'How would you like to be contacted?', values, errors } };
      writeLicence(cookies, { ...licence, contact: values });
      return { redirect: `${base}/licence` };
    }
    case 'licence/event': {
      if (!form) {
        const values = licence.event ?? { name: '', description: '' };
        return { screen: { name: 'event', title: 'Event details', values, errors: [] } };
      }
      const { values, errors } = validateEvent(form);
      if (errors.length) return { screen: { name: 'event', title: 'Event details', values, errors } };
      writeLicence(cookies, { ...licence, event: values });
      return { redirect: `${base}/licence` };
    }
    case 'licence/check': {
      const { contact, event } = licence;
      if (!contact || !event) return { redirect: `${base}/licence` };
      if (!form) return { screen: { name: 'check', title: 'Check your answers', contact, event } };
      clearLicence(cookies);
      return { redirect: `${base}/licence/done` };
    }
    case 'licence/done':
      return {
        screen: {
          name: 'confirmation',
          title: 'Application complete',
          body: 'We will contact you within 5 working days',
          next: { href: `${base}/licence`, text: 'Apply for another licence' },
        },
      };
    default:
      return { notFound: true };
  }
}

export const screenErrors = (screen: Screen) => ('errors' in screen ? screen.errors : []);

/** Which of the primitives' scripts a screen's components need. */
export function screenScripts(screen: Screen) {
  const errors = screenErrors(screen).length > 0;
  switch (screen.name) {
    case 'account':
      return { errorSummary: errors, passwordInput: true, choices: false, characterCount: false };
    case 'contact':
      return { errorSummary: errors, passwordInput: false, choices: true, characterCount: false };
    case 'event':
      return { errorSummary: errors, passwordInput: false, choices: false, characterCount: true };
    default:
      return { errorSummary: false, passwordInput: false, choices: false, characterCount: false };
  }
}
