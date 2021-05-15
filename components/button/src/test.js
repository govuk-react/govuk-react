import React from 'react';
import { render } from '@testing-library/react';

import Button, { ButtonStart, ButtonStartIcon, ButtonDisabled } from './fixtures';

describe('button', () => {
  describe('basics', () => {
    it('should render a button', () => {
      const { getByRole, getByText } = render(<Button>Example</Button>);

      expect(getByRole('button')).toBeInTheDocument();
      expect(getByRole('button')).toEqual(getByText('Example'));
    });
  });

  describe('disabled', () => {
    it('should render a button with the disabled attribute', () => {
      const { getByRole } = render(<ButtonDisabled />);

      expect(getByRole('button')).toBeDisabled();
    });
  });

  describe('start button', () => {
    it('should render a button with the isStart prop', () => {
      const { getByRole } = render(<ButtonStart />);

      expect(getByRole('button')).toBeInTheDocument();
    });
  });

  describe('button with icon', () => {
    it('should render an SVG icon within the button', () => {
      const { container } = render(<ButtonStartIcon />);

      expect(container.querySelectorAll('svg').length).toEqual(1);
    });
  });
});
