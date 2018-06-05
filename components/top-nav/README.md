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
import { BrowserRouter, Link } from 'react-router-dom';
import CrownIcon from '@govuk-react/icon-crown';
import SearchBox from '@govuk-react/search-box';
import Header from '@govuk-react/header';
import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoAnchor = asLogoAnchor('a');
const NavAnchor = asNavLinkAnchor('a');

const link = 'https://example.com?=1';

const Company = (
  <LogoAnchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoAnchor>
);

const ServiceTitle = (
  <NavAnchor href={link} target="new">
    <Header mb="0" level={3}>Service Title</Header>
  </NavAnchor>
);

const Search = (
  <SearchBox placeholder="Search">hi</SearchBox>
);

<TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
  <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavAnchor>
  <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavAnchor>
</TopNav>
```

```jsx
import CrownIcon from '@govuk-react/icon-crown';
import Header from '@govuk-react/header';
import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoLink = asLogoAnchor(Link);
const NavLink= asNavLinkAnchor(Link);

const reactRouterLink = '/section';
const CompanyLink = (
  <LogoLink to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoLink>
);

const ServiceTitleLink = (
  <NavLink to={reactRouterLink}>
    <Header mb="0" level={3}>Service Title</Header>
  </NavLink>
);

<BrowserRouter>
  <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
</BrowserRouter>
```

### References:
- http://alphagov.github.io/govuk_template/example-proposition-menu.html

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `active` |  | undefined | number | 
 `bgColor` |  | BLACK | string | 
 `children` |  | undefined | node | 
 `color` |  | WHITE | string | 
 `company` |  | undefined | node | 
 `search` |  | false | node | 
 `serviceTitle` |  | undefined | node | 


