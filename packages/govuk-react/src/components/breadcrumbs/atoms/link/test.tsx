import * as React from 'react';
import { render } from '@testing-library/react';

import Link from '.';

describe('Breadcrumbs Link', () => {
  it('renders contents without crashing', () => {
    const contents = 'Example';
    const { getByText } = render(<Link href="#id">{contents}</Link>);

    expect(getByText(contents)).toBeInTheDocument();
  });
});
