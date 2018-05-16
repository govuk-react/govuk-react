Button
======

### Import
```js
  import Button from '@govuk-react/button';
```
<!-- STORY -->

Simple Usage
```js
<Button>My button text</Button>
```

With Icon
```js
import { ButtonArrow } from '@govuk-react/icons';

<Button icon={<ButtonArrow />}>My button text</Button>
```

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | 'Button' | node | Button text
 `disabled` |  | false | bool | Renders a disabled button if set to true
 `icon` |  | undefined | node | Button icon
 `start` |  | false | bool | Renders a large button if set to true


