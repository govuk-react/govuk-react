'use client';

import * as React from 'react';
import { createContext, startTransition, useContext, useEffect, useId, useReducer, useRef } from 'react';
import type { ComponentProps, ReactElement, ReactNode } from 'react';
import { early, live, type ChangeDetails } from '../utils/change-details.js';
import { Slot } from '../utils/slot.js';
import { TabsController } from './controller.js';
import { tagName, type TabsElement } from './element.js';

export type { ChangeDetails };

/*
 * Headless tabs: unstyled parts over the <govuk-react-tabs> element (./element.ts), which adds
 * the tab behaviour on upgrade. Every part except Root takes `asChild`.
 *
 * Each panel holds a hidden radio, and the radio group is the source of truth. A user's choice
 * fires the radio's native change, which React reports through the radio's `onChange`.
 *
 * Without JavaScript, the tabs are links to every panel.
 *
 * Context only fills in defaults: in an island without a Root, pass `name` and `defaultSelected`
 * to the parts. Each `value` is also its panel's id, so must be unique.
 */

const TabsContext = createContext<{
  selected?: string;
  name?: string;
  onValueChange?: (value: string, details: ChangeDetails) => void;
}>({});

export type RootProps = {
  children?: ReactNode;
  /** The selected tab's value, to control the tabs. */
  value?: string;
  /** The tab selected at first, when uncontrolled. Defaults to the first tab. */
  defaultValue?: string;
  /** Called when the user selects a tab. */
  onValueChange?: (value: string, details: ChangeDetails) => void;
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

/** Tabs that are links to every panel without JavaScript. Use `Trigger` and `Content` inside it. */
export function Root({
  children,
  value,
  defaultValue,
  onValueChange,
  orientation,
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

  // `value` is set once hydrated, so the server markup is uncontrolled and a choice made before
  // hydration still switches tab. That choice fired no onChange that React saw, so it is reported
  // once.
  const controller = useRef<TabsController>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const created = new TabsController(node);
    controller.current = created;
    return () => {
      created.disconnect();
      controller.current = null;
    };
  }, []);
  const synced = useRef(false);
  const [, render] = useReducer((count: number) => count + 1, 0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!synced.current) {
      synced.current = true;
      const picked = node.pickedValue;
      if (picked !== undefined) {
        onValueChange?.(picked, early);
        if (value !== undefined && picked !== value) {
          // The pick shows until the next render, which adopts it or goes back to `value`.
          // A transition, so React first hydrates any Suspense boundary inside, rather than discard its HTML.
          startTransition(render);
          return;
        }
      }
    }
    if (controller.current) controller.current.value = value;
  });

  return (
    <TabsContext.Provider value={{ selected: value ?? defaultValue, name: groupName, onValueChange }}>
      {React.createElement(
        tagName,
        {
          ...props,
          ref,
          className,
          'default-value': value ?? defaultValue,
          orientation,
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

/** The list of tabs. */
export function List({ asChild, ...props }: ListProps) {
  const Element = asChild ? Slot : 'div';
  return <Element data-tabs-list="" suppressHydrationWarning {...props} />;
}

export type ItemProps = PartProps<'div'> & {
  /** The value of the tab inside it. */
  value: string;
};

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
  /** Its panel’s value, which is the panel’s id. */
  value: string;
};

/** A tab: a link to its panel. */
export function Trigger({ asChild, value, ...props }: TriggerProps) {
  const Element = asChild ? Slot : 'a';
  return <Element data-tabs-trigger="" data-value={value} href={`#${value}`} suppressHydrationWarning {...props} />;
}

export type ContentProps = PartProps<'div'> &
  IslandProps & {
    /** Its tab’s value, which is the panel’s id. */
    value: string;
    /** Whether this panel's radio is checked at first. Defaults to Root's value. */
    defaultSelected?: boolean;
  };

/** A panel. Its id is its `value`. */
export function Content({ asChild, value, children, name: nameProp, defaultSelected, ...props }: ContentProps) {
  const { name, selected, onValueChange } = useIsland({ name: nameProp });
  const radio = (
    // The selection. `form` names no form, so the radio is never submitted with a form around it.
    <input
      type="radio"
      name={name}
      form={`${name}-none`}
      defaultChecked={defaultSelected ?? value === selected}
      hidden
      suppressHydrationWarning
      onChange={() => onValueChange?.(value, live)}
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
