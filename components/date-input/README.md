DateInput
=========

### Import
```js
  import DateInput from '@govuk-react/date-input';
```
<!-- STORY -->

### Usage

Simple
```jsx
<DateInput>What is your date of birth?</DateInput>
```

Date with hint text
```jsx
<DateInput hintText="For example, 31 03 1980">
   What is your date of birth?
 </DateInput>
```

Date with hint text & error
```jsx
<DateInput
   hintText="For example, 31 03 1980"
   errorText="Error message goes here"
 >
   What is your date of birth?
 </DateInput>
```
### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-input

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `errorText` |  | undefined | string | 
 `hintText` |  | undefined | string | 


