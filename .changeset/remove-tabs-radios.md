---
'govuk-react': major
'@govuk-react/primitives': minor
---

Tabs no longer have a radio fallback. `Tabs.RadiosRoot`, `RadiosComposite`, `RadiosTab` and `RadiosPanel` are removed from govuk-react, and `Tabs.RadiosRoot`, `RadiosTrigger` and `RadiosContent` and the element's `fallback` attribute from `@govuk-react/primitives`. Before JavaScript loaded, their tabs looked like tabs but couldn't be reached by keyboard. Use `Root` or `Composite`: without JavaScript, as in govuk-frontend, their tabs are links to every panel. A panel's hidden radio no longer has an `id`.
