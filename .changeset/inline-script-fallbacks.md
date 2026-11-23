---
'@govuk-react/primitives': minor
---

Three inline scripts are smaller, because the markup and the stylesheet now do what the scripts did as a fallback:

- `PasswordInput.Status` is required for the announcements. The element no longer adds a live region when there is none.
- Without `hiddenDescriptionClass`, `CharacterCount`'s description is visually hidden by `styles.css` once the element upgrades, rather than by inline styles.
- `ExitThisPage`'s overlay has `data-exit-this-page-overlay`. Without `overlayClass`, `styles.css` covers the page with it, rather than inline styles.
