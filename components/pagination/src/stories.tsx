import type { Story } from '@storybook/react';

import * as React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Pagination } from '.';

export default {
  title: 'Navigation/Pagination',
  id: 'pagination',
  component: Pagination,
};

const Template: Story<React.ComponentProps<typeof Pagination>> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <Pagination.Anchor href="#prev" previousPage>
      Previous page
    </Pagination.Anchor>,
    <Pagination.Anchor href="#next" nextPage>
      Next page
    </Pagination.Anchor>,
  ],
};

export const PaginationDefaultReactRouterLink = Template.bind({});
PaginationDefaultReactRouterLink.args = {
  children: [
    <Router>
      <Pagination.Anchor as={Link} to="/prev" previousPage>
        Previous page
      </Pagination.Anchor>
    </Router>,
    <Router>
      <Pagination.Anchor as={Link} to="/next" nextPage>
        Next page
      </Pagination.Anchor>
    </Router>,
  ],
};

export const PaginationWithNumbersAnchorTag = Template.bind({});
PaginationWithNumbersAnchorTag.args = {
  children: [
    <Pagination.Anchor href="#prev" previousPage pageTitle="1 of 3">
      Previous page
    </Pagination.Anchor>,
    <Pagination.Anchor href="#next" nextPage pageTitle="3 of 3">
      Next page
    </Pagination.Anchor>,
  ],
};

export const PaginationWithNumbersReactRouterLink = Template.bind({});
PaginationWithNumbersReactRouterLink.args = {
  children: [
    <Router>
      <Pagination.Anchor as={Link} to="#prev" previousPage pageTitle="1 of 3">
        Previous page
      </Pagination.Anchor>
    </Router>,
    <Router>
      <Pagination.Anchor as={Link} to="#next" nextPage pageTitle="3 of 3">
        Next page
      </Pagination.Anchor>
    </Router>,
  ],
};

export const PaginationWithTitlesAnchorTag = Template.bind({});
PaginationWithTitlesAnchorTag.args = {
  children: [
    <Pagination.Anchor href="#prev" previousPage pageTitle="Applying for a provisional lorry or bus licence">
      Previous
    </Pagination.Anchor>,
    <Pagination.Anchor href="#next" nextPage pageTitle="Driver CPC part 1 test: theory">
      Next
    </Pagination.Anchor>,
  ],
};

export const PaginationWithTitlesReactRouterLink = Template.bind({});
PaginationWithTitlesReactRouterLink.args = {
  children: [
    <Router>
      <Pagination.Anchor as={Link} to="#prev" previousPage pageTitle="Applying for a provisional lorry or bus licence">
        Previous
      </Pagination.Anchor>
    </Router>,
    <Router>
      <Pagination.Anchor as={Link} to="#next" nextPage pageTitle="Driver CPC part 1 test: theory">
        Next
      </Pagination.Anchor>
    </Router>,
  ],
};

export const PaginationWithNumbersJustWithNextPageAnchorTag = Template.bind({});
PaginationWithNumbersJustWithNextPageAnchorTag.args = {
  children: (
    <Pagination.Anchor href="#next" nextPage pageTitle="2 of 12">
      Next page
    </Pagination.Anchor>
  ),
};

export const PaginationWithNumbersJustWithNextPageReactRouterLink = Template.bind({});
PaginationWithNumbersJustWithNextPageReactRouterLink.args = {
  children: (
    <Router>
      <Pagination.Anchor as={Link} to="#next" nextPage pageTitle="2 of 12">
        Next page
      </Pagination.Anchor>
    </Router>
  ),
};

export const PaginationWithNumbersJustWithPreviousPageAnchorTag = Template.bind({});
PaginationWithNumbersJustWithPreviousPageAnchorTag.args = {
  children: (
    <Pagination.Anchor href="#prev" previousPage pageTitle="11 of 12">
      Previous page
    </Pagination.Anchor>
  ),
};

export const PaginationWithNumbersJustWithPreviousPageReactRouterLink = Template.bind({});
PaginationWithNumbersJustWithPreviousPageReactRouterLink.args = {
  children: (
    <Router>
      <Pagination.Anchor as={Link} to="#prev" previousPage pageTitle="11 of 12">
        Previous page
      </Pagination.Anchor>
    </Router>
  ),
};
