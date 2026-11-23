import type { AstroCookies } from 'astro';
import { path } from './path';

/**
 * The values a form accepted, kept in a short-lived cookie for the Forms page to show once. A cookie,
 * rather than the redirect's query string, means nobody can link to the page with text of their own in it.
 */
const name = 'submitted';

/** Browsers drop cookies over about 4 KB, so leave out values that won't fit. */
const maxLength = 3000;

export function setSubmitted(cookies: AstroCookies, url: URL, value: Record<string, unknown>) {
  if (encodeURIComponent(JSON.stringify(value)).length > maxLength) return;
  cookies.set(name, value, {
    path: path('/forms'),
    httpOnly: true,
    secure: url.protocol === 'https:',
    sameSite: 'lax',
    maxAge: 60,
  });
}

export function takeSubmitted(cookies: AstroCookies): Record<string, unknown> | null {
  const cookie = cookies.get(name);
  if (!cookie) return null;
  cookies.delete(name, { path: path('/forms') });
  try {
    const parsed: unknown = cookie.json();
    return parsed && typeof parsed === 'object' ? Object.fromEntries(Object.entries(parsed)) : null;
  } catch {
    return null;
  }
}
