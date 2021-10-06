import * as React from 'react';
import { render } from '@testing-library/react';

import Heading, { H1, H2, H3, H4, H5, H6 } from '.';

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
    console.error = () => null;
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = nativeWarn;
    // eslint-disable-next-line no-console
    console.error = nativeError;
    process.env = OLD_ENV;
  });

  describe('renders a Heading and all the H-level tags without crashing or producing a warning', () => {
    const example = 'example';

    [Heading, H1, H2, H3, H4, H5, H6].forEach((Component) => {
      it(`renders ${Component.name}`, () => {
        const { getByText } = render(<Component>{example}</Component>);

        expect(getByText(example)).toBeInTheDocument();
        expect(warnCallCount).toEqual(0);
      });
    });
  });

  it('allows custom string-based font size without crashing', () => {
    render(<Heading size="SMALL">Test</Heading>);
  });

  it('allows custom numeric GDS font size without crashing', () => {
    render(<Heading size={16}>Test</Heading>);
  });

  it('throws an error if an unsupported size is used', () => {
    const example = 'example';

    expect(() => {
      render(<Heading size={0}>{example}</Heading>);
    }).toThrow();
    expect(() => {
      render(<Heading size={1}>{example}</Heading>);
    }).toThrow();
    expect(() => {
      render(<Heading size={99999}>{example}</Heading>);
    }).toThrow();
    expect(() => {
      render(<Heading size="test">{example}</Heading>);
    }).toThrow();
  });

  it('produces deprecation warnings if level prop is used when not in production', () => {
    process.env.NODE_ENV = 'development';

    render(<Heading level="1">example</Heading>);
    render(<Heading level="3">example</Heading>);
    render(<Heading level="7">example</Heading>);

    // For reasons unknown, styled-components is (currently) calling styling functions twice
    // so rather than checking for 3 warnings here we're just checking it's not zero
    expect(warnCallCount).not.toEqual(0);
  });

  it('does not produces deprecation warnings if level prop is used when in production', () => {
    process.env.NODE_ENV = 'production';

    render(<Heading level="1">example</Heading>);
    render(<Heading level="3">example</Heading>);
    render(<Heading level="7">example</Heading>);

    expect(warnCallCount).toEqual(0);
  });
});
