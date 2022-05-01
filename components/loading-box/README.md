LoadingBox
==========

### Import
```js
  import LoadingBox from '@govuk-react/loading-box';
```
<!-- STORY -->

Use a LoadingBox to wrap components that can asyncronously load content.

When `loading` is set to `true`, a spinner will overlay the contents to give visual feedback to the user.

- https://govuk-react.github.io/govuk-react/?path=/docs/loading-box

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `backgroundColor` |  | ```undefined``` | string | Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
 `backgroundColorOpacity` |  | ```undefined``` | number | Opacity of loading spinner backgroud colour when loading is true
 `children` |  |  | ReactNode | One or more children nodes that loading box will overlay
 `loading` |  | ```undefined``` | boolean | Whether loading is currently set to true or false
 `spinnerColor` |  | ```undefined``` | string | Color (3 or 6 Hex char) of loading spinner
 `timeIn` |  | ```undefined``` | number | Length of fade-in animation in milliseconds
 `timeOut` |  | ```undefined``` | number | Length of fade-out animation in milliseconds
 `title` |  | ```undefined``` | string | Loading spinner title text


