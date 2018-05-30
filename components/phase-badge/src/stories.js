import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import PhaseBadge from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Misc/PhaseBadge', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('PhaseBadge', () => (
  <PhaseBadge>beta</PhaseBadge>
));
