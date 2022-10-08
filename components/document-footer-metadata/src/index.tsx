/**
 * ### References:
 *
 * - https://components.publishing.service.gov.uk/component-guide/document_list
 * - https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/docs/metadata.yml
 * - https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/metadata.raw.html.erb
 */

import * as React from 'react';
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

const StyledParagraph = styled('p')({
  marginBottom: 0,
});

/**
 * An ordered list of documents including a document type, when updated and a link.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/document-footer-metadata
 * - https://components.publishing.service.gov.uk/component-guide/document_list
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
          <StyledParagraph>From:</StyledParagraph>
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
          <StyledParagraph>Part of:</StyledParagraph>
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
            <StyledParagraph>{item.title}:</StyledParagraph>
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

export interface DocumentFooterMetadataProps {
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
