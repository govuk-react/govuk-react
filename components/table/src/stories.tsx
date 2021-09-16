import React from 'react';

import { Table } from '.';

import {
  TableSimple,
  TableWithCaption,
  TableWithHeadAndNumerics,
  TableWithCustomWidths,
  TableThreeQuartersOneQuarter,
} from './fixtures';

export default {
  title: 'Typography/Table',
  component: Table,
};

export const Default: React.FC = () => <TableSimple />;
export const WithACaption: React.FC = () => <TableWithCaption />;
export const WithAHeadRowAndNumericTabularData: React.FC = () => <TableWithHeadAndNumerics />;
export const WithAThreeQuarterWidthColumnAndOneQuarter: React.FC = () => <TableThreeQuartersOneQuarter />;
export const WithCustomColumnWidths: React.FC = () => <TableWithCustomWidths />;
