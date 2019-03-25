import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Checkbox from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Checkbox', module);
const examples = storiesOf('Form/Checkbox/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <div>
    <Checkbox>Waste from animal carcasses</Checkbox>
    <Checkbox>Waste from mines or quarries</Checkbox>
    <Checkbox>Farm or agricultural waste</Checkbox>
  </div>
));

examples.add('Checkbox disabled', () => (
  <div>
    <Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
  </div>
));

examples.add('Checkbox preselected', () => (
  <div>
    <Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
  </div>
));

examples.add('Checkbox preselected & disabled', () => (
  <div>
    <Checkbox disabled="disabled" defaultChecked>
      Farm or agricultural waste
    </Checkbox>
  </div>
));

examples.add('Checkbox with hint text', () => (
  <div>
    <Checkbox hint="including English, Scottish, Welsh and Northern Irish">British</Checkbox>
    <Checkbox>Irish</Checkbox>
    <Checkbox>Citizen of another country</Checkbox>
  </div>
));
