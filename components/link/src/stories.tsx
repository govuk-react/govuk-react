import type { Story } from '@storybook/react';

import * as React from 'react';
import { BrowserRouter, Link as RLink, Route, Routes } from 'react-router-dom';

import { Link } from '.';

export default {
  title: 'Navigation/Link',
  id: 'link',
  component: Link,
};

export const Default: Story = ({
  muted,
  textColour,
  noVisitedState,
  children,
}: {
  muted: boolean;
  textColour: boolean;
  noVisitedState: boolean;
  children: string;
}) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <Link muted={muted} textColour={textColour} noVisitedState={noVisitedState} href="#">
    {children}
  </Link>
);

Default.args = {
  muted: false,
  textColour: false,
  noVisitedState: false,
  children: 'Link example',
};

export const WithReactRouter: Story = (args) => (
  <BrowserRouter>
    <div>
      <Link as={RLink} to="/first" {...args}>
        First link
      </Link>
      <br />
      <Link as={RLink} to="/second">
        Second link
      </Link>
      <br />
      <div>
        <Routes>
          <Route path="/first" element={<>First route</>} />
          <Route path="/second" element={<>Second route</>} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
WithReactRouter.parameters = {
  docs: {
    storyDescription: 'Can be used with React Router using `as={Link}`',
  },
};
