SectionBreak
============

### Import
```js
  import SectionBreak from '@govuk-react/section-break';
```
<!-- STORY -->

Create a thematic break between sections of content.

- https://govuk-react.github.io/govuk-react/?path=/docs/section-break
- https://design-system.service.gov.uk/styles/typography/#section-break

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `about` |  |  | string | 
 `accessKey` |  |  | string | 
 `aria-activedescendant` |  |  | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  |  | boolean \| "true" \| "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  |  | "list" \| "none" \| "both" \| "inline" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
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
 `aria-dropeffect` |  |  | "link" \| "none" \| "copy" \| "move" \| "execute" \| "popup" | Indicates what functions can be performed when a dragged object is released on the drop target.<br/>@deprecated in ARIA 1.1
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
 `aria-relevant` |  |  | "text" \| "all" \| "additions" \| "additions removals" \| "additions text" \| "removals" \| "removals additions" \| "removals text" \| "text additions" \| "text removals" | Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.<br/>@see aria-atomic.
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
 `level` |  |  | string | 
 `margin` |  |  | Margin \| Margin[] | 
 `mb` |  |  | string \| number | 
 `onAbort` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLHRElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLHRElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLHRElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLHRElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLHRElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLHRElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onChange` |  |  | FormEventHandler<HTMLHRElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLHRElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLHRElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLHRElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLHRElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLHRElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLHRElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLHRElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLHRElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onError` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLHRElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLHRElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onInput` |  |  | FormEventHandler<HTMLHRElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLHRElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLHRElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLHRElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLHRElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLHRElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLHRElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLHRElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLHRElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLHRElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onReset` |  |  | FormEventHandler<HTMLHRElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLHRElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLHRElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLHRElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLHRElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLHRElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLHRElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLHRElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLHRElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLHRElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLHRElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLHRElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLHRElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLHRElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLHRElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLHRElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLHRElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLHRElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLHRElement> | 
 `padding` |  |  | Padding \| Padding[] | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLHRElement> | 
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
 `visible` |  | ```undefined``` | boolean | 
 `vocab` |  |  | string | 


