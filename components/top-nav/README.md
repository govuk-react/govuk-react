TopNav
======

### Import
```js
  import TopNav from '@govuk-react/top-nav';
```
<!-- STORY -->

The GOV.UK header shows users that they are on GOV.UK and which service they are using.

- https://govuk-react.github.io/govuk-react/?path=/docs/top-nav
- https://design-system.service.gov.uk/components/header/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `bgColor` |  | ```undefined``` | string | Top nav background color
 `children` |  | ```undefined``` | any | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | ```undefined``` | string | Top nav text color
 `company` |  | ```<IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>``` | React.ReactNode | Company component e.g. GOV UK
 `defaultOpen` |  | ```undefined``` | boolean | Is the mobile navigation open by default?
 `fullWidthBottomBar` |  | ```undefined``` | boolean | Is the bottom nav element full width?
 `search` |  | ```undefined``` | React.ReactNode | Search component
 `serviceTitle` |  | ```undefined``` | React.ReactNode | Service title component e.g. Food Standards Authority


