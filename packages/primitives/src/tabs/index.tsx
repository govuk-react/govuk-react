'use client';

import * as React from 'react';
import { createContext, useContext, useEffect, useId, useRef } from 'react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { Slot } from '../utils/slot';
import { tagName, type TabsElement } from './element';

/*
 * Headless tabs: unstyled parts over the <govuk-react-tabs> element (./element.ts), which adds
 * the tab behaviour on upgrade. Every part except Root takes `asChild`.
 *
 * Context only fills in defaults: in an island without a Root, pass `fallback`, `name` and
 * `defaultSelected` to the parts. Each `value` is also its panel's id, so must be unique.
 */

type Fallback = 'links' | 'radios';

const TabsContext = createContext<{ selected?: string; fallback?: Fallback; name?: string }>({});

/**
 * Shows only the checked radio's panel until the element upgrades, and below its `media`.
 * Root renders it inline; under a strict CSP, add it to a stylesheet instead.
 */
export const radiosFallbackCss = `${tagName}:not([data-upgraded]) [data-tabs-content]:has(> input[type=radio]):not(:has(> input:checked)){display:none}`;

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
} & Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'onChange'>;

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
  ...props
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
          ...props,
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

/** Set by Root. Pass them to a part rendered without a Root, such as in an island. */
type IslandProps = {
  fallback?: Fallback;
  /** The radios' group name, for the "radios" fallback. */
  name?: string;
};

function useIsland({ fallback, name }: IslandProps) {
  const context = useContext(TabsContext);
  return {
    fallback: fallback ?? context.fallback ?? 'links',
    name: name ?? context.name ?? tagName,
    selected: context.selected,
  };
}

export type TriggerProps = React.HTMLAttributes<HTMLElement> &
  IslandProps & {
    /** Render the only child instead, with this part's props merged onto it. */
    asChild?: boolean;
    value: string;
  };

/** A link to its panel, or with the "radios" fallback a label for its panel's radio. */
export function Trigger({ asChild, value, children, fallback: fallbackProp, name: nameProp, ...props }: TriggerProps) {
  const { fallback, name } = useIsland({ fallback: fallbackProp, name: nameProp });
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

export type ContentProps = PartProps<'div'> &
  IslandProps & {
    value: string;
    /** Whether this panel's radio is checked at first, for the "radios" fallback. Defaults to Root's value. */
    defaultSelected?: boolean;
  };

/** A panel. Its id is its `value`. */
export function Content({
  asChild,
  value,
  children,
  fallback: fallbackProp,
  name: nameProp,
  defaultSelected,
  ...props
}: ContentProps) {
  const { fallback, name, selected } = useIsland({ fallback: fallbackProp, name: nameProp });
  const radio = fallback === 'radios' && (
    // The no-JS state. `form` names no form, so the radio is never submitted with a form around it.
    <input
      type="radio"
      name={name}
      id={radioId(name, value)}
      form={`${name}-none`}
      defaultChecked={defaultSelected ?? value === selected}
      hidden
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
