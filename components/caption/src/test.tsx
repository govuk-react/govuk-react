import * as React from 'react';
import { render } from '@testing-library/react';

import { Caption } from '.';

describe('Caption', () => {
  // Capture errors as we're expecting to throw some
  // eslint-disable-next-line no-console
  const nativeError = console.error;
  beforeEach(() => {
    jest.resetModules();
    // eslint-disable-next-line no-console
    console.error = () => null;
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.error = nativeError;
  });

  describe('renders custom string-based font sizes', () => {
    ['XL', 'XLARGE', 'L', 'LARGE', 'M', 'MEDIUM'].forEach((size) => {
      it(`shows a '${size}' item`, () => {
        expect(render(<Caption size={size}>Tests</Caption>).getByText('Tests')).toBeInTheDocument();
      });
    });
  });

  it('allows custom numeric GDS font size without crashing', () => {
    render(<Caption size={16}>Test</Caption>);
  });

  it('throws an error if an unsupported size is used', () => {
    expect(() => {
      render(<Caption size={0}>example</Caption>);
    }).toThrow();
    expect(() => {
      render(<Caption size={1}>example</Caption>);
    }).toThrow();
    expect(() => {
      render(<Caption size={99999}>example</Caption>);
    }).toThrow();
    expect(() => {
      render(<Caption size="test">example</Caption>);
    }).toThrow();
  });
});
