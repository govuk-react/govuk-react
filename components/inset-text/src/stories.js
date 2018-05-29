import React from 'react';
import { storiesOf } from '@storybook/react';

import InsetText from '.';

storiesOf('InsetText', module).add('InsetText', () => (
  <InsetText>
    It can take up to 8 weeks to register a lasting power of attorney
    if there are no mistakes in the application.
  </InsetText>
));
