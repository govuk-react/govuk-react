import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Heading from '.';
import { H1, H2, H3, H4, H5, H6 } from './presets';

describe('Heading', () => {
  const OLD_ENV = process.env;
  // Capture console warnings and errors as we're expecting to produce both
  // eslint-disable-next-line no-console
  const nativeWarn = console.warn;
  // eslint-disable-next-line no-console
  const nativeError = console.error;
  let warnCallCount;
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    // eslint-disable-next-line no-console
    console.warn = () => {
      warnCallCount += 1;
    };
    warnCallCount = 0;
    // eslint-disable-next-line no-console
    console.error = () => {};
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = nativeWarn;
    // eslint-disable-next-line no-console
    console.error = nativeError;
    process.env = OLD_ENV;
  });

  it('renders a Heading and all the H-level tags without crashing or producing a warning', () => {
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

    expect(warnCallCount).toEqual(0);
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

    expect(() => {
      ReactDOM.render(<Heading size={0}>{example}</Heading>, div);
    }).toThrow();
    expect(() => {
      ReactDOM.render(<Heading size={1}>{example}</Heading>, div);
    }).toThrow();
    expect(() => {
      ReactDOM.render(<Heading size={99999}>{example}</Heading>, div);
    }).toThrow();
    expect(() => {
      ReactDOM.render(<Heading size="test">{example}</Heading>, div);
    }).toThrow();
  });

  it('produces deprecation warnings if level prop is used when not in production', () => {
    process.env.NODE_ENV = 'development';

    mount(<Heading level="1">example</Heading>);
    mount(<Heading level="3">example</Heading>);
    mount(<Heading level="7">example</Heading>);

    // For reasons unknown, styled-components is (currently) calling styling functions twice
    // so rather than checking for 3 warnings here we're just checking it's not zero
    expect(warnCallCount).not.toEqual(0);
  });

  it('does not produces deprecation warnings if level prop is used when in production', () => {
    process.env.NODE_ENV = 'production';

    mount(<Heading level="1">example</Heading>);
    mount(<Heading level="3">example</Heading>);
    mount(<Heading level="7">example</Heading>);

    expect(warnCallCount).toEqual(0);
  });

  it('matches wrapper snapshot', () => {
    const example = 'example';
    const wrapper = <Heading>{example}</Heading>;

    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
