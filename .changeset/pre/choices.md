---
'govuk-react': minor
---

`Radios` and `Checkboxes`: conditional reveals now work, with behaviour from a new `Choices` primitive in `@govuk-react/primitives`. Before or without JavaScript, a reveal shows only while its option is checked, where the browser supports `:has()`. `Checkboxes` items take `exclusive` for an option such as "None of these", which unchecks the others once JavaScript runs.
