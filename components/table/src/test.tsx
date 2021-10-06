import * as React from 'react';
import { mount } from 'enzyme';

import Table, { TableSimple, TableWithCaption, TableWithHeadAndNumerics, TableWithCustomWidths } from './fixtures';

describe('Table', () => {
  it('renders without crashing', () => {
    mount(<Table />);
  });

  it('renders a simple example matching snapshot', () => {
    expect(mount(<TableSimple />)).toMatchSnapshot('simple table');
  });

  it('renders a table with a caption matching snapshot', () => {
    expect(mount(<TableWithCaption />)).toMatchSnapshot('table with caption');
  });

  it('renders a table with custom widths matching snapshot', () => {
    expect(mount(<TableWithCustomWidths />)).toMatchSnapshot('table with custom widths');
  });

  it('renders a table with head and numerics matching snapshot', () => {
    expect(mount(<TableWithHeadAndNumerics />)).toMatchSnapshot('table with head and numerics');
  });
});
