import type { Story } from '@storybook/react';

import * as React from 'react';

import Checkbox from '.';

export default {
  title: 'Form/Checkbox',
  id: 'checkbox',
  component: Checkbox,
};

const Template: Story<React.ComponentProps<typeof Checkbox>> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Example',
};

export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
  children: 'Disabled checkbox option',
  disabled: true,
};

export const CheckboxPreselected = Template.bind({});
CheckboxPreselected.args = {
  children: 'Farm or agricultural waste',
  defaultChecked: true,
};

export const CheckboxPreselectedDisabled = Template.bind({});
CheckboxPreselectedDisabled.args = {
  children: 'Farm or agricultural waste',
  defaultChecked: true,
  disabled: true,
};

export const CheckboxWithHintText: Story = (args) => (
  <>
    <Checkbox hint="including English, Scottish, Welsh and Northern Irish" {...args}>
      British
    </Checkbox>
    <Checkbox>Irish</Checkbox>
    <Checkbox>Citizen of another country</Checkbox>
  </>
);
