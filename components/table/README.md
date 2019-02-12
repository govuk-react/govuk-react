Table
=====

### Import
```js
  import Table from '@govuk-react/table';
```
<!-- STORY -->

### Usage

The Table component provides a construction kit of elements to create a table

Component default
```jsx
<Table caption="Dates and amounts">
 <Table.Row>
   <Table.CellHeader>First 6 weeks</Table.CellHeader>
   <Table.Cell>£109.80 per week</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Next 33 weeks</Table.CellHeader>
   <Table.Cell>£109.80 per week</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Total estimated pay</Table.CellHeader>
   <Table.Cell>£4,282.20</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Tell the mother&rsquo;s employer</Table.CellHeader>
   <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
 </Table.Row>
</Table>
```

Numeric tabular data
```jsx
const example2Head = (
  <Table.Row>
    <Table.CellHeader>Month you apply</Table.CellHeader>
    <Table.CellHeader numeric>Rate for vehicles</Table.CellHeader>
    <Table.CellHeader numeric>Rate for bicycles</Table.CellHeader>
  </Table.Row>
);

<Table
 caption="Attention, I am the caption of this ship!"
 head={example2Head}
>
  <Table.Row>
    <Table.CellHeader>January</Table.CellHeader>
    <Table.Cell numeric>£165.00</Table.Cell>
    <Table.Cell numeric>£85.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>February</Table.CellHeader>
    <Table.Cell numeric>£165.00</Table.Cell>
    <Table.Cell numeric>£85.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>March</Table.CellHeader>
    <Table.Cell numeric>£151.00</Table.Cell>
    <Table.Cell numeric>£77.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>April</Table.CellHeader>
    <Table.Cell numeric>£136.00</Table.Cell>
    <Table.Cell numeric>£70.00</Table.Cell>
  </Table.Row>
</Table>
```

NB The govuk-frontend table component describes a way of setting custom column widths
via width override classes. Currently govuk-react does not provide a direct equivalent of this
functionality out of the box, however if this behaviour is desired then custom widths
can be set by re-styling a component.

For example;
```jsx
import styled from 'styled-components';

const CustomHeader = styled(Table.CellHeader)({
  width: '50%',
});

<Table
  caption="Custom header"
  head={
    <Table.Row>
      <CustomHeader>Wide header</CustomHeader>
      <Table.CellHeader>Regular</Table.CellHeader>
      <Table.CellHeader>Normal</Table.CellHeader>
    </Table.Row>
  }
>
  <Table.Row>
    <Table.Cell>Custom header provides a wide column here</Table.Cell>
    <Table.Cell>Some value</Table.Cell>
    <Table.Cell>Another</Table.Cell>
  </Table.Row>
</Table>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/table/_table.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `body` |  | ```undefined``` | node | Table body rows and cells (for backward compatibility)
 `caption` |  | ```undefined``` | string | Table caption title
 `children` |  | ```undefined``` | node | Table body rows and cells (recommended way)
 `head` |  | ```undefined``` | node | Table header rows and cells


