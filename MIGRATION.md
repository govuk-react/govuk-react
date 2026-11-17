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

## Caption

`Caption` is now govuk-frontend-react's `Caption`. It's a named export.

| 0.x                                         | 1.0                                             |
| ------------------------------------------- | ----------------------------------------------- |
| `import Caption from 'govuk-react/caption'` | `import { Caption } from 'govuk-react/caption'` |
| `<Caption>` (no size)                       | `<Caption size="xl">`                           |
| `size="XL"` / `"XLARGE"` / `27`             | `size="xl"`                                     |
| `size="L"` / `"LARGE"` / `24`               | `size="l"`                                      |
| `size="M"` / `"MEDIUM"` / `19`              | `size="m"`                                      |

`size` is now required, and numeric sizes are no longer accepted. There is no equivalent for the whitespace props (`mb`, `margin`, `padding` and so on).

## SectionBreak

`SectionBreak` is now govuk-frontend-react's `SectionBreak`. It's a named export.

| 0.x                                                    | 1.0                                                        |
| ------------------------------------------------------ | ---------------------------------------------------------- |
| `import SectionBreak from 'govuk-react/section-break'` | `import { SectionBreak } from 'govuk-react/section-break'` |
| `level="XL"` / `"XLARGE"`                              | `size="xl"`                                                |
| `level="L"` / `"LARGE"`                                | `size="l"`                                                 |
| `level="M"` / `"MEDIUM"`                               | `size="m"`                                                 |
| `visible`                                              | `visible`                                                  |

There is no equivalent for the whitespace props (`mb`, `margin`, `padding` and so on).

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

## InsetText

`InsetText` is now govuk-frontend-react's `InsetText`. It's a named export, and the whitespace props (`mb`, `margin`, `padding` and so on) are removed.

| 0.x                                              | 1.0                                                  |
| ------------------------------------------------ | ---------------------------------------------------- |
| `import InsetText from 'govuk-react/inset-text'` | `import { InsetText } from 'govuk-react/inset-text'` |

## WarningText

`WarningText` is now govuk-frontend-react's `WarningText`, a module of parts. `WarningText.Composite` renders the whole component, and `Root`, `Icon`, `Text` and `TextComposite` are available for custom markup.

| 0.x                                                  | 1.0                                                       |
| ---------------------------------------------------- | --------------------------------------------------------- |
| `import WarningText from 'govuk-react/warning-text'` | `import * as WarningText from 'govuk-react/warning-text'` |
| `<WarningText>`                                      | `<WarningText.Composite>`                                 |

The composite adds govuk-frontend's visually hidden "Warning" text before the message. Change it with `iconFallbackText`. The whitespace props (`mb` and so on) are removed.

## Tag

`Tag` is now govuk-frontend-react's `Tag`. It's a named export, and `tint` is replaced by govuk-frontend's `colour`.

| 0.x                                 | 1.0                                             |
| ----------------------------------- | ----------------------------------------------- |
| `import Tag from 'govuk-react/tag'` | `import { Tag } from 'govuk-react/tag'`         |
| `tint="SOLID"` (default)            | no `colour` (govuk-frontend's default blue tag) |
| `tint="GREY"` or `inactive`         | `colour="grey"`                                 |
| `tint="GREEN"`                      | `colour="green"`                                |
| `tint="TURQUOISE"`                  | `colour="teal"`                                 |
| `tint="BLUE"`                       | `colour="blue"`                                 |
| `tint="PURPLE"`                     | `colour="purple"`                               |
| `tint="PINK"`                       | `colour="magenta"`                              |
| `tint="RED"`                        | `colour="red"`                                  |
| `tint="ORANGE"`                     | `colour="orange"`                               |
| `tint="YELLOW"`                     | `colour="yellow"`                               |

govuk-frontend's tags are no longer uppercase, and the default is a light blue tag rather than solid blue. `light-blue` is a new colour. Custom `backgroundColor` and `color` props are removed.

## PhaseBanner

`PhaseBanner` is now govuk-frontend-react's `PhaseBanner`, a module of parts. `PhaseBanner.Composite` renders the whole banner, and `Root`, `Content`, `Tag` and `Text` are available for custom markup.

| 0.x                                                  | 1.0                                                       |
| ---------------------------------------------------- | --------------------------------------------------------- |
| `import PhaseBanner from 'govuk-react/phase-banner'` | `import * as PhaseBanner from 'govuk-react/phase-banner'` |
| `<PhaseBanner level="alpha">`                        | `<PhaseBanner.Composite tag="Alpha">`                     |

The whitespace props (`mb` and so on) are removed.

## Details

`Details` is now govuk-frontend-react's `Details`, a module of parts. `Details.Composite` renders the whole component, and `Root`, `Summary`, `SummaryText` and `Text` are available for custom markup.

| 0.x                                         | 1.0                                              |
| ------------------------------------------- | ------------------------------------------------ |
| `import Details from 'govuk-react/details'` | `import * as Details from 'govuk-react/details'` |
| `<Details summary="Help">`                  | `<Details.Composite summary="Help">`             |

The whitespace props (`mb` and so on) are removed.

## Panel

`Panel` is now govuk-frontend-react's `Panel`, a module of parts. `Panel.Composite` renders the whole panel, and `Root`, `Title`, `Body` and `Actions` are available for custom markup. The composite also takes `headingLevel`, `variant` and `actions`.

| 0.x                                     | 1.0                                              |
| --------------------------------------- | ------------------------------------------------ |
| `import Panel from 'govuk-react/panel'` | `import * as Panel from 'govuk-react/panel'`     |
| `<Panel title="Application complete">`  | `<Panel.Composite title="Application complete">` |

## VisuallyHidden

`VisuallyHidden` is now govuk-frontend-react's `VisuallyHidden`, a `span` with the `govuk-visually-hidden` class.

| 0.x                                                        | 1.0                                                            |
| ---------------------------------------------------------- | -------------------------------------------------------------- |
| `import VisuallyHidden from 'govuk-react/visually-hidden'` | `import { VisuallyHidden } from 'govuk-react/visually-hidden'` |

The `focusable` prop is removed, as govuk-frontend 6 no longer has a focusable variant. Hidden content that appears on focus is confusing for sighted keyboard users; use a visible control or `SkipLink` instead. The `important` and `as` props are also removed.

## Link

`Link` is now govuk-frontend-react's `Link`, an `a` with the `govuk-link` class.

| 0.x                                            | 1.0                                                             |
| ---------------------------------------------- | --------------------------------------------------------------- |
| `import Link from 'govuk-react/link'`          | `import { Link } from 'govuk-react/link'`                       |
| `<Link muted>`                                 | `<Link variant="muted">`                                        |
| `<Link textColour>`                            | `<Link variant="text-colour">`                                  |
| `<Link as={RouterLink} to="/page">Page</Link>` | `<Link asChild><RouterLink to="/page">Page</RouterLink></Link>` |

`noVisitedState` is unchanged. `Link` also gains `variant="inverse"` and `noUnderline`.

## BackLink

`BackLink` is now govuk-frontend-react's `BackLink`. It still defaults to the text "Back" and `href="#"`.

| 0.x                                                | 1.0                                                                 |
| -------------------------------------------------- | ------------------------------------------------------------------- |
| `import BackLink from 'govuk-react/back-link'`     | `import { BackLink } from 'govuk-react/back-link'`                  |
| `<BackLink as={RouterLink} to="/">Back</BackLink>` | `<BackLink asChild><RouterLink to="/">Back</RouterLink></BackLink>` |

The whitespace props (`mb` and so on) are removed. `BackLink` gains an `inverse` prop.

## SkipLink

`SkipLink` is now govuk-frontend-react's `SkipLink`. It still defaults to `href="#content"`, but no longer has default text, so pass the text as `children`. `Page` passes "Skip to main content".

| 0.x                                            | 1.0                                                |
| ---------------------------------------------- | -------------------------------------------------- |
| `import SkipLink from 'govuk-react/skip-link'` | `import { SkipLink } from 'govuk-react/skip-link'` |
| `<SkipLink />`                                 | `<SkipLink>Skip to main content</SkipLink>`        |

The `as` prop is removed.

## Form controls

The form components are now govuk-frontend-react's. Each control is a module of parts with a `Field` composite that renders the label or legend, hint and error message for you. The `input`/`meta` props (the old Redux Form and Final Form shape) are gone, as are Button's `icon` and colour props, and `DateField.Container` and `DateField.Input`: pass `value`, `onChange`, `ref` and other DOM props directly, and pass the error text as `errorMessage`. The whitespace props (`mb` and so on) are removed.

| 0.x                                                          | 1.0                                                                                                                                                 |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<Button>`                                                   | `<Button.Composite>` (`Button.Root` for custom markup)                                                                                              |
| `<Button start>`                                             | `<Button.Composite start>`                                                                                                                          |
| `<Button buttonColour="…">` and the other colour props       | removed: use `variant` (`secondary`, `warning` or `inverse`) or your own CSS                                                                        |
| `<Button as={RouterLink} to="/">`                            | `<Button.Composite as={RouterLink} to="/">`                                                                                                         |
| `<InputField hint="…" input={…} meta={…}>Label</InputField>` | `<Input.Field id="…" name="…" label="Label" hint="…" errorMessage={error} />`                                                                       |
| `<Input>`                                                    | `<Input.Control>`                                                                                                                                   |
| `<TextArea>`                                                 | `<Textarea.Field>` (`Textarea.Control` for the bare control)                                                                                        |
| `<Select label="…">`                                         | `<Select.Field label="…">` (`Select.Control` for the bare control)                                                                                  |
| `<FileUpload acceptedFormats="…">Label</FileUpload>`         | `<FileUpload.Field id="…" name="…" label="Label" accept="…" />`                                                                                     |
| `<Checkbox hint="…" sizeVariant="SMALL">Label</Checkbox>`    | `<Checkboxes.ItemComposite id="…" name="…" value="…" label="Label" hint="…" />` inside `<Checkboxes.Field idPrefix="…" legend="…" small>`           |
| `<MultiChoice label="…">` with `<Radio inline>`              | `<Radios.Field idPrefix="…" legend="…" inline>` with `<Radios.ItemComposite id="…" label="…" />`                                                    |
| `<DateField errorText hintText defaultValues inputNames>`    | `<DateInput.Field id="…" legend="…" errorMessage hint values namePrefix>`; for controlled inputs or other names, pass `DateInput.Item`s as children |
| `<Fieldset>` with `<Fieldset.Legend size="M">`               | `<Fieldset.Composite legend="…" legendSize="m">`                                                                                                    |
| `<Label>` wrapping `<LabelText>`                             | `<Label htmlFor="…">` or `<LabelComposite isPageHeading>`                                                                                           |
| `<HintText>`                                                 | `<Hint>`                                                                                                                                            |
| `<ErrorText>`                                                | `<ErrorMessageComposite>` (adds the visually hidden "Error:" prefix) or `<ErrorMessage>`                                                            |
| `<FormGroup error>`                                          | `<FormGroup error>` (named import)                                                                                                                  |

Subpath imports follow the new names: `govuk-react/checkboxes`, `govuk-react/radios`, `govuk-react/date-input`, `govuk-react/textarea`, `govuk-react/hint` and `govuk-react/error-message`. `govuk-react/checkbox`, `radio`, `multi-choice`, `date-field`, `input-field`, `text-area`, `label-text`, `hint-text` and `error-text` are removed.

`Checkboxes.Field`, `Radios.Field` and `DateInput.Field` need an id prefix or id, because govuk-frontend uses it to link hints and errors with `aria-describedby`. `DateInput.Field` no longer manages the day, month and year state; see the example application's `DateOfBirth` for a controlled version.

## Layout

The layout components are now govuk-frontend-react's. The whitespace props (`mb` and so on) are removed.

| 0.x                                                               | 1.0                                                                                                             |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `<GridRow>`                                                       | `<GridRow>` (named import)                                                                                      |
| `<GridCol setWidth="one-half">` or `<GridCol columnOneHalf>`      | `<GridColumn width="one-half">`                                                                                 |
| `<GridCol setDesktopWidth="one-third">`                           | `<GridColumn width="one-third-from-desktop">` (a different tablet width as well needs your own class)           |
| `<Main>` (a centred container)                                    | `<WidthContainer>`, with `<MainWrapper>` inside for a `<main>` landmark                                         |
| `<Page.Main>`                                                     | `<MainWrapper>`                                                                                                 |
| `<Page.WidthContainer>` or `<Footer.WidthContainer>`              | `<WidthContainer>`                                                                                              |
| `<Footer>`                                                        | `<Footer.Composite>`                                                                                            |
| `<Footer>` children (navigation)                                  | `navigation` prop                                                                                               |
| `<Footer meta={…}>`                                               | `metaLinks` and `metaContent` props                                                                             |
| `<Footer.MetaLinks heading="…">`                                  | `metaHeading` prop                                                                                              |
| `<Footer.MetaLinks>`, `<Footer.Link>`                             | `<Footer.InlineListItem>` and `<Footer.Link>` inside `metaLinks`                                                |
| `<Footer.Navigation>`, `<Footer.NavigationLinks listColumns={2}>` | `<Footer.Section>`, `<Footer.Heading>`, `<Footer.List columns={2}>` and `<Footer.ListItem>` inside `navigation` |
| `<GlobalStyle />`                                                 | removed: govuk-frontend's CSS styles the page                                                                   |

`GridColumn` needs a `width`, and custom column widths (`setWidth="25%"`) are removed. `Footer.Composite` shows the crown, the Open Government Licence and "© Crown copyright" by default. The old footer showed no copyright unless given one; `copyright` is now the text to show, and its `link` and `image` are removed.

`Page` keeps `header`, `footer`, `beforeChildren` and `id`, and gains `skipLinkText`. It wraps `header` and `footer` in `<header>` and `<footer>` landmarks, as govuk-frontend's template does. It no longer defaults the header to `TopNav`, and the `main` and `container` overrides and the `Page.Main` and `Page.WidthContainer` properties are removed: for a custom layout, compose `SkipLink`, `WidthContainer` and `MainWrapper` yourself. The main wrapper's id now defaults to `main-content`, matching govuk-frontend.

## Breadcrumbs

`Breadcrumbs` is now govuk-frontend-react's `Breadcrumbs`, a module of parts. `Breadcrumbs.Composite` renders the nav and list, and each `Breadcrumbs.ItemComposite` renders a link, or the current page when it has no `href`. `Root`, `List`, `Item` and `Link` are available for custom markup. The composite also takes `collapseOnMobile` and `inverse`.

| 0.x                                                 | 1.0                                                                                                                       |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `import Breadcrumbs from 'govuk-react/breadcrumbs'` | `import * as Breadcrumbs from 'govuk-react/breadcrumbs'`                                                                  |
| `<Breadcrumbs>`                                     | `<Breadcrumbs.Composite>`                                                                                                 |
| `<Breadcrumbs.Link href="/section">`                | `<Breadcrumbs.ItemComposite href="/section">`                                                                             |
| Plain text child for the current page               | `<Breadcrumbs.ItemComposite>Current page</Breadcrumbs.ItemComposite>`                                                     |
| `<Breadcrumbs.Link as={RouterLink} to="/section">`  | `<Breadcrumbs.Link asChild><RouterLink to="/section">Section</RouterLink></Breadcrumbs.Link>` inside a `Breadcrumbs.Item` |
| `mb` and other whitespace props                     | `className`                                                                                                               |

## ErrorSummary

`ErrorSummary` is now govuk-frontend-react's `ErrorSummary`, a module of parts. `ErrorSummary.Composite` renders the whole summary, and each `ErrorSummary.ListItemComposite` links to a field by its id. `Root`, `Alert`, `Title`, `Body`, `Description`, `List`, `ListItem` and `ListItemLink` are available for custom markup.

Error links are now plain fragment links (`href="#field-id"`), so they work without JavaScript. govuk-react no longer handles clicks on them. The summary now has `role="alert"`, so screen readers announce it when it appears.

| 0.x                                                       | 1.0                                                                                                                                                                |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `import ErrorSummary from 'govuk-react/error-summary'`    | `import * as ErrorSummary from 'govuk-react/error-summary'`                                                                                                        |
| `<ErrorSummary heading="There is a problem">`             | `<ErrorSummary.Composite title="There is a problem">`                                                                                                              |
| `errors={[{ targetName: 'name', text: 'Enter a name' }]}` | `<ErrorSummary.ListItemComposite href="#name">Enter a name</ErrorSummary.ListItemComposite>` children, or `errors={[{ href: '#name', children: 'Enter a name' }]}` |
| `onHandleErrorClick`                                      | Removed. For custom handling, use `ListItem` and `ListItemLink` parts with your own `onClick`                                                                      |
| `heading` defaulted to "There is a problem"               | `title` is required                                                                                                                                                |
| `mb` and other whitespace props                           | `className`                                                                                                                                                        |

## Table

`Table` is now govuk-frontend-react's `Table`, a module of parts. `Table.Composite` renders the table, with `caption`, `captionSize` and `head` props, and its children are the body rows. `Root`, `Caption`, `Head`, `Body`, `Row`, `Header`, `ColumnHeader`, `RowHeader` and `Cell` are available for custom markup.

`head` now takes the header cells, not a row: the composite wraps them in a row.

govuk-react now exports `overrideClasses`, which returns govuk-frontend's override classes (`govuk-!-*`) for typed props such as `width`, `textAlign` and `marginBottom`.

| 0.x                                     | 1.0                                                                |
| --------------------------------------- | ------------------------------------------------------------------ |
| `import Table from 'govuk-react/table'` | `import * as Table from 'govuk-react/table'`                       |
| `<Table>`                               | `<Table.Composite>`                                                |
| `body={rows}`                           | Children                                                           |
| `head={<Table.Row>{cells}</Table.Row>}` | `head={cells}`                                                     |
| `<Table.Header>` (the `thead`)          | `<Table.Head>`                                                     |
| `<Table.CellHeader>` in the head        | `<Table.ColumnHeader>`                                             |
| `<Table.CellHeader>` in a body row      | `<Table.RowHeader>`                                                |
| `<Table.Cell alignRight>`               | `<Table.Cell className={overrideClasses({ textAlign: 'right' })}>` |
| `<Table.Cell bold>`                     | `<Table.Cell className={overrideClasses({ fontWeight: 'bold' })}>` |
| `setWidth="one-half"` (fluid widths)    | `className={overrideClasses({ width: 'one-half' })}`               |
| `setWidth="22%"` (other widths)         | `style={{ width: '22%' }}`                                         |
| `numeric`                               | `numeric` (unchanged)                                              |
| `mb` and other whitespace props         | `className={overrideClasses({ marginBottom: n })}`                 |

## Pagination

`Pagination` is now govuk-frontend-react's `Pagination`, a module of parts. `Pagination.Composite` renders the nav, previous and next links, and the list of pages from its `Pagination.ItemComposite` children. With no list, the previous and next links stack as a block, for navigating between related pages. `Root`, `Previous`, `Next`, `PreviousLink`, `NextLink`, `List`, `Item` and `ItemLink` are available for custom markup.

| 0.x                                                           | 1.0                                                                                                                   |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `import Pagination from 'govuk-react/pagination'`             | `import * as Pagination from 'govuk-react/pagination'`                                                                |
| `<Pagination>`                                                | `<Pagination.Composite>`                                                                                              |
| `<Pagination.Anchor href="/prev" previousPage pageTitle="…">` | `previousHref="/prev"`, with `previousText` for the link text and `previousLabel` for the page title                  |
| `<Pagination.Anchor href="/next" nextPage pageTitle="…">`     | `nextHref="/next"`, with `nextText` and `nextLabel`                                                                   |
| No numbered pages                                             | `<Pagination.ItemComposite href="/page-2" number={2} current />` children, with `ellipsis` for gaps                   |
| `<Pagination.Anchor as={RouterLink} to="/next" nextPage>`     | `<Pagination.NextLink asChild><RouterLink to="/next">…</RouterLink></Pagination.NextLink>` inside a `Pagination.Next` |
| `mb` and other whitespace props                               | `className`                                                                                                           |

## TopNav

`TopNav` is removed. Use `Header` for the GOV.UK header and `ServiceNavigation` for your service name and navigation, as the Design System recommends. Their link parts take `asChild` for router links.

| 0.x                                                    | 1.0                                                                                                                    |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `<TopNav>`                                             | `<Header.Composite />` followed by `<ServiceNavigation.Composite>`                                                     |
| `serviceTitle`                                         | `serviceName` and `serviceHref` on `ServiceNavigation.Composite`                                                       |
| `<TopNav.NavLink href="/forms">Forms</TopNav.NavLink>` | `<ServiceNavigation.ItemComposite href="/forms">Forms</ServiceNavigation.ItemComposite>`                               |
| `<TopNav.NavLink as={RouterLink} to="/forms">`         | `<ServiceNavigation.Link asChild><RouterLink to="/forms">Forms</RouterLink></ServiceNavigation.Link>` inside an `Item` |
| `company`                                              | `productName` on `Header.Composite`, or `Header` parts                                                                 |
| `search`                                               | Removed: place a search form in your page                                                                              |
| `bgColor`, `color`                                     | Removed: the header uses govuk-frontend's styles                                                                       |

## LoadingBox

`LoadingBox` no longer uses styled-components or react-transition-group. Its styles are a small stylesheet that React hoists into the head, with your props passed in as CSS custom properties, so it works with server rendering and without a CSS-in-JS runtime.

| 0.x                                                | 1.0                                                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `import LoadingBox from 'govuk-react/loading-box'` | `import { LoadingBox } from 'govuk-react/loading-box'`                                           |
| `spinnerColor`, `backgroundColor` took hex colours | Any CSS colour. They default to govuk-frontend's text and page background colours                |
| The overlay unmounted when `loading` was `false`   | The overlay stays in the DOM, hidden, so it can fade out. The box sets `aria-busy` while loading |

## RelatedItems

`RelatedItems` is now a module of parts with no CSS-in-JS. `RelatedItems.Composite` renders the main heading (“Related content” by default), and each `RelatedItems.SectionComposite` renders a labelled navigation section with a heading and a list of `RelatedItems.Item`s. `Root`, `Heading`, `Section`, `SectionHeading` and `List` are available for custom markup. The blue top border comes from a small stylesheet that React hoists into the head.

| 0.x                                                    | 1.0                                                                      |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| `import RelatedItems from 'govuk-react/related-items'` | `import * as RelatedItems from 'govuk-react/related-items'`              |
| `<RelatedItems>` with your own headings and lists      | `<RelatedItems.Composite>`, or `<RelatedItems.Root>` for your own markup |
| `<H3>Travel</H3><UnorderedList listStyleType="none">…` | `<RelatedItems.SectionComposite title="Travel"><RelatedItems.Item>…`     |
| `mb` and other whitespace props                        | `className`                                                              |

## DocumentFooterMetadata

`DocumentFooterMetadata` is now a module of parts with no CSS-in-JS. It renders a description list (`dl`) with govuk-frontend classes. `DocumentFooterMetadata.Composite` keeps the `from`, `partOf` and `other` props, and also takes `ItemComposite` children. `Root`, `Term` and `Definition` are available for custom markup.

| 0.x                                                                         | 1.0                                                                                                        |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `import DocumentFooterMetadata from 'govuk-react/document-footer-metadata'` | `import * as DocumentFooterMetadata from 'govuk-react/document-footer-metadata'`                           |
| `<DocumentFooterMetadata from={…} partOf={…} other={…}>`                    | `<DocumentFooterMetadata.Composite from={…} partOf={…} other={…}>`                                         |
| `other={[{ id, title: 'Published', content: '20 January 2012' }]}`          | The same, or `<DocumentFooterMetadata.ItemComposite term="Published" definitions={['20 January 2012']} />` |
| `mb` and other whitespace props                                             | `className`                                                                                                |

## SearchBox

`SearchBox` is now a module of parts with no CSS-in-JS, based on GOV.UK’s search component. `SearchBox.Composite` renders a label, a `govuk-input` search input and a submit button with a search icon. Put it inside your own `form`. It takes `labelSize`, `labelVisuallyHidden`, `large` and `inverse`. `Root`, `Label`, `Wrapper`, `Input` and `Button` are available for custom markup. The layout and button styles come from a small stylesheet that React hoists into the head, using govuk-frontend's colour custom properties.

| 0.x                                                              | 1.0                                                                     |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `import SearchBox from 'govuk-react/search-box'`                 | `import * as SearchBox from 'govuk-react/search-box'`                   |
| `<SearchBox><SearchBox.Input /><SearchBox.Button /></SearchBox>` | `<SearchBox.Composite id="search" name="q" label="Search on GOV.UK" />` |
| `placeholder` as the only label                                  | `label`, visible by default. A placeholder is not a label               |
| `mb` and other whitespace props                                  | `className`                                                             |
