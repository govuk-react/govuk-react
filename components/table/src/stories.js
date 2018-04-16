import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '.';
import Thead from './atoms/Thead';
import Th from './atoms/Th';
import Td from './atoms/Td';

storiesOf('Table', module).add('default', () => (
  <Table caption="Dates and amounts">
    <tbody>
      <tr>
        <Th>First 6 weeks</Th>
        <Td>£109.80 per week</Td>
      </tr>
      <tr>
        <Td>Next 33 weeks</Td>
        <Td>£109.80 per week</Td>
      </tr>
      <tr>
        <Td>Total estimated pay</Td>
        <Td>£4,282.20</Td>
      </tr>
      <tr>
        <Td>Tell the mother&rsquo;s employer</Td>
        <Td>28 days before they want to start maternity pay</Td>
      </tr>
    </tbody>
  </Table>
));

storiesOf('Table', module).add('Numeric tabular data', () => (
  <Table caption="Attention, I am the caption of this ship!">
    <Thead>
      <tr>
        <Th>Month you apply</Th>
        <Th alignRight>Rate for vehicles</Th>
        <Th alignRight>Rate for bicycles</Th>
      </tr>
    </Thead>
    <tbody>
      <tr>
        <Th>January</Th>
        <Td alignRight>£165.00</Td>
        <Td alignRight>£85.00</Td>
      </tr>
      <tr>
        <Th>February</Th>
        <Td alignRight>£165.00</Td>
        <Td alignRight>£85.00</Td>
      </tr>
      <tr>
        <Th>March</Th>
        <Td alignRight>£151.00</Td>
        <Td alignRight>£77.00</Td>
      </tr>
      <tr>
        <Th>April</Th>
        <Td alignRight>£136.00</Td>
        <Td alignRight>£70.00</Td>
      </tr>
    </tbody>
  </Table>
));
