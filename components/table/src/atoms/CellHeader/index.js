// https://github.com/alphagov/govuk-frontend/blob/master/src/components/table/_table.scss

import React from 'react';
import Cell from '../Cell';

const CellHeader = props => <Cell as="th" bold isHeader {...props} />;

export default CellHeader;
