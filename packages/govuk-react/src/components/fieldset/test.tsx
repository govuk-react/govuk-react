import * as React from 'react';
import { render } from '@testing-library/react';

import { Fieldset } from '.';

describe('Fieldset', () => {
  it('renders contents without crashing', () => {
    const contents = 'Example';
    const { getByText } = render(<Fieldset>{contents}</Fieldset>);

    expect(getByText(contents)).toBeInTheDocument();
  });
});
