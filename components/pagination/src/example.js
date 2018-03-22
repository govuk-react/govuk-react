import React from 'react';
import { asPaginationItem } from '@govuk-react/hoc';
import Pagination from '.';

const PaginationTag = asPaginationItem('a');

export default () => (
  <Pagination>
    <PaginationTag href="#prev" previousPage pageTitle="1 of 3">
      Previous page
    </PaginationTag>
    <PaginationTag href="#next" nextPage pageTitle="3 of 3">
      Next page
    </PaginationTag>
  </Pagination>);
