# govuk-react

An implementation of the [GOV.UK Design System](https://govuk-design-system-production.cloudapps.digital) in [React](https://reactjs.org) using [CSSinJS](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) using Object notation (with [Emotion](https://emotion.sh/docs/object-styles)).

[![Build Status](https://travis-ci.org/penx/govuk-react.svg?branch=master)](https://travis-ci.org/penx/govuk-react)
[![codecov](https://codecov.io/gh/penx/govuk-react/branch/master/graph/badge.svg)](https://codecov.io/gh/penx/govuk-react)
[![Greenkeeper badge](https://badges.greenkeeper.io/penx/govuk-react.svg)](https://greenkeeper.io/)

The following projects (in priority order) are used as a guide for what components to implement and how they should look/behave. Where possible we are using the existing CSS as a guide, but often need to modify to suit custom markup. Also flexbox is preferred over floats.

- [GOV.UK Design System](https://govuk-design-system-production.cloudapps.digital) ([source](https://github.com/alphagov/govuk-design-system))
- [GOV.UK Design System Backlog](https://github.com/alphagov/govuk-design-system-backlog) (where there are open tickets in the backlog that reference patterns/components in existing govuk sites)
- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend)
- [GOV.UK/elements](https://github.com/alphagov/govuk_elements)
- Any other established govuk pattern

## Usage

```sh
npm install govuk-react emotion react-emotion --save
```

```js
import { Button } from 'govuk-react'

const MyComponent = ({title}) => (<div>
  <h1>{title}</h1>
  <Button />
</div>)
```

See the [Storybook](https://penx.github.io/govuk-react) for examples of all available components.

Also see the [example project](https://github.com/penx/govuk-react-example) for basic usage.

## Using anchors/React Router Link

We are using a Higher Order Component (HOC), which takes a component and returns a new component with the original props.

We use the same HOC for an `<a href...>` as we do for a `<Link to...>`. For example;
```js
import { BrowserRouter, Link } from 'react-router';
import { asAnchor } from '@govuk-react/hoc';

const MyLink = asAnchor(Link);

const MyComponent = () => (
  <nav>
    <BrowserRouter>
      <MyLink to="https://example.com">example</MyLink>
    </BrowserRouter>
  </nav>
)

```

## Assumptions

Use of these components assumes the following from the peer project:

- Either [normalize.css](https://necolas.github.io/normalize.css/) or [sanitize.css](https://jonathantneal.github.io/sanitize.css/) is used as a CSS reset.
- The GDS Transport font face is included ([for gov.uk domains only](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk))
- Other than the reset, no other styles affecting generic elements (without classes, IDs etc) are present in the CSS.

## Why Emotion/CSS-in-JS?

See [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660).

We have opted for [Emotion](https://emotion.sh/) over styled-components as we like the [support for JS syntax](https://emotion.sh/docs/object-styles).

We are also expecting to use [Interoperable Style Transfer Format (ISTF)](https://github.com/cssinjs/istf-spec) once it is finalised and compatible with a CSSinJS library, which would allow us to distribute CSSinJS stylesheets without a runtime.

## Why not use GDS styles/classes directly

1. We want to be free to write different DOM structure and/or CSS that is more in keeping with a React and bem-ish architecture. (e.g. in React you often don't need to specify IDs for field inputs, and can wrap inputs with labels so that they are automatically associated. We want to leave the decision of whether to use input IDs to the parent project. GDS styles don't wrap inputs with labels and require IDs and for attributes).
2. We want a parent project to not have to worry about a specific build system (e.g. for handling `import styles.css`, particularly if you want universal support) or including certain CSS files. We want a simple `npm install govuk-react` to be enough to get govuk styled components on to your page, irrespective of your build system.

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

## Contributors

- [Alasdair McLeay](https://github.com/penx)
- [Mark Chambers](https://github.com/marksy)
- [Steve Sims](https://github.com/stevesims)
