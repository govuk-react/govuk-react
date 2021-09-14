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
import { BackLink } from 'govuk-react'

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

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/back-link

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `as` |  | ```undefined``` |  | 
 `children` |  | ```'Back'``` |  | 
 `href` |  | ```undefined``` |  | 
 `onClick` |  | ```undefined``` |  | 
 `to` |  | ```undefined``` |  | 



Breadcrumbs
===========

### Import
```js
  import Breadcrumbs from '@govuk-react/breadcrumbs';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { Breadcrumbs } from 'govuk-react'

<Breadcrumbs>
  <Breadcrumbs.Link href="/section">Section</Breadcrumbs.Link>
  <Breadcrumbs.Link href="/section/sub-section">Sub-section</Breadcrumbs.Link>
  Current page
</Breadcrumbs>
```

Providing links with, or without React Router

```jsx
import { Link } from 'react-router-dom';

<Breadcrumbs>
  <Breadcrumbs.Link as={Link} to="/section">Section</Breadcrumbs.Link>
  <Breadcrumbs.Link href="/section">Sub-section</Breadcrumbs.Link>
</Breadcrumbs>
```

### References:

- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/breadcrumbs/_breadcrumbs.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Breadcrumbs contents



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
import { Button } from 'govuk-react'

<Button>My button text</Button>
```

With Icon

```jsx
import { ButtonArrow } from 'govuk-react'

<Button icon={<ButtonArrow />}>My button text</Button>
```

### References:

- https://design-system.service.gov.uk/components/button/
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/button/_button.scss

### TODO:
- Remove cascade styling for nested elements, specifically `svg`
- Consider ensuring text colour automatically switches between black/white based on WCAG guidance
  - see https://www.w3.org/TR/WCAG20-TECHS/G18.html
  - can use Polished's `readableColor` call, but translate their black to govuk's black

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `as` |  | ```undefined``` |  | 
 `buttonColour` |  | ```undefined``` |  | Override for default button colour
 `buttonHoverColour` |  | ```undefined``` |  | Override for default button hover colour,<br/>which defaults to `buttonColour` darkened by 5%
 `buttonShadowColour` |  | ```undefined``` |  | Override for default button shadow colour,<br/>which defaults to `buttonColour` darkened by 15%
 `buttonTextColour` |  | ```undefined``` |  | Override for default button text colour,<br/>which defaults to govuk white
 `children` | true | `````` |  | Button text
 `disabled` |  | ```false``` |  | Renders a disabled button and removes pointer events if set to true
 `icon` |  | ```undefined``` |  | Button icon
 `start` |  | ```false``` |  | Renders a large button if set to true
 `to` |  | ```undefined``` |  | 



Caption
=======

### Import
```js
  import Caption from '@govuk-react/caption';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { Caption } from 'govuk-react'

<Caption>Caption heading text</Caption>
```

With another header

```jsx
import { H1 } from 'govuk-react'

<Caption size="XL">Supporting header text</Caption>
<H1>Main header text</H1>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss
- https://design-system.service.gov.uk/styles/typography/#headings

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Text to be rendered as a caption
 `size` |  | ```'XL'``` |  | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `XL`, `L`, `M`<br/>   or a numeric size that fits in the GDS font scale list



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
import { Checkbox } from 'govuk-react'

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

- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/checkboxes/_checkboxes.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Text content for checkbox
 `className` |  | ```undefined``` |  | CSS Classname for outermost container
 `hint` |  | ```undefined``` |  | 



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
import { DateField } from 'govuk-react'

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

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/date-field

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 
 `defaultValues` |  | ```{   day: undefined,   month: undefined,   year: undefined, }``` |  | 
 `errorText` |  | ```undefined``` |  | Error text
 `hintText` |  | ```undefined``` |  | Optional hint text
 `input` |  | ```undefined``` |  | Properties that are sent to the input, matching final form and redux form input type
 `inputNames` |  | ```{   day: undefined,   month: undefined,   year: undefined, }``` |  | Input name attributes



Details
=======

### Import
```js
  import Details from '@govuk-react/details';
```
<!-- STORY -->

### IE Compatibility

Please note that this component uses a <details> component, which requires a polyfill to work correctly on Internet Explorer.

### Usage


Simple

```jsx
import { Details } from 'govuk-react'

<Details summary="Help with nationality">
  I am a paragraph of hidden details, to be revealed when summary is clicked
</Details>
```

### References
- https://design-system.service.gov.uk/components/details/
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/details/_details.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` |  | The content that will be displayed when details are revealed
 `open` |  | ```false``` |  | Flag to indicate whether to show component open by default
 `summary` | true | `````` |  | Text for the details summary link e.g. Help with nationality



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
import { DocumentFooterMetadata, Link } from 'govuk-react'

const fromData = [
  <Link href="/government/organisations/ministry-of-defence">
    Ministry of Defence
  </Link>,
];

<DocumentFooterMetadata from={fromData} />
```


DFM From & part of example

```jsx
import { DocumentFooterMetadata, Link } from 'govuk-react'

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
import { DocumentFooterMetadata, Link } from 'govuk-react'

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
 `from` |  | ```undefined``` |  | Array of JSX nodes to render underneath the `from:` title
 `other` |  | ```undefined``` |  | Array of Objects for any additional items, each object should contain an `id`, `title` and `content` property
 `partOf` |  | ```undefined``` |  | Array of JSX nodes to render underneath the `part of:` title



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
    input={{ name: 'national-insurance-number' }}
    hint="It’s on your National Insurance card, benefit letter, payslip or P60."
  >
    National Insurance number
  </InputField>
  <br />
  <TextArea input={{ name: 'description' }}>Description of what you saw</TextArea>
</div>
```

### References:

- https://govuk-elements.herokuapp.com/errors/#summarise-errors
- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/error-summary

### TODO:
- Swap out browser dependancy for context API to help with React Native support

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `description` |  | ```undefined``` |  | Optional description of the errors
 `errors` |  | ```[]``` |  | Array of errors with text and target element name to scroll into view when clicked
 `heading` |  | ```'There is a problem'``` |  | Heading text
 `onHandleErrorClick` |  | ```undefined``` |  | onClick function to scroll the target element into view



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
import { Label, LabelText, HintText, ErrorText, Input } from 'govuk-react'

<Label>
  <LabelText>Example label</LabelText>
  <HintText>Example hint</HintText>
  <ErrorText>Example error</ErrorText>
  <Input value={value} onClick={onClick} />
</Label>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/error-message/_error-message.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Text to describe the error



Fieldset
========

### Import
```js
  import Fieldset from '@govuk-react/fieldset';
```
<!-- STORY -->

### Usage

Use the fieldset component when you need to show a relationship between multiple
form inputs. For example, you may need to group a set of text inputs into a single
fieldset when asking for an address.

Simple

```jsx
import { Fieldset } from 'govuk-react'

<Fieldset>
  <Fieldset.Legend>Example</Fieldset.Legend>
</Fieldset>
```

The `Fieldset.Legend` sub-component supports a `size` prop compatible with Heading
and a `isPageHeading` prop for use when you wish your legend to be used as a page heading

Custom legend

```jsx
<Fieldset>
  <Fieldset.Legend size="XL" isPageHeading>Legend as page heading</Fieldset.Legend>
</Fieldset>
```

### References
- https://design-system.service.gov.uk/components/fieldset/
- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/fieldset
- https://design-system.service.gov.uk/get-started/labels-legends-headings/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 



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
import { FileUpload } from 'govuk-react'

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

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/file-upload

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `acceptedFormats` |  | ```undefined``` |  | 
 `children` | true | `````` |  | 
 `hint` |  | ```undefined``` |  | Optional hint text
 `meta` |  | ```{}``` |  | Final form meta object, pending adjustment/removal
 `name` |  | ```undefined``` |  | 
 `onChange` |  | ```undefined``` |  | 



Footer
======

### Import
```js
  import Footer from '@govuk-react/footer';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { Footer } from 'govuk-react'

<Footer />
```

Footer with Copyright information

```jsx
// Import self hosted copyright image
import crest from './govuk-crest.png';

<Footer
  copyright={{
    text: 'Crown copyright',
    link:
      'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
    image: {
      source: crest,
      height: 102,
      width: 125,
    },
  }}
/>;
```

Footer with navigation.  There is also the option to provide footer links with, or without React/Reach Router.

```jsx
import { Link } from 'react-router-dom';

<Footer>
  <Footer.Navigation>
    <Footer.NavigationLinks heading="Two column list" listColumns={2}>
      <Footer.Link href="/">Navigation item 1</Footer.Link>
      <Footer.Link to="/footer-nav-item-2" as={Link}>Navigation item 2 (Router Link)</Footer.Link>
      <Footer.Link href="/">Navigation item 3</Footer.Link>
      <Footer.Link href="/">Navigation item 4</Footer.Link>
      <Footer.Link href="/">Navigation item 5</Footer.Link>
      <Footer.Link href="/">Navigation item 6</Footer.Link>
    </Footer.NavigationLinks>
    <Footer.NavigationLinks heading="Single column list">
      <Footer.Link href="/">Navigation item 1</Footer.Link>
      <Footer.Link href="/">Navigation item 2</Footer.Link>
      <Footer.Link href="/">Navigation item 3</Footer.Link>
    </Footer.NavigationLinks>
  </Footer.Navigation>
</Footer>
```

Footer with links in meta area

```jsx
<Footer meta={
    <Footer.MetaLinks heading="Support links">
      <Footer.Link href="/">Item 1</Footer.Link>
      <Footer.Link to="/footer-meta-item-2" as={Link}>Item 2 (Router Link)</Footer.Link>
      <Footer.Link href="/">Item 3</Footer.Link>
    </Footer.MetaLinks>
  }
/>
```

Footer with custom content in meta area

```jsx
<Footer meta={
    <Footer.MetaCustom>
      Built by the <Footer.Link href="/">Government Digital Service</Footer.Link>
    </Footer.MetaCustom>
  }
/>
```

NB <Footer.Link /> is styled extention of @govuk-react/link

### References:

- https://design-system.service.gov.uk/components/footer/
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/footer/template.njk
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/footer/_footer.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` |  | Footer navigation links
 `container` |  | ```Footer.WidthContainer``` |  | Override the default footer container component.<br/>`children`, `copyright` and `meta` will be placed inside this component.
 `copyright` |  | ```undefined``` |  | Copyright information
 `meta` |  | ```undefined``` |  | Meta text and links



FormGroup
=========

### Import
```js
  import FormGroup from '@govuk-react/form-group';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { FormGroup, Checkbox } from 'govuk-react'

<FormGroup>
  <Checkbox name="group-1">Example</Checkbox>
</FormGroup>
```

### References

- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_form-group.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | `````` |  | 
 `error` |  | ```false``` |  | 



GlobalStyle
===========

### Import
```js
  import GlobalStyle from '@govuk-react/global-style';
```
<!-- STORY -->

A Styled Component to apply global style for use with govuk-react.

### Usage

Simple

```jsx
import GlobalStyle from '@govuk-react/global-style';

const MyApp = () => <>
  <GlobalStyle />
  <div>Example</div>
</>
```

### References:

- https://styled-components.com/docs/api#createglobalstyle



GridCol
=======

### Import
```js
  import GridCol from '@govuk-react/grid-col';
```
<!-- STORY -->

Should always be wrapped by `GridRow`. Will always render a column at full width if
the browser width is below the `TABLET` breakpoint.

NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
floats, however it is otherwise similar to use.

### Usage

Simple

```jsx
import { GridRow , GridCol } from 'govuk-react'

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol setWidth="one-half">
      ...
    </GridCol>
    <GridCol setWidth="one-quarter">
      ...
    </GridCol>
    <GridCol setWidth="one-quarter">
      ...
    </GridCol>
  <GridRow>
    <GridCol setWidth="one-third">
      ...
    </GridCol>
    <GridCol setWidth="two-thirds">
      ...
    </GridCol>
  </GridRow>
  <GridRow>
    <GridCol setWidth="one-third" setDesktopWidth="one-quarter">
      ...
    </GridCol>
    <GridCol setWidth="two-thirds" setDesktopWidth="auto">
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
 `children` |  | ```undefined``` |  | 
 `columnFull` |  | ```false``` |  | 
 `columnOneHalf` |  | ```false``` |  | 
 `columnOneQuarter` |  | ```false``` |  | 
 `columnOneThird` |  | ```false``` |  | 
 `columnThreeQuarters` |  | ```false``` |  | 
 `columnTwoThirds` |  | ```false``` |  | 
 `setDesktopWidth` |  | ```undefined``` |  | 
 `setWidth` |  | ```undefined``` |  | 



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
import { GridRow, GridCol } from 'govuk-react'

<Fragment>
  <GridRow>
    <GridCol>
      ...
    </GridCol>
  </GridRow>
</Fragment>
```

See GridCol for extended usage.

### References:

- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss



Heading
=======

### Import
```js
  import Heading from '@govuk-react/heading';
```
<!-- STORY -->

### Usage


Simple

```jsx
import { Heading } from 'govuk-react'

<Heading>Heading text</Heading>
```

To pick different heading levels it is recommended to use the shortcut versions as
that will pick the appropriate tag as well as set the appropriate corresponding font size.

Using shortcuts

```jsx
import { H1, H2, H3, H4, H5, H6 } from 'govuk-react'

<H1>h1</H1>
<H2>h2</H2>
<H3>h3</H3>
<H4>h4</H4>
<H5>h5</H5>
<H6>h6</H6>
```

Differing sizes

```jsx
<H6 size={80}>
  H6 with font size 80
</H6>
<Heading as="h2" size="SMALL">
  Heading as h2 with SMALL size
</Heading>
<H3 size="LARGE">H3 with LARGE size</H3>
```

Props pass through

```jsx
<Heading onClick={() => { console.log('clicked'); }}>Click me</Heading>
```

### References:

- https://design-system.service.gov.uk/styles/typography/#headings
- https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_typography.scss
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_typography.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `as` |  | ```undefined``` |  | Semantic heading tag to use (e.g. 'h3')<br/>By default element used will be an 'h1'
 `level` |  | ```undefined``` |  | Semantic heading level value between 1 and 6 (deprecated)
 `size` |  | ```'XLARGE'``` |  | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `SMALL`, `XL`, `L`, `M`, `S`<br/>   or a numeric size that fits in the GDS font scale list



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
import { Label, LabelText, HintText, ErrorText, Input } from 'govuk-react'

<Label>
  <LabelText>Example label</LabelText>
  <HintText>Example hint</HintText>
  <ErrorText>Example error</ErrorText>
  <Input value={value} onClick={onClick} />
</Label>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/hint/_hint.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Text for the hint



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
import { InputField } from 'govuk-react'

<InputField name="group0">National Insurance number</InputField>
```

Input with hint text

```jsx
<InputField
   input={{ name: 'group1' }}
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
   input={{ name: 'group1' }}
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

- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/input/_input.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 
 `hint` |  | ```undefined``` |  | 
 `input` |  | ```{}``` |  | 
 `meta` |  | ```{}``` |  | 



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
import { Label, LabelText, HintText, ErrorText, Input } from 'govuk-react'

<Label>
  <LabelText>Example label</LabelText>
  <HintText>Example hint</HintText>
  <ErrorText>Example error</ErrorText>
  <Input value={value} onClick={onClick} />
</Label>
```

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/

### TODO:
- Remove `errorColor` and provide examples on how to extend the component

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `error` |  | ```false``` |  | 
 `errorColor` |  | ```undefined``` |  | 
 `type` |  | ```'text'``` |  | HTML `<Input />` type



InsetText
=========

### Import
```js
  import InsetText from '@govuk-react/inset-text';
```
<!-- STORY -->

### Usage

```jsx
import { InsetText } from 'govuk-react'

<InsetText>
 Hello
</InsetText>
```

### References
- https://design-system.service.gov.uk/components/inset-text/
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/inset-text/_inset-text.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 



LabelText
=========

### Import
```js
  import LabelText from '@govuk-react/label-text';
```
<!-- STORY -->

### Usage

Styled text to use as a label for a form input.

This is not a label element by default as it is assumed it will be wrap with Label.

Simple

```jsx
import { Label, LabelText, HintText, ErrorText, Input } from 'govuk-react'

<Label>
  <LabelText>Example label</LabelText>
  <HintText>Example hint</HintText>
  <ErrorText>Example error</ErrorText>
  <Input value={value} onClick={onClick} />
</Label>
```

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Text for the label



Label
=====

### Import
```js
  import Label from '@govuk-react/label';
```
<!-- STORY -->

Label element to wraps label-text and a form input

### Usage

Simple

```jsx
import { Label, LabelText, HintText, ErrorText, Input } from 'govuk-react'

<Label>
  <LabelText>Example label</LabelText>
  <HintText>Example hint</HintText>
  <ErrorText>Example error</ErrorText>
  <Input value={value} onClick={onClick} />
</Label>
```

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Text for the label
 `error` |  | ```false``` |  | Apply error state styling to the component



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
import { LeadParagraph } from 'govuk-react'

<LeadParagraph>LeadParagraph example</LeadParagraph>
```

### References
- https://design-system.service.gov.uk/styles/typography/#paragraphs

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Text in the Lead paragraph



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
import { Link } from 'govuk-react'

<Link href="/some/page">Example</Link>
```

It is possible to use this component to style a link from react-router, or reach-router
as follows:

```jsx
import { Link as RouterLink } from 'react-router-dom';

<Link as={RouterLink} to="destination">Router example</Link>
```

NB if no link destination is set then the link styling will not be applied.

### References

- https://design-system.service.gov.uk/styles/typography/#links
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_links.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | link contents
 `muted` |  | ```false``` |  | show link in a "muted" (grey) style
 `noVisitedState` |  | ```false``` |  | ensure there is no "visited" style
 `textColour` |  | ```false``` |  | ensure link is shown in plain text colour
 `to` |  | `````` |  | if useing as={Link}



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
import { ListItem } from 'govuk-react'

<ListItem>List item example</ListItem>
```

With a link

```jsx
import { ListItem, Link } from 'govuk-react';

<ListItem>
  <Link href="https://www.google.com/">List item example</Link>
</ListItem>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | List item content



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
import { ListNavigation, Link } from 'govuk-react';

<ListNavigation>
  <Link href="/section-a">Section A</Link>
  <Link href="/section-b">Section B</Link>
</ListNavigation>
```

Using React Router with `Link` component for GDS styled links

```jsx
import { Link as RouterLink } from 'react-router-dom';
import { ListNavigation, Link } from 'govuk-react';

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
 `children` | true | `````` |  | List navigation content
 `listStyleType` |  | ```undefined``` |  | CSS value for `list-style-type`



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
import { LoadingBox } from 'govuk-react'

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
 `backgroundColor` |  | ```WHITE``` |  | Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
 `backgroundColorOpacity` |  | ```0.85``` |  | Opacity of loading spinner backgroud colour when loading is true
 `children` | true | `````` |  | One or more children nodes that loading box will overlay
 `loading` |  | ```false``` |  | Whether loading is currently set to true or false
 `spinnerColor` |  | ```BLACK``` |  | Color (3 or 6 Hex char) of loading spinner
 `timeIn` |  | ```800``` |  | Length of fade-in animation in milliseconds
 `timeOut` |  | ```200``` |  | Length of fade-out animation in milliseconds
 `title` |  | ```undefined``` |  | Loading spinner title text



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
import { Main, GridRow, GridCol } from 'govuk-react'

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
 `children` |  | ```undefined``` |  | Child nodes for the page being built



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
import { MultiChoice, Radio } from 'govuk-react';

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
 `children` | true | `````` |  | 
 `hint` |  | ```undefined``` |  | 
 `label` | true | `````` |  | 
 `meta` |  | ```{}``` |  | 



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
import { OrderedList, ListItem } from 'govuk-react'

<OrderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

With Roman

```jsx
import { OrderedList, ListItem } from 'govuk-react'

<OrderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</OrderedList>
```

### References
- https://design-system.service.gov.uk/styles/typography/#lists
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss

### TODO
- Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `as` |  | ```undefined``` |  | 
 `children` | true | `````` |  | One or more ListItem components
 `listStyleType` |  | ```undefined``` |  | CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend



Page
====

### Import
```js
  import Page from '@govuk-react/page';
```
<!-- STORY -->

### Usage

Simple

```jsx
import { Page, BackLink, H1 } from 'govuk-react';

<Page beforeChildren={<BackLink href="#" />}>
  <H1>Page title</H1>
</Page>
```

### References
- https://design-system.service.gov.uk/styles/page-template/
- https://design-system.service.gov.uk/styles/layout/#page-wrappers
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_main-wrapper.scss
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_width-container.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `beforeChildren` |  | ```undefined``` |  | Content that needs to appear outside the main page wrapper (see `main`).<br/>For example: A back link component, breadcrumbs, phase banner component
 `children` |  | ```undefined``` |  | Page contents
 `container` |  | ```Page.WidthContainer``` |  | Override the default page container component.<br/>`beforeChildren` and `children` (wrapped in `main`) will be placed inside this component.
 `footer` |  | ```undefined``` |  | Override the default page footer component.
 `header` |  | ```<TopNav />``` |  | Override the default page header component.
 `id` |  | ```'content'``` |  | ID for page content
 `main` |  | ```Page.Main``` |  | Override the default wrapper component for main page content



Pagination
==========

### Import
```js
  import Pagination from '@govuk-react/pagination';
```
<!-- STORY -->

### Usage

```jsx
import { Pagination } from 'govuk-react';

<Pagination>
  <Pagination.Anchor href="#prev" previousPage>
    Previous page
  </Pagination.Anchor>
  <Pagination.Anchor href="#next" nextPage>
    Next page
  </Pagination.Anchor>
</Pagination>
```

### References:

- https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 



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
import { Panel } from 'govuk-react'

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

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/panel

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` |  | Panel body text
 `title` | true | `````` |  | Panel title text



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
import { Paragraph } from 'govuk-react'

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
 `children` |  | ```''``` |  | Text content supporting markdown
 `linkRenderer` |  | ```(props) => <Link {...props} />``` |  | 
 `supportingText` |  | ```false``` |  | Is this paragraph supporting text for another element?



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
import { PhaseBanner } from 'govuk-react'

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

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/phase-banner
- https://design-system.service.gov.uk/components/phase-banner/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Children text and links
 `level` | true | `````` |  | Alpha or beta banner



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
import { Radio } from 'govuk-react'

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

- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/radios/_radios.scss
- https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 
 `className` |  | ```undefined``` |  | 
 `hint` |  | ```undefined``` |  | 
 `inline` |  | ```false``` |  | 



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
import { H3, UnorderedList, ListItem, Link } from 'govuk-react';

<RelatedItems>
  <H3>Example heading</H3>
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
 `children` | true | `````` |  | Related items content



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
import { SearchBox } from 'govuk-react';

<SearchBox>
  <SearchBox.Input placeholder="Search GOV.UK" />
  <SearchBox.Button />
</SearchBox>
```

### References:

- https://govuk-static.herokuapp.com/component-guide/search



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
import { SectionBreak } from 'govuk-react'

<SectionBreak>Example</SectionBreak>
```

### References
- https://design-system.service.gov.uk/styles/typography/#section-break
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_section-break.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | `````` |  | 
 `visible` |  | ```undefined``` |  | 



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

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/select

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 
 `errorText` |  | ```undefined``` |  | 
 `hint` |  | ```undefined``` |  | 
 `input` |  | ```{}``` |  | 
 `label` | true | `````` |  | 
 `meta` |  | ```{}``` |  | 



SkipLink
========

### Import
```js
  import SkipLink from '@govuk-react/skip-link';
```
<!-- STORY -->

### Usage

Use the skip link component to help keyboard-only users skip to the main content on a page.

Simple

```jsx
import { SkipLink } from 'govuk-react'

<SkipLink href="#main-content">Skip to main content</SkipLink>
```

### References
- https://design-system.service.gov.uk/components/skip-link/
- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/skip-link

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```'Skip to main content'``` |  | 
 `href` |  | ```'#content'``` |  | 



Table
=====

### Import
```js
  import Table from '@govuk-react/table';
```
<!-- STORY -->

### Usage

The Table component provides a construction kit of elements to create a table

Component default

```jsx
import { Table } from 'govuk-react'

<Table caption="Dates and amounts">
 <Table.Row>
   <Table.CellHeader>First 6 weeks</Table.CellHeader>
   <Table.Cell>£109.80 per week</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Next 33 weeks</Table.CellHeader>
   <Table.Cell>£109.80 per week</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Total estimated pay</Table.CellHeader>
   <Table.Cell>£4,282.20</Table.Cell>
 </Table.Row>
 <Table.Row>
   <Table.CellHeader>Tell the mother&rsquo;s employer</Table.CellHeader>
   <Table.Cell>28 days before they want to start maternity pay</Table.Cell>
 </Table.Row>
</Table>
```

Numeric tabular data

```jsx
const example2Head = (
  <Table.Row>
    <Table.CellHeader>Month you apply</Table.CellHeader>
    <Table.CellHeader numeric>Rate for vehicles</Table.CellHeader>
    <Table.CellHeader numeric>Rate for bicycles</Table.CellHeader>
  </Table.Row>
);

<Table
 caption="Attention, I am the caption of this ship!"
 head={example2Head}
>
  <Table.Row>
    <Table.CellHeader>January</Table.CellHeader>
    <Table.Cell numeric>£165.00</Table.Cell>
    <Table.Cell numeric>£85.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>February</Table.CellHeader>
    <Table.Cell numeric>£165.00</Table.Cell>
    <Table.Cell numeric>£85.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>March</Table.CellHeader>
    <Table.Cell numeric>£151.00</Table.Cell>
    <Table.Cell numeric>£77.00</Table.Cell>
  </Table.Row>
  <Table.Row>
    <Table.CellHeader>April</Table.CellHeader>
    <Table.Cell numeric>£136.00</Table.Cell>
    <Table.Cell numeric>£70.00</Table.Cell>
  </Table.Row>
</Table>
```

Setting custom column widths

```jsx
<Table
  caption="Custom header"
  head={
    <Table.Row>
      <Table.CellHeader setWidth="one-half>Wide header</Table.CellHeader>
      <Table.CellHeader setWidth="30%">Regular</Table.CellHeader>
      <Table.CellHeader>Normal</Table.CellHeader>
    </Table.Row>
  }
>
  <Table.Row>
    <Table.Cell>Header makes this column one-half wide</Table.Cell>
    <Table.Cell>And this one 30%</Table.Cell>
    <Table.Cell>Another</Table.Cell>
  </Table.Row>
</Table>
```

### References:

- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `body` |  | ```undefined``` |  | Table body rows and cells (for backward compatibility)
 `caption` |  | ```undefined``` |  | Table caption title
 `children` |  | ```undefined``` |  | Table body rows and cells (recommended way)
 `head` |  | ```undefined``` |  | Table header rows and cells



Tabs
====

### Import
```js
  import Tabs from '@govuk-react/tabs';
```
<!-- STORY -->

### Simple Example
```js
import { Tabs } from 'govuk-react';

class App extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.setTabIndex = this.setTabIndex.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setTabIndex(newTabIndex) {
    this.setState({
      tabIndex: newTabIndex,
    }));
  }

  handleClick(e, index) {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
    if (mql.matches) {
      e.preventDefault();
    }
    return this.setTabIndex(index);
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.Title>Content</Tabs.Title>
        <Tabs.List>
          <Tabs.Tab
            onClick={(event) => this.handleClick(event, 0)}
            selected={tabIndex === 0}
            href="#first-panel"
          >
            Title 1
          </Tabs.Tab>
          <Tabs.Tab
            onClick={(event) => this.handleClick(event, 1)}
            selected={tabIndex === 1}
            href="#second-panel"
          >
            Title 2
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel selected={tabIndex === 0} id="first-panel">Panel content 1</Panel>
        <Tabs.Panel selected={tabIndex === 1} id="second-panel" >Panel content 2</Panel>
      </Tabs>
    );
  }
}
```

##### Hooks Example

```jsx
const App = ({ defaultIndex }) => {
  const [tabIndex, setTabIndex] = React.useState(defaultIndex);

  const handleTabChange = newTabIndex => setTabIndex(newTabIndex);

  function handleClick({ event: e, index }) {
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
    if (mql.matches) {
      e.preventDefault();
    }
    return handleTabChange(index);
  }

  return (
    <Tabs>
      <Tabs.Title>Content</Tabs.Title>
      <Tabs.List>
       {[
          {
            content: 'Title 1',
            href: '#first-panel',
          },
          {
            content: 'Title 2',
            href: '#second-panel',
          },
        ].map(({ content, href }, index) => (
          <Tabs.Tab
            onClick={(event) => handleClick({ event, index })}
            selected={tabIndex === index}
            href={href}
          >
           {content}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {[
        {
          content: 'Panel content 1',
          id: 'first-panel',
        },
        {
          content: 'Panel content 2',
          id: 'second-panel',
        },
      ].map(({ content, id }, index) => (
        <Tabs.Panel
          selected={tabIndex === index}
          id={id}
        >
         {content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}

```


### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/tabs
- https://design-system.service.gov.uk/components/tabs/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | child components that will appear in the Tabs section



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
import { Tag } from 'govuk-react'

<Tag>beta</Tag>
```

### References:

- https://design-system.service.gov.uk/components/tag/
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/tag/_tag.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `inactive` |  | ```false``` |  | 



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
import { TextArea } from 'govuk-react'

<TextArea input={{ name: 'group1' }}>Description of what you saw</TextArea>
```

TextArea with hint text

```jsx
<TextArea input={{ name: 'group1' }} hint={['Enter as many words as you like']}>
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
   input={{ name: 'group1' }}
   hint={['Enter as many words as you like']}
   meta={meta}
 >
   Description of what you saw
 </TextArea>
```

### References:

- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/textarea

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | 
 `hint` |  | ```undefined``` |  | 
 `input` |  | ```{}``` |  | 
 `meta` |  | ```{}``` |  | 



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
import { SearchBox, TopNav } from 'govuk-react';
import CrownIcon from '@govuk-react/icon-crown';

const link = 'https://example.com?=1';

const Company = (
  <TopNav.Anchor href={link} target="new">
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitle = (
  <TopNav.NavLink href={link} target="new">
    Service Title
  </TopNav.NavLink>
);

const Search = (
  <SearchBox>
    <SearchBox.Input placeholder="Search GOV.UK" />
    <SearchBox.Button />
  </SearchBox>
);

<TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
  <TopNav.NavLink href="https://example.com?q=catdog" target="new">Navigation item #1</TopNav.NavLink>
  <TopNav.NavLink href="https://example.com?q=dogcat" target="new">Navigation item #2</TopNav.NavLink>
</TopNav>
```

With React Router

```jsx
import { BrowserRouter, Link } from 'react-router-dom';
import { TopNav } from 'govuk-react';
import CrownIcon from '@govuk-react/icon-crown';

const reactRouterLink = '/section';
const CompanyLink = (
  <TopNav.Anchor as={Link} to={reactRouterLink}>
    <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
  </TopNav.Anchor>
);

const ServiceTitleLink = (
  <TopNav.NavLink as={Link} to={reactRouterLink}>
    Service Title
  </TopNav.NavLink>
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
 `bgColor` |  | ```BLACK``` |  | Top nav background color
 `children` |  | ```undefined``` |  | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | ```WHITE``` |  | Top nav text color
 `company` |  | ```<IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>``` |  | Company component e.g. GOV UK
 `defaultOpen` |  | ```false``` |  | Is the mobile navigation open by default?
 `search` |  | ```false``` |  | Search component
 `serviceTitle` |  | ```undefined``` |  | Service title component e.g. Food Standards Authority



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
import { UnorderedList, ListItem} from 'govuk-react';

<UnorderedList>
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

With Roman

```jsx
import { UnorderedList, ListItem} from 'govuk-react';

<UnorderedList listStyleType="lower-roman">
  <ListItem>Lorem ipsum dolor sit.</ListItem>
  <ListItem>Consectetur adipiscing elit.</ListItem>
  <ListItem>Curabitur et libero nec.</ListItem>
</UnorderedList>
```

### References
- https://design-system.service.gov.uk/styles/typography/#lists
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | One or more ListItem components
 `listStyleType` |  | ```undefined``` |  | CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend



VisuallyHidden
==============

### Import
```js
  import VisuallyHidden from '@govuk-react/visually-hidden';
```
<!-- STORY -->

### Usage

This component is primarily intended to be used for material that will be visually hidden
but visible to screen-reader devices.

Simple

```jsx
import { VisuallyHidden } from 'govuk-react'

<VisuallyHidden>Example</VisuallyHidden>
```

### References
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/helpers/_visually-hidden.scss
- https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/utilities/_visually-hidden.scss

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Content to be hidden
 `focusable` |  | ```false``` |  | Allow component to be focusable, and thus become visible
 `important` |  | ```true``` |  | Set styles with `!important`



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
import { WarningText } from 'govuk-react'

<WarningText>Example</WarningText>
```

### References:

- https://govuk-elements.herokuapp.com/typography/#typography-warning-text
- https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/warning-text

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true | `````` |  | Warning text to be displayed


