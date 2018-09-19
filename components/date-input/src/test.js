import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import DateInput from './';

describe('DateInput', () => {
  const example = 'example';
  const wrapper = <DateInput errorText={example}>{example}</DateInput>;
  let props;

  beforeEach(() => {
    props = {
      children: example,
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DateInput errorText={example} hintText={example}>
        {example}
      </DateInput>,
      div,
    );
  });

  it('should render an input type="text"', () => {
    const output = shallow(wrapper);
    expect(output.find('input[type="text"]')).toBeTruthy();
  });

  it('should render one input with name attributes if only a day input name is passed', () => {
    const output = mount(<DateInput inputNames={{ day: 'dayInputName' }} errorText={example}>{example}</DateInput>);
    expect(output.find('input[name]')).toHaveLength(1);
  });

  it('should render no defaultValue attributes if defaultValues are not passed', () => {
    const output = mount(wrapper);
    expect(output.find('input[defaultValue]')).toHaveLength(0);
  });

  it('should render two defaultValue attributes if two defaultValues are passed', () => {
    const output = mount(<DateInput defaultValues={{ day: '1', month: '2' }} errorText={example}>{example}</DateInput>);
    expect(output.find('input[defaultValue]')).toHaveLength(2);
  });

  it('should render a label', () => {
    const output = shallow(wrapper);
    expect(output.find('label')).toBeTruthy();
  });

  it('matches wrappersnapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('passes `props` to the rendered label', () => {
    expect(mount(<DateInput errorText={example}>{example}</DateInput>).find('input')).toHaveLength(3);
    expect(mount(<DateInput hintText={example}>{example}</DateInput>).find('div')).toHaveLength(2);
  });

  it('passes `props.children` to the rendered `wrapper` as `children`', () => {
    expect(wrapper.props.children).toBe(props.children);
  });


  // TODO: works controlled and uncontrolled
  // TODO: onBlur, onChange work as expected when tabbing between fields,
  //       both controlled and uncontrolled
  // TODO: defaultValues work controlled and uncontrolled
});
