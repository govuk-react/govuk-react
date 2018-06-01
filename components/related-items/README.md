RelatedItems
============

### Import
```js
  import RelatedItems from '@govuk-react/related-items';
```
<!-- STORY -->

### Usage

Simple
```jsx
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');

<RelatedItems>
  <Header level={3}>Example header</Header>
  <UnorderedList listStyleType="none">
    <ListItem>
      <AnchorTag href="https://example.com">Link A</AnchorTag>
    </ListItem>
  </UnorderedList>
</RelatedItems>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/related_items

### TODO:
- Replace CSS selectors with imported components

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | Related items content
 `className` |  | undefined | string | 


