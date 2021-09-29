import { Button } from '.';

import {
  ButtonWithKnobs,
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

export const Default = ButtonWithKnobs;

export const Start = ButtonStart;
export const StartWithIcon = ButtonStartIcon;
export const Disabled = ButtonDisabled;
export const DisabledStartWithIcon = ButtonDisabledStartIcon;
export const CustomColour = ButtonBlue;
export const CustomColoursAllOptions = ButtonWacky;
export const RouterLinkButton = ButtonAsLink;
