Caption
=======

### Import
```js
  import Caption from '@govuk-react/caption';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { Caption } from 'govuk-react'

<Caption>Caption heading text</Caption>
```

With another header

```jsx
import { H1 } from 'govuk-react'

<Caption size="XL">Supporting header text</Caption>
<H1>Main header text</H1>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss
- https://design-system.service.gov.uk/styles/typography/#headings

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | string | Text to be rendered as a caption
 `size` |  | ```'XL'``` | enum(...Object.keys(CAPTION_SIZES) \| ...Object.keys(TYPOGRAPHY_SCALE).map((key) => Number(key))) | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `XL`, `L`, `M`<br/>   or a numeric size that fits in the GDS font scale list


