import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { MemoryRouter, Link as RouterLink } from 'react-router-dom';

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

export const WithReactRouter: Story = {
  render: () => (
    <MemoryRouter>
      <Pagination.Root>
        <Pagination.Previous>
          <Pagination.PreviousLink asChild>
            <RouterLink to="/page-1">
              <Pagination.PreviousIcon /> <Pagination.PreviousLinkTitleComposite />
            </RouterLink>
          </Pagination.PreviousLink>
        </Pagination.Previous>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.ItemLink asChild aria-label="Page 1">
              <RouterLink to="/page-1">1</RouterLink>
            </Pagination.ItemLink>
          </Pagination.Item>
          <Pagination.Item current>
            <Pagination.ItemLink asChild aria-label="Page 2" aria-current="page">
              <RouterLink to="/page-2">2</RouterLink>
            </Pagination.ItemLink>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.ItemLink asChild aria-label="Page 3">
              <RouterLink to="/page-3">3</RouterLink>
            </Pagination.ItemLink>
          </Pagination.Item>
        </Pagination.List>
        <Pagination.Next>
          <Pagination.NextLink asChild>
            <RouterLink to="/page-3">
              <Pagination.NextLinkTitleComposite /> <Pagination.NextIcon />
            </RouterLink>
          </Pagination.NextLink>
        </Pagination.Next>
      </Pagination.Root>
    </MemoryRouter>
  ),
  parameters: {
    docs: {
      description: { story: 'Use `asChild` on the link parts to render router links.' },
    },
  },
};
