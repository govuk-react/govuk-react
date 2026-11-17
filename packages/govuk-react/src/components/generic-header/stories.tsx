import * as React from 'react';
import type { Meta } from '@storybook/react';
import * as GenericHeader from '.';

export default {
  title: 'Page & Layout/Generic header',
  id: 'generic-header',
  component: GenericHeader.Root,
} satisfies Meta<typeof GenericHeader.Root>;

export const Default = {
  render: () => (
    <GenericHeader.Root>
      <GenericHeader.Container>
        <GenericHeader.Logo>
          <GenericHeader.HomepageLink href="#">
            <svg width="28" height="30" viewBox="0 0 28 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="13.5549" cy="4.21349" r="4.21349" />
              <circle cx="13.5549" cy="25.7865" r="4.21349" />
              <circle cx="22.8963" cy="9.6068" r="4.21349" />
              <circle cx="4.2135" cy="20.3932" r="4.21349" />
              <circle cx="22.8963" cy="20.3932" r="4.21349" />
              <circle cx="4.21351" cy="9.60674" r="4.21349" />
            </svg>{' '}
            Service name
          </GenericHeader.HomepageLink>
        </GenericHeader.Logo>
      </GenericHeader.Container>
    </GenericHeader.Root>
  ),
};
