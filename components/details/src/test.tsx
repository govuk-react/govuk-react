import React from 'react';
import { render } from '@testing-library/react';

import { DetailsSimple, summaryText, paragraphs } from './fixtures';

describe('details', () => {
  it('should render the provided text and content', () => {
    const { getByText } = render(<DetailsSimple />);

    expect(getByText(summaryText)).toBeInTheDocument();
    expect(getByText(paragraphs[0])).toBeInTheDocument();
  });
});
