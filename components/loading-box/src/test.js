import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import LoadingBox from './';

describe(LoadingBox, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoadingBox>example</LoadingBox>, div);
    ReactDOM.render(<LoadingBox loading labelPosition="right">example</LoadingBox>, div);
    ReactDOM.render(<LoadingBox loading labelPosition="bottom">example</LoadingBox>, div);
  });

  it('should render a SVG when loading', () => {
    expect(mount(<LoadingBox loading>example</LoadingBox>).find('svg')).toHaveLength(1);
  });

  it('shouldnt render a SVG when not loading', () => {
    expect(mount(<LoadingBox loading={false}>example</LoadingBox>).find('svg')).toHaveLength(0);
  });

  it('matches wrapper loading', () => {
    expect(mount(<LoadingBox loading>example</LoadingBox>)).toMatchSnapshot('wrapper loading');
  });

  it('matches wrapper loading', () => {
    expect(mount(<LoadingBox loading labelPosition="right">example</LoadingBox>)).toMatchSnapshot('wrapper loading');
  });
});
