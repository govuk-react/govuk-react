# govuk-react

A set of [govuk](https://github.com/alphagov/) components for [React](https://reactjs.org) using ~~styled-components~~ [glamorous](https://glamorous.rocks/).

~~CSS styling from [GOV.UK/elements](https://github.com/alphagov/govuk_elements) is applied to the components first (where appropriate), then custom styling is applied (if necessary).~~
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

### Creating a new component
To create a new component:
- `cd` into `src/components`
- `node createComponent.js MyNewComponent` where _MyNewComponent_ is the name of your new component.

This creates a folder named _MyNewComponent_ in `src/components` with the component file (index.js), a basic render test (test.js), and a default story (stories.js). You will need to add this to `src/stories/index.js` to view it in storybook.

## Assumptions

Use of these components assumes the following from the peer project:

- Either [normalize.css](https://necolas.github.io/normalize.css/) or [sanitize.css](https://jonathantneal.github.io/sanitize.css/) is used as a CSS reset.
- The GDS Transport font face is included ([for gov.uk domains only](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk))
- Other than the reset, no other styles affecting generic elements (without classes, IDs etc) are present in the CSS.

## Related sites and projects:

 - [govuk-elements](https://govuk-elements.herokuapp.com/) ([source](https://github.com/alphagov/govuk_elements/))
 - [govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit/)
 - [govuk-frontend](https://github.com/alphagov/govuk-frontend/)
 - [govuk_template](http://alphagov.github.io/govuk_template/) ([source](https://github.com/alphagov/govuk_template))
 - [GOV.UK Design Patterns](https://www.gov.uk/service-manual/design#find-patterns)
