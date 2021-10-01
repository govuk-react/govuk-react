import * as React from 'react';
import { mount } from 'enzyme';

import TableBody from '.';

describe('TableBody', () => {
  it('renders without crashing', () => {
    mount(
      <table>
        <TableBody>
          <tr>
            <td>Example</td>
          </tr>
        </TableBody>
      </table>
    );
  });
});
