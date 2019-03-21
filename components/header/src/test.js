import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Header from '.';
import {
  H1, H2, H3, H4, H5, H6,
} from './presets';

describe('Header', () => {
  it('renders a Header and all the H-level tags without crashing', () => {
    const example = 'example';
    const wrapper = <Header>{example}</Header>;
    const div = document.createElement('div');

    ReactDOM.render(wrapper, div);
    ReactDOM.render(<H1>{example}</H1>, div);
    ReactDOM.render(<H2>{example}</H2>, div);
    ReactDOM.render(<H3>{example}</H3>, div);
    ReactDOM.render(<H4>{example}</H4>, div);
    ReactDOM.render(<H5>{example}</H5>, div);
    ReactDOM.render(<H6>{example}</H6>, div);
  });

  it('allows custom string-based font size without crashing', () => {
    ReactDOM.render(<Header size="SMALL">Test</Header>, document.createElement('div'));
  });

  it('allows custom numeric GDS font size without crashing', () => {
    ReactDOM.render(<Header size={16}>Test</Header>, document.createElement('div'));
  });

  it('throws an error if an unsupported size is used', () => {
    const example = 'example';
    const div = document.createElement('div');

    expect(() => { ReactDOM.render(<Header size={0}>{example}</Header>, div); }).toThrow();
    expect(() => { ReactDOM.render(<Header size={1}>{example}</Header>, div); }).toThrow();
    expect(() => { ReactDOM.render(<Header size={99999}>{example}</Header>, div); }).toThrow();
    expect(() => { ReactDOM.render(<Header size="test">{example}</Header>, div); }).toThrow();
  });

  it('matches wrapper snapshot', () => {
    const example = 'example';
    const wrapper = <Header>{example}</Header>;

    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
