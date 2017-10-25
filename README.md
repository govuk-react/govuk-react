# govuk-react

A port of the [govuk-frontend](https://github.com/alphagov/govuk-frontend) [components](https://github.com/alphagov/govuk-frontend/tree/master/src/components) for [React](https://reactjs.org) using [styled-components](https://www.styled-components.com).

## Usage

`npm install govuk-react --save`

```
import { Button } from 'govuk-react'

const MyComponent = ({title}) => (<div>
  <h1>{title}</h1>
  <Button />
</div>)
```

## Assumptions

Use of these components assumes the following from the peer project:

- Either [normalize.css](https://necolas.github.io/normalize.css/) or [sanitize.css](https://jonathantneal.github.io/sanitize.css/) is used as a CSS reset.
- The GDS Transport font face is included ([for gov.uk domains only](https://www.gov.uk/service-manual/design/making-your-service-look-like-govuk))
- Other than the reset, no other styles affecting generic elements (without classes, IDs etc) are present in the CSS.
