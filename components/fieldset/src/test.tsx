import React from 'react';
import { render } from '@testing-library/react';

import { FieldsetDocumented as Fieldset } from '.';

describe('Fieldset', () => {
  it('renders without crashing', () => {
    render(<Fieldset />);
  });
});
