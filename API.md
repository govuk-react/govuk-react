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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `download` |  | `````` | any | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `href` |  | `````` | string | 
 `hrefLang` |  | `````` | string | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `media` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLAnchorElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLAnchorElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLAnchorElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLAnchorElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLAnchorElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLAnchorElement> | 
 `ping` |  | `````` | string | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLAnchorElement> | 
 `referrerPolicy` |  | `````` | HTMLAttributeReferrerPolicy | 
 `rel` |  | `````` | string | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `target` |  | `````` | HTMLAttributeAnchorTarget | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `type` |  | `````` | string | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLSpanElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `size` |  | ```XL``` | string | number | Visual size level, accepts:<br/>   `XLARGE`, `LARGE`, `MEDIUM`, `XL`, `L`, `M`<br/>   or a numeric size that fits in the GDS font scale list
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLSpanElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `error` |  | ```undefined``` | boolean | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLDivElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `suppressMultiMountWarning` |  | `````` | boolean | 
 `theme` |  | `````` | DefaultTheme | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "both" | "inline" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "move" | "execute" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `children` |  | ```undefined``` | any | GridCol content
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `columnFull` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnOneHalf` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnOneQuarter` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnOneThird` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnThreeQuarters` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `columnTwoThirds` |  | ```undefined``` | boolean | Dimension setting for the column (deprecated)
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLDivElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `setDesktopWidth` |  | ```undefined``` | string | number | Explicitly set desktop column to width using value or descriptive string<br/>(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
 `setWidth` |  | ```undefined``` | string | number | Explicitly set column to width using value or descriptive string<br/>(`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "move" | "execute" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLDivElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLSpanElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accept` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `alt` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "step" | "date" | "true" | "false" | "page" | "location" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoComplete` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoFocus` |  | `````` | boolean | 
 `autoSave` |  | `````` | string | 
 `capture` |  | `````` | string | boolean | 
 `checked` |  | `````` | boolean | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `crossOrigin` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `disabled` |  | `````` | boolean | 
 `draggable` |  | `````` | Booleanish | 
 `error` |  | ```undefined``` | boolean | 
 `errorColor` |  | ```undefined``` | string | 
 `form` |  | `````` | string | 
 `formAction` |  | `````` | string | 
 `formEncType` |  | `````` | string | 
 `formMethod` |  | `````` | string | 
 `formNoValidate` |  | `````` | boolean | 
 `formTarget` |  | `````` | string | 
 `forwardedAs` |  | `````` | undefined | 
 `height` |  | `````` | string | number | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "email" | "tel" | "url" | "none" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `list` |  | `````` | string | 
 `max` |  | `````` | string | number | 
 `maxLength` |  | `````` | number | 
 `min` |  | `````` | string | number | 
 `minLength` |  | `````` | number | 
 `multiple` |  | `````` | boolean | 
 `name` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLInputElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLInputElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLInputElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onChange` |  | `````` | ChangeEventHandler<HTMLInputElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLInputElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLInputElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLInputElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLInputElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLInputElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLInputElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLInputElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLInputElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLInputElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLInputElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLInputElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLInputElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLInputElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLInputElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLInputElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLInputElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLInputElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLInputElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLInputElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLInputElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLInputElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLInputElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLInputElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLInputElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLInputElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLInputElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLInputElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLInputElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLInputElement> | 
 `pattern` |  | `````` | string | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `readOnly` |  | `````` | boolean | 
 `ref` |  | `````` | Ref<HTMLInputElement> | 
 `required` |  | `````` | boolean | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `size` |  | `````` | number | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `src` |  | `````` | string | 
 `step` |  | `````` | string | number | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `type` |  | ```text``` | HTMLInputTypeAttribute & string | HTML `<Input />` type
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `value` |  | `````` | string | number | readonly string[] | 
 `vocab` |  | `````` | string | 
 `width` |  | `````` | string | number | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "both" | "inline" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLDivElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLSpanElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "move" | "execute" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `error` |  | ```undefined``` | boolean | Apply error state styling to the component
 `form` |  | `````` | string | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `htmlFor` |  | `````` | string | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLLabelElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLLabelElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLLabelElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLLabelElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLLabelElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLLabelElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLLabelElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLLabelElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLLabelElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLLabelElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLLabelElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLLabelElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLLabelElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLLabelElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLLabelElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLLabelElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLLabelElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLLabelElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLLabelElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLLabelElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLLabelElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLLabelElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLLabelElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLLabelElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLLabelElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLLabelElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLLabelElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLLabelElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLLabelElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLLabelElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLLabelElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLLabelElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLLabelElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLParagraphElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLParagraphElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLParagraphElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLParagraphElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLParagraphElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLParagraphElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLParagraphElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLParagraphElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLParagraphElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLParagraphElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLParagraphElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLParagraphElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLParagraphElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLParagraphElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLParagraphElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLParagraphElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLParagraphElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLParagraphElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLParagraphElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLParagraphElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLParagraphElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLParagraphElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLParagraphElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLParagraphElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLParagraphElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLParagraphElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `children` |  | `````` | any | link contents
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `download` |  | `````` | any | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `href` |  | `````` | string | 
 `hrefLang` |  | `````` | string | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `media` |  | `````` | string | 
 `muted` |  | ```undefined``` | boolean | show link in a "muted" (grey) style
 `noVisitedState` |  | ```undefined``` | boolean | ensure there is no "visited" style
 `onAbort` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLAnchorElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLAnchorElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLAnchorElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLAnchorElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLAnchorElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLAnchorElement> | 
 `ping` |  | `````` | string | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLAnchorElement> | 
 `referrerPolicy` |  | `````` | HTMLAttributeReferrerPolicy | 
 `rel` |  | `````` | string | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `target` |  | `````` | HTMLAttributeAnchorTarget | 
 `textColour` |  | ```undefined``` | boolean | ensure link is shown in plain text colour
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `type` |  | `````` | string | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLLIElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLLIElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLLIElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLLIElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLLIElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLLIElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLLIElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLLIElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLLIElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLLIElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLLIElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLLIElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLLIElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLLIElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLLIElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLLIElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLLIElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLLIElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLLIElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLLIElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLLIElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLLIElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLLIElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLLIElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLLIElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLLIElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLLIElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLLIElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLLIElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLLIElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLLIElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLLIElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLLIElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLLIElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLLIElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLLIElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLLIElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLLIElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLLIElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLLIElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLLIElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLLIElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLLIElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLLIElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLLIElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLLIElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLLIElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLLIElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `value` |  | `````` | string | number | readonly string[] | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | ```undefined``` | any | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `children` |  | `````` | any | One or more ListItem components
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `listStyleType` |  | ```undefined``` | string | CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend
 `onAbort` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLOListElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLOListElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLOListElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLOListElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLOListElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLOListElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLOListElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLOListElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLOListElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLOListElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLOListElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLOListElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLOListElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLOListElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLOListElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLOListElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLOListElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLOListElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLOListElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLOListElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLOListElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLOListElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLOListElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLOListElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLOListElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLOListElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLOListElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLOListElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLOListElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLOListElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLOListElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLOListElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLOListElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLOListElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLOListElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLOListElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLOListElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLOListElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLOListElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLOListElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLOListElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLOListElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLOListElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLOListElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLOListElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLOListElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLOListElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLOListElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `reversed` |  | `````` | boolean | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `start` |  | `````` | number | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `type` |  | `````` | "a" | "i" | "1" | "A" | "I" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "both" | "inline" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "move" | "execute" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLDivElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLDivElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLDivElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLDivElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLDivElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLDivElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLDivElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLDivElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLDivElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLDivElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLDivElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLDivElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLDivElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLDivElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLDivElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------




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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "both" | "inline" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "move" | "execute" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `level` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLHRElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLHRElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLHRElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLHRElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLHRElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLHRElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLHRElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLHRElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLHRElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLHRElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLHRElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLHRElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLHRElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLHRElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLHRElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLHRElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLHRElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLHRElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLHRElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLHRElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLHRElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLHRElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLHRElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLHRElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLHRElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLHRElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLHRElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLHRElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLHRElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLHRElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLHRElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLHRElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLHRElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `visible` |  | ```undefined``` | boolean | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `download` |  | `````` | any | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `href` |  | ```#content``` | string | 
 `hrefLang` |  | `````` | string | 
 `id` |  | `````` | string | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `media` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLAnchorElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLAnchorElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLAnchorElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLAnchorElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLAnchorElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLAnchorElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLAnchorElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLAnchorElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLAnchorElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLAnchorElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLAnchorElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLAnchorElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLAnchorElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLAnchorElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLAnchorElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLAnchorElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLAnchorElement> | 
 `ping` |  | `````` | string | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLAnchorElement> | 
 `referrerPolicy` |  | `````` | HTMLAttributeReferrerPolicy | 
 `rel` |  | `````` | string | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `target` |  | `````` | HTMLAttributeAnchorTarget | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `type` |  | `````` | string | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `inactive` |  | ```undefined``` | boolean | 
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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
 `bgColor` |  | ```undefined``` | string | Top nav background color
 `children` |  | ```undefined``` | any | List Navigation items with anchor tags e.g. NavAnchor components
 `color` |  | ```undefined``` | string | Top nav text color
 `company` |  | ```<IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>``` | any | Company component e.g. GOV UK
 `defaultOpen` |  | ```undefined``` | boolean | Is the mobile navigation open by default?
 `search` |  | ```undefined``` | any | Search component
 `serviceTitle` |  | ```undefined``` | any | Service title component e.g. Food Standards Authority



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
 `about` |  | `````` | string | 
 `accessKey` |  | `````` | string | 
 `aria-activedescendant` |  | `````` | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  | `````` | boolean | "true" | "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  | `````` | "list" | "none" | "inline" | "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  | `````` | boolean | "true" | "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  | `````` | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  | `````` | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  | `````` | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  | `````` | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  | `````` | boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | Indicates the element that represents the current item within a container or set of related elements.
 `aria-describedby` |  | `````` | string | Identifies the element (or elements) that describes the object.<br/>@see aria-labelledby
 `aria-details` |  | `````` | string | Identifies the element that provides a detailed, extended description for the object.<br/>@see aria-describedby.
 `aria-disabled` |  | `````` | boolean | "true" | "false" | Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.<br/>@see aria-hidden<br/>@see aria-readonly.
 `aria-dropeffect` |  | `````` | "link" | "none" | "copy" | "execute" | "move" | "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
 `aria-errormessage` |  | `````` | string | Identifies the element that provides an error message for the object.<br/>@see aria-invalid<br/>@see aria-describedby.
 `aria-expanded` |  | `````` | boolean | "true" | "false" | Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
 `aria-flowto` |  | `````` | string | Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,<br/>allows assistive technology to override the general default of reading in document source order.
 `aria-grabbed` |  | `````` | boolean | "true" | "false" | Indicates an element's "grabbed" state in a drag-and-drop operation.<br/>@deprecated in ARIA 1.1
 `aria-haspopup` |  | `````` | boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
 `aria-hidden` |  | `````` | boolean | "true" | "false" | Indicates whether the element is exposed to an accessibility API.<br/>@see aria-disabled.
 `aria-invalid` |  | `````` | boolean | "true" | "false" | "grammar" | "spelling" | Indicates the entered value does not conform to the format expected by the application.<br/>@see aria-errormessage.
 `aria-keyshortcuts` |  | `````` | string | Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
 `aria-label` |  | `````` | string | Defines a string value that labels the current element.<br/>@see aria-labelledby.
 `aria-labelledby` |  | `````` | string | Identifies the element (or elements) that labels the current element.<br/>@see aria-describedby.
 `aria-level` |  | `````` | number | Defines the hierarchical level of an element within a structure.
 `aria-live` |  | `````` | "off" | "assertive" | "polite" | Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
 `aria-modal` |  | `````` | boolean | "true" | "false" | Indicates whether an element is modal when displayed.
 `aria-multiline` |  | `````` | boolean | "true" | "false" | Indicates whether a text box accepts multiple lines of input or only a single line.
 `aria-multiselectable` |  | `````` | boolean | "true" | "false" | Indicates that the user may select more than one item from the current selectable descendants.
 `aria-orientation` |  | `````` | "horizontal" | "vertical" | Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
 `aria-owns` |  | `````` | string | Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship<br/>between DOM elements where the DOM hierarchy cannot be used to represent the relationship.<br/>@see aria-controls.
 `aria-placeholder` |  | `````` | string | Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.<br/>A hint could be a sample value or a brief description of the expected format.
 `aria-posinset` |  | `````` | number | Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-setsize.
 `aria-pressed` |  | `````` | boolean | "true" | "false" | "mixed" | Indicates the current "pressed" state of toggle buttons.<br/>@see aria-checked<br/>@see aria-selected.
 `aria-readonly` |  | `````` | boolean | "true" | "false" | Indicates that the element is not editable, but is otherwise operable.<br/>@see aria-disabled.
 `aria-relevant` |  | `````` | "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
 `aria-required` |  | `````` | boolean | "true" | "false" | Indicates that user input is required on the element before a form may be submitted.
 `aria-roledescription` |  | `````` | string | Defines a human-readable, author-localized description for the role of an element.
 `aria-rowcount` |  | `````` | number | Defines the total number of rows in a table, grid, or treegrid.<br/>@see aria-rowindex.
 `aria-rowindex` |  | `````` | number | Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.<br/>@see aria-rowcount<br/>@see aria-rowspan.
 `aria-rowspan` |  | `````` | number | Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-rowindex<br/>@see aria-colspan.
 `aria-selected` |  | `````` | boolean | "true" | "false" | Indicates the current "selected" state of various widgets.<br/>@see aria-checked<br/>@see aria-pressed.
 `aria-setsize` |  | `````` | number | Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.<br/>@see aria-posinset.
 `aria-sort` |  | `````` | "none" | "ascending" | "descending" | "other" | Indicates if items in a table or grid are sorted in ascending or descending order.
 `aria-valuemax` |  | `````` | number | Defines the maximum allowed value for a range widget.
 `aria-valuemin` |  | `````` | number | Defines the minimum allowed value for a range widget.
 `aria-valuenow` |  | `````` | number | Defines the current value for a range widget.<br/>@see aria-valuetext.
 `aria-valuetext` |  | `````` | string | Defines the human readable text alternative of aria-valuenow for a range widget.
 `as` |  | `````` | undefined | 
 `autoCapitalize` |  | `````` | string | 
 `autoCorrect` |  | `````` | string | 
 `autoSave` |  | `````` | string | 
 `children` |  | `````` | any | Content to be hidden
 `className` |  | `````` | string | 
 `color` |  | `````` | string | 
 `contentEditable` |  | `````` | Booleanish | "inherit" | 
 `contextMenu` |  | `````` | string | 
 `dangerouslySetInnerHTML` |  | `````` | { __html: string; } | 
 `datatype` |  | `````` | string | 
 `defaultChecked` |  | `````` | boolean | 
 `defaultValue` |  | `````` | string | number | readonly string[] | 
 `dir` |  | `````` | string | 
 `draggable` |  | `````` | Booleanish | 
 `focusable` |  | ```undefined``` | boolean | Allow component to be focusable, and thus become visible
 `forwardedAs` |  | `````` | undefined | 
 `hidden` |  | `````` | boolean | 
 `id` |  | `````` | string | 
 `important` |  | ```undefined``` | boolean | Set styles with `!important`
 `inlist` |  | `````` | any | 
 `inputMode` |  | `````` | "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  | `````` | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  | `````` | string | 
 `itemProp` |  | `````` | string | 
 `itemRef` |  | `````` | string | 
 `itemScope` |  | `````` | boolean | 
 `itemType` |  | `````` | string | 
 `key` |  | `````` | Key | 
 `lang` |  | `````` | string | 
 `onAbort` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAbortCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onAnimationEnd` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationEndCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIteration` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIterationCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStart` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStartCapture` |  | `````` | AnimationEventHandler<HTMLSpanElement> | 
 `onAuxClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onAuxClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onBeforeInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBeforeInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onBlur` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onBlurCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onCanPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThrough` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThroughCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onChange` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onChangeCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCompositionEnd` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionEndCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStart` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStartCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdate` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdateCapture` |  | `````` | CompositionEventHandler<HTMLSpanElement> | 
 `onContextMenu` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onContextMenuCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onCopy` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCopyCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCut` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onCutCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onDoubleClick` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDoubleClickCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onDrag` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnd` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEndCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnter` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragEnterCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExit` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragExitCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeave` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragLeaveCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOver` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragOverCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStart` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDragStartCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDrop` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDropCapture` |  | `````` | DragEventHandler<HTMLSpanElement> | 
 `onDurationChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onDurationChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptied` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEmptiedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncrypted` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEncryptedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEnded` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onEndedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onError` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onErrorCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onFocus` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onFocusCapture` |  | `````` | FocusEventHandler<HTMLSpanElement> | 
 `onGotPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onGotPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onInput` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInputCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalid` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onInvalidCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onKeyDown` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyDownCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPress` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPressCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUp` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUpCapture` |  | `````` | KeyboardEventHandler<HTMLSpanElement> | 
 `onLoad` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStart` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStartCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedData` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedDataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadata` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadataCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onLostPointerCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onLostPointerCaptureCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onMouseDown` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseDownCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseEnter` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseLeave` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMove` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMoveCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOut` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOutCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOver` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOverCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUp` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUpCapture` |  | `````` | MouseEventHandler<HTMLSpanElement> | 
 `onPaste` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPasteCapture` |  | `````` | ClipboardEventHandler<HTMLSpanElement> | 
 `onPause` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPauseCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlay` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlaying` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPlayingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onPointerCancel` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerCancelCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDown` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDownCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnter` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnterCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeave` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeaveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMove` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMoveCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOut` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOutCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOver` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOverCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUp` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUpCapture` |  | `````` | PointerEventHandler<HTMLSpanElement> | 
 `onProgress` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onProgressCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onRateChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onReset` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onResetCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onScroll` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onScrollCapture` |  | `````` | UIEventHandler<HTMLSpanElement> | 
 `onSeeked` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekedCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeeking` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSeekingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelect` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSelectCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalled` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onStalledCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSubmit` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSubmitCapture` |  | `````` | FormEventHandler<HTMLSpanElement> | 
 `onSuspend` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onSuspendCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdate` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdateCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onTouchCancel` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchCancelCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEnd` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEndCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMove` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMoveCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStart` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStartCapture` |  | `````` | TouchEventHandler<HTMLSpanElement> | 
 `onTransitionEnd` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onTransitionEndCapture` |  | `````` | TransitionEventHandler<HTMLSpanElement> | 
 `onVolumeChange` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onVolumeChangeCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaiting` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWaitingCapture` |  | `````` | ReactEventHandler<HTMLSpanElement> | 
 `onWheel` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `onWheelCapture` |  | `````` | WheelEventHandler<HTMLSpanElement> | 
 `placeholder` |  | `````` | string | 
 `prefix` |  | `````` | string | 
 `property` |  | `````` | string | 
 `radioGroup` |  | `````` | string | 
 `ref` |  | `````` | Ref<HTMLSpanElement> | 
 `resource` |  | `````` | string | 
 `results` |  | `````` | number | 
 `role` |  | `````` | AriaRole | 
 `security` |  | `````` | string | 
 `slot` |  | `````` | string | 
 `spellCheck` |  | `````` | Booleanish | 
 `style` |  | `````` | CSSProperties | 
 `suppressContentEditableWarning` |  | `````` | boolean | 
 `suppressHydrationWarning` |  | `````` | boolean | 
 `tabIndex` |  | `````` | number | 
 `theme` |  | `````` | any | 
 `title` |  | `````` | string | 
 `translate` |  | `````` | "yes" | "no" | 
 `typeof` |  | `````` | string | 
 `unselectable` |  | `````` | "on" | "off" | 
 `vocab` |  | `````` | string | 



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



