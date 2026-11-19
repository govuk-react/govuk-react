---
'govuk-react': minor
---

`Button` now behaves as govuk-frontend's does, with a new `Button` primitive in `@govuk-react/primitives`. With `preventDoubleClick`, a second click within a second of the first is ignored, so a form isn't submitted twice, and `onClick` doesn't run twice. Space activates a link button.
