---
'govuk-react': major
---

Single components now have flat names, from govuk-frontend-react 1.0.0-alpha.5. `Button.Composite` and `Button.Root` are `Button`, and `<Button.Composite start>` is `StartButton`. `Input.Control` and `Input.Field` are `Input` and `InputField`, and the same goes for `Select`, `Textarea` and `FileUpload`. `WarningText.Composite` is `WarningText`, with no parts. The improved file upload is a module of parts, `EnhancedFileUpload`, and `FileUpload.EnhancedField` is `EnhancedFileUpload.Field`.
