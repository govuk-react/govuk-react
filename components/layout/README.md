Layout
======

### Import
```js
  import Layout from '@govuk-react/layout';
```
<!-- STORY -->

### Usage

This component provides default padding.
You can use this component to wrap Grid components however it is not required.

Simple usage
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Layout>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | GridRow and GridCol children nodes


