import React from 'react';
import ReactDOM from 'react-dom';
import OrderedList from './';

describe(OrderedList, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OrderedList>Example</OrderedList>, div);
    ReactDOM.render(
      <OrderedList listStyleType="lower-alpha">Example</OrderedList>,
      div,
    );
  });
});
