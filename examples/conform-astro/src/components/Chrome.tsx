import type { ReactNode } from 'react';
import { Page } from 'govuk-react/page';
import * as ServiceNavigation from 'govuk-react/service-navigation';
import { path } from '../path';

export const examples = [
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

export function Chrome({ pathname, children }: { pathname: string; children: ReactNode }) {
  return (
    <Page
      header={
        <ServiceNavigation.Composite serviceName="Conform example" serviceHref={path('/')}>
          {examples.map((example) => (
            <ServiceNavigation.ItemComposite key={example.href} href={example.href} current={example.href === pathname}>
              {example.text}
            </ServiceNavigation.ItemComposite>
          ))}
        </ServiceNavigation.Composite>
      }
    >
      {children}
    </Page>
  );
}
