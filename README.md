# govuk-react

An implementation of the [GOV.UK Design System](https://design-system.service.gov.uk) in [React](https://react.dev), built on [govuk-frontend-react](https://github.com/govuk-react/govuk-frontend-react) and styled by govuk-frontend's CSS.

govuk-react is a community project, actively maintained by volunteers. It isn't an official port of GOV.UK Frontend and isn't supported by the GOV.UK Design System team, who maintain [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend).

We aim to track the following projects (in priority order) as to which components to implement and how they should look/behave. Where possible we are using the existing CSS as a guide. When we need to modify to suit custom markup, we aim to provide a comment in our code as to why this was done.

- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend)
- [GOV.UK Design System](https://design-system.service.gov.uk) ([source](https://github.com/alphagov/govuk-design-system))
- [GOV.UK Publishing Components](https://components.publishing.service.gov.uk/component-guide)
- [GOV.UK Design System Backlog](https://github.com/alphagov/govuk-design-system-backlog) (where there are open tickets in the backlog that reference patterns/components in existing govuk sites)

The project is currently maintained for free by a small number of volunteers. If you would like to contribute, help maintain or sponsor this project, please get in touch via [Discussions](https://github.com/govuk-react/govuk-react/discussions) or [Twitter](https://twitter.com/penx).

## Usage

```sh
npm install govuk-react govuk-frontend
```

Load govuk-frontend's CSS once in your app, then govuk-react's, which styles what govuk-frontend has no classes for:

```js
import 'govuk-frontend/dist/govuk/govuk-frontend.min.css';
import 'govuk-react/styles.css';
```

```jsx
import { Button } from 'govuk-react';

const MyComponent = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <Button>Save and continue</Button>
  </div>
);
```

See the [Storybook](https://govuk-react.github.io/govuk-react) for examples of all available components.

Also see the [Example Application](packages/example-application/src) for basic usage, and the [Astro example](examples/astro) for forms that submit and show their errors without JavaScript, and for islands and inline scripts.

## Fonts and images

govuk-frontend's CSS loads its fonts and images from `/assets`. Serve `node_modules/govuk-frontend/dist/govuk/assets` at `/assets`, or copy its `fonts` and `images` folders and `manifest.json` into your app's `assets` folder. See govuk-frontend's guide to [importing font and images assets](https://frontend.design-system.service.gov.uk/import-font-and-images-assets/).

"If your service is on the service.gov.uk subdomain you must use the GDS Transport font."

"If your service is publicly available on a subdomain other than service.gov.uk, use an alternative typeface." See the Design System's [typeface guidance](https://design-system.service.gov.uk/styles/typeface/) and [using GOV.UK Frontend without GOV.UK branding](https://frontend.design-system.service.gov.uk/using-govuk-frontend-without-govuk-branding/), which sets `$govuk-font-family` with govuk-frontend's Sass API.

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

- `govuk-frontend` is installed and its CSS (`govuk-frontend/dist/govuk/govuk-frontend.min.css`) is loaded, followed by `govuk-react/styles.css`.
- govuk-frontend's font and image assets are served at `/assets` (see [Fonts and images](#fonts-and-images)).
- No other styles affecting generic elements (without classes, IDs etc) are present in the CSS.

## Imports

Import from the package root, or from a component's own subpath:

```js
import { Body, Heading } from 'govuk-react';
import * as DateInput from 'govuk-react/date-input';
```

## Migrating to 1.0

See [MIGRATION.md](MIGRATION.md).

## Related sites and projects

### GOV.UK

- [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit/)
- [govuk-frontend](https://github.com/alphagov/govuk-frontend/)
- [GOV.UK Design Patterns](https://www.gov.uk/service-manual/design#find-patterns)

## Acknowledgements

We use [Chromatic](https://www.chromatic.com/) for visual regression testing.

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
</a>
