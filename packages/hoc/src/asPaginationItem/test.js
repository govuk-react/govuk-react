import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import asPaginationItem from '.';

const PaginationTag = asPaginationItem('a');

const wrapper = <PaginationTag href="https://example.com">Example</PaginationTag>;

describe('asPaginationItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('renders a component for each prop without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <div>
        <PaginationTag href="https://example.com" nextPage>
          Example
        </PaginationTag>
        <PaginationTag href="https://example.com" previousPage>
          Example
        </PaginationTag>
        <PaginationTag href="https://example.com" pageTitle="This is an example">
          Example
        </PaginationTag>
      </div>,
      div
    );
  });

  it('returns a component', () => {
    expect(shallow(wrapper).html()).toBeTruthy();
  });

  it('matches wrapper snapshot', () => {
    expect(shallow(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
