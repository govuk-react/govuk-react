import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import { YELLOW } from 'govuk-colours';
import { FOCUS_WIDTH } from '@govuk-react/constants';

import 'jest-dom/extend-expect';

import { ExampleWithoutSummaries } from './fixtures';

const focusedStyle = `
  outline: ${FOCUS_WIDTH} solid ${YELLOW};
  outline-offset: 0;
`;

afterEach(cleanup);

describe('Tabs', () => {
  it('clicking button changes focus on header', async () => {
    const { container } = render(<ExampleWithoutSummaries
      initialState={{
        accordionOne: false,
        accordionTwo: false,
        accordionThree: false,
        accordionFour: false,
      }}
    />);
    const firstButton = container.querySelector('button');
    const secondButton = container.querySelectorAll('button')[1];

    // const firstHeader = container.querySelector('div div div div:nth-child(2) div');
    const firstHeader = container.querySelector('div:nth-child(2) > div');
    const secondHeader = container.querySelector('div:nth-child(3) > div');

    expect(firstHeader).not.toHaveStyle(focusedStyle);

    // represents click event, jsdom handles focus onClick differently to browser
    fireEvent.focus(firstButton);

    expect(firstHeader).toHaveStyle(focusedStyle);

    // represents second click event, jsdom handles focus onClick differently to browser
    fireEvent.blur(firstButton);
    fireEvent.focus(secondButton);

    expect(firstHeader).not.toHaveStyle(focusedStyle);
    expect(secondHeader).toHaveStyle(focusedStyle);
  });

  it('clicking button toggles visible children', () => {
    const { container, queryByText } = render(<ExampleWithoutSummaries
      initialState={{
        accordionOne: false,
        accordionTwo: false,
        accordionThree: false,
        accordionFour: false,
      }}
    />);
    const firstButton = container.querySelector('button');
    fireEvent.click(firstButton);

    const children = queryByText('This is the content for writing well for the web.');

    expect(children).toBeInTheDocument();

    fireEvent.click(firstButton);

    expect(children).not.toBeInTheDocument();
  });

  it('matches wrapper snapshot', () => {
    const { asFragment } = render(<ExampleWithoutSummaries
      initialState={{
        accordionOne: false,
        accordionTwo: false,
        accordionThree: false,
        accordionFour: false,
      }}
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  // TODO: test for clicking between tabs above media Queries width.
  // Not currently possible with jsdom
});
