---
'@govuk-react/primitives': patch
'govuk-react': patch
---

Controlled Tabs, Accordion and Modal no longer make React throw away the server's HTML of a Suspense boundary inside them that has yet to hydrate, when going back to the prop after a change the user made before hydration.
