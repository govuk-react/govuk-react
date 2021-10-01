import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Textarea from '.';

describe('Textarea', () => {
  let props;
  const example = 'example';
  const meta = {
    touched: true,
    error: example,
  };
  const wrapper = <Textarea>{example}</Textarea>;
  const wrapperErrorText = <Textarea meta={meta}>{example}</Textarea>;
  const wrapperHint = <Textarea hint={example}>{example}</Textarea>;

  beforeEach(() => {
    props = {
      children: example,
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('passes `props.children` to the rendered `wrapper` as `children`', () => {
    expect(wrapper.props.children).toBe(props.children);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('matches snapshot for error', () => {
    expect(mount(wrapperErrorText)).toMatchSnapshot('wrapperErrorText mount');
  });

  it('matches snapshot for hint', () => {
    expect(mount(wrapperHint)).toMatchSnapshot('wrapperHint mount');
  });
});
