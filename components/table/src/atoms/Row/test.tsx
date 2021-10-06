import * as React from 'react';
import { mount } from 'enzyme';

import Row from '.';

describe('Row', () => {
  it('renders without crashing', () => {
    mount(
      <table>
        <tbody>
          <Row>
            <td>Example</td>
          </Row>
        </tbody>
      </table>
    );
  });
});
