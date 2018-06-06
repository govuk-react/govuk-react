BackLink
========

### Import
```js
  import BackLink from '@govuk-react/back-link';
```
<!-- STORY -->

### Usage

Simple
```jsx
<BackLink>Back</BackLink>
```

With custom click handler
```jsx
<BackLink onClick={this.myCustomFunction}>Back</BackLink>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/back-link

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `onClick` |  | undefined | func | Custom function to run when the `onClick` event is fired


Breadcrumb
==========

### Import
```js
  import Breadcrumb from '@govuk-react/breadcrumb';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Breadcrumb>
  <a href="/section">Section</a>
  <a href="/section/sub-section">Sub-section</a>
  Current page
</Breadcrumb>
```

Using `asAnchor` HOC with, or without React Router
```jsx
import { Link } from 'react-router-dom';
import { asAnchor } from '@govuk-react/hoc';

const AnchorLink = asAnchor(Link);
const AnchorTag = asAnchor('a');

<Breadcrumb>
  <AnchorLink to="/section">Section</AnchorLink>
  <AnchorTag href="/section">Sub-section</AnchorTag>
</Breadcrumb>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Consider nested anchors, create an Atom for Breadcrumb links?

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | Breadcrumb contents


Button
======

### Import
```js
  import Button from '@govuk-react/button';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Button>My button text</Button>
```

With Icon
```jsx
import { ButtonArrow } from '@govuk-react/icons';

<Button icon={<ButtonArrow />}>My button text</Button>
```

### References:
- https://govuk-elements.herokuapp.com/buttons/
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/design-patterns/_buttons.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_buttons.scss

### TODO:
- Use constants for some of the values cssinjs values
- Remove cascade styling for nested elements such as `svg`

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

### Usage

Simple
```jsx
<Checkbox>Text displayed next to checkbox</Checkbox>
```

With disabled state
```jsx
<Checkbox disabled="disabled">Disabled checkbox option</Checkbox>
```

Checkbox preselected
```jsx
<Checkbox defaultChecked>Farm or agricultural waste</Checkbox>
```

Checkbox preselected & disabled
```jsx
<Checkbox disabled="disabled" defaultChecked>Farm or agricultural waste</Checkbox>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkboxes/_checkboxes.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | Text content for checkbox
 `className` |  | undefined | string | CSS Classname for outermost container


DateInput
=========

### Import
```js
  import DateInput from '@govuk-react/date-input';
```
<!-- STORY -->

### Usage

Simple
```jsx
<DateInput>What is your date of birth?</DateInput>
```

Date with hint text
```jsx
<DateInput hintText="For example, 31 03 1980">
  What is your date of birth?
</DateInput>
```

Date with hint text & error
```jsx
<DateInput
  hintText="For example, 31 03 1980"
  errorText="Error message goes here"
>
  What is your date of birth?
</DateInput>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-input

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `errorText` |  | undefined | string | Error text
 `hintText` |  | undefined | string | Optional hint text


DocumentFooterMetadata
======================

### Import
```js
  import DocumentFooterMetadata from '@govuk-react/document-footer-metadata';
```
<!-- STORY -->

### Usage


Simple
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');
const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];

<DocumentFooterMetadata from={fromData} />
```


DFM From & part of example
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');
const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];
const partOfData = [
  <AnchorTag href="/government/topics/energy">Energy</AnchorTag>,
  <AnchorTag href="/government/topics/environment">Environment</AnchorTag>,
];

<DocumentFooterMetadata from={fromData} partOf={partOfData} />
```


DFM From & other data example
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');
const fromData = [
  <AnchorTag href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </AnchorTag>,
];
const otherData = [
  {
    id: 0,
    title: 'Consultation type',
    content: <AnchorTag href="/government/publications">Open</AnchorTag>,
  },
  {
    id: 1,
    title: 'Published',
    content: '20 January 2012',
  },
];

<DocumentFooterMetadata from={fromData} other={otherData} />
```

### References:
- https://govuk-static.herokuapp.com/component-guide/document_footer

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `from` |  | undefined | arrayOf[object Object] | Array of JSX nodes to render underneath the `from:` title
 `other` |  | undefined | arrayOf[object Object] | Array of Objects for any additional items, each object should contain an `id`, `title` and `content` property
 `partOf` |  | undefined | arrayOf[object Object] | Array of JSX nodes to render underneath the `part of:` title


ErrorText
=========

### Import
```js
  import ErrorText from '@govuk-react/error-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
<ErrorText errorText="example">Example</ErrorText>
```

### References
- https://github.com/alphagov/govuk-frontend/tree/master/src/components


FileUpload
==========

### Import
```js
  import FileUpload from '@govuk-react/file-upload';
```
<!-- STORY -->

### Usage

Simple
```jsx
<FileUpload name="group0">Upload a document</FileUpload>
```

Input with hint text
```jsx
<FileUpload
  name="group1"
  acceptedFormats=".jpg, .png"
  hint={['This can be in either JPG or PNG format']}
>
  Upload a photo
</FileUpload>
```

Input with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<FileUpload
  name="group1"
  acceptedFormats=".jpg, .png"
  hint={['This can be in either JPG or PNG format']}
  meta={meta}
>
  Upload a photo
</FileUpload>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/file-upload

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `acceptedFormats` |  | undefined | string | 
 `children` | true |  | node | 
 `hint` |  | undefined | string | Optional hint text
 `meta` |  | {} | shape[object Object] | Final form meta object, pending adjustment/removal


GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->




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

### Usage


Simple
```jsx
<Header level={1}>Heading text</Header>
```

Using shortcuts
```jsx
import { H1, H2, H3, H4, H5, H6 } from "@govuk-react/header";

<H1>h1</H1>
<H2>h2</H2>
<H3>h3</H3>
<H4>h4</H4>
<H5>h5</H5>
<H6>h6</H6>
```

Differing sizes
```jsx
<Header level={6} size="XXLARGE">
  h6 with XXLARGE style
</Header>
<Header level={2} size="XSMALL">
  h2 with XSMALL style
</Header>
<H3 size="LARGE">h3 with LARGE style</H3>
```

Props pass through
```jsx
<Header onClick={() => { console.log('clicked'); }}>Click me</Header>
```

### References:
- https://govuk-elements.herokuapp.com/typography/#typography-headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/globals/scss/core/_typography.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_elements-typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | 1 | number | Semantic heading level value between 1 and 6
 `size` |  | undefined | enumObject.keys(FONT_SIZES) | Visual size level, accepts   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XSMALL`


HiddenText
==========

### Import
```js
  import HiddenText from '@govuk-react/hidden-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
import Paragraph from '@govuk-react/paragraph';

<HiddenText summaryText={'Help with nationality'}>
  <Paragraph mb={0}>I am a paragraph. Please read me.</Paragraph>
</HiddenText>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-hidden-text

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `summaryText` |  | '' | string | 


InsetText
=========

### Import
```js
  import InsetText from '@govuk-react/inset-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
<InsetText>Hello</InsetText>
```

Narrow border
```jsx
<InsetText isNarrow>Hello</InsetText>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-inset-text
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_panels.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `isNarrow` |  | false | bool | Renders a narrow border following GDS guides if set to true


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
```jsx
<Paragraph>Lorem ipsum **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

As supporting text
```jsx
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


HintText
========

### Import
```js
  import HintText from '@govuk-react/hint-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
<HintText>Example</HintText>
```

### References
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/


InputField
==========

### Import
```js
  import InputField from '@govuk-react/input-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<InputField name="group0">National Insurance number</InputField>
```

Input with hint text
```jsx
<InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
 >
   National Insurance number
 </InputField>
```

Input with hint text & error
```jsx
 const meta = {
   touched: true,
   error: 'Example',
 };

 <InputField
   name="group1"
   hint={[
     'It’s on your National Insurance card, benefit letter, payslip or P60.',
     <br />,
     'For example, ‘QQ 12 34 56 C’.',
   ]}
   meta={meta}
 >
   National Insurance number
 </InputField>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
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

### Usage

Simple
```jsx
<Input />
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/

### TODO:
- Remove `errorColor` and provide examples on how to extend the component

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `type` |  | 'text' | string | HTML `<Input />` type


InsetText
=========

### Import
```js
  import InsetText from '@govuk-react/inset-text';
```
<!-- STORY -->

### Usage


Simple
```jsx
import Paragraph from '@govuk-react/paragraph';

<InsetText>
 <Paragraph mb={0}>Hello</Paragraph>
</InsetText>
```

Narrow border
```jsx
import Paragraph from '@govuk-react/paragraph';

<InsetText isNarrow>
 <Paragraph mb={0}>Hello</Paragraph>
</InsetText>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-inset-text
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss
- https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_panels.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `isNarrow` |  | false | bool | Renders a narrow border following GDS guides if set to true


LabelText
=========

### Import
```js
  import LabelText from '@govuk-react/label-text';
```
<!-- STORY -->

### Usage

Simple
```jsx
<LabelText>Example</LabelText>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/


Label
=====

### Import
```js
  import Label from '@govuk-react/label';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Label>Example</Label>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/


Layout
======

### Import
```js
  import Layout from '@govuk-react/layout';
```
<!-- STORY -->




LeadParagraph
=============

### Import
```js
  import LeadParagraph from '@govuk-react/lead-paragraph';
```
<!-- STORY -->

### Usage


Simple
```jsx
<LeadParagraph>LeadParagraph example</LeadParagraph>
```

### References
- https://govuk-static.herokuapp.com/component-guide/lead_paragraph


ListItem
========

### Import
```js
  import ListItem from '@govuk-react/list-item';
```
<!-- STORY -->

### Usage


Simple
```jsx
<ListItem>List item example</ListItem>
```

With anchor
```jsx
import { asAnchor } from '@govuk-react/hoc';

<ListItem>
  <AnchorTag href="https://www.google.com/">{text('Children', 'List item example')}</AnchorTag>
</ListItem>
```

### References
- https://github.com/alphagov/govuk-frontend/tree/master/src/components


ListNavigation
==============

### Import
```js
  import ListNavigation from '@govuk-react/list-navigation';
```
<!-- STORY -->

### Usage

Simple
```jsx
<ListNavigation>
  <a href="/section-a">Section A</a>
  <a href="/section-b">Section B</a>
</ListNavigation>
```

Current recommended approach using the `asAnchor` HOC for GDS styled links
```jsx
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');

<ListNavigation listStyleType="square">
  <AnchorTag href="https://example.com/link-a">Link A</AnchorTag>
  <AnchorTag href="https://example.com/link-b">Link B</AnchorTag>
</ListNavigation>
```

Using React Router and `asAnchor` HOC for GDS styled links
```jsx
import { Link } from 'react-router-dom';
import { asAnchor } from '@govuk-react/hoc';

const AnchorLink = asAnchor(Link);

<ListNavigation listStyleType="circle">
  <AnchorLink to="/link-a">Link A</AnchorLink>
  <AnchorLink to="/link-b">Link B</AnchorLink>
</ListNavigation>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Consider nested anchors, should developers have to use the HOC to preserve link styling?
- Fix active state overlaping siblings

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | List navigation content
 `listStyleType` |  | undefined | string | CSS value for `list-style-type`


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

### Usage

Simple
```jsx
import Radio from '@govuk-react/radio';

<MultiChoice label="example">
   <Radio name="group1" inline>
     Yes
   </Radio>
   <Radio name="group1" inline>
     No
   </Radio>
</MultiChoice>
```

### References:
- https://govuk-elements.herokuapp.com/errors/
- https://govuk-elements.herokuapp.com/errors/example-form-validation-single-question-radio

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
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

### Usage

Simple
```jsx
import ListItem from '@govuk-react/list-item';

<OrderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

with Roman
```jsx
import ListItem from '@govuk-react/list-item';

<OrderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

### References
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `listStyleType` |  | undefined | string | CSS value for `list-style-type`


Pagination
==========

### Import
```js
  import Pagination from '@govuk-react/pagination';
```
<!-- STORY -->

### Usage

Simple usage with `asPaginationItem` HOC
```jsx
import { asPaginationItem } from '@govuk-react/hoc';

const PaginationAnchor = asPaginationItem('a');

<Pagination>
  <PaginationAnchor href="#prev" previousPage>
    Previous page
  </PaginationAnchor>
  <PaginationAnchor href="#next" nextPage>
    Next page
  </PaginationAnchor>
</Pagination>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation


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
```jsx
<Paragraph>Lorem ipsum **dolor** sit *amet* with [some link](https://google.com)</Paragraph>
```

As supporting text
```jsx
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
 `level` | true |  | string | 


Radio
=====

### Import
```js
  import Radio from '@govuk-react/radio';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Radio name="group1">Radio button text example</Radio>
```

Radio stacked
```jsx
 <div>
   <Radio name="group1">Waste from animal carcasses</Radio>
   <Radio name="group1">Waste from mines or quarries</Radio>
   <Radio name="group1">Farm or agricultural waste</Radio>
 </div>
```

Radio inline
```jsx
 <div>
   <Radio name="group1" inline>
     Yes
   </Radio>
   <Radio name="group1" inline>
     No
   </Radio>
 </div>
```

Radio disabled
```jsx
 <div>
   <Radio name="group1" disabled="disabled">
     Disabled checkbox option
   </Radio>
 </div>
 ```

Radio preselected
```jsx
 <div>
   <Radio name="group1" checked>
     Farm or agricultural waste
   </Radio>
 </div>
```

Radio preselected & disabled
```jsx
 <div>
   <Radio name="group1" disabled="disabled" checked>
     Farm or agricultural waste
   </Radio>
 </div>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `className` |  | undefined | string | 
 `inline` |  | false | bool | 


RelatedItems
============

### Import
```js
  import RelatedItems from '@govuk-react/related-items';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Header from '@govuk-react/header';
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';
import { asAnchor } from '@govuk-react/hoc';

const AnchorTag = asAnchor('a');

<RelatedItems>
  <Header level={3}>Example header</Header>
  <UnorderedList listStyleType="none">
    <ListItem>
      <AnchorTag href="https://example.com">Link A</AnchorTag>
    </ListItem>
  </UnorderedList>
</RelatedItems>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/related_items

### TODO:
- Replace CSS selectors with imported components


SearchBox
=========

### Import
```js
  import SearchBox from '@govuk-react/search-box';
```
<!-- STORY -->

### Usage

Simple
```jsx
import Layout from '@govuk-react/layout';
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
   <GridRow>
     <GridCol>
       <SearchBox placeholder="Search GOV.UK">SearchBox example</SearchBox>
     </GridCol>
   </GridRow>
 </Layout>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/search

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `placeholder` |  | undefined | string | 


Select
======

### Import
```js
  import Select from '@govuk-react/select';
```
<!-- STORY -->

### Usage

Simple
```jsx
 <Select name="group1" label="This is a label">
    <option value="0">GOV.UK elements option 1</option>
    <option value="1">GOV.UK elements option 2</option>
    <option value="2">GOV.UK elements option 3</option>
  </Select>
```

Select with hint text
```jsx
<Select
   name="group1"
   label="This is a label"
   hint={[
     'This is and example of hintText/description of what we need from you.',
   ]}
 >
   <option value="0">GOV.UK elements option 1</option>
   <option value="1">GOV.UK elements option 2</option>
   <option value="2">GOV.UK elements option 3</option>
 </Select>
```

Select with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<Select
   name="group1"
   label="This is a label"
   hint={[
     'This is and example of hintText/description of what we need from you.',
   ]}
   meta={meta}
 >
   <option value="0">GOV.UK elements option 1</option>
   <option value="1">GOV.UK elements option 2</option>
   <option value="2">GOV.UK elements option 3</option>
 </Select>
```

Standalone input with inline label
```jsx
import LabelText from '@govuk-react/label-text';
import { SelectInput } '@govuk-react/select';

<label>
   <LabelText>Sort by:&nbsp;
     <SelectInput>
       <option value="0">People</option>
       <option value="1">Animals</option>
       <option value="2">Vegetables</option>
     </SelectInput>
   </LabelText>
 </label>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/select

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
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

### Usage

Simple
```jsx
<TextArea name="group1">Description of what you saw</TextArea>
```

TextArea with hint text
```jsx
<TextArea name="group1" hint={['Enter as many words as you like']}>
  Description of what you saw
</TextArea>
```

TextArea with hint text & error
```jsx
const meta = {
  touched: true,
  error: 'Example',
};

<TextArea
   name="group1"
   hint={['Enter as many words as you like']}
   meta={meta}
 >
   Description of what you saw
 </TextArea>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/textarea

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
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

### Usage

Simple
```jsx
import ListItem from '@govuk-react/list-item';

<UnorderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

With listStyleType option
```jsx
import ListItem from '@govuk-react/list-item';

<UnorderedList listStyleType="square">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

### References
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `listStyleType` |  | undefined | string | CSS value for `list-style-type`


