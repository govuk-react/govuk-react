Input
=====

### Import
```js
  import Input from '@govuk-react/input';
```
<!-- STORY -->

Use the text input component when you need to let users enter text that’s no longer than a single line, such as their name or phone number.

- https://govuk-react.github.io/govuk-react/?path=/docs/input
- https://design-system.service.gov.uk/components/text-input/

### Properties
Prop | Required | Default | Type | Description
:--- | :------- | :------ | :--- | :----------
 `about` |  |  | string | 
 `accept` |  |  | string | 
 `accessKey` |  |  | string | 
 `alt` |  |  | string | 
 `aria-activedescendant` |  |  | string | Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.
 `aria-atomic` |  |  | boolean \| "true" \| "false" | Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
 `aria-autocomplete` |  |  | "list" \| "none" \| "inline" \| "both" | Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be<br/>presented if they are made.
 `aria-busy` |  |  | boolean \| "true" \| "false" | Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.
 `aria-checked` |  |  | boolean \| "true" \| "false" \| "mixed" | Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.<br/>@see aria-pressed<br/>@see aria-selected.
 `aria-colcount` |  |  | number | Defines the total number of columns in a table, grid, or treegrid.<br/>@see aria-colindex.
 `aria-colindex` |  |  | number | Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.<br/>@see aria-colcount<br/>@see aria-colspan.
 `aria-colspan` |  |  | number | Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.<br/>@see aria-colindex<br/>@see aria-rowspan.
 `aria-controls` |  |  | string | Identifies the element (or elements) whose contents or presence are controlled by the current element.<br/>@see aria-owns.
 `aria-current` |  |  | boolean \| "time" \| "step" \| "date" \| "true" \| "false" \| "page" \| "location" | Indicates the element that represents the current item within a container or set of related elements.
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
 `autoComplete` |  |  | string | 
 `autoCorrect` |  |  | string | 
 `autoFocus` |  |  | boolean | 
 `autoSave` |  |  | string | 
 `capture` |  |  | string \| boolean | 
 `checked` |  |  | boolean | 
 `className` |  |  | string | 
 `color` |  |  | string | 
 `contentEditable` |  |  | Booleanish \| "inherit" | 
 `contextMenu` |  |  | string | 
 `crossOrigin` |  |  | string | 
 `dangerouslySetInnerHTML` |  |  | { __html: string; } | 
 `datatype` |  |  | string | 
 `defaultChecked` |  |  | boolean | 
 `defaultValue` |  |  | string \| number \| readonly string[] | 
 `dir` |  |  | string | 
 `disabled` |  |  | boolean | 
 `draggable` |  |  | Booleanish | 
 `error` |  | ```undefined``` | boolean | 
 `errorColor` |  | ```undefined``` | string | 
 `form` |  |  | string | 
 `formAction` |  |  | string | 
 `formEncType` |  |  | string | 
 `formMethod` |  |  | string | 
 `formNoValidate` |  |  | boolean | 
 `formTarget` |  |  | string | 
 `forwardedAs` |  |  | undefined | 
 `height` |  |  | string \| number | 
 `hidden` |  |  | boolean | 
 `id` |  |  | string | 
 `inlist` |  |  | any | 
 `inputMode` |  |  | "text" \| "search" \| "email" \| "tel" \| "url" \| "none" \| "numeric" \| "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `is` |  |  | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  |  | string | 
 `itemProp` |  |  | string | 
 `itemRef` |  |  | string | 
 `itemScope` |  |  | boolean | 
 `itemType` |  |  | string | 
 `key` |  |  | Key | 
 `lang` |  |  | string | 
 `list` |  |  | string | 
 `margin` |  |  | Margin \| Margin[] | 
 `max` |  |  | string \| number | 
 `maxLength` |  |  | number | 
 `mb` |  |  | string \| number | 
 `min` |  |  | string \| number | 
 `minLength` |  |  | number | 
 `multiple` |  |  | boolean | 
 `name` |  |  | string | 
 `onAbort` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLInputElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLInputElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLInputElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLInputElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLInputElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLInputElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onChange` |  |  | ChangeEventHandler<HTMLInputElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLInputElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLInputElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLInputElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLInputElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLInputElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLInputElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLInputElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLInputElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onError` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLInputElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLInputElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onInput` |  |  | FormEventHandler<HTMLInputElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLInputElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLInputElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLInputElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLInputElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLInputElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLInputElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLInputElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLInputElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLInputElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onReset` |  |  | FormEventHandler<HTMLInputElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLInputElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLInputElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLInputElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLInputElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLInputElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLInputElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLInputElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLInputElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLInputElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLInputElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLInputElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLInputElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLInputElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLInputElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLInputElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLInputElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLInputElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLInputElement> | 
 `padding` |  |  | Padding \| Padding[] | 
 `pattern` |  |  | string | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `readOnly` |  |  | boolean | 
 `ref` |  |  | Ref<HTMLInputElement> | 
 `required` |  |  | boolean | 
 `resource` |  |  | string | 
 `results` |  |  | number | 
 `role` |  |  | AriaRole | 
 `security` |  |  | string | 
 `size` |  |  | number | 
 `slot` |  |  | string | 
 `spellCheck` |  |  | Booleanish | 
 `src` |  |  | string | 
 `step` |  |  | string \| number | 
 `style` |  |  | CSSProperties | 
 `suppressContentEditableWarning` |  |  | boolean | 
 `suppressHydrationWarning` |  |  | boolean | 
 `tabIndex` |  |  | number | 
 `theme` |  |  | any | 
 `title` |  |  | string | 
 `translate` |  |  | "yes" \| "no" | 
 `type` |  | ```text``` | HTMLInputTypeAttribute | 
 `typeof` |  |  | string | 
 `unselectable` |  |  | "on" \| "off" | 
 `value` |  |  | string \| number \| readonly string[] | 
 `vocab` |  |  | string | 
 `width` |  |  | string \| number | 


