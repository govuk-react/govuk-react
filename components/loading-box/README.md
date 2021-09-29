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
 `backgroundColor` |  | ```WHITE``` |  | Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
 `backgroundColorOpacity` |  | ```0.85``` |  | Opacity of loading spinner backgroud colour when loading is true
 `children` | true | `````` |  | One or more children nodes that loading box will overlay
 `loading` |  | ```false``` |  | Whether loading is currently set to true or false
 `spinnerColor` |  | ```BLACK``` |  | Color (3 or 6 Hex char) of loading spinner
 `timeIn` |  | ```800``` |  | Length of fade-in animation in milliseconds
 `timeOut` |  | ```200``` |  | Length of fade-out animation in milliseconds
 `title` |  | ```undefined``` |  | Loading spinner title text


