'use client';

import * as React from 'react';
import { createContext, useContext, useEffect, useId, useRef } from 'react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { Slot } from '../utils/slot';
import { tagName, type TabsElement } from './element';

/*
 * Headless tabs: unstyled parts over the <govuk-react-tabs> custom element (./element.ts),
 * which adds the tab behaviour once it upgrades. Every part takes `asChild` to render your
 * own element instead, with the part's props merged onto it.
 *
 * Uncontrolled with `defaultValue`, or controlled with `value` and `onValueChange`.
 * `preHydration` chooses what happens to a tab picked before React hydrated: "ignore" (the
 * default) applies the controlled `value`, "report" reports the pick through `onValueChange`.
 * Uncontrolled tabs always report it.
 *
 * `fallback` sets how the tabs work without JavaScript:
 * - "links" (the default): each tab links to its panel, and all the panels show.
 * - "radios": each tab is a label for a hidden radio in its panel, and only the checked
 *   panel shows, so tabs switch with no JavaScript.
 *
 * Each `value` is also its panel's id, so it must be unique on the page. In a single React
 * tree the radios are grouped by a generated `name`. Pass `name` when composing across islands,
 * or when separate React roots render tabs, since each root generates the same ids.
 */

type Fallback = 'links' | 'radios';

const TabsContext = createContext<{ selected?: string; fallback: Fallback; name: string }>({
  fallback: 'links',
  name: tagName,
});

// Before the element upgrades, only the checked radio's panel shows.
const radiosFallbackCss = `${tagName}:not(:defined) [data-tabs-content]:has(> input[type=radio]):not(:has(> input:checked)){display:none}`;

const visuallyHidden: React.CSSProperties = {
  position: 'absolute',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  border: 0,
};

const radioId = (name: string, value: string) => `${name}-${value}`;

type BaseRootProps = {
  children?: ReactNode;
  /** The selected tab's value, to control the tabs. */
  value?: string;
  /** The tab selected at first, when uncontrolled. Defaults to the first tab. */
  defaultValue?: string;
  /** Called when the user selects a tab. */
  onValueChange?: (value: string) => void;
  preHydration?: 'ignore' | 'report';
  /** The radios' group name, for the "radios" fallback. */
  name?: string;
  /** Only behave as tabs when this media query matches. */
  media?: string;
  /** Classes added to the element when it upgrades. */
  upgradedClass?: string;
  /** Classes added to the active item. */
  activeItemClass?: string;
  /** Classes added to inactive panels. */
  hiddenContentClass?: string;
  className?: string;
};

export type RootProps = BaseRootProps &
  (
    | { fallback?: 'links' }
    // Without JavaScript only the checked radio's panel shows, so one must be checked from the start.
    | { fallback: 'radios'; value: string }
    | { fallback: 'radios'; defaultValue: string }
  );

export function Root({
  children,
  value,
  defaultValue,
  onValueChange,
  preHydration = 'ignore',
  fallback = 'links',
  name,
  media,
  upgradedClass,
  activeItemClass,
  hiddenContentClass,
  className,
}: RootProps) {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  const ref = useRef<TabsElement>(null);
  const onValueChangeRef = useRef(onValueChange);
  useEffect(() => {
    onValueChangeRef.current = onValueChange;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const handleChange = (event: CustomEvent<{ value: string }>) => {
      // Ignore changes from nested tabs.
      if (event.target === element) onValueChangeRef.current?.(event.detail.value);
    };
    element.addEventListener('govuk-react-tabs:change', handleChange);
    return () => element.removeEventListener('govuk-react-tabs:change', handleChange);
  }, []);

  // A tab the user picked before hydration fired no event that React saw.
  const reported = useRef(false);
  const initial = useRef({ value, preHydration });
  useEffect(() => {
    const element = ref.current;
    const picked = element?.pickedValue;
    if (reported.current || !element || picked === undefined) return;
    reported.current = true;
    const start = initial.current;
    if (start.value === undefined || start.preHydration === 'report') onValueChangeRef.current?.(picked);
  }, []);

  return (
    <TabsContext.Provider value={{ selected: value ?? defaultValue, fallback, name: groupName }}>
      {fallback === 'radios' && (
        <style href={`${tagName}-radios-fallback`} precedence="default">
          {radiosFallbackCss}
        </style>
      )}
      {React.createElement(
        tagName,
        {
          ref,
          // The radios fallback switches tabs before upgrade, so it is styled as tabs from the start.
          className: [className, fallback === 'radios' && upgradedClass].filter(Boolean).join(' ') || undefined,
          value,
          'default-value': defaultValue,
          fallback,
          'prefer-pick': preHydration === 'report' ? '' : undefined,
          media,
          'upgraded-class': upgradedClass,
          'active-item-class': activeItemClass,
          'hidden-content-class': hiddenContentClass,
          // The element adds attributes on upgrade, so they can differ from the server's.
          suppressHydrationWarning: true,
        },
        children
      )}
    </TabsContext.Provider>
  );
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type ListProps = PartProps<'div'>;

export function List({ asChild, ...props }: ListProps) {
  const Element = asChild ? Slot : 'div';
  return <Element data-tabs-list="" suppressHydrationWarning {...props} />;
}

export type ItemProps = PartProps<'div'> & { value: string };

/** An optional wrapper around a tab, such as a list item. */
export function Item({ asChild, value, ...props }: ItemProps) {
  const Element = asChild ? Slot : 'div';
  return <Element data-tabs-item="" data-value={value} suppressHydrationWarning {...props} />;
}

export type TriggerProps = React.HTMLAttributes<HTMLElement> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
  value: string;
};

/** A link to its panel, or with the "radios" fallback a label for its panel's radio. */
export function Trigger({ asChild, value, children, ...props }: TriggerProps) {
  const { fallback, name } = useContext(TabsContext);
  const shared = { 'data-tabs-trigger': '', 'data-value': value, suppressHydrationWarning: true };
  if (asChild) {
    return (
      <Slot
        {...shared}
        {...(fallback === 'radios' ? { htmlFor: radioId(name, value) } : { href: `#${value}` })}
        {...props}
      >
        {children}
      </Slot>
    );
  }
  if (fallback === 'radios') {
    return (
      <label {...shared} htmlFor={radioId(name, value)} {...props}>
        {children}
      </label>
    );
  }
  return (
    <a {...shared} href={`#${value}`} {...props}>
      {children}
    </a>
  );
}

export type ContentProps = PartProps<'div'> & { value: string };

/** A panel. Its id is its `value`. */
export function Content({ asChild, value, children, ...props }: ContentProps) {
  const { fallback, name, selected } = useContext(TabsContext);
  const radio = fallback === 'radios' && (
    // The no-JS state. `form` names no form, so the radio is never submitted with a form around it.
    <input
      type="radio"
      name={name}
      id={radioId(name, value)}
      form={`${name}-none`}
      defaultChecked={value === selected}
      // Visually hidden but focusable, so the arrow keys switch tabs without JavaScript.
      style={visuallyHidden}
      suppressHydrationWarning
    />
  );
  const shared = {
    id: value,
    'data-tabs-content': '',
    'data-value': value,
    suppressHydrationWarning: true,
  };
  if (asChild && React.isValidElement<{ children?: ReactNode }>(children)) {
    const child: ReactElement<{ children?: ReactNode }> = children;
    return (
      <Slot {...shared} {...props}>
        {React.cloneElement(child, undefined, radio, child.props.children)}
      </Slot>
    );
  }
  return (
    <div {...shared} {...props}>
      {radio}
      {children}
    </div>
  );
}
