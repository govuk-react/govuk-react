import * as React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import { DateField } from '.';

// TODO: all snapshot tests in this file should be moved to fixtures and included in stories

describe('DateField', () => {
  const example = 'example';
  const wrapper = <DateField errorText={example}>{example}</DateField>;
  let props;

  beforeEach(() => {
    props = {
      children: example,
    };
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DateField errorText={example} hintText={example}>
        {example}
      </DateField>,
      div
    );
  });

  it('should render an input type="text"', () => {
    const output = shallow(wrapper);
    expect(output.find('input[type="text"]')).toBeTruthy();
  });

  it('should render one input with name attributes if only a day input name is passed', () => {
    const output = mount(
      <DateField inputNames={{ day: 'dayInputName' }} errorText={example}>
        {example}
      </DateField>
    );
    expect(output.find('input[name]')).toHaveLength(1);
  });

  it('should render no defaultValue attributes if defaultValues are not passed', () => {
    const output = mount(wrapper);
    expect(output.find('input[defaultValue]')).toHaveLength(0);
  });

  it('should render two defaultValue attributes if two defaultValues are passed', () => {
    const output = mount(
      <DateField defaultValues={{ day: '1', month: '2' }} errorText={example}>
        {example}
      </DateField>
    );
    expect(output.find('input[defaultValue]')).toHaveLength(2);
  });

  it('should render a label', () => {
    const output = shallow(wrapper);
    expect(output.find('label')).toBeTruthy();
  });

  it('matches wrappersnapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });

  it('should support setting value', () => {
    const output = mount(<DateField input={{ value: { day: '1', month: '2', year: '3' } }}>Date</DateField>);
    expect(output).toMatchSnapshot('value 1 2 3');
    expect(output.find('input').first().props().value).toBe('1');
  });

  it('should support null value', () => {
    const output = mount(<DateField input={{ value: null }}>Date</DateField>);
    expect(output).toMatchSnapshot('null value');
  });

  it('passes `props` to the rendered label', () => {
    expect(mount(<DateField errorText={example}>{example}</DateField>).find('input')).toHaveLength(3);
    expect(mount(<DateField hintText={example}>{example}</DateField>).find('div')).toHaveLength(2);
  });

  it('passes `props.children` to the rendered `wrapper` as `children`', () => {
    expect(wrapper.props.children).toBe(props.children);
  });

  it('calls onBlur', () => {
    const spy = jest.fn();

    mount(<DateField onBlur={spy}>Date</DateField>)
      .find('input')
      .first()
      .simulate('blur');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onFocus', () => {
    const spy = jest.fn();

    mount(<DateField onFocus={spy}>Date</DateField>)
      .find('input')
      .first()
      .simulate('focus');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not call onFocus when moving between fields ', () => {
    const spy = jest.fn();

    const inst = mount(
      <DateField
        input={{
          onFocus: (...rest) => {
            spy(...rest);
          },
        }}
      >
        Date
      </DateField>
    );
    const input1 = inst.find('input').first();
    const input2 = inst.find('input').at(1);

    // Focus first input
    input1.simulate('focus', {});
    // Then simulate tab to second input, first by blurring first input
    input1.simulate('blur', {
      relatedTarget: input2.instance(), // relatedTarget for blur is what will next receive focus
    });
    // Then focus the new input
    input2.simulate('focus', {
      relatedTarget: input1.instance(), // relatedTarget for focus is what has lost focus
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onChange', () => {
    const spy = jest.fn();

    mount(<DateField onChange={spy}>Date</DateField>)
      .find('input')
      .first()
      .simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  // TODO: works controlled and uncontrolled
  // TODO: onBlur, onChange, onFocus work as expected when tabbing between fields,
  //       both controlled and uncontrolled
  // TODO: defaultValues work controlled and uncontrolled
});
