import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from '.';

const stories = storiesOf('Form/Checkbox', module);

stories.add('Checkbox', () => (
  <div>
    <Checkbox>Waste from animal carcasses</Checkbox>
    <Checkbox>Waste from mines or quarries</Checkbox>
    <Checkbox>Farm or agricultural waste</Checkbox>
  </div>
));

stories.add('Checkbox disabled', () => (
  <div>
    <Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
  </div>
));

stories.add('Checkbox preselected', () => (
  <div>
    <Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
  </div>
));

stories.add('Checkbox preselected & disabled', () => (
  <div>
    <Checkbox disabled="disabled" defaultChecked>
      Farm or agricultural waste
    </Checkbox>
  </div>
));
