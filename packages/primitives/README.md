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

`fallback` sets how the tabs work without JavaScript:

- `links` (the default): each tab links to its panel, and every panel shows.
- `radios`: each tab is a label for a hidden radio in its panel, so tabs switch with no JavaScript.

`media` limits the tab behaviour to a media query. `upgradedClass`, `activeItemClass` and `hiddenContentClass` add classes for styles that key off classes rather than `data-state`, `aria-selected` and `hidden`.

Without React, use the `<govuk-react-tabs>` element from `@govuk-react/primitives/tabs-element` with the same markup. See [the element's source](src/tabs/element.ts) for its attributes.

It follows the Tabs reference in [react-design-system-apis](https://github.com/penx/react-design-system-apis).
