import React from 'react';
import { storiesOf } from '@storybook/react';
import { asAnchor } from '@govuk-react/hoc';

import ListNavigation from '.';

const AnchorTag = asAnchor('a');

storiesOf('ListNavigation', module).add('ListNavigation', () => (
  <ListNavigation listStyleType="square">
    <AnchorTag href="https://example.com/?=1">lorem dolor set cetra</AnchorTag>
    <AnchorTag href="https://example.com/?=2">
      Meta logi arche decip con
    </AnchorTag>
    <AnchorTag href="https://example.com/?=2">Ignis prevo don coldo</AnchorTag>
  </ListNavigation>
));
