import * as React from 'react';
import { mount } from 'enzyme';

import { Panel } from '.';

describe('Panel', () => {
  it('should render a panel without a body body', () => {
    const wrapper = mount(<Panel title="Example" />);

    expect(wrapper.text().includes('Example')).toBe(true);
  });

  it('should render a panel body that is a string', () => {
    const wrapper = mount(<Panel title="Example">body</Panel>);

    expect(wrapper.text().includes('body')).toBe(true);
  });

  it('matches wrapper snapshot', () => {
    const wrapper = mount(<Panel title="Example">body</Panel>);

    expect(wrapper).toMatchSnapshot('wrapper mount');
  });
});
