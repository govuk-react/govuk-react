Paragraph
=========

### Import
```js
  import Paragraph from '@govuk-react/paragraph';
```
<!-- STORY -->

### Usage

Supports bold, italic, links, inline code and block code in Markdown ONLY.
This is to ensure we follow GDS as closely as possible.
It is worth noting that GDS recommends avoiding bold and italics.

Simple Usage with markdown
```jsx
<Paragraph>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

As supporting text
```jsx
<Paragraph supportingText>Lorem `ipsum` **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

With a block of code
````jsx
<Paragraph>
  Some other text...
  ```
  Some Code Block
  ```
  Some more text.
</Paragraph>
````

### References
- https://govuk-elements.herokuapp.com/typography/#typography-body-copy

### TODO
- Add test for supporting text
- Add test for rendering supported markdown components
- Review code snippet styling

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```''``` | node | Text content supporting markdown
 `supportingText` |  | ```false``` | bool | Is this paragraph supporting text for another element?


