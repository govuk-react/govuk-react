import * as React from 'react';
import { mount } from 'enzyme';

import Caption from '.';

describe('Caption', () => {
  it('renders without crashing', () => {
    mount(
      <table>
        <Caption>Example</Caption>
      </table>
    );
  });
});
