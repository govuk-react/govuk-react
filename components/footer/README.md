Footer
======

### Import
```js
  import Footer from '@govuk-react/footer';
```
<!-- STORY -->

The footer provides copyright, licensing and other information about your service and department.

- https://govuk-react.github.io/govuk-react/?path=/docs/footer
- https://design-system.service.gov.uk/components/footer/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | ReactNode | Footer navigation links
 `container` |  | ```Footer.WidthContainer``` | ElementType<any> | Override the default footer container component.<br/>`children`, `copyright` and `meta` will be placed inside this component.
 `copyright` |  | ```undefined``` | CopyrightProps | Copyright information
 `licence` |  | ```<Licence />``` | ReactNode | Licence content
 `meta` |  | ```undefined``` | ReactNode | Meta text and links


