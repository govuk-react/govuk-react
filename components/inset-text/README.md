InsetText
=========

### Import
```js
  import InsetText from '@govuk-react/inset-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
import Paragraph from '@govuk-react/paragraph';

<InsetText>
 <Paragraph mb={0}>Hello</Paragraph>
</InsetText>
```

Narrow border
```jsx
import Paragraph from '@govuk-react/paragraph';

<InsetText isNarrow>
 <Paragraph mb={0}>Hello</Paragraph>
</InsetText>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-inset-text
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_panels.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `isNarrow` |  | ```false``` | bool | Renders a narrow border following GDS guides if set to true


