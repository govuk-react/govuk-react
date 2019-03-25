import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { asPaginationItem } from '@govuk-react/hoc';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Pagination from '.';
import ReadMe from '../README.md';

const PaginationTag = asPaginationItem('a');
const PaginationLink = asPaginationItem(Link);

const stories = storiesOf('Navigation/Pagination', module);
const examples = storiesOf('Navigation/Pagination/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Pagination>
    <PaginationTag href="#prev" previousPage>
      Previous page
    </PaginationTag>
    <PaginationTag href="#next" nextPage>
      Next page
    </PaginationTag>
  </Pagination>
));

examples.add('Pagination default (React Router Link)', () => (
  <Pagination>
    <Router>
      <PaginationLink to="/prev" previousPage>
        Previous page
      </PaginationLink>
    </Router>
    <Router>
      <PaginationLink to="/next" nextPage>
        Next page
      </PaginationLink>
    </Router>
  </Pagination>
));

examples.add('Pagination with numbers (anchor tag)', () => (
  <Pagination>
    <PaginationTag href="#prev" previousPage pageTitle="1 of 3">
      Previous page
    </PaginationTag>
    <PaginationTag href="#next" nextPage pageTitle="3 of 3">
      Next page
    </PaginationTag>
  </Pagination>
));

examples.add('Pagination with numbers (React Router Link)', () => (
  <Pagination>
    <Router>
      <PaginationLink to="#prev" previousPage pageTitle="1 of 3">
        Previous page
      </PaginationLink>
    </Router>
    <Router>
      <PaginationLink to="#next" nextPage pageTitle="3 of 3">
        Next page
      </PaginationLink>
    </Router>
  </Pagination>
));

examples.add('Pagination with titles (anchor tag)', () => (
  <Pagination>
    <PaginationTag href="#prev" previousPage pageTitle="Applying for a provisional lorry or bus licence">
      Previous
    </PaginationTag>
    <PaginationTag href="#next" nextPage pageTitle="Driver CPC part 1 test: theory">
      Next
    </PaginationTag>
  </Pagination>
));

examples.add('Pagination with titles (React Router Link)', () => (
  <Pagination>
    <Router>
      <PaginationLink to="#prev" previousPage pageTitle="Applying for a provisional lorry or bus licence">
        Previous
      </PaginationLink>
    </Router>
    <Router>
      <PaginationLink to="#next" nextPage pageTitle="Driver CPC part 1 test: theory">
        Next
      </PaginationLink>
    </Router>
  </Pagination>
));

examples.add('Pagination with numbers just with next page (anchor tag)', () => (
  <Pagination>
    <PaginationTag href="#next" nextPage pageTitle="2 of 12">
      Next page
    </PaginationTag>
  </Pagination>
));

examples.add('Pagination with numbers just with next page (React Router Link)', () => (
  <Pagination>
    <Router>
      <PaginationLink to="#next" nextPage pageTitle="2 of 12">
        Next page
      </PaginationLink>
    </Router>
  </Pagination>
));

examples.add('Pagination with numbers just with previous page (anchor tag)', () => (
  <Pagination>
    <PaginationTag href="#prev" previousPage pageTitle="11 of 12">
      Previous page
    </PaginationTag>
  </Pagination>
));

examples.add('Pagination with numbers just with previous page (React Router Link)', () => (
  <Pagination>
    <Router>
      <PaginationLink to="#prev" previousPage pageTitle="11 of 12">
        Previous page
      </PaginationLink>
    </Router>
  </Pagination>
));
