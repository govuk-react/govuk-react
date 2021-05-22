import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Pagination from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Navigation/Pagination', module);
const examples = storiesOf('Navigation/Pagination/Examples', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', () => (
  <Pagination>
    <Pagination.Anchor href="#prev" previousPage>
      Previous page
    </Pagination.Anchor>
    <Pagination.Anchor href="#next" nextPage>
      Next page
    </Pagination.Anchor>
  </Pagination>
));

examples.add('Pagination default (React Router Link)', () => (
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
));

examples.add('Pagination with numbers (anchor tag)', () => (
  <Pagination>
    <Pagination.Anchor href="#prev" previousPage pageTitle="1 of 3">
      Previous page
    </Pagination.Anchor>
    <Pagination.Anchor href="#next" nextPage pageTitle="3 of 3">
      Next page
    </Pagination.Anchor>
  </Pagination>
));

examples.add('Pagination with numbers (React Router Link)', () => (
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
));

examples.add('Pagination with titles (anchor tag)', () => (
  <Pagination>
    <Pagination.Anchor href="#prev" previousPage pageTitle="Applying for a provisional lorry or bus licence">
      Previous
    </Pagination.Anchor>
    <Pagination.Anchor href="#next" nextPage pageTitle="Driver CPC part 1 test: theory">
      Next
    </Pagination.Anchor>
  </Pagination>
));

examples.add('Pagination with titles (React Router Link)', () => (
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
));

examples.add('Pagination with numbers just with next page (anchor tag)', () => (
  <Pagination>
    <Pagination.Anchor href="#next" nextPage pageTitle="2 of 12">
      Next page
    </Pagination.Anchor>
  </Pagination>
));

examples.add('Pagination with numbers just with next page (React Router Link)', () => (
  <Pagination>
    <Router>
      <Pagination.Anchor as={Link} to="#next" nextPage pageTitle="2 of 12">
        Next page
      </Pagination.Anchor>
    </Router>
  </Pagination>
));

examples.add('Pagination with numbers just with previous page (anchor tag)', () => (
  <Pagination>
    <Pagination.Anchor href="#prev" previousPage pageTitle="11 of 12">
      Previous page
    </Pagination.Anchor>
  </Pagination>
));

examples.add('Pagination with numbers just with previous page (React Router Link)', () => (
  <Pagination>
    <Router>
      <Pagination.Anchor as={Link} to="#prev" previousPage pageTitle="11 of 12">
        Previous page
      </Pagination.Anchor>
    </Router>
  </Pagination>
));
