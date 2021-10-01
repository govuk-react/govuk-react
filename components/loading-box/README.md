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
 `backgroundColor` |  | ```undefined``` | string | Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
 `backgroundColorOpacity` |  | ```undefined``` | number | Opacity of loading spinner backgroud colour when loading is true
 `children` |  | `````` | ReactNode | One or more children nodes that loading box will overlay
 `loading` |  | ```undefined``` | boolean | Whether loading is currently set to true or false
 `spinnerColor` |  | ```undefined``` | string | Color (3 or 6 Hex char) of loading spinner
 `timeIn` |  | ```undefined``` | number | Length of fade-in animation in milliseconds
 `timeOut` |  | ```undefined``` | number | Length of fade-out animation in milliseconds
 `title` |  | ```undefined``` | string | Loading spinner title text


