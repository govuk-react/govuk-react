BackLink
========

![Component Image](./docs/BackLink.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | Generally the text that will appear in the back link
 `goBack` |  | undefined | func | A function that is called on click


Breadcrumb
==========

![Component Image](./docs/Breadcrumb.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | Generally a series of anchors or Link components


Button
======

![Component Image](./docs/Button.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | 'Button' |  | 


Checkbox
========

![Component Image](./docs/Checkbox.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `inline` |  | undefined | bool | 


DateInput
=========

![Component Image](./docs/DateInput.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `errorText` |  | null | string | 
 `hintText` |  | null | string | 


DocumentFooterMetadata
======================

![Component Image](./docs/DocumentFooterMetadata.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `from` |  | undefined | array | 
 `other` |  | undefined | array | 
 `partOf` |  | undefined | array | 


ErrorText
=========

![Component Image](./docs/ErrorText.png)



FileUpload
==========

![Component Image](./docs/FileUpload.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `acceptedFormats` |  | null | string | 
 `children` | true |  | node | 
 `hint` |  | null | string | 
 `meta` |  | {} | shape[object Object] | 


GridCol
=======




Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | undefined | node | 


GridRow
=======




Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


Header
======

![Component Image](./docs/Header.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `level` |  | 1 | number | 
 `size` |  | undefined | enumObject.keys(FONT_SIZES) | 


HintText
========

![Component Image](./docs/HintText.png)



InputField
==========

![Component Image](./docs/InputField.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `hint` |  | null | string | 
 `input` |  | {} | shape[object Object] | 
 `meta` |  | {} | shape[object Object] | 


Input
=====

![Component Image](./docs/Input.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `onChange` |  | undefined | func | 
 `type` |  | 'text' | string | 
 `value` |  | undefined | string | 


LabelText
=========

![Component Image](./docs/LabelText.png)



Label
=====

![Component Image](./docs/Label.png)



Layout
======




Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


ListItem
========

![Component Image](./docs/ListItem.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


ListNavigation
==============

![Component Image](./docs/ListNavigation.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `listStyleType` |  | undefined | string | 


MultiChoice
===========

![Component Image](./docs/MultiChoice.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `hint` |  | undefined | string | 
 `label` | true |  | node | 
 `meta` |  | {} | shape[object Object] | 


OrderedList
===========

![Component Image](./docs/OrderedList.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `listStyleType` |  | undefined | string | 


Pagination
==========

![Component Image](./docs/Pagination.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


Panel
=====

![Component Image](./docs/Panel.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `panelBody` |  | null | string | 
 `panelTitle` | true |  | string | 


PhaseBadge
==========

![Component Image](./docs/PhaseBadge.png)



PhaseBanner
===========

![Component Image](./docs/PhaseBanner.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `level` | true |  | string | 


Radio
=====

![Component Image](./docs/Radio.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `inline` |  | undefined | bool | 


RelatedItems
============

![Component Image](./docs/RelatedItems.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 


SearchBox
=========

![Component Image](./docs/SearchBox.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `placeholder` |  | undefined | string | 


Select
======

![Component Image](./docs/Select.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `errorText` |  | null | string | 
 `hint` |  | undefined | string | 
 `input` |  | {} | shape[object Object] | 
 `label` | true |  | string | 
 `meta` |  | {} | shape[object Object] | 


TextArea
========

![Component Image](./docs/TextArea.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `hint` |  | null | string | 
 `input` |  | {} | shape[object Object] | 
 `meta` |  | {} | shape[object Object] | 


UnorderedList
=============

![Component Image](./docs/UnorderedList.png)


Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` | true |  | node | 
 `listStyleType` |  | undefined | string | 


