import React from 'react';

import SearchBox from '.';

export default {
  title: 'Form/SearchBox',
  component: SearchBox,
};

export const Default = () => (
  <SearchBox>
    <SearchBox.Input placeholder="Search GOV.UK" />
    <SearchBox.Button />
  </SearchBox>
);
