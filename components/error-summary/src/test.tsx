import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { ErrorSummary } from '.';

describe('error summary', () => {
  it('renders a given heading', () => {
    const heading = 'heading';
    const { getByText } = render(<ErrorSummary heading={heading} />);

    expect(getByText(heading)).toBeInTheDocument();
  });

  it('renders a default heading if one is not given', () => {
    const { heading } = ErrorSummary.defaultProps;
    const { getByText } = render(<ErrorSummary />);

    expect(heading).toBeDefined();
    expect(getByText(heading)).toBeInTheDocument();
  });

  it('renders a given description', () => {
    const description = 'description';
    const { getByText } = render(<ErrorSummary description={description} />);

    expect(getByText(description)).toBeInTheDocument();
  });

  it('renders clickable list of errors', () => {
    const errors = [
      { text: 'first error', targetName: 'first' },
      { text: 'second error', targetName: 'second' },
    ];
    const onHandleErrorClick = jest.fn();
    const { getByText } = render(<ErrorSummary errors={errors} onHandleErrorClick={onHandleErrorClick} />);

    errors.forEach(({ text, targetName }) => {
      const item = getByText(text);

      expect(item).toBeInTheDocument();
      expect(onHandleErrorClick).not.toHaveBeenCalledWith(targetName);

      fireEvent.click(item);

      expect(onHandleErrorClick).toHaveBeenCalledWith(targetName);
    });
  });

  it('handles onClick of error with Enter', async () => {
    const text = 'error description';
    const targetName = 'error target';
    const onHandleErrorClick = jest.fn();
    const { getByText } = render(
      <ErrorSummary errors={[{ text, targetName }]} onHandleErrorClick={onHandleErrorClick} />
    );
    const user = userEvent.setup();

    const errorLink = getByText(text);
    expect(errorLink).toBeInTheDocument();
    expect(onHandleErrorClick).not.toHaveBeenCalledWith(targetName);
    fireEvent.focus(errorLink);
    await user.type(errorLink, '{Enter}');

    expect(onHandleErrorClick).toHaveBeenCalledWith(targetName);
  });
});
