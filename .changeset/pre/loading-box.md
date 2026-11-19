---
'govuk-react': major
---

`LoadingBox` no longer uses CSS-in-JS: its styles are a hoisted stylesheet with CSS custom properties. It's now a named export only, takes any CSS colour, and sets `aria-busy` while loading. See MIGRATION.md.
