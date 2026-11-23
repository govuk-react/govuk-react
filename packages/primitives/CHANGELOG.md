# @govuk-react/primitives

## 0.8.0

### Minor Changes

- Add `ControlledField`, with `Input`, `Textarea`, `Select`, `Checkbox` and `Radio` parts: native fields whose value React holds. What a user enters before React hydrates is reported once hydrated, with `{ beforeHydration: true }`, rather than replaced by your state.
- Without React, the elements no longer take a `value` or `open` property. Control them with `TabsController`, `AccordionController`, `DisclosureController` and `ModalController`, from `@govuk-react/primitives/<name>-controller`, which keeps the inline scripts smaller. A user's change to Tabs, Accordion or Disclosure fires a cancelable change event: cancel it to leave the state as it is.

### Patch Changes

- Showing a password before React hydrates no longer makes React throw away the server's HTML, and with it what the user typed. The PasswordInput primitive's `Status` and the FileUpload primitive's `Announcements` now render an empty text child, so an announcement made before hydration hydrates as text.
- Controlled Tabs, Accordion and Modal no longer make React throw away the server's HTML of a Suspense boundary inside them that has yet to hydrate, when going back to the prop after a change the user made before hydration.
- A Details or Modal change made before hydration is reported once, even when its event arrives after hydration. A Modal opened and closed before hydration no longer reports a close it never reported opening.
- Tabs upgraded by an inline script no longer wait for `DOMContentLoaded`: they upgrade as they are parsed, and pick their first tab again as more panels arrive.

Earlier versions have no changelog. See the [govuk-react changelog](https://github.com/govuk-react/govuk-react/blob/main/packages/govuk-react/CHANGELOG.md), which lists each primitives release it updated to.
