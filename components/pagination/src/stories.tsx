import * as React from 'react';

import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Pagination } from '.';

export default {
  title: 'Navigation/Pagination',
  component: Pagination,
};

export const Default: React.FC = () => (
  <Pagination>
    <Pagination.Anchor href="#prev" previousPage>
      Previous page
    </Pagination.Anchor>
    <Pagination.Anchor href="#next" nextPage>
      Next page
    </Pagination.Anchor>
  </Pagination>
);

export const PaginationDefaultReactRouterLink: React.FC = () => (
  <Pagination>
    <Router>
      <Pagination.Anchor as={Link} to="/prev" previousPage>
        Previous page
      </Pagination.Anchor>
    </Router>
    <Router>
      <Pagination.Anchor as={Link} to="/next" nextPage>
        Next page
      </Pagination.Anchor>
    </Router>
  </Pagination>
);

export const PaginationWithNumbersAnchorTag: React.FC = () => (
  <Pagination>
    <Pagination.Anchor href="#prev" previousPage pageTitle="1 of 3">
      Previous page
    </Pagination.Anchor>
    <Pagination.Anchor href="#next" nextPage pageTitle="3 of 3">
      Next page
    </Pagination.Anchor>
  </Pagination>
);

export const PaginationWithNumbersReactRouterLink: React.FC = () => (
  <Pagination>
    <Router>
      <Pagination.Anchor as={Link} to="#prev" previousPage pageTitle="1 of 3">
        Previous page
      </Pagination.Anchor>
    </Router>
    <Router>
      <Pagination.Anchor as={Link} to="#next" nextPage pageTitle="3 of 3">
        Next page
      </Pagination.Anchor>
    </Router>
  </Pagination>
);

export const PaginationWithTitlesAnchorTag: React.FC = () => (
  <Pagination>
    <Pagination.Anchor href="#prev" previousPage pageTitle="Applying for a provisional lorry or bus licence">
      Previous
    </Pagination.Anchor>
    <Pagination.Anchor href="#next" nextPage pageTitle="Driver CPC part 1 test: theory">
      Next
    </Pagination.Anchor>
  </Pagination>
);

export const PaginationWithTitlesReactRouterLink: React.FC = () => (
  <Pagination>
    <Router>
      <Pagination.Anchor as={Link} to="#prev" previousPage pageTitle="Applying for a provisional lorry or bus licence">
        Previous
      </Pagination.Anchor>
    </Router>
    <Router>
      <Pagination.Anchor as={Link} to="#next" nextPage pageTitle="Driver CPC part 1 test: theory">
        Next
      </Pagination.Anchor>
    </Router>
  </Pagination>
);

export const PaginationWithNumbersJustWithNextPageAnchorTag: React.FC = () => (
  <Pagination>
    <Pagination.Anchor href="#next" nextPage pageTitle="2 of 12">
      Next page
    </Pagination.Anchor>
  </Pagination>
);

export const PaginationWithNumbersJustWithNextPageReactRouterLink: React.FC = () => (
  <Pagination>
    <Router>
      <Pagination.Anchor as={Link} to="#next" nextPage pageTitle="2 of 12">
        Next page
      </Pagination.Anchor>
    </Router>
  </Pagination>
);

export const PaginationWithNumbersJustWithPreviousPageAnchorTag: React.FC = () => (
  <Pagination>
    <Pagination.Anchor href="#prev" previousPage pageTitle="11 of 12">
      Previous page
    </Pagination.Anchor>
  </Pagination>
);

export const PaginationWithNumbersJustWithPreviousPageReactRouterLink: React.FC = () => (
  <Pagination>
    <Router>
      <Pagination.Anchor as={Link} to="#prev" previousPage pageTitle="11 of 12">
        Previous page
      </Pagination.Anchor>
    </Router>
  </Pagination>
);
