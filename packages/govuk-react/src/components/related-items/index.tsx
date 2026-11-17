import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { useId } from 'react';
import { clsx } from 'clsx';

const name = 'govuk-react-related-items';

/** Styles govuk-frontend has no class for, hoisted and deduplicated by React. */
export const relatedItemsCss = `.${name}{border-top:2px solid var(--govuk-brand-colour,#1d70b8);padding-top:10px}`;

export type RootProps = ComponentProps<'div'>;

/** Related content, such as topics, guidance and collections. */
export function Root({ className, children, ...props }: RootProps) {
  return (
    <div className={clsx(name, className)} {...props}>
      <style href={name} precedence="default">
        {relatedItemsCss}
      </style>
      {children}
    </div>
  );
}

export type HeadingProps = ComponentProps<'h2'>;

export function Heading({ className, children, ...props }: HeadingProps) {
  return (
    <h2 className={clsx('govuk-heading-s', className)} {...props}>
      {children}
    </h2>
  );
}

export type SectionProps = ComponentProps<'nav'>;

export function Section(props: SectionProps) {
  return <nav {...props} />;
}

export type SectionHeadingProps = ComponentProps<'h3'>;

export function SectionHeading({ className, children, ...props }: SectionHeadingProps) {
  return (
    <h3 className={clsx('govuk-body-s', 'govuk-!-font-weight-bold', 'govuk-!-margin-bottom-2', className)} {...props}>
      {children}
    </h3>
  );
}

export type ListProps = ComponentProps<'ul'>;

export function List({ className, ...props }: ListProps) {
  return <ul className={clsx('govuk-list', 'govuk-body-s', className)} {...props} />;
}

export type ItemProps = ComponentProps<'li'>;

export function Item(props: ItemProps) {
  return <li {...props} />;
}

export type SectionCompositeProps = Omit<SectionProps, 'title'> & {
  /** The section heading, such as “Travel abroad”. Also labels the navigation landmark. */
  title: ReactNode;
};

/** A labelled navigation section with a heading and a list. Children are `Item`s. */
export function SectionComposite({ title, children, ...props }: SectionCompositeProps) {
  const headingId = useId();
  return (
    <Section aria-labelledby={headingId} {...props}>
      <SectionHeading id={headingId}>{title}</SectionHeading>
      <List>{children}</List>
    </Section>
  );
}

export type CompositeProps = Omit<RootProps, 'title'> & {
  /** The main heading. */
  title?: ReactNode;
};

/**
 * Related content, including topics, guidance and collections. Children are `SectionComposite`s.
 *
 * @see https://components.publishing.service.gov.uk/component-guide/related_navigation
 */
export function Composite({ title = 'Related content', children, ...props }: CompositeProps) {
  return (
    <Root {...props}>
      <Heading>{title}</Heading>
      {children}
    </Root>
  );
}
