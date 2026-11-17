import * as React from 'react';
import type { Meta } from '@storybook/react';
import * as LanguageNavigation from '.';

export default {
  title: 'Navigation/Language navigation',
  id: 'language-navigation',
  component: LanguageNavigation.Root,
} satisfies Meta<typeof LanguageNavigation.Root>;

export const Default = {
  render: () => (
    <LanguageNavigation.Root>
      <LanguageNavigation.List>
        <LanguageNavigation.ListItem>
          <LanguageNavigation.Text lang="en">English</LanguageNavigation.Text>
        </LanguageNavigation.ListItem>
        <LanguageNavigation.ListItem>
          <LanguageNavigation.Link href="#" lang="cy">
            Cymraeg
          </LanguageNavigation.Link>
        </LanguageNavigation.ListItem>
      </LanguageNavigation.List>
    </LanguageNavigation.Root>
  ),
};
