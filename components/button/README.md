Button
======

### Import
```js
  import Button from '@govuk-react/button';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Button>My button text</Button>
```

With Icon
```jsx
import { ButtonArrow } from '@govuk-react/icons';

<Button icon={<ButtonArrow />}>My button text</Button>
```

### References:
- https://govuk-elements.herokuapp.com/buttons/
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

### TODO:
- Use constants for some of the values cssinjs values
- Remove cascade styling for nested elements such as `svg`

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```'Button'``` | node | Button text
 `disabled` |  | ```false``` | bool | Renders a disabled button if set to true
 `icon` |  | ```undefined``` | node | Button icon
 `start` |  | ```false``` | bool | Renders a large button if set to true


