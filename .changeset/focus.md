---
'govuk-react': minor
---

`ErrorSummary`, `NotificationBanner` and `SkipLink` now move focus as govuk-frontend's do, with new `AutoFocus` and `FocusLinks` primitives in `@govuk-react/primitives`. An error summary, or a success banner, takes focus when it appears, and is rendered with `autofocus`, so it takes focus when the page loads even without JavaScript. Error summary links focus their field with its label or legend in view, and the skip link focuses the main content.
