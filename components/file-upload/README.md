FileUpload
==========

### Import
```js
  import FileUpload from '@govuk-react/file-upload';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { FileUpload } from 'govuk-react'

<FileUpload name="group0">Upload a document</FileUpload>
```

Input with hint text

```jsx
<FileUpload
  name="group1"
  acceptedFormats=".jpg, .png"
  hint={['This can be in either JPG or PNG format']}
>
  Upload a photo
</FileUpload>
```

Input with hint text & error

```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<FileUpload
  name="group1"
  acceptedFormats=".jpg, .png"
  hint={['This can be in either JPG or PNG format']}
  meta={meta}
>
  Upload a photo
</FileUpload>
```

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/file-upload

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `acceptedFormats` |  | ```undefined``` |  | 
 `children` | true | `````` |  | 
 `hint` |  | ```undefined``` |  | Optional hint text
 `meta` |  | ```{}``` |  | Final form meta object, pending adjustment/removal
 `name` |  | ```undefined``` |  | 
 `onChange` |  | ```undefined``` |  | 


