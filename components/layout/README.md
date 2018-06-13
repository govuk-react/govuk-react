Layout
======

### Import
```js
  import Layout from '@govuk-react/layout';
```
<!-- STORY -->

### Usage

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
   <GridRow>
     <GridCol hideContent columFull>
       <p>content</p>
     </GridCol>
   </GridRow>
 </Layout>
```

Column Halves
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
  <GridRow>
    <GridCol hideContent columnOneHalf>
      <p>content</p>
    </GridCol>
    <GridCol hideContent columnOneHalf>
      <p>content</p>
    </GridCol>
  </GridRow>
</Layout>
```

Column Thirds
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
  <GridRow>
     <GridCol hideContent columnOneThird>
       <p>content</p>
     </GridCol>
     <GridCol hideContent columnOneThird>
       <p>content</p>
     </GridCol>
     <GridCol hideContent columnOneThird>
       <p>content</p>
     </GridCol>
   </GridRow>
</Layout>
```

Column Quarters
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
  <GridRow>
     <GridCol hideContent columnOneQuarter>
       <p>content</p>
     </GridCol>
     <GridCol hideContent columnOneQuarter>
       <p>content</p>
     </GridCol>
     <GridCol hideContent columnOneQuarter>
       <p>content</p>
     </GridCol>
     <GridCol hideContent columnOneQuarter>
       <p>content</p>
     </GridCol>
   </GridRow>
</Layout>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss


