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

With `href` attribute
```jsx
<BackLink href='#'>Back</BackLink>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/back-link

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```'Back'``` | string | Text that will appear in the back link
 `onClick` |  | ```undefined``` | func | Custom function to run when the `onClick` event is fired


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
  <Breadcrumb.Link href="/section">Section</Breadcrumb.Link>
  <Breadcrumb.Link href="/section/sub-section">Sub-section</Breadcrumb.Link>
  Current page
</Breadcrumb>
```

Providing links with, or without React Router
```jsx
import { Link } from 'react-router-dom';

<Breadcrumb>
  <Breadcrumb.Link as={Link} to="/section">Section</Breadcrumb.Link>
  <Breadcrumb.Link href="/section">Sub-section</Breadcrumb.Link>
</Breadcrumb>
```

### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/breadcrumb/_breadcrumb.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Breadcrumb contents


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
- https://design-system.service.gov.uk/components/button/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/button/_button.scss

### TODO:
- Remove cascade styling for nested elements, specifically `svg`
- Consider ensuring text colour automatically switches between black/white based on WCAG guidance
  - see https://www.w3.org/TR/WCAG20-TECHS/G18.html
  - can use Polished's `readableColor` call, but translate their black to govuk's black

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `buttonColour` |  | ```undefined``` | string | Override for default button colour
 `buttonHoverColour` |  | ```undefined``` | string | Override for default button hover colour,<br/>which defaults to `buttonColour` darkened by 5%
 `buttonShadowColour` |  | ```undefined``` | string | Override for default button shadow colour,<br/>which defaults to `buttonColour` darkened by 15%
 `buttonTextColour` |  | ```undefined``` | string | Override for default button text colour,<br/>which defaults to govuk white
 `children` | true | `````` | node | Button text
 `disabled` |  | ```false``` | bool | Renders a disabled button and removes pointer events if set to true
 `icon` |  | ```undefined``` | node | Button icon
 `start` |  | ```false``` | bool | Renders a large button if set to true


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

Checkbox with hint text
```jsx
<Checkbox hint="including English, Scottish, Welsh and Northern Irish">British</Checkbox>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/checkboxes/_checkboxes.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text content for checkbox
 `className` |  | ```undefined``` | string | CSS Classname for outermost container
 `hint` |  | ```undefined``` | node | 


DateField
=========

### Import
```js
  import DateField from '@govuk-react/date-field';
```
<!-- STORY -->

### Usage

Simple
```jsx
<DateField>What is your date of birth?</DateField>
```

Date with hint text
```jsx
<DateField hintText="For example, 31 03 1980">
  What is your date of birth?
</DateField>
```

Date with hint text & error
```jsx
<DateField
  hintText="For example, 31 03 1980"
  errorText="Error message goes here"
>
  What is your date of birth?
</DateField>
```

With custom input name props
```jsx
<DateField hintText="For example, 31 03 1980"
  inputNames={{
    day: 'dayInputName',
    month: 'monthInputName',
    year: 'yearInputName',
  }}
 >
  What is your date of birth?
</DateField>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/date-field

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `defaultValues` |  | ```{   day: undefined,   month: undefined,   year: undefined, }``` | custom | 
 `errorText` |  | ```undefined``` | string | Error text
 `hintText` |  | ```undefined``` | string | Optional hint text
 `input` |  | ```undefined``` | shape[object Object] | Properties that are sent to the input, matching final form and redux form input type
 `inputNames` |  | ```{   day: undefined,   month: undefined,   year: undefined, }``` | shape[object Object] | Input name attributes


Details
=======

### Import
```js
  import Details from '@govuk-react/details';
```
<!-- STORY -->

### Usage


Simple
```jsx
<Details summary="Help with nationality">
  I am a paragraph of hidden details, to be revealed when summary is clicked
</Details>
```

### References
- https://design-system.service.gov.uk/components/details/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/details/_details.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | The content that will be displayed when details are revealed
 `open` |  | ```false``` | bool | Flag to indicate whether to show component open by default
 `summary` | true | `````` | node | Text for the details summary link e.g. Help with nationality


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
import { Link } from '@govuk-react/link';

const fromData = [
  <Link href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </Link>,
];

<DocumentFooterMetadata from={fromData} />
```


DFM From & part of example
```jsx
import { Link } from '@govuk-react/link';

const fromData = [
  <Link href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </Link>,
];
const partOfData = [
  <Link href="/government/topics/energy">Energy</Link>,
  <Link href="/government/topics/environment">Environment</Link>,
];

<DocumentFooterMetadata from={fromData} partOf={partOfData} />
```


DFM From & other data example
```jsx
import { Link } from '@govuk-react/link';

const fromData = [
  <Link href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </Link>,
];
const otherData = [
  {
    id: 0,
    title: 'Consultation type',
    content: <Link href="/government/publications">Open</Link>,
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
 `from` |  | ```undefined``` | arrayOf[object Object] | Array of JSX nodes to render underneath the `from:` title
 `other` |  | ```undefined``` | arrayOf[object Object] | Array of Objects for any additional items, each object should contain an `id`, `title` and `content` property
 `partOf` |  | ```undefined``` | arrayOf[object Object] | Array of JSX nodes to render underneath the `part of:` title


ErrorSummary
============

### Import
```js
  import ErrorSummary from '@govuk-react/error-summary';
```
<!-- STORY -->

### Usage

Simple
```jsx
const heading = 'Message to alert the user to a problem goes here';
const description = 'Optional description of the errors and how to correct them';
const errors = [
  {
    targetName: 'national-insurance-number',
    text: 'National Insurance number error',
  },
  {
    targetName: 'description',
    text: 'Description of what you saw error',
  },
];

const onHandleErrorClick = (targetName) => {
  document.getElementsByName(targetName)[0].scrollIntoView();
};

<div>
  <ErrorSummary
    heading={heading}
    description={description}
    onHandleErrorClick={onHandleErrorClick}
    errors={errors}
  />
  <InputField
    name="national-insurance-number"
    hint="It’s on your National Insurance card, benefit letter, payslip or P60."
  >
    National Insurance number
  </InputField>
  <br />
  <TextArea name="description">Description of what you saw</TextArea>
</div>
```

### References:
- https://govuk-elements.herokuapp.com/errors/#summarise-errors
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/error-summary

### TODO:
- Swap out browser dependancy for context API to help with React Native support

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `description` |  | ```undefined``` | string | Optional description of the errors
 `errors` |  | ```[]``` | arrayOf[object Object] | Array of errors with text and target element name to scroll into view when clicked
 `heading` | true | `````` | string | Heading text
 `onHandleErrorClick` |  | ```() => {}``` | func | onClick function to scroll the target element into view


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
<ErrorText>Example</ErrorText>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/error-message/_error-message.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | string | Text to describe the error


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
 `acceptedFormats` |  | ```undefined``` | string | 
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | Optional hint text
 `meta` |  | ```{}``` | shape[object Object] | Final form meta object, pending adjustment/removal


GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->

Should always be wrapped by `GridRow`. Will always render a column at 100% width if
the browser width is below the `LARGESCREEN` breakpoint.

### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol columnOneHalf>
      ...
    </GridCol>
    <GridCol columnOneQuarter>
      ...
    </GridCol>
    <GridCol columnOneQuarter>
      ...
    </GridCol>
  <GridRow>
    <GridCol columnOneThird>
      ...
    </GridCol>
    <GridCol columnTwoThirds>
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | GridCol content
 `columnOneHalf` |  | ```false``` | bool | Dimension setting for the column
 `columnOneQuarter` |  | ```false``` | bool | Dimension setting for the column
 `columnOneThird` |  | ```false``` | bool | Dimension setting for the column
 `columnTwoThirds` |  | ```false``` | bool | Dimension setting for the column


GridRow
=======

### Import
```js
  import GridRow from '@govuk-react/grid-row';
```
<!-- STORY -->

### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more GridCol nodes


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
<Header level={6} size={80}>
  h6 with font size 80
</Header>
<Header level={2} size="SMALL">
  h2 with SMALL size
</Header>
<H3 size="LARGE">h3 with LARGE size</H3>
```

Props pass through
```jsx
<Header onClick={() => { console.log('clicked'); }}>Click me</Header>
```

### References:
- https://design-system.service.gov.uk/styles/typography/#headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | ```1``` | number | Semantic heading level value between 1 and 6
 `size` |  | ```undefined``` | enum(...Object.keys(HEADING_SIZES) \| ...Object.keys(TYPOGRAPHY_SCALE)) | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`<br/>   or a numeric size that fits in the GDS font scale list


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
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/hint/_hint.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the hint


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
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | node | 
 `input` |  | ```{}``` | shape[object Object] | 
 `meta` |  | ```{}``` | shape[object Object] | 


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
 `type` |  | ```'text'``` | string | HTML `<Input />` type


InsetText
=========

### Import
```js
  import InsetText from '@govuk-react/inset-text';
```
<!-- STORY -->

### Usage

```jsx
<InsetText>
 Hello
</InsetText>
```

### References
- https://design-system.service.gov.uk/components/inset-text/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 


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

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the label


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

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text for the label


Layout
======

### Import
```js
  import Layout from '@govuk-react/layout';
```
<!-- STORY -->

THIS COMPONENT IS NO LONGER REQUIRED TO ACHIEVE LAYOUT;
1. `GridCol` contains the required gutters, we do not need to provide additional gutter
to build an accurate grid layout.

2. `GridRow` contains the required `display: flex;` and associated properties for `GridCol`.

3. `Main` contains the required properties to center a container that matches up with `TopNav`
and house the remaining body of content for the page.

If you feel you may still need a `Layout` component, please do raise a ticket on [Github](https://github.com/govuk-react/govuk-react/issues/177)

### Usage

This component provides default padding.
You can use this component to wrap Grid components however it is not required.

Simple usage
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Layout>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Layout>
```

### References:
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | GridRow and GridCol children nodes


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
- https://design-system.service.gov.uk/styles/typography/#paragraphs

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Text in the Lead paragraph


Link
====

### Import
```js
  import Link from '@govuk-react/link';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Link href="/some/page">Example</Link>
```

It is possible to use this component to style a link from react-router, or reach-router
as follows:
```jsx
import { Link as RouterLink } from 'react-router-dom';

<Link as={RouterLink} to="destination">Router example</Link>
```

NB if no link destination is set then the link styling will not be applied

### References
- https://design-system.service.gov.uk/styles/typography/#links
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_links.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | link contents
 `muted` |  | ```false``` | bool | show link in a "muted" (grey) style
 `noVisitedState` |  | ```false``` | bool | ensure there is no "visited" style
 `textColour` |  | ```false``` | bool | ensure link is shown in plain text colour


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

With a link
```jsx
import { Link } from '@govuk-react/link';

<ListItem>
  <Link href="https://www.google.com/">List item example</Link>
</ListItem>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | List item content


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
import Link from '@govuk-react/link';

<ListNavigation>
  <Link href="/section-a">Section A</Link>
  <Link href="/section-b">Section B</Link>
</ListNavigation>
```

Using React Router with `Link` component for GDS styled links
```jsx
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@govuk-react/link';

<ListNavigation listStyleType="circle">
  <Link as={RouterLink} to="/link-a">Link A</Link>
  <Link as={RouterLink} to="/link-b">Link B</Link>
</ListNavigation>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/government_navigation

### TODO:
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
- Fix active state overlaping siblings

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | List navigation content
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`


LoadingBox
==========

### Import
```js
  import LoadingBox from '@govuk-react/loading-box';
```
<!-- STORY -->

### Usage

Simple
```jsx
<LoadingBox loading>
  Lorem ipsum dolor sit amet
</LoadingBox>
```

Loading box complex
```jsx
<LoadingBox
   loading={false}
   backgroundColor={'#fff'}
   timeIn={800}
   timeOut={200}
   backgroundColorOpacity={0.85}
   spinnerColor={'#000'}
>
  Lorem ipsum dolor sit amet
</LoadingBox>
```

### References:
- https://govuk-loader-prototype.herokuapp.com/components/loader

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `backgroundColor` |  | ```WHITE``` | string | Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
 `backgroundColorOpacity` |  | ```0.85``` | number | Opacity of loading spinner backgroud colour when loading is true
 `children` | true | `````` | node | One or more children nodes that loading box will overlay
 `loading` |  | ```false``` | bool | Whether loading is currently set to true or false
 `spinnerColor` |  | ```BLACK``` | string | Color (3 or 6 Hex char) of loading spinner
 `timeIn` |  | ```800``` | number | Length of fade-in animation in milliseconds
 `timeOut` |  | ```200``` | number | Length of fade-out animation in milliseconds
 `title` |  | ```undefined``` | string | Loading spinner title text


Main
====

### Import
```js
  import Main from '@govuk-react/main';
```
<!-- STORY -->

Provides a container which aligns to the topNav component,
is centered, and provides top padding.


### Usage

Example
* https://codesandbox.io/s/x917knwm4z

Simple
```jsx
import GridRow from '@govuk-react/grid-row';
import GridCol from '@govuk-react/grid-col';

<Main>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Main>
```

### TODO
- Implement the 1020px min-width MQ to constants

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | Child nodes for the page being built


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
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | 
 `label` | true | `````` | node | 
 `meta` |  | ```{}``` | shape[object Object] | 


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
import OrderedList from '@govuk-react/ordered-list';
import ListItem from '@govuk-react/list-item';

<OrderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

with Roman
```jsx
import OrderedList from '@govuk-react/ordered-list';
import ListItem from '@govuk-react/list-item';

<OrderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

### References
- https://design-system.service.gov.uk/styles/typography/#lists
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss

### TODO
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more ListItem components
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend


Page
====

### Import
```js
  import Page from '@govuk-react/page';
```
<!-- STORY -->



### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `beforeChildren` |  | ```undefined``` | node | Add content that needs to appear outside `<main>` element.<br/>For example: The back link component, phase banner component
 `children` |  | ```undefined``` | node | Add content that needs to appear centered in the `<main>` element
 `container` |  | ```({ children }) => <WidthContainer>{children}</WidthContainer>``` | func | Render props to allow the width container element to be overriden
 `footer` |  | ```undefined``` | node | Override the default footer component.
 `header` |  | ```<TopNav />``` | node | Override the default header (top nav) component.
 `main` |  | ```({ children, beforeChildren }) => (   <React.Fragment>     {beforeChildren}     <Page.Main>       {children}     </Page.Main>   </React.Fragment> )``` | func | Render props for the main section, provides chilren and beforeChildren props


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

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | `asPaginationItem` nodes


Panel
=====

### Import
```js
  import Panel from '@govuk-react/panel';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Panel title="Application complete" />
```

Panel with header and HTML body
```jsx
<Panel title="Application complete">
  Your reference number<br />
  <strong>HDJ2123F</strong>
</Panel>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/panel

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | node | Panel body text
 `title` | true | `````` | string | Panel title text


Paragraph
=========

### Import
```js
  import Paragraph from '@govuk-react/paragraph';
```
<!-- STORY -->

Supports bold, italic, links, inline code and block code in Markdown ONLY.
This is to ensure we follow GDS as closely as possible.
It is worth noting that GDS recommends avoiding bold and italics.

Bold should be avoided in general as not only can it dilute the message, it will also
cause Screenreaders to increase the volume of any bold text to reflect the increase in
font-weight.

### Usage

Simple
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

With React router

```jsx
const ReactRouterLinkRenderer = ({ href, children }) => (
  href.match(/^\//)
    ? <Link to={href}>{children}</Link>
    : <a href={href}>{children}</a>
);

<Paragraph linkRenderer={ReactRouterLinkRenderer}>
  ...
</Paragraph>
```

### References
- https://govuk-elements.herokuapp.com/typography/#typography-body-copy

### TODO
- Add test for supporting text
- Review code snippet styling
- Remove magic numbers from inline code styling blocks

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```''``` | node | Text content supporting markdown
 `linkRenderer` |  | ```props => <Anchor {...props} />``` | func | 
 `supportingText` |  | ```false``` | bool | Is this paragraph supporting text for another element?


PhaseBanner
===========

### Import
```js
  import PhaseBanner from '@govuk-react/phase-banner';
```
<!-- STORY -->

### Usage

Alpha
```jsx
<PhaseBanner level="alpha">
   This part of GOV.UK is being rebuilt &#8211;{' '}
   <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 </PhaseBanner>
```

Beta
```jsx
<PhaseBanner level="beta">
   This part of GOV.UK is being rebuilt &#8211;{' '}
   <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 </PhaseBanner>
```

### References:
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/phase-banner
- https://design-system.service.gov.uk/components/phase-banner/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Children text and links
 `level` | true | `````` | string | Alpha or beta banner


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
Radio with hint text
```jsx
<div>
  <Radio
   name="group1"
   hint="You'll have a user ID if you've registered for Self Assessment or filed a tax return
         online before."
  >
    Sign in with Government Gateway
  </Radio>
</div>
```
### References:
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/radios/_radios.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | 
 `className` |  | ```undefined``` | string | 
 `hint` |  | ```undefined``` | node | 
 `inline` |  | ```false``` | bool | 


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
import Link from '@govuk-react/link';
import ListItem from '@govuk-react/list-item';

<RelatedItems>
  <Header level={3}>Example header</Header>
  <UnorderedList listStyleType="none">
    <ListItem>
      <Link href="https://example.com">Link A</Link>
    </ListItem>
  </UnorderedList>
</RelatedItems>
```

### References:
- https://govuk-static.herokuapp.com/component-guide/related_items

### TODO:
- Replace CSS selectors with imported components

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Related items content


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
 `placeholder` |  | ```undefined``` | string | 


SectionBreak
============

### Import
```js
  import SectionBreak from '@govuk-react/section-break';
```
<!-- STORY -->

### Usage

Simple
```jsx
<SectionBreak>Example</SectionBreak>
```

### References
- https://design-system.service.gov.uk/styles/typography/#section-break
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_section-break.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | `````` | enum('XL' \| 'XLARGE' \| 'L' \| 'LARGE' \| 'M' \| 'MEDIUM') | 
 `visible` |  | ```undefined``` | bool | 


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
 `children` | true | `````` | node | 
 `errorText` |  | ```undefined``` | string | 
 `hint` |  | ```undefined``` | string | 
 `input` |  | ```{}``` | shape[object Object] | 
 `label` | true | `````` | string | 
 `meta` |  | ```{}``` | shape[object Object] | 


SupportingHeader
================

### Import
```js
  import SupportingHeader from '@govuk-react/supporting-header';
```
<!-- STORY -->

### Usage

Simple
```jsx
<SupportingHeader>Heading text</SupportingHeader>
```

With another header
```jsx
import { H1 } from '@govuk-react/header';

<SupportingHeader>Supporting header text</SupportingHeader>
<H1>Main header text</H1>
```

### References
- https://govuk-elements.herokuapp.com/typography/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | string | Text to be rendered as a supporting header


Table
=====

### Import
```js
  import Table from '@govuk-react/table';
```
<!-- STORY -->

### Usage

Component default
```jsx
const example1Body = (
 <React.Fragment>
   <Table.Row>
     <Table.CellHeader>First 6 weeks</Table.CellHeader>
     <Table.Cell>£109.80 per week</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Next 33 weeks</Table.Cell>
     <Table.Cell>£109.80 per week</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Total estimated pay</Table.Cell>
     <Table.Cell>£4,282.20</Table.Cell>
   </Table.Row>
   <Table.Row>
     <Table.Cell>Tell the mother&rsquo;s employer</Table.Cell>
     <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
   </Table.Row>
 </React.Fragment>
);

<Table caption="Dates and amounts" body={example1Body} />
```

Numeric tabular data
```jsx
const example2Head = (
  <Table.Row>
    <Table.CellHeader>Month you apply</Table.CellHeader>
    <Table.CellHeader alignRight>Rate for vehicles</Table.CellHeader>
    <Table.CellHeader alignRight>Rate for bicycles</Table.CellHeader>
  </Table.Row>
);

const example2Body = (
  <React.Fragment>
    <Table.Row>
      <Table.CellHeader>January</Table.CellHeader>
      <Table.Cell alignRight>£165.00</Table.Cell>
      <Table.Cell alignRight>£85.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>February</Table.CellHeader>
      <Table.Cell alignRight>£165.00</Table.Cell>
      <Table.Cell alignRight>£85.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>March</Table.CellHeader>
      <Table.Cell alignRight>£151.00</Table.Cell>
      <Table.Cell alignRight>£77.00</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.CellHeader>April</Table.CellHeader>
      <Table.Cell alignRight>£136.00</Table.Cell>
      <Table.Cell alignRight>£70.00</Table.Cell>
    </Table.Row>
  </React.Fragment>
);

<Table
 caption="Attention, I am the caption of this ship!"
 head={example2Head}
 body={example2Body}
/>
```

### References:
- https://govuk-elements.herokuapp.com/data/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `body` | true | `````` | node | Table body rows and cells
 `caption` |  | ```undefined``` | string | Table caption title
 `head` |  | ```undefined``` | node | Table header rows and cells


Tag
===

### Import
```js
  import Tag from '@govuk-react/tag';
```
<!-- STORY -->

### Usage

Simple
```jsx
<Tag>beta</Tag>
```

### References:
- https://design-system.service.gov.uk/components/tag/
- https://github.com/alphagov/govuk-frontend/blob/master/src/components/tag/_tag.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `inactive` |  | ```false``` | bool | 


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
 `children` | true | `````` | node | 
 `hint` |  | ```undefined``` | string | 
 `input` |  | ```{}``` | shape[object Object] | 
 `meta` |  | ```{}``` | shape[object Object] | 


TopNav
======

### Import
```js
  import TopNav from '@govuk-react/top-nav';
```
<!-- STORY -->

### Usage

TopNav with logo, service title and navigation items
```jsx
import CrownIcon from '@govuk-react/icon-crown';
import SearchBox from '@govuk-react/search-box';
import TopNav, { asNavLinkAnchor, asTopNavAnchor } from '@govuk-react/top-nav';

const LogoAnchor = asTopNavAnchor('a');
const NavAnchor = asNavLinkAnchor('a');

const link = 'https://example.com?=1';

const Company = (
  <LogoAnchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoAnchor>
);

const ServiceTitle = (
  <NavAnchor href={link} target="new">
    Service Title
  </NavAnchor>
);

const Search = (
  <SearchBox placeholder="Search">hi</SearchBox>
);

<TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
  <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavAnchor>
  <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavAnchor>
</TopNav>
```

```jsx
import { BrowserRouter, Link } from 'react-router-dom';
import CrownIcon from '@govuk-react/icon-crown';
import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';

const LogoLink = asTopNavAnchor(Link);
const NavLink= asNavLinkAnchor(Link);

const reactRouterLink = '/section';
const CompanyLink = (
  <LogoLink to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </LogoLink>
);

const ServiceTitleLink = (
  <NavLink to={reactRouterLink}>
    Service Title
  </NavLink>
);

<BrowserRouter>
  <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
</BrowserRouter>
```

### References:
- http://alphagov.github.io/govuk_template/example-proposition-menu.html
- https://design-system.service.gov.uk/components/header/

### TODO:
- TODO: this component is a work in progress and needs to more closely match existing examples
- TODO: is TopNav the right name? What's it called in other GDS styles/patterns?
- TODO: (The name Header is ambiguous)
- TODO: #205 Use context api and/or render props for `active` navigation items
- TODO: Vertical alignment here needs some work, perhaps should be its own component
- TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `bgColor` |  | ```BLACK``` | string | Top nav background color
 `children` |  | ```undefined``` | node | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | ```WHITE``` | string | Top nav text color
 `company` |  | ```<IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>``` | node | Company component e.g. GOV UK
 `defaultOpen` |  | ```false``` | bool | Is the mobile navigation open by default?
 `search` |  | ```false``` | node | Search component
 `serviceTitle` |  | ```undefined``` | node | Service title component e.g. Food Standards Authority


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
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';

<UnorderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

with Roman
```jsx
import UnorderedList from '@govuk-react/unordered-list';
import ListItem from '@govuk-react/list-item';

<UnorderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

### References
- https://design-system.service.gov.uk/styles/typography/#lists
- https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | One or more ListItem components
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend


WarningText
===========

### Import
```js
  import WarningText from '@govuk-react/warning-text';
```
<!-- STORY -->

### Usage

Simple
```jsx
<WarningText>Example</WarningText>
```

### References:
- https://govuk-elements.herokuapp.com/typography/#typography-warning-text
- https://github.com/alphagov/govuk-frontend/tree/master/src/components/warning-text

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` | node | Warning text to be displayed


