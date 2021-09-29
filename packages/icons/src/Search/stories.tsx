import React from 'react';

import { color, text } from '@storybook/addon-knobs';

import SearchComponent from '.';

export default {
  title: 'Utility/Icons/Search',
};

export const Search: React.FC = () => {
  const fillColour = color('fill', 'black');
  const width = text('width', '256px');
  const height = text('height', '256px');
  return <SearchComponent width={width} height={height} fill={fillColour} title="Example Search implementation" />;
};
