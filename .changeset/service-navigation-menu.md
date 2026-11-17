---
'govuk-react': minor
---

`ServiceNavigation`'s menu works. `Menu` (with `Toggle`) is govuk-frontend's menu button, with behaviour from `@govuk-react/primitives`: without JavaScript the navigation is always shown. `DetailsMenu` (with `Summary`) is a native `details` that works without JavaScript. `Composite` uses `Menu` and the new `DetailsComposite` uses `DetailsMenu`. Both menus and composites take `open` and `onOpenChange`, to close the menu after navigating in a single-page app. `Wrapper` is govuk-frontend-react's `nav` again.
