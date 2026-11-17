import * as React from 'react';
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import * as Primitives from '@govuk-react/primitives/tabs';
import * as Markup from 'govuk-frontend-react/tabs';

/*
 * govuk-frontend-react's Tabs markup, with the tab behaviour from @govuk-react/primitives. The
 * behaviour matches govuk-frontend's: tabs from tablet width up, and a list of links to every
 * panel below it or without JavaScript. With `fallback="radios"`, tabs switch without
 * JavaScript too.
 */

type Fallback = 'links' | 'radios';

// Fills in defaults only: in an island without a Root, pass `selected` and `fallback` to the parts.
const TabsContext = createContext<{ selected?: string; fallback?: Fallback }>({});

/** govuk-frontend's tablet breakpoint, where its tabs start. */
const tablet = '(min-width: 40.0625em)';

type Selection =
  | { fallback?: 'links'; value?: string; defaultValue?: string }
  // Without JavaScript only the checked radio's panel shows, so one must be selected from the start.
  | { fallback: 'radios'; value: string; defaultValue?: string }
  | { fallback: 'radios'; value?: string; defaultValue: string };

export type RootProps = Omit<Markup.RootProps, 'defaultValue' | 'onChange'> &
  Selection & {
    /** Called when the user selects a tab. */
    onValueChange?: (value: string) => void;
    /**
     * When controlled, what happens to a tab the user picked before hydration: "ignore" keeps
     * `value`, "report" calls `onValueChange` with the pick so you can adopt it.
     */
    preHydration?: 'ignore' | 'report';
    /** The radios' group name, for the "radios" fallback. */
    name?: string;
  };

/**
 * Tabs can be a helpful way of letting users quickly switch between related information.
 *
 * Each tab's `value` is its panel's id.
 *
 * @see https://design-system.service.gov.uk/components/tabs/
 */
export function Root({
  value,
  defaultValue,
  onValueChange,
  preHydration,
  fallback = 'links',
  name,
  ...props
}: RootProps) {
  const selection: Primitives.RootProps =
    fallback === 'radios' && value !== undefined
      ? { fallback, value, defaultValue }
      : fallback === 'radios' && defaultValue !== undefined
        ? { fallback, value, defaultValue }
        : { fallback: 'links', value, defaultValue };
  return (
    <TabsContext.Provider value={{ selected: value ?? defaultValue, fallback }}>
      <Primitives.Root
        {...selection}
        onValueChange={onValueChange}
        preHydration={preHydration}
        name={name}
        media={tablet}
        // govuk-frontend styles tabs under `govuk-frontend-supported`, which its JavaScript adds to the body.
        upgradedClass="govuk-frontend-supported"
        activeItemClass="govuk-tabs__list-item--selected"
        hiddenContentClass="govuk-tabs__panel--hidden"
      >
        <Markup.Root {...props} />
      </Primitives.Root>
    </TabsContext.Provider>
  );
}

export { Title, type TitleProps } from 'govuk-frontend-react/tabs';

export type ListProps = Markup.ListProps;

export function List(props: ListProps) {
  return (
    <Primitives.List asChild>
      <Markup.List {...props} />
    </Primitives.List>
  );
}

function useSelected(value: string, selected: boolean | undefined) {
  const context = useContext(TabsContext);
  // With no value set, the first tab is selected, which the parts can't know: the element selects it.
  return selected ?? value === context.selected;
}

export type ListItemProps = Markup.ListItemProps & {
  /** The value of the tab inside it. */
  value: string;
};

export function ListItem({ value, selected, ...props }: ListItemProps) {
  return (
    <Primitives.Item value={value} asChild>
      <Markup.ListItem selected={useSelected(value, selected)} {...props} />
    </Primitives.Item>
  );
}

export type TabProps = Omit<Markup.TabProps, 'href' | 'asChild'> & {
  /** Its panel's value, which is the panel's id. */
  value: string;
  /** Set by Root. Pass it to a tab rendered without a Root, such as in an island. */
  fallback?: Fallback;
  /** The radios' group name, for the "radios" fallback. Set by Root. */
  name?: string;
};

/** A link to its panel, or with the "radios" fallback a label for its panel's radio. */
export function Tab({ value, fallback: fallbackProp, name, children, ...props }: TabProps) {
  const context = useContext(TabsContext);
  const fallback = fallbackProp ?? context.fallback ?? 'links';
  if (fallback === 'radios') {
    return (
      <Primitives.Trigger value={value} fallback={fallback} name={name} asChild>
        <Markup.Tab asChild {...props}>
          <label>{children}</label>
        </Markup.Tab>
      </Primitives.Trigger>
    );
  }
  return (
    <Primitives.Trigger value={value} fallback={fallback} name={name} asChild>
      <Markup.Tab {...props}>{children}</Markup.Tab>
    </Primitives.Trigger>
  );
}

export type PanelProps = Omit<Markup.PanelProps, 'id'> & {
  /** Its tab's value, which is the panel's id. */
  value: string;
  /** Set by Root. Pass it to a panel rendered without a Root, such as in an island. */
  fallback?: Fallback;
  /** The radios' group name, for the "radios" fallback. Set by Root. */
  name?: string;
};

export function Panel({ value, selected, fallback, name, ...props }: PanelProps) {
  const isSelected = useSelected(value, selected);
  return (
    <Primitives.Content value={value} fallback={fallback} name={name} defaultSelected={isSelected} asChild>
      <Markup.Panel selected={isSelected} {...props} />
    </Primitives.Content>
  );
}

export type CompositeItem = {
  /** The panel's id, and the tab's value. */
  id: string;
  label: ReactNode;
  panel: ReactNode;
};

export type CompositeProps = Omit<RootProps, 'title' | 'value' | 'defaultValue' | 'fallback'> & {
  /** The heading shown above the list of links when the tabs aren't shown. Defaults to "Contents". */
  title?: ReactNode;
  items: CompositeItem[];
  /** The selected tab's value, to control the tabs. */
  value?: string;
  /** The tab selected at first, when uncontrolled. Defaults to the first tab. */
  defaultValue?: string;
  /** How the tabs work without JavaScript: "links" (the default) or "radios". */
  fallback?: Fallback;
};

/** The tabs, with a tab and panel for each item. */
export function Composite({ title, items, value, defaultValue, fallback, ...props }: CompositeProps) {
  // As in govuk-frontend, the first tab is selected unless another is.
  const initial = defaultValue ?? items[0]?.id;
  const selection: Selection =
    fallback === 'radios' && value !== undefined
      ? { fallback, value, defaultValue }
      : fallback === 'radios' && initial !== undefined
        ? { fallback, defaultValue: initial }
        : { fallback: 'links', value, defaultValue: value === undefined ? initial : defaultValue };
  return (
    <Root {...props} {...selection}>
      <Markup.Title>{title}</Markup.Title>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} value={item.id}>
            <Tab value={item.id}>{item.label}</Tab>
          </ListItem>
        ))}
      </List>
      {items.map((item) => (
        <Panel key={item.id} value={item.id}>
          {item.panel}
        </Panel>
      ))}
    </Root>
  );
}
