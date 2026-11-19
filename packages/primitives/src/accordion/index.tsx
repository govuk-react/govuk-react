'use client';

import * as React from 'react';
import { createContext, useContext, useEffect, useRef } from 'react';
import type { ComponentProps } from 'react';
import { Slot } from '../utils/slot.js';
import { tagName, type AccordionElement } from './element.js';

/*
 * Headless accordion: unstyled parts over the <govuk-react-accordion> element (./element.ts).
 * Every part except Root takes `asChild`.
 *
 * Without JavaScript every section is shown under its `Fallback` heading. Each section also
 * holds a hidden `Trigger` with the same heading, which the element shows on upgrade. Put the
 * heading text in a `Label` inside the trigger, so the element can name the button.
 *
 * Context only fills in defaults: in an island without a Root, pass `defaultExpanded` to Section.
 */

type Texts = {
  showSectionText?: string;
  hideSectionText?: string;
  showAllSectionsText?: string;
  hideAllSectionsText?: string;
};

const AccordionContext = createContext<{ open?: string[]; texts: Texts }>({ texts: {} });

const SectionContext = createContext<{ expanded?: boolean }>({});

/**
 * Hides the parts the element hides, over styles that set their `display`. Root renders it
 * inline; under a strict CSP, add it to a stylesheet instead.
 */
export const accordionCss = `${tagName} :is([data-accordion-fallback],[data-accordion-trigger],[data-accordion-controls])[hidden]{display:none!important}`;

const isAccordion = (element: HTMLElement): element is AccordionElement => 'pickedValue' in element;

export type RootProps = Omit<React.HTMLAttributes<HTMLElement>, 'defaultValue' | 'onChange'> & {
  /** The open sections' values, to control them once hydrated. */
  value?: string[];
  /** The sections open at first. */
  defaultValue?: string[];
  /** Called with the open sections' values when the user opens or closes a section. */
  onValueChange?: (value: string[]) => void;
  /** Whether to remember the open sections for the rest of the session, keyed by content id. Defaults to `true`, as in govuk-frontend. */
  rememberExpanded?: boolean;
  /** Each button's text while its section is closed. Defaults to "Show". */
  showSectionText?: string;
  /** Each button's text while its section is open. Defaults to "Hide". */
  hideSectionText?: string;
  /** The end of each button's accessible name while its section is closed. Defaults to "Show this section". */
  showSectionLabel?: string;
  /** The end of each button's accessible name while its section is open. Defaults to "Hide this section". */
  hideSectionLabel?: string;
  /** The "show all" button's text while a section is closed. Defaults to "Show all sections". */
  showAllSectionsText?: string;
  /** The "show all" button's text while every section is open. Defaults to "Hide all sections". */
  hideAllSectionsText?: string;
  /** Classes added to the element when it upgrades. */
  upgradedClass?: string;
  /** Classes added to open sections. */
  expandedSectionClass?: string;
  /** Classes added to the icons of closed sections, and the "show all" icon while a section is closed. */
  collapsedIconClass?: string;
};

export function Root({
  value,
  defaultValue,
  onValueChange,
  rememberExpanded,
  showSectionText,
  hideSectionText,
  showSectionLabel,
  hideSectionLabel,
  showAllSectionsText,
  hideAllSectionsText,
  upgradedClass,
  expandedSectionClass,
  collapsedIconClass,
  children,
  ...props
}: RootProps) {
  const element = useRef<HTMLElement>(null);
  const onValueChangeRef = useRef(onValueChange);
  const synced = useRef(false);

  useEffect(() => {
    onValueChangeRef.current = onValueChange;
  });

  useEffect(() => {
    const node = element.current;
    if (!node) return undefined;
    // A nested accordion's change bubbles through this one.
    const onChange = (event: CustomEvent<{ value: string[] }>) => {
      if (event.target === node) onValueChangeRef.current?.(event.detail.value);
    };
    node.addEventListener('govuk-react-accordion:change', onChange);
    return () => node.removeEventListener('govuk-react-accordion:change', onChange);
  }, []);

  // `value` is set once hydrated, so the server markup is uncontrolled and a click before
  // hydration still works. That click is then reported, rather than undone.
  const controlled = value?.join(' ');
  useEffect(() => {
    const node = element.current;
    if (!node || controlled === undefined) {
      node?.removeAttribute('value');
      return;
    }
    if (!synced.current) {
      synced.current = true;
      const picked = isAccordion(node) ? node.pickedValue : undefined;
      if (picked !== undefined && picked.join(' ') !== controlled && onValueChangeRef.current) {
        onValueChangeRef.current(picked);
        return;
      }
    }
    node.setAttribute('value', controlled);
  });

  const initial = value ?? defaultValue;
  return (
    <AccordionContext.Provider
      value={{ open: initial, texts: { showSectionText, hideSectionText, showAllSectionsText, hideAllSectionsText } }}
    >
      <style href={`${tagName}-css`} precedence="default">
        {accordionCss}
      </style>
      {React.createElement(
        tagName,
        {
          ...props,
          ref: element,
          'default-value': initial?.join(' '),
          'remember-expanded': rememberExpanded === undefined ? undefined : String(rememberExpanded),
          'show-section-text': showSectionText,
          'hide-section-text': hideSectionText,
          'show-section-label': showSectionLabel,
          'hide-section-label': hideSectionLabel,
          'show-all-sections-text': showAllSectionsText,
          'hide-all-sections-text': hideAllSectionsText,
          'upgraded-class': upgradedClass,
          'expanded-section-class': expandedSectionClass,
          'collapsed-icon-class': collapsedIconClass,
          // The element adds attributes on upgrade, so they can differ from the server's.
          suppressHydrationWarning: true,
        },
        children
      )}
    </AccordionContext.Provider>
  );
}

type PartProps<E extends keyof React.JSX.IntrinsicElements> = ComponentProps<E> & {
  /** Render the only child instead, with this part's props merged onto it. */
  asChild?: boolean;
};

export type ControlsProps = PartProps<'div'>;

/** Holds the "show all" button. Hidden until the element upgrades. */
export function Controls({ asChild, ...props }: ControlsProps) {
  const Element = asChild ? Slot : 'div';
  return <Element data-accordion-controls="" hidden suppressHydrationWarning {...props} />;
}

export type ShowAllProps = PartProps<'button'>;

/** Shows every section, or hides every section when all are open. */
export function ShowAll({ asChild, ...props }: ShowAllProps) {
  if (asChild) return <Slot data-accordion-show-all="" suppressHydrationWarning {...props} />;
  return <button type="button" data-accordion-show-all="" suppressHydrationWarning {...props} />;
}

export type ShowAllTextProps = PartProps<'span'>;

/** The "show all" button's text, which the element sets. */
export function ShowAllText({ asChild, children, ...props }: ShowAllTextProps) {
  const { texts } = useContext(AccordionContext);
  const Element = asChild ? Slot : 'span';
  // Rendered as the server would, so the element's text replaces it rather than adding to it.
  return (
    <Element data-accordion-show-all-text="" suppressHydrationWarning {...props}>
      {children ?? texts.showAllSectionsText ?? 'Show all sections'}
    </Element>
  );
}

export type SectionProps = PartProps<'div'> & {
  value: string;
  /** Whether it's open at first. Defaults to whether Root's value includes it. */
  defaultExpanded?: boolean;
};

export function Section({ asChild, value, defaultExpanded, ...props }: SectionProps) {
  const context = useContext(AccordionContext);
  const expanded = defaultExpanded ?? context.open?.includes(value) ?? false;
  const Element = asChild ? Slot : 'div';
  return (
    <SectionContext.Provider value={{ expanded }}>
      <Element
        data-accordion-section=""
        data-value={value}
        data-expanded={expanded ? '' : undefined}
        suppressHydrationWarning
        {...props}
      />
    </SectionContext.Provider>
  );
}

export type FallbackProps = PartProps<'span'>;

/** What shows without JavaScript in place of the trigger, such as the plain heading. Hidden on upgrade. */
export function Fallback({ asChild, ...props }: FallbackProps) {
  const Element = asChild ? Slot : 'span';
  return <Element data-accordion-fallback="" suppressHydrationWarning {...props} />;
}

export type TriggerProps = PartProps<'button'>;

/** The button that shows and hides its section. Hidden until the element upgrades. */
export function Trigger({ asChild, ...props }: TriggerProps) {
  const shared = { 'data-accordion-trigger': '', hidden: true, suppressHydrationWarning: true };
  if (asChild) return <Slot {...shared} {...props} />;
  return <button type="button" {...shared} {...props} />;
}

export type LabelProps = PartProps<'span'>;

/** Text in the trigger that names it, such as the heading or summary. */
export function Label({ asChild, ...props }: LabelProps) {
  const Element = asChild ? Slot : 'span';
  return <Element data-accordion-label="" {...props} />;
}

export type ToggleTextProps = PartProps<'span'>;

/** The trigger's show or hide text, which the element sets. */
export function ToggleText({ asChild, children, ...props }: ToggleTextProps) {
  const { texts } = useContext(AccordionContext);
  const { expanded } = useContext(SectionContext);
  const Element = asChild ? Slot : 'span';
  // Rendered as the server would, so the element's text replaces it rather than adding to it.
  return (
    <Element data-accordion-toggle-text="" suppressHydrationWarning {...props}>
      {children ?? (expanded ? (texts.hideSectionText ?? 'Hide') : (texts.showSectionText ?? 'Show'))}
    </Element>
  );
}

export type IconProps = PartProps<'span'>;

/** An icon in a trigger or the "show all" button, given `collapsedIconClass` while closed. */
export function Icon({ asChild, ...props }: IconProps) {
  const Element = asChild ? Slot : 'span';
  return <Element data-accordion-icon="" suppressHydrationWarning {...props} />;
}

export type ContentProps = PartProps<'div'>;

/** The section's content. Give it an id, which the trigger's `aria-controls` names. */
export function Content({ asChild, ...props }: ContentProps) {
  const Element = asChild ? Slot : 'div';
  // The element hides it after upgrade.
  return <Element data-accordion-content="" suppressHydrationWarning {...props} />;
}
