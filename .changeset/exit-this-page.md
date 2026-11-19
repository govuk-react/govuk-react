---
'govuk-react': minor
---

New `ExitThisPage`: govuk-frontend-react's markup, with behaviour from a new `ExitThisPage` primitive in `@govuk-react/primitives`. As in govuk-frontend, without JavaScript the button is a link to a safe page. Once JavaScript runs, the button, `ExitThisPage.SkipLink`, or pressing Shift 3 times hides the page and goes to the button's `href`, with an indicator and screen reader messages counting the presses.
