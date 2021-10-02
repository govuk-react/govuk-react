import * as React from 'react';

import { SearchBox } from '.';

export default {
  title: 'Form/Search box',
  id: 'search-box',
  component: SearchBox,
};

export const Default: React.FC = () => (
  <SearchBox>
    <SearchBox.Input placeholder="Search GOV.UK" />
    <SearchBox.Button />
  </SearchBox>
);
