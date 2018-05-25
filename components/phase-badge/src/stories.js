import React from 'react';
import { storiesOf } from '@storybook/react';

import PhaseBadge from '.';

const stories = storiesOf('Components/PhaseBadge', module);

stories.add('PhaseBadge', () => (
  <PhaseBadge>beta</PhaseBadge>
));
