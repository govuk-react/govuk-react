import type { Story } from '@storybook/react';
import { ButtonArrow } from '@govuk-react/icons';

import * as React from 'react';
import { BLUE, TEXT_COLOUR, YELLOW, GREY_3, ORANGE } from 'govuk-colours';
import { MemoryRouter, Route, Routes, Link } from 'react-router-dom';
import { Button } from '.';

export default {
  title: 'Form/Button',
  id: 'button',
  component: Button,
};
const Template: Story<React.ComponentProps<typeof Button>> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  start: false,
  children: 'Button',
};

export const Start = Template.bind({});
Start.args = {
  start: true,
  children: 'Save and continue',
};

export const StartWithIcon = Template.bind({});
StartWithIcon.args = {
  start: true,
  children: 'Start now',
  icon: <ButtonArrow />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled primary button',
  disabled: true,
};

export const DisabledStartWithIcon = Template.bind({});
DisabledStartWithIcon.args = {
  children: 'Start now',
  disabled: true,
  start: true,
  icon: <ButtonArrow />,
};

export const CustomColour = Template.bind({});
CustomColour.args = {
  buttonColour: BLUE,
  children: 'Blue button',
};

export const CustomColoursAllOptions = Template.bind({});
CustomColoursAllOptions.args = {
  buttonColour: GREY_3,
  buttonHoverColour: YELLOW,
  buttonShadowColour: ORANGE,
  buttonTextColour: TEXT_COLOUR,
  children: 'Wacky colours',
};

export const RouterLinkButton: Story = (args) => (
  <MemoryRouter>
    <div>
      <Button {...args}>Home Link button</Button>
      <br />
      <Button as={Link} to="/test">
        Test Link button
      </Button>
      <br />
      <Routes>
        <Route path="/test" element={<div>Test path</div>} />
        <Route path="/" element={<div>Home path</div>} />
      </Routes>
    </div>
  </MemoryRouter>
);
RouterLinkButton.args = {
  children: 'Home Link button',
  as: Link,
  to: '/',
};
