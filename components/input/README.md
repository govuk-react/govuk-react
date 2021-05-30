Input
=====

### Import
```js
  import Input from '@govuk-react/input';
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

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/

### TODO:
- Remove `errorColor` and provide examples on how to extend the component

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `error` |  | ```false``` | bool | 
 `errorColor` |  | ```undefined``` | string | 
 `type` |  | ```'text'``` | string | HTML `<Input />` type


