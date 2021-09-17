import React from 'react';
import styled from 'styled-components';
import UnorderedList from '@govuk-react/unordered-list';
import { NTA_LIGHT } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const StyledContainer = styled('div')({ fontFamily: NTA_LIGHT }, spacing.withWhiteSpace());

const StyledDefinition = styled('li')({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: 1.25,
  '> a': {
    textDecoration: 'none',
  },
});

/**
 *
 * ### Usage
 *
 *
 * Simple
 *
 * ```jsx
 * import { DocumentFooterMetadata, Link } from 'govuk-react'
 *
 * const fromData = [
 *   <Link href="/government/organisations/ministry-of-defence">
 *     Ministry of Defence
 *   </Link>,
 * ];
 *
 * <DocumentFooterMetadata from={fromData} />
 * ```
 *
 *
 * DFM From & part of example
 *
 * ```jsx
 * import { DocumentFooterMetadata, Link } from 'govuk-react'
 *
 * const fromData = [
 *   <Link href="/government/organisations/ministry-of-defence">
 *     Ministry of Defence
 *   </Link>,
 * ];
 * const partOfData = [
 *   <Link href="/government/topics/energy">Energy</Link>,
 *   <Link href="/government/topics/environment">Environment</Link>,
 * ];
 *
 * <DocumentFooterMetadata from={fromData} partOf={partOfData} />
 * ```
 *
 *
 * DFM From & other data example
 *
 * ```jsx
 * import { DocumentFooterMetadata, Link } from 'govuk-react'
 *
 * const fromData = [
 *   <Link href="/government/organisations/ministry-of-defence">
 *     Ministry of Defence
 *   </Link>,
 * ];
 * const otherData = [
 *   {
 *     id: 0,
 *     title: 'Consultation type',
 *     content: <Link href="/government/publications">Open</Link>,
 *   },
 *   {
 *     id: 1,
 *     title: 'Published',
 *     content: '20 January 2012',
 *   },
 * ];
 *
 * <DocumentFooterMetadata from={fromData} other={otherData} />
 * ```
 *
 * ### References:
 *
 * - https://govuk-static.herokuapp.com/component-guide/document_footer
 */
export const DocumentFooterMetadata: React.FC<DocumentFooterMetadataProps> = ({
  from = undefined,
  partOf = undefined,
  other = undefined,
  ...props
}: DocumentFooterMetadataProps) => {
  const fromData = (
    <StyledContainer>
      {from && (
        <div>
          <p style={{ marginBottom: 0 }}>From:</p>
          <UnorderedList listStyleType="none">
            {from &&
              from.map((child, i) => (
                /* eslint-disable react/no-array-index-key */
                <StyledDefinition key={i}>{child}</StyledDefinition>
                /* eslint-enable react/no-array-index-key */
              ))}
          </UnorderedList>
        </div>
      )}
    </StyledContainer>
  );

  const partOfData = (
    <StyledContainer>
      {partOf && (
        <div>
          <p style={{ marginBottom: 0 }}>Part of:</p>
          <UnorderedList listStyleType="none">
            {Array.isArray(partOf) &&
              React.Children.map(partOf, (child, i) => <StyledDefinition>{child}</StyledDefinition>)}
          </UnorderedList>
        </div>
      )}
    </StyledContainer>
  );

  const otherData = (
    <StyledContainer>
      {other &&
        other.map((item) => (
          <div key={item.id}>
            <p style={{ marginBottom: 0 }}>{item.title}:</p>
            <UnorderedList listStyleType="none">
              <StyledDefinition>{item.content}</StyledDefinition>
            </UnorderedList>
          </div>
        ))}
    </StyledContainer>
  );

  return (
    <StyledContainer {...props}>
      {fromData}
      {partOfData}
      {otherData}
    </StyledContainer>
  );
};

DocumentFooterMetadata.defaultProps = {
  from: undefined,
  partOf: undefined,
  other: undefined,
};

DocumentFooterMetadata.displayName = 'DocumentFooterMetadata';

interface DocumentFooterMetadataProps {
  /**
   * Array of JSX nodes to render underneath the `from:` title
   */
  from?: React.ReactNode[];
  /**
   * Array of JSX nodes to render underneath the `part of:` title
   */
  partOf?: React.ReactNode[];
  /* eslint-disable max-len */
  /**
   * Array of Objects for any additional items, each object should contain an `id`, `title` and `content` property
   */
  /* eslint-enable max-len */
  other?: {
    id?: number;
    title?: string;
    content?: React.ReactNode;
  }[];
}

export default DocumentFooterMetadata;
