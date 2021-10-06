import * as React from 'react';
import { mount } from 'enzyme';
import { ORANGE } from 'govuk-colours';

import { Input } from '.';

describe('Input', () => {
  const wrapper = <Input type="text" />;
  const withError = <Input type="text" error />;
  const withColouredError = <Input type="text" errorColor={ORANGE} error />;

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('matches withError snapshot', () => {
    expect(mount(withError)).toMatchSnapshot('with error mount');
  });

  it('matches withColouredError snapshot', () => {
    expect(mount(withColouredError)).toMatchSnapshot('with coloured error mount');
  });
});
