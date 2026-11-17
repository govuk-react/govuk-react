---
'govuk-react': major
---

The layout components are now govuk-frontend-react's: `GridRow`, `GridColumn` (was `GridCol`), `WidthContainer` (replaces `Main`), `MainWrapper` and `Footer`. `Page` is rebuilt on them, wraps the header and footer in landmarks, and loses its attached parts and default header. `GlobalStyle` is removed. See MIGRATION.md.
