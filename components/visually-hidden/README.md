VisuallyHidden
==============

### Import
```js
  import VisuallyHidden from '@govuk-react/visually-hidden';
```
<!-- STORY -->

Hide an element visually, but have it available for screen readers.

- https://govuk-react.github.io/govuk-react/?path=/docs/visually-hidden

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
 `children` |  |  | ReactNode | Content to be hidden
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
 `focusable` |  | ```undefined``` | boolean | Allow component to be focusable, and thus become visible
 `forwardedAs` |  |  | undefined | 
 `hidden` |  |  | boolean | 
 `id` |  |  | string | 
 `important` |  | ```undefined``` | boolean | Set styles with `!important`
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
 `onAbort` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLSpanElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLSpanElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLSpanElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLSpanElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onChange` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLSpanElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLSpanElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLSpanElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLSpanElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLSpanElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLSpanElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLSpanElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onError` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLSpanElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLSpanElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onInput` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLSpanElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLSpanElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLSpanElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLSpanElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLSpanElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLSpanElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onReset` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLSpanElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLSpanElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLSpanElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLSpanElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLSpanElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLSpanElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLSpanElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLSpanElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLSpanElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLSpanElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLSpanElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLSpanElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLSpanElement> | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLSpanElement> | 
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


