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
  <a href="/section">Section</a>
  <a href="/section/sub-section">Sub-section</a>
  Current page
</Breadcrumb>
```

Using `asAnchor` HOC with, or without React Router
```jsx
import { Link } from 'react-router-dom';
import { asAnchor } from '@govuk-react/hoc';

const AnchorLink = asAnchor(Link);
const AnchorTag = asAnchor('a');

<Breadcrumb>
  <AnchorLink to="/section">Section</AnchorLink>
  <AnchorTag href="/section">Sub-section</AnchorTag>
</Breadcrumb>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Consider nested anchors, create an Atom for Breadcrumb links?

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | Breadcrumb contents


