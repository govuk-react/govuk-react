import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { ButtonArrow } from '@govuk-react/icons';
import { BLUE, TEXT_COLOUR, YELLOW, GREY_3, ORANGE } from 'govuk-colours';
import { MemoryRouter, Route, Link } from 'react-router-dom';

import { Button } from '.';

const ButtonWithKnobs: React.FC = () => (
  <Button mb="0" disabled={boolean('Disabled', false)} start={boolean('Start', false)}>
    {text('Children', 'Button')}
  </Button>
);

const ButtonStart: React.FC = () => <Button start>Save and continue</Button>;

const ButtonStartIcon: React.FC = () => (
  <Button icon={<ButtonArrow />} start>
    Start now
  </Button>
);

const ButtonDisabled: React.FC = () => <Button disabled>Disabled primary button</Button>;

const ButtonDisabledStartIcon: React.FC = () => (
  <Button disabled start icon={<ButtonArrow />}>
    Start now
  </Button>
);

const ButtonBlue: React.FC = () => <Button buttonColour={BLUE}>Blue button</Button>;

const ButtonWacky: React.FC = () => (
  <Button buttonColour={GREY_3} buttonHoverColour={YELLOW} buttonShadowColour={ORANGE} buttonTextColour={TEXT_COLOUR}>
    Wacky colours
  </Button>
);

const ButtonAsLink: React.FC = () => (
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
