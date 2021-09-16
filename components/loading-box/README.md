LoadingBox
==========

### Import
```js
  import LoadingBox from '@govuk-react/loading-box';
```
<!-- STORY -->


### Usage

Simple

```jsx
import { LoadingBox } from 'govuk-react'

<LoadingBox loading>
  Lorem ipsum dolor sit amet
</LoadingBox>
```

Loading box complex
```jsx
<LoadingBox
   loading={false}
   backgroundColor={'#fff'}
   timeIn={800}
   timeOut={200}
   backgroundColorOpacity={0.85}
   spinnerColor={'#000'}
>
  Lorem ipsum dolor sit amet
</LoadingBox>
```

### References:

- https://govuk-loader-prototype.herokuapp.com/components/loader

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------



