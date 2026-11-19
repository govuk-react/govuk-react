---
'govuk-react': minor
---

New `SearchBox.AutocompleteComposite`, based on GOV.UK's search with autocomplete, with an `Autocomplete` primitive in `@govuk-react/primitives` ported from accessible-autocomplete. Without JavaScript it's a plain search box. Once JavaScript runs, it suggests searches from 3 characters, and choosing one submits the form. Pass `suggestions`, such as from `onQueryChange`.
