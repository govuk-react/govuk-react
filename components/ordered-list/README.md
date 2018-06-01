OrderedList
===========

### Import
```js
  import OrderedList from '@govuk-react/ordered-list';
```
<!-- STORY -->

### Usage


Simple
```js
import ListItem from '@govuk-react/list-item';

<OrderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

with Alpha
```js
import ListItem from '@govuk-react/list-item';

<OrderedList listStyleType="lower-alpha">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

with Roman
```js
import ListItem from '@govuk-react/list-item';

<OrderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

with no decoration
```js
import ListItem from '@govuk-react/list-item';

<OrderedList listStyleType="none">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```
### References
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `listStyleType` |  | undefined | string | 


