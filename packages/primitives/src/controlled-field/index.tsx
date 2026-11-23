'use client';

import * as React from 'react';
import { useCallback, useEffect, useEffectEvent, useReducer, useRef } from 'react';
import type { ChangeEvent, ComponentProps, Ref } from 'react';
import { early, live, type ChangeDetails } from '../utils/change-details.js';
import { composeRefs, Slot } from '../utils/slot.js';

export type { ChangeDetails };

/*
 * Headless controlled fields: native form fields whose value React holds. They need no custom
 * element, because the browser keeps what the user enters before React hydrates. React leaves
 * that in the field without calling `onChange`, then replaces it with the prop at the next
 * render. These parts report it instead. Every part takes `asChild`.
 */

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

type Controlled<E extends keyof React.JSX.IntrinsicElements> = Omit<
  PartProps<E>,
  'value' | 'defaultValue' | 'checked' | 'defaultChecked'
>;

type OnChange<State> = (state: State, details: ChangeDetails) => void;

function useReportedState<Field extends HTMLElement, State>(
  ref: Ref<Field> | undefined,
  read: (field: Field) => State,
  state: State,
  onStateChange: OnChange<State> | undefined,
  isReported: (state: State) => boolean = () => true
) {
  const field = useRef<Field>(null);
  const refs = useCallback((node: Field | null) => composeRefs(field, ref)(node), [ref]);
  const reportEarly = useEffectEvent((next: State) => onStateChange?.(next, early));
  const synced = useRef(false);
  const reported = useRef<State>(undefined);
  const [, render] = useReducer((count: number) => count + 1, 0);

  useEffect(() => {
    const node = field.current;
    if (!node || synced.current) return;
    synced.current = true;
    const entered = read(node);
    if (entered === state || entered === reported.current || !isReported(entered)) return;
    reportEarly(entered);
    // It stays as the user left it until this render, which adopts it or goes back to the prop.
    render();
  });

  function reportLive(next: State) {
    reported.current = next;
    if (isReported(next)) onStateChange?.(next, live);
  }

  return { fieldRef: refs, reportLive };
}

export type InputProps = Controlled<'input'> & {
  /** The field's value. */
  value: string;
  /** Called when the user changes the value, and once hydrated with a value entered before then. */
  onValueChange?: OnChange<string>;
};

/** A controlled `<input>` that takes text, such as a text, email, number or password field. */
export function Input({ asChild, value, onValueChange, onChange, ref, ...props }: InputProps) {
  const { fieldRef, reportLive } = useReportedState(
    ref,
    (input: HTMLInputElement) => input.value,
    value,
    onValueChange
  );
  const Element = asChild ? Slot : 'input';
  return (
    <Element
      {...props}
      ref={fieldRef}
      value={value}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        reportLive(event.currentTarget.value);
      }}
    />
  );
}

export type TextareaProps = Controlled<'textarea'> & {
  /** The field's value. */
  value: string;
  /** Called when the user changes the value, and once hydrated with a value entered before then. */
  onValueChange?: OnChange<string>;
};

/** A controlled `<textarea>`. */
export function Textarea({ asChild, value, onValueChange, onChange, ref, ...props }: TextareaProps) {
  const { fieldRef, reportLive } = useReportedState(
    ref,
    (textarea: HTMLTextAreaElement) => textarea.value,
    value,
    onValueChange
  );
  const Element = asChild ? Slot : 'textarea';
  return (
    <Element
      {...props}
      ref={fieldRef}
      value={value}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(event);
        reportLive(event.currentTarget.value);
      }}
    />
  );
}

export type SelectProps = Omit<Controlled<'select'>, 'multiple'> & {
  /** The value of the selected option. */
  value: string;
  /** Called when the user selects an option, and once hydrated with one selected before then. */
  onValueChange?: OnChange<string>;
};

/** A controlled `<select>` with one selected option. */
export function Select({ asChild, value, onValueChange, onChange, ref, ...props }: SelectProps) {
  const { fieldRef, reportLive } = useReportedState(
    ref,
    (select: HTMLSelectElement) => select.value,
    value,
    onValueChange
  );
  const Element = asChild ? Slot : 'select';
  return (
    <Element
      {...props}
      ref={fieldRef}
      value={value}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(event);
        reportLive(event.currentTarget.value);
      }}
    />
  );
}

type CheckedProps = Omit<PartProps<'input'>, 'type' | 'checked' | 'defaultChecked'> & {
  /** Whether it's checked. */
  checked: boolean;
};

export type CheckboxProps = CheckedProps & {
  /** Called when the user checks or unchecks it, and once hydrated if they did so before then. */
  onCheckedChange?: OnChange<boolean>;
};

/** A controlled checkbox. */
export function Checkbox({ asChild, checked, onCheckedChange, onChange, ref, ...props }: CheckboxProps) {
  const { fieldRef, reportLive } = useReportedState(
    ref,
    (input: HTMLInputElement) => input.checked,
    checked,
    onCheckedChange
  );
  const Element = asChild ? Slot : 'input';
  return (
    <Element
      type="checkbox"
      {...props}
      ref={fieldRef}
      checked={checked}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        reportLive(event.currentTarget.checked);
      }}
    />
  );
}

export type RadioProps = CheckedProps & {
  /**
   * Called when the user picks this radio, and once hydrated if they picked it before then. As
   * with a native radio's `change` event, it isn't called when picking another radio unchecks it.
   */
  onCheck?: (details: ChangeDetails) => void;
};

const isChecked = (checked: boolean) => checked;

/** A controlled radio. */
export function Radio({ asChild, checked, onCheck, onChange, ref, ...props }: RadioProps) {
  const { fieldRef, reportLive } = useReportedState(
    ref,
    (input: HTMLInputElement) => input.checked,
    checked,
    onCheck && ((_checked: boolean, details: ChangeDetails) => onCheck(details)),
    isChecked
  );
  const Element = asChild ? Slot : 'input';
  return (
    <Element
      type="radio"
      {...props}
      ref={fieldRef}
      checked={checked}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event);
        reportLive(event.currentTarget.checked);
      }}
    />
  );
}
