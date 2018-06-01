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
<div>
  <Checkbox>Waste from animal carcasses</Checkbox>
  <Checkbox>Waste from mines or quarries</Checkbox>
  <Checkbox>Farm or agricultural waste</Checkbox>
</div>
```

Checkbox disabled
```jsx
<div>
   <Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
</div>
```

Checkbox preselected
```jsx
<div>
  <Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
</div>
```

Checkbox preselected & disabled
```jsx
<div>
   <Checkbox disabled="disabled" defaultChecked>Farm or agricultural waste</Checkbox>
</div>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkboxes/_checkboxes.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `inline` |  | undefined | bool | 


