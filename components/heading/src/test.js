import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Heading from '.';
import { H1, H2, H3, H4, H5, H6 } from './presets';

describe('Heading', () => {
  it('renders a Heading and all the H-level tags without crashing', () => {
    const example = 'example';
    const wrapper = <Heading>{example}</Heading>;
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
    ReactDOM.render(<Heading size="SMALL">Test</Heading>, document.createElement('div'));
  });

  it('allows custom numeric GDS font size without crashing', () => {
    ReactDOM.render(<Heading size={16}>Test</Heading>, document.createElement('div'));
  });

  it('throws an error if an unsupported size is used', () => {
    const example = 'example';
    const div = document.createElement('div');

    expect(() => { ReactDOM.render(<Heading size={0}>{example}</Heading>, div); }).toThrow();
    expect(() => { ReactDOM.render(<Heading size={1}>{example}</Heading>, div); }).toThrow();
    expect(() => { ReactDOM.render(<Heading size={99999}>{example}</Heading>, div); }).toThrow();
    expect(() => { ReactDOM.render(<Heading size="test">{example}</Heading>, div); }).toThrow();
  });

  it('matches wrapper snapshot', () => {
    const example = 'example';
    const wrapper = <Heading>{example}</Heading>;

    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
