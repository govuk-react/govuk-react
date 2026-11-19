# govuk-react

## 1.0.0-alpha.1

### Patch Changes

- d3e258a: Build with `tsc` instead of tsup: each source module is published as its own file, with no bundling, so shared modules exist once whichever entries you import. This fixes 20 component entries (such as `govuk-react/input`, `govuk-react/table` and `govuk-react/footer`) that were published without their exports, and adds `Input`, `Select`, `Textarea` and `WarningText` back to the package root.
- a3c9e0f: Fix form library integration: the character count and conditional reveals follow values a script sets, such as React Hook Form's `setValue`, and a form reset; a shown password stays shown when React updates the input or a form library validates with a hidden submit button; and `aria-describedby` lists each id once.

## 1.0.0-alpha.0

### Major Changes

- 75d8f21: `BackLink` is now govuk-frontend-react's `BackLink`. Use `asChild` in place of `as` for router links. See MIGRATION.md.
- b6a1fb3: `Paragraph` and `LeadParagraph` are replaced by govuk-frontend-react's `Body`. Children are rendered as given and no longer parsed as markdown. See MIGRATION.md.
- 04321c8: `Breadcrumbs` is now govuk-frontend-react's `Breadcrumbs` parts. Use `Breadcrumbs.Composite` with `Breadcrumbs.ItemComposite` children. See MIGRATION.md.
- 586ab52: `Caption` is now govuk-frontend-react's `Caption`, with a required `size` of `xl`, `l` or `m`. See MIGRATION.md.
- a5bd628: `Details` is now govuk-frontend-react's `Details` parts. Use `Details.Composite`. See MIGRATION.md.
- b85988f: `DocumentFooterMetadata` is now a module of parts with no CSS-in-JS, rendering a description list. Use `DocumentFooterMetadata.Composite`. See MIGRATION.md.
- a31dc02: `ErrorSummary` is now govuk-frontend-react's `ErrorSummary` parts. Use `ErrorSummary.Composite` with `ErrorSummary.ListItemComposite` children that link to each field. See MIGRATION.md.
- d9f4fd3: Single components now have flat names, from govuk-frontend-react 1.0.0-alpha.5. `Button.Composite` and `Button.Root` are `Button`, and `<Button.Composite start>` is `StartButton`. `Input.Control` and `Input.Field` are `Input` and `InputField`, and the same goes for `Select`, `Textarea` and `FileUpload`. `WarningText.Composite` is `WarningText`, with no parts. The improved file upload is a module of parts, `EnhancedFileUpload`, and `FileUpload.EnhancedField` is `EnhancedFileUpload.Field`.
- dc5c2d4: The form components are now govuk-frontend-react's: `Button`, `Checkboxes`, `Radios`, `DateInput`, `Input`, `Textarea`, `Select`, `FileUpload`, `Fieldset`, `FormGroup`, `Label`, `Hint` and `ErrorMessage`. `Checkbox`, `Radio`, `MultiChoice`, `DateField`, `InputField`, `TextArea`, `LabelText`, `HintText` and `ErrorText` are removed. See MIGRATION.md.
- c63d3f6: `Heading` is now govuk-frontend-react's `Heading` (`size` of `xl`, `l`, `m` or `s`, and `headingLevel`). `H1` to `H6` are removed. govuk-frontend is a new peer dependency. See MIGRATION.md.
- c19aa57: `InsetText` is now govuk-frontend-react's `InsetText`. See MIGRATION.md.
- 17aa1b1: The layout components are now govuk-frontend-react's: `GridRow`, `GridColumn` (was `GridCol`), `WidthContainer` (replaces `Main`), `MainWrapper` and `Footer`. `Page` is rebuilt on them, wraps the header and footer in landmarks, and loses its attached parts and default header. `GlobalStyle` is removed. See MIGRATION.md.
- 1b923f2: `Link` is now govuk-frontend-react's `Link`. Use `variant` in place of `muted` and `textColour`, and `asChild` in place of `as` for router links. See MIGRATION.md.
- 76072d3: `UnorderedList`, `OrderedList` and `ListItem` are replaced by govuk-frontend-react's `List`, with plain `li` elements as items. See MIGRATION.md.
- 699dbe2: `LoadingBox` announces `statusText` (replacing `title`) in a status region, shows the text instead of the spinner when users prefer reduced motion, and can make its content inert while loading with `inertWhileLoading`. Its JSDoc covers repeat submissions, focus and errors. See MIGRATION.md.
- 90b01fb: `LoadingBox` no longer uses CSS-in-JS: its styles are a hoisted stylesheet with CSS custom properties. It's now a named export only, takes any CSS colour, and sets `aria-busy` while loading. See MIGRATION.md.
- 6c001a0: `Pagination` is now govuk-frontend-react's `Pagination` parts. Use `Pagination.Composite` with `previousHref`, `nextHref` and `Pagination.ItemComposite` children. See MIGRATION.md.
- f3ddc98: `Panel` is now govuk-frontend-react's `Panel` parts. Use `Panel.Composite`. See MIGRATION.md.
- 1085d4e: `PhaseBanner` is now govuk-frontend-react's `PhaseBanner` parts. Use `PhaseBanner.Composite` with a `tag` prop in place of `level`. See MIGRATION.md.
- b85988f: `RelatedItems` is now a module of parts with no CSS-in-JS. Use `RelatedItems.Composite` with `RelatedItems.SectionComposite` children. See MIGRATION.md.
- 4feea0f: Remove styled-components and the remaining 0.x code: the `lib`, `constants` and `icons` modules, the `SearchIcon`, `ArrowLeft`, `Spinner` and `ButtonArrow` exports, and the `govuk-colours` dependency. styled-components is no longer a peer dependency. See MIGRATION.md for replacements.
- 0babdef: Remove `TopNav`. Use `Header` and `ServiceNavigation`. See MIGRATION.md.
- bf890b4: `SearchBox` is now a module of parts with no CSS-in-JS, based on GOV.UK's search component, with a visible label, `large` and `inverse` variants. Use `SearchBox.Composite`. See MIGRATION.md.
- 4bc3794: `SectionBreak` is now govuk-frontend-react's `SectionBreak`. The `level` prop is renamed `size` (`xl`, `l` or `m`). See MIGRATION.md.
- bb53db6: govuk-react is now a single ESM-only package that requires React 19. The `@govuk-react/*` packages are replaced by subpath imports such as `govuk-react/date-field`.
- 077bc26: `SkipLink` is now govuk-frontend-react's `SkipLink`. It no longer has default text, so pass `children`. See MIGRATION.md.
- b9e4e5b: `Table` is now govuk-frontend-react's `Table` parts. Use `Table.Composite`, whose `head` takes header cells rather than a row. govuk-react also exports `overrideClasses`. See MIGRATION.md.
- b81e7ec: `Tabs` is now govuk-frontend-react's Tabs markup with tab behaviour from `@govuk-react/primitives`: tabs from tablet width up, and links to panels below it or without JavaScript. Select tabs with `defaultValue`, or `value` and `onValueChange`. `RadiosComposite`, or `RadiosRoot` with `RadioTab` and `RadioPanel`, switch tabs without JavaScript too. See MIGRATION.md.
- 4ec3a74: `Tag` is now govuk-frontend-react's `Tag`. `tint` is replaced by `colour`, and `inactive` is removed. See MIGRATION.md.
- 609bc27: `VisuallyHidden` is now govuk-frontend-react's `VisuallyHidden`. The `focusable`, `important` and `as` props are removed. See MIGRATION.md.
- 5ae93da: `WarningText` is now govuk-frontend-react's `WarningText` parts. Use `WarningText.Composite` for basic usage. See MIGRATION.md.

### Minor Changes

- a3d1018: New `Accordion`: govuk-frontend-react's markup, with behaviour from `@govuk-react/primitives`. As in govuk-frontend, every section is shown without JavaScript. Once JavaScript runs, each heading is a button that shows and hides its section, with "Show all sections", find in page and remembered sections. Sections open with `defaultValue`, or `value` and `onValueChange`.
- 2f6fc22: `Button` now behaves as govuk-frontend's does, with a new `Button` primitive in `@govuk-react/primitives`. With `preventDoubleClick`, a second click within a second of the first is ignored, so a form isn't submitted twice, and `onClick` doesn't run twice. Space activates a link button.
- f56f656: New `CharacterCount`: govuk-frontend-react's markup, with the count from `@govuk-react/primitives`. Without JavaScript the field shows how much users can enter. Once JavaScript runs, the count updates as users type, and screen readers hear it when they pause, as in govuk-frontend.
- 88bb0ee: `Radios` and `Checkboxes`: conditional reveals now work, with behaviour from a new `Choices` primitive in `@govuk-react/primitives`. Before or without JavaScript, a reveal shows only while its option is checked, where the browser supports `:has()`. `Checkboxes` items take `exclusive` for an option such as "None of these", which unchecks the others once JavaScript runs.
- 9e4c211: New `ExitThisPage`: govuk-frontend-react's markup, with behaviour from a new `ExitThisPage` primitive in `@govuk-react/primitives`. As in govuk-frontend, without JavaScript the button is a link to a safe page. Once JavaScript runs, the button, `ExitThisPage.SkipLink`, or pressing Shift 3 times hides the page and goes to the button's `href`, with an indicator and screen reader messages counting the presses.
- 24a4eaf: New `FileUpload.EnhancedField`: govuk-frontend's improved file upload, with behaviour from a new `FileUpload` primitive in `@govuk-react/primitives`. Without JavaScript it's the native file input. Once JavaScript runs, users choose a file with the button or drop one on it, and the button says which files are chosen. `FileUpload.Field` is the native file input, and no longer takes `javascript` or the improved component's text.
- 4344623: `ErrorSummary`, `NotificationBanner` and `SkipLink` now move focus as govuk-frontend's do, with new `AutoFocus` and `FocusLinks` primitives in `@govuk-react/primitives`. An error summary, or a success banner, takes focus when it appears, and is rendered with `autofocus`, so it takes focus when the page loads even without JavaScript. Error summary links focus their field with its label or legend in view, and the skip link focuses the main content.
- 118070c: Update govuk-frontend-react to 1.0.0-alpha.2, which adds `asChild` to `Breadcrumbs.Link` for router links.
- 6c001a0: Update govuk-frontend-react to 1.0.0-alpha.4, which adds `asChild` for router links to the Pagination, SummaryList, TaskList, ServiceNavigation, NotificationBanner and Footer link parts.
- d0118c7: Add `SummaryList`, `TaskList`, `NotificationBanner`, `CookieBanner`, `Header`, `GenericHeader`, `LanguageNavigation` and `Feedback` from govuk-frontend-react.
- ecaca00: New `Modal`: a modal dialog on GOV.UK styles, with behaviour from `@govuk-react/primitives`. It's a native `dialog` opened with invoker commands, so it's a true modal without JavaScript where the browser supports them, with a script fallback where it doesn't.
- 0940723: New `PasswordInput`: govuk-frontend-react's markup, with the show and hide button from `@govuk-react/primitives`. Without JavaScript it is a password field with no button.
- 72ddcfc: New `SearchBox.AutocompleteComposite`, based on GOV.UK's search with autocomplete, with an `Autocomplete` primitive in `@govuk-react/primitives` ported from accessible-autocomplete. Without JavaScript it's a plain search box. Once JavaScript runs, it suggests searches from 3 characters, and choosing one submits the form. Pass `suggestions`, such as from `onQueryChange`.
- 44c6199: `ServiceNavigation`'s menu works. `Menu` (with `Toggle`) is govuk-frontend's menu button, with behaviour from `@govuk-react/primitives`: without JavaScript the navigation is always shown. `DetailsMenu` (with `Summary`) is a native `details` that works without JavaScript. `Composite` uses `Menu` and the new `DetailsComposite` uses `DetailsMenu`. Both menus and composites take `open` and `onOpenChange`, to close the menu after navigating in a single-page app. `Wrapper` is govuk-frontend-react's `nav` again.
- 0babdef: Add `ServiceNavigation` from govuk-frontend-react.

### Patch Changes

- 49baf9e: Document serving govuk-frontend's font and image assets, and when to use the GDS Transport font.
- ce5b6e9: A `Modal` opened before React hydrates is now reported through `onOpenChange` once it does, so a controlled modal's state matches the open dialog.
