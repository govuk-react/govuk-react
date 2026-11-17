import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Link } from '../link';
import * as RelatedItems from '.';

const meta = {
  title: 'Navigation/Related items',
  id: 'related-items',
  component: RelatedItems.Composite,
} satisfies Meta<typeof RelatedItems.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <RelatedItems.SectionComposite title="Travel abroad">
          <RelatedItems.Item>
            <Link href="#">Foreign travel advice</Link>
          </RelatedItems.Item>
          <RelatedItems.Item>
            <Link href="#">Travel insurance</Link>
          </RelatedItems.Item>
          <RelatedItems.Item>
            <Link href="#">
              <strong>More</strong>
            </Link>
          </RelatedItems.Item>
        </RelatedItems.SectionComposite>
        <RelatedItems.SectionComposite title="Travel">
          <RelatedItems.Item>
            <Link href="#">Passports, travel and living abroad</Link>
          </RelatedItems.Item>
        </RelatedItems.SectionComposite>
      </>
    ),
  },
};
