import type { Story } from '@storybook/react';

import * as React from 'react';

import Checkbox from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
};

export const Default: Story = (args: { children: string }) => <Checkbox {...args} />;

Default.args = {
  children: 'Example',
};

export const CheckboxDisabled: Story = () => <Checkbox disabled>Disabled checkbox option</Checkbox>;

export const CheckboxPreselected: Story = () => (
  <div>
    <Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
  </div>
);

export const CheckboxPreselectedDisabled: Story = () => (
  <div>
    <Checkbox disabled defaultChecked>
      Farm or agricultural waste
    </Checkbox>
  </div>
);

export const CheckboxWithHintText: Story = () => (
  <div>
    <Checkbox hint="including English, Scottish, Welsh and Northern Irish">British</Checkbox>
    <Checkbox>Irish</Checkbox>
    <Checkbox>Citizen of another country</Checkbox>
  </div>
);
