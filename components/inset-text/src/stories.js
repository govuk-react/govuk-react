import React from 'react';
import { storiesOf } from '@storybook/react';

import InsetText from '.';

storiesOf('InsetText', module).add('InsetText', () => (
  <InsetText>I am a **lead** paragraph embedded in the InsetText component.</InsetText>
));
