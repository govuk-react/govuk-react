import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { ButtonArrow } from '@govuk-react/icons';
import Button from '.';

export default () => (
  <Button
    mb="0"
    disabled={boolean('Disabled', false)}
    start={boolean('Start', false)}
  >
    {text('Children', 'Button')}
  </Button>
);

export const ButtonStart = () => <Button start={boolean('Start', true)}>Save and continue</Button>;

export const ButtonStartIcon = () => (
  <Button icon={<ButtonArrow />} start={boolean('Start', true)}>
    Start now
  </Button>
);

export const ButtonDisabled = () => <Button disabled={boolean('Disabled', true)}>Disabled primary button</Button>;

export const ButtonDisabledStartIcon = () => (
  <Button
    disabled={boolean('Disabled', true)}
    start={boolean('Start', true)}
    icon={<ButtonArrow />}
  >
    Start now
  </Button>
);
