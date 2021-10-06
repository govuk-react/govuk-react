Page
====

### Import
```js
  import Page from '@govuk-react/page';
```
<!-- STORY -->

Use this template to keep your pages consistent with the rest of GOV.UK.

- https://govuk-react.github.io/govuk-react/?path=/docs/page
- https://design-system.service.gov.uk/styles/page-template/
- https://design-system.service.gov.uk/styles/layout/#page-wrappers

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `beforeChildren` |  | ```undefined``` | ReactNode | Content that needs to appear outside the main page wrapper (see `main`).<br/>For example: A back link component, breadcrumbs, phase banner component
 `children` |  | ```undefined``` | ReactNode | Page contents
 `container` |  | ```Page.WidthContainer``` | ElementType<any> | Override the default page container component.<br/>`beforeChildren` and `children` (wrapped in `main`) will be placed inside this component.
 `footer` |  | ```undefined``` | ReactNode | Override the default page footer component.
 `header` |  | ```<TopNav />``` | ReactNode | Override the default page header component.
 `id` |  | ```content``` | string | ID for page content
 `main` |  | ```Page.Main``` | ElementType<any> | Override the default wrapper component for main page content


