import React from 'react';
import { mount } from 'enzyme';

import { FormGroupDocumented as FormGroup } from '.';

describe('FormGroup', () => {
  it('matches snapshot', () => {
    expect(mount(<FormGroup>FormGroup example</FormGroup>)).toMatchSnapshot('FormGroup');
  });

  it('matches snapshot with error prop set', () => {
    expect(mount(<FormGroup error>FormGroup example</FormGroup>)).toMatchSnapshot('with error prop');
  });
});
