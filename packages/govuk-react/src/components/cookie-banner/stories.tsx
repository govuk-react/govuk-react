import * as React from 'react';
import type { Meta } from '@storybook/react';
import * as Button from '../button';
import { Body } from '../body';
import { Link } from '../link';
import * as CookieBanner from '.';

export default {
  title: 'Page & Layout/Cookie banner',
  id: 'cookie-banner',
  component: CookieBanner.Root,
} satisfies Meta<typeof CookieBanner.Root>;

export const Default = {
  render: () => (
    <CookieBanner.Root aria-label="Cookies on [name of service]">
      <CookieBanner.MessageComposite
        heading="Cookies on [name of service]"
        actions={
          <>
            <Button.Root type="button">Accept analytics cookies</Button.Root>{' '}
            <Button.Root type="button">Reject analytics cookies</Button.Root> <Link href="#">View cookies</Link>
          </>
        }
      >
        <Body>We use some essential cookies to make this service work.</Body>
        <Body>
          We’d also like to use analytics cookies so we can understand how you use the service and make improvements.
        </Body>
      </CookieBanner.MessageComposite>
    </CookieBanner.Root>
  ),
};
