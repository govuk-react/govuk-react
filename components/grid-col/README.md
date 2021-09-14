GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->

Should always be wrapped by `GridRow`. Will always render a column at full width if
the browser width is below the `TABLET` breakpoint.

NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
floats, however it is otherwise similar to use.

### Usage

Simple

```jsx
import { GridRow , GridCol } from 'govuk-react'

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol setWidth="one-half">
      ...
    </GridCol>
    <GridCol setWidth="one-quarter">
      ...
    </GridCol>
    <GridCol setWidth="one-quarter">
      ...
    </GridCol>
  <GridRow>
    <GridCol setWidth="one-third">
      ...
    </GridCol>
    <GridCol setWidth="two-thirds">
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol setWidth="one-third" setDesktopWidth="one-quarter">
      ...
    </GridCol>
    <GridCol setWidth="two-thirds" setDesktopWidth="auto">
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

### References:

- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` |  | 
 `columnFull` |  | ```false``` |  | 
 `columnOneHalf` |  | ```false``` |  | 
 `columnOneQuarter` |  | ```false``` |  | 
 `columnOneThird` |  | ```false``` |  | 
 `columnThreeQuarters` |  | ```false``` |  | 
 `columnTwoThirds` |  | ```false``` |  | 
 `setDesktopWidth` |  | ```undefined``` |  | 
 `setWidth` |  | ```undefined``` |  | 


