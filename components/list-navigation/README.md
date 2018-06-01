ListNavigation
==============

### Import
```js
  import ListNavigation from '@govuk-react/list-navigation';
```
<!-- STORY -->

### Usage

Simple
```jsx
<ListNavigation>
  <a href="/section-a">Section A</a>
  <a href="/section-b">Section B</a>
</ListNavigation>
```

Current recommended approach using the asAnchor HoC for GDS styled links
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');

<ListNavigation listStyleType="square">
  <AnchorTag href="https://example.com/link-a">Link A</AnchorTag>
  <AnchorTag href="https://example.com/link-b">Link B</AnchorTag>
</ListNavigation>
```

Using React Router and asAnchor HOC for GDS styled links
```jsx
import { BrowserRouter, Link } from 'react-router-dom';
import { asAnchor } from '@govuk-react/hoc';

const AnchorLink = asAnchor(Link);

<ListNavigation listStyleType="circle">
  <BrowserRouter>
    <AnchorLink to="/link-a">Link A</AnchorLink>
    <AnchorLink to="/link-b">Link B</AnchorLink>
  </BrowserRouter>
</ListNavigation>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Consider nested anchors, should developers have to use the HOC to preserve link styling?

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | List navigation content
 `className` |  | undefined | string | 
 `listStyleType` |  | undefined | string | CSS value for `list-style-type`


