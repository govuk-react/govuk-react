LeadParagraph
=============

### Import
```js
  import LeadParagraph from '@govuk-react/lead-paragraph';
```
<!-- STORY -->

A lead paragraph is an introductory paragraph that you can use at the top of a page to summarise the content.

- https://govuk-react.github.io/govuk-react/?path=/docs/lead-paragraph
- https://design-system.service.gov.uk/styles/typography/#lead-paragraph

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
 `as` |  |  | undefined | 
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
 `forwardedAs` |  |  | undefined | 
 `hidden` |  |  | boolean | 
 `id` |  |  | string | 
 `inlist` |  |  | any | 
 `inputMode` |  |  | "text" \| "search" \| "none" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
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
 `onAbort` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLParagraphElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLParagraphElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLParagraphElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLParagraphElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onChange` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLParagraphElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLParagraphElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLParagraphElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLParagraphElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLParagraphElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLParagraphElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLParagraphElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onError` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLParagraphElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLParagraphElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onInput` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLParagraphElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLParagraphElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLParagraphElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLParagraphElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLParagraphElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLParagraphElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onReset` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLParagraphElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLParagraphElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLParagraphElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLParagraphElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLParagraphElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLParagraphElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLParagraphElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLParagraphElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLParagraphElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLParagraphElement> | 
 `padding` |  |  | Padding \| Padding[] | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLParagraphElement> | 
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


