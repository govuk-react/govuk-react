HintText
========

### Import
```js
  import HintText from '@govuk-react/hint-text';
```
<!-- STORY -->

### Usage


Simple

```jsx
import { Label, LabelText, HintText, ErrorText, Input } from 'govuk-react'

<Label>
  <LabelText>Example label</LabelText>
  <HintText>Example hint</HintText>
  <ErrorText>Example error</ErrorText>
  <Input value={value} onClick={onClick} />
</Label>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/hint/_hint.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Text for the hint


