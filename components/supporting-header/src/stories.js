import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import { H1 } from '@govuk-react/header';

import SupportingHeader, { SupportingHeaderWithKnobs } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/SupportingHeader', module);
const examples = storiesOf('Typography/SupportingHeader/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <SupportingHeaderWithKnobs />
));

examples.add('Component default', () => (
  <Fragment>
    <SupportingHeader>
      Supporting header text
    </SupportingHeader>
    <H1>
      Main header text
    </H1>
  </Fragment>
));
