import React from 'react';
import { render } from '@testing-library/react';

import Link from '.';

describe('Breadcrumbs Link', () => {
  it('renders without crashing', () => {
    render(<Link href="#id">Example</Link>);
  });
});
