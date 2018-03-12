// https://govuk-static.herokuapp.com/component-guide/document_footer

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import UnorderedList from '@govuk-react/unordered-list';

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
    <div>
      {from && <p style={{ marginBottom: 0 }}>From:</p>}
      <UnorderedList listStyleType="none">
        {from && from.map((child, i) => (
          <Definition key={child.key || i}>{child}</Definition>
          ))}
      </UnorderedList>
    </div>
  );

  const partOfData = (
    <div>
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
    </div>
  );

  const otherData = (
    <div>
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
    </div>
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
  from: PropTypes.array,
  partOf: PropTypes.array,
  other: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default DocumentFooterMetadata;
