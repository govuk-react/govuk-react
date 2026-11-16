// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss

import * as React from 'react';
import Cell from '../Cell';

const CellHeader: React.FC<React.ComponentProps<typeof Cell>> = (props) => <Cell as="th" bold isHeader {...props} />;

export default CellHeader;
