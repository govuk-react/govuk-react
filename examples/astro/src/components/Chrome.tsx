import type { ReactNode } from 'react';
import { Page } from 'govuk-react/page';
import * as ServiceNavigation from 'govuk-react/service-navigation';
import { path } from '../path';

export type Example = { href: string; text: string; description: string };

export const forms: Example[] = [
  { href: path('/login'), text: 'Sign in', description: 'a form with manual validation' },
  { href: path('/signup'), text: 'Create an account', description: 'async validation on the client and server' },
  {
    href: path('/signup-async-schema'),
    text: 'Create an account (async schema)',
    description: 'the same form, with an async schema',
  },
  {
    href: path('/todos'),
    text: 'Tasks',
    description: 'a list of fields you can add to, remove and reorder',
  },
];

export const hydration: Example[] = [
  { href: path('/islands'), text: 'Islands', description: 'React hydrates only the components that need it' },
  {
    href: path('/without-react'),
    text: 'Without React',
    description: 'components enhanced by inline scripts, with no React in the browser',
  },
  {
    href: path('/upgrade'),
    text: 'Upgrade to React',
    description: 'an inline script enhances a component, then React takes over and keeps what the user did',
  },
];

const navigation = [{ href: path('/'), text: 'Forms', pages: forms.map(({ href }) => href) }].concat(
  hydration.map(({ href, text }) => ({ href, text, pages: [href] }))
);

export function Chrome({ pathname, children }: { pathname: string; children: ReactNode }) {
  return (
    <Page
      header={
        <ServiceNavigation.Composite serviceName="Astro example" serviceHref={path('/')}>
          {navigation.map((item) => (
            <ServiceNavigation.ItemComposite key={item.href} href={item.href} current={item.pages.includes(pathname)}>
              {item.text}
            </ServiceNavigation.ItemComposite>
          ))}
        </ServiceNavigation.Composite>
      }
    >
      {children}
    </Page>
  );
}
