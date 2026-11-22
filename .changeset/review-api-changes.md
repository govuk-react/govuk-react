---
'govuk-react': minor
---

- `Accordion.SectionComposite` takes one `idPrefix` in place of `accordionId` and `index`.
- Props that set a starting state are named `default*`: `expanded` on `Accordion.Section` and `Accordion.SectionComposite` is now `defaultExpanded`, and `selected` on `Tabs.ListItem`, `Tabs.Panel` and `Tabs.RadiosPanel` is now `defaultSelected`.
- `Tabs.RadioTab` and `Tabs.RadioPanel` are now `Tabs.RadiosTab` and `Tabs.RadiosPanel`.
- `CharacterCount` loses `maxWords`, which govuk-frontend has deprecated. Use `maxLength` with `countType="words"`.
