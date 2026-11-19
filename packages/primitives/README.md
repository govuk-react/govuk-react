# @govuk-react/primitives

Headless behaviour for design system components, as light-DOM custom elements with unstyled React parts over them. It ships no styles and no GOV.UK markup, so any library can use it. govuk-react's components are the reference implementation, built with govuk-frontend-react's markup.

Each primitive:

- works without JavaScript, through a fallback you choose
- upgrades to the full WAI-ARIA pattern when its custom element is defined, with or without React
- adds React state (`value`, `defaultValue`, `onValueChange`) once hydrated
- takes `asChild` on every part, so you render your own elements

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

When controlled with `value`, a user's choice calls `onValueChange` and the tab changes only when `value` does. `preHydration` sets what happens to a tab the user picked before React hydrated: `"ignore"` (the default) keeps `value`, `"report"` calls `onValueChange` with it. When uncontrolled, the pick is always reported.

`orientation` (`"horizontal"` or `"vertical"`) sets the axis of the arrow keys.

`media` limits the tab behaviour to a media query. Below it, `Root`'s tabs are a list of links to panels, and `RadiosRoot`'s keep switching through their radios. With `Root`, the URL hash follows the selected tab, as in govuk-frontend.

In an island without a root, pass `name` and `defaultSelected` to the triggers and panels. `upgradedClass`, `activeItemClass` and `hiddenContentClass` add classes for styles that key off classes rather than `data-state`, `aria-selected` and `hidden`.

Without React, use the `<govuk-react-tabs>` element from `@govuk-react/primitives/tabs-element` with the same markup, including a hidden radio as the first child of each panel. Listen for its `govuk-react-tabs:change` event. See [the element's source](src/tabs/element.ts) for its attributes.

It follows the Tabs reference in [react-design-system-apis](https://github.com/penx/react-design-system-apis). Browser tests in `packages/primitives-e2e` cover it without JavaScript, upgraded without React, hydrated, before hydration, controlled, nested, in islands and rendered only on the client.

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
