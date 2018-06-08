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

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | undefined | string | The text label presented to a user
 `hint` |  | undefined | string | An optional text string to help a user enter form data
 `input` |  | {} | shape[object Object] | An input object based off https://redux-form.com/7.1.2/docs/api/field.md/#input-props
 `meta` |  | {} | shape[object Object] | A meta object based off https://redux-form.com/7.1.2/docs/api/field.md/#meta-props


