import React from 'react';
import { storiesOf } from '@storybook/react';

import LeadParagraph from '.';

const stories = storiesOf('Typography/LeadParagraph', module);

stories.add('LeadParagraph', () => (
  <LeadParagraph>LeadParagraph example</LeadParagraph>
));
