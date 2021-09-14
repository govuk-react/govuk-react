Page
====

### Import
```js
  import Page from '@govuk-react/page';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { Page, BackLink, H1 } from 'govuk-react';

<Page beforeChildren={<BackLink href="#" />}>
  <H1>Page title</H1>
</Page>
```

### References
- https://design-system.service.gov.uk/styles/page-template/
- https://design-system.service.gov.uk/styles/layout/#page-wrappers
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_main-wrapper.scss
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `beforeChildren` |  | ```undefined``` |  | Content that needs to appear outside the main page wrapper (see `main`).<br/>For example: A back link component, breadcrumbs, phase banner component
 `children` |  | ```undefined``` |  | Page contents
 `container` |  | ```Page.WidthContainer``` |  | Override the default page container component.<br/>`beforeChildren` and `children` (wrapped in `main`) will be placed inside this component.
 `footer` |  | ```undefined``` |  | Override the default page footer component.
 `header` |  | ```<TopNav />``` |  | Override the default page header component.
 `id` |  | ```'content'``` |  | ID for page content
 `main` |  | ```Page.Main``` |  | Override the default wrapper component for main page content


