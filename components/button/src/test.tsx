import * as React from 'react';
import { render } from '@testing-library/react';
import { ButtonArrow } from '@govuk-react/icons';

import { Button } from '.';

const ButtonStart: React.FC = (props) => (
  <Button start {...props}>
    Save and continue
  </Button>
);

const ButtonStartIcon: React.FC = () => (
  <Button icon={<ButtonArrow />} start>
    Start now
  </Button>
);

const ButtonDisabled: React.FC = () => <Button disabled>Disabled primary button</Button>;

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
