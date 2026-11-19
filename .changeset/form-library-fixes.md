---
'govuk-react': patch
---

Fix form library integration: the character count and conditional reveals follow values a script sets, such as React Hook Form's `setValue`, and a form reset; a shown password stays shown when React updates the input or a form library validates with a hidden submit button; and `aria-describedby` lists each id once.
