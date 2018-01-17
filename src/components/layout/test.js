import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './';

import { shallow, mount, render } from 'enzyme';

describe('Layout', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Layout>Example</Layout>, div);
  });

});

