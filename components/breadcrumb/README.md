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
import Link from '@govuk-react/link';

<Breadcrumb>
  <Link href="/section">Section</Link>
  <Link href="/section/sub-section">Sub-section</Link>
  Current page
</Breadcrumb>
```

Using `Link` with, or without React Router
```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@govuk-react/link';

<Breadcrumb>
  <Link as={RouterLink} to="/section">Section</Link>
  <Link href="/section">Sub-section</Link>
</Breadcrumb>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Breadcrumb contents


