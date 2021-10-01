import * as React from 'react';
import { render } from '@testing-library/react';

import Legend from '.';

describe('Fieldset.Legend', () => {
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
    ['XL', 'XLARGE', 'L', 'LARGE', 'M', 'MEDIUM', 'S', 'SMALL'].forEach((size) => {
      it(`shows a '${size}' item`, () => {
        expect(render(<Legend size={size}>Tests</Legend>).getByText('Tests')).toBeInTheDocument();
      });
    });
  });

  it('allows custom numeric GDS font size without crashing', () => {
    render(<Legend size={16}>Test</Legend>);
  });

  it('throws an error if an unsupported size is used', () => {
    expect(() => {
      render(<Legend size={0}>example</Legend>);
    }).toThrow();
    expect(() => {
      render(<Legend size={1}>example</Legend>);
    }).toThrow();
    expect(() => {
      render(<Legend size={99999}>example</Legend>);
    }).toThrow();
    expect(() => {
      render(<Legend size="test">example</Legend>);
    }).toThrow();
  });

  it('will insert a (styled) h1 tag if isPageHeading is set', () => {
    const { getByRole } = render(<Legend isPageHeading>Test</Legend>);

    expect(getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
