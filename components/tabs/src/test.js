import React from 'react';
import { cleanup, render } from 'react-testing-library';

import { SimpleTabs } from './fixtures';

afterEach(cleanup);

describe('Tabs', () => {
  it('matches wrapper snapshot', () => {
    const { asFragment } = render(<SimpleTabs />);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO: test for clicking between tabs above media Queries width.
  // Not currently possible with jsdom
});
