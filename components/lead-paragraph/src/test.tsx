import * as React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import { LeadParagraph } from '.';

describe('LeadParagraph', () => {
  const example = 'example';
  const wrapper = <LeadParagraph>{example}</LeadParagraph>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LeadParagraph>Example</LeadParagraph>, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
