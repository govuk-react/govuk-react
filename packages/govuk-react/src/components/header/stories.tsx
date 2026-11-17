import * as React from 'react';
import type { Meta } from '@storybook/react';
import * as Header from '.';

export default {
  title: 'Page & Layout/Header',
  id: 'header',
  component: Header.Root,
} satisfies Meta<typeof Header.Root>;

export const Default = {
  render: () => (
    <Header.Root>
      <Header.Container>
        <Header.Logo>
          <Header.HomepageLink href="#">
            <Header.Logotype />
          </Header.HomepageLink>
        </Header.Logo>
      </Header.Container>
    </Header.Root>
  ),
};
