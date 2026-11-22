---
'@govuk-react/primitives': minor
'govuk-react': patch
---

The primitives' elements are now `display: block`, not `display: contents`, so they have a box for an `IntersectionObserver`, such as Astro's `client:visible`. A class that sets `display` still wins. govuk-react's ExitThisPage keeps its element at `display: contents`, so its button stays sticky.
