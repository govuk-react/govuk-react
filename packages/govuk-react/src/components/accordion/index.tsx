import * as React from 'react';
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import * as Primitives from '@govuk-react/primitives/accordion';
import * as Markup from 'govuk-frontend-react/accordion';

/*
 * govuk-frontend-react's Accordion markup, with the behaviour from @govuk-react/primitives. As in
 * govuk-frontend, every section is open without JavaScript. Each section also renders the button
 * govuk-frontend's script would build, hidden until the element upgrades, so React never has its
 * markup moved.
 */

// Fills in defaults only: in an island without a Root, pass `defaultExpanded` to Section.
const AccordionContext = createContext<{ open?: string[] }>({});

export type RootProps = Omit<Markup.RootProps, 'defaultValue' | 'onChange'> & {
  /** The open sections' values, to control them once hydrated. */
  value?: string[];
  /** The sections open at first. */
  defaultValue?: string[];
  /** Called with the open sections' values when the user opens or closes a section. */
  onValueChange?: (value: string[]) => void;
};

/**
 * The accordion component lets users show and hide sections of related content on a page.
 *
 * @see https://design-system.service.gov.uk/components/accordion/
 */
export function Root({
  value,
  defaultValue,
  onValueChange,
  rememberExpanded,
  hideAllSectionsText,
  hideSectionText,
  hideSectionAriaLabelText,
  showAllSectionsText,
  showSectionText,
  showSectionAriaLabelText,
  ...props
}: RootProps) {
  return (
    <AccordionContext.Provider value={{ open: value ?? defaultValue }}>
      <Primitives.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        rememberExpanded={rememberExpanded}
        hideAllSectionsText={hideAllSectionsText}
        hideSectionText={hideSectionText}
        hideSectionLabel={hideSectionAriaLabelText}
        showAllSectionsText={showAllSectionsText}
        showSectionText={showSectionText}
        showSectionLabel={showSectionAriaLabelText}
        // govuk-frontend styles the accordion under `govuk-frontend-supported`, which its JavaScript adds to the body.
        upgradedClass="govuk-frontend-supported"
        expandedSectionClass="govuk-accordion__section--expanded"
        collapsedIconClass="govuk-accordion-nav__chevron--down"
      >
        <Markup.Root {...props} />
      </Primitives.Root>
    </AccordionContext.Provider>
  );
}

export type ControlsProps = Omit<Primitives.ControlsProps, 'asChild' | 'children'>;

/** The "Show all sections" button, at the top of the accordion. Hidden until JavaScript runs. */
export function Controls({ className, ...props }: ControlsProps) {
  return (
    <Primitives.Controls className={clsx('govuk-accordion__controls', className)} {...props}>
      <Primitives.ShowAll className="govuk-accordion__show-all" aria-expanded="false">
        <Primitives.Icon className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down" />
        <Primitives.ShowAllText className="govuk-accordion__show-all-text">Show all sections</Primitives.ShowAllText>
      </Primitives.ShowAll>
    </Primitives.Controls>
  );
}

export type SectionProps = Markup.SectionProps & {
  /** Identifies the section in the accordion's `value`. */
  value: string;
};

export function Section({ value, expanded, ...props }: SectionProps) {
  const context = useContext(AccordionContext);
  const isExpanded = expanded ?? context.open?.includes(value) ?? false;
  return (
    <Primitives.Section value={value} defaultExpanded={isExpanded} asChild>
      <Markup.Section expanded={isExpanded} {...props} />
    </Primitives.Section>
  );
}

export {
  SectionHeader,
  SectionHeading,
  type SectionHeaderProps,
  type SectionHeadingProps,
} from 'govuk-frontend-react/accordion';

const divider = <span className="govuk-visually-hidden govuk-accordion__section-heading-divider">, </span>;

export type SectionButtonProps = Markup.SectionButtonProps & {
  /** The section's summary line, which the button also shows once JavaScript runs. */
  summary?: ReactNode;
};

/**
 * The section's heading text. Without JavaScript it's plain text. Once JavaScript runs it's a
 * button that shows and hides the section, holding the heading and `summary`.
 */
export function SectionButton({ summary, children, ...props }: SectionButtonProps) {
  return (
    <>
      <Primitives.Fallback asChild>
        <Markup.SectionButton {...props}>{children}</Markup.SectionButton>
      </Primitives.Fallback>
      <Primitives.Trigger className="govuk-accordion__section-button">
        <span className="govuk-accordion__section-heading-text">
          <Primitives.Label className="govuk-accordion__section-heading-text-focus">{children}</Primitives.Label>
        </span>
        {divider}
        {hasContent(summary) && (
          <>
            <span className="govuk-accordion__section-summary govuk-body">
              <Primitives.Label className="govuk-accordion__section-summary-focus">{summary}</Primitives.Label>
            </span>
            {divider}
          </>
        )}
        <span className="govuk-accordion__section-toggle" data-nosnippet="">
          <span className="govuk-accordion__section-toggle-focus">
            <Primitives.Icon className="govuk-accordion-nav__chevron govuk-accordion-nav__chevron--down" />
            <Primitives.ToggleText className="govuk-accordion__section-toggle-text">Show</Primitives.ToggleText>
          </span>
        </span>
      </Primitives.Trigger>
    </>
  );
}

export type SectionSummaryProps = Markup.SectionSummaryProps;

/** The section's summary line without JavaScript. Once JavaScript runs, `SectionButton` shows it. */
export function SectionSummary(props: SectionSummaryProps) {
  return (
    <Primitives.Fallback asChild>
      <Markup.SectionSummary {...props} />
    </Primitives.Fallback>
  );
}

export type SectionContentProps = Markup.SectionContentProps;

/** The section's content. Give it an id, which the button's `aria-controls` names. */
export function SectionContent(props: SectionContentProps) {
  return (
    <Primitives.Content asChild>
      <Markup.SectionContent {...props} />
    </Primitives.Content>
  );
}

export type SectionCompositeProps = Omit<Markup.SectionCompositeProps, 'expanded'> & {
  /** Identifies the section in the accordion's `value`. Defaults to its content's id. */
  value?: string;
  /** Sets whether the section should be expanded when the page loads for the first time. Defaults to whether the accordion's value includes it. */
  expanded?: boolean;
};

export function SectionComposite({
  accordionId,
  index,
  heading,
  summary,
  headingLevel,
  value,
  children,
  ...props
}: SectionCompositeProps) {
  const contentId = `${accordionId}-content-${index}`;
  return (
    <Section value={value ?? contentId} {...props}>
      <Markup.SectionHeader>
        <Markup.SectionHeading headingLevel={headingLevel}>
          <SectionButton id={`${accordionId}-heading-${index}`} summary={summary}>
            {heading}
          </SectionButton>
        </Markup.SectionHeading>
        {hasContent(summary) && <SectionSummary id={`${accordionId}-summary-${index}`}>{summary}</SectionSummary>}
      </Markup.SectionHeader>
      <SectionContent id={contentId}>{children}</SectionContent>
    </Section>
  );
}

export type CompositeProps = Omit<RootProps, 'id' | 'children'> &
  Pick<Markup.SectionHeadingProps, 'headingLevel'> & {
    /** Must be unique across the domain of your service if `rememberExpanded` is `true` (as the expanded state of individual instances of the component persists across page loads using [session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)). Used as an `id` in the HTML for the accordion as a whole, and also as a prefix for the `id`s of the section contents and the buttons that open them, so that those `id`s can be the target of `aria-control` attributes. */
    id: string;
  } & (
    | { children?: ReactNode; sections?: never }
    | {
        children?: never;
        /** Prefer children, which memoise and re-render better. */
        sections: Omit<SectionCompositeProps, 'accordionId' | 'index' | 'headingLevel'>[];
      }
  );

/**
 * The accordion component lets users show and hide sections of related content on a page.
 *
 * Children are `SectionComposite`s. With `sections`, it fills in their ids and heading level.
 *
 * @see https://design-system.service.gov.uk/components/accordion/
 */
export function Composite({ id, headingLevel, sections, children, ...props }: CompositeProps) {
  return (
    <Root id={id} {...props}>
      <Controls />
      {sections
        ? sections.map((section, index) => (
            <SectionComposite key={index} accordionId={id} index={index + 1} headingLevel={headingLevel} {...section} />
          ))
        : children}
    </Root>
  );
}

// As govuk-frontend-react decides whether there is a summary.
function hasContent(node: ReactNode): boolean {
  if (node === null || node === undefined || node === false || node === true || node === '') return false;
  if (Array.isArray(node)) return node.some(hasContent);
  return true;
}
