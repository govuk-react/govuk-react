import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '@govuk-react/button';

import Spinner from '.';

storiesOf('Icons', module).add('Spinner', () => (
  <Spinner />
)).add('Spinner (small)', () => (
  <Spinner width="50px" height="50px" />
)).add('Spinner inside button', () => (
  <Button disabled><span style={{ display: 'flex', alignItems: 'center' }}>Saving<Spinner width="32px" height="32px" fill="white" /></span></Button>
));
