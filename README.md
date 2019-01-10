# govuk-react

An implementation of the [GOV.UK Design System](https://govuk-design-system-production.cloudapps.digital) in [React](https://reactjs.org) using [CSSinJS](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660) using Object notation (with [Emotion](https://emotion.sh/docs/object-styles)).

[![Build Status](https://travis-ci.org/govuk-react/govuk-react.svg?branch=master)](https://travis-ci.org/govuk-react/govuk-react)
[![codecov](https://codecov.io/gh/govuk-react/govuk-react/branch/master/graph/badge.svg)](https://codecov.io/gh/govuk-react/govuk-react)

We aim to track the following projects (in priority order) as to which components to implement and how they should look/behave. Where possible we are using the existing CSS as a guide. When we need to modify to suit custom markup, we aim to provide a comment in our code as to why this was done.

- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend)
- [GOV.UK Design System](https://design-system.service.gov.uk) ([source](https://github.com/alphagov/govuk-design-system))
- [GOV.UK Design System Backlog](https://github.com/alphagov/govuk-design-system-backlog) (where there are open tickets in the backlog that reference patterns/components in existing govuk sites)
- [GOV.UK/elements](https://github.com/alphagov/govuk_elements)
- [GOV.UK Publishing Components](https://govuk-publishing-components.herokuapp.com/component-guide)
- Any other established govuk pattern

## Usage

```sh
npm install govuk-react @emotion/core @emotion/styled --save
```

```js
import { Button } from 'govuk-react'

const MyComponent = ({title}) => (<div>
  <h1>{title}</h1>
  <Button />
</div>)
```

See the [Storybook](https://UKHomeOffice.github.io/govuk-react) for examples of all available components.

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

## Why CSS-in-JS?

See [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660).

This project is part of a larger initiative to componetise large scale React applications. Using CSSinJS allows us to include styles inside a module bundle that can be published (using `npm publish`) and consumed by a peer application, without putting dependencies on the peer application to implement a specific CSS build system.

# Why Emotion?

We opted for [Emotion](https://emotion.sh/) over styled-components as we like the [support for JS syntax](https://emotion.sh/docs/object-styles). This has since been added to styled-components. We would not be against moving to styled-components in the future if there was a clear advantage, but at the moment both libraries have great features and communities.

We are also expecting to use [Interoperable Style Transfer Format (ISTF)](https://github.com/cssinjs/istf-spec) once it is finalised and compatible with a CSSinJS library, which would allow us to distribute CSSinJS stylesheets without a runtime.

## Why not use GDS styles/classes directly

1. We want to be free to write different DOM structure and/or CSS that is more in keeping with a React and bem-ish architecture. (e.g. in React you often don't need to specify IDs for field inputs, and can wrap inputs with labels so that they are automatically associated. We want to leave the decision of whether to use input IDs to the parent project. GDS styles don't wrap inputs with labels and require IDs and for attributes).
2. We want a parent project to not have to worry about a specific build system (e.g. for handling `import styles.css`, particularly if you want universal support) or including certain CSS files. We want a simple `npm install govuk-react` to be enough to get govuk styled components on to your page, irrespective of your build system.
3. We want to distribute React applications as modules that have self contained styles. CSS in JS allows all styles to be contained in distributable JS modules that can be ported across projects.

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

## Contributors

- [Alasdair McLeay](https://github.com/penx)
- [Gavin Orland](https://github.com/gavinorland)
- [Mark Chambers](https://github.com/marksy)
- [Steve Sims](https://github.com/stevesims)
- [Taran Chauhan](https://github.com/taranchauhan)
- [Toby Brancher](https://github.com/Loque-)
