Breadcrumbs
===========

### Import
```js
  import Breadcrumbs from 'govuk-react/breadcrumbs';
```
<!-- STORY -->

The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

- https://govuk-react.github.io/govuk-react/?path=/docs/breadcrumbs
- https://design-system.service.gov.uk/components/breadcrumbs/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `about` |  |  | string | 
 `accessKey` |  |  | string | 
 `aria-activedescendant` |  |  | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  |  | boolean \| "true" \| "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  |  | "none" \| "list" \| "inline" \| "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  |  | boolean \| "true" \| "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  |  | boolean \| "true" \| "false" \| "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  |  | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  |  | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  |  | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  |  | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  |  | boolean \| "time" \| "true" \| "false" \| "page" \| "step" \| "location" \| "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  |  | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  |  | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  |  | boolean \| "true" \| "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  |  | "link" \| "none" \| "copy" \| "execute" \| "move" \| "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  |  | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  |  | boolean \| "true" \| "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  |  | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  |  | boolean \| "true" \| "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  |  | boolean \| "dialog" \| "menu" \| "true" \| "false" \| "grid" \| "listbox" \| "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  |  | boolean \| "true" \| "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  |  | boolean \| "true" \| "false" \| "grammar" \| "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  |  | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  |  | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  |  | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  |  | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  |  | "off" \| "assertive" \| "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  |  | boolean \| "true" \| "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  |  | boolean \| "true" \| "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  |  | boolean \| "true" \| "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  |  | "horizontal" \| "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  |  | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  |  | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  |  | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  |  | boolean \| "true" \| "false" \| "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  |  | boolean \| "true" \| "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  |  | "text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  |  | boolean \| "true" \| "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  |  | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  |  | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  |  | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  |  | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  |  | boolean \| "true" \| "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  |  | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  |  | "none" \| "ascending" \| "descending" \| "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  |  | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  |  | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  |  | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  |  | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `autoCapitalize` |  |  | string | 
 `autoCorrect` |  |  | string | 
 `autoSave` |  |  | string | 
 `children` |  |  | ReactNode | Breadcrumbs contents
 `className` |  |  | string | 
 `color` |  |  | string | 
 `contentEditable` |  |  | "inherit" \| Booleanish | 
 `contextMenu` |  |  | string | 
 `dangerouslySetInnerHTML` |  |  | { __html: string; } | 
 `datatype` |  |  | string | 
 `defaultChecked` |  |  | boolean | 
 `defaultValue` |  |  | string \| number \| readonly string[] | 
 `dir` |  |  | string | 
 `draggable` |  |  | Booleanish | 
 `hidden` |  |  | boolean | 
 `id` |  |  | string | 
 `inlist` |  |  | any | 
 `inputMode` |  |  | "text" \| "none" \| "search" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  |  | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  |  | string | 
 `itemProp` |  |  | string | 
 `itemRef` |  |  | string | 
 `itemScope` |  |  | boolean | 
 `itemType` |  |  | string | 
 `lang` |  |  | string | 
 `onAbort` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  |  | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onError` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  |  | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLDivElement> | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `resource` |  |  | string | 
 `results` |  |  | number | 
 `role` |  |  | AriaRole | 
 `security` |  |  | string | 
 `slot` |  |  | string | 
 `spellCheck` |  |  | Booleanish | 
 `style` |  |  | CSSProperties | 
 `suppressContentEditableWarning` |  |  | boolean | 
 `suppressHydrationWarning` |  |  | boolean | 
 `tabIndex` |  |  | number | 
 `title` |  |  | string | 
 `translate` |  |  | "yes" \| "no" | 
 `typeof` |  |  | string | 
 `unselectable` |  |  | "on" \| "off" | 
 `vocab` |  |  | string | 



DocumentFooterMetadata
======================

### Import
```js
  import DocumentFooterMetadata from 'govuk-react/document-footer-metadata';
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



ErrorSummary
============

### Import
```js
  import ErrorSummary from 'govuk-react/error-summary';
```
<!-- STORY -->

Use this component at the top of a page to summarise any errors a user has made.

- https://govuk-react.github.io/govuk-react/?path=/docs/error-summary
- https://design-system.service.gov.uk/components/error-summary/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `description` |  | ```undefined``` | string | Optional description of the errors
 `errors` |  | ```[]``` | { targetName?: string; text?: string; }[] | Array of errors with text and target element name to scroll into view when clicked
 `heading` |  | ```There is a problem``` | string | Heading text
 `onHandleErrorClick` |  | ```undefined``` | (targetName: string) => void | onClick function to scroll the target element into view



Footer
======

### Import
```js
  import Footer from 'govuk-react/footer';
```
<!-- STORY -->

The footer provides copyright, licensing and other information about your service and department.

- https://govuk-react.github.io/govuk-react/?path=/docs/footer
- https://design-system.service.gov.uk/components/footer/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | ReactNode | Footer navigation links
 `container` |  | ```Footer.WidthContainer``` | ElementType<any> | Override the default footer container component.<br/>`children`, `copyright` and `meta` will be placed inside this component.
 `copyright` |  | ```undefined``` | CopyrightProps | Copyright information
 `licence` |  | ```<Licence />``` | ReactNode | Licence content
 `meta` |  | ```undefined``` | ReactNode | Meta text and links



GlobalStyle
===========

### Import
```js
  import GlobalStyle from 'govuk-react/global-style';
```
<!-- STORY -->

A Styled Component to apply global style for use with govuk-react.

- https://govuk-react.github.io/govuk-react/?path=/docs/global-style

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `suppressMultiMountWarning` |  |  | boolean | 
 `theme` |  |  | DefaultTheme | 



GridCol
=======

### Import
```js
  import GridCol from 'govuk-react/grid-col';
```
<!-- STORY -->

Grid Column.

Should always be wrapped by `GridRow`. Will always render a column at full width if
the browser width is below the `TABLET` breakpoint.

NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
floats, however it is otherwise similar to use.

- https://govuk-react.github.io/govuk-react/?path=/docs/grid-col

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `about` |  |  | string | 
 `accessKey` |  |  | string | 
 `aria-activedescendant` |  |  | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  |  | boolean \| "false" \| "true" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  |  | "both" \| "none" \| "inline" \| "list" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  |  | boolean \| "false" \| "true" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  |  | boolean \| "mixed" \| "false" \| "true" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  |  | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  |  | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  |  | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  |  | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  |  | boolean \| "time" \| "page" \| "false" \| "true" \| "step" \| "location" \| "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  |  | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  |  | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  |  | boolean \| "false" \| "true" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  |  | "link" \| "none" \| "copy" \| "move" \| "execute" \| "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  |  | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  |  | boolean \| "false" \| "true" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  |  | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  |  | boolean \| "false" \| "true" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  |  | boolean \| "dialog" \| "menu" \| "listbox" \| "grid" \| "false" \| "true" \| "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  |  | boolean \| "false" \| "true" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  |  | boolean \| "false" \| "true" \| "grammar" \| "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  |  | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  |  | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  |  | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  |  | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  |  | "off" \| "assertive" \| "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  |  | boolean \| "false" \| "true" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  |  | boolean \| "false" \| "true" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  |  | boolean \| "false" \| "true" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  |  | "horizontal" \| "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  |  | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  |  | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  |  | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  |  | boolean \| "mixed" \| "false" \| "true" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  |  | boolean \| "false" \| "true" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  |  | "text" \| "all" \| "additions" \| "additions removals" \| "additions text" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  |  | boolean \| "false" \| "true" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  |  | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  |  | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  |  | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  |  | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  |  | boolean \| "false" \| "true" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  |  | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  |  | "none" \| "ascending" \| "descending" \| "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  |  | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  |  | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  |  | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  |  | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  |  | undefined | 
 `autoCapitalize` |  |  | string | 
 `autoCorrect` |  |  | string | 
 `autoSave` |  |  | string | 
 `children` |  | ```undefined``` | ReactNode | GridCol content
 `className` |  |  | string | 
 `color` |  |  | string | 
 `columnFull` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnOneHalf` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnOneQuarter` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnOneThird` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnThreeQuarters` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnTwoThirds` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `contentEditable` |  |  | "inherit" \| Booleanish | 
 `contextMenu` |  |  | string | 
 `dangerouslySetInnerHTML` |  |  | { __html: string; } | 
 `datatype` |  |  | string | 
 `defaultChecked` |  |  | boolean | 
 `defaultValue` |  |  | string \| number \| readonly string[] | 
 `dir` |  |  | string | 
 `draggable` |  |  | Booleanish | 
 `forwardedAs` |  |  | undefined | 
 `hidden` |  |  | boolean | 
 `id` |  |  | string | 
 `inlist` |  |  | any | 
 `inputMode` |  |  | "text" \| "none" \| "search" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  |  | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  |  | string | 
 `itemProp` |  |  | string | 
 `itemRef` |  |  | string | 
 `itemScope` |  |  | boolean | 
 `itemType` |  |  | string | 
 `key` |  |  | Key | 
 `lang` |  |  | string | 
 `onAbort` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  |  | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onError` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  |  | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLDivElement> | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLDivElement> | 
 `resource` |  |  | string | 
 `results` |  |  | number | 
 `role` |  |  | AriaRole | 
 `security` |  |  | string | 
 `setDesktopWidth` |  | ```undefined``` | string \| number | Explicitly set desktop column to width using value or descriptive string<br/>(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
 `setWidth` |  | ```undefined``` | string \| number | Explicitly set column to width using value or descriptive string<br/>(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
 `slot` |  |  | string | 
 `spellCheck` |  |  | Booleanish | 
 `style` |  |  | CSSProperties | 
 `suppressContentEditableWarning` |  |  | boolean | 
 `suppressHydrationWarning` |  |  | boolean | 
 `tabIndex` |  |  | number | 
 `theme` |  |  | any | 
 `title` |  |  | string | 
 `translate` |  |  | "yes" \| "no" | 
 `typeof` |  |  | string | 
 `unselectable` |  |  | "on" \| "off" | 
 `vocab` |  |  | string | 



GridRow
=======

### Import
```js
  import GridRow from 'govuk-react/grid-row';
```
<!-- STORY -->

Grid Row, to be used as a parent component for GridCol.

- https://govuk-react.github.io/govuk-react/?path=/docs/grid-row

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `about` |  |  | string | 
 `accessKey` |  |  | string | 
 `aria-activedescendant` |  |  | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  |  | boolean \| "false" \| "true" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  |  | "inline" \| "none" \| "both" \| "list" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  |  | boolean \| "false" \| "true" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  |  | boolean \| "mixed" \| "false" \| "true" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  |  | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  |  | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  |  | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  |  | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  |  | boolean \| "time" \| "page" \| "false" \| "true" \| "step" \| "location" \| "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  |  | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  |  | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  |  | boolean \| "false" \| "true" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  |  | "link" \| "none" \| "copy" \| "move" \| "execute" \| "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  |  | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  |  | boolean \| "false" \| "true" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  |  | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  |  | boolean \| "false" \| "true" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  |  | boolean \| "dialog" \| "menu" \| "grid" \| "listbox" \| "false" \| "true" \| "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  |  | boolean \| "false" \| "true" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  |  | boolean \| "false" \| "true" \| "grammar" \| "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  |  | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  |  | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  |  | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  |  | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  |  | "off" \| "assertive" \| "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  |  | boolean \| "false" \| "true" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  |  | boolean \| "false" \| "true" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  |  | boolean \| "false" \| "true" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  |  | "horizontal" \| "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  |  | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  |  | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  |  | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  |  | boolean \| "mixed" \| "false" \| "true" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  |  | boolean \| "false" \| "true" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  |  | "text" \| "all" \| "additions" \| "additions removals" \| "additions text" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  |  | boolean \| "false" \| "true" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  |  | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  |  | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  |  | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  |  | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  |  | boolean \| "false" \| "true" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  |  | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  |  | "none" \| "ascending" \| "descending" \| "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  |  | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  |  | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  |  | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  |  | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  |  | undefined | 
 `autoCapitalize` |  |  | string | 
 `autoCorrect` |  |  | string | 
 `autoSave` |  |  | string | 
 `className` |  |  | string | 
 `color` |  |  | string | 
 `contentEditable` |  |  | "inherit" \| Booleanish | 
 `contextMenu` |  |  | string | 
 `dangerouslySetInnerHTML` |  |  | { __html: string; } | 
 `datatype` |  |  | string | 
 `defaultChecked` |  |  | boolean | 
 `defaultValue` |  |  | string \| number \| readonly string[] | 
 `dir` |  |  | string | 
 `draggable` |  |  | Booleanish | 
 `forwardedAs` |  |  | undefined | 
 `hidden` |  |  | boolean | 
 `id` |  |  | string | 
 `inlist` |  |  | any | 
 `inputMode` |  |  | "text" \| "none" \| "search" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  |  | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  |  | string | 
 `itemProp` |  |  | string | 
 `itemRef` |  |  | string | 
 `itemScope` |  |  | boolean | 
 `itemType` |  |  | string | 
 `key` |  |  | Key | 
 `lang` |  |  | string | 
 `margin` |  |  | Margin \| Margin[] | 
 `mb` |  |  | string \| number | 
 `onAbort` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  |  | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onError` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  |  | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLDivElement> | 
 `padding` |  |  | Padding \| Padding[] | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLDivElement> | 
 `resource` |  |  | string | 
 `results` |  |  | number | 
 `role` |  |  | AriaRole | 
 `security` |  |  | string | 
 `slot` |  |  | string | 
 `spellCheck` |  |  | Booleanish | 
 `style` |  |  | CSSProperties | 
 `suppressContentEditableWarning` |  |  | boolean | 
 `suppressHydrationWarning` |  |  | boolean | 
 `tabIndex` |  |  | number | 
 `theme` |  |  | any | 
 `title` |  |  | string | 
 `translate` |  |  | "yes" \| "no" | 
 `typeof` |  |  | string | 
 `unselectable` |  |  | "on" \| "off" | 
 `vocab` |  |  | string | 




LoadingBox
==========

### Import
```js
  import LoadingBox from 'govuk-react/loading-box';
```
<!-- STORY -->

Use a LoadingBox to wrap components that can asyncronously load content.

When `loading` is set to `true`, a spinner will overlay the contents to give visual feedback to the user.

- https://govuk-react.github.io/govuk-react/?path=/docs/loading-box

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `backgroundColor` |  | ```undefined``` | string | Background color (3 or 6 Hex char) of loading spinner overlay when loading is true.
 `backgroundColorOpacity` |  | ```undefined``` | number | Opacity of loading spinner backgroud colour when loading is true
 `children` |  |  | ReactNode | One or more children nodes that loading box will overlay
 `loading` |  | ```undefined``` | boolean | Whether loading is currently set to true or false
 `spinnerColor` |  | ```undefined``` | string | Color (3 or 6 Hex char) of loading spinner
 `timeIn` |  | ```undefined``` | number | Length of fade-in animation in milliseconds
 `timeOut` |  | ```undefined``` | number | Length of fade-out animation in milliseconds
 `title` |  | ```undefined``` | string | Loading spinner title text



Main
====

### Import
```js
  import Main from 'govuk-react/main';
```
<!-- STORY -->

Provides a container which aligns to the TopNav component, is centered, and provides top padding.

Note, this equivalent to 'width-container' from govuk-frontend.

- https://govuk-react.github.io/govuk-react/?path=/docs/main
- https://design-system.service.gov.uk/styles/layout/#page-wrappers

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  | ```undefined``` | ReactNode | Child nodes for the page being built



Page
====

### Import
```js
  import Page from 'govuk-react/page';
```
<!-- STORY -->

Use this template to keep your pages consistent with the rest of GOV.UK.

- https://govuk-react.github.io/govuk-react/?path=/docs/page
- https://design-system.service.gov.uk/styles/page-template/
- https://design-system.service.gov.uk/styles/layout/#page-wrappers

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `beforeChildren` |  | ```undefined``` | ReactNode | Content that needs to appear outside the main page wrapper (see `main`).<br/>For example: A back link component, breadcrumbs, phase banner component
 `children` |  | ```undefined``` | ReactNode | Page contents
 `container` |  | ```Page.WidthContainer``` | ElementType<any> | Override the default page container component.<br/>`beforeChildren` and `children` (wrapped in `main`) will be placed inside this component.
 `footer` |  | ```undefined``` | ReactNode | Override the default page footer component.
 `header` |  | ```<TopNav />``` | ReactNode | Override the default page header component.
 `id` |  | ```content``` | string | ID for page content
 `main` |  | ```Page.Main``` | ElementType<any> | Override the default wrapper component for main page content



Pagination
==========

### Import
```js
  import Pagination from 'govuk-react/pagination';
```
<!-- STORY -->

Navigational links that allow users to navigate within a series of pages or elements.

- https://govuk-react.github.io/govuk-react/?path=/docs/pagination
- https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------




RelatedItems
============

### Import
```js
  import RelatedItems from 'govuk-react/related-items';
```
<!-- STORY -->

Component showing related content, including topics, guidance and collections.

- https://govuk-react.github.io/govuk-react/?path=/docs/related-items
- https://components.publishing.service.gov.uk/component-guide/related_navigation

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `about` |  |  | string | 
 `accessKey` |  |  | string | 
 `aria-activedescendant` |  |  | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  |  | boolean \| "false" \| "true" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  |  | "none" \| "both" \| "inline" \| "list" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  |  | boolean \| "false" \| "true" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  |  | boolean \| "mixed" \| "false" \| "true" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  |  | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  |  | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  |  | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  |  | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  |  | boolean \| "time" \| "page" \| "false" \| "true" \| "step" \| "location" \| "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  |  | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  |  | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  |  | boolean \| "false" \| "true" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  |  | "link" \| "none" \| "copy" \| "move" \| "execute" \| "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  |  | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  |  | boolean \| "false" \| "true" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  |  | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  |  | boolean \| "false" \| "true" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  |  | boolean \| "dialog" \| "menu" \| "listbox" \| "grid" \| "false" \| "true" \| "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  |  | boolean \| "false" \| "true" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  |  | boolean \| "false" \| "true" \| "grammar" \| "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  |  | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  |  | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  |  | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  |  | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  |  | "off" \| "assertive" \| "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  |  | boolean \| "false" \| "true" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  |  | boolean \| "false" \| "true" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  |  | boolean \| "false" \| "true" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  |  | "horizontal" \| "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  |  | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  |  | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  |  | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  |  | boolean \| "mixed" \| "false" \| "true" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  |  | boolean \| "false" \| "true" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  |  | "text" \| "all" \| "additions" \| "additions removals" \| "additions text" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  |  | boolean \| "false" \| "true" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  |  | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  |  | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  |  | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  |  | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  |  | boolean \| "false" \| "true" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  |  | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  |  | "none" \| "ascending" \| "descending" \| "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  |  | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  |  | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  |  | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  |  | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  |  | undefined | 
 `autoCapitalize` |  |  | string | 
 `autoCorrect` |  |  | string | 
 `autoSave` |  |  | string | 
 `className` |  |  | string | 
 `color` |  |  | string | 
 `contentEditable` |  |  | "inherit" \| Booleanish | 
 `contextMenu` |  |  | string | 
 `dangerouslySetInnerHTML` |  |  | { __html: string; } | 
 `datatype` |  |  | string | 
 `defaultChecked` |  |  | boolean | 
 `defaultValue` |  |  | string \| number \| readonly string[] | 
 `dir` |  |  | string | 
 `draggable` |  |  | Booleanish | 
 `forwardedAs` |  |  | undefined | 
 `hidden` |  |  | boolean | 
 `id` |  |  | string | 
 `inlist` |  |  | any | 
 `inputMode` |  |  | "text" \| "none" \| "search" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  |  | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  |  | string | 
 `itemProp` |  |  | string | 
 `itemRef` |  |  | string | 
 `itemScope` |  |  | boolean | 
 `itemType` |  |  | string | 
 `key` |  |  | Key | 
 `lang` |  |  | string | 
 `margin` |  |  | Margin \| Margin[] | 
 `mb` |  |  | string \| number | 
 `onAbort` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  |  | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onError` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  |  | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLDivElement> | 
 `padding` |  |  | Padding \| Padding[] | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLDivElement> | 
 `resource` |  |  | string | 
 `results` |  |  | number | 
 `role` |  |  | AriaRole | 
 `security` |  |  | string | 
 `slot` |  |  | string | 
 `spellCheck` |  |  | Booleanish | 
 `style` |  |  | CSSProperties | 
 `suppressContentEditableWarning` |  |  | boolean | 
 `suppressHydrationWarning` |  |  | boolean | 
 `tabIndex` |  |  | number | 
 `theme` |  |  | any | 
 `title` |  |  | string | 
 `translate` |  |  | "yes" \| "no" | 
 `typeof` |  |  | string | 
 `unselectable` |  |  | "on" \| "off" | 
 `vocab` |  |  | string | 



SearchBox
=========

### Import
```js
  import SearchBox from 'govuk-react/search-box';
```
<!-- STORY -->

A search box with attached submit button.

- https://govuk-react.github.io/govuk-react/?path=/docs/search-box
- https://components.publishing.service.gov.uk/component-guide/search

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `about` |  |  | string | 
 `accessKey` |  |  | string | 
 `aria-activedescendant` |  |  | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  |  | boolean \| "true" \| "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  |  | "list" \| "none" \| "inline" \| "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  |  | boolean \| "true" \| "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  |  | boolean \| "true" \| "false" \| "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  |  | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  |  | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  |  | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  |  | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  |  | boolean \| "time" \| "true" \| "false" \| "page" \| "step" \| "location" \| "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  |  | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  |  | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  |  | boolean \| "true" \| "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  |  | "link" \| "none" \| "copy" \| "execute" \| "move" \| "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  |  | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  |  | boolean \| "true" \| "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  |  | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  |  | boolean \| "true" \| "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  |  | boolean \| "dialog" \| "menu" \| "true" \| "false" \| "grid" \| "listbox" \| "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  |  | boolean \| "true" \| "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  |  | boolean \| "true" \| "false" \| "grammar" \| "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  |  | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  |  | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  |  | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  |  | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  |  | "off" \| "assertive" \| "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  |  | boolean \| "true" \| "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  |  | boolean \| "true" \| "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  |  | boolean \| "true" \| "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  |  | "horizontal" \| "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  |  | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  |  | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  |  | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  |  | boolean \| "true" \| "false" \| "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  |  | boolean \| "true" \| "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  |  | "text" \| "additions" \| "additions removals" \| "additions text" \| "all" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  |  | boolean \| "true" \| "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  |  | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  |  | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  |  | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  |  | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  |  | boolean \| "true" \| "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  |  | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  |  | "none" \| "ascending" \| "descending" \| "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  |  | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  |  | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  |  | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  |  | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `autoCapitalize` |  |  | string | 
 `autoCorrect` |  |  | string | 
 `autoSave` |  |  | string | 
 `className` |  |  | string | 
 `color` |  |  | string | 
 `contentEditable` |  |  | Booleanish \| "inherit" | 
 `contextMenu` |  |  | string | 
 `dangerouslySetInnerHTML` |  |  | { __html: string; } | 
 `datatype` |  |  | string | 
 `defaultChecked` |  |  | boolean | 
 `defaultValue` |  |  | string \| number \| readonly string[] | 
 `dir` |  |  | string | 
 `draggable` |  |  | Booleanish | 
 `hidden` |  |  | boolean | 
 `id` |  |  | string | 
 `inlist` |  |  | any | 
 `inputMode` |  |  | "text" \| "none" \| "search" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  |  | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  |  | string | 
 `itemProp` |  |  | string | 
 `itemRef` |  |  | string | 
 `itemScope` |  |  | boolean | 
 `itemType` |  |  | string | 
 `key` |  |  | Key | 
 `lang` |  |  | string | 
 `margin` |  |  | Margin \| Margin[] | 
 `mb` |  |  | string \| number | 
 `onAbort` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  |  | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onError` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  |  | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLDivElement> | 
 `padding` |  |  | Padding \| Padding[] | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLDivElement> | 
 `resource` |  |  | string | 
 `results` |  |  | number | 
 `role` |  |  | AriaRole | 
 `security` |  |  | string | 
 `slot` |  |  | string | 
 `spellCheck` |  |  | Booleanish | 
 `style` |  |  | CSSProperties | 
 `suppressContentEditableWarning` |  |  | boolean | 
 `suppressHydrationWarning` |  |  | boolean | 
 `tabIndex` |  |  | number | 
 `title` |  |  | string | 
 `translate` |  |  | "yes" \| "no" | 
 `typeof` |  |  | string | 
 `unselectable` |  |  | "on" \| "off" | 
 `vocab` |  |  | string | 



Table
=====

### Import
```js
  import Table from 'govuk-react/table';
```
<!-- STORY -->

Use the table component to make information easier to compare and scan for users.

- https://govuk-react.github.io/govuk-react/?path=/docs/table
- https://design-system.service.gov.uk/components/table/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `body` |  | ```undefined``` | ReactNode | Table body rows and cells (for backward compatibility)
 `caption` |  | ```undefined``` | string | Table caption title
 `children` |  | ```undefined``` | ReactNode | Table body rows and cells (recommended way)
 `head` |  | ```undefined``` | ReactNode | Table header rows and cells



Tabs
====

### Import
```js
  import Tabs from 'govuk-react/tabs';
```
<!-- STORY -->

The tabs component lets users navigate between related sections of content, displaying one section at a time.

- https://govuk-react.github.io/govuk-react/?path=/docs/tabs
- https://design-system.service.gov.uk/components/tabs/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `children` |  |  | ReactNode | child components that will appear in the Tabs section



TopNav
======

### Import
```js
  import TopNav from 'govuk-react/top-nav';
```
<!-- STORY -->

The GOV.UK header shows users that they are on GOV.UK and which service they are using.

- https://govuk-react.github.io/govuk-react/?path=/docs/top-nav
- https://design-system.service.gov.uk/components/header/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `bgColor` |  | ```undefined``` | string | Top nav background color
 `children` |  | ```undefined``` | any | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | ```undefined``` | string | Top nav text color
 `company` |  | ```<IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>``` | React.ReactNode | Company component e.g. GOV UK
 `defaultOpen` |  | ```undefined``` | boolean | Is the mobile navigation open by default?
 `search` |  | ```undefined``` | React.ReactNode | Search component
 `serviceTitle` |  | ```undefined``` | React.ReactNode | Service title component e.g. Food Standards Authority



