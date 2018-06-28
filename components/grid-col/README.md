GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->

Should always be wrapped by `GridRow`. Will always render a column at 100% width if
the browser width is below the `LARGESCREEN` breakpoint.

### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol columnOneHalf>
      ...
    </GridCol>
    <GridCol columnOneQuarter>
      ...
    </GridCol>
    <GridCol columnOneQuarter>
      ...
    </GridCol>
  <GridRow>
    <GridCol columnOneThird>
      ...
    </GridCol>
    <GridCol columnTwoThirds>
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
 `children` |  | ```undefined``` | node | GridCol content
 `columnOneHalf` |  | ```false``` | bool | Dimension setting for the column
 `columnOneQuarter` |  | ```false``` | bool | Dimension setting for the column
 `columnOneThird` |  | ```false``` | bool | Dimension setting for the column
 `columnTwoThirds` |  | ```false``` | bool | Dimension setting for the column


