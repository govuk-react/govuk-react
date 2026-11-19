import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Body } from '../body';
import * as ExitThisPage from '.';

const meta = {
  title: 'Navigation/Exit this page',
  id: 'exit-this-page',
  component: ExitThisPage.Composite,
} satisfies Meta<typeof ExitThisPage.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSkipLink: Story = {
  name: 'With a skip link',
  render: (args) => (
    <>
      <ExitThisPage.SkipLink>Exit this page</ExitThisPage.SkipLink>
      <Body>Press Tab to show the skip link, which exits the page too.</Body>
      <ExitThisPage.Composite {...args} />
    </>
  ),
};

/** Presses Shift once when it appears, so the indicator shows. */
function PressShiftOnce() {
  React.useEffect(() => {
    document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Shift' }));
  }, []);
  return null;
}

export const ShiftPressedOnce: Story = {
  name: 'Shift pressed once',
  render: (args) => (
    <>
      <Body>Shift has been pressed once in this example. This is for visual regression testing.</Body>
      <ExitThisPage.Composite {...args} />
      <PressShiftOnce />
    </>
  ),
};
