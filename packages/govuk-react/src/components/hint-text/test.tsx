import * as React from 'react';
import { render } from '@testing-library/react';

import { HintText } from '.';

describe('HintText', () => {
  it('renders contents without crashing', () => {
    const contents = 'Example';
    const { getByText } = render(<HintText>{contents}</HintText>);

    expect(getByText(contents)).toBeInTheDocument();
  });
});
