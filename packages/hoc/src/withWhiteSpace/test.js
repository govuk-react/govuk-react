import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import withWhiteSpace from '.';

const WithoutConfig = withWhiteSpace()(styled('div')({}));
const WithConfig = withWhiteSpace({ marginBottom: 0 })(styled('div')({}));

describe('withWhiteSpace', () => {
  it('renders without config without crashing', () => {
    mount(<WithoutConfig>Example</WithoutConfig>);
  });

  it('renders with config without crashing', () => {
    mount(<WithConfig>Example</WithConfig>);
  });

  it('renders with simple mb prop without crashing', () => {
    mount(<WithConfig mb={5}>Example</WithConfig>);
  });

  it('renders with a margin prop without crashing', () => {
    mount(<WithConfig margin={{ size: 5 }}>Example</WithConfig>);
    mount(<WithConfig margin={5}>Example</WithConfig>);
    mount(
      <WithConfig margin={[5, { size: 2, direction: 'top' }]}>
        Example
      </WithConfig>
    );
  });

  it('renders with a padding prop without crashing', () => {
    mount(<WithConfig padding={{ size: 5 }}>Example</WithConfig>);
    mount(<WithConfig padding={5}>Example</WithConfig>);
    mount(
      <WithConfig padding={[5, { size: 2, direction: 'top' }]}>
        Example
      </WithConfig>
    );
  });

  it('matches wrapper snapshot', () => {
    const wrapper = mount(<WithConfig mb={5}>Example</WithConfig>);
    expect(wrapper).toMatchSnapshot();
  });
});
