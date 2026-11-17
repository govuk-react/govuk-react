---
'govuk-react': minor
---

`ServiceNavigation`'s menu button now works: below tablet width it shows and hides the navigation, as in govuk-frontend, with behaviour from `@govuk-react/primitives`. Without JavaScript the navigation is always shown. `Wrapper` and `Composite` take `open` and `onOpenChange`, to close the menu after navigating in a single-page app.
