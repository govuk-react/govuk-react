Panel
=====

### Import
```js
  import Panel from '@govuk-react/panel';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Panel panelTitle="Application complete" />
```

Panel with header and HTML body
```jsx
<Panel
   panelTitle="Application complete"
   panelBody={['Your reference number', <br />, <strong>HDJ2123F</strong>]}
 />
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/panel

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `panelBody` |  | ```undefined``` | union(string \| array) | Panel body text
 `panelTitle` | true | `````` | string | Panel title text


