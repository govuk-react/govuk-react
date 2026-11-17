import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';

export type RootProps = ComponentProps<'dl'>;

/** A list of metadata about a document, such as who it’s from and what it’s part of. */
export function Root({ className, ...props }: RootProps) {
  return <dl className={clsx('govuk-body', className)} {...props} />;
}

export type TermProps = ComponentProps<'dt'>;

export function Term({ className, ...props }: TermProps) {
  return <dt className={clsx('govuk-!-margin-bottom-1', className)} {...props} />;
}

export type DefinitionProps = ComponentProps<'dd'>;

export function Definition({ className, ...props }: DefinitionProps) {
  return (
    <dd
      className={clsx('govuk-!-font-weight-bold', 'govuk-!-margin-left-0', 'govuk-!-margin-bottom-2', className)}
      {...props}
    />
  );
}

export type ItemCompositeProps = {
  /** The label, such as “From”. A colon is added after it. */
  term: ReactNode;
  /** The values. Each renders as its own definition. */
  definitions: ReactNode[];
};

/** A term and its values. */
export function ItemComposite({ term, definitions }: ItemCompositeProps) {
  return (
    <>
      <Term>{term}:</Term>
      {definitions.map((definition, index) => (
        <Definition key={index}>{definition}</Definition>
      ))}
    </>
  );
}

export type CompositeProps = RootProps & {
  /** Values for “From”, such as organisation links. */
  from?: ReactNode[];
  /** Values for “Part of”, such as topic links. */
  partOf?: ReactNode[];
  /** Other items. Prefer `ItemComposite` children. */
  other?: { id?: string | number; title: ReactNode; content: ReactNode }[];
};

/**
 * Metadata about a document. Children are `ItemComposite`s, rendered after `from`, `partOf` and `other`.
 *
 * @see https://components.publishing.service.gov.uk/component-guide/metadata
 */
export function Composite({ from, partOf, other, children, ...props }: CompositeProps) {
  return (
    <Root {...props}>
      {from && from.length > 0 && <ItemComposite term="From" definitions={from} />}
      {partOf && partOf.length > 0 && <ItemComposite term="Part of" definitions={partOf} />}
      {other?.map((item, index) => (
        <ItemComposite key={item.id ?? index} term={item.title} definitions={[item.content]} />
      ))}
      {children}
    </Root>
  );
}
