ErrorSummary
============

### Import
```js
  import ErrorSummary from '@govuk-react/error-summary';
```
<!-- STORY -->

Use this component at the top of a page to summarise any errors a user has made.

- https://govuk-react.github.io/govuk-react/?path=/docs/error-summary
- https://design-system.service.gov.uk/components/error-summary/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `description` |  | ```undefined``` | string | Optional description of the errors
 `errors` |  | ```[]``` | { targetName?: string; text?: string; }[] | Array of errors with text and target element name to scroll into view when clicked
 `heading` |  | ```There is a problem``` | string | Heading text
 `onHandleErrorClick` |  | ```undefined``` | (targetName: string) => void | onClick function to scroll the target element into view


