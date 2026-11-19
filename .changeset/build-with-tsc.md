---
'govuk-react': patch
'@govuk-react/primitives': patch
---

Build with `tsc` instead of tsup: each source module is published as its own file, with no bundling, so shared modules exist once whichever entries you import. This fixes 20 component entries (such as `govuk-react/input`, `govuk-react/table` and `govuk-react/footer`) that were published without their exports, and adds `Input`, `Select`, `Textarea` and `WarningText` back to the package root.
