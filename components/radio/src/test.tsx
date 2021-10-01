import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { Radio } from '.';

describe('Radio', () => {
  let props;
  const example = 'example';

  const wrapper = <Radio name={example}>{example}</Radio>;

  const wrapperInline = (
    <Radio inline name={example}>
      {example}
    </Radio>
  );

  beforeEach(() => {
    props = {
      name: example,
      children: example,
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('passes `props.children` to the rendered `wrapper` as `children`', () => {
    expect(wrapper.props.name).toBe(props.name);
    expect(wrapper.props.children).toBe(props.children);
  });

  it('matches snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('standard mount');
  });

  it('disabled', () => {
    expect(mount(<Radio disabled>Example</Radio>)).toMatchSnapshot('disabled');
  });

  it('matches snapshot for inline', () => {
    expect(mount(wrapperInline)).toMatchSnapshot('inline mount');
  });

  it('can render with hint text', () => {
    expect(mount(<Radio hint="Hint text">Example with hint text</Radio>)).toMatchSnapshot('hint text');
  });
});
