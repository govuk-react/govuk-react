# govuk-react

An implementation of the [GOV.UK Design System](https://govuk-design-system-production.cloudapps.digital) in [React](https://reactjs.org) using [CSSinJS](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) using Object notation (with [styled-components](https://www.styled-components.com/docs/advanced#style-objects)).

[![codecov](https://codecov.io/gh/govuk-react/govuk-react/branch/master/graph/badge.svg)](https://codecov.io/gh/govuk-react/govuk-react)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/govuk-react)

We aim to track the following projects (in priority order) as to which components to implement and how they should look/behave. Where possible we are using the existing CSS as a guide. When we need to modify to suit custom markup, we aim to provide a comment in our code as to why this was done.

- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend)
- [GOV.UK Design System](https://design-system.service.gov.uk) ([source](https://github.com/alphagov/govuk-design-system))
- [GOV.UK Publishing Components](https://components.publishing.service.gov.uk/component-guide)
- [GOV.UK Design System Backlog](https://github.com/alphagov/govuk-design-system-backlog) (where there are open tickets in the backlog that reference patterns/components in existing govuk sites)
- [GOV.UK/elements](https://github.com/alphagov/govuk_elements)
- Any other established govuk pattern

This project is being or has been used by:

- [Connected Open Government Statistics](https://github.com/GSS-Cogs/chart-builder) [2](https://github.com/GSS-Cogs/dd-cms)
- [Department for Education](https://github.com/DFE-Digital/meeting-timer)
- [Department for Environment, Food & Rural Affairs](https://github.com/atoscerebro/defra-wtp) [2](https://github.com/DEFRA/eutd-mmo-cc-external-frontend)
- [Department for International Trade](https://github.com/uktrade/data-science-frontend) [2](https://github.com/uktrade/data-hub-frontend) [3](https://github.com/uktrade/statement-of-works) [4](https://github.com/uktrade/data-hub-components)
- [Department of Business, Energy and Industrial Strategy](https://github.com/UKGovernmentBEIS/beis-cosmetics-spa)
- [Department of Health](https://github.com/DepartmentOfHealth-htbhf/htbhf-management-web-ui-spike)
- [Department for Environment, Food and Rural Affairs](https://github.com/DEFRA/eutd-mmo-cc-external-frontend)
- [Department for Transport](https://github.com/fares-data-build-tool/fdbt-admin)
- [Food Standards Agency](https://github.com/FoodStandardsAgency/register-a-food-business-healthcheck-dashboard) [2](https://github.com/FSA-Civica/govuk-react/tree/slice-and-dice-packages/base)
- [HM Courts & Tribunals Service](https://github.com/hmcts/mytime-frontend) [2](https://github.com/hmcts/rse-next-prototype)
- [HM Land Registry](https://github.com/LandRegistry/title-token)
- [HM Passport Office](https://github.com/UKHomeOffice/lev-react-components)
- [HM Prison and Probation Services](https://github.com/ministryofjustice/prisonstaffhub) [2](https://github.com/ministryofjustice/prison-services-feedback-and-support)
- [Home Office](https://github.com/UKHomeOffice/system-register) [2]
- [Made Tech](https://github.com/madetech/govuk-react-form) [2](https://github.com/madetech/academy20-zingtech-frontend)
- [Ministry of Justice](https://github.com/ministryofjustice/manage-key-workers) [2](https://github.com/ministryofjustice/bichard7-next-ui)
- [London Borough of Hackney](https://github.com/LBHackney-IT/document-evidence-store-frontend)
- [Public Health England/UK Health Security Agency](https://web.archive.org/web/20220216110415if_/https://get-home-lateral-flow-testing-kit.service.gov.uk/static/js/2.dad2ad18.chunk.js.map)
- [Skills Funding Agency](https://github.com/SkillsFundingAgency/CFS-Frontend) [2](https://github.com/SkillsFundingAgency/das-qna-config)

The project is currently maintained for free by a small number of volunteers. If you would like to contribute, help maintain or sponsor this project, please get in touch via [Discussions](https://github.com/govuk-react/govuk-react/discussions) or [Twitter](https://twitter.com/penx).

## Usage

```sh
npm install govuk-react styled-components @types/styled-components --save
```

```jsx
import { Button } from 'govuk-react'

const MyComponent = ({title}) => (<div>
  <h1>{title}</h1>
  <Button />
</div>)
```

See the [Storybook](https://govuk-react.github.io/govuk-react) for examples of all available components.

Also see the [Example Application](packages/example-application/src) for basic usage.

## Using Link with a Router Link

We provide a Link component which creates an element styled as a GDS link. As we are using styled-components it is possible to apply that style to an existing component using the `as` prop. Other props will be passed through.

For example;

```jsx
import { BrowserRouter, Link as RouterLink } from 'react-router';
import { Link } from '@govuk-react/link';

const MyComponent = () => (
  <nav>
    <BrowserRouter>
      <Link as={RouterLink} to="https://example.com">example</Link>
    </BrowserRouter>
  </nav>
);
```

## Assumptions

Use of these components assumes the following from the peer project:

- The govuk-react `GlobalStyle` component is included on all pages.
- The GDS Transport font face is included ([for gov.uk domains only](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk))
- Optionally, either [normalize.css](https://necolas.github.io/normalize.css/) or [sanitize.css](https://csstools.github.io/sanitize.css/) is used as a CSS reset. We don't test for this, so please raise an issue if you find any problems with compatability.
- Other than the reset, no other styles affecting generic elements (without classes, IDs etc) are present in the CSS.

## Why CSS-in-JS?

See [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660).

This project is part of a larger initiative to componetise large scale React applications. Using CSSinJS allows us to include styles inside a module bundle that can be published (using `npm publish`) and consumed by a peer application, without putting dependencies on the peer application to implement a specific CSS build system.

## Why not use GDS styles/classes directly

1. We want to be free to write different DOM structure and/or CSS that is more in keeping with a React and bem-ish architecture. (e.g. in React you often don't need to specify IDs for field inputs, and can wrap inputs with labels so that they are automatically associated. We want to leave the decision of whether to use input IDs to the parent project. GDS styles don't wrap inputs with labels and require IDs and for attributes).
2. We want a parent project to not have to worry about a specific build system (e.g. for handling `import styles.css`, particularly if you want universal support) or including certain CSS files. We want a simple `npm install govuk-react` to be enough to get govuk styled components on to your page, irrespective of your build system.
3. We want to distribute React applications as modules that have self contained styles. CSS in JS allows all styles to be contained in distributable JS modules that can be ported across projects.

## Why is this a monorepo?

Components are published to npm independently. This means users have the ability to upgrade govuk-react and still use older components.

This is particularly relevant in a large application where:

- some code is reliant on a component that has either been deprecated or had breaking changes 
- you aren't able to refactor the existing code, e.g. it is a large job or managed by another team
- you don't want to hold back from upgrading to the newest version of govuk-react

e.g. for DateField, you import it separately as follows:

```js
import { H1, Paragraph } from 'govuk-react';
import DateField from '@govuk-react/date-field';
```

Then in your package.json, you can update govuk-react, but specify the older version of '@govuk-react/date-field'.

## About the GDS font

Unfortuantely the GDS transport font has a relatively restrictive license [described on the gov.uk blog](https://designnotes.blog.gov.uk/2015/03/11/can-i-use-the-gov-uk-fonts/). We are investigating rendering an elegant alternative before falling back to Arial on [issue 272](https://github.com/govuk-react/govuk-react/issues/272).

## Related sites and projects

### GOV.UK

- [govuk-elements](https://govuk-elements.herokuapp.com/) ([source](https://github.com/alphagov/govuk_elements/))
- [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit/)
- [govuk-frontend](https://github.com/alphagov/govuk-frontend/)
- [govuk_template](http://alphagov.github.io/govuk_template/) ([source](https://github.com/alphagov/govuk_template))
- [GOV.UK Design Patterns](https://www.gov.uk/service-manual/design#find-patterns)

### Other React component libraries

- [Auth0 Cosmos](https://github.com/auth0/cosmos)
- [Shopify Polaris](https://github.com/Shopify/polaris)
- [Zendesk Garden](https://github.com/zendeskgarden/react-components)
- [Atlassian Atlaskit](https://bitbucket.org/atlassian/atlaskit-mk-2)
- [Carbon Design System](https://github.com/carbon-design-system/carbon-components-react)
- [Material UI](https://github.com/mui-org/material-ui)
- [Rebass](https://rebassjs.org)

## Acknowledgements

We use [Chromaticqa](https://www.chromaticqa.com/) for visual regression testing and it is awesome, you should too!

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
</a>

## Contributors

- [Alasdair McLeay](https://github.com/penx)
- [David Murdoch](https://github.com/dsm23)
- [Gavin Orland](https://github.com/gavinorland)
- [Mark Chambers](https://github.com/marksy)
- [Steve Sims](https://github.com/stevesims)
- [Taran Chauhan](https://github.com/taranchauhan)
- [Toby Brancher](https://github.com/Loque-)

Want to contribute? Checkout our [Contributing page](CONTRIBUTING.md).
