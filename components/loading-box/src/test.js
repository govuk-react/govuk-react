import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import LoadingBox from './';

describe(LoadingBox, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoadingBox>example</LoadingBox>, div);
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

  it('matches wrapper not loading', () => {
    expect(mount(<LoadingBox>example</LoadingBox>)).toMatchSnapshot('wrapper not loading');
  });

  it('matches wrapper not loading1', () => {
    expect(mount(<LoadingBox backgroundColor="#000">example</LoadingBox>)).toMatchSnapshot('wrapper not loading1');
  });
  it('matches wrapper not loading2', () => {
    expect(mount(<LoadingBox backgroundColorOpacity={0.1}>example</LoadingBox>)).toMatchSnapshot('wrapper not loading2');
  });
  it('matches wrapper not loading3', () => {
    expect(mount(<LoadingBox timeIn={333} timeOut={222} spinnerColor="#fff">example</LoadingBox>)).toMatchSnapshot('wrapper not loading3');
  });

});
