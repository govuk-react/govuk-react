import * as React from 'react';
import { render } from '@testing-library/react';
import * as Details from '.';

describe('details', () => {
  it('should render the provided text and content', () => {
    const { getByText } = render(<Details.Composite summary="Help with nationality">Some help text</Details.Composite>);

    expect(getByText('Help with nationality')).toBeInTheDocument();
    expect(getByText('Some help text')).toBeInTheDocument();
  });
});
