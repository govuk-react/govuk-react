# @govuk-react/primitives

Headless behaviour for design system components, as light-DOM custom elements with unstyled React parts over them. It ships no styles and no GOV.UK markup, so any library can use it. govuk-react's components are the reference implementation, built with govuk-frontend-react's markup.

Each primitive:

- works without JavaScript, through a fallback you choose
- upgrades to the full WAI-ARIA pattern when its custom element is defined, with or without React
- adds React props for its state once hydrated, where it has any, such as `value` and `onValueChange`, or `open` and `onOpenChange`
- takes `asChild` on its parts, so you render your own elements. A `Root` is the custom element, except Button's

Import each primitive from its own path, such as `@govuk-react/primitives/tabs`. Each path defines its element when imported.

## Without React

Each element is also exported on its own, with no React, from `@govuk-react/primitives/<name>-element`, such as `tabs-element`. Importing it defines the element, such as `<govuk-react-tabs>`. Render the same markup as the React parts do: the element finds its parts by `data-` attributes, takes its options as attributes, and reports changes with bubbling events named after it, such as `govuk-react-tabs:change`. The comment at the top of each element's source lists its markup, attributes and events:

[accordion](src/accordion/element.ts), [auto-focus](src/auto-focus/element.ts), [autocomplete](src/autocomplete/element.ts), [button](src/button/element.ts), [character-count](src/character-count/element.ts), [choices](src/choices/element.ts), [disclosure](src/disclosure/element.ts), [exit-this-page](src/exit-this-page/element.ts), [file-upload](src/file-upload/element.ts), [focus-links](src/focus-links/element.ts), [modal](src/modal/element.ts), [password-input](src/password-input/element.ts) and [tabs](src/tabs/element.ts).

Each element that changes how its markup shows sets `data-upgraded` on itself once upgraded, to style it apart from its fallback.

## Inline scripts

Each element is also built as a small, self-contained classic script, with no imports and no React, at `@govuk-react/primitives/inline/<name>-element.js`, such as `inline/tabs-element.js`. Inline the ones your page uses, so the markup is interactive as soon as it loads, before React has downloaded and hydrated. React's parts then pick up from the elements, including anything the user did before hydration. Each element is defined only once, whichever runs first: the inline script or React's bundle. So inline the scripts from the same version of this package as the one in your bundle.

To render them from React on the server, `inline-script` has each script as a string, and an `InlineScript` component:

```tsx
import { InlineScript, tabs } from '@govuk-react/primitives/inline-script';

<head>
  <InlineScript script={tabs} nonce={nonce} />
</head>;
```

The scripts are `accordion`, `autocomplete`, `autoFocus`, `button`, `characterCount`, `choices`, `disclosure`, `exitThisPage`, `fileUpload`, `focusLinks`, `modal`, `passwordInput` and `tabs`. `InlineScript` isn't a client component, so the scripts stay out of client bundles. A script React adds in the browser doesn't run, and isn't needed, since React's parts define their elements.

## Accordion

```tsx
import * as Accordion from '@govuk-react/primitives/accordion';

<Accordion.Root defaultValue={['web']}>
  <Accordion.Controls>
    <Accordion.ShowAll>
      <Accordion.ShowAllText />
    </Accordion.ShowAll>
  </Accordion.Controls>
  <Accordion.Section value="web">
    <h2>
      <Accordion.Fallback>Writing well for the web</Accordion.Fallback>
      <Accordion.Trigger>
        <Accordion.Label>Writing well for the web</Accordion.Label> <Accordion.ToggleText />
      </Accordion.Trigger>
    </h2>
    <Accordion.Content id="web-content">…</Accordion.Content>
  </Accordion.Section>
</Accordion.Root>;
```

Without JavaScript every section is shown under its `Fallback` heading. Each section also renders a hidden `Trigger` with the same heading, which the element shows on upgrade while hiding the fallback. Nothing is moved, so React can keep rendering the markup. Closed content gets `hidden="until-found"`, so find in page opens it. `Label`s name the trigger, followed by "Show this section" or "Hide this section".

`ShowAll` opens every section, or closes them all when every one is open. `value` and `onValueChange` control the open sections once hydrated, and a section opened before hydration is reported rather than undone. As in govuk-frontend, open sections are remembered for the session by content id, unless `rememberExpanded` is `false`. In an island without a `Root`, pass `defaultExpanded` to `Section`.

## Tabs

```tsx
import * as Tabs from '@govuk-react/primitives/tabs';

<Tabs.Root defaultValue="past-day">
  <Tabs.List>
    <Tabs.Trigger value="past-day">Past day</Tabs.Trigger>
    <Tabs.Trigger value="past-week">Past week</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="past-day">…</Tabs.Content>
  <Tabs.Content value="past-week">…</Tabs.Content>
</Tabs.Root>;
```

Each panel holds a hidden radio, and the radio group is the source of truth, as in the reference. Choosing a tab checks its radio, and the radio's native change updates the tabs and calls `onValueChange`.

The root sets how the tabs work without JavaScript, and its parts match it:

- `Root`, with `Trigger` and `Content`: each tab links to its panel, and every panel shows.
- `RadiosRoot`, with `RadioTrigger` and `RadioContent`: each tab is a label for a hidden radio in its panel, so tabs switch with no JavaScript when clicked. It needs `defaultValue` or `value`. Without JavaScript the labels can't be reached by keyboard, as in the reference. Pass `name` when tabs render in separate React roots, such as islands. `RadiosRoot` adds the fallback's CSS inline; under a strict CSP, add `radiosFallbackCss` to a stylesheet instead.

They are separate components rather than a prop, because a prop can change after the first render, and the markup each needs can't.

When controlled with `value`, a user's choice calls `onValueChange` and the tab changes only when `value` does. `value` applies once hydrated, so tabs still switch before then. `preHydration` sets what happens to a tab the user picked before React hydrated: `"ignore"` (the default) goes back to `value`, `"report"` calls `onValueChange` with it. When uncontrolled, the pick is always reported.

`orientation` (`"horizontal"` or `"vertical"`) sets the axis of the arrow keys.

`media` limits the tab behaviour to a media query, and can change. Below it, `Root`'s tabs are a list of links to panels, and `RadiosRoot`'s keep switching through their radios. With `Root`, the URL hash follows the selected tab, as in govuk-frontend.

Each `value` is also its panel's `id`, and its tab links to it, so it must be unique on the page and valid as an id. For another id, pass `id` to the panel and the matching `href` to its `Trigger`.

In an island without a root, pass `name` and `defaultSelected` to the triggers and panels. `upgradedClass`, `activeItemClass` and `hiddenContentClass` add classes for styles that key off classes rather than `data-state`, `aria-selected` and `hidden`.

Without React, the markup includes a hidden radio as the first child of each panel.

It follows the Tabs reference in [react-design-system-apis](https://github.com/penx/react-design-system-apis).

## Disclosure

```tsx
import * as Disclosure from '@govuk-react/primitives/disclosure';

<nav aria-label="Menu">
  <Disclosure.Root media="(min-width: 40.0625em)">
    <Disclosure.Toggle>Menu</Disclosure.Toggle>
    <Disclosure.Content asChild>
      <ul id="navigation">…</ul>
    </Disclosure.Content>
  </Disclosure.Root>
</nav>;
```

A button that shows and hides some content, such as a navigation menu on small screens. Without JavaScript the content is shown and the button hidden. While `media` matches, the content is always shown and the button hidden.

`open` and `onOpenChange` control it once hydrated, such as to close a menu after navigating. A user's click before hydration is reported through `onOpenChange` rather than undone. `defaultOpen` starts it open.

## Modal

```tsx
import * as Modal from '@govuk-react/primitives/modal';

<Modal.Root>
  <Modal.Trigger>Delete account</Modal.Trigger>
  <Modal.Content>
    <Modal.Title>Are you sure?</Modal.Title>
    <Modal.Close>Cancel</Modal.Close>
  </Modal.Content>
</Modal.Root>;
```

`Content` is a native `dialog`, and `Trigger` and `Close` are buttons with invoker commands (`command="show-modal"` and `command="close"`, with `commandfor` naming the dialog). Where the browser supports them (Chrome and Edge 135, Firefox 144, Safari 26.2), the dialog opens as a true modal without JavaScript: the page behind is inert, focus moves into the dialog and Escape closes it. In older browsers, the `<govuk-react-modal>` element runs the commands once its script loads.

`Title` names the dialog, so always include one, or pass `aria-label` to `Content`. Pass `closedby="any"` to `Content` to also close it when the user clicks outside it.

`open` and `onOpenChange` control the dialog once hydrated. In an island without a `Root`, pass `dialogId` to `Trigger` and `Close`, and `id` and `aria-labelledby` to `Content`.

## Character count

```tsx
import * as CharacterCount from '@govuk-react/primitives/character-count';

<CharacterCount.Root maxLength={200}>
  <label htmlFor="more-detail">Can you provide more detail?</label>
  <CharacterCount.Input id="more-detail" aria-describedby="more-detail-info" maxLength={200} />
  <CharacterCount.Description id="more-detail-info">You can enter up to 200 characters</CharacterCount.Description>
  <CharacterCount.Status />
  <CharacterCount.ScreenReaderStatus className="visually-hidden" />
</CharacterCount.Root>;
```

Without JavaScript the `Description` is shown and both statuses are hidden. On upgrade the element visually hides the description, removes the field's `maxlength` so users can see by how much they're over, and shows `Status`, which updates as the user types. As in govuk-frontend, `ScreenReaderStatus` updates once the user pauses, rather than on every key, and is hidden from screen readers below `threshold`.

`countType` is "length" (the default, as `maxlength` counts), "characters" (as users see them, such as an emoji as one) or "words". The messages are English by default, and take a message for each plural form. The statuses get `data-state` ("under", "at" or "over") for styling, or pass class names such as `overLimitClass`. The field's value is the state, so a value React sets is counted too.

## Autocomplete

```tsx
import * as Autocomplete from '@govuk-react/primitives/autocomplete';

<label htmlFor="country">Country</label>
<Autocomplete.Root onQueryChange={fetchCountries} onConfirm={setCountry}>
  <Autocomplete.Input id="country" name="country" />
  <Autocomplete.Listbox>
    {countries.map((country) => (
      <Autocomplete.Option key={country} value={country}>
        {country}
      </Autocomplete.Option>
    ))}
    <Autocomplete.NoResults />
  </Autocomplete.Listbox>
  <Autocomplete.Status />
  <Autocomplete.AssistiveHint />
</Autocomplete.Root>;
```

A port of GOV.UK's [accessible-autocomplete](https://github.com/alphagov/accessible-autocomplete) that enhances your own input. Without JavaScript the input is a plain input. On upgrade it's a combobox with accessible-autocomplete's behaviour: options that match the query show in the `Listbox`, Up and Down move focus through them, Enter, Space or a click confirms one, and Escape closes the menu. `Status` tells screen readers how many options there are once the user pauses, and `AssistiveHint` describes the input while the query is empty.

The input's value is the query, and the options are whatever you render, so there is nothing else to control. `onQueryChange` is called when options are due, such as to fetch them, including for a query typed before hydration. `filter` sets which options match the query: "contains" (the default), "starts-with", or "none" for options that already match, such as results from a server. Leave out `NoResults` to show nothing when no option matches.

`minLength` is the length the query needs before options show. `onConfirm` is called when the user confirms an option. With `submitOnConfirm`, confirming an option submits the form, and Enter submits it while no option is highlighted. As in accessible-autocomplete, focus leaving a highlighted option confirms it, unless `confirmOnBlur` is `false`. The status messages are English by default, and take a message for each plural form.

Not ported from accessible-autocomplete: `showAllValues` and its dropdown arrow, `enhanceSelectElement`, `autoselect` and its inline hint, `displayMenu` (style the `Listbox` instead) and the iOS position workaround.

accessible-autocomplete is Copyright (c) 2017 Crown Copyright (Government Digital Service), under the [MIT licence](licences/accessible-autocomplete.txt).

## File upload

```tsx
import * as FileUpload from '@govuk-react/primitives/file-upload';

<label id="photo-label" htmlFor="photo">Upload a photo</label>
<FileUpload.Root>
  <FileUpload.DropZone>
    <FileUpload.Button>
      <FileUpload.Status />
      <FileUpload.Separator className="visually-hidden" />
      Choose file or drop file
    </FileUpload.Button>
    <FileUpload.Input id="photo" name="photo" />
  </FileUpload.DropZone>
  <FileUpload.Announcements className="visually-hidden" />
</FileUpload.Root>;
```

Without JavaScript the native file input is shown and the `Button` is hidden. On upgrade the element hides the input and shows the button, which opens the file picker, takes files dropped on it, and says in `Status` which files are chosen. As in govuk-frontend, the button takes the input's `id` (the input's gets `-input` added), so the input's label names it, along with its `aria-describedby` and `disabled`. Give the label an id: without one the element adds it, which React warns about when it hydrates. `Announcements` tells screen readers when files are dragged into and out of the `DropZone`.

The input's files are the state, so there is nothing to control. Dropped files fire bubbling `input` and `change` events, so React's `onChange` hears them. The text is English by default, and `multipleFilesChosen` takes a message for each plural form. The button gets `data-empty` and `data-dragging`, and the drop zone `data-disabled`, for styling, or pass class names such as `emptyClass`.

## Choices

```tsx
import * as Choices from '@govuk-react/primitives/choices';

<Choices.Root>
  <Choices.Input type="radio" id="email" name="contact" value="email" controls="email-reveal" />
  <label htmlFor="email">Email</label>
  <Choices.Conditional id="email-reveal">…</Choices.Conditional>
</Choices.Root>;
```

For a group of radios or checkboxes. Without JavaScript every `Conditional` is shown. On upgrade, each one shows only while the choice that `controls` it is checked, and that choice gets `aria-controls` and `aria-expanded`. A checkbox with `exclusive`, such as "None of these", unchecks the other checkboxes with its name when checked, and is unchecked when one of them is. They're unchecked with `click()`, so `change` events fire and controlled React inputs hear about it. Control the inputs as usual, with `checked` and `onChange`.

## Password input

```tsx
import * as PasswordInput from '@govuk-react/primitives/password-input';

<label htmlFor="password">Password</label>
<PasswordInput.Root>
  <PasswordInput.Input id="password" name="password" autoComplete="current-password" />
  <PasswordInput.Toggle />
  <PasswordInput.Status className="visually-hidden" />
</PasswordInput.Root>;
```

Without JavaScript the field is a plain password field and the `Toggle` is hidden. On upgrade the element shows the button, which switches the input between `type="password"` and `type="text"`, sets its own text ("Show" or "Hide") and accessible name ("Show password" or "Hide password"), and announces the change in `Status`. Leave out `Status` and the element adds a visually hidden one after the input.

The input's `type` is the state, kept when React renders the input again, so there is nothing to control. As in govuk-frontend, the password is hidden again when its form is submitted and when the page is restored from the back-forward cache. The text is English by default: pass `showText`, `hideText`, `showLabel`, `hideLabel`, `shownAnnouncement` and `hiddenAnnouncement` to `Root`.

## Auto focus

```tsx
import * as AutoFocus from '@govuk-react/primitives/auto-focus';

<AutoFocus.Root>
  <AutoFocus.Target role="alert">There is a problem</AutoFocus.Target>
</AutoFocus.Root>;
```

Moves focus to `Target` when it appears, such as an error summary after a form is submitted. The server renders the target with `tabindex="-1"` and `autofocus`, so the browser focuses it when the page loads, even without JavaScript. As in govuk-frontend, the target loses its `tabindex` once focus moves on. Pass `disabled` to `Root` to leave focus alone, or to `Target` in an island without a `Root`.

## Focus links

```tsx
import * as FocusLinks from '@govuk-react/primitives/focus-links';

<FocusLinks.Root focusedClass="focused">
  <a href="#main-content">Skip to main content</a>
</FocusLinks.Root>;
```

Makes links inside it, to a part of the same page, move focus there. A link to a form field focuses the field and scrolls its label into view, or its fieldset's legend, as govuk-frontend's error summary does. A link to anything else focuses it with `tabindex="-1"` and `focusedClass` until focus moves on, as govuk-frontend's skip link does. Without JavaScript the browser follows the link as usual.

## Button

```tsx
import * as Button from '@govuk-react/primitives/button';

<Button.Root preventDoubleClick>Save and continue</Button.Root>;

<Button.Root asChild>
  <a href="/start" role="button">
    Start now
  </a>
</Button.Root>;
```

With `preventDoubleClick`, a second click within a second of the first is ignored, so a form isn't submitted twice. The click is stopped before React hears it, so `onClick` doesn't run twice either. Space activates a link with `role="button"`, as it does a button. Unlike the other primitives there's no wrapper element, which would change a button group's layout: importing the module adds one click and one keydown listener to the document, for any element marked by `Root`. Without React, mark buttons with `data-button`.

## Exit this page

```tsx
import * as ExitThisPage from '@govuk-react/primitives/exit-this-page';

<ExitThisPage.SkipLink href="https://www.bbc.co.uk/weather">Exit this page</ExitThisPage.SkipLink>;

<ExitThisPage.Root hideContentClass="hide-content" overlayClass="overlay">
  <ExitThisPage.Button href="https://www.bbc.co.uk/weather">
    Exit this page
    <ExitThisPage.Indicator />
  </ExitThisPage.Button>
  <ExitThisPage.Status className="visually-hidden" />
</ExitThisPage.Root>;
```

Lets users leave the page quickly. Without JavaScript the button is a plain link. Once upgraded, the button, a `SkipLink`, or pressing Shift 3 times within 5 seconds hides the page behind an overlay that says it's loading, and goes to the button's `href`. `Indicator` shows the presses, and `Status` tells screen readers how many more are needed. Only the page's first `Root` listens for Shift and skip links. Before leaving, the element fires a cancelable `govuk-react-exit-this-page:exit` event, so a test can stay on the page.
