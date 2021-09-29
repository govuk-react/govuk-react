import type { Story } from '@storybook/react';

import React from 'react';
import { ButtonArrow } from '@govuk-react/icons';
import { BLUE, TEXT_COLOUR, YELLOW, GREY_3, ORANGE } from 'govuk-colours';
import { MemoryRouter, Route, Link } from 'react-router-dom';

import { Button } from '.';

const ButtonWithKnobs: Story<{ children: string; disabled: boolean; start: boolean }> = (args) => (
  <Button mb="0" {...args} />
);

ButtonWithKnobs.args = {
  disabled: false,
  start: false,
  children: 'Button',
};

const ButtonStart: Story = () => <Button start>Save and continue</Button>;

const ButtonStartIcon: Story = () => (
  <Button icon={<ButtonArrow />} start>
    Start now
  </Button>
);

const ButtonDisabled: Story = () => <Button disabled>Disabled primary button</Button>;

const ButtonDisabledStartIcon: Story = () => (
  <Button disabled start icon={<ButtonArrow />}>
    Start now
  </Button>
);

const ButtonBlue: Story = () => <Button buttonColour={BLUE}>Blue button</Button>;

const ButtonWacky: Story = () => (
  <Button buttonColour={GREY_3} buttonHoverColour={YELLOW} buttonShadowColour={ORANGE} buttonTextColour={TEXT_COLOUR}>
    Wacky colours
  </Button>
);

const ButtonAsLink: Story = () => (
  <MemoryRouter>
    <div>
      <Button as={Link} to="/">
        Home Link button
      </Button>
      <br />
      <Button as={Link} to="/test">
        Test Link button
      </Button>
      <br />
      <Route path="/" exact render={() => <div>Home path</div>} />
      <Route path="/test" render={() => <div>Test path</div>} />
    </div>
  </MemoryRouter>
);

export default Button;

export {
  ButtonWithKnobs,
  ButtonStart,
  ButtonStartIcon,
  ButtonDisabled,
  ButtonDisabledStartIcon,
  ButtonBlue,
  ButtonWacky,
  ButtonAsLink,
};
