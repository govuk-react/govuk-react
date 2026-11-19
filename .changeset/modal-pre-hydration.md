---
'govuk-react': patch
---

A `Modal` opened before React hydrates is now reported through `onOpenChange` once it does, so a controlled modal's state matches the open dialog.
