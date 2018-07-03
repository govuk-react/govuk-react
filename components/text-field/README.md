TextField
=========

### Import
```js
  import TextField from '@govuk-react/text-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<TextField>Label text</TextField>
```

With hint and an example error
```jsx
<TextField hint="hint text" meta={{error: "some error information"}}>Label text</TextField>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss
- https://medium.com/@penx/form-elements-in-presentational-component-packages-a618e9aa7416
- https://redux-form.com/7.1.2/docs/api/field.md/#input-props
- https://redux-form.com/7.1.2/docs/api/field.md/#meta-props

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | string | The text label presented to a user
 `hint` |  | ```undefined``` | string | An optional text string to help a user enter form data
 `input` |  | ```{   name: undefined,   onBlur: undefined,   onChange: undefined,   onFocus: undefined,   value: undefined, }``` | shape[object Object] | An input object based off https://redux-form.com/7.1.2/docs/api/field.md/#input-props
 `meta` |  | ```{   active: undefined,   dirty: undefined,   dirtySinceLastSubmit: undefined,   error: undefined,   initial: undefined,   invalid: undefined,   pristine: undefined,   submitError: undefined,   submitFailed: undefined,   submitSucceeded: undefined,   touched: undefined,   valid: undefined,   visited: undefined, }``` | shape[object Object] | A meta object based off https://redux-form.com/7.1.2/docs/api/field.md/#meta-props


