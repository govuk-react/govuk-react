import React from 'react';
import styled from 'react-emotion';
import { shallow } from 'enzyme';
import withWhiteSpace from '.';

const WithoutConfig = withWhiteSpace()(styled('div'));
const WithConfig = withWhiteSpace({ marginBottom: 0 })(styled('div'));

describe('withWhiteSpace', () => {
  it('renders without config without crashing', () => {
    shallow(<WithoutConfig>Example</WithoutConfig>);
  });

  it('renders with config without crashing', () => {
    shallow(<WithConfig>Example</WithConfig>);
  });

  it('renders with simple mb prop without crashing', () => {
    shallow(<WithConfig mb={5}>Example</WithConfig>);
  });

  it('renders with a margin prop without crashing', () => {
    shallow(<WithConfig margin={{ size: 5 }}>Example</WithConfig>);
    shallow(<WithConfig margin={5}>Example</WithConfig>);
    shallow(<WithConfig margin={[5, { size: 2, direction: 'top' }]}>Example</WithConfig>);
  });

  it('renders with a padding prop without crashing', () => {
    shallow(<WithConfig padding={{ size: 5 }}>Example</WithConfig>);
    shallow(<WithConfig padding={5}>Example</WithConfig>);
    shallow(<WithConfig padding={[5, { size: 2, direction: 'top' }]}>Example</WithConfig>);
  });

  it('matches wrapper snapshot', () => {
    const wrapper = shallow(<WithConfig mb={5}>Example</WithConfig>);
    expect(wrapper).toMatchSnapshot();
  });
});
