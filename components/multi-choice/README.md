MultiChoice
===========

### Import
```js
  import MultiChoice from '@govuk-react/multi-choice';
```
<!-- STORY -->


### Usage

Simple

```jsx
import { MultiChoice, Radio } from 'govuk-react';

<MultiChoice label="example">
   <Radio name="group1" inline>
     Yes
   </Radio>
   <Radio name="group1" inline>
     No
   </Radio>
</MultiChoice>
```

### References:

- https://govuk-elements.herokuapp.com/errors/
- https://govuk-elements.herokuapp.com/errors/example-form-validation-single-question-radio

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `hint` |  | ```undefined``` | string | 
 `label` | true | `````` | ReactNode | 
 `margin` |  | `````` | Margin | Margin[] | 
 `mb` |  | `````` | string | number | 
 `meta` |  | ```{}``` | { error?: string | string[]; touched?: boolean; } | 
 `padding` |  | `````` | Padding | Padding[] | 


