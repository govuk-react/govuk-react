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
import ListItem from '@govuk-react/list-item';

<UnorderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

with Square
```jsx
import ListItem from '@govuk-react/list-item';

<UnorderedList listStyleType="square">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

### References
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `listStyleType` |  | undefined | string | 


