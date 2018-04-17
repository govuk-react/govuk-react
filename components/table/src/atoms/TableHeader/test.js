import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../../';
import TableHeader from './';
import CellHeader from '../CellHeader';
import Row from '../Row';

const example = <Table><TableHeader><Row><CellHeader>hi</CellHeader></Row></TableHeader></Table>;

describe(TableHeader, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(example, div);
  });
});
