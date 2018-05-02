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

const DocumentFooterMetadata = ({ from, partOf, other }) => {
  const fromData = (
    <StyledContainer>
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
