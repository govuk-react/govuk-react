Footer
======

### Import
```js
  import Footer from '@govuk-react/footer';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Footer />
```

Footer with Copyright information
```jsx
// Import self hosted copyright image
import crest from './govuk-crest.png';

<Footer
  copyright={{
    text: 'Crown copyright',
    link:
      'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
    image: {
      source: crest,
      height: 102,
      width: 125,
    },
  }}
/>;
```

Footer with navigation.  There is also the option to provide footer links with, or without React/Reach Router.
```jsx
import { Link } from 'react-router-dom';

<Footer>
  <Footer.Navigation>
    <Footer.NavigationLinks heading="Two column list" listColumns={2}>
      <Footer.Link href="/">Navigation item 1</Footer.Link>
      <Footer.Link to="/footer-nav-item-2" as={Link}>Navigation item 2 (Router Link)</Footer.Link>
      <Footer.Link href="/">Navigation item 3</Footer.Link>
      <Footer.Link href="/">Navigation item 4</Footer.Link>
      <Footer.Link href="/">Navigation item 5</Footer.Link>
      <Footer.Link href="/">Navigation item 6</Footer.Link>
    </Footer.NavigationLinks>
    <Footer.NavigationLinks heading="Single column list">
      <Footer.Link href="/">Navigation item 1</Footer.Link>
      <Footer.Link href="/">Navigation item 2</Footer.Link>
      <Footer.Link href="/">Navigation item 3</Footer.Link>
    </Footer.NavigationLinks>
  </Footer.Navigation>
</Footer>
```

Footer with links in meta area
```jsx
<Footer meta={
    <Footer.MetaLinks heading="Support links">
      <Footer.Link href="/">Item 1</Footer.Link>
      <Footer.Link to="/footer-meta-item-2" as={Link}>Item 2 (Router Link)</Footer.Link>
      <Footer.Link href="/">Item 3</Footer.Link>
    </Footer.MetaLinks>
  }
/>
```

Footer with custom content in meta area
```jsx
<Footer meta={
    <Footer.MetaCustom>
      Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
    </Footer.MetaCustom>
  }
/>
```

NB <Footer.Link /> is styled extention of @govuk-react/link

### References:
- https://design-system.service.gov.uk/components/footer/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/footer/template.njk
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/footer/_footer.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | Footer navigation links
 `container` |  | ```Footer.WidthContainer``` | func | Override the default footer container component.<br/>`children`, `copyright` and `meta` will be placed inside this component.
 `copyright` |  | ```undefined``` | shape[object Object] | Copyright information
 `meta` |  | ```undefined``` | node | Meta text and links


