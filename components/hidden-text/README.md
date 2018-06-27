HiddenText
==========

### Import
```js
  import HiddenText from '@govuk-react/hidden-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
import Paragraph from '@govuk-react/paragraph';

<HiddenText summaryText={'Help with nationality'}>
  <Paragraph mb={0}>I am a paragraph. Please read me.</Paragraph>
</HiddenText>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-hidden-text
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/details/_details.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | The nodes that will be displayed within the InsetText component
 `summaryText` | true | `````` | string | Text for the summary button link e.g. Help with nationality


