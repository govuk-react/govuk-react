Button
======

### Import
```js
  import Button from '@govuk-react/button';
```
<!-- STORY -->

Use the button component to help users carry out an action like starting an application or saving their information.

- https://govuk-react.github.io/govuk-react/?path=/docs/button
- https://design-system.service.gov.uk/components/button/

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
 `autoFocus` |  |  | boolean | 
 `autoSave` |  |  | string | 
 `buttonColour` |  | ```undefined``` | string | Override for default button colour
 `buttonHoverColour` |  | ```undefined``` | string | Override for default button hover colour,<br/>which defaults to `buttonColour` darkened by 5%
 `buttonShadowColour` |  | ```undefined``` | string | Override for default button shadow colour,<br/>which defaults to `buttonColour` darkened by 15%
 `buttonTextColour` |  | ```undefined``` | string | Override for default button text colour,<br/>which defaults to govuk white
 `children` |  |  | ReactNode | Button text
 `className` |  |  | string | 
 `color` |  |  | string | 
 `contentEditable` |  |  | Booleanish \| "inherit" | 
 `contextMenu` |  |  | string | 
 `dangerouslySetInnerHTML` |  |  | { __html: string; } | 
 `datatype` |  |  | string | 
 `defaultChecked` |  |  | boolean | 
 `defaultValue` |  |  | string \| number \| readonly string[] | 
 `dir` |  |  | string | 
 `disabled` |  |  | boolean | 
 `draggable` |  |  | Booleanish | 
 `form` |  |  | string | 
 `formAction` |  |  | string | 
 `formEncType` |  |  | string | 
 `formMethod` |  |  | string | 
 `formNoValidate` |  |  | boolean | 
 `formTarget` |  |  | string | 
 `forwardedAs` |  |  | undefined | 
 `hidden` |  |  | boolean | 
 `icon` |  | ```undefined``` | ReactNode | Button icon
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
 `name` |  |  | string | 
 `onAbort` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onAbortCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onAnimationEnd` |  |  | AnimationEventHandler<HTMLButtonElement> | 
 `onAnimationEndCapture` |  |  | AnimationEventHandler<HTMLButtonElement> | 
 `onAnimationIteration` |  |  | AnimationEventHandler<HTMLButtonElement> | 
 `onAnimationIterationCapture` |  |  | AnimationEventHandler<HTMLButtonElement> | 
 `onAnimationStart` |  |  | AnimationEventHandler<HTMLButtonElement> | 
 `onAnimationStartCapture` |  |  | AnimationEventHandler<HTMLButtonElement> | 
 `onAuxClick` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onAuxClickCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onBeforeInput` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onBeforeInputCapture` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onBlur` |  |  | FocusEventHandler<HTMLButtonElement> | 
 `onBlurCapture` |  |  | FocusEventHandler<HTMLButtonElement> | 
 `onCanPlay` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onCanPlayCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onCanPlayThrough` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onCanPlayThroughCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onChange` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onChangeCapture` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onClick` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onClickCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onCompositionEnd` |  |  | CompositionEventHandler<HTMLButtonElement> | 
 `onCompositionEndCapture` |  |  | CompositionEventHandler<HTMLButtonElement> | 
 `onCompositionStart` |  |  | CompositionEventHandler<HTMLButtonElement> | 
 `onCompositionStartCapture` |  |  | CompositionEventHandler<HTMLButtonElement> | 
 `onCompositionUpdate` |  |  | CompositionEventHandler<HTMLButtonElement> | 
 `onCompositionUpdateCapture` |  |  | CompositionEventHandler<HTMLButtonElement> | 
 `onContextMenu` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onContextMenuCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onCopy` |  |  | ClipboardEventHandler<HTMLButtonElement> | 
 `onCopyCapture` |  |  | ClipboardEventHandler<HTMLButtonElement> | 
 `onCut` |  |  | ClipboardEventHandler<HTMLButtonElement> | 
 `onCutCapture` |  |  | ClipboardEventHandler<HTMLButtonElement> | 
 `onDoubleClick` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onDoubleClickCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onDrag` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragCapture` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragEnd` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragEndCapture` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragEnter` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragEnterCapture` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragExit` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragExitCapture` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragLeave` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragLeaveCapture` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragOver` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragOverCapture` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragStart` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDragStartCapture` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDrop` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDropCapture` |  |  | DragEventHandler<HTMLButtonElement> | 
 `onDurationChange` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onDurationChangeCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onEmptied` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onEmptiedCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onEncrypted` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onEncryptedCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onEnded` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onEndedCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onError` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onErrorCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onFocus` |  |  | FocusEventHandler<HTMLButtonElement> | 
 `onFocusCapture` |  |  | FocusEventHandler<HTMLButtonElement> | 
 `onGotPointerCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onGotPointerCaptureCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onInput` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onInputCapture` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onInvalid` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onInvalidCapture` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onKeyDown` |  |  | KeyboardEventHandler<HTMLButtonElement> | 
 `onKeyDownCapture` |  |  | KeyboardEventHandler<HTMLButtonElement> | 
 `onKeyPress` |  |  | KeyboardEventHandler<HTMLButtonElement> | 
 `onKeyPressCapture` |  |  | KeyboardEventHandler<HTMLButtonElement> | 
 `onKeyUp` |  |  | KeyboardEventHandler<HTMLButtonElement> | 
 `onKeyUpCapture` |  |  | KeyboardEventHandler<HTMLButtonElement> | 
 `onLoad` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onLoadCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onLoadStart` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onLoadStartCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onLoadedData` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onLoadedDataCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onLoadedMetadata` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onLoadedMetadataCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onLostPointerCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onLostPointerCaptureCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onMouseDown` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseDownCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseEnter` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseLeave` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseMove` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseMoveCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseOut` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseOutCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseOver` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseOverCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseUp` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onMouseUpCapture` |  |  | MouseEventHandler<HTMLButtonElement> | 
 `onPaste` |  |  | ClipboardEventHandler<HTMLButtonElement> | 
 `onPasteCapture` |  |  | ClipboardEventHandler<HTMLButtonElement> | 
 `onPause` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onPauseCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onPlay` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onPlayCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onPlaying` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onPlayingCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onPointerCancel` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerCancelCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerDown` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerDownCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerEnter` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerEnterCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerLeave` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerLeaveCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerMove` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerMoveCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerOut` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerOutCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerOver` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerOverCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerUp` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onPointerUpCapture` |  |  | PointerEventHandler<HTMLButtonElement> | 
 `onProgress` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onProgressCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onRateChange` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onRateChangeCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onReset` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onResetCapture` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onScroll` |  |  | UIEventHandler<HTMLButtonElement> | 
 `onScrollCapture` |  |  | UIEventHandler<HTMLButtonElement> | 
 `onSeeked` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onSeekedCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onSeeking` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onSeekingCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onSelect` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onSelectCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onStalled` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onStalledCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onSubmit` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onSubmitCapture` |  |  | FormEventHandler<HTMLButtonElement> | 
 `onSuspend` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onSuspendCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onTimeUpdate` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onTimeUpdateCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onTouchCancel` |  |  | TouchEventHandler<HTMLButtonElement> | 
 `onTouchCancelCapture` |  |  | TouchEventHandler<HTMLButtonElement> | 
 `onTouchEnd` |  |  | TouchEventHandler<HTMLButtonElement> | 
 `onTouchEndCapture` |  |  | TouchEventHandler<HTMLButtonElement> | 
 `onTouchMove` |  |  | TouchEventHandler<HTMLButtonElement> | 
 `onTouchMoveCapture` |  |  | TouchEventHandler<HTMLButtonElement> | 
 `onTouchStart` |  |  | TouchEventHandler<HTMLButtonElement> | 
 `onTouchStartCapture` |  |  | TouchEventHandler<HTMLButtonElement> | 
 `onTransitionEnd` |  |  | TransitionEventHandler<HTMLButtonElement> | 
 `onTransitionEndCapture` |  |  | TransitionEventHandler<HTMLButtonElement> | 
 `onVolumeChange` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onVolumeChangeCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onWaiting` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onWaitingCapture` |  |  | ReactEventHandler<HTMLButtonElement> | 
 `onWheel` |  |  | WheelEventHandler<HTMLButtonElement> | 
 `onWheelCapture` |  |  | WheelEventHandler<HTMLButtonElement> | 
 `padding` |  |  | Padding \| Padding[] | 
 `placeholder` |  |  | string | 
 `prefix` |  |  | string | 
 `property` |  |  | string | 
 `radioGroup` |  |  | string | 
 `ref` |  |  | Ref<HTMLButtonElement> | 
 `resource` |  |  | string | 
 `results` |  |  | number | 
 `role` |  |  | AriaRole | 
 `security` |  |  | string | 
 `slot` |  |  | string | 
 `spellCheck` |  |  | Booleanish | 
 `start` |  | ```undefined``` | boolean | Renders a large button if set to true
 `style` |  |  | CSSProperties | 
 `suppressContentEditableWarning` |  |  | boolean | 
 `suppressHydrationWarning` |  |  | boolean | 
 `tabIndex` |  |  | number | 
 `theme` |  |  | never | 
 `title` |  |  | string | 
 `translate` |  |  | "yes" \| "no" | 
 `type` |  |  | "button" \| "submit" \| "reset" | 
 `typeof` |  |  | string | 
 `unselectable` |  |  | "on" \| "off" | 
 `value` |  |  | string \| number \| readonly string[] | 
 `vocab` |  |  | string | 


