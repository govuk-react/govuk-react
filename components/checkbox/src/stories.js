import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Checkbox from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Form/Checkbox', module);
const examples = storiesOf('Form/Checkbox/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', () => (
  <div>
    <Checkbox id="waste-animal">Waste from animal carcasses</Checkbox>
    <Checkbox id="waste-mines">Waste from mines or quarries</Checkbox>
    <Checkbox id="waste-farm">Farm or agricultural waste</Checkbox>
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
