TopNav
======

### Import
```js
  import TopNav from '@govuk-react/top-nav';
```
<!-- STORY -->

### Usage

TopNav with logo, service title and navigation items

```jsx
import { SearchBox, TopNav } from 'govuk-react';
import CrownIcon from '@govuk-react/icon-crown';

const link = 'https://example.com?=1';

const Company = (
  <TopNav.Anchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitle = (
  <TopNav.NavLink href={link} target="new">
    Service Title
  </TopNav.NavLink>
);

const Search = (
  <SearchBox>
    <SearchBox.Input placeholder="Search GOV.UK" />
    <SearchBox.Button />
  </SearchBox>
);

<TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
  <TopNav.NavLink href="https://example.com?q=catdog" target="new">Navigation item #1</TopNav.NavLink>
  <TopNav.NavLink href="https://example.com?q=dogcat" target="new">Navigation item #2</TopNav.NavLink>
</TopNav>
```

With React Router

```jsx
import { BrowserRouter, Link } from 'react-router-dom';
import { TopNav } from 'govuk-react';
import CrownIcon from '@govuk-react/icon-crown';

const reactRouterLink = '/section';
const CompanyLink = (
  <TopNav.Anchor as={Link} to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitleLink = (
  <TopNav.NavLink as={Link} to={reactRouterLink}>
    Service Title
  </TopNav.NavLink>
);

<BrowserRouter>
  <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
</BrowserRouter>
```

### References:

- http://alphagov.github.io/govuk_template/example-proposition-menu.html
- https://design-system.service.gov.uk/components/header/

### TODO:
- TODO: this component is a work in progress and needs to more closely match existing examples
- TODO: is TopNav the right name? What's it called in other GDS styles/patterns?
- TODO: (The name Header is ambiguous)
- TODO: #205 Use context api and/or render props for `active` navigation items
- TODO: Vertical alignment here needs some work, perhaps should be its own component
- TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `bgColor` |  | ```BLACK``` |  | Top nav background color
 `children` |  | ```undefined``` |  | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | ```WHITE``` |  | Top nav text color
 `company` |  | ```<IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>``` |  | Company component e.g. GOV UK
 `defaultOpen` |  | ```false``` |  | Is the mobile navigation open by default?
 `search` |  | ```false``` |  | Search component
 `serviceTitle` |  | ```undefined``` |  | Service title component e.g. Food Standards Authority


