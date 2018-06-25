import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { ButtonArrow } from '@govuk-react/icons';

import Button from '.';

const ButtonWithKnobs = () => (
  <Button
    mb="0"
    disabled={boolean('Disabled', false)}
    start={boolean('Start', false)}
  >
    {text('Children', 'Button')}
  </Button>
);

const ButtonStart = () => <Button start>Save and continue</Button>;

const ButtonStartIcon = () => (
  <Button icon={<ButtonArrow />} start>
    Start now
  </Button>
);

const ButtonDisabled = () => <Button disabled>Disabled primary button</Button>;

const ButtonDisabledStartIcon = () => (
  <Button disabled start icon={<ButtonArrow />}>
    Start now
  </Button>
);

export default Button;

export {
  ButtonWithKnobs,
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
};
