UnorderedList
=============

### Import
```js
  import UnorderedList from '@govuk-react/unordered-list';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { UnorderedList, ListItem} from 'govuk-react';

<UnorderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

With Roman

```jsx
import { UnorderedList, ListItem} from 'govuk-react';

<UnorderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

### References
- https://design-system.service.gov.uk/styles/typography/#lists
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more ListItem components
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend


