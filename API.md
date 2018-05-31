BackLink
========

### Import
```js
  import BackLink from '@govuk-react/back-link';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | 'Back' | string | Text that will appear in the back link
 `className` |  | undefined | string | 
 `onClick` |  | undefined | func | A function that is called on click


Breadcrumb
==========

### Import
```js
  import Breadcrumb from '@govuk-react/breadcrumb';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | Generally a series of anchors or Link components
 `className` |  | undefined | string | 


Button
======

### Import
```js
  import Button from '@govuk-react/button';
```
<!-- STORY -->

### Usage

Simple
```js
<Button>My button text</Button>
```

With Icon
```js
import { ButtonArrow } from '@govuk-react/icons';

<Button icon={<ButtonArrow />}>My button text</Button>
```

### References:
- https://govuk-elements.herokuapp.com/buttons/
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | 'Button' | node | Button text
 `disabled` |  | false | bool | Renders a disabled button if set to true
 `icon` |  | undefined | node | Button icon
 `start` |  | false | bool | Renders a large button if set to true


Checkbox
========

### Import
```js
  import Checkbox from '@govuk-react/checkbox';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `inline` |  | undefined | bool | 


DateInput
=========

### Import
```js
  import DateInput from '@govuk-react/date-input';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `errorText` |  | undefined | string | 
 `hintText` |  | undefined | string | 


DocumentFooterMetadata
======================

### Import
```js
  import DocumentFooterMetadata from '@govuk-react/document-footer-metadata';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `from` |  | undefined | arrayOf[object Object] | 
 `other` |  | undefined | arrayOf[object Object] | 
 `partOf` |  | undefined | arrayOf[object Object] | 


ErrorText
=========

### Import
```js
  import ErrorText from '@govuk-react/error-text';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


FileUpload
==========

### Import
```js
  import FileUpload from '@govuk-react/file-upload';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `acceptedFormats` |  | undefined | string | 
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `hint` |  | undefined | string | 
 `meta` |  | {} | shape[object Object] | 


GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | undefined | node | 


GridRow
=======

### Import
```js
  import GridRow from '@govuk-react/grid-row';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


Header
======

### Import
```js
  import Header from '@govuk-react/header';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | 1 | number | 
 `size` |  | undefined | enumObject.keys(FONT_SIZES) | 


HintText
========

### Import
```js
  import HintText from '@govuk-react/hint-text';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


InputField
==========

### Import
```js
  import InputField from '@govuk-react/input-field';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `hint` |  | null | string | 
 `input` |  | {} | shape[object Object] | 
 `meta` |  | {} | shape[object Object] | 


Input
=====

### Import
```js
  import Input from '@govuk-react/input';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `errorColor` |  | undefined | string | 
 `onChange` |  | undefined | func | 
 `type` |  | 'text' | string | 
 `value` |  | undefined | string | 


InsetText
=========

### Import
```js
  import InsetText from '@govuk-react/inset-text';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


LabelText
=========

### Import
```js
  import LabelText from '@govuk-react/label-text';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


Label
=====

### Import
```js
  import Label from '@govuk-react/label';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `className` |  | undefined | string | 


Layout
======

### Import
```js
  import Layout from '@govuk-react/layout';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


LeadParagraph
=============

### Import
```js
  import LeadParagraph from '@govuk-react/lead-paragraph';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


ListItem
========

### Import
```js
  import ListItem from '@govuk-react/list-item';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 


ListNavigation
==============

### Import
```js
  import ListNavigation from '@govuk-react/list-navigation';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `listStyleType` |  | undefined | string | 


LoadingBox
==========

### Import
```js
  import LoadingBox from '@govuk-react/loading-box';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `backgroundColor` |  | WHITE | string | 
 `backgroundColorOpacity` |  | 0.85 | number | 
 `children` | true |  | node | 
 `loading` |  | false | bool | 
 `spinnerColor` |  | BLACK | string | 
 `timeIn` |  | 800 | number | 
 `timeOut` |  | 200 | number | 
 `title` |  | undefined | string | 


MultiChoice
===========

### Import
```js
  import MultiChoice from '@govuk-react/multi-choice';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `hint` |  | undefined | string | 
 `label` | true |  | node | 
 `meta` |  | {} | shape[object Object] | 


OrderedList
===========

### Import
```js
  import OrderedList from '@govuk-react/ordered-list';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `listStyleType` |  | undefined | string | 


Pagination
==========

### Import
```js
  import Pagination from '@govuk-react/pagination';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 


Panel
=====

### Import
```js
  import Panel from '@govuk-react/panel';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `className` |  | undefined | string | 
 `panelBody` |  | undefined | string | 
 `panelTitle` | true |  | string | 


Paragraph
=========

### Import
```js
  import Paragraph from '@govuk-react/paragraph';
```
<!-- STORY -->

### Usage

Supports bold, italic and links in Markdown ONLY.
This is to ensure we follow GDS as closely as possible.
It is worth noting that GDS recommends avoiding bold and italics.

Simple Usage with markdown
```js
<Paragraph>Lorem ipsum **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

As supporting text
```js
<Paragraph supportingText>Lorem ipsum **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-body-copy

### TODO
- Add test for supporting text
- Add test for rendering supported markdown components

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | '' | node | Text content supporting markdown
 `supportingText` |  | false | bool | Is this paragraph supporting text for another element?


PhaseBadge
==========

### Import
```js
  import PhaseBadge from '@govuk-react/phase-badge';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `className` |  | undefined | string | 


PhaseBanner
===========

### Import
```js
  import PhaseBanner from '@govuk-react/phase-banner';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `level` | true |  | string | 


Radio
=====

### Import
```js
  import Radio from '@govuk-react/radio';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `disabled` |  | false | bool | 
 `inline` |  | undefined | bool | 


RelatedItems
============

### Import
```js
  import RelatedItems from '@govuk-react/related-items';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 


SearchBox
=========

### Import
```js
  import SearchBox from '@govuk-react/search-box';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `className` |  | undefined | string | 
 `placeholder` |  | undefined | string | 


Select
======

### Import
```js
  import Select from '@govuk-react/select';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `errorText` |  | undefined | string | 
 `hint` |  | undefined | string | 
 `input` |  | {} | shape[object Object] | 
 `label` | true |  | string | 
 `meta` |  | {} | shape[object Object] | 


Table
=====

### Import
```js
  import Table from '@govuk-react/table';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `body` | true |  | node | 
 `caption` |  | undefined | string | 
 `head` |  | undefined | node | 


TextArea
========

### Import
```js
  import TextArea from '@govuk-react/text-area';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `hint` |  | undefined | string | 
 `input` |  | {} | shape[object Object] | 
 `meta` |  | {} | shape[object Object] | 


TopNav
======

### Import
```js
  import TopNav from '@govuk-react/top-nav';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `active` |  | undefined | number | 
 `bgColor` |  | BLACK | string | 
 `children` |  | undefined | node | 
 `color` |  | WHITE | string | 
 `company` |  | undefined | node | 
 `search` |  | false | node | 
 `serviceTitle` |  | undefined | node | 


UnorderedList
=============

### Import
```js
  import UnorderedList from '@govuk-react/unordered-list';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `listStyleType` |  | undefined | string | 


