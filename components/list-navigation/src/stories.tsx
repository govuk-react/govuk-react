import * as React from 'react';

import Link from '@govuk-react/link';

import { ListNavigation } from '.';

export default {
  title: 'Navigation/List navigation',
  id: 'list-navigation',
  component: ListNavigation,
};

export const Default: React.FC = () => (
  <ListNavigation listStyleType="square">
    <Link href="https://example.com/?=1">lorem dolor set cetra</Link>
    <Link href="https://example.com/?=2">Meta logi arche decip con</Link>
    <Link href="https://example.com/?=2">Ignis prevo don coldo</Link>
  </ListNavigation>
);
