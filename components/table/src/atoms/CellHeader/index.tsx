// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss

import React from 'react';
import Cell from '../Cell';

const CellHeader = (props) => <Cell as="th" bold isHeader {...props} />;

export default CellHeader;
