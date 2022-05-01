Label
=====

### Import
```js
  import Label from '@govuk-react/label';
```
<!-- STORY -->

Label element to wrap label-text and a form input.

- https://govuk-react.github.io/govuk-react/?path=/docs/label

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
 `error` |  | ```undefined``` | boolean | Apply error state styling to the component
 `form` |  |  | string | 
 `forwardedAs` |  |  | undefined | 
 `hidden` |  |  | boolean | 
 `htmlFor` |  |  | string | 
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
 `onAbort` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLLabelElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLLabelElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLLabelElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLLabelElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onChange` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLLabelElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLLabelElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLLabelElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLLabelElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLLabelElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLLabelElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLLabelElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onError` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLLabelElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLLabelElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onInput` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLLabelElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLLabelElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLLabelElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLLabelElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLLabelElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLLabelElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onReset` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLLabelElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLLabelElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLLabelElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLLabelElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLLabelElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLLabelElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLLabelElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLLabelElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLLabelElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLLabelElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLLabelElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLLabelElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLLabelElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLLabelElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLLabelElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLLabelElement> | 
 `padding` |  |  | Padding \| Padding[] | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLLabelElement> | 
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


