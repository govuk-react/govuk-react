import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Panel from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Misc/Panel', module);
const examples = storiesOf('Misc/Panel/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Panel title="Application complete" />
));

examples.add('Panel with header and HTML body', () => (
  <Panel title="Application complete">
    Your reference number<br />
    <strong>HDJ2123F</strong>
  </Panel>
));
