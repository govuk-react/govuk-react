DateField
=========

### Import
```js
  import DateField from '@govuk-react/date-field';
```
<!-- STORY -->

Use the date input component to help users enter a memorable date or one they can easily look up.

- https://govuk-react.github.io/govuk-react/?path=/docs/date-field
- https://design-system.service.gov.uk/components/date-input/

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
 `defaultValues` |  | ```{     day: undefined,     month: undefined,     year: undefined,   }``` | { day?: string; month?: string; year?: string; } | 
 `dir` |  |  | string | 
 `draggable` |  |  | Booleanish | 
 `errorText` |  | ```undefined``` | string | Error text
 `hidden` |  |  | boolean | 
 `hintText` |  | ```undefined``` | string | Optional hint text
 `id` |  |  | string | 
 `inlist` |  |  | any | 
 `input` |  | ```undefined``` | { onChange?: (date: { day: string; month: string; year: string; }) => unknown; onBlur?: (date: { day: string; month: string; year: string; }) => void; onFocus?: (date: { day: string; month: string; year: string; }) => void; value?: { ...; }; } | Properties that are sent to the input, matching final form and redux form input type
 `inputMode` |  |  | "text" \| "search" \| "none" \| "tel" \| "url" \| "email" \| "numeric" \| "decimal" | Hints at the type of data that might be entered by the user while editing the element or its contents<br/>@see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
 `inputNames` |  | ```{     day: undefined,     month: undefined,     year: undefined,   }``` | { day?: string; month?: string; year?: string; } | Input name attributes
 `inputs` |  | ```{     day: undefined,     month: undefined,     year: undefined,   }``` | { day?: InputProps; month?: InputProps; year?: InputProps; } | Custom props to pass down to the input fields
 `is` |  |  | string | Specify that a standard HTML element should behave like a defined custom built-in element<br/>@see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
 `itemID` |  |  | string | 
 `itemProp` |  |  | string | 
 `itemRef` |  |  | string | 
 `itemScope` |  |  | boolean | 
 `itemType` |  |  | string | 
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


