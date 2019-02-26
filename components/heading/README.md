Heading
=======

### Import
```js
  import Heading from '@govuk-react/heading';
```
<!-- STORY -->

### Usage


Simple
```jsx
<Heading level={1}>Heading text</Heading>
```

Using shortcuts
```jsx
import { H1, H2, H3, H4, H5, H6 } from "@govuk-react/heading";

<H1>h1</H1>
<H2>h2</H2>
<H3>h3</H3>
<H4>h4</H4>
<H5>h5</H5>
<H6>h6</H6>
```

Differing sizes
```jsx
<Heading level={6} size={80}>
  h6 with font size 80
</Heading>
<Heading level={2} size="SMALL">
  h2 with SMALL size
</Heading>
<H3 size="LARGE">h3 with LARGE size</H3>
```

Props pass through
```jsx
<Heading onClick={() => { console.log('clicked'); }}>Click me</Heading>
```

### References:
- https://design-system.service.gov.uk/styles/typography/#headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | ```1``` | number | Semantic heading level value between 1 and 6
 `size` |  | ```undefined``` | enum(...Object.keys(HEADING_SIZES) \| ...Object.keys(TYPOGRAPHY_SCALE)) | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`<br/>   or a numeric size that fits in the GDS font scale list


