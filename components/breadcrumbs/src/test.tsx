import * as React from 'react';
import { mount } from 'enzyme';

import { Breadcrumbs } from '.';

describe('breadcrumbs', () => {
  it('should render an item in ordered list', () => {
    const wrapper = mount(<Breadcrumbs>example</Breadcrumbs>);

    expect(wrapper.find('ol')).toHaveLength(1);
  });

  it('should render multiple items in ordered list', () => {
    const wrapper = mount(
      <Breadcrumbs>
        <Breadcrumbs.Link href="/section">Section 1</Breadcrumbs.Link>
        example
      </Breadcrumbs>
    );

    expect(wrapper.find('ol li')).toHaveLength(2);
  });

  it('should render an ordered list without ghost/duff children', () => {
    const wrapper = mount(
      <Breadcrumbs>
        <Breadcrumbs.Link href="/section">Section 1</Breadcrumbs.Link>
        {[] /* empty node */}
        {null /* null node */}
        example
      </Breadcrumbs>
    );

    expect(wrapper.find('ol li')).toHaveLength(2);
  });

  it('allows attributes to be set', () => {
    const wrapper = mount(
      <Breadcrumbs id="test" className="test">
        Crumb
      </Breadcrumbs>
    );

    expect(wrapper.hasClass('test')).toBe(true);
    expect(wrapper.is('#test')).toBe(true);
  });

  it('matches snapshot', () => {
    const wrapper = mount(
      <Breadcrumbs>
        <Breadcrumbs.Link href="/section">Section 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href="/section2">Section 2</Breadcrumbs.Link>
      </Breadcrumbs>
    );

    expect(wrapper).toMatchSnapshot('breadcrumbs');
  });
});
