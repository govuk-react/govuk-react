import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import BackLink from '.';

describe('Back Link', () => {
  it('renders contents without crashing', () => {
    const { getByText } = render(<BackLink>example</BackLink>);

    expect(getByText('example')).toBeInTheDocument();
  });

  it('renders with default content', () => {
    const { children } = BackLink.defaultProps;
    const { getByText } = render(<BackLink />);

    expect(children).toBeDefined();
    expect(getByText(children)).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const clickHandler = jest.fn();
    const { getByText } = render(<BackLink onClick={clickHandler}>example</BackLink>);

    expect(clickHandler).not.toHaveBeenCalled();

    userEvent.click(getByText('example'));

    expect(clickHandler).toHaveBeenCalled();
  });
});
