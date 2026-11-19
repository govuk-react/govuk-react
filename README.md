# govuk-react

An implementation of the [GOV.UK Design System](https://design-system.service.gov.uk) in [React](https://react.dev), built on [govuk-frontend-react](https://github.com/govuk-react/govuk-frontend-react) and styled by govuk-frontend's CSS.

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
- [Data to Insight](https://github.com/data-to-insight/quality-lac-data-beta)
- [Department for Education](https://github.com/DFE-Digital/meeting-timer)
- [Department for Environment, Food & Rural Affairs](https://github.com/atoscerebro/defra-wtp) [2](https://github.com/DEFRA/eutd-mmo-cc-external-frontend)
- [Department for International Trade](https://github.com/uktrade/data-science-frontend) [2](https://github.com/uktrade/data-hub-frontend) [3](https://github.com/uktrade/statement-of-works) [4](https://github.com/uktrade/data-hub-components)
- [Department of Business, Energy and Industrial Strategy](https://github.com/UKGovernmentBEIS/beis-cosmetics-spa)
- [Department for Energy Security and Net Zero](https://github.com/Integrated-Corporate-Services/desnz-syeia-frontend-beta)
- [Department of Health and Social Care](https://github.com/DepartmentOfHealth-htbhf/htbhf-management-web-ui-spike) [2](https://github.com/dhsc-govuk/FingertipsNext) [3](https://github.com/dhsc-govuk/HealthyBabies) [4](https://github.com/dhsc-govuk/gamblinglevy)
- [Department for Environment, Food and Rural Affairs](https://github.com/DEFRA/eutd-mmo-cc-external-frontend)
- [Department for Transport](https://github.com/fares-data-build-tool/fdbt-admin) [2](https://github.com/department-for-transport-BODS/create-disruptions-data) [3](https://github.com/department-for-transport-BODS/publish-devolved-bus-registration-data)
- [Driver and Vehicle Licensing Agency](https://github.com/dvla/lab-gen-ui)
- [Food Standards Agency](https://github.com/FoodStandardsAgency/register-a-food-business-healthcheck-dashboard) [2](https://github.com/FSA-Civica/govuk-react/tree/slice-and-dice-packages/base)
- [HM Courts & Tribunals Service](https://github.com/hmcts/mytime-frontend) [2](https://github.com/hmcts/rse-next-prototype)
- [HM Land Registry](https://github.com/LandRegistry/title-token)
- [HM Passport Office](https://github.com/UKHomeOffice/lev-react-components)
- [HM Prison and Probation Services](https://github.com/ministryofjustice/prisonstaffhub) [2](https://github.com/ministryofjustice/prison-services-feedback-and-support) [3](https://github.com/ministryofjustice/digital-prison-services)
- [Home Office](https://github.com/UKHomeOffice/system-register) [2]
- [Made Tech](https://github.com/madetech/govuk-react-form) [2](https://github.com/madetech/academy20-zingtech-frontend)
- [Ministry of Justice](https://github.com/ministryofjustice/manage-key-workers) [2](https://github.com/ministryofjustice/bichard7-next-ui)
- [London Borough of Hackney](https://github.com/LBHackney-IT/document-evidence-store-frontend)
- [Public Health England/UK Health Security Agency](https://web.archive.org/web/20220216110415if_/https://get-home-lateral-flow-testing-kit.service.gov.uk/static/js/2.dad2ad18.chunk.js.map)
- [Skills Funding Agency](https://github.com/SkillsFundingAgency/CFS-Frontend) [2](https://github.com/SkillsFundingAgency/das-qna-config)
- [UK Research and Innovation](https://github.com/ukriorg/ukripoc-application) [2](https://github.com/ukriorg/ukripoc-opportunity) [3](https://github.com/ukriorg/ukripoc-front-door)

The project is currently maintained for free by a small number of volunteers. If you would like to contribute, help maintain or sponsor this project, please get in touch via [Discussions](https://github.com/govuk-react/govuk-react/discussions) or [Twitter](https://twitter.com/penx).

## Usage

```sh
npm install govuk-react govuk-frontend
```

Load govuk-frontend's CSS once in your app:

```js
import 'govuk-frontend/dist/govuk/govuk-frontend.min.css';
```

```jsx
import { Button } from 'govuk-react';

const MyComponent = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <Button.Composite>Save and continue</Button.Composite>
  </div>
);
```

See the [Storybook](https://govuk-react.github.io/govuk-react) for examples of all available components.

Also see the [Example Application](packages/example-application/src) for basic usage.

## Using Link with a Router Link

`Link`, `BackLink` and the navigation link parts take `asChild`, which applies their classes to your router link instead of rendering an `a`:

```jsx
import { Link as RouterLink } from 'react-router';
import { Link } from 'govuk-react/link';

const MyComponent = () => (
  <Link asChild>
    <RouterLink to="/page">Page</RouterLink>
  </Link>
);
```

## Assumptions

Use of these components assumes the following from the peer project:

- `govuk-frontend` is installed and its CSS (`govuk-frontend/dist/govuk/govuk-frontend.min.css`) is loaded.
- The GDS Transport font face is included ([for gov.uk domains only](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk))
- No other styles affecting generic elements (without classes, IDs etc) are present in the CSS.

## Imports

Import from the package root, or from a component's own subpath:

```js
import { Body, Heading } from 'govuk-react';
import * as DateInput from 'govuk-react/date-input';
```

## Migrating to 1.0

See [MIGRATION.md](MIGRATION.md).

## About the GDS font

Unfortunately the GDS transport font has a relatively restrictive license [described on the gov.uk blog](https://designnotes.blog.gov.uk/2015/03/11/can-i-use-the-gov-uk-fonts/). We are investigating rendering an elegant alternative before falling back to Arial on [issue 272](https://github.com/govuk-react/govuk-react/issues/272).

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
