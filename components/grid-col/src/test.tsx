import * as React from 'react';
import { render } from '@testing-library/react';

import { GridCol } from '.';

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

  it('renders contents without crashing', () => {
    const contents = 'Example';
    const { getByText } = render(<GridCol>{contents}</GridCol>);

    expect(getByText(contents)).toBeInTheDocument();
  });

  it('produces deprecation warnings for old-style props when not in production', () => {
    process.env.NODE_ENV = 'development';

    render(<GridCol columnOneThird>example</GridCol>);
    render(<GridCol columnTwoThirds>example</GridCol>);
    render(<GridCol columnOneQuarter>example</GridCol>);

    // For reasons unknown, styled-components is (currently) calling styling functions twice
    // so rather than checking for 3 warnings here we're just checking it's not zero
    expect(warnCallCount).not.toEqual(0);
  });

  it('does not produces deprecation warnings for old-style props when in production', () => {
    process.env.NODE_ENV = 'production';

    render(<GridCol columnOneThird>example</GridCol>);
    render(<GridCol columnTwoThirds>example</GridCol>);
    render(<GridCol columnOneQuarter>example</GridCol>);

    expect(warnCallCount).toEqual(0);
  });

  it('renders custom widths without crashing', () => {
    render(
      <>
        <GridCol setWidth="one-quarter">example</GridCol>
        <GridCol setWidth="three-quarters">example</GridCol>
        <GridCol setWidth="90%">example</GridCol>
        <GridCol setWidth="one-third" setDesktopWidth="one-quarter">
          example
        </GridCol>
        <GridCol setDesktopWidth="one-third">example</GridCol>
      </>
    );
  });
});
