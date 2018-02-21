# govuk-react

A set of [govuk](https://github.com/alphagov/) components for [React](https://reactjs.org) using [glamorous](https://glamorous.rocks/).

[![Build Status](https://travis-ci.org/penx/govuk-react.svg?branch=master)](https://travis-ci.org/penx/govuk-react)
[![codecov](https://codecov.io/gh/penx/govuk-react/branch/master/graph/badge.svg)](https://codecov.io/gh/penx/govuk-react)
[![Greenkeeper badge](https://badges.greenkeeper.io/penx/govuk-react.svg)](https://greenkeeper.io/)

CSS styling is derived from [GOV.UK/elements](https://github.com/alphagov/govuk_elements) but modified to suit custom markup. Also flexbox is preferred over floats.

## Usage

`npm install govuk-react --save`

```
import { Button } from 'govuk-react'

const MyComponent = ({title}) => (<div>
  <h1>{title}</h1>
  <Button />
</div>)
```

See the [Storybook](https://penx.github.io/govuk-react) for examples of all available components.

Also see the [example project](https://github.com/penx/govuk-react-example) for basic usage.

## Using Anchors/React Router Link

We are using a Higher Order Component (HOC), which takes a component and returns a new component with the original props.

We use the same HOC for an `<a href...>` as we do for a `<Link to...>`. For example;
```
import { BrowserRouter, Link } from 'react-router';
import asAnchor from 'govuk-react';

const MyLink = asAnchor(Link);

const MyComponent = () => {
  <nav>
    <BrowserRouter>
      <MyLink to="https://example.com">example</MyLink>
    </BrowserRouter>
  </nav>
}

```

## Assumptions

Use of these components assumes the following from the peer project:

- Either [normalize.css](https://necolas.github.io/normalize.css/) or [sanitize.css](https://jonathantneal.github.io/sanitize.css/) is used as a CSS reset.
- The GDS Transport font face is included ([for gov.uk domains only](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk))
- Other than the reset, no other styles affecting generic elements (without classes, IDs etc) are present in the CSS.

## Why Glamorous/CSS-in-JS?

See [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)

## Why not use GDS styles/classes directly

1. We want to be free to write different DOM structure and/or CSS that is more in keeping with a React and bem-ish architecture. (e.g. in React you often don't need to specify IDs for field inputs, and can wrap inputs with labels so that they are automatically associated. We want to leave the decision of whether to use input IDs to the parent project. GDS styles don't wrap inputs with labels and require IDs and for attributes).
2. We want a parent project to not have to worry about a specific build system (e.g. for handling `import styles.css`, particularly if you want universal support) or including certain CSS files. We want a simple `npm install govuk-react` to be enough to get govuk styled components on to your page, irrespective of your build system.

## Related sites and projects:

 - [govuk-elements](https://govuk-elements.herokuapp.com/) ([source](https://github.com/alphagov/govuk_elements/))
 - [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit/)
 - [govuk-frontend](https://github.com/alphagov/govuk-frontend/)
 - [govuk_template](http://alphagov.github.io/govuk_template/) ([source](https://github.com/alphagov/govuk_template))
 - [GOV.UK Design Patterns](https://www.gov.uk/service-manual/design#find-patterns)

## Contributing

### Creating a new component
To create a new component:
- `npm run create-component -- MyNewComponent` where _MyNewComponent_ is the name of your new component.

This creates a folder named _MyNewComponent_ in `src/components` with the component file (index.js), a basic render test (test.js), and a default story (stories.js). You will need to add this to `src/stories/index.js` to view it in storybook.


### Unit testing
Unit testing follows similar patterns as [Glamorous with Jest](https://github.com/paypal/glamorous/tree/master/examples/with-jest), utilising [Jest _snapshots_](https://facebook.github.io/jest/docs/en/snapshot-testing.html), and [Enzyme](https://github.com/airbnb/enzyme).

To run unit & eslint tests:
```
$ npm run test
```

To run & watch unit tests:
```
$ npm run test:unit
```
