DocumentFooterMetadata
======================

### Import
```js
  import DocumentFooterMetadata from '@govuk-react/document-footer-metadata';
```
<!-- STORY -->

An ordered list of documents including a document type, when updated and a link.

- https://govuk-react.github.io/govuk-react/?path=/docs/document-footer-metadata
- https://components.publishing.service.gov.uk/component-guide/document_list

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `from` |  | ```undefined``` | ReactNode[] | Array of JSX nodes to render underneath the `from:` title
 `other` |  | ```undefined``` | { id?: number; title?: string; content?: ReactNode; }[] | Array of Objects for any additional items, each object should contain an `id`, `title` and `content` property
 `partOf` |  | ```undefined``` | ReactNode[] | Array of JSX nodes to render underneath the `part of:` title


