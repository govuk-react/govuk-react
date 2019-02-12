Breadcrumb
==========

### Import
```js
  import Breadcrumb from '@govuk-react/breadcrumb';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Breadcrumb>
  <Breadcrumb.Link href="/section">Section</Breadcrumb.Link>
  <Breadcrumb.Link href="/section/sub-section">Sub-section</Breadcrumb.Link>
  Current page
</Breadcrumb>
```

Providing links with, or without React Router
```jsx
import { Link } from 'react-router-dom';

<Breadcrumb>
  <Breadcrumb.Link as={Link} to="/section">Section</Breadcrumb.Link>
  <Breadcrumb.Link href="/section">Sub-section</Breadcrumb.Link>
</Breadcrumb>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Breadcrumb contents


