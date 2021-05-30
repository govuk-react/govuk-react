Label
=====

### Import
```js
  import Label from '@govuk-react/label';
```
<!-- STORY -->

Label element to wraps label-text and a form input

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

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the label
 `error` |  | ```false``` | bool | Apply error state styling to the component


