import * as React from 'react';
import { render } from '@testing-library/react';

import Checkbox from '.';

describe('Checkbox', () => {
  it('should render an input type="checkbox" with an appropriate label', () => {
    const { getByLabelText, getByRole } = render(<Checkbox>Example</Checkbox>);

    expect(getByRole('checkbox')).toBeInTheDocument();
    expect(getByLabelText('Example')).toBeInTheDocument();
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
