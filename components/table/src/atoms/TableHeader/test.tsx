import * as React from 'react';
import { mount } from 'enzyme';

import TableHeader from '.';

const example = (
  <table>
    <TableHeader>
      <tr>
        <th>hi</th>
      </tr>
    </TableHeader>
  </table>
);

describe('TableHeader', () => {
  it('renders without crashing', () => {
    mount(example);
  });
});
