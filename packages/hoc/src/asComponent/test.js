import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import BackLink from '@govuk-react/back-link';

import asComponent from './';

const RCBackLink = asComponent(BackLink);

const wrapper = <RCBackLink>Example</RCBackLink>;

describe(asComponent, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
  });

  it('returns a component', () => {
    expect(shallow(wrapper).html().toBeTruthy);
  });

  it('matches wrapper snapshot', () => {
    expect(shallow(wrapper)).toMatchSnapshot('wrapper mount');
  });
});
