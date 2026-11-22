---
'@govuk-react/primitives': minor
'govuk-react': patch
---

The primitives' elements are now `display: block`, not `display: contents`, so they have a box for an `IntersectionObserver`, such as Astro's `client:visible`. A class that sets `display` still wins. An element that sits directly in a flex or grid container is now an item of it itself. govuk-react's ExitThisPage and Modal keep their elements at `display: contents`, so the exit button stays sticky and a modal's trigger still lays out in a button group.
