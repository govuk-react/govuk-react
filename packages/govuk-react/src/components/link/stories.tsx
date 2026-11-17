import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter, Link as RouterLink, Route, Routes } from 'react-router-dom';

import { Link } from '.';

const meta = {
  title: 'Navigation/Link',
  id: 'link',
  component: Link,
  args: { href: '#', children: 'Link example' },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Muted: Story = {
  args: { variant: 'muted' },
};

export const TextColour: Story = {
  args: { variant: 'text-colour' },
};

export const NoVisitedState: Story = {
  args: { noVisitedState: true },
};

export const WithReactRouter: Story = {
  render: () => (
    <BrowserRouter>
      <Link asChild>
        <RouterLink to="/first">First link</RouterLink>
      </Link>
      <br />
      <Link asChild>
        <RouterLink to="/second">Second link</RouterLink>
      </Link>
      <Routes>
        <Route path="/first" element={<p>First route</p>} />
        <Route path="/second" element={<p>Second route</p>} />
      </Routes>
    </BrowserRouter>
  ),
  parameters: {
    docs: {
      description: { story: 'Use `asChild` to render a router link with the link styles.' },
    },
  },
};
