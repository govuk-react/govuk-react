import React, { Fragment } from 'react';
import { mount } from 'enzyme';

import GridCol from '.';

describe('GridCol', () => {
  it('renders without crashing', () => {
    mount(<GridCol>example</GridCol>);
    mount(<GridCol columnOneThird>example</GridCol>);
    mount(<GridCol columnTwoThirds>example</GridCol>);
    mount(<GridCol columnOneQuarter>example</GridCol>);
  });

  it('simple render matches snapshot', () => {
    const wrapper = mount(<GridCol>example</GridCol>);

    expect(wrapper).toMatchSnapshot('GridCol simple example');
  });

  it('renders custom widths matching snapshot', () => {
    const example = (
      <Fragment>
        <GridCol setWidth="one-quarter">example</GridCol>
        <GridCol setWidth="three-quarters">example</GridCol>
        <GridCol setWidth="90%">example</GridCol>
        <GridCol setWidth="one-third" setDesktopWidth="one-quarter">example</GridCol>
        <GridCol setDesktopWidth="one-third">example</GridCol>
      </Fragment>
    );
    const wrapper = mount(example);

    expect(wrapper).toMatchSnapshot('GridCol custom widths example');
  });
});
