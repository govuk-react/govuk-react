import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Pagination from '.';

const meta = {
  title: 'Navigation/Pagination',
  id: 'pagination',
  component: Pagination.Composite,
} satisfies Meta<typeof Pagination.Composite>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    previousHref: '#',
    nextHref: '#',
    children: (
      <>
        <Pagination.ItemComposite href="#" number={1} />
        <Pagination.ItemComposite href="#" number={2} current />
        <Pagination.ItemComposite href="#" number={3} />
      </>
    ),
  },
};

export const WithEllipsis: Story = {
  args: {
    previousHref: '#',
    nextHref: '#',
    children: (
      <>
        <Pagination.ItemComposite href="#" number={1} />
        <Pagination.ItemComposite ellipsis />
        <Pagination.ItemComposite href="#" number={6} />
        <Pagination.ItemComposite href="#" number={7} current />
        <Pagination.ItemComposite href="#" number={8} />
        <Pagination.ItemComposite ellipsis />
        <Pagination.ItemComposite href="#" number={42} />
      </>
    ),
  },
};

export const FirstPage: Story = {
  args: {
    nextHref: '#',
    children: (
      <>
        <Pagination.ItemComposite href="#" number={1} current />
        <Pagination.ItemComposite href="#" number={2} />
        <Pagination.ItemComposite href="#" number={3} />
      </>
    ),
  },
};

export const LastPage: Story = {
  args: {
    previousHref: '#',
    children: (
      <>
        <Pagination.ItemComposite href="#" number={1} />
        <Pagination.ItemComposite href="#" number={2} />
        <Pagination.ItemComposite href="#" number={3} current />
      </>
    ),
  },
};

export const ForNavigatingBetweenRelatedPages: Story = {
  args: {
    previousHref: '#',
    previousText: 'Previous page',
    previousLabel: 'Applying for a provisional lorry or bus licence',
    nextHref: '#',
    nextText: 'Next page',
    nextLabel: 'Driver CPC part 1 test: theory',
  },
};
