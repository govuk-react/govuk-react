Checkbox
========

### Import
```js
  import Checkbox from '@govuk-react/checkbox';
```
<!-- STORY -->


### Usage

Simple

```jsx
import { Checkbox } from 'govuk-react'

<Checkbox>Text displayed next to checkbox</Checkbox>
```

With disabled state

```jsx
<Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
```

Checkbox preselected

```jsx
<Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
```

Checkbox preselected & disabled

```jsx
<Checkbox disabled="disabled" defaultChecked>Farm or agricultural waste</Checkbox>
```

Checkbox with hint text

```jsx
<Checkbox hint="including English, Scottish, Welsh and Northern Irish">British</Checkbox>
```

### References:

- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/checkboxes/_checkboxes.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------



