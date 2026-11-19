'use client';

import * as React from 'react';
import { createContext, useContext, useEffect, useId, useRef } from 'react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { Slot } from '../utils/slot.js';
import { tagName, type TabsElement } from './element.js';

/*
 * Headless tabs: unstyled parts over the <govuk-react-tabs> element (./element.ts), which adds
 * the tab behaviour on upgrade. Every part except Root takes `asChild`.
 *
 * Each panel holds a hidden radio, and the radio group is the source of truth. A user's choice
 * fires the radio's native change, which React reports through the radio's `onChange`.
 *
 * Without JavaScript, `Root`'s tabs are links to every panel, and `RadiosRoot`'s are labels for the
 * panels' radios, so they switch panels without JavaScript too. Use `Trigger` and `Content` in a
 * `Root`, and `RadioTrigger` and `RadioContent` in a `RadiosRoot`.
 *
 * Context only fills in defaults: in an island without a Root, pass `name` and `defaultSelected`
 * to the parts. Each `value` is also its panel's id, so must be unique.
 */

const TabsContext = createContext<{
  selected?: string;
  name?: string;
  onValueChange?: (value: string) => void;
}>({});

/**
 * Shows only the checked radio's panel until the element upgrades, and below its `media`.
 * Root renders it inline; under a strict CSP, add it to a stylesheet instead.
 */
export const radiosFallbackCss = `${tagName}:not([data-upgraded]) [data-tabs-content]:has(> input[data-tabs-fallback]):not(:has(> input:checked)){display:none}`;

const radioId = (name: string, value: string) => `${name}-${value}`;

type BaseRootProps = {
  children?: ReactNode;
  /** The selected tab's value, to control the tabs. */
  value?: string;
  /** The tab selected at first, when uncontrolled. Defaults to the first tab. */
  defaultValue?: string;
  /** Called when the user selects a tab. */
  onValueChange?: (value: string) => void;
  /**
   * When controlled, what happens to a tab the user picked before hydration: "ignore" keeps
   * `value`, "report" calls `onValueChange` with the pick so you can adopt it.
   */
  preHydration?: 'ignore' | 'report';
  /** The axis of the arrow keys. */
  orientation?: 'horizontal' | 'vertical';
  /** The panels' radio group name. Defaults to a generated one. */
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

export type RootProps = BaseRootProps;

/** Tabs that are links to every panel without JavaScript. Use `Trigger` and `Content` inside it. */
export function Root(props: RootProps) {
  return <TabsRoot fallback="links" {...props} />;
}

export type RadiosRootProps = BaseRootProps &
  // Without JavaScript only the checked radio's panel shows, so one must be checked from the start.
  ({ value: string } | { defaultValue: string });

/**
 * Tabs that switch panels without JavaScript too, through the panels' radios. Use `RadioTrigger`
 * and `RadioContent` inside it.
 */
export function RadiosRoot(props: RadiosRootProps) {
  return <TabsRoot fallback="radios" {...props} />;
}

function TabsRoot({
  children,
  value,
  defaultValue,
  onValueChange,
  preHydration = 'ignore',
  orientation,
  fallback,
  name,
  media,
  upgradedClass,
  activeItemClass,
  hiddenContentClass,
  className,
  ...props
}: BaseRootProps & { fallback: 'links' | 'radios' }) {
  const generatedName = useId();
  const groupName = name ?? generatedName;
  const ref = useRef<TabsElement>(null);

  // A tab the user picked before hydration fired no onChange that React saw, so report it once.
  // When controlled with "ignore", `value` wins, so there is nothing to report.
  const reported = useRef(false);
  const initial = useRef({ value, preHydration, onValueChange });
  useEffect(() => {
    const picked = ref.current?.pickedValue;
    if (reported.current || picked === undefined) return;
    reported.current = true;
    const start = initial.current;
    if (start.value === undefined || start.preHydration === 'report') start.onValueChange?.(picked);
  }, []);

  return (
    <TabsContext.Provider value={{ selected: value ?? defaultValue, name: groupName, onValueChange }}>
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
          orientation,
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

/** Set by Root. Pass it to a part rendered without a Root, such as in an island. */
type IslandProps = {
  /** The panels' radio group name. */
  name?: string;
};

function useIsland({ name }: IslandProps) {
  const context = useContext(TabsContext);
  return {
    name: name ?? context.name ?? tagName,
    selected: context.selected,
    onValueChange: context.onValueChange,
  };
}

export type TriggerProps = React.HTMLAttributes<HTMLElement> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
  value: string;
};

const triggerData = (value: string) => ({
  'data-tabs-trigger': '',
  'data-value': value,
  suppressHydrationWarning: true,
});

/** A tab in a `Root`: a link to its panel. */
export function Trigger({ asChild, value, ...props }: TriggerProps) {
  const Element = asChild ? Slot : 'a';
  return <Element {...triggerData(value)} href={`#${value}`} {...props} />;
}

export type RadioTriggerProps = TriggerProps & IslandProps;

/** A tab in a `RadiosRoot`: a label for its panel's radio. */
export function RadioTrigger({ asChild, value, name: nameProp, ...props }: RadioTriggerProps) {
  const { name } = useIsland({ name: nameProp });
  const Element = asChild ? Slot : 'label';
  return <Element {...triggerData(value)} htmlFor={radioId(name, value)} {...props} />;
}

export type ContentProps = PartProps<'div'> &
  IslandProps & {
    value: string;
    /** Whether this panel's radio is checked at first. Defaults to Root's value. */
    defaultSelected?: boolean;
  };

/** A panel in a `Root`. Its id is its `value`. */
export function Content(props: ContentProps) {
  return <Panel {...props} />;
}

export type RadioContentProps = ContentProps;

/** A panel in a `RadiosRoot`, shown without JavaScript only while its radio is checked. Its id is its `value`. */
export function RadioContent(props: RadioContentProps) {
  return <Panel radios {...props} />;
}

function Panel({
  asChild,
  value,
  children,
  name: nameProp,
  defaultSelected,
  radios = false,
  ...props
}: ContentProps & { radios?: boolean }) {
  const { name, selected, onValueChange } = useIsland({ name: nameProp });
  const radio = (
    // The selection, and in a RadiosRoot the no-JS state. `form` names no form, so the radio is
    // never submitted with a form around it.
    <input
      type="radio"
      name={name}
      id={radioId(name, value)}
      form={`${name}-none`}
      defaultChecked={defaultSelected ?? value === selected}
      hidden
      data-tabs-fallback={radios ? '' : undefined}
      suppressHydrationWarning
      onChange={() => onValueChange?.(value)}
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
