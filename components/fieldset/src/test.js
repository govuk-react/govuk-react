import React from 'react';
import { mount } from 'enzyme';

import { FieldsetDocumented as Fieldset } from '.';

describe('Fieldset', () => {
  it('matches snapshot', () => {
    expect(mount(<Fieldset />)).toMatchSnapshot('Fieldset');
  });
});
