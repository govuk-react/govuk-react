ListItem
========

### Import
```js
  import ListItem from '@govuk-react/list-item';
```
<!-- STORY -->

### Usage


Simple

```jsx
import { ListItem } from 'govuk-react'

<ListItem>List item example</ListItem>
```

With a link

```jsx
import { ListItem, Link } from 'govuk-react';

<ListItem>
  <Link href="https://www.google.com/">List item example</Link>
</ListItem>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | List item content


