---
'@govuk-react/primitives': patch
'govuk-react': patch
---

Showing a password before React hydrates no longer makes React throw away the server's HTML, and with it what the user typed. The PasswordInput primitive's `Status` and the FileUpload primitive's `Announcements` now render an empty text child, so an announcement made before hydration hydrates as text.
