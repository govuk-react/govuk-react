import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { ButtonArrow } from '@govuk-react/icons';
import { BLUE, TEXT_COLOUR, YELLOW, GREY_3, ORANGE } from 'govuk-colours';
import { MemoryRouter, Route, Link } from 'react-router-dom';

import Button from '.';

const ButtonWithKnobs = () => (
  <Button mb="0" disabled={boolean('Disabled', false)} start={boolean('Start', false)}>
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

const ButtonBlue = () => <Button buttonColour={BLUE}>Blue button</Button>;

const ButtonWacky = () => (
  <Button buttonColour={GREY_3} buttonHoverColour={YELLOW} buttonShadowColour={ORANGE} buttonTextColour={TEXT_COLOUR}>
    Wacky colours
  </Button>
);

const ButtonAsLink = () => (
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
