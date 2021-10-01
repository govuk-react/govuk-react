import * as React from 'react';
import { render } from '@testing-library/react';

import { FormGroup } from '.';

describe('FormGroup', () => {
  it('renders contents without crashing', () => {
    const contents = 'example';
    const { getByText } = render(<FormGroup>{contents}</FormGroup>);

    expect(getByText(contents)).toBeInTheDocument();
  });

  it('renders contents with error flag set without crashing', () => {
    const contents = 'example';
    const { getByText } = render(<FormGroup error>{contents}</FormGroup>);

    expect(getByText(contents)).toBeInTheDocument();
  });
});
