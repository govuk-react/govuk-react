import React from 'react';
import { text, boolean } from '@storybook/addon-knobs/react';
// import iconPointer from '@govuk-react/images/icon-pointer.png';
import { ButtonArrow } from '@govuk-react/icons';
import Button from '.';

export default () => <Button>Save and continue</Button>;

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
