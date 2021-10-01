import * as React from 'react';

import Checkbox from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
};

export const Default: React.FC = () => (
  <div>
    <Checkbox>Waste from animal carcasses</Checkbox>
    <Checkbox>Waste from mines or quarries</Checkbox>
    <Checkbox>Farm or agricultural waste</Checkbox>
  </div>
);

export const CheckboxDisabled: React.FC = () => (
  <div>
    <Checkbox disabled>Disabled checkbox option</Checkbox>
  </div>
);

export const CheckboxPreselected: React.FC = () => (
  <div>
    <Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
  </div>
);

export const CheckboxPreselectedDisabled: React.FC = () => (
  <div>
    <Checkbox disabled defaultChecked>
      Farm or agricultural waste
    </Checkbox>
  </div>
);

export const CheckboxWithHintText: React.FC = () => (
  <div>
    <Checkbox hint="including English, Scottish, Welsh and Northern Irish">British</Checkbox>
    <Checkbox>Irish</Checkbox>
    <Checkbox>Citizen of another country</Checkbox>
  </div>
);
