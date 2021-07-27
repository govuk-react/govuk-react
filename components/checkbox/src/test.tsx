import React from 'react';
import { render } from '@testing-library/react';

import Checkbox from '.';

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox>Example</Checkbox>);
  });

  it('should render an input type="checkbox"', () => {
    const { getByRole, getByText } = render(<Checkbox>Example</Checkbox>);

    expect(getByRole('checkbox')).toBeInTheDocument();
    expect(getByText('Example')).toBeInTheDocument();
  });

  it('renders disabled checkbox', () => {
    const { getByRole } = render(<Checkbox disabled>Example</Checkbox>);

    expect(getByRole('checkbox')).toBeDisabled();
  });

  it('can render with hint text', () => {
    const { getByText } = render(<Checkbox hint="Hint text">Example</Checkbox>);

    expect(getByText('Hint text')).toBeInTheDocument();
  });
});
