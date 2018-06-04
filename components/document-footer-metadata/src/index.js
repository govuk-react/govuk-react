// https://govuk-static.herokuapp.com/component-guide/document_footer

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import UnorderedList from '@govuk-react/unordered-list';
import { NTA_LIGHT } from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const StyledContainer = styled('div')({
  fontFamily: NTA_LIGHT,
});

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
 * ```jsx
 * import { asAnchor } from '@govuk-react/hoc';
 *
 * const AnchorTag = asAnchor('a');
 * const fromData = [
 *   <AnchorTag href="/government/organisations/ministry-of-defence">
 *     Ministry of Defence
 *   </AnchorTag>,
 * ];
 *
 * <DocumentFooterMetadata from={fromData} />
 * ```
 *
 *
 * DFM From & part of example
 * ```jsx
 * import { asAnchor } from '@govuk-react/hoc';
 * const AnchorTag = asAnchor('a');
 *
 * const fromData = [
 *   <AnchorTag href="/government/organisations/ministry-of-defence">
 *     Ministry of Defence
 *   </AnchorTag>,
 * ];
 *
 * const partOfData = [
 *   <AnchorTag href="/government/topics/energy">Energy</AnchorTag>,
 *   <AnchorTag href="/government/topics/environment">Environment</AnchorTag>,
 * ];
 *
 * <DocumentFooterMetadata from={fromData} partOf={partOfData} />
 * ```
 *
 *
 * DFM From & other data example
 * ```jsx
 * import { asAnchor } from '@govuk-react/hoc';
 * const AnchorTag = asAnchor('a');
 *
 * const fromData = [
 *   <AnchorTag href="/government/organisations/ministry-of-defence">
 *     Ministry of Defence
 *   </AnchorTag>,
 * ];
 *
 * const otherData = [
 *   {
 *     id: 0,
 *     title: 'Consultation type',
 *     content: <AnchorTag href="/government/publications">Open</AnchorTag>,
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
 * - https://govuk-static.herokuapp.com/component-guide/document_footer
 */
const DocumentFooterMetadata = ({
  from, partOf, other, ...props
}) => {
  const fromData = (
    <StyledContainer {...props}>
      {from &&
        <div>
          <p style={{ marginBottom: 0 }}>From:</p>
          <UnorderedList listStyleType="none">
            {from && from.map((child, i) => (
              /* eslint-disable react/no-array-index-key */
              <StyledDefinition key={i}>{child}</StyledDefinition>
              /* eslint-enable react/no-array-index-key */
              ))}
          </UnorderedList>
        </div>}
    </StyledContainer>
  );

  const partOfData = (
    <StyledContainer>
      {partOf &&
        <div>
          <p style={{ marginBottom: 0 }}>Part of:</p>
          <UnorderedList listStyleType="none">
            {partOf && partOf.map((child, i) => (
              <StyledDefinition key={child.key || i}>{child}</StyledDefinition>
              ))
            }
          </UnorderedList>
        </div>}
    </StyledContainer>
  );

  const otherData = (
    <StyledContainer>
      {other && other.map(item =>
        (
          <div key={item.id}>
            <p style={{ marginBottom: 0 }}>{item.title}:</p>
            <UnorderedList listStyleType="none">
              <StyledDefinition>
                {item.content}
              </StyledDefinition>
            </UnorderedList>
          </div>
          ))}
    </StyledContainer>
  );

  return (
    <div>
      {fromData}
      {partOfData}
      {otherData}
    </div>
  );
};

DocumentFooterMetadata.defaultProps = {
  from: undefined,
  partOf: undefined,
  other: undefined,
};

DocumentFooterMetadata.propTypes = {
  from: PropTypes.arrayOf(PropTypes.node),
  partOf: PropTypes.arrayOf(PropTypes.node),
  other: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.node,
  })),
};

export default withWhiteSpace({ marginBottom: 0 })(DocumentFooterMetadata);
