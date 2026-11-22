'use client';

import * as React from 'react';
import { createContext, useCallback, useContext, useEffect, useEffectEvent, useId, useReducer, useRef } from 'react';
import type { ComponentProps, ReactNode, SyntheticEvent } from 'react';
import { early, live, type ChangeDetails } from '../utils/change-details.js';
import { composeRefs, Slot } from '../utils/slot.js';
import { tagName, type ModalElement } from './element.js';

export type { ChangeDetails };

/*
 * Headless modal dialog: unstyled parts over a native `dialog` and the <govuk-react-modal>
 * element (./element.ts). Every part except Root takes `asChild`.
 *
 * Trigger and Close are buttons with invoker commands (`command` and `commandfor`), so where
 * the browser supports them the dialog opens as a true modal with no JavaScript: the page behind
 * is inert, focus moves into the dialog, and Escape closes it. The element runs the commands in
 * browsers without them, and applies `open` when controlled.
 *
 * Context only fills in ids: in an island without a Root, pass `dialogId` to Trigger and Close,
 * and `id` to Content.
 */

const ModalContext = createContext<{
  dialogId?: string;
  titleId?: string;
  descriptionId?: string;
  onOpenChange?: (open: boolean, details: ChangeDetails) => void;
}>({});

export type RootProps = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
  children?: ReactNode;
  /**
   * Whether the dialog is open, to control it once hydrated: the buttons and Escape then call
   * `onOpenChange`, and the dialog changes only when `open` does. Without it, the buttons alone
   * open and close it, which is best unless you need to open or close it yourself.
   */
  open?: boolean;
  /** Called when the dialog opens or closes. */
  onOpenChange?: (open: boolean, details: ChangeDetails) => void;
  /** The dialog's id, which the buttons' `commandfor` names. Defaults to a generated one. */
  dialogId?: string;
};

/** A modal dialog with the buttons that open and close it. */
export function Root({ children, open, onOpenChange, dialogId: dialogIdProp, ...props }: RootProps) {
  const generatedId = useId();
  const dialogId = dialogIdProp ?? generatedId;
  const element = useRef<ModalElement>(null);
  const synced = useRef(false);
  const [, render] = useReducer((count: number) => count + 1, 0);
  // `open` is set once hydrated, so the server markup is uncontrolled and the buttons work before
  // hydration. A dialog opened by then is reported by Content, rather than closed.
  useEffect(() => {
    const node = element.current;
    if (!node || open === undefined) {
      if (node) node.open = undefined;
      return;
    }
    if (!synced.current) {
      synced.current = true;
      const dialog = document.getElementById(dialogId);
      if (onOpenChange && !open && dialog instanceof HTMLDialogElement && dialog.open) {
        // The dialog stays open until the next render, which adopts it or closes it.
        render();
        return;
      }
    }
    node.open = open;
  });
  return (
    <ModalContext.Provider
      value={{ dialogId, titleId: `${dialogId}-title`, descriptionId: `${dialogId}-description`, onOpenChange }}
    >
      {React.createElement(
        tagName,
        {
          ...props,
          ref: element,
          suppressHydrationWarning: true,
        },
        children
      )}
    </ModalContext.Provider>
  );
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

type CommandProps = PartProps<'button'> & {
  /** The dialog's id. Set by Root. */
  dialogId?: string;
};

function Command({ command, asChild, dialogId, ...props }: CommandProps & { command: string }) {
  const context = useContext(ModalContext);
  // `command` and `commandfor` aren't in React's types yet, so they go in as a spread.
  const invoker = { command, commandfor: dialogId ?? context.dialogId };
  if (asChild) return <Slot {...invoker} {...props} />;
  return <button type="button" {...invoker} {...props} />;
}

export type TriggerProps = CommandProps;

/** A button that opens the dialog as a modal. */
export function Trigger(props: TriggerProps) {
  return <Command command="show-modal" {...props} />;
}

export type CloseProps = CommandProps;

/** A button that closes the dialog. */
export function Close(props: CloseProps) {
  return <Command command="close" {...props} />;
}

export type ContentProps = PartProps<'dialog'>;

/**
 * The dialog. It's named by Title, unless you pass `aria-labelledby` or `aria-label`. Pass
 * `closedby="any"` to also close it when the user clicks outside it.
 */
export function Content({ asChild, id, onClose, ref, ...props }: ContentProps) {
  const context = useContext(ModalContext);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const refs = useCallback(
    (dialog: HTMLDialogElement | null) => {
      dialogRef.current = dialog;
      const forget = composeRefs(ref)(dialog);
      return () => {
        dialogRef.current = null;
        forget();
      };
    },
    [ref]
  );
  const reported = useRef<boolean | undefined>(undefined);
  // Report each change once.
  const report = (dialog: HTMLDialogElement) => {
    if (reported.current === dialog.open) return;
    reported.current = dialog.open;
    // A controlled dialog that arrives at `open` is no news.
    if (dialog.closest(tagName)?.open === dialog.open) return;
    context.onOpenChange?.(dialog.open, live);
  };
  const reportFromDialog = useEffectEvent(report);
  const reportChange = useEffectEvent((open: boolean, details: ChangeDetails) => context.onOpenChange?.(open, details));
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    // A dialog the user opened before hydration, through its invoker command or the element, fired
    // nothing React heard, so report it once.
    if (dialog.open && reported.current === undefined) {
      reported.current = true;
      reportChange(true, early);
    }
    // Not every browser fires `toggle` on dialogs, so watch the dialog's `open` attribute.
    const observer = new MutationObserver(() => reportFromDialog(dialog));
    observer.observe(dialog, { attributes: true, attributeFilter: ['open'] });
    // While controlled, the element asks for a change the dialog hasn't made.
    const closest = dialog.closest(tagName);
    const root = closest instanceof HTMLElement ? closest : null;
    const onRequest = (event: CustomEvent<{ open: boolean }>) => {
      if (event.target !== root || event.detail.open === dialog.open) return;
      reportChange(event.detail.open, live);
    };
    root?.addEventListener('govuk-react-modal:change', onRequest);
    return () => {
      observer.disconnect();
      root?.removeEventListener('govuk-react-modal:change', onRequest);
    };
  }, []);
  const shared = {
    id: id ?? context.dialogId,
    'aria-labelledby': props['aria-label'] ? undefined : context.titleId,
    ref: refs,
    onClose: (event: SyntheticEvent<HTMLDialogElement>) => {
      onClose?.(event);
      report(event.currentTarget);
    },
    // The dialog's open state belongs to the browser.
    suppressHydrationWarning: true,
  };
  if (asChild) return <Slot {...shared} {...props} />;
  return <dialog {...shared} {...props} />;
}

export type TitleProps = PartProps<'h2'>;

/** The dialog's heading, which names it. */
export function Title({ asChild, ...props }: TitleProps) {
  const context = useContext(ModalContext);
  const Element = asChild ? Slot : 'h2';
  return <Element id={context.titleId} {...props} />;
}

export type DescriptionProps = PartProps<'p'>;

/**
 * Text that describes the dialog, such as what happens next. Content's `aria-describedby` names
 * it, unless you pass your own.
 */
export function Description({ asChild, ref, ...props }: DescriptionProps) {
  const context = useContext(ModalContext);
  const id = props.id ?? context.descriptionId;
  // Set from here, not by Content, so a dialog with no Description names nothing.
  const describe = useCallback(
    (description: HTMLParagraphElement | null) => {
      const forget = composeRefs(ref)(description);
      const dialog = description?.closest('dialog');
      if (!dialog || !id || dialog.hasAttribute('aria-describedby')) return forget;
      dialog.setAttribute('aria-describedby', id);
      return () => {
        if (dialog.getAttribute('aria-describedby') === id) dialog.removeAttribute('aria-describedby');
        forget();
      };
    },
    [id, ref]
  );
  const Element = asChild ? Slot : 'p';
  return <Element id={id} ref={describe} {...props} />;
}
