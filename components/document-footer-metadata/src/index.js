// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const DocumentFooterMetadataInner = glamorous.div({
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
});

const DocumentFooterMetadata = ({ from, partOf, other }) => (
  <DocumentFooterMetadataInner>
    {from.length && from.map ? (
      from.map((child, i) => (
        <span key={child.key || i}>{child}</span>
      ))
    ) : (
      <span>{from}</span>
    )}
  </DocumentFooterMetadataInner>
);

DocumentFooterMetadata.defaultProps = {
  from: undefined,
};

DocumentFooterMetadata.propTypes = {
  from: PropTypes.shape({}),
};

export default DocumentFooterMetadata;
