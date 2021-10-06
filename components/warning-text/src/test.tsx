import * as React from 'react';
import { mount } from 'enzyme';
import { WarningText } from '.';

describe('WarningText', () => {
  it('renders without crashing', () => {
    mount(<WarningText>Message</WarningText>);
  });
  it('renders an SVG', () => {
    expect(mount(<WarningText>Message</WarningText>).find('svg')).toHaveLength(1);
  });
  it('renders expected strong text', () => {
    expect(
      mount(<WarningText>Message</WarningText>)
        .find('strong')
        .text()
    ).toBe('Message');
  });
  it('to match snapshot', () => {
    expect(
      mount(
        <WarningText>
          A very long warning message. This includes a lot of text to give a good representation of a more average
          length warning. That way you can see more than one line wrapping.
        </WarningText>
      )
    ).toMatchSnapshot();
  });
});
