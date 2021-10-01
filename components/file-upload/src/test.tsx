import * as React from 'react';
import { render } from '@testing-library/react';

import { FileUpload } from '.';

describe('FileUpload', () => {
  it('renders label from children', () => {
    const label = 'Label';
    const { getByLabelText } = render(<FileUpload>{label}</FileUpload>);

    expect(getByLabelText(label)).toBeInTheDocument();
  });

  it('shows a hint when one is provided', () => {
    const hint = 'hint';
    const { getByText } = render(<FileUpload hint={hint}>Label</FileUpload>);

    expect(getByText(hint)).toBeInTheDocument();
  });

  it('does NOT show error when meta.touched is not true', () => {
    const error = 'error';
    const { getByText } = render(
      <FileUpload hint="hint" meta={{ touched: false, error }}>
        Example
      </FileUpload>
    );

    expect(() => getByText(error)).toThrow();
  });

  it('shows error when meta.touched is true', () => {
    const error = 'error';
    const { getByText } = render(
      <FileUpload hint="hint" meta={{ touched: true, error }}>
        Example
      </FileUpload>
    );

    expect(getByText(error)).toBeInTheDocument();
  });
});
