import * as React from 'react';
import { mount } from 'enzyme';

import { VisuallyHidden } from '.';

describe('VisuallyHidden', () => {
  it('matches snapshot', () => {
    expect(mount(<VisuallyHidden>Example</VisuallyHidden>)).toMatchSnapshot('default render');
  });

  it('focusable version matches snapshot', () => {
    expect(mount(<VisuallyHidden focusable>Example</VisuallyHidden>)).toMatchSnapshot('focusable');
  });

  it('with important={false} matches snapshot', () => {
    expect(mount(<VisuallyHidden important={false}>Example</VisuallyHidden>)).toMatchSnapshot('not important');
  });
});
