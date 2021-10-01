import type { Story } from '@storybook/react';

import * as React from 'react';
import { Button } from '.';

import {
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
  ButtonBlue,
  ButtonWacky,
  ButtonAsLink,
} from './fixtures';

export default {
  title: 'Form/Button',
  component: Button,
};

export const Default: Story<{ children: string; disabled: boolean; start: boolean }> = (args) => (
  <Button mb="0" {...args} />
);
Default.args = {
  disabled: false,
  start: false,
  children: 'Button',
};

export const Start = ButtonStart;
export const StartWithIcon = ButtonStartIcon;
export const Disabled = ButtonDisabled;
export const DisabledStartWithIcon = ButtonDisabledStartIcon;
export const CustomColour = ButtonBlue;
export const CustomColoursAllOptions = ButtonWacky;
export const RouterLinkButton = ButtonAsLink;
