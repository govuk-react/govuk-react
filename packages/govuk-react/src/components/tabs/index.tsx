import * as React from 'react';
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import * as Primitives from '@govuk-react/primitives/tabs';
import * as Markup from 'govuk-frontend-react/tabs';

/*
 * govuk-frontend-react's Tabs markup, with the tab behaviour from @govuk-react/primitives. The
 * behaviour matches govuk-frontend's: tabs from tablet width up, and a list of links to every
 * panel below it or without JavaScript. With `RadiosRoot`, tabs switch without JavaScript too.
 */

// Fills in defaults only: in an island without a Root, pass `selected` to the parts.
const TabsContext = createContext<{ selected?: string }>({});

/** govuk-frontend's tablet breakpoint, where its tabs start. */
const tablet = '(min-width: 40.0625em)';

type BaseRootProps = Omit<Markup.RootProps, 'defaultValue' | 'onChange'> & {
  /** Called when the user selects a tab. */
  onValueChange?: (value: string) => void;
  /**
   * When controlled, what happens to a tab the user picked before hydration: "ignore" keeps
   * `value`, "report" calls `onValueChange` with the pick so you can adopt it.
   */
  preHydration?: 'ignore' | 'report';
  /** The panels' radio group name. Defaults to a generated one. */
  name?: string;
};

export type RootProps = BaseRootProps & {
  /** The selected tab's value, to control the tabs. */
  value?: string;
  /** The tab selected at first, when uncontrolled. Defaults to the first tab. */
  defaultValue?: string;
};

// The classes govuk-frontend's styles key off.
const classes = {
  media: tablet,
  // govuk-frontend styles tabs under `govuk-frontend-supported`, which its JavaScript adds to the body.
  upgradedClass: 'govuk-frontend-supported',
  activeItemClass: 'govuk-tabs__list-item--selected',
  hiddenContentClass: 'govuk-tabs__panel--hidden',
};

/**
 * Tabs can be a helpful way of letting users quickly switch between related information.
 *
 * As in govuk-frontend, without JavaScript the tabs are a list of links to every panel. Use `Tab`
 * and `Panel` inside it. Each tab's `value` is its panel's id.
 *
 * @see https://design-system.service.gov.uk/components/tabs/
 */
export function Root({ value, defaultValue, onValueChange, preHydration, name, ...props }: RootProps) {
  return (
    <TabsContext.Provider value={{ selected: value ?? defaultValue }}>
      <Primitives.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        preHydration={preHydration}
        name={name}
        {...classes}
      >
        <Markup.Root {...props} />
      </Primitives.Root>
    </TabsContext.Provider>
  );
}

export type RadiosRootProps = BaseRootProps &
  // Without JavaScript only the checked radio's panel shows, so one must be selected from the start.
  ({ value: string; defaultValue?: string } | { value?: string; defaultValue: string });

/**
 * Tabs that switch panels without JavaScript too, through a hidden radio in each panel. Use
 * `RadioTab` and `RadioPanel` inside it. Each tab's `value` is its panel's id.
 *
 * @see https://design-system.service.gov.uk/components/tabs/
 */
export function RadiosRoot({ value, defaultValue, onValueChange, preHydration, name, ...props }: RadiosRootProps) {
  const selection: Pick<Primitives.RadiosRootProps, 'value' | 'defaultValue'> &
    ({ value: string } | { defaultValue: string }) =
    value !== undefined ? { value, defaultValue } : { defaultValue: defaultValue ?? '' };
  return (
    <TabsContext.Provider value={{ selected: value ?? defaultValue }}>
      <Primitives.RadiosRoot
        {...selection}
        onValueChange={onValueChange}
        preHydration={preHydration}
        name={name}
        {...classes}
      >
        <Markup.Root {...props} />
      </Primitives.RadiosRoot>
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
};

/** A tab in a `Root`: a link to its panel. */
export function Tab({ value, children, ...props }: TabProps) {
  return (
    <Primitives.Trigger value={value} asChild>
      <Markup.Tab {...props}>{children}</Markup.Tab>
    </Primitives.Trigger>
  );
}

export type RadioTabProps = TabProps & {
  /** The panels' radio group name. Set by RadiosRoot: pass it to a tab rendered without one, such as in an island. */
  name?: string;
};

/** A tab in a `RadiosRoot`: a label for its panel's radio. */
export function RadioTab({ value, name, children, ...props }: RadioTabProps) {
  return (
    <Primitives.RadioTrigger value={value} name={name} asChild>
      <Markup.Tab asChild {...props}>
        <label>{children}</label>
      </Markup.Tab>
    </Primitives.RadioTrigger>
  );
}

export type PanelProps = Omit<Markup.PanelProps, 'id'> & {
  /** Its tab's value, which is the panel's id. */
  value: string;
  /** The panels' radio group name. Set by Root: pass it to a panel rendered without one, such as in an island. */
  name?: string;
};

/** A panel in a `Root`. */
export function Panel({ value, selected, name, ...props }: PanelProps) {
  const isSelected = useSelected(value, selected);
  return (
    <Primitives.Content value={value} name={name} defaultSelected={isSelected} asChild>
      <Markup.Panel selected={isSelected} {...props} />
    </Primitives.Content>
  );
}

export type RadioPanelProps = PanelProps;

/** A panel in a `RadiosRoot`, shown without JavaScript only while its tab is chosen. */
export function RadioPanel({ value, selected, name, ...props }: RadioPanelProps) {
  const isSelected = useSelected(value, selected);
  return (
    <Primitives.RadioContent value={value} name={name} defaultSelected={isSelected} asChild>
      <Markup.Panel selected={isSelected} {...props} />
    </Primitives.RadioContent>
  );
}

export type CompositeItem = {
  /** The panel's id, and the tab's value. */
  id: string;
  label: ReactNode;
  panel: ReactNode;
};

export type CompositeProps = Omit<RootProps, 'title'> & {
  /** The heading shown above the list of links when the tabs aren't shown. Defaults to "Contents". */
  title?: ReactNode;
  items: CompositeItem[];
};

/** The tabs, with a tab and panel for each item. Without JavaScript, a list of links to every panel. */
export function Composite({ title, items, value, defaultValue, ...props }: CompositeProps) {
  // As in govuk-frontend, the first tab is selected unless another is.
  const initial = value === undefined ? (defaultValue ?? items[0]?.id) : defaultValue;
  return (
    <Root {...props} value={value} defaultValue={initial}>
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

export type RadiosCompositeProps = Omit<BaseRootProps, 'title'> & {
  /** The heading shown above the list of tabs when they aren't styled as tabs. Defaults to "Contents". */
  title?: ReactNode;
  items: CompositeItem[];
  /** The selected tab's value, to control the tabs. */
  value?: string;
  /** The tab selected at first, when uncontrolled. Defaults to the first tab. */
  defaultValue?: string;
};

/** The tabs, with a tab and panel for each item. They switch panels without JavaScript too. */
export function RadiosComposite({ title, items, value, defaultValue, ...props }: RadiosCompositeProps) {
  const initial = defaultValue ?? items[0]?.id ?? '';
  return (
    <RadiosRoot {...props} value={value} defaultValue={initial}>
      <Markup.Title>{title}</Markup.Title>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} value={item.id}>
            <RadioTab value={item.id}>{item.label}</RadioTab>
          </ListItem>
        ))}
      </List>
      {items.map((item) => (
        <RadioPanel key={item.id} value={item.id}>
          {item.panel}
        </RadioPanel>
      ))}
    </RadiosRoot>
  );
}
