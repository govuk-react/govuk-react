import * as React from 'react';
import { render } from '@testing-library/react';

import { GridRow } from '.';

describe('GridRow', () => {
  it('renders contents without crashing', () => {
    const contents = 'Example';
    const { getByText } = render(<GridRow>{contents}</GridRow>);

    expect(getByText(contents)).toBeInTheDocument();
  });
});
