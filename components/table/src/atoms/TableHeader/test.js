import React from 'react';
import ReactDOM from 'react-dom';
import TableHeader from './';

const example = <table><TableHeader><tr><th>hi</th></tr></TableHeader></table>;

describe(TableHeader, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(example, div);
  });
});
