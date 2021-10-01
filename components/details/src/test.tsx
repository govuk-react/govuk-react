import * as React from 'react';
import { render } from '@testing-library/react';
import { Details } from '.';

describe('details', () => {
  it('should render the provided text and content', () => {
    const { getByText } = render(
      <Details summary="Help with nationality">
        If you’re not sure about your nationality, try to find out from an official document like a passport or national
        ID card.
      </Details>
    );

    expect(getByText('Help with nationality')).toBeInTheDocument();
    expect(
      getByText(
        'If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.'
      )
    ).toBeInTheDocument();
  });
});
