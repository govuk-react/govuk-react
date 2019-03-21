import React from 'react';
import { mount } from 'enzyme';

import Breadcrumb from '.';

describe('breadcrumb', () => {
  it('should render an item in ordered list', () => {
    const wrapper = mount(<Breadcrumb>example</Breadcrumb>);

    expect(wrapper.find('ol')).toHaveLength(1);
  });

  it('should render multiple items in ordered list', () => {
    const wrapper = mount(
      <Breadcrumb>
        <Breadcrumb.Link href="/section">Section 1</Breadcrumb.Link>
        example
      </Breadcrumb>
    );

    expect(wrapper.find('ol li')).toHaveLength(2);
  });

  it('should render an ordered list without ghost/duff children', () => {
    const wrapper = mount(
      <Breadcrumb>
        <Breadcrumb.Link href="/section">Section 1</Breadcrumb.Link>
        {[] /* empty node */}
        {null /* null node */}
        example
      </Breadcrumb>
    );

    expect(wrapper.find('ol li')).toHaveLength(2);
  });

  it('allows attributes to be set', () => {
    const wrapper = mount(
      <Breadcrumb id="test" className="test">
        Crumb
      </Breadcrumb>
    );

    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.is('#test')).toBe(true);
  });

  it('matches snapshot', () => {
    const wrapper = mount(
      <Breadcrumb>
        <Breadcrumb.Link href="/section">Section 1</Breadcrumb.Link>
        <Breadcrumb.Link href="/section2">Section 2</Breadcrumb.Link>
      </Breadcrumb>
    );

    expect(wrapper).toMatchSnapshot('breadcrumb');
  });
});
