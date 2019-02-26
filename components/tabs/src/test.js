import React from 'react';
import { cleanup, render } from 'react-testing-library';

import { TableTabs } from './fixtures';

afterEach(cleanup);

describe('Tabs', () => {
  it('matches wrapper snapshot', () => {
    const {
      asFragment,
    } = render(<TableTabs />);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO: test for clicking between tabs above media Queries width.
  // Not currently possible with jsdom
});
