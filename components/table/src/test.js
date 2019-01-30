import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import Table from '.';
import Row from './atoms/Row';
import Cell from './atoms/Cell';

const example = <Table body={<Row><Cell>Example</Cell></Row>} />;
const exampleWithHead = (
  <Table
    body={<Row><Cell>Example</Cell></Row>}
    head={<Row><Cell>Example</Cell></Row>}
  />
);

describe('Table', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(example, div);
    ReactDOM.render(exampleWithHead, div);
  });

  it('matches snapshot for example', () => {
    expect(mount(example)).toMatchSnapshot('example mount');
  });

  it('matches snapshot for exampleWithHead', () => {
    expect(mount(exampleWithHead)).toMatchSnapshot('exampleWithHead mount');
  });
});
