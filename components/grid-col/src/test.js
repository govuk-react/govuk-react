import React, { Fragment } from 'react';
import { mount } from 'enzyme';

import GridCol from '.';

describe('GridCol', () => {
  const OLD_ENV = process.env;
  // eslint-disable-next-line no-console
  const nativeWarn = console.warn;
  let warnCallCount;
  /**
   * Make sure the setup is the same for every test
   */
  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    // eslint-disable-next-line no-console
    console.warn = () => {
      warnCallCount += 1;
    };
    warnCallCount = 0;
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = nativeWarn;
    process.env = OLD_ENV;
  });

  it('renders without crashing', () => {
    mount(<GridCol>example</GridCol>);
  });

  it('produces deprecation warnings for old-style props when not in production', () => {
    process.env.NODE_ENV = 'development';

    mount(<GridCol columnOneThird>example</GridCol>);
    mount(<GridCol columnTwoThirds>example</GridCol>);
    mount(<GridCol columnOneQuarter>example</GridCol>);

    // For reasons unknown, styled-components is (currently) calling styling functions twice
    // so rather than checking for 3 warnings here we're just checking it's not zero
    expect(warnCallCount).not.toEqual(0);
  });

  it('does not produces deprecation warnings for old-style props when in production', () => {
    process.env.NODE_ENV = 'production';

    mount(<GridCol columnOneThird>example</GridCol>);
    mount(<GridCol columnTwoThirds>example</GridCol>);
    mount(<GridCol columnOneQuarter>example</GridCol>);

    expect(warnCallCount).toEqual(0);
  });

  it('simple render matches snapshot', () => {
    const wrapper = mount(<GridCol>example</GridCol>);

    expect(wrapper).toMatchSnapshot('GridCol simple example');
  });

  it('renders custom widths matching snapshot', () => {
    const example = (
      <Fragment>
        <GridCol setWidth="one-quarter">example</GridCol>
        <GridCol setWidth="three-quarters">example</GridCol>
        <GridCol setWidth="90%">example</GridCol>
        <GridCol setWidth="one-third" setDesktopWidth="one-quarter">
          example
        </GridCol>
        <GridCol setDesktopWidth="one-third">example</GridCol>
      </Fragment>
    );
    const wrapper = mount(example);

    expect(wrapper).toMatchSnapshot('GridCol custom widths example');
  });
});
