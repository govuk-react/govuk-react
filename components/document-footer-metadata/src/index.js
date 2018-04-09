// https://govuk-static.herokuapp.com/component-guide/document_footer

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import UnorderedList from '@govuk-react/unordered-list';
import { NTA_LIGHT } from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';

const Wrapper = glamorous.div({
  fontFamily: NTA_LIGHT,
});

const Definition = glamorous.li({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: 1.25,
  '> a': {
    textDecoration: 'none',
  },
});

const DocumentFooterMetadata = ({ from, partOf, other }) => {
  const fromData = (
    <Wrapper>
      {from &&
        <div>
          <p style={{ marginBottom: 0 }}>From:</p>
          <UnorderedList listStyleType="none">
            {from && from.map((child, i) => (
              /* eslint-disable react/no-array-index-key */
              <Definition key={i}>{child}</Definition>
              /* eslint-enable react/no-array-index-key */
              ))}
          </UnorderedList>
        </div>}
    </Wrapper>
  );

  const partOfData = (
    <Wrapper>
      {partOf &&
        <div>
          <p style={{ marginBottom: 0 }}>Part of:</p>
          <UnorderedList listStyleType="none">
            {partOf && partOf.map((child, i) => (
              <Definition key={child.key || i}>{child}</Definition>
              ))
            }
          </UnorderedList>
        </div>}
    </Wrapper>
  );

  const otherData = (
    <Wrapper>
      {other && other.map(item =>
        (
          <div key={item.id}>
            <p style={{ marginBottom: 0 }}>{item.title}:</p>
            <UnorderedList listStyleType="none">
              <Definition>
                {item.content}
              </Definition>
            </UnorderedList>
          </div>
          ))}
    </Wrapper>
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
