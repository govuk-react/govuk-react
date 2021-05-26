import React from 'react';

import Table from '.';

import {
  TableSimple,
  TableWithCaption,
  TableWithHeadAndNumerics,
  TableWithCustomWidths,
  TableThreeQuartersOneQuarter,
} from './fixtures';

export default {
  title: 'Core/Table',
  component: Table,
};

export const Default = () => <TableSimple />;
export const WithACaption = () => <TableWithCaption />;
export const WithAHeadRowAndNumericTabularData = () => <TableWithHeadAndNumerics />;
export const WithAThreeQuarterWidthColumnAndOneQuarter = () => <TableThreeQuartersOneQuarter />;
export const WithCustomColumnWidths = () => <TableWithCustomWidths />;
