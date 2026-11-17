import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Body } from '../body';
import { SkipLink } from '.';

const meta = {
  title: 'Navigation/Skip link',
  id: 'skip-link',
  component: SkipLink,
  args: { href: '#main-content', children: 'Skip to main content' },
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function AutoFocussedSkipLink(props: React.ComponentProps<typeof SkipLink>) {
  const ref = React.useRef<HTMLAnchorElement>(null);
  React.useEffect(() => {
    ref.current?.focus();
  }, []);
  return <SkipLink ref={ref} {...props} />;
}

export const AutoFocussed: Story = {
  render: (args) => (
    <>
      <Body>The skip link in this example focuses automatically. This is for visual regression testing.</Body>
      <AutoFocussedSkipLink {...args} />
      <div id="main-content">
        <Body>This content has an id of `main-content` to match the skip link&apos;s `href`.</Body>
      </div>
    </>
  ),
};
