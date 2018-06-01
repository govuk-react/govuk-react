DocumentFooterMetadata
======================

### Import
```js
  import DocumentFooterMetadata from '@govuk-react/document-footer-metadata';
```
<!-- STORY -->

### Usage


Simple
```js
import { asAnchor } from '@govuk-react/hoc';
const AnchorTag = asAnchor('a');

const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];


<DocumentFooterMetadata from={fromData} />
```


DFM From & part of example
```js
import { asAnchor } from '@govuk-react/hoc';
const AnchorTag = asAnchor('a');

const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];

const partOfData = [
  <AnchorTag href="/government/topics/energy">Energy</AnchorTag>,
  <AnchorTag href="/government/topics/environment">Environment</AnchorTag>,
];

<DocumentFooterMetadata from={fromData} partOf={partOfData} />
```


DFM From & other data example
```js
import { asAnchor } from '@govuk-react/hoc';
const AnchorTag = asAnchor('a');

const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];

const otherData = [
  {
    id: 0,
    title: 'Consultation type',
    content: <AnchorTag href="/government/publications">Open</AnchorTag>,
  },
  {
    id: 1,
    title: 'Published',
    content: '20 January 2012',
  },
];

<DocumentFooterMetadata from={fromData} other={otherData} />
```

### References:
- https://govuk-static.herokuapp.com/component-guide/document_footer

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `from` |  | undefined | arrayOf[object Object] | 
 `other` |  | undefined | arrayOf[object Object] | 
 `partOf` |  | undefined | arrayOf[object Object] | 


