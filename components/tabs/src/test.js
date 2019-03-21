import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import { SimpleTabs } from './fixtures';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    // jsdom appears not to cope with CSSinJS media queries
    value: jest.fn(() => ({ matches: false })),
  });
});

afterEach(cleanup);

describe('Tabs', () => {
  it('clicking link works without crashing', () => {
    const { container } = render(<SimpleTabs />);
    const firstLink = container.querySelector('a');
    fireEvent.click(firstLink);
    expect(container).toBeTruthy();
  });

  it('matches wrapper snapshot', () => {
    const { asFragment } = render(<SimpleTabs />);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO: test for clicking between tabs above media Queries width.
  // Not currently possible with jsdom
});
