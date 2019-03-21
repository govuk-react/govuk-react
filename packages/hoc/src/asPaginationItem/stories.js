import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter, Link } from 'react-router-dom';

import asPaginationItem from '.';

const PaginationTag = asPaginationItem('a');
const PaginationLink = asPaginationItem(Link);

const stories = storiesOf('Utilities/asPaginationItem', module);

stories.add('asPaginationItem passing in anchor', () => (
  <PaginationTag href="https://cats.org">asPaginationItem anchor example</PaginationTag>
));

stories.add('asPaginationItem passing in anchor target=blank', () => (
  <PaginationTag href="https://cats.org" target="_blank">
    asPaginationItem anchor example
  </PaginationTag>
));

stories.add('asPaginationItem passing in React Router Link', () => (
  <BrowserRouter>
    <PaginationLink to="https://cats.com">asPaginationItem Link example</PaginationLink>
  </BrowserRouter>
));
