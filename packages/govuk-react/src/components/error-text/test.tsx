import * as React from 'react';
import { render } from '@testing-library/react';

import { ErrorText } from '.';

describe('ErrorText', () => {
  it('renders contents without crashing', () => {
    const contents = 'Example';
    const { getByText } = render(<ErrorText>{contents}</ErrorText>);

    expect(getByText(contents)).toBeInTheDocument();
  });
});
