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

## Body (was Paragraph and LeadParagraph)

`Paragraph` and `LeadParagraph` are replaced by govuk-frontend-react's `Body`, which renders a `p` with govuk-frontend's body classes. It's a named export, and the `govuk-react/paragraph` and `govuk-react/lead-paragraph` subpaths are removed.

| 0.x                                             | 1.0                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `import Paragraph from 'govuk-react/paragraph'` | `import { Body } from 'govuk-react/body'`                                                |
| `<Paragraph>`                                   | `<Body>`                                                                                 |
| `<Paragraph supportingText>`                    | `<Body size="s" marginBottom={4}>` (`size="s"` alone has a 15px bottom margin, not 20px) |
| `<LeadParagraph>`                               | `<Body size="l">`                                                                        |
| `mb={n}`                                        | `marginBottom={n}`                                                                       |
| markdown in `children`                          | JSX, e.g. `<strong>`, `<Link>` and `<code>`                                              |
| `linkRenderer`                                  | your own link component in `children`                                                    |

Markdown parsing is now up to your app. `Paragraph` parsed its children as markdown inside a `div`. `Body` renders its children as given inside a single `p`, so:

- a string such as `**bold**` now shows the asterisks
- text with blank lines between paragraphs becomes one paragraph, so use one `<Body>` per paragraph
- code blocks need their own element outside `Body`, because a `pre` isn't valid inside a `p`

There is no equivalent for the other whitespace props (`margin`, `padding` and so on).

## List (was UnorderedList, OrderedList and ListItem)

`UnorderedList`, `OrderedList` and `ListItem` are replaced by govuk-frontend-react's `List`. Use plain `li` elements for items.

| 0.x                                                      | 1.0                                       |
| -------------------------------------------------------- | ----------------------------------------- |
| `import UnorderedList from 'govuk-react/unordered-list'` | `import { List } from 'govuk-react/list'` |
| `<UnorderedList>`                                        | `<List variant="bullet">`                 |
| `<OrderedList>`                                          | `<List variant="number">`                 |
| `listStyleType="none"`                                   | `<List>` (no variant)                     |
| `<ListItem>`                                             | `<li>`                                    |
| `mb={n}` on the list                                     | `marginBottom={n}`                        |

`List` renders an `ol` for `variant="number"` and a `ul` otherwise. Other `listStyleType` values and the whitespace props have no equivalent. `spaced` adds govuk-frontend's extra space between items.
