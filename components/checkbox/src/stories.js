import React from 'react';

import Checkbox from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
};

export const Default = () => (
  <div>
    <Checkbox>Waste from animal carcasses</Checkbox>
    <Checkbox>Waste from mines or quarries</Checkbox>
    <Checkbox>Farm or agricultural waste</Checkbox>
  </div>
);

export const CheckboxDisabled = () => (
  <div>
    <Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
  </div>
);

export const CheckboxPreselected = () => (
  <div>
    <Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
  </div>
);

export const CheckboxPreselectedDisabled = () => (
  <div>
    <Checkbox disabled="disabled" defaultChecked>
      Farm or agricultural waste
    </Checkbox>
  </div>
);

export const CheckboxWithHintText = () => (
  <div>
    <Checkbox hint="including English, Scottish, Welsh and Northern Irish">British</Checkbox>
    <Checkbox>Irish</Checkbox>
    <Checkbox>Citizen of another country</Checkbox>
  </div>
);
