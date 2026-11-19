'use client';

import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot';
import { translationAttributes, type Translation } from '../utils/translation';
import { defaults, statusText, tagName } from './element';

export type { Translation } from '../utils/translation';

/*
 * Headless file upload: unstyled parts over the <govuk-react-file-upload> element (./element.ts),
 * which shows the button on upgrade, hides the input and handles dropped files. Every part except
 * Root takes `asChild`.
 *
 * The input's files are the state, owned by the browser, so there is nothing to control. Without
 * JavaScript the native file input shows and the button stays hidden.
 */

export type RootProps = React.HTMLAttributes<HTMLElement> & {
  /** Shown while no file is chosen. Defaults to "No file chosen". */
  noFileChosen?: string;
  /** Shown when more than one file is chosen. `%{count}` is the number. Defaults to "%{count} files chosen". */
  multipleFilesChosen?: Translation;
  /** Announced when the user drags files into the drop zone. Defaults to "Entered drop zone". */
  enteredDropZone?: string;
  /** Announced when the user drags files out of the drop zone. Defaults to "Left drop zone". */
  leftDropZone?: string;
  /** Classes for the button while no file is chosen. */
  emptyClass?: string;
  /** Classes for the button while files are dragged over the drop zone. */
  draggingClass?: string;
  /** Classes for the drop zone while the input is disabled. */
  disabledClass?: string;
};

// What the status starts with, so the element only changes text React rendered.
const InitialStatus = createContext<string>(defaults['no-file-chosen']);

export function Root({
  noFileChosen,
  multipleFilesChosen,
  enteredDropZone,
  leftDropZone,
  emptyClass,
  draggingClass,
  disabledClass,
  ...props
}: RootProps) {
  // Rendered once and then left to the element, so a re-render never puts back a stale status.
  const [initial] = useState(() => statusText([], { 'no-file-chosen': noFileChosen }, props.lang || 'en'));
  return (
    <InitialStatus.Provider value={initial}>
      {React.createElement(tagName, {
        ...props,
        // The element owns `data-upgraded`.
        suppressHydrationWarning: true,
        'no-file-chosen': noFileChosen,
        ...translationAttributes('multiple-files-chosen', multipleFilesChosen),
        'entered-drop-zone': enteredDropZone,
        'left-drop-zone': leftDropZone,
        'empty-class': emptyClass,
        'dragging-class': draggingClass,
        'disabled-class': disabledClass,
      })}
    </InitialStatus.Provider>
  );
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type DropZoneProps = PartProps<'div'>;

/** The area that shows files are being dragged over it. Holds the button and the input. */
export function DropZone({ asChild, ...props }: DropZoneProps) {
  const Element = asChild ? Slot : 'div';
  // The element owns its disabled classes after upgrade.
  return <Element data-file-upload-drop-zone="" suppressHydrationWarning {...props} />;
}

export type InputProps = Omit<PartProps<'input'>, 'type'>;

/** The file input, with an `id` and a `label`. Shown without JavaScript, and hidden on upgrade. */
export function Input({ asChild, ...props }: InputProps) {
  const Element = asChild ? Slot : 'input';
  // The element owns `id` and `hidden` after upgrade.
  return <Element type="file" suppressHydrationWarning {...props} />;
}

export type ButtonProps = PartProps<'button'>;

/**
 * Opens the file picker, and takes dropped files. Hidden until the element upgrades, when it
 * takes the input's id, so the input's label names it. Holds `Status`.
 */
export function Button({ asChild, ...props }: ButtonProps) {
  const Element = asChild ? Slot : 'button';
  // The element owns `id`, `hidden`, `disabled`, its ARIA and its classes after upgrade.
  return <Element data-file-upload-button="" type="button" hidden suppressHydrationWarning {...props} />;
}

export type StatusProps = PartProps<'span'>;

/** Which files are chosen: "No file chosen", the file's name, or how many files. In `Button`. */
export function Status({ asChild, children, ...props }: StatusProps) {
  const initial = useContext(InitialStatus);
  const Element = asChild ? Slot : 'span';
  // The element owns its text after upgrade.
  return (
    <Element data-file-upload-status="" aria-live="polite" suppressHydrationWarning {...props}>
      {children ?? initial}
    </Element>
  );
}

export type SeparatorProps = PartProps<'span'>;

/** Between the label and the button's text in the button's accessible name. Defaults to ", ". In `Button`. */
export function Separator({ asChild, children = ', ', ...props }: SeparatorProps) {
  const Element = asChild ? Slot : 'span';
  // The element owns its `id` after upgrade.
  return (
    <Element data-file-upload-separator="" suppressHydrationWarning {...props}>
      {children}
    </Element>
  );
}

export type AnnouncementsProps = PartProps<'span'>;

/** Announces entering and leaving the drop zone. Make it visually hidden. */
export function Announcements({ asChild, ...props }: AnnouncementsProps) {
  const Element = asChild ? Slot : 'span';
  // The element owns its text after upgrade.
  return <Element data-file-upload-announcements="" aria-live="assertive" suppressHydrationWarning {...props} />;
}
