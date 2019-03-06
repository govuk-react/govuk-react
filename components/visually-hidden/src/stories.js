import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import VisuallyHidden from '.';

import ReadMe from '../README.md';

const stories = storiesOf('Misc/VisuallyHidden', module);
stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <VisuallyHidden focusable={boolean('focusable', true)}>
    Some hidden content
  </VisuallyHidden>
));
