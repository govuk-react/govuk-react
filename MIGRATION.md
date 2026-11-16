# Migrating to govuk-react 1.0

govuk-react 1.0 is built on [govuk-frontend-react](https://github.com/penx/govuk-frontend-react), which renders govuk-frontend's markup. Load govuk-frontend's CSS in your app (`govuk-frontend/dist/govuk/govuk-frontend.min.css`) and install `govuk-frontend` as a peer dependency.

Components move over one at a time. Anything not listed here is unchanged for now.

## Heading

`Heading` is now govuk-frontend-react's `Heading`. It's a named export, and `H1` to `H6` are removed.

| 0.x                                          | 1.0                                                 |
| -------------------------------------------- | --------------------------------------------------- |
| `import Heading from '@govuk-react/heading'` | `import { Heading } from 'govuk-react/heading'`     |
| `<H1>`                                       | `<Heading size="xl" headingLevel={1}>`              |
| `<H2>`                                       | `<Heading size="l">` (`headingLevel` defaults to 2) |
| `<H3>`                                       | `<Heading size="m" headingLevel={3}>`               |
| `<H4>` to `<H6>`                             | `<Heading size="s" headingLevel={4}>` (and 5, 6)    |
| `<Heading>` (no props)                       | `<Heading size="xl" headingLevel={1}>`              |
| `size="XLARGE"` / `80` / `48`                | `size="xl"` (48px; there is no 80px heading)        |
| `size="LARGE"` / `36`                        | `size="l"`                                          |
| `size="MEDIUM"` / `27` / `24`                | `size="m"`                                          |
| `size="SMALL"` / `19` and smaller            | `size="s"` (19px)                                   |
| `level={n}`                                  | the `<Hn>` row for that level (sets size too)       |
| `as="h3"`                                    | `headingLevel={3}`                                  |
| `mb={n}`                                     | `marginBottom={n}`                                  |

`size` is now required, and the heading renders an `h2` unless you set `headingLevel`. In 0.x a bare `<Heading>` rendered an extra large `h1`, so check headings without props keep their `h1`.

There is no equivalent for the other whitespace props (`margin`, `padding` and so on), or for `as` with a non-heading element or a component.
