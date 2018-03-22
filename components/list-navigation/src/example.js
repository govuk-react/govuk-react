import React from 'react';
import { asAnchor } from '@govuk-react/hoc';
import ListNavigation from './index';

const AnchorTag = asAnchor('a');

export default () => (
  <ListNavigation>
    <AnchorTag href="https://example.com">Example</AnchorTag>
  </ListNavigation>
);
