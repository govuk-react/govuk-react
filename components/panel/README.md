Panel
=====

### Import
```js
  import Panel from '@govuk-react/panel';
```
<!-- STORY -->


### Usage

Simple

```jsx
import { Panel } from 'govuk-react'

<Panel title="Application complete" />
```

Panel with header and HTML body

```jsx
<Panel title="Application complete">
  Your reference number<br />
  <strong>HDJ2123F</strong>
</Panel>
```

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/panel

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | ReactNode | Panel body text
 `title` | true | `````` | string | Panel title text


