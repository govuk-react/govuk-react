# @govuk-react/primitives

Headless behaviour for design system components, as light-DOM custom elements with unstyled React parts over them. It ships no styles and no GOV.UK markup, so any library can use it. govuk-react's components are the reference implementation, built with govuk-frontend-react's markup.

Each primitive:

- works without JavaScript, through a fallback you choose
- upgrades to the full WAI-ARIA pattern when its custom element is defined, with or without React
- adds React state (`value`, `defaultValue`, `onValueChange`) once hydrated
- takes `asChild` on every part, so you render your own elements

## Tabs

```tsx
import * as Tabs from '@govuk-react/primitives/tabs';

<Tabs.Root defaultValue="past-day" fallback="links">
  <Tabs.List>
    <Tabs.Trigger value="past-day">Past day</Tabs.Trigger>
    <Tabs.Trigger value="past-week">Past week</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="past-day">…</Tabs.Content>
  <Tabs.Content value="past-week">…</Tabs.Content>
</Tabs.Root>;
```

Each panel holds a hidden radio, and the radio group is the source of truth, as in the reference. Choosing a tab checks its radio, and the radio's native change updates the tabs and calls `onValueChange`.

`fallback` sets how the tabs work without JavaScript:

- `links` (the default): each tab links to its panel, and every panel shows.
- `radios`: each tab is a label for a hidden radio in its panel, so tabs switch with no JavaScript when clicked. It needs `defaultValue` or `value`. Without JavaScript the labels can't be reached by keyboard, as in the reference. Pass `name` when tabs render in separate React roots, such as islands. Root adds the fallback's CSS inline; under a strict CSP, add `radiosFallbackCss` to a stylesheet instead.

When controlled with `value`, a user's choice calls `onValueChange` and the tab changes only when `value` does. `preHydration` sets what happens to a tab the user picked before React hydrated: `"ignore"` (the default) keeps `value`, `"report"` calls `onValueChange` with it. When uncontrolled, the pick is always reported.

`orientation` (`"horizontal"` or `"vertical"`) sets the axis of the arrow keys.

`media` limits the tab behaviour to a media query. Below it, `links` tabs are a list of links to panels, and `radios` tabs keep switching through their radios. With `links`, the URL hash follows the selected tab, as in govuk-frontend.

In an island without a `Root`, pass `fallback`, `name` and `defaultSelected` to `Trigger` and `Content`. `upgradedClass`, `activeItemClass` and `hiddenContentClass` add classes for styles that key off classes rather than `data-state`, `aria-selected` and `hidden`.

Without React, use the `<govuk-react-tabs>` element from `@govuk-react/primitives/tabs-element` with the same markup, including a hidden radio as the first child of each panel. Listen for its `govuk-react-tabs:change` event. See [the element's source](src/tabs/element.ts) for its attributes.

It follows the Tabs reference in [react-design-system-apis](https://github.com/penx/react-design-system-apis). Browser tests in `packages/primitives-e2e` cover it without JavaScript, upgraded without React, hydrated, before hydration, controlled, nested, in islands and rendered only on the client.
