import React from 'react';
import ReactDOM from 'react-dom';
import CellHeader from './';

const example = <table><tbody><tr><CellHeader>example</CellHeader></tr></tbody></table>;
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
    const div = document.createElement('div');
    ReactDOM.render(example, div);
    ReactDOM.render(exampleAlignRight, div);
    ReactDOM.render(exampleBold, div);
  });
});
