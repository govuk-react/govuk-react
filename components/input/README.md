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
<Input type="text" />
```

Custom error colour
```jsx
import { ORANGE } from 'govuk-colours';

<Input type="text" errorColor={ORANGE} error="example" />
```
### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `errorColor` |  | undefined | string | 
 `onChange` |  | undefined | func | 
 `type` |  | 'text' | string | 
 `value` |  | undefined | string | 


