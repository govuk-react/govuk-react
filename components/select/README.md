Select
======

### Import
```js
  import Select from '@govuk-react/select';
```
<!-- STORY -->

The select component should only be used as a last resort in public-facing services because research shows that some users find selects very difficult to use.

- https://govuk-react.github.io/govuk-react/?path=/docs/select
- https://design-system.service.gov.uk/components/select/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `error` |  |  | boolean | Apply error state styling to the component
 `errorText` |  | ```undefined``` | string | 
 `hint` |  | ```undefined``` | ReactNode | 
 `input` |  | ```{}``` | SelectHTMLAttributes<HTMLSelectElement> | 
 `label` | true |  | string | 
 `margin` |  |  | Margin \| Margin[] | 
 `mb` |  |  | string \| number | 
 `meta` |  | ```{}``` | { error?: string \| string[]; touched?: boolean; } | 
 `padding` |  |  | Padding \| Padding[] | 


