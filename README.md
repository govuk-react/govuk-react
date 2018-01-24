# govuk-react

A set of [govuk](https://github.com/alphagov/) components for [React](https://reactjs.org) using [glamorous](https://glamorous.rocks/).

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

See the [Storybook](https://penx.github.io/govuk-react) for examples of all available components.

### Creating a new component
To create a new component:
- `npm run create-component -- MyNewComponent` where _MyNewComponent_ is the name of your new component.

This creates a folder named _MyNewComponent_ in `src/components` with the component file (index.js), a basic render test (test.js), and a default story (stories.js). You will need to add this to `src/stories/index.js` to view it in storybook.

## Assumptions

Use of these components assumes the following from the peer project:

- Either [normalize.css](https://necolas.github.io/normalize.css/) or [sanitize.css](https://jonathantneal.github.io/sanitize.css/) is used as a CSS reset.
- The GDS Transport font face is included ([for gov.uk domains only](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk))
- Other than the reset, no other styles affecting generic elements (without classes, IDs etc) are present in the CSS.

## Why Glamorous/CSS-in-JS?

See [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)

## Related sites and projects:

 - [govuk-elements](https://govuk-elements.herokuapp.com/) ([source](https://github.com/alphagov/govuk_elements/))
 - [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit/)
 - [govuk-frontend](https://github.com/alphagov/govuk-frontend/)
 - [govuk_template](http://alphagov.github.io/govuk_template/) ([source](https://github.com/alphagov/govuk_template))
 - [GOV.UK Design Patterns](https://www.gov.uk/service-manual/design#find-patterns)
