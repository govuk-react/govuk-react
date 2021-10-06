import * as React from 'react';
import { mount } from 'enzyme';

import Cell from '.';

describe('Cell', () => {
  it('renders without crashing', () => {
    mount(
      <table>
        <tbody>
          <tr>
            <Cell alignRight>Example</Cell>
          </tr>
        </tbody>
      </table>
    );
    mount(
      <table>
        <tbody>
          <tr>
            <Cell bold>Example</Cell>
          </tr>
        </tbody>
      </table>
    );
    mount(
      <table>
        <tbody>
          <tr>
            <Cell numeric>Example</Cell>
          </tr>
        </tbody>
      </table>
    );

    mount(
      <table>
        <tbody>
          <tr>
            <Cell>Example</Cell>
          </tr>
        </tbody>
      </table>
    );
  });
});
