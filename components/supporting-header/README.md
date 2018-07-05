SupportingHeader
================

### Import
```js
  import SupportingHeader from '@govuk-react/supporting-header';
```
<!-- STORY -->

### Usage

Simple
```jsx
<SupportingHeader>Heading text</SupportingHeader>
```

With another header
```jsx
import { H1 } from '@govuk-react/header';

<SupportingHeader>Supporting header text</SupportingHeader>
<H1>Main header text</H1>
```

### References
- https://govuk-elements.herokuapp.com/typography/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | string | Text to be rendered as a supporting header


