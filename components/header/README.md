Header
======

### Import
```js
  import Header from '@govuk-react/header';
```
<!-- STORY -->

### Usage


Simple
```jsx
   <Header level={1}>A 48px Bold heading</Header>
   <Header level={2}>A 36px Bold heading</Header>
   <Header level={3}>A 24px Bold heading</Header>
   <Header level={4}>A 19px Bold heading</Header>
   <Header level={5}>h5</Header>
   <Header level={6}>h6</Header>
```

Shortcuts
```jsx
import { H1, H2, H3, H4, H5, H6 } from "@govuk-react/header";

  <H1>h1</H1>
  <H2>h2</H2>
  <H3>h3</H3>
  <H4>h4</H4>
  <H5>h5</H5>
  <H6>h6</H6>
```

Differing sizes
```jsx
   <Header level={6} size="XXLARGE">
     h6 with XXLARGE style
   </Header>
   <Header level={2} size="XSMALL">
     h2 with XSMALL style
   </Header>
   <H3 size="LARGE">h3 with size large</H3>
```

Props pass through
```jsx
 <div>
   <Header onClick={() => { console.log('clicked'); }}>Click me</Header>
 </div>
```

### References:
- https://govuk-elements.herokuapp.com/typography/#typography-headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | 1 | number | 
 `size` |  | undefined | enumObject.keys(FONT_SIZES) | 


