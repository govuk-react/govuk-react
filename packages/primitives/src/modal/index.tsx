'use client';

import * as React from 'react';
import { createContext, useCallback, useContext, useEffect, useId, useRef } from 'react';
import type { ComponentProps, ReactNode, SyntheticEvent } from 'react';
import { composeRefs, Slot } from '../utils/slot.js';
import { tagName } from './element.js';

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
  onOpenChange?: (open: boolean) => void;
}>({});

export type RootProps = Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> & {
  children?: ReactNode;
  /** Whether the dialog is open, to control it. Without it, the buttons alone open and close it. */
  open?: boolean;
  /** Called when the dialog opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** The dialog's id, which the buttons' `commandfor` names. Defaults to a generated one. */
  dialogId?: string;
};

export function Root({ children, open, onOpenChange, dialogId: dialogIdProp, ...props }: RootProps) {
  const generatedId = useId();
  const dialogId = dialogIdProp ?? generatedId;
  return (
    <ModalContext.Provider value={{ dialogId, titleId: `${dialogId}-title`, onOpenChange }}>
      {React.createElement(
        tagName,
        {
          ...props,
          open: open === undefined ? undefined : String(open),
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
  const reported = useRef<boolean | undefined>(undefined);
  const onOpenChange = useRef(context.onOpenChange);
  useEffect(() => {
    onOpenChange.current = context.onOpenChange;
  });
  // Report each change once: `toggle` fires on opening and closing where the browser fires it on
  // dialogs, and `close` on closing everywhere.
  const report = useCallback((dialog: HTMLDialogElement) => {
    if (reported.current === dialog.open) return;
    reported.current = dialog.open;
    onOpenChange.current?.(dialog.open);
  }, []);
  // A dialog the user opened before hydration, through its invoker command or the element, fired
  // nothing React heard, so report it once.
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog?.open && reported.current === undefined) {
      reported.current = true;
      onOpenChange.current?.(true);
    }
  }, []);
  // React doesn't listen for `toggle` on a dialog, so listen natively.
  const listen = useCallback(
    (dialog: HTMLDialogElement | null) => {
      dialogRef.current = dialog;
      if (!dialog) return undefined;
      const forget = composeRefs(ref)(dialog);
      const onToggle = () => report(dialog);
      dialog.addEventListener('toggle', onToggle);
      return () => {
        dialog.removeEventListener('toggle', onToggle);
        dialogRef.current = null;
        forget();
      };
    },
    [ref, report]
  );
  const shared = {
    id: id ?? context.dialogId,
    'aria-labelledby': props['aria-label'] ? undefined : context.titleId,
    ref: listen,
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
