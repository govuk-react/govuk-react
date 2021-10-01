import * as React from 'react';
import { mount } from 'enzyme';

import CellHeader from '.';

const example = (
  <table>
    <tbody>
      <tr>
        <CellHeader>example</CellHeader>
      </tr>
    </tbody>
  </table>
);
const exampleAlignRight = (
  <table>
    <tbody>
      <tr>
        <CellHeader alignRight>example</CellHeader>
      </tr>
    </tbody>
  </table>
);
const exampleBold = (
  <table>
    <tbody>
      <tr>
        <CellHeader bold>example</CellHeader>
      </tr>
    </tbody>
  </table>
);

describe('CellHeader', () => {
  it('renders without crashing', () => {
    mount(example);
    mount(exampleAlignRight);
    mount(exampleBold);
  });
});
