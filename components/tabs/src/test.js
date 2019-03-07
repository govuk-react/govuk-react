import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import 'jest-dom/extend-expect';


import { SimpleTabs } from './fixtures';

afterEach(cleanup);

describe.only('Tabs', () => {
  it('clicking link works without crashing', () => {
    const { container } = render(<SimpleTabs />);
    const firstLink = container.querySelector('a');
    fireEvent.click(firstLink);
    expect(container).toBeVisible();
  });

  it('matches wrapper snapshot', () => {
    const { asFragment } = render(<SimpleTabs />);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO: test for clicking between tabs above media Queries width.
  // Not currently possible with jsdom
});
