Main
====

### Import
```js
  import Main from '@govuk-react/main';
```
<!-- STORY -->

### Usage

Provides a container which aligns to the topNav component,
is centered, and provides top padding

Simple usage
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Main>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Main>
```

### TODO
- Implement the 1020px min-width MQ to constants

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | Child nodes for the page being built


