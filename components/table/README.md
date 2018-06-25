Table
=====

### Import
```js
  import Table from '@govuk-react/table';
```
<!-- STORY -->

### Usage

Component default
```jsx
const example1Body = (
 <React.Fragment>
   <Table.Row>
     <Table.CellHeader>First 6 weeks</Table.CellHeader>
     <Table.Cell>£109.80 per week</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Next 33 weeks</Table.Cell>
     <Table.Cell>£109.80 per week</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Total estimated pay</Table.Cell>
     <Table.Cell>£4,282.20</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Tell the mother&rsquo;s employer</Table.Cell>
     <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
   </Table.Row>
 </React.Fragment>
);

<Table caption="Dates and amounts" body={example1Body} />
```

Numeric tabular data
```jsx
const example2Head = (
  <Table.Row>
    <Table.CellHeader>Month you apply</Table.CellHeader>
    <Table.CellHeader alignRight>Rate for vehicles</Table.CellHeader>
    <Table.CellHeader alignRight>Rate for bicycles</Table.CellHeader>
  </Table.Row>
);

const example2Body = (
  <React.Fragment>
    <Table.Row>
      <Table.CellHeader>January</Table.CellHeader>
      <Table.Cell alignRight>£165.00</Table.Cell>
      <Table.Cell alignRight>£85.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>February</Table.CellHeader>
      <Table.Cell alignRight>£165.00</Table.Cell>
      <Table.Cell alignRight>£85.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>March</Table.CellHeader>
      <Table.Cell alignRight>£151.00</Table.Cell>
      <Table.Cell alignRight>£77.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>April</Table.CellHeader>
      <Table.Cell alignRight>£136.00</Table.Cell>
      <Table.Cell alignRight>£70.00</Table.Cell>
    </Table.Row>
  </React.Fragment>
);

<Table
 caption="Attention, I am the caption of this ship!"
 head={example2Head}
 body={example2Body}
/>
```

### References:
- https://govuk-elements.herokuapp.com/alpha-beta-banners/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `body` | true | `````` | node | Table body rows and cells
 `caption` |  | ```undefined``` | string | Table caption title
 `head` |  | ```undefined``` | node | Table header rows and cells


